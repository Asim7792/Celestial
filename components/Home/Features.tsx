"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const Features = () => {
  const highlights = [
    {
      title: "Latest Technologies",
      desc: "Tier-1 N-Type solar cell technology.",
    },
    {
      title: "High-Quality Designs",
      desc: "Custom mounting for maximum aesthetics.",
    },
    { title: "25 Years Warranty", desc: "Long-term performance guarantees." },
    {
      title: "Residential Design",
      desc: "Optimized for home energy independence.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 text-neutral-900 overflow-hidden">
      <div className="absolute left-10 bottom-0 select-none pointer-events-none">
        <h2 className="text-[200px] md:text-[300px] font-black text-neutral-50 leading-none">
          SOLAR
        </h2>
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-8">
                • Since 2021
              </span>
              <h2 className="text-[45px] md:text-[65px] font-bold leading-[1.1] tracking-tighter mb-10">
                Where Spaces Inspire, <br />
                And{" "}
                <span className="font-medium" style={{ color: "#1092CF" }}>
                  Energy
                </span>{" "}
                Comes Alive
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className="mt-1 rounded-sm p-0.5"
                      style={{ backgroundColor: "#1092CF" }}
                    >
                      <Check size={14} className="text-black stroke-[3px]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-800 tracking-tight italic">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-neutral-500 text-base leading-relaxed mb-12 max-w-lg">
                Whether it&apos;s your home, office, or a commercial project, we
                are always dedicated to bringing your energy vision to life. Our
                performance metrics speak better than words.
              </p>

              <button className="group flex items-center gap-4 rounded-full border border-neutral-300 px-8 py-4 transition-all hover:bg-neutral-900 hover:text-white">
                <span className="text-xs font-bold uppercase tracking-widest">
                  More About Us
                </span>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors"
                  style={{ backgroundColor: "#1092CF" }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-[50px] overflow-hidden border-[15px] border-neutral-50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070"
                alt="Solar Panels Layout"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
