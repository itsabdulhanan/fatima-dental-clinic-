import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TimingsSection from './components/TimingsSection';
import ServicesSection from './components/ServicesSection';
import DigitalTechSection from './components/DigitalTechSection';
import DoctorsSection from './components/DoctorsSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import MyBookingsModal from './components/MyBookingsModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [myBookingsModalOpen, setMyBookingsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [bookedCount, setBookedCount] = useState(0);

  const updateBookedCount = () => {
    const saved = JSON.parse(localStorage.getItem('fatima_hospital_bookings') || localStorage.getItem('sardar_clinic_bookings') || '[]');
    setBookedCount(saved.length);
  };

  useEffect(() => {
    updateBookedCount();
  }, []);

  const handleOpenBooking = (service = null, day = null) => {
    setSelectedService(service);
    setSelectedDay(day);
    setBookingModalOpen(true);
  };

  const handleBookingSuccess = () => {
    updateBookedCount();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-medical-500 selection:text-white">
      
      {/* Header Bar */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyBookings={() => setMyBookingsModalOpen(true)}
        bookedCount={bookedCount}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Day-Wise Timings Schedule */}
      <TimingsSection
        onSelectDayForBooking={(day) => handleOpenBooking(null, day)}
      />

      {/* Dental & Medical Services */}
      <ServicesSection
        onSelectServiceForBooking={(service) => handleOpenBooking(service)}
      />

      {/* 100% Digital Instruments & Sterilization Tech */}
      <DigitalTechSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Specialists & Doctors */}
      <DoctorsSection
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Testimonials & FAQs */}
      <ReviewsSection />

      {/* Location & Map Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Appointment Booking Wizard Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
        initialDay={selectedDay}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* My Saved Appointments Modal */}
      <MyBookingsModal
        isOpen={myBookingsModalOpen}
        onClose={() => {
          setMyBookingsModalOpen(false);
          updateBookedCount();
        }}
      />

    </div>
  );
}
