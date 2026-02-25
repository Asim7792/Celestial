import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import { residentialProjects } from "@/lib/data/projects";

export default function ResidentialProjectsPage() {
  return (
    <div className="font-sans bg-white">
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-black text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Residential Projects</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Residential <span className="text-[#1092CF]">Solar Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Empowering Pakistani homes with clean, reliable solar energy
          </p>
        </div>
      </section>

      <section className="bg-[#1092CF] py-8 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                {residentialProjects.length}+
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Projects
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                5-20kW
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Capacity Range
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                85%+
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Avg. Savings
              </p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-white">
                100%
              </div>
              <p className="text-sm font-bold text-white/80 uppercase tracking-wider">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
              • Our Residential Portfolio
            </span>
            <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
              Transforming <span className="text-[#1092CF]">Homes</span> Across
              Pakistan
            </h2>
            <p className="text-neutral-600 text-lg mt-6 max-w-2xl mx-auto">
              From compact townhouses to luxury villas, we&apos;ve designed
              custom solar solutions that deliver real savings and energy
              independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-24 px-6 text-white text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter mb-6">
            Ready To Power <span className="text-[#1092CF]">Your Home?</span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of homeowners who&apos;ve made the switch to solar.
            Get a free consultation and custom quote today.
          </p>
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-4 rounded-full border-2 border-[#1092CF] bg-[#1092CF] px-10 py-5 text-black font-bold uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#1092CF]">
              Get Free Quote
              <span>→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
