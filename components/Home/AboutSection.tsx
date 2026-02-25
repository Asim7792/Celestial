"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Solar Panel Installation",
    desc: "Professional solar panel installation services across Pakistan. We design and install custom solar energy systems for residential, commercial, and industrial properties. Our certified engineers ensure optimal panel placement, maximum sunlight exposure, and seamless integration with your existing electrical infrastructure.",
    id: "01",
  },
  {
    title: "Energy Monitoring System",
    desc: "Advanced real-time solar energy monitoring and management solutions. Track your solar panel performance, energy production, consumption patterns, and savings through our intuitive mobile and web applications. Get instant alerts for system issues and optimize your energy usage with detailed analytics.",
    id: "02",
  },
  {
    title: "Complete Solar Infrastructure",
    desc: "End-to-end solar power infrastructure solutions including premium mounting systems, high-capacity battery storage, inverters, and charge controllers. We use weather-resistant materials designed for Pakistan's climate, ensuring durability and long-term performance of your solar investment.",
    id: "03",
  },
  {
    title: "Maintenance & Support",
    desc: "Comprehensive solar system maintenance and support services. Regular performance audits, panel cleaning, system diagnostics, component repairs, and 24/7 technical support. Our preventive maintenance ensures your solar system operates at peak efficiency throughout its 25-year+ lifespan.",
    id: "04",
  },
];

const About = () => {
  return (
    <section className="bg-[#FCFCFC] py-24 px-6 md:px-12 text-neutral-900 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-6">
              Who We Are
            </span>
            <h2 className="text-[50px] md:text-[80px] font-bold leading-[1] tracking-tighter text-neutral-900">
              Experience <span style={{ color: "#1092CF" }}>The Power</span>{" "}
              <br />
              Of Clean Energy
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3 lg:mt-20"
          >
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              As Pakistan&apos;s leading solar energy provider, we specialize in
              designing and installing high-efficiency solar power systems for
              homes, businesses, and industries. With over 500+ successful
              installations and 6+ years of expertise, we transform sustainable
              energy visions into reality across Pakistan.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white p-8 rounded-[40px] border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold tracking-tight leading-tight text-neutral-900">
                  {service.title}
                </h3>
                <span className="text-neutral-300 group-hover:text-[#1092CF] font-mono text-sm tracking-widest uppercase transition-colors">
                  {service.id}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div
                className="h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ backgroundColor: "#1092CF" }}
              />

              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <div className="w-32 h-32 border-4 border-neutral-900 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-neutral-900 rounded-bl-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
