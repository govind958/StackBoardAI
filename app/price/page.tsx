"use client";

import { useState } from "react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const monthlyPrice = 297;
  const annualPrice = 247; // ~2 months free
  const savings = (monthlyPrice - annualPrice) * 12;

  const coreFeatures = [
    "Functional Website (10-20 pages)",
    "Automated Lead Follow Up",
    "Missed Call Text Back",
    "5-Star Magic Review Funnel",
    "One-Click Marketing Campaigns",
    "On-Site SEO",
  ];

  const otherServices = [
    {
      title: "Google My Business Optimizations",
      description: "Rank higher in local map packs. Complete GMB setup, weekly posts, photo optimization, and review response automation.",
      price: "+$97/mo",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: "Advanced SEO",
      description: "Dominate organic search. Backlink building, content clusters, technical SEO audits, and competitor gap analysis.",
      price: "+$197/mo",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Google Ads Management",
      description: "Pay-per-click that actually converts. Campaign build, A/B testing, negative keyword sculpting, and weekly optimization.",
      price: "+$297/mo",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 dark:bg-zinc-950 sm:py-32">
      {/* Ambient background effects */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Pricing
          </h2>
          <p className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Our Pricing
          </p>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Everything you need to automate your roofing business. No hidden fees, no setup costs.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-12 flex justify-center">
          <div className="relative flex items-center rounded-full bg-zinc-100 p-1 dark:bg-zinc-900">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                !isAnnual
                  ? "text-zinc-900 shadow-sm dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isAnnual
                  ? "text-zinc-900 shadow-sm dark:text-white"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
              }`}
            >
              Annually
            </button>
            {/* Sliding background pill */}
            <div
              className={`absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-white shadow-md transition-all duration-300 dark:bg-zinc-800 ${
                isAnnual ? "left-[calc(50%+2px)]" : "left-1"
              }`}
            />
          </div>
        </div>

        {/* Annual savings tag */}
        <div
          className={`mt-4 text-center text-sm font-medium text-amber-600 transition-all duration-300 dark:text-amber-400 ${
            isAnnual ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          Save ${savings.toLocaleString()}/year with annual billing
        </div>

        {/* Main Pricing Card */}
        <div className="mx-auto mt-16 max-w-lg">
          <div className="relative rounded-3xl border border-amber-500/30 bg-white p-8 shadow-2xl shadow-amber-900/10 dark:border-amber-500/20 dark:bg-zinc-900/80 dark:shadow-amber-900/20 sm:p-10">
            {/* Glow effect behind card */}
            <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-b from-amber-500/20 to-transparent opacity-50 blur-sm" />

            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-500/30">
                Most Popular
              </span>
            </div>

            <div className="mt-2 text-center">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Contractor Advanced
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                The complete growth stack for serious roofing contractors.
              </p>
            </div>

            <div className="mt-8 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                ${isAnnual ? annualPrice : monthlyPrice}
              </span>
              <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                /mo
              </span>
            </div>
            {isAnnual && (
              <p className="mt-1 text-center text-xs text-zinc-500 dark:text-zinc-500">
                Billed annually (${(annualPrice * 12).toLocaleString()}/year)
              </p>
            )}

            <ul className="mt-10 space-y-4">
              {coreFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 dark:bg-amber-400/10">
                    <svg
                      className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="#book-call"
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-4 text-sm font-bold text-white shadow-lg shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-800 hover:shadow-zinc-900/30 hover:scale-[1.02] active:scale-[0.98] dark:bg-amber-500 dark:text-zinc-950 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
              >
                <span className="relative z-10">BOOK A CALL</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 -translate-x-full rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-500">
                No credit card required. Setup in 48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Other Services Section */}
        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Other Services
          </h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Supercharge your plan with these add-on services.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-amber-500/20 dark:hover:bg-zinc-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors duration-300 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-amber-400">
                {service.icon}
              </div>
              <h4 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">
                {service.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-bold text-zinc-900 dark:text-white">
                  {service.price}
                </span>
                <a
                  href="#book-call"
                  className="text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              CSLB Compliant Systems
            </div>
            <span className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              30-Day Money-Back Guarantee
            </div>
            <span className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />
            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
              <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Setup in 48 Hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}