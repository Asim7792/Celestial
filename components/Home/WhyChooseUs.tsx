import React from 'react';
import { Shield, Award, Clock, DollarSign, Wrench, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Tier-1 Certified Panels",
    description: "Only premium N-Type solar cells with 22%+ efficiency from globally certified manufacturers"
  },
  {
    icon: Shield,
    title: "25-Year Performance Guarantee",
    description: "Industry-leading warranty covering panels, inverters, and workmanship with free replacements"
  },
  {
    icon: Clock,
    title: "Same-Month Installation",
    description: "From consultation to power generation in just 2-4 weeks. No delays, no excuses"
  },
  {
    icon: DollarSign,
    title: "Flexible 0% Financing",
    description: "Partner with leading banks for up to 10-year financing plans. Go solar with zero upfront cost"
  },
  {
    icon: Wrench,
    title: "Free 1-Year Maintenance",
    description: "Complimentary quarterly cleaning and performance checks for the first year after installation"
  },
  {
    icon: Users,
    title: "Local Pakistani Expertise",
    description: "6+ years serving Pakistani homes and businesses. We understand your energy challenges"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#F9F9F9] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block border border-neutral-300 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-6">
            • Why Celestial Energy
          </span>
          <h2 className="text-[45px] md:text-[65px] font-bold leading-[1.1] tracking-tighter text-neutral-900 mb-6">
            The <span style={{ color: '#1092CF' }}>Smart Choice</span> For<br />
            Pakistan's Energy Future
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We don't just install panels. We deliver complete peace of mind with unmatched quality and service
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-[30px] p-8 border border-neutral-200 hover:border-[#1092CF] hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-all duration-300"
                  style={{ backgroundColor: '#1092CF' }}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#1092CF] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="relative overflow-hidden rounded-[50px] p-12 text-center text-white" style={{ backgroundColor: '#1092CF' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 text-[200px] font-black">✓</div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-white/20 rounded-full px-6 py-3 mb-6">
              <Shield size={24} />
              <span className="font-bold uppercase tracking-wider text-sm">Our Promise To You</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              If your system doesn&apos;t perform as promised in the first year, we&apos;ll fix it for free or provide a full refund. No questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-2xl px-6 py-3">
                <div className="text-2xl font-black">2-4 Days</div>
                <div className="text-xs opacity-75 uppercase tracking-wider">Site Survey</div>
              </div>
              <div className="bg-white/20 rounded-2xl px-6 py-3">
                <div className="text-2xl font-black">24 Hours</div>
                <div className="text-xs opacity-75 uppercase tracking-wider">Quote Delivery</div>
              </div>
              <div className="bg-white/20 rounded-2xl px-6 py-3">
                <div className="text-2xl font-black">10 Years</div>
                <div className="text-xs opacity-75 uppercase tracking-wider">Financing Plans</div>
              </div>
              <div className="bg-white/20 rounded-2xl px-6 py-3">
                <div className="text-2xl font-black">Free</div>
                <div className="text-xs opacity-75 uppercase tracking-wider">First Year Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
