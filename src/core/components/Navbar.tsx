"use client";

import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Button } from './Button';
import Link from 'next/link';
import Funion_logo from '@/core/assets/LOGO_SVG.svg'

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);

  const programmeLinks = [
    // { href: "/programme/jour1", label: "Jour 1" },
    { href: "/programme/jour2", label: "Jour 1" },
    { href: "/programme/jour3", label: "Jour 2" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
        ? "bg-white/10 backdrop-blur-xl border-white/10 py-3 shadow-lg"
        : "bg-white/10 backdrop-blur-md border-white/5 py-3"
        }`}>

        <Container className="flex items-center justify-between relative">
          <Link href="/" className="font-bold text-2xl flex items-center gap-2">
            <img src={Funion_logo.src} alt='F_Union' className="h-12 w-40 object-contain transition-all duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
            <div
              className="relative"
              onMouseEnter={() => setIsProgrammeOpen(true)}
              onMouseLeave={() => setIsProgrammeOpen(false)}
            >
              <Link href="#programme" className={`${isScrolled ? "text-[#0d1f36]" : "text-white/90"} inline-flex items-center gap-2 hover:text-gray-600 transition-colors uppercase tracking-wide`}>Programme
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>

              <div className={`absolute left-1/2 top-full z-50 mt-3 w-44 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-200 ${isProgrammeOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 invisible'}`}>
                {programmeLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/speakers" className={`${isScrolled ? "text-[#0d1f36]" : "text-white/90"} hover:text-gray-600 transition-colors uppercase tracking-wide`}>Intervenant(e)s</Link>
            <Link href="#contact" className={`${isScrolled ? "text-[#0d1f36]" : "text-white/90"} hover:text-gray-600 transition-colors uppercase tracking-wide`}>Contact</Link>
            <Link href="/communique-presse" className={`${isScrolled ? "text-[#0d1f36]" : "text-white/90"} hover:text-gray-600 transition-colors uppercase tracking-wide`}>Presse</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Button*/}
            <div className="hidden lg:block">
              <Button variant="navy" size="md" href="https://billeterie.f-union.org/" className="rounded-full text-xs font-bold px-6">
                Reserver ma place
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                className="flex items-center p-2 text-white/90 hover:text-white transition-colors focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#845ec2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Sidebar (Drawer) */}
      <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMobileMenu}
        />

        {/* Sidebar content */}
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-gradient-to-br from-[#2D0A54] via-[#3a2051] to-[#1a0a2e] shadow-2xl transform transition-transform duration-500 ease-out border-l border-white/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img src={Funion_logo.src} alt='F_Union' className='h-8 w-24 object-contain transition-all duration-300' />
              <button
                onClick={toggleMobileMenu}
                className="text-white/70 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col py-10 px-8 gap-1 flex-grow overflow-y-auto">
              {[
                {
                  href: "#programme",
                  label: "Programme",
                  subLinks: programmeLinks
                },
                { href: "/speakers", label: "Intervenant(e)s" },
                { href: "#contact", label: "Contact" },
                { href: "/communique-presse", label: "Presse" }
              ].map((link) => (
                <div key={link.href} className="flex flex-col border-b border-white/5">
                  <Link
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-[#b39ddb] hover:text-white transition-all duration-300 uppercase tracking-widest font-black text-sm py-5 flex items-center justify-between group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#845ec2] transition-all duration-300 group-hover:w-full" />
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#845ec2] transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>

                  {'subLinks' in link && link.subLinks && (
                    <div className="flex flex-col gap-1 pb-4 pl-6">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={toggleMobileMenu}
                          className="text-[#d6c2f2] hover:text-white transition-all duration-300 font-semibold text-xs py-2 flex items-center gap-2 group/sub"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#845ec2]/40 group-hover/sub:bg-[#845ec2] transition-colors" />
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer / Brand Text */}
            <div className="p-8 mt-auto border-t border-white/10">
              <p className="text-[11px] text-white/60 uppercase tracking-[0.3em] font-bold text-center">
                © 2026 F-Union. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
