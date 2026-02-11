"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, MessageCircle, Mail } from 'lucide-react';
import Link from 'next/link';

const AboutCTA = () => {
  return (
    <section className="bg-white py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className="text-[40px] md:text-[60px] font-bold leading-[1.1] tracking-tighter mb-6">
            Ready To Transform <br />
            Your <span className="text-[#1092CF] font-medium">Energy Future?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how we can power your home or business with clean, reliable solar energy. 
            Get your free consultation and custom quote today.
          </p>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Phone */}
            <a href="tel:+923001234567" className="group">
              <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-100 hover:border-[#1092CF] hover:bg-[#1092CF]/5 transition-all">
                <Phone className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                <h4 className="font-bold text-lg mb-2">Call Us Now</h4>
                <p className="text-2xl font-black mb-2">+92 300 1234567</p>
                <p className="text-sm text-neutral-600">Mon-Sat: 9 AM - 6 PM</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-100 hover:border-[#1092CF] hover:bg-[#1092CF]/5 transition-all">
                <MessageCircle className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                <h4 className="font-bold text-lg mb-2">WhatsApp Chat</h4>
                <p className="text-xl font-bold mb-2">Instant Response</p>
                <p className="text-sm text-neutral-600">Available 24/7</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@celestialenergypk.com" className="group">
              <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-100 hover:border-[#1092CF] hover:bg-[#1092CF]/5 transition-all">
                <Mail className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                <h4 className="font-bold text-lg mb-2">Email Us</h4>
                <p className="text-lg font-bold mb-2">info@celestialenergy.pk</p>
                <p className="text-sm text-neutral-600">Response within 24 hours</p>
              </div>
            </a>
          </div>

          {/* Main CTA Button */}
          <Link href="/contact-us">
            <button className="group inline-flex items-center gap-4 rounded-full border-2 border-neutral-900 bg-neutral-900 px-10 py-5 text-white transition-all hover:bg-[#1092CF] hover:border-[#1092CF] hover:scale-105">
              <span className="text-sm font-bold uppercase tracking-widest">Get Your Free Quote</span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1092CF] text-white group-hover:bg-white group-hover:text-[#1092CF] transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </button>
          </Link>

          {/* No Obligation Text */}
          <p className="mt-8 text-sm text-neutral-500">
            ✓ No obligation • ✓ Free consultation • ✓ Custom quote in 24 hours
          </p>

          {/* Footer Tagline */}
          <p className="mt-6 text-sm text-neutral-400 italic">
            Join <span className="font-bold text-[#1092CF]">500+</span> satisfied clients who&apos;ve made the switch
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCTA;
