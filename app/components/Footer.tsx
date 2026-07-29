"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden border-t border-zinc-200 bg-[#F5F7FA] dark:border-zinc-800 dark:bg-[#0B0F19]">
      {/* Decorative gradient orb */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#FF6B35]/5 blur-3xl dark:bg-[#FF6B35]/10" />
      <div className="pointer-events-none absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-[#F7931E]/5 blur-3xl dark:bg-[#F7931E]/10" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8">
        {/* Top CTA Section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-br from-[#0B0F19] to-zinc-800 p-8 dark:from-zinc-900 dark:to-[#0B0F19] sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to scale your roofing business?
            </h2>
            <p className="mt-4 text-zinc-300">
              Join 200+ California contractors already using StackBoardAI to qualify and dispatch leads automatically.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-8 py-3.5 text-sm font-semibold text-[#0B0F19] shadow-lg shadow-[#FF6B35]/25 transition-all duration-300 hover:bg-[#F7931E] hover:shadow-[#FF6B35]/40 hover:scale-105 active:scale-95"
              >
                Schedule a Demo
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>

        <div className="xl:grid xl:grid-cols-12 xl:gap-12">
          {/* Brand Column - Wider */}
          <div className="xl:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F7931E] to-[#FF6B35] font-black text-[#0B0F19] shadow-lg shadow-[#FF6B35]/30">
                <span className="relative z-10">S</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                StackBoard<span className="text-[#FF6B35]">AI</span>
              </span>
            </div>
            
            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              AI-driven lead qualification and dispatch automation tailored specifically for licensed California roofing contractors. CSLB-compliant, SOC 2 ready.
            </p>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5 px-4 py-2 text-xs font-medium text-[#FF6B35]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F7931E] opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B35]"></span>
              </span>
              <span>All Systems Operational</span>
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span className="text-zinc-500 dark:text-zinc-500">99.9% Uptime</span>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {[
                { name: 'Twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-300 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/10 hover:text-[#FF6B35] dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-[#FF6B35]/50 dark:hover:bg-[#FF6B35]/10 dark:hover:text-[#FF6B35]"
                  aria-label={social.name}
                >
                  <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-7 xl:mt-0">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Product
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Wildfire Intelligence',
                  'Solar + Roof Bundles',
                  'HOA & Permit Checks',
                  'Instant SMS Responder',
                  'Lead Scoring AI',
                  'Dispatch Automation'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#features"
                      className="group relative inline-flex items-center text-sm text-zinc-600 transition-colors duration-200 hover:text-[#FF6B35] dark:text-zinc-400 dark:hover:text-[#FF6B35]"
                    >
                      <span className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-[#FF6B35] opacity-0 transition-all duration-200 group-hover:opacity-100" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Markets */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Top CA Markets
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  'Los Angeles & OC',
                  'Bay Area & Sonoma',
                  'San Diego County',
                  'Sacramento & Valley',
                  'Central Coast',
                  'Inland Empire'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group relative inline-flex items-center text-sm text-zinc-600 transition-colors duration-200 hover:text-[#FF6B35] dark:text-zinc-400 dark:hover:text-[#FF6B35]"
                    >
                      <span className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-[#FF6B35] opacity-0 transition-all duration-200 group-hover:opacity-100" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  { label: 'About Us', href: '#' },
                  { label: 'Privacy Policy', href: '#' },
                  { label: 'Terms of Service', href: '#' },
                  { label: 'Contact Support', href: '#' },
                  { label: 'System Status', href: '#' },
                  { label: 'Changelog', href: '#' }
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group relative inline-flex items-center text-sm text-zinc-600 transition-colors duration-200 hover:text-[#FF6B35] dark:text-zinc-400 dark:hover:text-[#FF6B35]"
                    >
                      <span className="absolute -left-3 h-1.5 w-1.5 rounded-full bg-[#FF6B35] opacity-0 transition-all duration-200 group-hover:opacity-100" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                Stay updated on California roofing tech
              </h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Get weekly insights on AI lead qualification, CSLB updates, and market trends.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:border-[#FF6B35]"
              />
              <button
                type="submit"
                className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-[#FF6B35] dark:text-[#0B0F19] dark:hover:bg-[#F7931E]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row">
          <p className="text-xs text-zinc-500 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} StackBoardAI Inc. All rights reserved. Built for California roofing professionals.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors duration-200 hover:text-[#FF6B35] dark:text-zinc-500 dark:hover:text-[#FF6B35]"
            >
              Back to top
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}