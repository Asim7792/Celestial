"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Residential Solar Systems",
    image:
      "https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070",
    description:
      "Customized energy solutions for private homes, reducing monthly bills by up to 90%.",
  },
  {
    id: "02",
    title: "Commercial Solar Grids",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?q=80&w=1974",
    description:
      "Scalable power grids designed for industrial warehouses and corporate offices.",
  },
  {
    id: "03",
    title: "Smart Battery Storage",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2071",
    description:
      "Advanced lithium-ion storage to keep your business running throughout the night.",
  },
  {
    id: "04",
    title: "Solar Maintenance",
    image:
      "https://images.unsplash.com/photo-1611365892117-00ac5ef43759?q=80&w=2070",
    description:
      "Proactive cleaning and technical audits to ensure 100% system efficiency.",
  },
  {
    id: "05",
    title: "Net Metering Setup",
    image:
      "https://images.unsplash.com/photo-1548613053-220086374bc9?q=80&w=2100",
    description:
      "Sell your excess energy back to the national grid and earn credits.",
  },
];

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-white py-24 px-6 md:px-12 text-neutral-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
            Our Services
          </span>
          <h2 className="text-[45px] md:text-[65px] font-bold leading-[1.1] tracking-tighter">
            Explore Our <span style={{ color: "#1092CF" }}>Comprehensive</span>{" "}
            <br />
            Solar Solutions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 sticky top-24">
            <div className="relative h-[550px] w-full overflow-hidden rounded-[40px] shadow-2xl border-[12px] border-neutral-50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <motion.div
                key={`desc-${activeService.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-8 right-8 bg-neutral-900/80 backdrop-blur-md p-8 rounded-3xl text-white border border-white/10"
              >
                <p className="text-sm leading-relaxed text-neutral-300">
                  {activeService.description}
                </p>
              </motion.div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="flex flex-col">
              {services.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className="group relative flex items-center justify-between py-8 border-t border-neutral-100 cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span
                      className={`text-sm font-mono transition-colors duration-300 ${activeService.id === service.id ? "text-neutral-300" : "text-neutral-300"}`}
                      style={
                        activeService.id === service.id
                          ? { color: "#1092CF" }
                          : {}
                      }
                    >
                      {service.id}
                    </span>
                    <h3
                      className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300 ${activeService.id === service.id ? "text-neutral-900 translate-x-2" : "text-neutral-400 group-hover:text-neutral-600 group-hover:translate-x-1"}`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${activeService.id === service.id ? "text-white rotate-45" : "bg-neutral-50 text-neutral-300 group-hover:bg-neutral-100"}`}
                    style={
                      activeService.id === service.id
                        ? { backgroundColor: "#1092CF" }
                        : {}
                    }
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              ))}
              <div className="border-t border-neutral-100" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 pt-20 border-t border-neutral-100">
          <div>
            <h4 className="text-5xl font-bold tracking-tighter mb-2">2021</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Year Established
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-bold tracking-tighter mb-2">450+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Projects Completed
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-bold tracking-tighter mb-2">15+</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Expert Engineers
            </p>
          </div>
          <div>
            <h4 className="text-5xl font-bold tracking-tighter mb-2">100%</h4>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
