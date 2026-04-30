"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Malik",
    location: "DHA, Islamabad ",
    rating: 5,
    savings: "87%",
    system: "12kW Residential",
    text: "Within 3 months of installation, my electricity bill dropped from Rs. 45,000 to just Rs. 6,000. The ROI is incredible and the team was professional throughout!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    location: "Giga Down Town , Islamabad",
    rating: 5,
    savings: "90%",
    system: "8kW Residential",
    text: "Best investment we've made! Installation took only 2 days and we're already seeing massive savings. Their 25-year warranty gives us complete peace of mind.",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    name: "Imran Khan",
    location: "F-7, Islamabad",
    rating: 5,
    savings: "85%",
    system: "50kW Commercial",
    text: "Our factory now runs 100% on solar. We're saving over Rs. 200,000 monthly and the system paid for itself in just 3 years. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 4,
    name: "Sarah Ali",
    location: "Bahria Town, Rawalpindi",
    rating: 5,
    savings: "92%",
    system: "10kW Residential",
    text: "From consultation to installation, everything was seamless. The app lets me monitor real-time generation and my bills are practically zero now!",
    image: "https://i.pravatar.cc/150?img=27",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (currentIndex < testimonials.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative bg-neutral-50 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center mb-20">
        <span className="text-[#1092CF] font-black text-sm uppercase tracking-[0.3em] mb-4 block">
          TESTIMONIALS
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tighter">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1.5 bg-[#1092CF] mx-auto mt-6 rounded-full" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4">
        <div className="relative overflow-hidden pt-20" ref={containerRef}>
          <motion.div
            className="flex gap-8"
            animate={{ x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (32 / cardsToShow)}px)` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / cardsToShow}% - ${(32 * (cardsToShow - 1)) / cardsToShow}px)` }}
              >
                <div className="relative group pt-16 h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative w-32 h-32 rounded-full border-[6px] border-white shadow-2xl overflow-hidden bg-white">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="relative bg-white rounded-[40px] p-10 pt-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-100 group-hover:border-[#1092CF]/30 transition-all duration-300 flex flex-col items-center h-full">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1092CF]/5 to-transparent rounded-[40px] pointer-events-none" />

                    <div className="mb-6 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="fill-[#1092CF] text-[#1092CF]" />
                      ))}
                    </div>

                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-6 text-[#1092CF]/10" size={40} />
                      <p className="text-neutral-600 text-center leading-relaxed text-lg italic relative z-10">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <Quote className="absolute -bottom-4 -right-6 text-[#1092CF]/10 rotate-180" size={40} />
                    </div>

                    <div className="mt-auto w-full text-center">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8" />
                      <h4 className="text-xl font-black text-neutral-900 uppercase tracking-wider mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#1092CF] text-xs font-bold uppercase tracking-widest">
                        {testimonial.location}
                      </p>

                      <div className="mt-4 flex items-center justify-center gap-2">
                        <span className="bg-blue-50 text-[#1092CF] text-[10px] font-black px-3 py-1 rounded-full border border-blue-100 uppercase tracking-tighter">
                          {testimonial.system}
                        </span>
                        <span className="bg-green-50 text-green-600 text-[10px] font-black px-3 py-1 rounded-full border border-green-100 uppercase tracking-tighter">
                          {testimonial.savings} SAVINGS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={prev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all border border-neutral-100 group ${currentIndex === 0 ? "opacity-0 invisible" : "hover:bg-[#1092CF] hover:text-white"}`}
        >
          <ChevronLeft size={24} className={currentIndex === 0 ? "text-neutral-200" : "text-[#1092CF] group-hover:text-white"} />
        </button>

        <button
          onClick={next}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-2xl transition-all border border-neutral-100 group ${currentIndex >= testimonials.length - cardsToShow ? "opacity-0 invisible" : "hover:bg-[#1092CF] hover:text-white"}`}
        >
          <ChevronRight size={24} className={currentIndex >= testimonials.length - cardsToShow ? "text-neutral-200" : "text-[#1092CF] group-hover:text-white"} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-16">
        {Array.from({ length: testimonials.length - cardsToShow + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${index === currentIndex ? "w-12 bg-[#1092CF]" : "w-2.5 bg-neutral-200 hover:bg-neutral-300"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

