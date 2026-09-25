import React, { useState, useEffect } from 'react';
import { Phone, Clock, Calendar, MapPin, Menu, X, Stethoscope, BookmarkCheck, MessageSquare } from 'lucide-react';
import { CLINIC_INFO, WEEKLY_SCHEDULE } from '../data/clinicData';

export default function Header({ onOpenBooking, onOpenMyBookings, bookedCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);
  const [statusText, setStatusText] = useState('Checking Status...');

  // Live Open/Closed Calculation (Hospital is Open 24/7)
  useEffect(() => {
    setIsOpenNow(true);
    setStatusText("Open 24 Hours • 24/7 Surgical & Emergency Care");
  }, []);

  return (
    <header className="w-full font-sans">
      
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
            {/* Live Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {statusText}
            </span>

            <span className="hidden md:inline text-slate-600">•</span>

            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {CLINIC_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href={`tel:${CLINIC_INFO.formattedPhone}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Call: <span className="font-extrabold text-white">{CLINIC_INFO.phone}</span>
            </a>

            <a 
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Fatima%20Surgical%20Hospital,%20I%20want%20to%20inquire%20about%20treatment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            {bookedCount > 0 && (
              <button
                onClick={onOpenMyBookings}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-sky-600 hover:bg-sky-500 text-white rounded-full font-bold text-[11px] transition"
              >
                <BookmarkCheck className="w-3.5 h-3.5" />
                My Pass ({bookedCount})
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Main White Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Hospital Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-sky-700 transition">
              🏥
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight block leading-none">
                {CLINIC_INFO.name}
              </span>
              <span className="text-xs font-semibold text-sky-700 mt-0.5 block">
                Hospital Department • Open 24 Hours • Harappa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
            <a href="#hero" className="hover:text-sky-600 transition">Home</a>
            <a href="#timings" className="hover:text-sky-600 transition flex items-center gap-1">
              <Clock className="w-4 h-4 text-sky-600" />
              24/7 Schedule
            </a>
            <a href="#services" className="hover:text-sky-600 transition">Services</a>
            <a href="#digital-tech" className="hover:text-sky-600 transition">Sterile Tech</a>
            <a href="#doctors" className="hover:text-sky-600 transition">Doctors</a>
            <a href="#contact" className="hover:text-sky-600 transition">Location</a>
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm shadow-sm hover:shadow transition flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-lg bg-sky-600 text-white font-bold text-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 font-semibold text-sm">
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800">Home</a>
            <a href="#timings" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800">Day-Wise Timings</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800">Dental Care & Services</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800">Our Doctors</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-800">Location & Directions</a>

            {bookedCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMyBookings();
                }}
                className="w-full py-2 bg-slate-100 text-slate-800 rounded-xl font-bold text-xs"
              >
                View Saved Pass ({bookedCount})
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 bg-sky-600 text-white rounded-xl font-bold text-sm"
            >
              Book Online Appointment
            </button>
          </div>
        )}

      </nav>

    </header>
  );
}
