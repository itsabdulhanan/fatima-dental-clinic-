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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Hospital Location & Directions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Us in <span className="text-gradient">Harappa</span>
          </h2>

          <p className="text-slate-600 text-base">
            Located at HWV5+RGG, Shalimar town, Harappa. Open 24 hours a day, 7 days a week for surgical and emergency care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Quick Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sky-500/20 text-sky-400 rounded-2xl border border-sky-500/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Hospital Address</h3>
                  <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                  <div className="mt-2 text-xs font-mono text-sky-400 bg-slate-800 px-2.5 py-1 rounded-md inline-block">
                    Plus Code: {CLINIC_INFO.locationCode}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow-glow hover:scale-105 transition flex items-center gap-1.5"
                >
                  <Compass className="w-4 h-4" />
                  Open in Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20Fatima%20Surgical%20Hospital,%20I%20need%20location%20directions.`}
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
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">24/7 Direct Contact Phone</h4>
                  <a href={`tel:${CLINIC_INFO.formattedPhone}`} className="text-xl font-black text-slate-900 hover:text-sky-600 transition">
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">Call anytime for emergency or surgical inquiry</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3 border-t border-slate-200">
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-2xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Operating Hours</h4>
                  <p className="text-xs font-bold text-emerald-700">Open 24 Hours • 7 Days a Week</p>
                  <p className="text-xs font-medium text-slate-600">Continuous Emergency & Hospital Service</p>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600" />
                Send Quick Inquiry
              </h3>

              {querySent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Your message has been sent! Our hospital team will call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 0302 6933917)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <textarea
                    rows="3"
                    required
                    placeholder="How can we help you? (e.g. Surgical query, emergency medical help)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2"
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
                title="Fatima Surgical Hospital Location Map"
                src="https://maps.google.com/maps?q=HWV5%2BRGG+Shalimar+town+Harappa&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                <h4 className="text-sm font-black text-white mt-1">Fatima Surgical Hospital</h4>
                <p className="text-xs text-slate-300 mt-0.5">HWV5+RGG, Shalimar town, Harappa</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
