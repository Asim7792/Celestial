import React from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #1092CF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[60px] p-12 md:p-16 text-white text-center overflow-hidden relative">
          {/* Decorative Element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: '#1092CF' }} />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: '#1092CF' }} />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-bold uppercase tracking-wider text-sm">We're Ready To Help</span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] md:text-[70px] font-black leading-[0.95] tracking-tighter mb-6">
              Ready To <span style={{ color: '#1092CF' }}>Go Solar</span>?<br />
              Let's Make It Happen
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12">
              Join 500+ satisfied customers who've made the switch. Get your free consultation and custom quote today.
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <a href="tel:+923001234567" className="group">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-[#1092CF] hover:bg-white/20 transition-all">
                  <Phone className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                  <h4 className="font-bold text-lg mb-2">Call Us Now</h4>
                  <p className="text-2xl font-black mb-2">+92 300 1234567</p>
                  <p className="text-sm text-white/60">Mon-Sat: 9 AM - 6 PM</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-[#1092CF] hover:bg-white/20 transition-all">
                  <MessageCircle className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                  <h4 className="font-bold text-lg mb-2">WhatsApp Chat</h4>
                  <p className="text-xl font-bold mb-2">Instant Response</p>
                  <p className="text-sm text-white/60">Available 24/7</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@celestialenergyp k.com" className="group">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-[#1092CF] hover:bg-white/20 transition-all">
                  <Mail className="mx-auto mb-4 group-hover:scale-110 transition-transform" size={40} style={{ color: '#1092CF' }} />
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-lg font-bold mb-2">info@celestialenergy.pk</p>
                  <p className="text-sm text-white/60">Response within 24 hours</p>
                </div>
              </a>
            </div>

            {/* Main CTA Button */}
            <Link href="/contact-us">
              <button 
                className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-neutral-900 rounded-full font-black text-xl uppercase tracking-wider hover:bg-[#1092CF] hover:text-white transition-all hover:scale-105 shadow-2xl"
              >
                Get Your Free Quote
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </button>
            </Link>

            {/* No Obligation Text */}
            <p className="text-sm text-white/60 mt-6">
              ✓ No obligation • ✓ Free consultation • ✓ Custom quote in 24 hours
            </p>
          </div>
        </div>

        {/* Trust Badges Below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-black text-neutral-900 mb-2">6+ Years</div>
            <div className="text-sm text-neutral-600 uppercase tracking-wider">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-neutral-900 mb-2">100+</div>
            <div className="text-sm text-neutral-600 uppercase tracking-wider">Cities Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-neutral-900 mb-2">24/7</div>
            <div className="text-sm text-neutral-600 uppercase tracking-wider">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-neutral-900 mb-2">30 Days</div>
            <div className="text-sm text-neutral-600 uppercase tracking-wider">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
