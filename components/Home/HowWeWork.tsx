"use client";
import React from "react";
import { motion } from "framer-motion";

const workSteps = [
  {
    id: "01",
    title: "Initial Consultation",
    desc: "We begin by understanding your vision, goals, and needs, followed Antra.",
    image:
      "https://images.unsplash.com/photo-1600880212319-783a8ddca8a9?q=80&w=2070",
  },
  {
    id: "02",
    title: "Design & Planning",
    desc: "Our team creates detailed designs that reflect your requirements.",
    image:
      "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2070",
  },
  {
    id: "03",
    title: "Implementation",
    desc: "With carefully selected contractors, we manage every phase.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
  },
  {
    id: "04",
    title: "Project Handover",
    desc: "Upon completion, we conduct a thorough review, making sure all details.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-24 px-6 md:px-12 overflow-hidden font-sans">
      <div className="absolute top-10 left-10 select-none pointer-events-none opacity-[0.03]">
        <h2 className="text-[250px] md:text-[400px] font-black leading-none text-neutral-900 uppercase">
          Antra
        </h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
              • How We Work
            </span>
            <h2 className="text-[40px] md:text-[60px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
              Description{" "}
              <span className="font-medium italic" style={{ color: "#1092CF" }}>
                Architecture
              </span>{" "}
              <br />
              Process For Exceptional Results.
            </h2>
          </div>

          <div className="max-w-xs mb-4">
            <p className="text-sm text-neutral-400 leading-relaxed italic">
              Our process is alive – adapting, refining, and growing with your
              vision. Always. Like artists with a blank canvas, we transform
              rooms into living works of art.
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[400px] hidden xl:block opacity-90 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
            alt="Floorplan"
            className="w-full h-auto drop-shadow-2xl rotate-[-5deg]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {workSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`group bg-white p-6 rounded-[35px] border border-neutral-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-4
                ${index % 2 !== 0 ? "lg:mt-16" : ""} // Staggered layout effect
              `}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="flex flex-col relative h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#1092CF" }}
                  >
                    {step.id}.
                  </span>
                  <h4 className="text-lg font-bold tracking-tight text-neutral-800">
                    {step.title}
                  </h4>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-8">
                  {step.desc}
                </p>

                <span className="absolute bottom-0 right-0 text-7xl font-black text-neutral-50 group-hover:text-neutral-100 transition-colors pointer-events-none">
                  {step.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
    </section>
  );
};

export default HowWeWork;
