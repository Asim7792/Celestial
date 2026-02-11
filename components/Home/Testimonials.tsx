"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Ahmed Malik",
    location: "DHA, Lahore",
    rating: 5,
    savings: "87%",
    system: "12kW Residential",
    text: "Within 3 months of installation, my electricity bill dropped from Rs. 45,000 to just Rs. 6,000. The ROI is incredible and the team was professional throughout!",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: 2,
    name: "Fatima Hassan",
    location: "Clifton, Karachi",
    rating: 5,
    savings: "90%",
    system: "8kW Residential",
    text: "Best investment we've made! Installation took only 2 days and we're already seeing massive savings. Their 25-year warranty gives us complete peace of mind.",
    image: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 3,
    name: "Imran Khan",
    location: "F-7, Islamabad",
    rating: 5,
    savings: "85%",
    system: "50kW Commercial",
    text: "Our factory now runs 100% on solar. We're saving over Rs. 200,000 monthly and the system paid for itself in just 3 years. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=33"
  },
  {
    id: 4,
    name: "Sarah Ali",
    location: "Bahria Town, Rawalpindi",
    rating: 5,
    savings: "92%",
    system: "10kW Residential",
    text: "From consultation to installation, everything was seamless. The app lets me monitor real-time generation and my bills are practically zero now!",
    image: "https://i.pravatar.cc/150?img=27"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-black text-neutral-900">❝</div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
            • Customer Success Stories
          </span>
          <h2 className="text-[45px] md:text-[65px] font-bold leading-[1.1] tracking-tighter text-neutral-900 mb-6">
            See Why <span style={{ color: '#1092CF' }}>500+ Families</span> <br />
            Trust Celestial Energy
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real results from real customers across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Overall Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-gradient-to-br from-neutral-50 to-white rounded-[50px] p-12 shadow-2xl border border-neutral-100">
              <div className="text-8xl font-black tracking-tighter text-neutral-900 mb-4">
                4.95
              </div>
              <div className="flex justify-center lg:justify-start gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={24} className="fill-[#1092CF] text-[#1092CF]" />
                ))}
              </div>
              <p className="text-sm text-neutral-500 font-medium mb-8">
                Based on <span className="font-bold text-neutral-900">500+ verified reviews</span>
              </p>

              {/* Trust Badges */}
              <div className="space-y-4 pt-6 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#1092CF' }}>
                    <Quote className="text-white" size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-neutral-900">500+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Happy Customers</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: '#1092CF' }}>
                    <span className="text-white font-black">✓</span>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-neutral-900">25 Years</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Warranty</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-neutral-50 to-white rounded-[50px] p-10 shadow-2xl border border-neutral-100"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-2xl p-4 border border-neutral-100">
                    <div className="text-3xl font-black" style={{ color: '#1092CF' }}>{currentTestimonial.savings}</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">Bill Savings</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-neutral-100">
                    <div className="text-sm font-bold text-neutral-900">{currentTestimonial.system}</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wider">System Size</div>
                  </div>
                </div>

                {/* Quote */}
                <Quote className="text-neutral-200 mb-4" size={40} />
                <p className="text-lg text-neutral-700 leading-relaxed mb-8 italic">
                  "{currentTestimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-neutral-900">{currentTestimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{currentTestimonial.location}</p>
                  </div>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-[#1092CF] text-[#1092CF]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1092CF] text-[#1092CF] hover:bg-[#1092CF] hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1092CF] text-[#1092CF] hover:bg-[#1092CF] hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-[#1092CF]' : 'w-2 bg-neutral-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
