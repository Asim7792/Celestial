"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "12MW", label: "Capacity Installed" },
  { value: "1200+", label: "Happy Clients" },
  { value: "6+", label: "Years of Excellence" },
];

const StatsSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#1092CF] to-[#0B6DA0] group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>

              <p className="text-sm md:text-base font-bold uppercase tracking-wider text-neutral-800">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
