import React, { useState } from 'react';
import { Star, MessageSquare, HelpCircle, ChevronDown, ChevronUp, Quote } from 'lucide-react';
import { REVIEWS, FAQS } from '../data/clinicData';

export default function ReviewsSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Reviews */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
              <span>Patient Testimonials</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Hundreds of <span className="text-gradient">Chichawatni Families</span>
            </h2>

            <p className="text-slate-600 text-base">
              Here is what our patients say about their experience at Sardar Medical & Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-medical-200 mb-2" />

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm italic mb-4 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                    <p className="text-xs text-slate-500">{review.location}</p>
                  </div>
                  <span className="text-[11px] font-bold text-medical-700 bg-medical-50 px-2.5 py-1 rounded-full">
                    {review.procedure}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
              <span>Got Questions?</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50"
                  >
                    <span className="text-base">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-medical-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-sm text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
