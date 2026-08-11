"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Home,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const COLORS = {
  light: "#EEEEEE",
  gray: "#393E46",
  accent: "#00ADB5",
  dark: "#222831",
};

const images = {
  hero:
    "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2200&q=90",
  roof:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=85",
  team1:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85",
  team2:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=85",
  team3:
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=85",
  project1:
    "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85",
  project2:
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
  project3:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  project4:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
  project5:
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  project6:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
};

const needs = [
  {
    title: "I need a new roof",
    description: "A complete roof replacement built to protect your home for years.",
    icon: Home,
  },
  {
    title: "My roof needs a repair",
    description: "Leaks, damaged shingles, flashing, gutters and storm damage.",
    icon: Sparkles,
  },
  {
    title: "I need a roof inspection",
    description: "Get a clear look at your roof's condition before a small issue grows.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Roof Inspections",
    text: "A thorough inspection to identify damage, wear, leaks and potential problems.",
  },
  {
    title: "Roof Replacement",
    text: "Professional shingle installation designed for long-term protection and curb appeal.",
  },
  {
    title: "Roof Repairs",
    text: "Fast, dependable repairs for leaks, damaged shingles, flashing and storm damage.",
  },
  {
    title: "Gutters & Flashing",
    text: "Proper drainage and flashing details that help keep water away from your home.",
  },
];

const process = [
  ["01", "Tell us what you need", "Choose the closest match. You don't need to know roofing terms or diagnose the problem yourself."],
  ["02", "Let us inspect the roof", "We'll assess the roof, document what we find and explain the practical options."],
  ["03", "Get a clear plan", "You get a straightforward scope, next steps and an estimate before work begins."],
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Local homeowner",
    text: "They explained exactly what was happening with our roof and didn't pressure us into a bigger project. The whole process was easy.",
  },
  {
    name: "Mike R.",
    location: "Local homeowner",
    text: "The crew showed up when they said they would, worked cleanly and left the property looking great. Highly recommend them.",
  },
  {
    name: "Jennifer K.",
    location: "Local homeowner",
    text: "From the inspection to the finished roof, everything was straightforward. We always knew what was happening next.",
  },
];

const faqs = [
  ["Do you offer free estimates?", "Yes. Start by telling us what you're dealing with and we'll let you know the best next step for your home."],
  ["Can you help if I don't know what's wrong?", "Absolutely. You don't need to diagnose the problem. We'll inspect the roof, explain what we find and walk you through your options."],
  ["Do you handle storm damage?", "Yes. We can inspect storm-related damage and explain the repair or replacement options available for your roof."],
  ["How soon can you start?", "Availability depends on the season, weather and project size. We'll give you a realistic timeline after learning about the project."],
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="#4285F4" d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z" />
    <path fill="#34A853" d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.5Z" />
    <path fill="#FBBC05" d="M6.53 13.58A5.86 5.86 0 0 1 6.22 12c0-.55.11-1.08.31-1.58V7.89H3.29A9.5 9.5 0 0 0 2.5 12c0 1.48.35 2.88.79 4.11l3.24-2.53Z" />
    <path fill="#EA4335" d="M12 6.39c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.39l3.24 2.53C7.3 8.11 9.46 6.39 12 6.39Z" />
  </svg>
);

export default function RoofingLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToRequest = (need?: string) => {
    if (need) setSelectedNeed(need);
    document.getElementById("request")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.light,
        color: COLORS.dark,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(238,238,238,.94)",
          borderColor: "rgba(34,40,49,.09)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
            >
              <Home className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-black tracking-tight">
                RIDGELINE ROOFING
              </div>
              <div
                className="text-[9px] font-bold uppercase tracking-[.18em]"
                style={{ color: COLORS.accent }}
              >
                Roofing Co.
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a href="#services" className="hover:opacity-60">Services</a>
            <a href="#process" className="hover:opacity-60">How It Works</a>
            <a href="#work" className="hover:opacity-60">Our Work</a>
            <a href="#team" className="hover:opacity-60">Our Team</a>
            <a href="#faq" className="hover:opacity-60">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="tel:18005550199" className="flex items-center gap-2 text-sm font-bold">
              <Phone className="h-4 w-4" style={{ color: COLORS.accent }} />
              (800) 555-0199
            </a>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="rounded-full px-5 py-3 text-sm font-black transition hover:opacity-80"
              style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
            >
              Get a Free Estimate
            </button>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:18005550199"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.accent, color: COLORS.dark }}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="border-t px-5 py-5 sm:hidden"
            style={{ borderColor: "rgba(34,40,49,.09)", backgroundColor: COLORS.light }}
          >
            <div className="space-y-4">
              {[
                ["Services", "#services"],
                ["How It Works", "#process"],
                ["Our Work", "#work"],
                ["Our Team", "#team"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-bold"
                >
                  {label}
                </a>
              ))}
              <button
              type="button"
                onClick={() => {
                  setMenuOpen(false);
                  scrollToRequest();
                }}
                className="w-full rounded-full px-5 py-3 font-black"
                style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
              >
                Get a Free Estimate
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO — one job, one CTA */}
      <section className="relative min-h-[680px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${images.hero}")` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(238,238,238,.98) 0%, rgba(238,238,238,.91) 42%, rgba(238,238,238,.40) 68%, rgba(34,40,49,.10) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(238,238,238,.78)",
                borderColor: "rgba(34,40,49,.10)",
              }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: COLORS.accent }} />
              Local • Licensed • Built to Last
            </div>

            <h1 className="text-5xl font-black leading-[.92] tracking-[-.045em] sm:text-6xl lg:text-8xl">
              A roof you
              <span className="block" style={{ color: COLORS.accent }}>
                can count on
              </span>
              over your home.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
              Roof inspections, repairs and replacements for homeowners who want
              their home protected — without making the process complicated.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
              type="button"
                onClick={() => scrollToRequest()}
                className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:opacity-85"
                style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
              >
                Tell Us About Your Roof
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="tel:18005550199"
                className="flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-black uppercase tracking-wide"
                style={{
                  borderColor: COLORS.dark,
                  backgroundColor: "rgba(238,238,238,.70)",
                }}
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {["Free estimates", "Real local crew", "Clear pricing", "No-pressure consultation"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" style={{ color: COLORS.accent }} />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GUIDED ENTRY — reduce cognitive load */}
      <section
        className="border-y py-12 sm:py-16"
        style={{ backgroundColor: COLORS.gray, color: COLORS.light, borderColor: "rgba(238,238,238,.12)" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.accent }}
            >
              Start here
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              What does your roof need?
            </h2>
            <p className="mt-3 text-sm opacity-65">
              Pick the closest answer. We'll guide you from there.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {needs.map((need) => {
              const Icon = need.icon;
              const active = selectedNeed === need.title;

              return (
                <button
                  key={need.title}
                  onClick={() => scrollToRequest(need.title)}
                  className="group rounded-2xl border p-5 text-left transition hover:-translate-y-0.5"
                  style={{
                    backgroundColor: active ? COLORS.accent : COLORS.light,
                    borderColor: active ? COLORS.accent : "rgba(34,40,49,.10)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: active ? COLORS.light : COLORS.gray,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-5 w-5 opacity-40 transition group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-5 font-black">{need.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed opacity-65">
                    {need.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* REQUEST — progressive disclosure */}
     {/* REQUEST — GUIDED CONSULTATION */}
<section
  id="request"
  className="scroll-mt-20 py-16 sm:py-20"
  style={{
    backgroundColor: COLORS.dark,
    color: COLORS.light,
  }}
>
  <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">

    {/* LEFT — GUIDE */}
    <div>
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[.16em]"
        style={{
          backgroundColor: "rgba(0,173,181,.14)",
          color: COLORS.accent,
        }}
      >
        <Sparkles className="h-3.5 w-3.5" />
        Start Your Project
      </div>

      <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-tight sm:text-5xl">
        Tell us what you're
        <span
          className="block"
          style={{ color: COLORS.accent }}
        >
          thinking.
        </span>
      </h2>

      <p className="mt-5 max-w-lg text-base leading-relaxed opacity-60 sm:text-lg">
        Whether you know exactly what you need or just noticed a problem,
        that's enough. Tell us a little about your roof and we'll take it from there.
      </p>

      {/* BENEFITS */}
      <div className="mt-8 space-y-4">
        {[
          "No need to know roofing terminology",
          "No-pressure consultation",
          "Talk directly with a real roofing expert",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm font-semibold"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.dark,
              }}
            >
              <Check className="h-4 w-4" />
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* RESPONSE EXPECTATION */}
      <div
        className="mt-8 flex max-w-md items-start gap-3 rounded-2xl border p-4"
        style={{
          borderColor: "rgba(238,238,238,.10)",
          backgroundColor: "rgba(238,238,238,.04)",
        }}
      >
        <Clock3
          className="mt-0.5 h-5 w-5 shrink-0"
          style={{ color: COLORS.accent }}
        />

        <div>
          <p className="text-sm font-black">
            What happens next?
          </p>
          <p className="mt-1 text-xs leading-relaxed opacity-50">
            We'll review your request and a member of our team
            will reach out to discuss your property and next steps.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT — FORM */}
    <form
      className="rounded-[28px] p-6 shadow-2xl sm:p-8"
      style={{
        backgroundColor: COLORS.light,
        color: COLORS.dark,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks! We'll be in touch.");
      }}
    >
      {/* FORM HEADER */}
      <div className="flex items-start justify-between gap-5">
        <div>
          <p
            className="text-[11px] font-black uppercase tracking-[.16em]"
            style={{ color: COLORS.accent }}
          >
            Free consultation
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Let's talk about your home.
          </h3>

          <p className="mt-2 text-sm leading-relaxed opacity-50">
            Just the basics. We'll handle the rest.
          </p>
        </div>

        <div
          className="shrink-0 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider"
          style={{
            backgroundColor: COLORS.gray,
            color: COLORS.dark,
          }}
        >
          Step 1
        </div>
      </div>

      {/* FORM FIELDS */}
      <div className="mt-7 space-y-5">

        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-black uppercase tracking-wider"
          >
            Your name
          </label>

          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="John Smith"
            className="h-12 w-full rounded-xl border bg-transparent px-4 text-sm font-medium outline-none transition placeholder:opacity-35 focus:ring-2"
            style={{
              borderColor: "rgba(34,40,49,.13)",
            }}
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-black uppercase tracking-wider"
          >
            Best phone number
          </label>

          <input
            id="phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            className="h-12 w-full rounded-xl border bg-transparent px-4 text-sm font-medium outline-none transition placeholder:opacity-35"
            style={{
              borderColor: "rgba(34,40,49,.13)",
            }}
          />
        </div>

        {/* PROJECT TYPE */}
        <div>
          <label
            htmlFor="project"
            className="mb-2 block text-xs font-black uppercase tracking-wider"
          >
            What can we help with?
          </label>

          <select
            id="project"
            name="project"
            required
            defaultValue={selectedNeed || ""}
            className="h-12 w-full rounded-xl border bg-transparent px-4 text-sm font-medium outline-none"
            style={{
              borderColor: "rgba(34,40,49,.13)",
            }}
          >
            <option value="" disabled>
              Select an option
            </option>

            {needs.map((need) => (
              <option key={need.title} value={need.title}>
                {need.title}
              </option>
            ))}

            <option value="Something else">
              Something else
            </option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-black uppercase tracking-wider"
          >
            Tell us a little about it
            <span className="ml-1 font-medium normal-case opacity-40">
              (optional)
            </span>
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="For example: We'd like to refresh our front roof and add some low-maintenance shingles."
            className="w-full resize-none rounded-xl border bg-transparent p-4 text-sm font-medium leading-relaxed outline-none transition placeholder:opacity-35"
            style={{
              borderColor: "rgba(34,40,49,.13)",
            }}
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5 hover:opacity-90"
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.dark,
          }}
        >
          Request My Free Roof Estimate

          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>

        {/* TRUST MICROCOPY */}
        <div className="flex items-center justify-center gap-2 text-center text-[11px] opacity-40">
          <ShieldCheck className="h-3.5 w-3.5" />
          No pressure. No obligation. Just a conversation.
        </div>
      </div>
    </form>
  </div>
</section>
      {/* SERVICES — compact */}
      <section id="services" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.light }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span
                className="text-xs font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.accent }}
              >
                What we do
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Reliable roofing.
                <span className="block" style={{ color: COLORS.accent }}>
                  Straightforward process.
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-black"
              style={{ borderColor: "rgba(34,40,49,.15)" }}
            >
              Talk about your roof <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: index === 1 ? COLORS.gray : COLORS.light,
                  borderColor: "rgba(34,40,49,.10)",
                }}
              >
                <div
                  className="text-xs font-black"
                  style={{ color: COLORS.accent }}
                >
                  0{index + 1}
                </div>
                <h3 className="mt-8 text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-60">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.gray, color: COLORS.light }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.accent }}>
              How it works
            </span>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              You shouldn't need a
              <span className="block" style={{ color: COLORS.accent }}>roofing expert.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed opacity-65">
              We keep the customer journey simple: tell us, inspect the roof,
              get the plan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl p-7"
                style={{ backgroundColor: COLORS.light }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  {number}
                </div>
                <h3 className="mt-7 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL WORK */}
      <section id="work" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.light }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.accent }}>
                Selected work
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Real roofs.
                <span className="block" style={{ color: COLORS.accent }}>
                  Properly finished.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
                A look at the kind of roofs our team creates for local homeowners.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-black"
              style={{ borderColor: "rgba(34,40,49,.15)" }}
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[220px]">
            <div className="group relative overflow-hidden rounded-3xl sm:row-span-2 md:col-span-2 md:row-span-2">
              <img src={images.project1} alt="Finished residential roof" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-75">Featured project</span>
                <h3 className="mt-2 max-w-md text-2xl font-black leading-tight sm:text-3xl">A roof built to protect what matters</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">Quality roofing work focused on protection, durability and a clean finished look.</p>
              </div>
            </div>

            {[
              [images.project2, "Front Roof", "Simple roofing. Big curb appeal.", "Residential roofing project"],
              [images.project3, "Roofing Refresh", "Fewer worries. More protection.", "Residential roofing refresh"],
              [images.project5, "Roofing", "Durable materials. Long-term protection.", "Residential roofing project"],
              [images.project6, "Maintenance", "A roof that's easier to trust.", "Roofing maintenance project"],
            ].map(([image, label, title, alt]) => (
              <div key={title} className="group relative overflow-hidden rounded-3xl md:col-span-1">
                <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white">
                  <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-70">{label}</span>
                  <h3 className="mt-1 text-lg font-black leading-tight">{title}</h3>
                </div>
              </div>
            ))}

            <div className="group relative overflow-hidden rounded-3xl md:col-span-2">
              <img src={images.project4} alt="Completed residential roofing project" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-70">Roof replacement</span>
                <h3 className="mt-1 max-w-sm text-xl font-black">A roof that finally feels secure.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM — authenticity */}
      <section id="team" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.dark, color: COLORS.light }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.accent }}>
                Meet the team
              </span>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">
                Real people.
                <span className="block" style={{ color: COLORS.accent }}>
                  Real accountability.
                </span>
              </h2>
            </div>
            <p className="max-w-xl leading-relaxed opacity-60">
              Roofing is personal. Customers are trusting your team with their home. Put the actual owner and crew on the page so visitors know who they're inviting onto their property.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [images.team1, "Alex Morgan", "Owner & Roofing Specialist"],
              [images.team2, "Maya Chen", "Project Lead"],
              [images.team3, "Ryan Brooks", "Crew Lead"],
            ].map(([image, name, role]) => (
              <div key={name} className="overflow-hidden rounded-2xl" style={{ backgroundColor: "rgba(238,238,238,.08)" }}>
                <div className="aspect-[4/4.3] overflow-hidden">
                  <img src={image} alt={name} className="h-full w-full object-cover grayscale-[15%]" />
                </div>
                <div className="p-5">
                  <div className="font-black">{name}</div>
                  <div className="mt-1 text-sm opacity-50">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section id="reviews" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.light }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm" style={{ borderColor: "rgba(34,40,49,.10)" }}>
                <GoogleIcon />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[.18em] opacity-45">Google Reviews</p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-3xl font-black">4.9</span>
                  <div className="flex gap-0.5">{[1,2,3,4,5].map((star) => <Star key={star} className="h-4 w-4 fill-current" style={{ color: "#FBBC04" }} />)}</div>
                </div>
                <p className="mt-1 text-xs opacity-40">Customer reviews</p>
              </div>
            </div>
            <div className="max-w-xl md:text-right">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Good work gets <span className="block" style={{ color: COLORS.accent }}>talked about.</span></h2>
              <p className="mt-3 text-sm leading-relaxed opacity-50 sm:text-base">See what homeowners have to say about working with our team.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7" style={{ backgroundColor: COLORS.gray, borderColor: "rgba(238,238,238,.12)", color: COLORS.light }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-black shadow-sm">{review.name.charAt(0)}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black">{review.name}</span>
                        <span className="text-[10px] font-semibold opacity-40">Google</span>
                      </div>
                      <p className="mt-0.5 text-[11px] opacity-40">{review.location}</p>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>
                <div className="mt-6 flex items-center gap-0.5">{[1,2,3,4,5].map((star) => <Star key={star} className="h-4 w-4 fill-current" style={{ color: "#FBBC04" }} />)}</div>
                <p className="mt-5 flex-1 text-[15px] leading-7">“{review.text}”</p>
                <div className="mt-6 border-t pt-4" style={{ borderColor: "rgba(34,40,49,.09)" }}>
                  <span className="text-[10px] font-black uppercase tracking-wider opacity-40">Posted on Google</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center" style={{ backgroundColor: COLORS.gray, borderColor: "rgba(238,238,238,.12)", color: COLORS.light }}>
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <div><p className="text-sm font-black">Want to see more?</p><p className="mt-0.5 text-xs opacity-45">Read more local homeowner reviews.</p></div>
            </div>
            <a href="#" className="group flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-wide transition hover:opacity-80" style={{ backgroundColor: COLORS.dark, color: COLORS.light }}>Read All Google Reviews<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.gray, color: COLORS.light }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[.18em]">Questions</span>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              Before we talk,
              <span className="block">here's what to know.</span>
            </h2>
          </div>

          <div className="mt-9 space-y-2">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;

              return (
                <div key={question} className="overflow-hidden rounded-2xl" style={{ backgroundColor: COLORS.light }}>
                  <button
              type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-black"
                  >
                    {question}
                    <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="border-t px-5 pb-5 pt-4 text-sm leading-relaxed opacity-65" style={{ borderColor: "rgba(34,40,49,.10)" }}>
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: COLORS.dark, color: COLORS.light }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.accent }}>
            Ready when you are
          </span>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Let's make your home
            <span className="block" style={{ color: COLORS.accent }}>
              feel protected.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed opacity-60">
            Tell us what's going on. We'll take it from there.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex items-center justify-center gap-2 rounded-full px-7 py-4 font-black uppercase"
              style={{ backgroundColor: COLORS.accent, color: COLORS.dark }}
            >
              Get a Free Estimate
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="tel:18005550199"
              className="flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-black uppercase"
              style={{ borderColor: COLORS.light }}
            >
              <Phone className="h-5 w-5" />
              Call (800) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
         {/* FOOTER */}
      <footer
        className="border-t"
        style={{
          backgroundColor: COLORS.light,
          borderColor: "rgba(34,40,49,.10)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.65fr_.65fr_1.35fr]">
            {/* BRAND + CONTACT */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: COLORS.dark, color: COLORS.light }}
                >
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-black tracking-tight">RIDGELINE ROOFING</div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[.18em]"
                    style={{ color: COLORS.accent }}
                  >
                    Roofing Co.
                  </div>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
                Reliable roof inspections, repairs and replacements for homes in our local community.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a href="tel:18005550199" className="flex items-center gap-3 font-bold hover:opacity-60">
                  <Phone className="h-4 w-4" style={{ color: COLORS.accent }} />
                  (800) 555-0199
                </a>
                <a
                  href="mailto:hello@ridgelineroofing.com"
                  className="flex items-center gap-3 font-semibold hover:opacity-60"
                >
                  <span className="text-sm font-black" style={{ color: COLORS.accent }}>@</span>
                  hello@ridgelineroofing.com
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[.18em]">Explore</h3>
              <div className="mt-5 space-y-3 text-sm">
                {[
                  ["Our Services", "#services"],
                  ["How It Works", "#process"],
                  ["Our Work", "#work"],
                  ["Meet The Team", "#team"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block font-semibold opacity-60 transition hover:opacity-100"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* GET STARTED + SOCIAL */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[.18em]">Get Started</h3>
              <div className="mt-5 space-y-3 text-sm">
                <button
                  onClick={() => scrollToRequest()}
                  className="block text-left font-bold transition hover:opacity-60"
                >
                  Get a Free Estimate
                </button>
                <a href="tel:18005550199" className="block font-semibold opacity-60 hover:opacity-100">
                  Call Us
                </a>
                <a href="#request" className="block font-semibold opacity-60 hover:opacity-100">
                  Request a Consultation
                </a>
                <a href="#faq" className="block font-semibold opacity-60 hover:opacity-100">
                  Frequently Asked Questions
                </a>
              </div>

              <div className="mt-7">
                <p className="text-xs font-black uppercase tracking-[.18em]">Follow us</p>
                <div className="mt-4 flex gap-2">
                  {[
                    ["IG", "https://instagram.com/", "Instagram"],
                    ["f", "https://facebook.com/", "Facebook"],
                    ["in", "https://linkedin.com/", "LinkedIn"],
                  ].map(([label, href, aria]) => (
                    <a
                      key={aria}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={aria}
                      className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-black transition hover:-translate-y-0.5"
                      style={{
                        borderColor: "rgba(34,40,49,.13)",
                        backgroundColor: COLORS.gray,
                        color: COLORS.light,
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* MAP + ADDRESS */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[.18em]">Find Us</h3>

              <div
                className="mt-5 overflow-hidden rounded-2xl border"
                style={{
                  borderColor: "rgba(34,40,49,.10)",
                  backgroundColor: COLORS.gray,
                }}
              >
                <iframe
                  title="Ridgeline Roofing Co. location"
                  src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed"
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4">
                <p className="text-sm font-black">Ridgeline Roofing Co.</p>
                <address className="mt-2 not-italic text-sm leading-relaxed opacity-60">
                  1234 Main Street
                  <br />
                  Denver, CO 80202
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=1234+Main+Street+Denver+CO+80202"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-black underline underline-offset-4"
                >
                  Get directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div
            className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs md:flex-row md:items-center"
            style={{ borderColor: "rgba(34,40,49,.10)" }}
          >
            <div className="opacity-45">
              © {new Date().getFullYear()} Ridgeline Roofing Co. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="opacity-45 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="opacity-45 hover:opacity-100">Terms of Service</a>
              <a href="#" className="opacity-45 hover:opacity-100">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}