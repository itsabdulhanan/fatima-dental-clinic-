import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, ExternalLink, Compass } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactSection() {
  const [querySent, setQuerySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySent(true);
    setTimeout(() => {
      setQuerySent(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-medical-50 border border-medical-200 text-medical-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-medical-600" />
            <span>Clinic Location & Reachability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Us in <span className="text-gradient">Chichawatni</span>
          </h2>

          <p className="text-slate-600 text-base">
            Easily accessible at Gujjar Chowk, Block 14. Walk in during operational hours or call us for immediate directions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Quick Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-medical-500/20 text-medical-400 rounded-2xl border border-medical-500/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Clinic Address</h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <div className="mt-2 text-xs font-mono text-medical-400 bg-slate-800 px-2.5 py-1 rounded-md inline-block">
                    Plus Code: {CLINIC_INFO.locationCode}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-medical text-white font-bold text-xs rounded-xl shadow-glow hover:scale-105 transition flex items-center gap-1.5"
                >
                  <Compass className="w-4 h-4" />
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Sardar%20Clinic,%20I%20need%20location%20directions.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Map
                </a>
              </div>
            </div>

            {/* Direct Phone & Hours Card */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Direct Contact Phone</h4>
                  <a href={`tel:${CLINIC_INFO.formattedPhone}`} className="text-xl font-black text-slate-900 hover:text-medical-600 transition">
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">Call for immediate inquiry or appointment assistance</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
                <div className="p-3 bg-navy-100 text-navy-700 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Daily Consultation Shifts</h4>
                  <p className="text-xs font-bold text-slate-800">Mon - Sat: 10am-2pm & 5pm-9pm</p>
                  <p className="text-xs font-bold text-amber-700">Sunday: Emergency & On-Call</p>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-medical-600" />
                Send Quick Inquiry
              </h3>

              {querySent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Your message has been sent! Our team will call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 0300 1234567)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500"
                  />
                  <textarea
                    rows="3"
                    required
                    placeholder="How can we help you? (e.g. Toothache, Braces price query)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-medical-500"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-medical-600 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 h-full min-h-[450px]">
            <div className="w-full h-full min-h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
              
              <iframe
                title="Sardar Medical & Dental Clinic Location Map"
                src="https://maps.google.com/maps?q=Chichawatni%20Block%2014%20Gujjar%20Chowk&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[480px] border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-700 shadow-xl max-w-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Exact Location</span>
                </div>
                <h4 className="text-sm font-black text-white mt-1">Sardar Medical & Dental Clinic</h4>
                <p className="text-xs text-slate-300 mt-0.5">Block 14, St 2 Gujjar Chowk, Chichawatni</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
