export const CLINIC_INFO = {
  name: "Sardar Medical & Dental Clinic",
  tagline: "Advanced Dental Care & Professional Health Consultation",
  description: "Providing modern digital dental treatments and expert medical consultation with 100% sterile digital instruments in Chichawatni.",
  address: "Block 14, GMGP+7R8, St 2 Gujjar Chowk, Block 14 Chichawatni, 57200",
  phone: "0321 5770440",
  formattedPhone: "+923215770440",
  whatsapp: "923215770440",
  locationCode: "GMGP+7R8",
  city: "Chichawatni",
  googleMapsUrl: "https://maps.google.com/?q=GMGP%2B7R8+Chichawatni",
};

export const WEEKLY_SCHEDULE = [
  {
    day: "Monday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM",
    healthConsultant: "11:00 AM - 7:00 PM",
    statusNote: "Full Day Consulting & Dental Surgery"
  },
  {
    day: "Tuesday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM",
    healthConsultant: "11:00 AM - 7:00 PM",
    statusNote: "Full Day Consulting & Digital Imaging"
  },
  {
    day: "Wednesday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM",
    healthConsultant: "11:00 AM - 7:00 PM",
    statusNote: "Full Day Consulting & Root Canal Procedures"
  },
  {
    day: "Thursday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM",
    healthConsultant: "11:00 AM - 7:00 PM",
    statusNote: "Full Day Consulting & Orthodontic Braces Clinic"
  },
  {
    day: "Friday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "01:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM (Friday Break 1:00 PM - 3:00 PM)",
    healthConsultant: "10:00 AM - 6:00 PM",
    statusNote: "Jumma Break 1:00 PM - 3:00 PM"
  },
  {
    day: "Saturday",
    isOpen: true,
    slots: [
      { start: "10:00 AM", end: "02:00 PM", label: "Morning Session" },
      { start: "05:00 PM", end: "09:00 PM", label: "Evening Session" }
    ],
    dentalConsultant: "10:00 AM - 9:00 PM",
    healthConsultant: "11:00 AM - 7:00 PM",
    statusNote: "Full Day Cosmetic Dental & Implants"
  },
  {
    day: "Sunday",
    isOpen: false,
    slots: [
      { start: "11:00 AM", end: "03:00 PM", label: "Emergency & On-Call Appointments" }
    ],
    dentalConsultant: "On-Call Emergency",
    healthConsultant: "Emergency On-Call Only",
    statusNote: "Emergency & Pre-booked Appointments Only"
  }
];

export const SERVICES = [
  {
    id: "braces",
    category: "dental",
    title: "Dental Braces & Alignment",
    shortDesc: "Straighten teeth and fix alignment using modern metal, ceramic, and clear invisible braces.",
    description: "Our orthodontic team offers state-of-the-art dental braces treatment for teenagers and adults. Correct misaligned teeth, bite problems, and enjoy a confident, perfectly aligned smile.",
    icon: "Sparkles",
    popular: true,
    estimatedDuration: "30 - 45 mins",
    keyBenefits: ["Custom Orthodontic Planning", "Metal & Ceramic Options", "Comfortable Tightening", "Digital Bite Alignment"]
  },
  {
    id: "surgery",
    category: "dental",
    title: "Digital Dental Surgery",
    shortDesc: "Painless surgical tooth extraction, wisdom tooth management & oral surgery.",
    description: "Using digital precision instruments and modern local anesthesia, our surgical care ensures maximum comfort during wisdom tooth removal, bone grafting, and complex oral extractions.",
    icon: "Scissors",
    popular: false,
    estimatedDuration: "45 - 60 mins",
    keyBenefits: ["Painless Local Anesthesia", "Minimally Invasive", "Rapid Healing Guidance", "100% Sterile Equipment"]
  },
  {
    id: "root-canal",
    category: "dental",
    title: "Root Canal Treatment (RCT)",
    shortDesc: "Save infected or severely decayed teeth with painless digital root canal procedure.",
    description: "Protect your natural tooth from extraction! Our digital rotary root canal equipment cleans, disinfects, and seals deep root infections effectively in just 1-2 visits.",
    icon: "Activity",
    popular: true,
    estimatedDuration: "45 mins per session",
    keyBenefits: ["Digital Apex Locator", "Painless Single/Multi Visit", "Tooth Structure Preserved", "High Quality Crown Fitting"]
  },
  {
    id: "dental-filling",
    category: "dental",
    title: "Composite Dental Filling",
    shortDesc: "Tooth-colored, aesthetically invisible fillings to repair cavities and tooth wear.",
    description: "Replace ugly dark amalgam fillings with natural composite tooth restorations. Strong, long-lasting, and perfectly color-matched to your natural tooth shade.",
    icon: "ShieldCheck",
    popular: true,
    estimatedDuration: "30 mins",
    keyBenefits: ["Natural Tooth Shade Match", "UV Cured Instant Hardening", "Prevents Cavity Expansion", "Strong Bonded Restoration"]
  },
  {
    id: "teeth-whitening",
    category: "dental",
    title: "Laser Teeth Whitening",
    shortDesc: "Brighten your smile by up to 8 shades in a single safe, fast clinic appointment.",
    description: "Remove tough stains from tea, coffee, smoking, and age. Our gentle whitening procedure restores a radiant, luminous white smile without enamel damage.",
    icon: "Sun",
    popular: true,
    estimatedDuration: "40 mins",
    keyBenefits: ["Instant Results", "Enamel Safe Formula", "Removes Deep Stains", "Long Lasting Brilliance"]
  },
  {
    id: "dental-implant",
    category: "dental",
    title: "Dental Implants & Crowns",
    shortDesc: "Permanent, natural-looking replacement for missing teeth anchored to jawbone.",
    description: "The gold standard for missing teeth! Digital guided implant placement provides a permanent tooth replacement that looks, feels, and functions exactly like natural teeth.",
    icon: "CheckCircle2",
    popular: false,
    estimatedDuration: "Consultation & Planning 30 mins",
    keyBenefits: ["Lifetime Durability", "Restores Full Chewing Power", "Natural Aesthetics", "Prevents Bone Loss"]
  },
  {
    id: "digital-instruments",
    category: "dental",
    title: "100% Digital Instrument Care",
    shortDesc: "All instruments digitized, autoclave sterilized, and technologically advanced.",
    description: "We take hygiene and precision seriously. Every patient experiences 100% sterilized digital dental instruments, digital intraoral radiography, and apex locators.",
    icon: "Cpu",
    popular: false,
    estimatedDuration: "Included in all visits",
    keyBenefits: ["Zero Cross-Contamination", "Ultra Low-Radiation Digital X-Rays", "Precision Diagnostics", "Safe & Clean Environment"]
  },
  {
    id: "health-consultant",
    category: "medical",
    title: "General Health Consultation",
    shortDesc: "Comprehensive general physician evaluation, diagnosis, and prescription management.",
    description: "Consult with expert health advisors for general ailments, hypertension, diabetes management, fever, infections, and preventative health guidance.",
    icon: "Stethoscope",
    popular: true,
    estimatedDuration: "20 - 30 mins",
    keyBenefits: ["Detailed Patient Assessment", "Prescription & Lab Advice", "Chronic Disease Management", "Family Health Guidance"]
  },
  {
    id: "pediatric-care",
    category: "medical",
    title: "Pediatric & Family Care",
    shortDesc: "Gentle medical and dental care specialized for children and infants.",
    description: "A welcoming, child-friendly environment for routine health checkups, growth monitoring, pediatric fever care, and gentle kids' dental checkups.",
    icon: "HeartHandshake",
    popular: false,
    estimatedDuration: "20 mins",
    keyBenefits: ["Kid-Friendly Doctors", "Preventive Dental Sealants", "Fever & Infection Care", "Gentle Treatment"]
  }
];

export const DOCTORS = [
  {
    id: "dr-sardar",
    name: "Dr. Sardar Medical & Dental Team",
    title: "Chief Dental Surgeon & Health Consultant",
    qualification: "BDS, FCPS (Res.), PGD Orthodontics",
    experience: "15+ Years Clinical Experience",
    specialties: ["Root Canal Treatment", "Orthodontic Braces", "Digital Dental Implants", "Health Consultation"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
    timing: "Mon - Sat: 10:00 AM - 2:00 PM & 5:00 PM - 9:00 PM",
    bio: "Dedicated to bringing modern digital dentistry and compassionate health consulting to Chichawatni. Passionate about painless procedures and lasting patient smiles."
  },
  {
    id: "dr-associate",
    name: "Associate Medical Consultant",
    title: "General Physician & Preventive Care Specialist",
    qualification: "MBBS, RMP, General Medicine Specialist",
    experience: "10+ Years Experience",
    specialties: ["General Health", "Diabetes & BP Care", "Preventive Diagnostics", "Pediatrics"],
    image: "https://images.unsplash.com/photo-1594824813566-8185b9b69b5c?auto=format&fit=crop&q=80&w=600",
    timing: "Mon - Sat: 11:00 AM - 7:00 PM",
    bio: "Expert consultant providing patient-centered diagnosis, preventive health screening, and compassionate treatment plans."
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Chaudhry Muhammad Farooq",
    location: "Chichawatni Block 14",
    rating: 5,
    date: "1 week ago",
    comment: "Best dental clinic in Chichawatni! Got my root canal done here, completely painless and all digital equipment used. Highly recommended!",
    procedure: "Root Canal Treatment"
  },
  {
    id: 2,
    name: "Zubaida Bibi",
    location: "Gujjar Chowk",
    rating: 5,
    date: "2 weeks ago",
    comment: "Dr. Sardar is very polite and competent. Got dental braces for my daughter. Cleanliness and digital instruments are top class.",
    procedure: "Dental Braces"
  },
  {
    id: 3,
    name: "Tariq Mahmood",
    location: "Chichawatni City",
    rating: 5,
    date: "1 month ago",
    comment: "Very easy to book an appointment. The general health consultation was detailed and prescription was super effective. 5 stars!",
    procedure: "Health Consultation"
  }
];

export const FAQS = [
  {
    question: "What are the clinic opening hours?",
    answer: "Sardar Medical & Dental Clinic is open Monday through Saturday from 10:00 AM to 2:00 PM (Morning Session) and 5:00 PM to 9:00 PM (Evening Session). On Sundays, we attend to emergency and pre-booked appointments."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly on this website using our online appointment form, or call/WhatsApp us directly at 0321 5770440. You will receive an instant appointment pass with confirmation."
  },
  {
    question: "Is root canal treatment (RCT) painful?",
    answer: "Not at all! We use modern digital rotary instruments and effective local anesthesia. Most patients experience zero pain during the entire treatment."
  },
  {
    question: "Where is the clinic located?",
    answer: "We are located at Block 14, Street 2, Gujjar Chowk, Block 14 Chichawatni (57200). You can click on the Map section for instant directions."
  },
  {
    question: "What digital instruments do you use?",
    answer: "We feature 100% digital dentistry including digital RVG X-ray sensors, digital apex locators, ultrasonic scalers, and autoclave sterile surgical tools for maximum hygiene."
  }
];
