import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import { commercialProjects } from "@/lib/data/projects";

export default function CommercialProjectsPage() {
  return (
    <div className="font-sans bg-white">
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-black text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Commercial Projects</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Commercial <span className="text-[#1092CF]">Solar Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Enterprise-grade solar solutions for businesses across Pakistan
          </p>
        </div>
      </section>

      <section className="bg-[#1092CF] py-8 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                {commercialProjects.length}+
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Projects
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                80-250kW
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Capacity Range
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                PKR 3.5M+
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Total Savings
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                24/7
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
              • Our Commercial Portfolio
            </span>
            <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
              Powering <span className="text-[#1092CF]">Business</span> Growth
            </h2>
            <p className="text-neutral-600 text-lg mt-6 max-w-2xl mx-auto">
              From offices to manufacturing facilities, we deliver large-scale
              solar installations that drive down operational costs and boost
              sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9] py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Corporate Offices",
              "Manufacturing",
              "Retail & Malls",
              "Hospitality",
              "Education",
              "Healthcare",
              "Warehousing",
              "Agriculture",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-white p-6 rounded-[30px] text-center border border-neutral-100 hover:border-[#1092CF] hover:shadow-lg transition-all"
              >
                <p className="font-bold text-neutral-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-24 px-6 text-white text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter mb-6">
            Scale Your Business With{" "}
            <span className="text-[#1092CF]">Solar Energy</span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Reduce your energy costs by up to 70% and achieve sustainability
            goals. Let&apos;s discuss a custom solution for your business.
          </p>
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-4 rounded-full border-2 border-[#1092CF] bg-[#1092CF] px-10 py-5 text-black font-bold uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#1092CF]">
              Request Consultation
              <span>→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
