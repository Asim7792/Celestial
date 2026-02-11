"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Projects', 
      href: '#',
      subLinks: [
        { name: 'Residential Projects', href: '/residential-projects' },
        { name: 'Commercial Projects', href: '/commercial-projects' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact-us' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1092CF] group-hover:bg-[#0F82BA] transition-colors">
              <Sun className="text-black" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-neutral-900 leading-tight">
                Celestial Energy
              </h1>
              <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Solar Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-[#1092CF] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
                
                {/* Dropdown for Projects */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-neutral-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block px-6 py-3 text-sm text-neutral-700 hover:bg-blue-50 hover:text-[#1092CF] first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <Phone size={16} className="text-[#1092CF]" />
              <span className="font-medium">+92 300 1234567</span>
            </div>
            <Link href="/contact-us">
              <button className="px-6 py-3 bg-[#1092CF] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0F82BA] transition-colors">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-neutral-200">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-3 text-base font-medium text-neutral-700 hover:text-[#1092CF] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="block py-2 text-sm text-neutral-600 hover:text-[#1092CF]"
                        onClick={() => setIsOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <Link href="/contact-us">
                <button className="w-full px-6 py-3 bg-[#1092CF] text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#0F82BA] transition-colors">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
