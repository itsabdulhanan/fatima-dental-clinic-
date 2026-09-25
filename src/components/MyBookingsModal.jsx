import React, { useState, useEffect } from 'react';
import { X, BookmarkCheck, Trash2, MessageSquare, Calendar, Clock, Phone, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MyBookingsModal({ isOpen, onClose }) {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const saved = JSON.parse(localStorage.getItem('fatima_hospital_bookings') || localStorage.getItem('sardar_clinic_bookings') || '[]');
      setBookings(saved);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment pass?")) {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('fatima_hospital_bookings', JSON.stringify(updated));
    }
  };

  const generateWhatsAppMessage = (b) => {
    const text = `*APPOINTMENT INQUIRY - FATIMA SURGICAL HOSPITAL*\n` +
      `*Pass ID*: ${b.id}\n` +
      `*Patient Name*: ${b.patientName}\n` +
      `*Service*: ${b.service}\n` +
      `*Date & Time*: ${b.date} at ${b.timeSlot}`;
    return `https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 animate-fadeIn space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-12 h-12 rounded-2xl bg-medical-50 border border-medical-200 text-medical-600 flex items-center justify-center shrink-0">
            <BookmarkCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              My Saved Appointments
            </h2>
            <p className="text-xs text-slate-500">Manage your active clinic bookings</p>
          </div>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-10 space-y-3">
            <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">No Appointments Found</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              You haven't booked any online appointments yet. Click "Book Appointment" to reserve a slot.
            </p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
            {bookings.map((b) => (
              <div
                key={b.id}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-slate-200 px-2 py-0.5 rounded text-slate-800">
                    {b.id}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {b.status || 'Confirmed'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-medium block">Patient Name:</span>
                    <span className="font-bold text-slate-900">{b.patientName}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 font-medium block">Service:</span>
                    <span className="font-bold text-medical-700">{b.service}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 font-medium block">Date & Time:</span>
                    <span className="font-bold text-slate-900">{b.date} • {b.timeSlot}</span>
                  </div>

                  <div>
                    <span className="text-slate-500 font-medium block">Doctor:</span>
                    <span className="font-bold text-slate-900">{b.doctor}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2">
                  <a
                    href={generateWhatsAppMessage(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Sync WhatsApp
                  </a>

                  <button
                    onClick={() => handleCancel(b.id)}
                    className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Cancel Pass
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
