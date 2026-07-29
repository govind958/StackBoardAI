"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function StartFreeTrialPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    market: "",
    crewSize: "",
    needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const benefits = [
    { title: "Functional Website", desc: "10-20 pages, SEO-optimized, mobile-first" },
    { title: "AI Lead Qualification", desc: "Instant SMS & call response 24/7" },
    { title: "Missed Call Text Back", desc: "Every missed call becomes a booked lead" },
    { title: "5-Star Review Funnel", desc: "Automated reputation building" },
    { title: "One-Click Campaigns", desc: "Wildfire, solar & storm outreach" },
    { title: "Dedicated Onboarding", desc: "California specialist, live in 48h" },
  ];

  const faqs = [
    {
      q: "Do I need a credit card to start?",
      a: "No. The 30-day trial is completely free. We only ask for billing details if you decide to continue after your trial ends.",
    },
    {
      q: "How long does setup take?",
      a: "Most contractors are live within 48 hours. We handle the website migration, phone line connection, and AI training. You just show up for a 15-minute discovery call.",
    },
    {
      q: "Is this CSLB compliant?",
      a: "Absolutely. Every automation follows California State License Board regulations and TCPA guidelines. We never solicit without proper consent.",
    },
    {
      q: "What if I already have a website?",
      a: "We can either rebuild it on our high-conversion framework or integrate with your existing site. Either way, the lead capture and AI backend connects seamlessly.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. There are no annual contracts for the core plan. You can cancel with 7 days notice and keep any data we have collected for you.",
    },
  ];

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="relative flex min-h-[80vh] items-center justify-center bg-white px-6 py-24 dark:bg-zinc-950">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
          <div className="relative mx-auto max-w-lg text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
              <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              You are all set!
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              A StackBoardAI onboarding specialist will call you within the next 2 hours to set up your account.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-left dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">What happens next?</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">1</span>
                  Discovery call (15 min)
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">2</span>
                  Account & phone line setup
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">3</span>
                  AI training on your brand voice
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">4</span>
                  Go live in 48 hours
                </li>
              </ul>
            </div>
            <a
              href="/"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
            >
              Back to Home
            </a>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="relative bg-white dark:bg-zinc-950">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

        {/* HERO + FORM SPLIT */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* LEFT — Value Prop */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                  </span>
                  30-Day Free Trial — No Credit Card
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    Free Trial
                  </span>{" "}
                  Today
                </h1>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Get full access to StackBoardAI's lead qualification, dispatch automation, and review funnel. No credit card required. Setup in under 48 hours.
                </p>

                {/* Benefits */}
                <div className="mt-10 space-y-5">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{benefit.title}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:grid-cols-4">
                  {[
                    { value: "200+", label: "CA Contractors" },
                    { value: "99.9%", label: "Uptime" },
                    { value: "48h", label: "Avg. Setup" },
                    { value: "$0", label: "Setup Fee" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Trust Logos */}
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Trusted by roofing pros across California
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 opacity-60 grayscale transition-opacity hover:opacity-100">
                    {["Los Angeles", "Bay Area", "San Diego", "Sacramento"].map((city) => (
                      <span
                        key={city}
                        className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT — Form */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-xl dark:from-amber-500/20 dark:to-orange-500/10" />
                <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-10">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Get Started Now
                  </h2>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Fill the form below. Our team will set up your account and schedule a personalized onboarding call.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Martinez"
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@roofingco.com"
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Martinez Roofing Inc."
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Primary Market <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          name="market"
                          value={formData.market}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900"
                        >
                          <option value="">Select your market</option>
                          <option value="los-angeles">Los Angeles & OC</option>
                          <option value="bay-area">Bay Area & Sonoma</option>
                          <option value="san-diego">San Diego County</option>
                          <option value="sacramento">Sacramento & Valley</option>
                          <option value="central-coast">Central Coast</option>
                          <option value="inland-empire">Inland Empire</option>
                          <option value="other">Other CA Region</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                          Crew Size
                        </label>
                        <select
                          name="crewSize"
                          value={formData.crewSize}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900"
                        >
                          <option value="">Select crew size</option>
                          <option value="1-2">1-2 crews</option>
                          <option value="3-5">3-5 crews</option>
                          <option value="6-10">6-10 crews</option>
                          <option value="10+">10+ crews</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                        What do you need help with?
                      </label>
                      <textarea
                        name="needs"
                        value={formData.needs}
                        onChange={handleChange}
                        rows={3}
                        placeholder="e.g. We get 50+ leads a month but only call back 10. Need automated follow-up..."
                        className="w-full resize-none rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 py-4 text-sm font-bold text-white shadow-lg shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-800 hover:shadow-zinc-900/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 dark:bg-amber-500 dark:text-zinc-950 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Setting up your account...
                          </>
                        ) : (
                          <>🚀 Start My Free Trial</>
                        )}
                      </span>
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    </button>

                    {/* Trust micro-badges */}
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-zinc-500 dark:text-zinc-500">
                      <span className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                        No credit card
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        30 days free
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>
                        Cancel anytime
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS TIMELINE */}
        <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Simple Onboarding
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                From signup to live in 48 hours
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Discovery Call",
                  desc: "15-minute call to understand your crews, service areas, and current lead flow.",
                },
                {
                  step: "2",
                  title: "We Build It",
                  desc: "Our team sets up your website, phone lines, AI training, and CRM connections.",
                },
                {
                  step: "3",
                  title: "You Go Live",
                  desc: "First leads start flowing through. You get a dashboard walkthrough and ongoing support.",
                },
              ].map((item) => (
                <div key={item.step} className="relative rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white shadow-lg shadow-amber-500/30">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-8 py-12 dark:from-zinc-800 dark:to-zinc-900 sm:px-16 sm:py-16">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative">
                <svg className="h-10 w-10 text-amber-500/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mt-6 text-xl font-medium leading-8 text-zinc-100 sm:text-2xl">
                  We went from answering 30% of our leads to answering 100%. StackBoardAI pays for itself in the first week. Best investment we have made for our roofing business.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 font-bold text-zinc-950">
                    MR
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Mike Rodriguez</p>
                    <p className="text-sm text-zinc-400">Rodriguez Roofing — Los Angeles, CA</p>
                  </div>
                  <div className="ml-auto hidden sm:flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Questions & Answers
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Everything you need to know
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white transition-all dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">{faq.q}</span>
                    <span
                      className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 transition-transform dark:bg-zinc-800 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    >
                      <svg className="h-3.5 w-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden px-6 transition-all duration-300 ${
                      openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEE STRIP */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                30-Day Money-Back Guarantee
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
                If StackBoardAI does not pay for itself within your first 30 days, we will refund every penny. No questions, no hoops. We are that confident.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#form"
                  onClick={() => document.getElementById("trial-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}