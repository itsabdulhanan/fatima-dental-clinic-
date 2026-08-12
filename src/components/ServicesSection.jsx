import React, { useState } from 'react';
import { 
  Sparkles, Scissors, Activity, ShieldCheck, Sun, CheckCircle2, 
  Cpu, Stethoscope, HeartHandshake, ArrowRight, Check, Calendar, Info 
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';

const ICON_MAP = {
  Sparkles: Sparkles,
  Scissors: Scissors,
  Activity: Activity,
  ShieldCheck: ShieldCheck,
  Sun: Sun,
  CheckCircle2: CheckCircle2,
  Cpu: Cpu,
  Stethoscope: Stethoscope,
  HeartHandshake: HeartHandshake,
};

export default function ServicesSection({ onSelectServiceForBooking }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedModalService, setSelectedModalService] = useState(null);

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-navy-600" />
            <span>Comprehensive Medical & Dental Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Specialized <span className="text-gradient">Treatment & Services</span>
          </h2>

          <p className="text-slate-600 text-base">
            Equipped with 100% digital instruments, we protect your teeth for good food chewing & digestion, and provide expert health consultation in Chichawatni.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'all' 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Treatments ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab('dental')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'dental' 
                  ? 'bg-medical-600 text-white shadow-glow' 
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>🦷 Dental Care</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-white/20">7</span>
            </button>
            <button
              onClick={() => setActiveTab('medical')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'medical' 
                  ? 'bg-navy-600 text-white shadow-md' 
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>🩺 Health Consultant</span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-white/20">2</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.icon] || Activity;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Popular Ribbon */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-300/60 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Popular Treatment
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-medical-50 border border-medical-100 text-medical-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-medical group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Category Badge */}
                  <div className="text-[11px] font-bold uppercase tracking-wider text-medical-600 mb-1">
                    {service.category === 'dental' ? 'Dental Specialty' : 'Health Consultant'}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-medical-600 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits Bullets */}
                  <div className="space-y-2 mb-6">
                    {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 transition"
                  >
                    <Info className="w-3.5 h-3.5" />
                    Details
                  </button>

                  <button
                    onClick={() => onSelectServiceForBooking(service)}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-medical-600 text-white rounded-xl font-bold text-xs shadow-sm transition flex items-center gap-1.5 group-hover:bg-gradient-medical"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Service
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-fadeIn space-y-5">
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-medical text-white flex items-center justify-center shadow-glow shrink-0">
                {React.createElement(ICON_MAP[selectedModalService.icon] || Activity, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-medical-600">
                  {selectedModalService.category === 'dental' ? 'Dental Specialty' : 'Health Consultant'}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selectedModalService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {selectedModalService.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-2xl space-y-2 border border-slate-200">
              <h4 className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">Key Treatment Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedModalService.keyBenefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-slate-500">
              <span>Duration: <strong className="text-slate-800">{selectedModalService.estimatedDuration}</strong></span>
              <span>Sterilization: <strong className="text-emerald-600">100% Digital Autoclave</strong></span>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  const s = selectedModalService;
                  setSelectedModalService(null);
                  onSelectServiceForBooking(s);
                }}
                className="w-full py-3 bg-gradient-medical text-white rounded-xl font-bold text-sm shadow-glow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Proceed to Book Appointment
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
