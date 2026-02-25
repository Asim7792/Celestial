"use client";
import React, { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Zap } from "lucide-react";
import Link from "next/link";

const SavingsCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState("25000");
  const [propertyType, setPropertyType] = useState("residential");
  const [showResults, setShowResults] = useState(false);

  const bill = parseInt(monthlyBill) || 0;
  const estimatedSavings = bill * 0.87;
  const annualSavings = estimatedSavings * 12;
  const systemCost = bill * 40;
  const paybackYears = (systemCost / annualSavings).toFixed(1);
  const twentyFiveYearSavings = annualSavings * 25;

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24 px-6 md:px-12 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 text-[300px] font-black">
          ₨
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block border border-white/20 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
            • Free ROI Calculator
          </span>
          <h2 className="text-[45px] md:text-[65px] font-bold leading-[1.1] tracking-tighter mb-6">
            Calculate Your <span style={{ color: "#1092CF" }}>Savings</span> In
            <br />
            60 Seconds
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            See exactly how much you can save with solar energy
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/10 backdrop-blur-xl rounded-[40px] p-10 border border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "#1092CF" }}
              >
                <Calculator className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Enter Your Details</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-3">
                  Monthly Electricity Bill (Rs.)
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-bold text-neutral-400">
                    ₨
                  </span>
                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 text-2xl font-bold bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:border-[#1092CF] focus:outline-none transition-all"
                    placeholder="25,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3">
                  Property Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPropertyType("residential")}
                    className={`py-4 px-6 rounded-2xl font-bold transition-all ${
                      propertyType === "residential"
                        ? "bg-[#1092CF] text-white"
                        : "bg-white/10 border-2 border-white/20 hover:border-[#1092CF]"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    onClick={() => setPropertyType("commercial")}
                    className={`py-4 px-6 rounded-2xl font-bold transition-all ${
                      propertyType === "commercial"
                        ? "bg-[#1092CF] text-white"
                        : "bg-white/10 border-2 border-white/20 hover:border-[#1092CF]"
                    }`}
                  >
                    Commercial
                  </button>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full py-5 px-8 rounded-full font-bold text-lg uppercase tracking-wider transition-all shadow-2xl hover:shadow-[#1092CF]/50 hover:scale-105"
                style={{ backgroundColor: "#1092CF" }}
              >
                Calculate My Savings
              </button>
            </div>
          </div>

          <div
            className={`space-y-4 transition-all duration-500 ${showResults ? "opacity-100" : "opacity-50"}`}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="text-[#1092CF]" size={24} />
                <span className="text-sm font-bold uppercase tracking-wider text-white/60">
                  Monthly Savings
                </span>
              </div>
              <div className="text-4xl font-black">
                ₨ {estimatedSavings.toLocaleString()}
              </div>
              <div className="text-sm text-white/60 mt-1">
                Save up to 87% on your bill
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="text-[#1092CF]" size={24} />
                <span className="text-sm font-bold uppercase tracking-wider text-white/60">
                  Annual Savings
                </span>
              </div>
              <div className="text-4xl font-black">
                ₨ {annualSavings.toLocaleString()}
              </div>
              <div className="text-sm text-white/60 mt-1">Per year</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="text-[#1092CF]" size={24} />
                <span className="text-sm font-bold uppercase tracking-wider text-white/60">
                  Payback Period
                </span>
              </div>
              <div className="text-4xl font-black">{paybackYears} Years</div>
              <div className="text-sm text-white/60 mt-1">
                Complete ROI timeline
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1092CF] to-[#0B6DA0] rounded-3xl p-6 border border-[#1092CF]">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">
                25-Year Total Savings
              </div>
              <div className="text-5xl font-black mb-2">
                ₨ {(twentyFiveYearSavings / 10000000).toFixed(1)}Cr
              </div>
              <div className="text-sm opacity-90">
                With our 25-year warranty
              </div>
            </div>

            <Link href="/contact-us">
              <button className="w-full py-5 px-8 bg-white text-neutral-900 rounded-full font-bold text-lg uppercase tracking-wider transition-all hover:bg-neutral-100 hover:scale-105 shadow-2xl">
                Get Your Free Quote →
              </button>
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-white/40 mt-12 max-w-3xl mx-auto">
          * Estimates based on average 87% savings from 500+ installations.
          Actual savings may vary based on system size, location, and
          electricity consumption.
        </p>
      </div>
    </section>
  );
};

export default SavingsCalculator;
