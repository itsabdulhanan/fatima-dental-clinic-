import React from 'react';
import { Calendar, Phone, Clock, MapPin, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="bg-soft-blue py-12 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Human Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-extrabold uppercase tracking-wide">
              <span>📍 {CLINIC_INFO.address}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              24/7 Advanced Surgical Care & <span className="text-sky-600">Hospital Department</span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At <strong className="text-slate-900">{CLINIC_INFO.name}</strong>, we provide round-the-clock emergency medical services, general and laparoscopic surgeries, outpatient consultation, and sterile operative procedures in Shalimar town, Harappa.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-base shadow-sm hover:shadow transition flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment / Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-300 hover:border-slate-400 font-extrabold text-base shadow-sm transition flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call: {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Quick Contact Options */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Fatima%20Surgical%20Hospital,%20I%20want%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                WhatsApp Us (0302 6933917)
              </a>

              <a href="#timings" className="inline-flex items-center gap-1.5 text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200 hover:bg-sky-100 transition">
                <Clock className="w-4 h-4 text-sky-600" />
                Open 24 Hours
              </a>
            </div>

            {/* Honest Stats Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center lg:text-left shadow-sm">
                <div className="text-xl font-extrabold text-amber-500 flex items-center justify-center lg:justify-start gap-1">
                  <span>5.0 ★</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">2 Verified Reviews</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center lg:text-left shadow-sm">
                <div className="text-xl font-extrabold text-sky-600">Open 24/7</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Round-the-Clock</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center lg:text-left shadow-sm">
                <div className="text-xl font-extrabold text-emerald-600">Surgical Care</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Emergency & OT</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center lg:text-left shadow-sm">
                <div className="text-xl font-extrabold text-slate-900">Harappa</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Shalimar town</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hospital Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-xl space-y-3">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/assets/hero_clinic.png"
                  alt="Fatima Surgical Hospital"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Sterile Operation Facility
                </div>
              </div>

              {/* Service Highlights */}
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Hospital Departments & Services:
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Open 24 Hours
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>General Surgery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Emergency Trauma</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Laparoscopic Care</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>General Medicine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Minor Surgery & Suturing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Pediatric Healthcare</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
