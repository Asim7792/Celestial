"use client";
import React from 'react';
import { motion } from 'framer-motion';

const workSteps = [
  {
    id: "01",
    title: "Site Assessment & Consultation",
    desc: "We begin by analyzing your location, energy needs, and roof structure to design the optimal solar solution.",
    image: "https://images.unsplash.com/photo-1600880212319-783a8ddca8a9?q=80&w=2070"
  },
  {
    id: "02",
    title: "System Design & Engineering",
    desc: "Our engineers create detailed technical plans using the latest N-Type solar technology and battery storage.",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070"
  },
  {
    id: "03",
    title: "Professional Installation",
    desc: "Certified technicians install your system with precision, ensuring maximum efficiency and safety standards.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070"
  },
  {
    id: "04",
    title: "Performance Monitoring & Support",
    desc: "Track your energy production in real-time through our SolarFlow OS with 24/7 technical support available.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
  }
];

const WorkProcess = () => {
  return (
    <section className="relative bg-[#F5F5F5] py-24 px-6 md:px-12 overflow-hidden">
      
      {/* Grid Mesh Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* Background Watermark Text */}
      <div className="absolute bottom-10 right-10 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[200px] md:text-[300px] font-black leading-none text-neutral-900 uppercase">
          Solar
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <span className="inline-block border border-neutral-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-6">
            • How We Work
          </span>
          <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
            Description <span className="text-[#1092CF] font-medium italic">Solar</span> <br /> 
            Process For Exceptional Results.
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`
                group bg-white p-8 rounded-[35px] border border-neutral-100 shadow-sm 
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-4 relative
                ${index % 2 !== 0 ? 'lg:mt-16' : ''} 
              `}
            >
              {/* Image */}
              <div className="relative h-32 w-full overflow-hidden rounded-2xl mb-6">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative min-h-[180px]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-bold text-[#1092CF]">{step.id}.</span>
                  <h4 className="text-lg font-bold tracking-tight text-neutral-800">{step.title}</h4>
                </div>
                
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {step.desc}
                </p>

                {/* Large Background Number */}
                <span className="absolute bottom-0 right-0 text-7xl font-black text-neutral-50 group-hover:text-neutral-100 transition-colors pointer-events-none select-none">
                  {step.id}
                </span>
              </div>

              {/* Bottom Accent Line */}
              <div className="h-1 w-0 bg-[#1092CF] group-hover:w-full transition-all duration-500 rounded-full mt-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
