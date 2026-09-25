import React from 'react';
import { Stethoscope, MapPin, Phone, Clock, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1 & 2: Hospital Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-sky-600 p-0.5 shadow-glow">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white">
                  <span className="text-lg">🏥</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white">{CLINIC_INFO.name}</h3>
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider">Harappa, Punjab</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Providing 24/7 round-the-clock emergency medical services, laparoscopic and general surgery, outpatient consultation, and specialized hospital healthcare in Shalimar town, Harappa.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Sterile Operation Theater • Open 24 Hours</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400">Quick Links</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#timings" className="hover:text-white transition">24/7 Schedule</a></li>
              <li><a href="#services" className="hover:text-white transition">Surgical Unit</a></li>
              <li><a href="#services" className="hover:text-white transition">Emergency Care</a></li>
              <li><a href="#digital-tech" className="hover:text-white transition">Hospital Infrastructure</a></li>
              <li><a href="#doctors" className="hover:text-white transition">Our Doctors</a></li>
              <li><a href="#contact" className="hover:text-white transition">Location & Directions</a></li>
            </ul>
          </div>

          {/* Col 4: Operational Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400">Hospital Operational Hours</h4>
            <div className="space-y-2 text-xs text-slate-300 font-medium">
              <div>
                <strong className="text-white block font-bold">Emergency & Surgical Unit:</strong>
                <span className="text-emerald-400 font-bold">Open 24 Hours / 7 Days</span>
              </div>
              <div>
                <strong className="text-white block font-bold">Opd Consultation:</strong>
                <span className="text-slate-400">Continuous Duty Shift</span>
              </div>
              <div>
                <strong className="text-amber-400 block font-bold">Sunday Duty:</strong>
                <span className="text-slate-400">Fully Functional 24/7</span>
              </div>
            </div>
          </div>

          {/* Col 5: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-sky-400">Contact Hospital</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.formattedPhone}`} className="hover:text-white font-bold text-white">
                  {CLINIC_INFO.phone}
                </a>
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow transition mt-2"
            >
              Book Online Consultation
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Fatima Surgical Hospital. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Harappa Community
          </p>
        </div>

      </div>
    </footer>
  );
}
