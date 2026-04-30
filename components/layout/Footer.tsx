import React from "react";
import Link from "next/link";
import {
  Sun,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/Celestial_Energy_Logo__footer.png" alt="celestial" width={100} height={50} />
              <div>
                <h2 className="text-lg font-black tracking-tight">
                  Celestial Energy
                </h2>
                <p className="text-[9px] text-neutral-400 uppercase tracking-widest">
                  Solar Solutions
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Pakistan&apos;s leading solar energy provider, delivering
              sustainable power solutions for homes and businesses since 2021.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-[#1092CF] hover:text-black transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-[#1092CF] hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-[#1092CF] hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-[#1092CF] hover:text-black transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/residential-projects"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial-projects"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-neutral-400 hover:text-[#1092CF] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-neutral-400">
                Residential Solar Systems
              </li>
              <li className="text-sm text-neutral-400">
                Commercial Installations
              </li>

              <li className="text-sm text-neutral-400">
                Battery Storage Systems
              </li>
              <li className="text-sm text-neutral-400">
                Solar Panel Maintenance
              </li>
              <li className="text-sm text-neutral-400">Energy Audits</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold mb-6 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#1092CF] mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-neutral-400">
                  Address Plaza no 30,Giga Down Town
                  <br />
                  Opposite to Lignum Tower, DHA 2, Islamabad
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#1092CF] flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  0330 0358005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#1092CF] flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  celestialenergysmm08@gmail.com
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-neutral-800 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2">
                Business Hours
              </h4>
              <p className="text-xs text-neutral-400">
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
              <p className="text-xs text-neutral-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Celestial Energy Pakistan. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-xs text-neutral-500 hover:text-[#1092CF] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-neutral-500 hover:text-[#1092CF] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-neutral-500 hover:text-[#1092CF] transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
