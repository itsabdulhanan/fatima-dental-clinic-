import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle, Sun, Moon, ArrowRight } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data/clinicData';

export default function TimingsSection({ onSelectDayForBooking }) {
  const [currentDayName, setCurrentDayName] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const today = dayNames[now.getDay()];
    setCurrentDayName(today);
    setSelectedDay(today);
  }, []);

  return (
    <section id="timings" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-wide">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Hospital Operational Hours</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            24/7 Round-the-Clock Emergency & Surgical Duty
          </h2>

          <p className="text-slate-600 text-base">
            Fatima Surgical Hospital is open 24 hours a day, 7 days a week. Our medical, surgical, and emergency triage team is continuously active for patient care.
          </p>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {WEEKLY_SCHEDULE.map((item) => {
            const isToday = item.day === currentDayName;
            const isSelected = item.day === selectedDay;

            return (
              <button
                key={item.day}
                onClick={() => setSelectedDay(item.day)}
                className={`px-4 py-2 rounded-xl font-bold text-sm transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{item.day}</span>
                {isToday && (
                  <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded font-black">
                    TODAY
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Day Box */}
        {(() => {
          const dayData = WEEKLY_SCHEDULE.find(d => d.day === selectedDay) || WEEKLY_SCHEDULE[0];
          const isToday = dayData.day === currentDayName;

          return (
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-black text-white">{dayData.day} - Open 24 Hours</h3>
                    {isToday && (
                      <span className="bg-emerald-500 text-slate-950 font-extrabold text-xs px-2.5 py-0.5 rounded-full">
                        Active Today
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-xs mt-1">{dayData.statusNote}</p>
                </div>

                <button
                  onClick={() => onSelectDayForBooking(dayData.day)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Slot for {dayData.day}
                </button>
              </div>

              {/* Sessions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                
                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-start gap-3">
                  <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Day Shift</div>
                    <div className="text-base font-extrabold text-white mt-0.5">08:00 AM – 08:00 PM</div>
                    <div className="text-xs text-slate-300 mt-0.5">Opd Consultation & Scheduled Surgeries</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl">
                    <Moon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase">Night Shift</div>
                    <div className="text-base font-extrabold text-white mt-0.5">08:00 PM – 08:00 AM</div>
                    <div className="text-xs text-slate-300 mt-0.5">Emergency Triage & Operative Support</div>
                  </div>
                </div>

                <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                  <div className="text-xs font-bold text-emerald-400 uppercase">Hospital Status</div>
                  <div className="text-xs text-slate-200 mt-1">
                    🏥 Department: <strong className="text-white">Hospital Department</strong>
                  </div>
                  <div className="text-xs text-slate-200 mt-1">
                    📞 Emergency Contact: <strong className="text-white">0302 6933917</strong>
                  </div>
                </div>

              </div>

            </div>
          );
        })()}

        {/* Full Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-6">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-600" />
            24-Hour Duty & Availability Overview
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-extrabold text-slate-500 uppercase">
                  <th className="py-3 px-3">Day</th>
                  <th className="py-3 px-3">Hospital Hours</th>
                  <th className="py-3 px-3">Emergency Unit</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium">
                {WEEKLY_SCHEDULE.map((s) => {
                  const isToday = s.day === currentDayName;

                  return (
                    <tr 
                      key={s.day} 
                      className={isToday ? 'bg-sky-50 font-bold' : 'hover:bg-white'}
                    >
                      <td className="py-3 px-3 font-extrabold text-slate-900 flex items-center gap-2">
                        {s.day}
                        {isToday && (
                          <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded uppercase">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-slate-700">
                        Open 24 Hours
                      </td>
                      <td className="py-3 px-3 text-slate-700">
                        24/7 Active Duty
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Open 24/7
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button
                          onClick={() => onSelectDayForBooking(s.day)}
                          className="text-xs font-bold text-sky-700 hover:underline inline-flex items-center gap-1"
                        >
                          Book Slot <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
