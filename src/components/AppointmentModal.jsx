import React, { useState, useEffect } from 'react';
import { 
  X, Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, 
  Stethoscope, MessageSquare, Printer, Download, Sparkles, ChevronRight, ChevronLeft, ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLINIC_INFO, SERVICES, DOCTORS, WEEKLY_SCHEDULE } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, initialService = null, initialDay = null, onBookingSuccess }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(DOCTORS[0].name);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('11:00 AM');
  
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    notes: ''
  });

  const [confirmedBooking, setConfirmedBooking] = useState(null);

  // Set defaults when opened
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setSelectedService(initialService);
        setStep(2);
      } else {
        setSelectedService(SERVICES[0]);
        setStep(1);
      }

      // Default date to tomorrow if not set
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setSelectedDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [isOpen, initialService, initialDay]);

  if (!isOpen) return null;

  // Available Time Slots based on chosen shift
  const TIME_SLOTS = [
    { time: "10:00 AM", session: "Morning" },
    { time: "10:30 AM", session: "Morning" },
    { time: "11:00 AM", session: "Morning" },
    { time: "11:30 AM", session: "Morning" },
    { time: "12:00 PM", session: "Morning" },
    { time: "12:30 PM", session: "Morning" },
    { time: "01:00 PM", session: "Morning" },
    { time: "05:00 PM", session: "Evening" },
    { time: "05:30 PM", session: "Evening" },
    { time: "06:00 PM", session: "Evening" },
    { time: "06:30 PM", session: "Evening" },
    { time: "07:00 PM", session: "Evening" },
    { time: "07:30 PM", session: "Evening" },
    { time: "08:00 PM", session: "Evening" },
    { time: "08:30 PM", session: "Evening" },
  ];

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!patientInfo.name || !patientInfo.phone) return;

    const bookingRef = 'FSH-' + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id: bookingRef,
      service: selectedService ? selectedService.title : 'General Surgery / Consultation',
      category: selectedService ? selectedService.category : 'surgical',
      doctor: selectedDoctor,
      date: selectedDate,
      timeSlot: selectedSlot,
      patientName: patientInfo.name,
      patientPhone: patientInfo.phone,
      patientAge: patientInfo.age,
      gender: patientInfo.gender,
      notes: patientInfo.notes,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    // Save to LocalStorage
    const existing = JSON.parse(localStorage.getItem('fatima_hospital_bookings') || localStorage.getItem('sardar_clinic_bookings') || '[]');
    const updated = [newBooking, ...existing];
    localStorage.setItem('fatima_hospital_bookings', JSON.stringify(updated));

    setConfirmedBooking(newBooking);
    setStep(4); // Confirmation step

    // Confetti celebration effect!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }
  };

  const generateWhatsAppMessage = (b) => {
    const text = `*APPOINTMENT BOOKING - FATIMA SURGICAL HOSPITAL*\n` +
      `-----------------------------------\n` +
      `*Pass ID*: ${b.id}\n` +
      `*Patient Name*: ${b.patientName}\n` +
      `*Phone*: ${b.patientPhone}\n` +
      `*Service*: ${b.service}\n` +
      `*Doctor*: ${b.doctor}\n` +
      `*Date*: ${b.date}\n` +
      `*Time Slot*: ${b.timeSlot}\n` +
      `-----------------------------------\n` +
      `Please confirm my appointment slot. Thank you!`;

    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-medical text-white flex items-center justify-center shadow-glow shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Online Appointment & Consultation
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {CLINIC_INFO.name}
            </h2>
          </div>
        </div>

        {/* Stepper Header (Only for Steps 1-3) */}
        {step < 4 && (
          <div className="flex items-center justify-between gap-2 mb-8 bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
            <div className={`flex-1 text-center py-1.5 rounded-xl text-xs font-extrabold transition ${
              step === 1 ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
            }`}>
              1. Select Service
            </div>
            <div className={`flex-1 text-center py-1.5 rounded-xl text-xs font-extrabold transition ${
              step === 2 ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
            }`}>
              2. Date & Time Slot
            </div>
            <div className={`flex-1 text-center py-1.5 rounded-xl text-xs font-extrabold transition ${
              step === 3 ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600'
            }`}>
              3. Patient Details
            </div>
          </div>
        )}

        {/* STEP 1: Select Service & Doctor */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Choose Surgical or Medical Service:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-1">
                {SERVICES.map((srv) => {
                  const isSelected = selectedService?.id === srv.id;
                  return (
                    <div
                      key={srv.id}
                      onClick={() => setSelectedService(srv)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                        isSelected 
                          ? 'border-sky-500 bg-sky-50/80 shadow-sm font-semibold' 
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">
                          {srv.category === 'surgical' ? '✂️' : srv.category === 'emergency' ? '🚑' : '🩺'}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{srv.title}</div>
                          <div className="text-[10px] text-slate-500">
                            {srv.category === 'surgical' ? 'Surgical Unit' : srv.category === 'emergency' ? '24/7 Emergency' : 'General Medicine'}
                          </div>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Consulting Specialist:
              </label>
              <select
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-medical-500"
              >
                {DOCTORS.map(d => (
                  <option key={d.id} value={d.name}>{d.name} ({d.title})</option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedService}
                className="px-6 py-3 bg-gradient-medical text-white font-bold text-sm rounded-xl shadow-glow hover:scale-105 transition flex items-center gap-2 disabled:opacity-50"
              >
                Next: Select Date & Time Slot
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Select Date & Time Slot */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Appointment Date:
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Fatima Surgical Hospital is open 24 Hours a day, 7 days a week.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Select Preferred Time Slot:
              </label>

              <div className="space-y-3">
                <div className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                  ☀️ Morning Shift Slots (10:00 AM - 02:00 PM)
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.filter(s => s.session === 'Morning').map(s => (
                    <button
                      key={s.time}
                      type="button"
                      onClick={() => setSelectedSlot(s.time)}
                      className={`py-2 rounded-xl text-xs font-bold transition border ${
                        selectedSlot === s.time
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.time}
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md inline-block mt-2">
                  🌙 Evening Shift Slots (05:00 PM - 09:00 PM)
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.filter(s => s.session === 'Evening').map(s => (
                    <button
                      key={s.time}
                      type="button"
                      onClick={() => setSelectedSlot(s.time)}
                      className={`py-2 rounded-xl text-xs font-bold transition border ${
                        selectedSlot === s.time
                          ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {s.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-gradient-medical text-white font-bold text-sm rounded-xl shadow-glow hover:scale-105 transition flex items-center gap-2"
              >
                Next: Enter Patient Info
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Patient Information Form */}
        {step === 3 && (
          <form onSubmit={handleConfirmBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Full Patient Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Muhammad Usman"
                value={patientInfo.name}
                onChange={(e) => setPatientInfo({ ...patientInfo, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0321 1234567"
                  value={patientInfo.phone}
                  onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-medical-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Age & Gender
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Age"
                    value={patientInfo.age}
                    onChange={(e) => setPatientInfo({ ...patientInfo, age: e.target.value })}
                    className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                  <select
                    value={patientInfo.gender}
                    onChange={(e) => setPatientInfo({ ...patientInfo, gender: e.target.value })}
                    className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-medical-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Child">Child</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Reason for Visit / Symptoms (Optional)
              </label>
              <textarea
                rows="2"
                placeholder="Describe your tooth problem, cavity, braces inquiry, or general fever..."
                value={patientInfo.notes}
                onChange={(e) => setPatientInfo({ ...patientInfo, notes: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500"
              ></textarea>
            </div>

            {/* Summary Box */}
            <div className="bg-medical-50 p-4 rounded-2xl border border-medical-200 text-xs space-y-1">
              <div className="font-extrabold text-medical-800">Booking Summary:</div>
              <div className="text-slate-700">
                Service: <strong className="text-slate-900">{selectedService?.title}</strong>
              </div>
              <div className="text-slate-700">
                Date & Time: <strong className="text-slate-900">{selectedDate} at {selectedSlot}</strong>
              </div>
              <div className="text-slate-700">
                Consultant: <strong className="text-slate-900">{selectedDoctor}</strong>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-5 py-2.5 bg-slate-100 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-200 transition flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-gradient-medical text-white font-extrabold text-sm rounded-xl shadow-glow hover:scale-105 transition flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                Confirm & Generate Pass Ticket
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Instant Confirmation Ticket / Pass */}
        {step === 4 && confirmedBooking && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Appointment Confirmed!</h3>
              <p className="text-xs text-slate-500">Your appointment ticket pass has been generated successfully.</p>
            </div>

            {/* Visual Pass Card */}
            <div className="bg-gradient-to-br from-slate-900 to-navy-950 text-white rounded-3xl p-6 shadow-2xl border border-slate-700 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-4">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-medical-400">Clinic Appointment Pass</div>
                  <h4 className="text-lg font-black text-white">{CLINIC_INFO.name}</h4>
                </div>
                <div className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono font-bold border border-emerald-500/40">
                  {confirmedBooking.id}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">Patient Name</span>
                  <span className="font-extrabold text-white text-sm">{confirmedBooking.patientName}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Phone Number</span>
                  <span className="font-extrabold text-white text-sm">{confirmedBooking.patientPhone}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Date & Shift Slot</span>
                  <span className="font-extrabold text-emerald-400">{confirmedBooking.date} • {confirmedBooking.timeSlot}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-medium block">Treatment / Specialty</span>
                  <span className="font-extrabold text-medical-300">{confirmedBooking.service}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>📍 {CLINIC_INFO.address}</span>
                <span>📞 {CLINIC_INFO.phone}</span>
              </div>
            </div>

            {/* Actions: Send via WhatsApp & Print */}
            <div className="space-y-3">
              <a
                href={generateWhatsAppMessage(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Send Confirmation Pass to WhatsApp ({CLINIC_INFO.phone})
              </a>

              <div className="flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <Printer className="w-4 h-4" /> Print Pass
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition"
                >
                  Done
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
