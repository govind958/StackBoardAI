
"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/features" },
  { label: "How It Works", href: "/howitworks" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "Our Team", href: "/aboutus" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleBookCall = () => {
    window.location.href = "/bookingcallpage";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F9F8F6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="StackboardAI Home"
        >
          <div className="flex h-9 w-9 items-center justify-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 4L29 10L18 16L7 10L18 4Z"
                fill="#171615"
              />

              <path
                d="M7 13L18 19L29 13V19L18 25L7 19V13Z"
                fill="#171615"
                opacity="0.8"
              />

              <path
                d="M7 22L18 28L29 22V28L18 34L7 28V22Z"
                fill="#C9B59C"
              />
            </svg>
          </div>

          <span className="text-[21px] font-black tracking-tight text-[#171615]">
            Stackboard
            <span className="ml-1 text-[#8C7760]">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#171615] transition-opacity hover:opacity-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          type="button"
          onClick={handleBookCall}
          className="hidden items-center gap-2 rounded-full bg-[#171615] px-5 py-3 text-sm font-bold text-[#F9F8F6] transition hover:opacity-80 lg:flex"
        >
          <Phone className="h-4 w-4" />
          Book a Call
        </button>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleBookCall}
            className="flex h-10 items-center gap-2 rounded-full bg-[#171615] px-4 text-xs font-bold text-[#F9F8F6]"
            aria-label="Book a Call"
          >
            <Phone className="h-4 w-4" />

            <span className="hidden sm:inline">
              Book a Call
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9B59C] text-[#171615]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-black/10 bg-[#F9F8F6] px-5 py-5 lg:hidden">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-xl px-3 py-3 text-sm font-bold text-[#171615] hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 border-t border-black/10 pt-4">
            <button
              type="button"
              onClick={handleBookCall}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#171615] px-5 py-3 text-sm font-bold text-[#F9F8F6]"
            >
              <Phone className="h-4 w-4" />
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

