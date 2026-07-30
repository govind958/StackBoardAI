"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

/* ───────────────────────────────────────────────
   DATA
   ─────────────────────────────────────────────── */

const stats = [
  { value: "2,400+", label: "California Roofers" },
  { value: "48%", label: "Avg. Lead Increase" },
  { value: "< 2 min", label: "Response Time" },
  { value: "$3.2M", label: "Revenue Generated" },
];
const steps = [
  {
    step: "01",
    title: "Capture",
    desc: "Leads flow in from your website, Google Ads, Angi, and social media. Our system ingests them instantly — no more manual entry.",
  },
  {
    step: "02",
    title: "Qualify",
    desc: "AI scores every lead based on roof age, property type, location, and urgency. Hot leads get flagged immediately for your team.",
  },
  {
    step: "03",
    title: "Convert",
    desc: "Automated follow-ups via SMS, email, and voicemail keep prospects warm until they're ready for your inspection team.",
  },
];

const trustItems = [
  "No credit card",
  "14-day free trial",
  "Cancel anytime",
  "Bonded & Insured",
];

const press = [
  {
    tag: "Featured",
    date: "Dec 2024",
    title: "How StackBoardAI is Revolutionizing Roofing Lead Management",
    author: "Sarah Mitchell",
    excerpt: "A deep dive into how AI automation is transforming the roofing industry and helping contractors scale faster.",
    publication: "Roofing Today",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    tag: "Case Study",
    date: "Nov 2024",
    title: "From 5 Leads/Month to 47 in One Season",
    author: "James Rodriguez",
    excerpt: "Golden State Roofing shares their success story using wildfire targeting and AI lead scoring.",
    publication: "Contractor Weekly",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
];

/* ───────────────────────────────────────────────
   COMPONENTS
   ─────────────────────────────────────────────── */

function CheckIcon() {
  return (
    <svg className="h-3 w-3 text-[#0B0F19]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ───────────────────────────────────────────────
   PAGE
   ─────────────────────────────────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F19] font-sans text-white">
      <Navbar />

      <main className="flex w-full flex-1 flex-col items-center">
        {/* ═══════════════════════════════════════
            HERO
            ═══════════════════════════════════════ */}
        <section className="w-full px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
          <div className="mx-auto max-w-4xl">
            {/* Trust Badge */}
            <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-sm text-zinc-300">
                Trusted by <span className="font-semibold text-white">2,400+</span> CA roofers
              </span>
              <span className="ml-1 text-sm font-bold text-white">4.9</span>
            </div>

            {/* Headline */}
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Roofing Leads That{" "}
              <span className="text-[#FF6B35]">Actually Convert</span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              AI automation built for California roofers. Capture, qualify & close — while you're on the ladder.
            </p>

            {/* CTAs */}
            <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 py-3.5 text-sm font-bold text-[#0B0F19] transition-all hover:scale-105 hover:bg-[#F7931E] w-full sm:w-auto"
              >
                Start Free Trial
                <span>→</span>
              </a>
              <a
                href="/demo"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5 w-full sm:w-auto"
              >
                ▶ Watch Demo
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500 sm:gap-6">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>

        {/* ═══════════════════════════════════════
            FEATURES
            ═══════════════════════════════════════ */}
            {/* ═══════════════════════════════════════
    FEATURES — BENTO GRID
    ═══════════════════════════════════════ */}
<section className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-6xl">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold text-[#FF6B35]">Features</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Everything we handle for you
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
        One platform. Zero manual work. Built exclusively for roofing contractors.
      </p>
    </div>

    {/* Bento Grid — 4 cols × 3 rows, perfect fit */}
    <div className="grid grid-cols-1 gap-4 auto-rows-[220px] sm:grid-cols-2 lg:grid-cols-4">

      {/* ── Card 1: 5-Star Review Funnel (2×2) ── */}
      <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-7 transition-all duration-300 hover:bg-[#16161a] sm:col-span-2 sm:row-span-2">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              Fully Automated
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">5-Star Magic Review Funnel</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
            Automatically requests reviews at peak satisfaction. Negative feedback is intercepted privately before it hits public platforms.
          </p>
        </div>

        {/* Inner stat card — matches your screenshot style */}
        <div className="mt-6 rounded-2xl bg-white/[0.03] p-5">
          <p className="text-xs text-zinc-500">Average rating generated</p>
          <div className="mt-2 flex items-center gap-4">
            <span className="text-4xl font-bold tracking-tight text-white">4.9</span>
            <div className="flex gap-0.5 text-lg text-amber-400">★★★★★</div>
          </div>
        </div>
      </div>

      {/* ── Card 2: Functional Website (1×1) ── */}
      <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-6 transition-all duration-300 hover:bg-[#16161a]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Functional Website</h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            High-converting roofing sites with instant quote forms and live chat.
          </p>
        </div>
      </div>

      {/* ── Card 3: Storm Damage Alerts (1×1) ── */}
      <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-6 transition-all duration-300 hover:bg-[#16161a]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Storm Damage Alerts</h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            Real-time hail & wind alerts so you reach homeowners before competitors.
          </p>
        </div>
      </div>

      {/* ── Card 4: Wildfire Zone Targeting (1×1) ── */}
     {/* ── Card 4: Wildfire Zone Targeting (1×1) with Modern Fire Scene ── */}
<div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-6 transition-all duration-300 hover:bg-[#16161a]">
  
  {/* Modern Fire Scene — thin strip at bottom */}
  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 overflow-hidden opacity-60 transition-opacity duration-500 group-hover:opacity-100">
    
    {/* Ground line */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800" />
    
    {/* Silhouettes: Trees + House */}
    <div className="absolute bottom-1 left-2 flex items-end gap-2 opacity-40">
      {/* Tree 1 */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-zinc-700" />
        <div className="w-0.5 h-3 bg-zinc-700 -mt-1" />
      </div>
      {/* House */}
      <div className="relative flex flex-col items-center mx-1">
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[7px] border-l-transparent border-r-transparent border-b-zinc-700" />
        <div className="w-4 h-3.5 bg-zinc-700" />
        {/* Glowing window */}
        <div className="absolute top-2 left-1 w-1 h-1 bg-amber-500 rounded-[1px] animate-window-glow" />
      </div>
      {/* Tree 2 */}
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-zinc-700" />
        <div className="w-0.5 h-4 bg-zinc-700 -mt-1" />
      </div>
{/* Tree 3 */}
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-zinc-700" />
        <div className="w-0.5 h-4 bg-zinc-700 -mt-1" />
      </div>
{/* House 2 */}
      <div className="relative flex flex-col items-center mx-1">
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[7px] border-l-transparent border-r-transparent border-b-zinc-700" />
        <div className="w-4 h-3.5 bg-zinc-700" />
        {/* Glowing window */}
        <div className="absolute top-2 left-1 w-1 h-1 bg-amber-500 rounded-[1px] animate-window-glow" />
        <div className="absolute top-2 left-1 w-1 h-1 bg-amber-500 rounded-[2px] animate-window-glow" />
      </div>

    </div>
    
    
    {/* Animated Flames */}
    
    
    {/* Warm ambient glow */}
    <div className="absolute bottom-0 left-1/2 h-8 w-24 -translate-x-1/2 rounded-full bg-orange-500/10 blur-xl" />
  </div>

  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
    </svg>
  </div>
  <div className="relative z-10">
    <h3 className="text-sm font-bold text-white">Wildfire Zone Targeting</h3>
    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
      Geo-fenced campaigns that activate automatically in fire-affected ZIP codes.
    </p>
  </div>
</div>

      {/* ── Card 5: Missed Call Text Back (1×1) ── */}
      <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-6 transition-all duration-300 hover:bg-[#16161a]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">Missed Call Text Back</h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-400">
            Every missed call triggers an instant SMS with your booking calendar link.
          </p>
        </div>
      </div>

      {/* ── Card 6: AI Lead Command Center (4×1) ── */}
      <div className="group relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#131316] p-7 transition-all duration-300 hover:bg-[#16161a] sm:col-span-2 lg:col-span-4">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-5 sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI Lead Command Center</h3>
              <p className="mt-1 max-w-md text-sm text-zinc-400">
                One dashboard. Every lead source, conversation, and appointment — automatically organized and scored by AI.
              </p>
            </div>
          </div>

          {/* Inner stat cards */}
          <div className="flex gap-3">
            <div className="rounded-2xl bg-white/[0.03] px-5 py-3 text-center">
              <div className="text-xl font-bold text-white">&lt;2 min</div>
              <div className="mt-0.5 text-[10px] font-medium text-zinc-500">Response Time</div>
            </div>
            <div className="rounded-2xl bg-white/[0.03] px-5 py-3 text-center">
              <div className="text-xl font-bold text-white">48%</div>
              <div className="mt-0.5 text-[10px] font-medium text-zinc-500">Conversion Lift</div>
            </div>
            <div className="hidden rounded-2xl bg-white/[0.03] px-5 py-3 text-center sm:block">
              <div className="text-xl font-bold text-white">2,400+</div>
              <div className="mt-0.5 text-[10px] font-medium text-zinc-500">Roofers Active</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
 {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>
       
        {/* ═══════════════════════════════════════
            HOW IT WORKS
            ═══════════════════════════════════════ */}
       {/* ═══════════════════════════════════════
    HOW IT WORKS — Modern Vertical Timeline
    ═══════════════════════════════════════ */}
<section id="how-it-works" className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-3xl">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <p className="text-sm font-semibold text-[#FF6B35]">How It Works</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Three steps to more roofing jobs
      </h2>
    </div>

    {/* Timeline */}
    <div className="relative space-y-10 sm:space-y-14">
      {/* Vertical connector line */}
      <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-gradient-to-b from-[#FF6B35] via-[#FF6B35]/40 to-transparent sm:block" />

      {/* ── Step 1 ── */}
      <div className="group relative flex items-start gap-6 sm:gap-8">
        <div className="relative z-10 flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-[#131316] text-2xl font-black text-[#FF6B35] transition-colors group-hover:border-[#FF6B35]/40">
            01
          </div>
        </div>
        <div className="flex-1 pt-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <h3 className="text-lg font-bold text-white sm:text-xl">Book a Demo Call</h3>
            <span className="w-fit rounded-full bg-[#FF6B35]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">
              20 minutes
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            We'll show you exactly how the system works using real data from roofers in your area. No pressure, no slides — just a straightforward screen share where you can ask anything.
          </p>
        </div>
      </div>

      {/* ── Step 2 ── */}
      <div className="group relative flex items-start gap-6 sm:gap-8">
        <div className="relative z-10 flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-[#131316] text-2xl font-black text-[#FF6B35] transition-colors group-hover:border-[#FF6B35]/40">
            02
          </div>
        </div>
        <div className="flex-1 pt-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <h3 className="text-lg font-bold text-white sm:text-xl">We Build Everything</h3>
            <span className="w-fit rounded-full bg-[#FF6B35]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">
              7–10 days
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            You fill out one onboarding form. We handle the rest — your website, automation, lead sources, review funnels, and wildfire targeting. You don't lift a finger while we work behind the scenes.
          </p>
        </div>
      </div>

      {/* ── Step 3 ── */}
      <div className="group relative flex items-start gap-6 sm:gap-8">
        <div className="relative z-10 flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-[#131316] text-2xl font-black text-[#FF6B35] transition-colors group-hover:border-[#FF6B35]/40">
            03
          </div>
        </div>
        <div className="flex-1 pt-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <h3 className="text-lg font-bold text-white sm:text-xl">Go Live & Get Leads</h3>
            <span className="w-fit rounded-full bg-[#FF6B35]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">
              25 minutes
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            One quick call to walk through your dashboard. We show you where the leads come in and how to respond. Then you start booking inspections the same week.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
 {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>
{/* ═══════════════════════════════════════
    WHO WE HELP — Minimal Grid
    ═══════════════════════════════════════ */}
<section className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-5xl">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold text-[#FF6B35]">Who We Help</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Built for contractors
      </h2>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
      {/* ── Roofers — Active ── */}
      <div className="group relative aspect-[3/4] overflow-hidden rounded-[24px] border border-zinc-800 bg-[#131316] transition-all duration-300 hover:border-zinc-700">
        <img
          src="/image/roof.png"
          alt="Roofers"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="rounded-full bg-[#FF6B35] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B0F19]">
            Live
          </span>
          <h3 className="mt-2 text-lg font-bold text-white">Roofers</h3>
        </div>
      </div>

      {/* ── Solar — Active ── */}
      <div className="group relative aspect-[3/4] overflow-hidden rounded-[24px] border border-zinc-800 bg-[#131316] transition-all duration-300 hover:border-zinc-700">
        <img
          src="/image/solar.png"
          alt="Solar"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B0F19]">
            Live
          </span>
          <h3 className="mt-2 text-lg font-bold text-white">Solar</h3>
        </div>
      </div>

      {/* ── HVAC — Coming Soon ── */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-zinc-800 bg-[#131316]">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            </svg>
          </div>
          <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Coming Soon
          </span>
          <h3 className="text-lg font-bold text-zinc-500">HVAC</h3>
        </div>
      </div>

      {/* ── Landscaping — Coming Soon ── */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-zinc-800 bg-[#131316]">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
          </div>
          <span className="rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Coming Soon
          </span>
          <h3 className="text-lg font-bold text-zinc-500">Landscaping</h3>
        </div>
      </div>

    </div>
  </div>
</section>



 {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>











 {/* ═══════════════════════════════════════
    IN THE PRESS — Magazine Grid
    ═══════════════════════════════════════ */}
<section className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-5xl">
    {/* Centered Header */}
    <div className="text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[#FF6B35]">In The News</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        StackBoardAI in the Press
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-400">
        Featured in leading publications across the contracting and tech industry.
      </p>
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:border-[#FF6B35] hover:text-[#FF6B35]"
      >
        View All Press
      </a>
    </div>

    {/* Publication Badges */}
    <div className="mb-12 mt-10 flex flex-wrap items-center justify-center gap-3">
      {["Authority Magazine", "Innovation Strategy", "Contractor Weekly", "Forbes", "TechCrunch"].map((pub) => (
        <span
          key={pub}
          className="rounded-full border border-zinc-800 bg-[#131316] px-4 py-2 text-xs font-medium text-zinc-500 transition-colors hover:border-zinc-700 hover:text-zinc-300"
        >
          {pub}
        </span>
      ))}
    </div>

    {/* Articles — Vertical Cards */}
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {press.map((item, i) => (
        <div
          key={i}
          className="group overflow-hidden rounded-[28px] border border-zinc-800 bg-[#131316] transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_0_40px_-15px_rgba(255,107,53,0.1)]"
        >
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-transparent opacity-50" />
            <span className="absolute left-5 top-5 rounded-full bg-[#FF6B35] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0B0F19]">
              {item.tag}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 text-xs text-zinc-500">
              <span>{item.date}</span>
              <span className="h-1 w-1 rounded-full bg-zinc-700" />
              <span className="italic">By {item.author}</span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {item.excerpt}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">
              <span className="text-xs font-medium text-zinc-500">📰 {item.publication}</span>
              <a
                href="#"
                className="flex items-center gap-1 text-sm font-semibold text-[#FF6B35] transition-colors hover:text-[#F7931E]"
              >
                Read Article <span>→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


 {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>


{/* ═══════════════════════════════════════
    TESTIMONIALS — Card Within Cards (Bento)
    ═══════════════════════════════════════ */}
<section className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-6xl">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold text-[#FF6B35]">Testimonials</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Trusted by roofers across California
      </h2>
    </div>

    {/* ── OUTER CARD ── */}
    <div className="rounded-[32px] border border-zinc-800 bg-[#131316] p-5 sm:p-7">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(200px,auto)]">
        
        {/* ══ Marcus — Big Featured (2×2) ══ */}
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0F19] p-6 transition-all duration-300 hover:border-zinc-700 md:col-span-2 md:row-span-2">
          <div>
            <div className="mb-3 text-3xl text-[#FF6B35]/30">❝</div>
            <blockquote className="text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
              "We went from chasing leads to having a full calendar. In the first month after wildfire season, StackBoardAI helped us book <span className="text-white">47 inspections in Sonoma County</span> alone. The automation literally pays for itself by day 12."
            </blockquote>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Marcus Chen"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-zinc-800"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Marcus Chen</span>
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Verified</span>
                </div>
                <div className="text-xs text-zinc-500">Golden State Roofing · Sonoma, CA</div>
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1 text-amber-400 text-sm">
              ★★★★★ <span className="text-xs text-zinc-500">4.9</span>
            </div>
          </div>
        </div>

        {/* ══ David — Top Right (2×1) ══ */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 transition-all duration-300 hover:border-zinc-700 md:col-span-2">
          <div>
            <div className="mb-2 text-2xl text-[#FF6B35]/30">❝</div>
            <blockquote className="text-sm leading-relaxed text-zinc-300">
              "The storm alert feature is insane. We got notified of hail damage in Orange County before the news even reported it. <span className="font-medium text-white">Closed 8 jobs in 72 hours</span> from that one alert."
            </blockquote>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="David Torres"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-zinc-800"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">David Torres</span>
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Verified</span>
              </div>
              <div className="text-xs text-zinc-500">Premier Roof Solutions · Orange County, CA</div>
            </div>
            <div className="text-amber-400 text-xs">★★★★★</div>
          </div>
        </div>

        {/* ══ Sarah — Middle Right (2×1) ══ */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 transition-all duration-300 hover:border-zinc-700 md:col-span-2">
          <div>
            <div className="mb-2 text-2xl text-[#FF6B35]/30">❝</div>
            <blockquote className="text-sm leading-relaxed text-zinc-300">
              "I was skeptical about the review funnel. But we went from 12 Google reviews to <span className="font-medium text-white">87 in six weeks</span>. Our average rating went from 3.8 to 4.9."
            </blockquote>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              alt="Sarah Lopez"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-zinc-800"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Sarah Lopez</span>
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Verified</span>
              </div>
              <div className="text-xs text-zinc-500">Lopez Family Roofing · San Diego, CA</div>
            </div>
            <div className="text-amber-400 text-xs">★★★★★</div>
          </div>
        </div>

        {/* ══ James — Bottom Left (2×1) ══ */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 transition-all duration-300 hover:border-zinc-700 md:col-span-2">
          <div>
            <div className="mb-2 text-2xl text-[#FF6B35]/30">❝</div>
            <blockquote className="text-sm leading-relaxed text-zinc-300">
              "We do both roofing and solar. StackBoardAI consolidated everything into one dashboard. <span className="font-medium text-white">$340K in new revenue in Q2</span> directly attributed to the system."
            </blockquote>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
              alt="James Wright"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-zinc-800"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">James Wright</span>
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Verified</span>
              </div>
              <div className="text-xs text-zinc-500">Wright Roofing & Solar · Bay Area, CA</div>
            </div>
            <div className="text-amber-400 text-xs">★★★★★ <span className="text-zinc-500">5.0</span></div>
          </div>
        </div>

        {/* ══ Ryan — Bottom Right (2×1) ══ */}
        <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B0F19] p-5 transition-all duration-300 hover:border-zinc-700 md:col-span-2">
          <div>
            <div className="mb-2 text-2xl text-[#FF6B35]/30">❝</div>
            <blockquote className="text-sm leading-relaxed text-zinc-300">
              "Missed Call Text Back saved us. I used to lose 4-5 leads a day because I was on a roof. Now every missed call gets an instant text. <span className="font-medium text-white">60% of those people book</span> through the link."
            </blockquote>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
              alt="Ryan Kim"
              className="h-9 w-9 rounded-full object-cover ring-2 ring-zinc-800"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Ryan Kim</span>
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">Verified</span>
              </div>
              <div className="text-xs text-zinc-500">Kim Roofing Co. · Sacramento, CA</div>
            </div>
            <div className="text-amber-400 text-xs">★★★★★</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

 {/* ═══════════════════════════════════════
            STATS
            ═══════════════════════════════════════ */}
        <section className="w-full border-y border-zinc-900 bg-white/[0.01] px-6 py-1">
          
        </section>

{/* ═══════════════════════════════════════
    FAQ — Split Panel Style
    ═══════════════════════════════════════ */}
<section className="w-full px-6 py-16 lg:py-24">
  <div className="mx-auto max-w-5xl">
    {/* Section Header */}
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold text-[#FF6B35]">FAQ</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Questions? Answered.
      </h2>
    </div>

    {/* Outer Card */}
    <div className="overflow-hidden rounded-[32px] border border-zinc-800 bg-[#131316]">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        
        {/* Left: Question List */}
        <div className="divide-y divide-zinc-800 lg:col-span-2 lg:divide-y-0 lg:divide-x-0">
          {[
            { num: "01", q: "When will I start seeing results?" },
            { num: "02", q: "Why is pricing so affordable?" },
            { num: "03", q: "What if I want to cancel?" },
            { num: "04", q: "Will my site rank on Google?" },
            { num: "05", q: "Why not just rely on word of mouth?" },
          ].map((item, i) => {
            const isActive = openFaq === i;
            return (
              <button
                key={i}
                onClick={() => setOpenFaq(i)}
                className={`flex w-full items-start gap-4 p-5 text-left transition-all duration-300 sm:p-6 lg:border-r lg:border-zinc-800 ${
                  isActive
                    ? "bg-[#FF6B35]/5"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                <span
                  className={`mt-0.5 text-xs font-black sm:text-sm ${
                    isActive ? "text-[#FF6B35]" : "text-zinc-600"
                  }`}
                >
                  {item.num}
                </span>
                <span
                  className={`text-sm font-semibold leading-snug ${
                    isActive ? "text-white" : "text-zinc-400"
                  }`}
                >
                  {item.q}
                </span>
                {isActive && (
                  <div className="ml-auto hidden h-2 w-2 rounded-full bg-[#FF6B35] lg:block" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Answer Display */}
        <div className="relative flex items-center lg:col-span-3">
          {/* Active indicator line (mobile) */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#FF6B35] to-transparent lg:hidden" />
          
          <div className="p-6 sm:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-white sm:text-xl">
              {[
                "When am I going to start seeing results?",
                "Why is your pricing so affordable compared to agencies?",
                "What happens if I decide to cancel my membership?",
                "Can people find my website on Google?",
                "Why should I spend on a website when word of mouth already works?",
              ][openFaq ?? 0]}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              {[
                "Most contractors see their first qualified leads within 7–10 days of going live. Your website is built and ads are launched during that window, so the pipeline starts filling immediately.",
                "We built proprietary AI automation that handles 90% of the work agencies charge thousands for. No bloated account teams. Just smart software and dedicated support.",
                "You own your website and data. Cancel anytime with zero penalties. We'll even help you export everything. No contracts, no drama.",
                "Absolutely. Every site we build is optimized for local SEO — fast loading, mobile-first, schema markup, and location pages for every city you serve.",
                "Word of mouth is great, but it's not predictable. Our system captures the 80% of homeowners who search online first, then automates the follow-up so no lead slips through.",
              ][openFaq ?? 0]}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-zinc-800 bg-[#0B0F19] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs text-zinc-400 sm:text-sm">
                Still unsure? <a href="#get-started" className="font-semibold text-[#FF6B35] hover:text-[#F7931E]">Book a 20-min demo</a> and we'll show you live results.
              </p>
            </div>
          </div>
        </div>

      </div>
{/* Support CTA Card */}
<div className="mt-8 overflow-hidden rounded-[28px] border border-zinc-800 bg-[#131316] p-1">
  <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] bg-gradient-to-br from-[#FF6B35]/[0.07] via-transparent to-transparent px-6 py-8 sm:flex-row sm:px-10 sm:py-9">
    <div className="flex items-start gap-4 sm:items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35]">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-white sm:text-xl">Still have questions?</h3>
        <p className="mt-1 text-sm text-zinc-400">
          Our team typically responds in under 5 minutes during business hours.
        </p>
      </div>
    </div>
    <a
      href="#get-started"
      className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-7 py-3 text-sm font-bold text-[#0B0F19] transition-all hover:scale-105 hover:bg-[#F7931E]"
    >
      Chat With Support
      <span>→</span>
    </a>
  </div>
</div>

    </div>
  </div>
</section>






      
      </main>

      <Footer />
    </div>
  );
}