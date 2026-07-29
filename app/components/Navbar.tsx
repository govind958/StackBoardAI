"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for enhanced glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "/price" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-zinc-200/60 bg-[#F5F7FA]/80 shadow-lg shadow-zinc-900/5 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-[#0B0F19]/80"
            : "border-b border-transparent bg-[#F5F7FA]/60 backdrop-blur-md dark:bg-[#0B0F19]/40"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
          {/* Brand / Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2.5"
            aria-label="StackBoard AI Home"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-lg shadow-[#FF6B35]/30 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[#FF6B35]/50">
              <Image
                src="/image/logo.png"
                alt="StackBoard AI Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900 transition-colors dark:text-white">
              StackBoard<span className="text-[#FF6B35]">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-[#FF6B35] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="#login"
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/start-free-trial"
              className="group relative flex h-10 items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-800 hover:shadow-zinc-900/30 hover:scale-105 active:scale-95 dark:bg-[#FF6B35] dark:text-[#0B0F19] dark:shadow-[#FF6B35]/20 dark:hover:bg-[#F7931E] dark:hover:shadow-[#FF6B35]/40"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-sm dark:bg-black/60"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-zinc-200 bg-[#F5F7FA]/95 p-6 pt-20 shadow-2xl shadow-zinc-900/20 backdrop-blur-xl transition-transform duration-500 dark:border-zinc-800 dark:bg-[#0B0F19]/95 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35] opacity-0 transition-opacity group-hover:opacity-100" />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <Link
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl border border-zinc-300 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
            >
              Log in
            </Link>
            <Link
              href="/start-free-trial"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-12 items-center justify-center rounded-xl bg-[#FF6B35] text-sm font-semibold text-[#0B0F19] shadow-lg shadow-[#FF6B35]/25 transition-all hover:bg-[#F7931E] hover:shadow-[#FF6B35]/40 hover:scale-[1.02] active:scale-95"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Decorative bottom element */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800/50">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Trusted by 200+ contractors
              </p>
              <div className="mt-2 flex -space-x-2">
                {["bg-[#FF6B35]", "bg-[#F7931E]", "bg-zinc-600", "bg-[#FF6B35]"].map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white dark:border-[#0B0F19] ${color}`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-[10px] font-bold text-zinc-600 dark:border-[#0B0F19] dark:bg-zinc-700 dark:text-zinc-300">
                  +196
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[60px]" />
    </>
  );
}