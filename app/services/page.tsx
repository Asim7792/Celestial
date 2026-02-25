import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Sun,
  Zap,
  Shield,
  Wrench,
  TrendingUp,
  Battery,
  Users,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Sun,
      title: "Residential Solar Systems",
      description:
        "Custom solar solutions for homes ranging from 5kW to 20kW. Perfect for reducing your electricity bills and gaining energy independence.",
      features: [
        "Net Metering",
        "Battery Backup",
        "25-Year Warranty",
        "Monitoring App",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    },
    {
      icon: Zap,
      title: "Commercial Installations",
      description:
        "Large-scale solar solutions for businesses, factories, and commercial buildings from 50kW to 500kW capacity.",
      features: [
        "ROI Analysis",
        "Tax Benefits",
        "Grid Integration",
        "24/7 Monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      icon: Shield,
      title: "Net Metering Solutions",
      description:
        "Complete net metering setup with DISCO approvals. Sell excess electricity back to the grid and reduce bills to zero.",
      features: [
        "LESCO/FESCO/IESCO Approvals",
        "Documentation Support",
        "Technical Compliance",
        "Meter Installation",
      ],
      image:
        "https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070",
    },
    {
      icon: Battery,
      title: "Battery Storage Systems",
      description:
        "Advanced lithium-ion battery systems for 24/7 power availability. Perfect for areas with frequent load shedding.",
      features: [
        "Tesla Powerwall",
        "10-Year Warranty",
        "Smart Charging",
        "Remote Monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070",
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Regular maintenance, cleaning, and performance optimization to ensure maximum energy production year-round.",
      features: [
        "Annual Inspections",
        "Panel Cleaning",
        "Performance Reports",
        "Troubleshooting",
      ],
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069",
    },
    {
      icon: TrendingUp,
      title: "Energy Audits",
      description:
        "Comprehensive energy assessment to identify the optimal solar solution for your specific needs and budget.",
      features: [
        "Site Survey",
        "Load Analysis",
        "ROI Calculation",
        "Custom Proposal",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    },
  ];

  return (
    <div className="font-sans bg-white">
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-black text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-fe5bb65831bb?q=80&w=2070')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Services</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Our <span className="text-[#1092CF]">Solar Services</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Comprehensive solar energy solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
              • What We Offer
            </span>
            <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
              Complete <span className="text-[#1092CF]">Solar Solutions</span>
            </h2>
            <p className="text-neutral-600 text-lg mt-6 max-w-2xl mx-auto">
              From consultation to installation and ongoing support, we provide
              end-to-end solar energy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-neutral-200 rounded-[40px] overflow-hidden hover:border-[#1092CF] hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1092CF]">
                        <Icon size={28} className="text-black" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-[#1092CF]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact-us">
                      <button className="w-full px-6 py-3 border-2 border-neutral-900 text-neutral-900 font-bold text-sm uppercase tracking-wider rounded-full hover:bg-neutral-900 hover:text-white transition-colors">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter text-neutral-900">
              Why Choose{" "}
              <span className="text-[#1092CF]">Celestial Energy?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "6+ Years Experience",
                desc: "Trusted by 500+ homes and businesses across Pakistan",
              },
              {
                icon: Shield,
                title: "Premium Quality",
                desc: "Only Tier-1 solar panels with 25-year performance warranty",
              },
              {
                icon: Wrench,
                title: "Expert Installation",
                desc: "Certified technicians trained to international standards",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                desc: "Average 85% bill reduction for residential customers",
              },
              {
                icon: Battery,
                title: "Latest Technology",
                desc: "N-Type solar panels and lithium-ion battery systems",
              },
              {
                icon: Zap,
                title: "24/7 Support",
                desc: "Dedicated customer service and technical assistance",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-[35px] text-center hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1092CF]/10">
                      <Icon size={32} className="text-[#1092CF]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-24 px-6 text-white text-center">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[40px] md:text-[55px] font-bold leading-[1.1] tracking-tighter mb-6">
            Ready To Go <span className="text-[#1092CF]">Solar?</span>
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto">
            Get a free consultation and custom quote from Pakistan&apos;s
            leading solar experts
          </p>
          <Link href="/contact-us">
            <button className="inline-flex items-center gap-4 rounded-full border-2 border-[#1092CF] bg-[#1092CF] px-10 py-5 text-black font-bold uppercase tracking-wider transition-all hover:bg-transparent hover:text-[#1092CF]">
              Schedule Consultation
              <span>→</span>
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
