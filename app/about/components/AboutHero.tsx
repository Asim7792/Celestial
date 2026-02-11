import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-black font-sans text-white flex items-center justify-center">
      {/* Dark Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070')" }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 text-center px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm text-neutral-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-white font-medium">About Us</span>
        </nav>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
          About Celestial Energy
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Transforming Pakistan with solar energy - 500+ homes and businesses powered, 87% average savings achieved since 2018
        </p>

        {/* Trust Badge */}
        <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20">
          <div className="w-2 h-2 rounded-full bg-[#1092CF] animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-sm">Pakistan&apos;s Trusted Solar Partner</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
