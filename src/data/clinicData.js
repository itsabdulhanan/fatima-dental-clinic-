export const CLINIC_INFO = {
  name: "Fatima Surgical Hospital",
  tagline: "24/7 Advanced Surgical & Emergency Healthcare",
  description: "Providing 24-hour round-the-clock surgical care, general medicine, emergency treatment, and specialized healthcare with modern sterile surgical facilities in Harappa.",
  address: "HWV5+RGG, Shalimar town, Harappa",
  phone: "0302 6933917",
  formattedPhone: "+923026933917",
  whatsapp: "923026933917",
  locationCode: "HWV5+RGG",
  city: "Harappa",
  rating: 5.0,
  reviewCount: 2,
  category: "Hospital department",
  googleMapsUrl: "https://maps.google.com/?q=HWV5%2BRGG+Harappa",
};

export const WEEKLY_SCHEDULE = [
  {
    day: "Monday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "02:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Emergency & Operative Surgery Active"
  },
  {
    day: "Tuesday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "02:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 General & Laparoscopic Surgery"
  },
  {
    day: "Wednesday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "02:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Emergency Medical Care"
  },
  {
    day: "Thursday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "02:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Surgical Procedure & Consultation"
  },
  {
    day: "Friday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "01:00 PM", label: "Morning Session" },
      { start: "03:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours (Jumma Break 1:00 PM - 3:00 PM)",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Emergency Care Active"
  },
  {
    day: "Saturday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "08:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "02:00 PM", end: "08:00 PM", label: "Evening Session" },
      { start: "08:00 PM", end: "08:00 AM", label: "Night Emergency" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Surgical Operations & Trauma Unit"
  },
  {
    day: "Sunday",
    isOpen: true,
    is24Hours: true,
    slots: [
      { start: "00:00 AM", end: "11:59 PM", label: "24/7 Emergency Shift" }
    ],
    surgicalConsultant: "Open 24 Hours",
    healthConsultant: "Open 24 Hours",
    statusNote: "24/7 Full Emergency & Surgical Duty"
  }
];

export const SERVICES = [
  {
    id: "general-surgery",
    category: "surgical",
    title: "General & Laparoscopic Surgery",
    shortDesc: "Advanced surgical procedures conducted by senior surgeons using sterile modern operating theaters.",
    description: "Our dedicated surgical unit provides safe, minimally invasive laparoscopic surgeries, appendectomy, hernia repair, and operative surgical care with 24/7 monitoring.",
    icon: "Scissors",
    popular: true,
    estimatedDuration: "As per procedure",
    keyBenefits: ["Modern Sterile Operation Theater", "Post-Operative ICU Support", "Minimally Invasive Techniques", "24/7 Surgeon Availability"]
  },
  {
    id: "emergency-trauma",
    category: "emergency",
    title: "24/7 Emergency & Trauma Care",
    shortDesc: "Immediate medical response and trauma emergency care open 24 hours a day.",
    description: "Equipped with rapid response emergency facilities, trauma care, oxygen supply, and immediate surgical intervention for critical medical situations.",
    icon: "Activity",
    popular: true,
    estimatedDuration: "Immediate / 24 Hours",
    keyBenefits: ["Open 24 Hours", "Immediate Medical Triage", "Emergency Oxygen & Monitoring", "On-Call Emergency Surgeons"]
  },
  {
    id: "medical-consultation",
    category: "medical",
    title: "General Medical Consultation",
    shortDesc: "Expert physician consultation for acute illness, chronic disease, and general health management.",
    description: "Comprehensive medical evaluation for general disease management, hypertension, diabetes control, fever, and routine health checkups.",
    icon: "Stethoscope",
    popular: true,
    estimatedDuration: "20 - 30 mins",
    keyBenefits: ["Senior Medical Specialists", "Detailed Diagnosis & Labs", "Personalized Treatment Plan", "Prescription & Follow-up"]
  },
  {
    id: "pediatric-care",
    category: "medical",
    title: "Pediatric & Family Healthcare",
    shortDesc: "Specialized medical care and emergency attention for infants and children.",
    description: "Dedicated pediatric services offering child health care, growth monitoring, fever management, and routine health checkups in a compassionate environment.",
    icon: "HeartHandshake",
    popular: false,
    estimatedDuration: "20 mins",
    keyBenefits: ["Child-Friendly Physicians", "Pediatric Emergency Attention", "Growth & Vaccination Guidance", "Gentle Treatment"]
  },
  {
    id: "wound-care-minor-surgery",
    category: "surgical",
    title: "Minor Surgery & Wound Management",
    shortDesc: "Clean sterile dressing, suturing, abscess drainage, and minor surgical procedures.",
    description: "Prompt outpatient minor surgical procedures, sterile wound suturing, cyst removal, and post-surgical wound care in ultra-hygienic environment.",
    icon: "ShieldCheck",
    popular: true,
    estimatedDuration: "30 - 45 mins",
    keyBenefits: ["Sterile Antiseptic Protocol", "Painless Local Anesthesia", "Rapid Healing Dressings", "Tetanus & Anti-Infection Care"]
  },
  {
    id: "diagnostic-lab",
    category: "diagnostics",
    title: "In-House Diagnostic Services",
    shortDesc: "Fast and reliable clinical laboratory tests, screening, and diagnostic reporting.",
    description: "Comprehensive laboratory testing to support immediate medical decisions, emergency diagnostics, blood work, and routine pathology screenings.",
    icon: "Cpu",
    popular: false,
    estimatedDuration: "15 - 30 mins",
    keyBenefits: ["Fast Accurate Results", "24/7 Sample Collection", "Clean Hygienic Testing", "Physician Review"]
  }
];

export const DOCTORS = [
  {
    id: "fatima-surgical-team",
    name: "Fatima Surgical & Medical Team",
    title: "Senior Surgical Consultants & Specialists",
    qualification: "MBBS, FCPS (Surgery), MS General Surgery",
    experience: "Open 24/7 Facility",
    specialties: ["General & Emergency Surgery", "Laparoscopic Procedures", "Trauma & Acute Care", "Medical Consultation"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    timing: "Available 24 Hours / 7 Days a Week",
    bio: "Dedicated team of qualified surgeons and physicians providing 24/7 round-the-clock emergency medical attention and advanced surgical care at Fatima Surgical Hospital Harappa."
  },
  {
    id: "duty-physician",
    name: "Emergency & Duty Medical Officers",
    title: "General Physician & Emergency Care Specialist",
    qualification: "MBBS, RMP, Emergency Medicine",
    experience: "24/7 On-Duty Medical Staff",
    specialties: ["Emergency Triage", "General Medicine", "Pediatrics & Infection Care", "Pre/Post-Operative Care"],
    image: "https://images.unsplash.com/photo-1594824813566-8185b9b69b5c?auto=format&fit=crop&q=80&w=600",
    timing: "24 Hours Continuous Duty Shift",
    bio: "Providing non-stop medical observation, immediate patient stabilization, and round-the-clock general physician consultation."
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Local Resident",
    location: "Shalimar town, Harappa",
    rating: 5,
    date: "Recently verified",
    comment: "Excellent 24-hour service at Fatima Surgical Hospital! Staff is extremely caring and surgical treatment was quick, professional, and successful. Highly recommended in Harappa.",
    procedure: "Surgical & Emergency Care"
  },
  {
    id: 2,
    name: "Harappa Patient",
    location: "Harappa",
    rating: 5,
    date: "Recently verified",
    comment: "Very clean hospital facility, open 24 hours. The emergency consultation and surgery department are top class. Saved us in late night emergency!",
    procedure: "Emergency Medical Consultation"
  }
];

export const FAQS = [
  {
    question: "What are the hospital opening hours?",
    answer: "Fatima Surgical Hospital is OPEN 24 HOURS a day, 7 days a week, including Sundays and public holidays for emergency care, surgical procedures, and medical consultations."
  },
  {
    question: "How do I contact or book an emergency consultation?",
    answer: "You can call us directly anytime at 0302 6933917 or WhatsApp us. You can also book an online appointment slot directly through this website."
  },
  {
    question: "Where is Fatima Surgical Hospital located?",
    answer: "We are located at HWV5+RGG, Shalimar town, Harappa. You can view our exact pin on the Map section for instant turn-by-turn directions."
  },
  {
    question: "What services are available 24/7?",
    answer: "Our 24/7 emergency unit, general and emergency surgery department, outpatient medical consultation, minor surgical dressings, and emergency diagnostics are active 24 hours a day."
  }
];

