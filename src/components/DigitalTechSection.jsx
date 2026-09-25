import React from 'react';
import { Cpu, ShieldCheck, Sparkles, CheckCircle2, Zap, Lock } from 'lucide-react';

export default function DigitalTechSection({ onOpenBooking }) {
  return (
    <section id="digital-tech" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-2xl">
              <img
                src="/assets/digital_instruments.png"
                alt="Fatima Surgical Hospital Modern OT Facility"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-slate-700 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-sky-400" />
                <div>
                  <div className="text-xs font-black text-white">STERILE SURGICAL OT & INSTRUMENTS</div>
                  <div className="text-[10px] text-slate-300">Modern Healthcare Facility in Harappa</div>
                </div>
              </div>

              <div className="p-6 bg-slate-900/90 border-t border-slate-700/80 space-y-3">
                <blockquote className="text-sm font-semibold italic text-sky-200 border-l-4 border-sky-500 pl-3">
                  "24/7 Dedicated surgical attention & patient care in Shalimar town."
                </blockquote>
                <p className="text-xs text-slate-400">
                  Our modern surgical hospital infrastructure ensures strict sterilization protocols, continuous monitoring, and quick operative recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Digital Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Hospital Infrastructure & Hygiene</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Modern Surgical OT & <span className="text-sky-400">Strict Sterilization Protocol</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Fatima Surgical Hospital upholds high clinical sterilization standards. Every surgical pack, dressing, and instrument is processed under high-pressure autoclave sterilization for 100% patient safety.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-sky-500/20 text-sky-400 rounded-xl shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Sterile Operation Theater (OT)</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sealed, sanitized surgical environment for general and laparoscopic operative procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">24/7 Emergency Patient Monitoring</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Round-the-clock vital monitoring, oxygen support, and emergency medical triage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="p-2.5 bg-indigo-500/20 text-indigo-400 rounded-xl shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Ultra-Clean Post-Operative Ward</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Hygienic patient recovery rooms with attentive nursing and round-the-clock physician care.
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-xl shadow-glow transition"
              >
                Book Consultation / Emergency Slot
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

