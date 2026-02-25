"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="font-sans bg-white">
      <section className="relative min-h-[40vh] w-full overflow-hidden bg-black text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center px-6">
          <nav className="flex items-center justify-center gap-2 text-sm text-neutral-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Get In <span className="text-[#1092CF]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Let&apos;s discuss how we can power your future with solar energy
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block border border-neutral-200 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">
                • Contact Information
              </span>
              <h2 className="text-[40px] md:text-[50px] font-bold leading-[1.1] tracking-tighter mb-6">
                Let&apos;s Start A{" "}
                <span className="text-[#1092CF]">Conversation</span>
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-12">
                Have questions about solar energy? Need a custom quote? Our team
                of experts is here to help you make the switch to clean,
                sustainable power.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-3xl hover:bg-blue-50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF] flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Phone</h4>
                    <p className="text-neutral-600 text-sm">+92 300 1234567</p>
                    <p className="text-neutral-500 text-xs mt-1">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-3xl hover:bg-blue-50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF] flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Email</h4>
                    <p className="text-neutral-600 text-sm">
                      info@celestialenergyp k.com
                    </p>
                    <p className="text-neutral-500 text-xs mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-3xl hover:bg-blue-50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF] flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      Office Location
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Office# 123, Main Boulevard,
                      <br />
                      Gulberg III, Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-3xl hover:bg-blue-50 transition-colors">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF] flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">
                      Business Hours
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-neutral-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-10 rounded-[50px]">
              <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-[#1092CF] focus:ring-2 focus:ring-[#1092CF]/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-[#1092CF] focus:ring-2 focus:ring-[#1092CF]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-[#1092CF] focus:ring-2 focus:ring-[#1092CF]/20 outline-none transition-all"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-[#1092CF] focus:ring-2 focus:ring-[#1092CF]/20 outline-none transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="residential">
                      Residential Solar Inquiry
                    </option>
                    <option value="commercial">Commercial Solar Inquiry</option>
                    <option value="quote">Request A Quote</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-[#1092CF] focus:ring-2 focus:ring-[#1092CF]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  text-white flex items-center justify-center gap-3 px-8 py-5 bg-[#1092CF] font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0F82BA] transition-colors"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[500px] bg-neutral-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176493779804!2d74.35787931512275!3d31.522470281364044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca28b0e47d1%3A0x39a1b45301e3be5!2sGulberg%20III%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1644304445625!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9]">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-[40px] md:text-[50px] font-bold leading-[1.1] tracking-tighter mb-6">
            Frequently Asked <span className="text-[#1092CF]">Questions</span>
          </h2>
          <p className="text-neutral-600 text-lg mb-12">
            Quick answers to common questions about our solar solutions
          </p>

          <div className="space-y-4 text-left">
            {[
              {
                q: "How long does installation take?",
                a: "Residential installations typically take 1-3 days, while commercial projects range from 1-2 weeks depending on system size.",
              },
              {
                q: "What warranty do you offer?",
                a: "25-year panel warranty, 10-year inverter warranty, and 5-year workmanship guarantee on all installations.",
              },
              {
                q: "Can I get net metering?",
                a: "Yes! We handle all net metering applications with LESCO, FESCO, IESCO, and other DISCOs across Pakistan.",
              },
              {
                q: "What financing options are available?",
                a: "We offer flexible payment plans and can assist with SBP Green Refinance Scheme applications for up to 10 years financing.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white p-6 rounded-3xl cursor-pointer"
              >
                <summary className="font-bold text-neutral-900 list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#1092CF] text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-neutral-600 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
