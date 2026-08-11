"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, Check, CircleAlert, Clock3, Globe2, Leaf,
  Menu, Mail, Phone, Search, ShieldCheck, Sparkles, Star, Target, X, Zap
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

type Audit = {
  id: number;
  category: string;
  business: string;
  location: string;
  score: number;
  title: string;
  finding: string;
  image: string;
  highlights: string[];
};

const AUDITS: Audit[] = [
  {
    id: 1, category: "Roofing", business: "Summit Roofing Co.", location: "Denver, CO",
    score: 72, title: "A solid website with major lead-response leaks.",
    finding: "The website creates trust, but the path from visitor to booked estimate has several points of friction.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Quote CTA is not consistently visible on mobile", "No clear instant-response expectation", "Follow-up opportunity after form submission"],
  },
  {
    id: 2, category: "Landscaping", business: "Evergreen Outdoor", location: "Austin, TX",
    score: 64, title: "Good visual presentation, but conversion is unclear.",
    finding: "The business looks credible online, but visitors have too many choices before they reach the estimate request.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Primary CTA competes with navigation", "Service pages lack strong next steps", "Mobile lead capture can be simplified"],
  },
  {
    id: 3, category: "HVAC", business: "Peak Air Systems", location: "Phoenix, AZ",
    score: 81, title: "Strong foundation — response speed is the opportunity.",
    finding: "The site performs well at generating intent, but the customer journey after the inquiry needs more automation.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Lead capture is easy to find", "Follow-up is mostly manual", "Missed-call recovery is an opportunity"],
  },
  {
    id: 4, category: "Home Services", business: "Northstar Home Pros", location: "Dallas, TX",
    score: 58, title: "Traffic is not the main problem — conversion is.",
    finding: "The business has multiple acquisition channels, but the website and follow-up process are leaking opportunities.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Homepage has too many competing actions", "No visible missed-call follow-up", "Past-customer reactivation is missing"],
  },
  {
    id: 5, category: "Roofing", business: "Blue Ridge Roofing", location: "Charlotte, NC",
    score: 76, title: "A credible brand that can capture more demand.",
    finding: "Trust signals are strong, but the conversion journey can be shortened and follow-up can be made more consistent.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Strong reviews above the fold", "Estimate flow has unnecessary steps", "Automated nurture would recover more opportunities"],
  },
  {
    id: 6, category: "Landscaping", business: "Modern Roots Landscaping", location: "San Diego, CA",
    score: 69, title: "Great portfolio — the lead journey needs direction.",
    finding: "The work is visually strong, but visitors need a clearer reason and easier path to request an estimate.",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1800&q=90",
    highlights: ["Portfolio is stronger than the CTA", "Lead form asks for too much too early", "Review follow-up can be automated"],
  },
];

const CATEGORIES = ["All", "Roofing", "Landscaping", "HVAC", "Home Services"];

function Score({ score }: { score: number }) {
  const r = 25;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative h-16 w-16 shrink-0">
      <svg viewBox="0 0 68 68" className="-rotate-90">
        <circle cx="34" cy="34" r={r} fill="none" stroke="rgba(23,22,21,.10)" strokeWidth="5" />
        <circle cx="34" cy="34" r={r} fill="none" stroke={COLORS.clay} strokeWidth="5"
          strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-black">{score}</span>
    </div>
  );
}

function Navbar({ openAudit }: { openAudit: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b" style={{
      backgroundColor: "rgba(249,248,246,.94)", borderColor: "rgba(23,22,21,.09)",
      backdropFilter: "blur(14px)"
    }}>
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
            <Leaf className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-black tracking-tight">FIELD & FORM</span>
            <span className="block text-[9px] font-bold uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>
              Landscape Co.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <a href="/services">Services</a>
          <a href="/HowItWorks">How It Works</a>
          <a href="/OurWorks">Our Work</a>
          <a href="/FreeGrowthAudit" className="font-black">Free Audit</a>
          <a href="/#faq">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href="tel:18005550199" className="flex items-center gap-2 text-sm font-bold">
            <Phone className="h-4 w-4" style={{ color: COLORS.clay }} /> (800) 555-0199
          </a>
          <button onClick={openAudit} className="rounded-full px-5 py-3 text-sm font-black"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
            Get a Free Audit
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button onClick={openAudit} className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }} aria-label="Get a free audit">
            <Search className="h-4 w-4" />
          </button>
          <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.clay, color: COLORS.black }} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t px-5 py-5 sm:hidden" style={{ borderColor: "rgba(23,22,21,.09)" }}>
          <div className="space-y-4">
            {[
              ["Services", "/services"], ["How It Works", "/HowItWorks"],
              ["Our Work", "/OurWorks"], ["Free Audit", "/FreeGrowthAudit"], ["FAQ", "/#faq"]
            ].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block font-bold">{label}</a>)}
            <button onClick={() => { setOpen(false); openAudit(); }} className="w-full rounded-full px-5 py-3 font-black"
              style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Get a Free Audit</button>
          </div>
        </div>
      )}
    </header>
  );
}

function AuditCard({ audit, onOpen }: { audit: Audit; onOpen: (a: Audit) => void }) {
  return (
    <article className="group overflow-hidden rounded-[26px] border transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.10)", boxShadow: "0 18px 55px rgba(23,22,21,.05)" }}>
      <div className="relative aspect-[1.35/.75] overflow-hidden">
        <img src={audit.image} alt={`${audit.business} growth audit`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"/>
        <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(to top,rgba(23,22,21,.5),transparent)" }} />
        <span className="absolute left-4 top-4 rounded-full px-3 py-2 text-[9px] font-black uppercase tracking-[.15em]"
          style={{ backgroundColor: COLORS.ivory }}>{audit.category}</span>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-sm font-black">{audit.business}</div>
          <div className="text-[10px] opacity-75">{audit.location}</div>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[.17em]" style={{ color: COLORS.clay }}>Growth Audit</div>
            <h3 className="mt-2 text-xl font-black leading-tight">{audit.title}</h3>
          </div>
          <Score score={audit.score} />
        </div>

        <p className="mt-4 text-sm leading-relaxed opacity-60">{audit.finding}</p>

        <div className="mt-5 space-y-2">
          {audit.highlights.slice(0, 2).map((item) => (
            <div key={item} className="flex items-start gap-2 text-xs font-semibold opacity-60">
              <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: COLORS.clay }} /> {item}
            </div>
          ))}
        </div>

        <button onClick={() => onOpen(audit)}
          className="mt-6 flex w-full items-center justify-between border-t pt-5 text-xs font-black uppercase tracking-[.12em]"
          style={{ borderColor: "rgba(23,22,21,.10)" }}>
          View Audit Summary
          <span className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </article>
  );
}

function AuditDetails({ audit, close }: { audit: Audit | null; close: () => void }) {
  useEffect(() => {
    if (!audit) return;
    const key = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [audit, close]);

  if (!audit) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      onMouseDown={(e) => e.currentTarget === e.target && close()}
      style={{ backgroundColor: "rgba(23,22,21,.58)", backdropFilter: "blur(7px)" }}>
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[30px] border"
        style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.12)" }}>
        <div className="relative">
          <img src={audit.image} alt="" className="h-52 w-full object-cover sm:h-64" />
          <button onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.ivory }}><X className="h-5 w-5" /></button>
        </div>
        <div className="p-7 sm:p-9">
          <div className="text-[10px] font-black uppercase tracking-[.17em]" style={{ color: COLORS.clay }}>{audit.category} · Growth Audit</div>
          <div className="mt-3 flex items-start justify-between gap-5">
            <div><h2 className="text-3xl font-black">{audit.business}</h2><p className="mt-1 text-xs opacity-45">{audit.location}</p></div>
            <Score score={audit.score} />
          </div>
          <h3 className="mt-8 text-xl font-black">{audit.title}</h3>
          <p className="mt-3 text-sm leading-relaxed opacity-60">{audit.finding}</p>
          <div className="mt-7 text-[10px] font-black uppercase tracking-[.17em] opacity-45">Key Findings</div>
          <div className="mt-4 grid gap-3">
            {audit.highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border p-4" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.08)" }}>
                <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" style={{ color: COLORS.clay }} />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestModal({ open, close }: { open: boolean; close: () => void }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) { setSent(false); return; }
    const key = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", key);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [open, close]);

  if (!open) return null;

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto p-4"
      onMouseDown={(e) => e.currentTarget === e.target && close()}
      style={{ backgroundColor: "rgba(23,22,21,.62)", backdropFilter: "blur(8px)" }}>
      <div className="relative my-6 w-full max-w-xl overflow-hidden rounded-[30px] border"
        style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.12)" }}>
        <button onClick={close} aria-label="Close form" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: COLORS.sand }}><X className="h-5 w-5" /></button>

        {sent ? (
          <div className="px-7 py-16 text-center sm:px-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
              <Check className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-3xl font-black">Your audit request is in.</h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed opacity-60">
              We&apos;ll review your website and growth journey and get back to you with the biggest opportunities we find.
            </p>
            <button onClick={close} className="mt-8 rounded-full px-6 py-3 text-sm font-black" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Done</button>
          </div>
        ) : (
          <>
            <div className="px-7 pb-7 pt-10 sm:px-10" style={{ backgroundColor: COLORS.sand }}>
              <div className="text-[10px] font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>100% Free · No Obligation</div>
              <h2 className="mt-3 max-w-md text-3xl font-black leading-tight sm:text-4xl">Find the leaks in your growth system.</h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-60">
                Give us a few details and we&apos;ll review your website, lead capture, response speed, follow-up, and conversion journey.
              </p>
            </div>

            <form onSubmit={submit} className="space-y-5 p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-black">Your Name
                  <input required name="name" placeholder="John Smith" className="mt-2 w-full rounded-xl border px-4 py-3 text-sm font-normal outline-none"
                    style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }} />
                </label>
                <label className="text-xs font-black">Business Name
                  <input required name="business" placeholder="Smith Roofing" className="mt-2 w-full rounded-xl border px-4 py-3 text-sm font-normal outline-none"
                    style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }} />
                </label>
              </div>

              <label className="block text-xs font-black">Website URL
                <div className="relative mt-2">
                  <Globe2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: COLORS.clay }} />
                  <input required type="url" name="website" placeholder="https://yourwebsite.com"
                    className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm font-normal outline-none"
                    style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }} />
                </div>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-black">Email
                  <div className="relative mt-2">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: COLORS.clay }} />
                    <input required type="email" name="email" placeholder="you@company.com"
                      className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm font-normal outline-none"
                      style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }} />
                  </div>
                </label>
                <label className="text-xs font-black">Phone
                  <div className="relative mt-2">
                    <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: COLORS.clay }} />
                    <input required type="tel" name="phone" placeholder="(555) 555-0199"
                      className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm font-normal outline-none"
                      style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }} />
                  </div>
                </label>
              </div>

              <label className="block text-xs font-black">What would you like to improve?
                <select name="goal" defaultValue="more-leads" className="mt-2 w-full rounded-xl border px-4 py-3 text-sm font-normal outline-none"
                  style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.14)" }}>
                  <option value="more-leads">Get more leads</option>
                  <option value="conversion">Convert more website visitors</option>
                  <option value="follow-up">Follow up faster</option>
                  <option value="bookings">Book more appointments</option>
                  <option value="reviews">Get more reviews</option>
                  <option value="not-sure">I&apos;m not sure yet</option>
                </select>
              </label>

              <div className="flex gap-3 rounded-2xl p-4" style={{ backgroundColor: COLORS.sand }}>
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" style={{ color: COLORS.clay }} />
                <p className="text-xs leading-relaxed opacity-55">No sales pitch required. We&apos;ll first show you what we find and where the biggest opportunities are.</p>
              </div>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black"
                style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
                Request My Free Audit <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ openAudit }: { openAudit: () => void }) {
  return (
    <footer className="border-t" style={{ borderColor: "rgba(23,22,21,.10)" }}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.7fr_.7fr_1.3fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
                <Leaf className="h-5 w-5" />
              </span>
              <span><span className="block text-base font-black">FIELD & FORM</span><span className="block text-[9px] font-bold uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>Landscape Co.</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">Growth systems for home-service businesses that want to capture more leads and book more work.</p>
            <a href="tel:18005550199" className="mt-5 flex items-center gap-3 text-sm font-bold"><Phone className="h-4 w-4" style={{ color: COLORS.clay }} /> (800) 555-0199</a>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">Explore</h3>
            <div className="mt-5 space-y-3 text-sm">
              <a href="/services" className="block opacity-60">Services</a>
              <a href="/HowItWorks" className="block opacity-60">How It Works</a>
              <a href="/OurWorks" className="block opacity-60">Our Work</a>
              <a href="/FreeGrowthAudit" className="block font-bold">Free Growth Audit</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">Get Started</h3>
            <div className="mt-5 space-y-3 text-sm">
              <button onClick={openAudit} className="block font-bold">Get a Free Audit</button>
              <a href="tel:18005550199" className="block opacity-60">Call Us</a>
              <a href="/#request" className="block opacity-60">Request a Consultation</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">Why Audit?</h3>
            <div className="mt-5 rounded-2xl border p-5" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.10)" }}>
              <p className="text-sm font-bold leading-relaxed">Before spending more on marketing, find out where your current system is leaking opportunities.</p>
              <button onClick={openAudit} className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.12em]">Request Audit <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-xs opacity-45" style={{ borderColor: "rgba(23,22,21,.10)" }}>
          © {new Date().getFullYear()} Field & Form Landscape Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function FreeGrowthAuditPage() {
  const [requestOpen, setRequestOpen] = useState(false);
  const [selected, setSelected] = useState<Audit | null>(null);
  const [category, setCategory] = useState("All");

  const audits = useMemo(
    () => category === "All" ? AUDITS : AUDITS.filter((a) => a.category === category),
    [category]
  );

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.ivory, color: COLORS.black, fontFamily: "Inter,ui-sans-serif,system-ui,sans-serif" }}>
      <Navbar openAudit={() => setRequestOpen(true)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[.16em]"
              style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.10)" }}>
              <Sparkles className="h-3.5 w-3.5" style={{ color: COLORS.clay }} /> Free Growth Audit
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[.93] tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Find where your business is
              <span className="block" style={{ color: COLORS.clay }}>losing leads.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
              We review the parts of your growth system that turn traffic into revenue — your website, lead capture, response speed, follow-up, booking flow, reviews, and more.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setRequestOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black"
                style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Get My Free Audit <ArrowRight className="h-4 w-4" /></button>
              <a href="#audit-library" className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-black"
                style={{ borderColor: "rgba(23,22,21,.12)" }}>Explore Audits <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold opacity-50">
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5" />100% Free</span>
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5" />100+ checks</span>
              <span className="flex items-center gap-2"><Check className="h-3.5 w-3.5" />No obligation</span>
            </div>
          </div>

          <div className="rounded-[30px] border p-3 shadow-[0_30px_80px_rgba(23,22,21,.10)]"
            style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.10)" }}>
            <div className="rounded-[23px] border p-6 sm:p-7" style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.10)" }}>
              <div className="flex items-start justify-between">
                <div><div className="text-[9px] font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>Growth Audit</div><div className="mt-2 text-xl font-black">Roofing Business</div><div className="mt-1 text-xs opacity-45">Website + Lead Journey</div></div>
                <Score score={72} />
              </div>
              <div className="mt-7 grid gap-3">
                {[
                  ["Website Conversion",78], ["Lead Capture",61], ["Response Speed",42], ["Follow-Up",55]
                ].map(([label, score]) => (
                  <div key={label as string} className="rounded-2xl border p-4" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.08)" }}>
                    <div className="flex justify-between text-xs font-bold"><span>{label}</span><span>{score}</span></div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/70"><div className="h-full rounded-full" style={{ width: `${score}%`, backgroundColor: Number(score) < 50 ? COLORS.black : COLORS.clay }} /></div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
                <div className="flex gap-3"><CircleAlert className="h-4 w-4 shrink-0" style={{ color: COLORS.clay }} /><div><div className="text-xs font-black">Biggest opportunity</div><p className="mt-1 text-[11px] leading-relaxed opacity-65">Leads can wait too long for a response after submitting the estimate form.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE AUDIT */}
      <section className="border-y" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.08)" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl"><div className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>What We Look At</div><h2 className="mt-3 text-3xl font-black sm:text-4xl">We audit the entire journey, <span className="block">not just your homepage.</span></h2></div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [Globe2,"Website & Conversion","Clarity, trust, mobile experience, speed, CTAs and conversion friction."],
              [Target,"Lead Capture","Forms, calls, quote requests, tracking and the path from visitor to lead."],
              [Clock3,"Response Speed","How quickly a new opportunity receives a useful response."],
              [Zap,"Follow-Up","SMS, email, missed calls, nurturing and appointment reminders."],
              [Star,"Reviews & Reputation","Review visibility, review requests, social proof and referral opportunities."],
              [BarChart3,"Growth Opportunities","The highest-impact changes that can improve the customer journey."]
            ].map(([Icon,title,text]) => {
              const I = Icon as typeof Globe2;
              return <div key={title as string} className="rounded-2xl border p-6" style={{ backgroundColor: COLORS.ivory, borderColor: "rgba(23,22,21,.08)" }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}><I className="h-4 w-4" /></div>
                <h3 className="mt-5 text-sm font-black">{title as string}</h3><p className="mt-2 text-xs leading-relaxed opacity-55">{text as string}</p>
              </div>
            })}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section id="audit-library" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div><div className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>Audit Library</div><h2 className="mt-3 text-3xl font-black sm:text-4xl">See the kind of problems we find.</h2><p className="mt-3 max-w-xl text-sm leading-relaxed opacity-55">Explore examples of growth audits across home-service businesses.</p></div>
            <button onClick={() => setRequestOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[.1em]" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Audit My Business <ArrowRight className="h-4 w-4" /></button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => <button key={c} onClick={() => setCategory(c)} className="rounded-full border px-4 py-2 text-xs font-bold"
              style={{ backgroundColor: category === c ? COLORS.black : COLORS.ivory, color: category === c ? COLORS.ivory : COLORS.black, borderColor: category === c ? COLORS.black : "rgba(23,22,21,.12)" }}>{c}</button>)}
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {audits.map((audit) => <AuditCard key={audit.id} audit={audit} onOpen={setSelected} />)}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y" style={{ backgroundColor: COLORS.black, color: COLORS.ivory, borderColor: COLORS.black }}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div><div className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>Your Audit</div><h2 className="mt-3 text-3xl font-black sm:text-4xl">Not a report full of random recommendations.</h2><p className="mt-5 max-w-md text-sm leading-relaxed opacity-55">The goal is to show you where the biggest opportunities are and what should be fixed first.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["100+","Growth checks"],["5–10","Priority findings"],["1","Clear action plan"],["$0","Cost to request"]].map(([n,l]) =>
                <div key={l} className="rounded-2xl border p-6" style={{ backgroundColor:"rgba(249,248,246,.055)", borderColor:"rgba(249,248,246,.12)" }}>
                  <div className="text-3xl font-black" style={{ color: COLORS.clay }}>{n}</div><div className="mt-2 text-xs font-bold uppercase tracking-[.12em] opacity-55">{l}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: COLORS.sand }}><Search className="h-5 w-5" /></div>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl">Curious what we would find <span className="block" style={{ color: COLORS.clay }}>on your website?</span></h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">Request your free growth audit. We&apos;ll look for the biggest leaks in your current lead journey and show you where to start.</p>
          <button onClick={() => setRequestOpen(true)} className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Get My Free Audit <ArrowRight className="h-4 w-4" /></button>
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-[.14em] opacity-35">No obligation · No credit card · Just useful findings</p>
        </div>
      </section>

      <Footer openAudit={() => setRequestOpen(true)} />
      <AuditDetails audit={selected} close={() => setSelected(null)} />
      <RequestModal open={requestOpen} close={() => setRequestOpen(false)} />
    </main>
  );
}