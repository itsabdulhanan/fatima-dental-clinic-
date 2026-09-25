import React from 'react';
import { Award, Clock, CheckCircle2, Calendar, Stethoscope, Star } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';

export default function DoctorsSection({ onOpenBooking }) {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-medical-600" />
            <span>Qualified Healthcare Professionals</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our <span className="text-gradient">Doctors & Specialists</span>
          </h2>

          <p className="text-slate-600 text-base">
            Our experienced surgical consultants, general physicians, and 24/7 duty medical officers are dedicated to providing compassionate, precise healthcare at Fatima Surgical Hospital.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md border-2 border-white shrink-0"
                  />

                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-medical-600 bg-medical-100 px-2.5 py-0.5 rounded-md">
                      {doctor.experience}
                    </span>
                    
                    <h3 className="text-xl font-extrabold text-slate-900 mt-2">{doctor.name}</h3>
                    <p className="text-xs font-bold text-slate-700">{doctor.title}</p>
                    <p className="text-xs font-semibold text-slate-500 mt-1">{doctor.qualification}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 bg-white p-4 rounded-2xl border border-slate-200/60">
                  "{doctor.bio}"
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">Key Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {doctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white text-slate-700 font-semibold px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 mb-6 bg-medical-50/80 p-3 rounded-xl border border-medical-100">
                  <Clock className="w-4 h-4 text-medical-600 shrink-0" />
                  <span>Consulting Hours: {doctor.timing}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 bg-slate-900 hover:bg-medical-600 text-white rounded-xl font-bold text-xs shadow-sm transition flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation with Doctor
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
