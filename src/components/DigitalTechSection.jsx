import React from 'react';
import { Cpu, ShieldCheck, Sparkles, CheckCircle2, Zap, Lock } from 'lucide-react';

export default function DigitalTechSection({ onOpenBooking }) {
  return (
    <section id="digital-tech" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-medical-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl">
              <img
                src="/assets/digital_instruments.png"
                alt="100% Digital Instrument Care Sardar Dental Clinic"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-700 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-medical-400" />
                <div>
                  <div className="text-xs font-black text-white">ALL DIGITAL INSTRUMENTS</div>
                  <div className="text-[10px] text-slate-300">Modern Technology in Chichawatni</div>
                </div>
              </div>

              <div className="p-6 bg-slate-900/90 border-t border-slate-700/80 space-y-3">
                <blockquote className="text-sm font-semibold italic text-medical-200 border-l-4 border-medical-500 pl-3">
                  "Protect your teeth for good food chewing and digestion in stomach."
                </blockquote>
                <p className="text-xs text-slate-400">
                  Proper dental health is essential for complete digestive health. Our digital technology ensures accurate diagnosis, painless treatments, and long-lasting smiles.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Digital Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-medical-500/10 border border-medical-500/30 text-medical-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-medical-400" />
              <span>Advanced Hygiene & Technology</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              100% Digital Instruments & <span className="text-gradient-cyan">Autoclave Sterilization</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We uphold international sterilization protocols for patient safety. Every dental instrument undergoes multi-stage ultrasonic cleaning and high-pressure autoclave sterilization before use.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-medical-500/20 text-medical-400 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Autoclave B-Class Sterilization</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Individual sealed instrument pouches opened directly in front of the patient. Zero cross-contamination guarantee.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Digital Apex Locator & Rotary RCT</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Rotary endodontic motors and digital apex measurement ensure 99.8% accurate root canal cleaning in minimal time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-navy-500/20 text-navy-400 rounded-xl shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Low-Radiation Digital Intraoral Radiography</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Instant HD X-ray images on monitor with 90% less radiation exposure than conventional film X-rays.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-gradient-medical text-white font-bold text-sm rounded-xl shadow-glow hover:scale-105 transition"
              >
                Book Appointment with Digital Care
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
