"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CompanyIntro = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-8">
              • Our Story
            </span>

            {/* Large Year Number */}
            <div className="text-[120px] md:text-[150px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#1092CF] to-[#0B6DA0] mb-6">
              6+
            </div>

            {/* Dual-Color Headline */}
            <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter mb-8">
              Here's What Makes{' '}
              <span className="text-[#1092CF] font-medium">Warm Solar</span>{' '}
              Power For{' '}
              <span className="text-[#1092CF] font-medium">Pakistan</span>
            </h2>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-6">
              Founded in 2021, Celestial Energy emerged from a vision to transform Pakistan's energy landscape. 
              We combine cutting-edge solar technology with local expertise to deliver sustainable power solutions 
              that empower homes and businesses.
            </p>

            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Our approach is simple: understand your energy needs, design a custom solution, and deliver 
              excellence at every step. From residential rooftops to commercial-scale installations, we've 
              helped over 500 clients make the switch to clean, reliable solar energy.
            </p>
          </motion.div>

          {/* Right Side: Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px]"
          >
            {/* Large Image */}
            <div className="absolute top-0 right-0 w-[70%] h-[65%] rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070" 
                alt="Solar Installation" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Overlapping Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?q=80&w=1974" 
                alt="Team Work" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#1092CF]/20 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
