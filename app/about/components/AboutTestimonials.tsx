"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Malik",
    location: "Lahore",
    rating: 5,
    text: "From concept to reality, the Celestial Energy team turned my vision into a stunning, livable solar-powered home. I couldn't be happier with the results!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Fatima Hassan",
    location: "Karachi",
    rating: 5,
    text: "Absolutely love my new solar system! The installation was professional and the energy savings are incredible. Best investment we've made.",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    name: "Imran Khan",
    location: "Islamabad",
    rating: 5,
    text: "The team's expertise and attention to detail was exceptional. Our commercial facility is now 100% solar-powered and saving thousands monthly.",
    image: "https://i.pravatar.cc/150?img=33",
  },
];

const AboutTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-[#F9F9F9] py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block border border-neutral-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-6">
            • Our Clients Say
          </span>
          <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter">
            Here&apos;s What{" "}
            <span className="text-[#1092CF] font-medium">Warm Words</span>{" "}
            <br />
            Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-white rounded-[40px] p-12 shadow-xl border border-neutral-100">
              <div className="text-8xl font-black tracking-tighter text-neutral-900 mb-4">
                4.95
              </div>
              <div className="flex justify-center lg:justify-start gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-[#1092CF] text-[#1092CF]"
                  />
                ))}
              </div>
              <p className="text-sm text-neutral-500 font-medium">
                Based on{" "}
                <span className="font-bold text-neutral-900">500+ reviews</span>
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[40px] p-10 shadow-xl border border-neutral-100"
              >
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 italic">
                  {currentTestimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-neutral-100"
                  />
                  <div>
                    <h4 className="font-bold text-neutral-900">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {currentTestimonial.location}
                    </p>
                  </div>

                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: currentTestimonial.rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#1092CF] text-[#1092CF]"
                        />
                      ),
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-900 hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;
