import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black font-sans text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/flagged/photo-1566838616838-c3a720672aad?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12">
        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <h1 className="flex flex-col text-[60px] font-bold leading-[0.9] tracking-tighter md:text-[100px]">
              <span>Find Your</span>
              <span className="text-neutral-200">Powered</span>
              <span className="flex items-center gap-6">Solar Energy</span>
            </h1>

            <p className="mt-10 max-w-lg text-lg leading-relaxed text-neutral-400">
              Switching to celestial energy means choosing a sustainable future.
              We provide end-to-end solar solutions for homes and businesses
              across Pakistan.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <button
                className="group flex items-center gap-4 rounded-full border-2 px-10 py-3 transition-all hover:scale-105"
                style={{ borderColor: "#1092CF", backgroundColor: "#1092CF" }}
              >
                <span className="text-base font-bold uppercase tracking-wider text-white">
                  Calculate Your Savings - Free
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <a href="tel:+923001234567">
                <button className="flex items-center gap-3 rounded-full border border-neutral-700 px-8 py-4 hover:bg-white/10 transition-all">
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Call: +92 300 1234567
                  </span>
                </button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#1092CF" }}
                >
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="text-neutral-400">
                  <span className="font-bold text-white">500+</span> Happy
                  Customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#1092CF" }}
                >
                  <span className="text-white font-bold text-xs">★</span>
                </div>
                <span className="text-neutral-400">
                  <span className="font-bold text-white">25-Year</span> Warranty
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#1092CF" }}
                >
                  <span className="text-white font-bold text-xs">₨</span>
                </div>
                <span className="text-neutral-400">
                  <span className="font-bold text-white">0%</span> Financing
                </span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-3">
            <div className="right-[-5%] z-20 mt-12 w-full rounded-[40px] border border-white/10 bg-neutral-900/80 p-10 shadow-2xl backdrop-blur-2xl lg:absolute lg:bottom-[-20px] lg:mt-0 lg:w-[380px]">
              <h2 className="text-6xl font-bold tracking-tighter">500+</h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-neutral-400">
                Installations Completed
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "87% Avg. Bill Savings",
                  "2-4 Week Installation",
                  "4.95★ Customer Rating",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-t border-white/10 pt-4 group cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-neutral-300 transition-colors group-hover:text-white">
                      {item}
                    </span>
                    <span className="text-[#1092CF]">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
