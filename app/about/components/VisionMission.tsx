"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Target, Eye } from "lucide-react";

const VisionMission = () => {
  const visionPoints = [
    "Install 10,000+ solar systems across Pakistan's major cities by 2030",
    "Help Pakistani families save Rs. 10 billion annually on electricity bills",
    "Make solar energy accessible to every household regardless of income level",
  ];

  const missionPoints = [
    "Offer Tier-1 solar panels with 25-year warranties at lowest market prices",
    "Complete installations in 2-4 weeks with 24/7 lifetime technical support",
    "Provide 0% financing options to make solar accessible to all income levels",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-neutral-50">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072"
                alt="Solar Farm"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF]/10">
                <Eye className="text-[#1092CF]" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Vision
              </h3>
            </div>

            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              To be Pakistan&apos;s most trusted solar energy partner,
              transforming how homes and businesses power their future through
              sustainable, reliable, and innovative solar solutions that deliver
              real savings.
            </p>

            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#1092CF] rounded-sm p-0.5 flex-shrink-0">
                    <Check size={14} className="text-black stroke-[3px]" />
                  </div>
                  <p className="text-neutral-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF]/10">
                <Target className="text-[#1092CF]" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                Our Mission
              </h3>
            </div>

            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              We empower Pakistani households and businesses to harness the
              power of the sun through expert engineering, premium quality
              products, and unwavering customer support.
            </p>

            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-[#1092CF] rounded-sm p-0.5 flex-shrink-0">
                    <Check size={14} className="text-black stroke-[3px]" />
                  </div>
                  <p className="text-neutral-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[50px] overflow-hidden shadow-2xl border-[12px] border-neutral-50">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?q=80&w=1974"
                alt="Team Mission"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
