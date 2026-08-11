"use client";

import { useState } from "react";
import ChatWidget from "./../components/ChatWidget";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Leaf,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  X,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

const images = {
  hero:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2200&q=90",
  garden:
    "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1400&q=85",
  team1:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=85",
  team2:
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=85",
  team3:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  project1:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  project2:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
  project3:
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=85",
  project4:
    "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1600&q=85",
  project5:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85",
  project6:
    "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=85",
};

const needs = [
  {
    title: "I need a new landscape",
    description: "Design and build a yard you'll actually want to use.",
    icon: Trees,
  },
  {
    title: "My yard needs a refresh",
    description: "Cleanups, planting, mulch, beds, pruning and more.",
    icon: Sparkles,
  },
  {
    title: "I need regular maintenance",
    description: "Keep everything looking cared for all season.",
    icon: Leaf,
  },
];

const services = [
  {
    title: "Landscape Design",
    text: "A thoughtful plan for planting, beds, outdoor living and curb appeal.",
  },
  {
    title: "Landscape Installation",
    text: "Plants, trees, mulch, edging, beds and outdoor spaces installed properly.",
  },
  {
    title: "Lawn & Yard Care",
    text: "Reliable mowing, seasonal cleanup, pruning and ongoing maintenance.",
  },
  {
    title: "Seasonal Cleanup",
    text: "Spring and fall cleanup that gets your property looking right again.",
  },
];

const process = [
  ["01", "Tell us what you want", "Choose the closest match. You don't need to know the landscaping terms."],
  ["02", "Walk the property with us", "We'll look at the space, listen to what matters and recommend practical options."],
  ["03", "Get a simple plan", "You get a clear scope, next steps and an estimate before work begins."],
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Local homeowner",
    text: "They actually listened to what we wanted instead of trying to sell us a huge project. The yard feels completely different.",
  },
  {
    name: "Mike R.",
    location: "Local homeowner",
    text: "The crew showed up when they said they would, worked cleanly and left the property looking fantastic.",
  },
  {
    name: "Jennifer K.",
    location: "Local homeowner",
    text: "From the first walk-through to the finished beds, the whole process was easy. Exactly what we wanted.",
  },
];

const faqs = [
  ["Do you offer free estimates?", "Yes. Start by telling us what you're looking for and we'll let you know the best next step for your property."],
  ["Can you help if I don't know what I want?", "Absolutely. That's one of the reasons for the initial walkthrough. Tell us what you dislike about the yard and what you want it to feel like."],
  ["Do you handle ongoing maintenance?", "Yes. Maintenance can be arranged separately from design and installation, depending on the services available in your area."],
  ["How soon can you start?", "Availability depends on the season and project size. We'll give you a realistic timeline after learning about the project."],
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path fill="#4285F4" d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z" />
    <path fill="#34A853" d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.5Z" />
    <path fill="#FBBC05" d="M6.53 13.58A5.86 5.86 0 0 1 6.22 12c0-.55.11-1.08.31-1.58V7.89H3.29A9.5 9.5 0 0 0 2.5 12c0 1.48.35 2.88.79 4.11l3.24-2.53Z" />
    <path fill="#EA4335" d="M12 6.39c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.39l3.24 2.53C7.3 8.11 9.46 6.39 12 6.39Z" />
  </svg>
);

export default function LandscapingLandingPage() {
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
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* NAV */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          backgroundColor: "rgba(249,248,246,.94)",
          borderColor: "rgba(23,22,21,.09)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
            >
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-black tracking-tight">
                FIELD & FORM
              </div>
              <div
                className="text-[9px] font-bold uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                Landscape Co.
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
              <Phone className="h-4 w-4" style={{ color: COLORS.clay }} />
              (800) 555-0199
            </a>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="rounded-full px-5 py-3 text-sm font-black transition hover:opacity-80"
              style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
            >
              Get a Free Estimate
            </button>
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:18005550199"
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{ backgroundColor: COLORS.clay, color: COLORS.black }}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="border-t px-5 py-5 sm:hidden"
            style={{ borderColor: "rgba(23,22,21,.09)", backgroundColor: COLORS.ivory }}
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
                style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
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
              "linear-gradient(90deg, rgba(249,248,246,.98) 0%, rgba(249,248,246,.91) 42%, rgba(249,248,246,.40) 68%, rgba(23,22,21,.10) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-[680px]">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "rgba(249,248,246,.78)",
                borderColor: "rgba(23,22,21,.10)",
              }}
            >
              <ShieldCheck className="h-4 w-4" style={{ color: COLORS.clay }} />
              Local • Licensed • Built to Last
            </div>

            <h1 className="text-5xl font-black leading-[.92] tracking-[-.045em] sm:text-6xl lg:text-8xl">
              A yard you
              <span className="block" style={{ color: COLORS.clay }}>
                actually want
              </span>
              to come home to.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed sm:text-xl">
              Landscaping, planting and maintenance for homeowners who want
              their outdoor space to feel finished — without making the
              process complicated.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
              type="button"
                onClick={() => scrollToRequest()}
                className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide transition hover:opacity-85"
                style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
              >
                Tell Us About Your Yard
                <ArrowRight className="h-5 w-5" />
              </button>

              <a
                href="tel:18005550199"
                className="flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-black uppercase tracking-wide"
                style={{
                  borderColor: COLORS.black,
                  backgroundColor: "rgba(249,248,246,.70)",
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
                    <CheckCircle2 className="h-4 w-4" style={{ color: COLORS.clay }} />
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
        style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.08)" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span
              className="text-xs font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Start here
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              What do you need help with?
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
                    backgroundColor: active ? COLORS.clay : COLORS.ivory,
                    borderColor: active ? COLORS.clay : "rgba(23,22,21,.10)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: active ? COLORS.ivory : COLORS.taupe,
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
    backgroundColor: COLORS.black,
    color: COLORS.ivory,
  }}
>
  <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">

    {/* LEFT — GUIDE */}
    <div>
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-black uppercase tracking-[.16em]"
        style={{
          backgroundColor: "rgba(201,181,156,.14)",
          color: COLORS.clay,
        }}
      >
        <Sparkles className="h-3.5 w-3.5" />
        Start Your Project
      </div>

      <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-tight sm:text-5xl">
        Tell us what you're
        <span
          className="block"
          style={{ color: COLORS.clay }}
        >
          thinking.
        </span>
      </h2>

      <p className="mt-5 max-w-lg text-base leading-relaxed opacity-60 sm:text-lg">
        Whether you have a clear plan or just know your yard needs
        some help, that's enough. Tell us a little about the project
        and we'll take it from there.
      </p>

      {/* BENEFITS */}
      <div className="mt-8 space-y-4">
        {[
          "No need to know landscaping terminology",
          "No-pressure consultation",
          "Talk directly with a real team member",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm font-semibold"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.clay,
                color: COLORS.black,
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
          borderColor: "rgba(249,248,246,.10)",
          backgroundColor: "rgba(249,248,246,.04)",
        }}
      >
        <Clock3
          className="mt-0.5 h-5 w-5 shrink-0"
          style={{ color: COLORS.clay }}
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
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
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
            style={{ color: COLORS.clay }}
          >
            Free consultation
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Let's talk about your yard.
          </h3>

          <p className="mt-2 text-sm leading-relaxed opacity-50">
            Just the basics. We'll handle the rest.
          </p>
        </div>

        <div
          className="shrink-0 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-wider"
          style={{
            backgroundColor: COLORS.sand,
            color: COLORS.black,
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
              borderColor: "rgba(23,22,21,.13)",
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
              borderColor: "rgba(23,22,21,.13)",
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
              borderColor: "rgba(23,22,21,.13)",
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
            placeholder="For example: We'd like to refresh our front yard and add some low-maintenance plants."
            className="w-full resize-none rounded-xl border bg-transparent p-4 text-sm font-medium leading-relaxed outline-none transition placeholder:opacity-35"
            style={{
              borderColor: "rgba(23,22,21,.13)",
            }}
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="group flex h-14 w-full items-center justify-center gap-2 rounded-xl text-sm font-black uppercase tracking-wide transition hover:-translate-y-0.5 hover:opacity-90"
          style={{
            backgroundColor: COLORS.clay,
            color: COLORS.black,
          }}
        >
          Request My Free Estimate

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
      <section id="services" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.ivory }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span
                className="text-xs font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                What we do
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Beautiful work.
                <span className="block" style={{ color: COLORS.clay }}>
                  Practical process.
                </span>
              </h2>
            </div>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-black"
              style={{ borderColor: "rgba(23,22,21,.15)" }}
            >
              Talk about your yard <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-2xl border p-6"
                style={{
                  backgroundColor: index === 1 ? COLORS.sand : COLORS.ivory,
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <div
                  className="text-xs font-black"
                  style={{ color: COLORS.clay }}
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
      <section id="process" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.sand }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>
              How it works
            </span>
            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              You shouldn't need a
              <span className="block" style={{ color: COLORS.clay }}>project manager.</span>
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed opacity-65">
              We keep the customer journey simple: tell us, walk the space,
              get the plan.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {process.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl p-7"
                style={{ backgroundColor: COLORS.ivory }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black"
                  style={{ backgroundColor: COLORS.clay }}
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
      <section id="work" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.ivory }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>
                Selected work
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                Real yards.
                <span className="block" style={{ color: COLORS.clay }}>
                  Thoughtfully finished.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
                A look at the kind of outdoor spaces our team creates for local homeowners.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-black"
              style={{ borderColor: "rgba(23,22,21,.15)" }}
            >
              Start your project <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[220px]">
            <div className="group relative overflow-hidden rounded-3xl sm:row-span-2 md:col-span-2 md:row-span-2">
              <img src={images.project1} alt="Finished residential backyard landscape" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-75">Featured project</span>
                <h3 className="mt-2 max-w-md text-2xl font-black leading-tight sm:text-3xl">A backyard made for actually living in</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">Design, planting and outdoor living improvements built around how the family uses the space.</p>
              </div>
            </div>

            {[
              [images.project2, "Front Yard", "Simple planting. Big curb appeal.", "Residential front-yard planting"],
              [images.project3, "Landscape Refresh", "Less maintenance. More enjoyment.", "Residential landscape refresh"],
              [images.project5, "Planting", "Natural texture, year-round interest.", "Residential planting project"],
              [images.project6, "Maintenance", "A yard that's easier to keep beautiful.", "Landscape maintenance project"],
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
              <img src={images.project4} alt="Completed backyard landscaping project" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-[10px] font-black uppercase tracking-[.18em] opacity-70">Backyard transformation</span>
                <h3 className="mt-1 max-w-sm text-xl font-black">A space that finally feels finished.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM — authenticity */}
      <section id="team" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>
                Meet the people
              </span>
              <h2 className="mt-2 text-4xl font-black sm:text-5xl">
                Real people.
                <span className="block" style={{ color: COLORS.clay }}>
                  Real accountability.
                </span>
              </h2>
            </div>
            <p className="max-w-xl leading-relaxed opacity-60">
              Landscaping is personal. Customers are letting your team work
              around their home. Put the actual owner and crew on the page so
              visitors know who they're inviting onto their property.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [images.team1, "Alex Morgan", "Owner & Landscape Designer"],
              [images.team2, "Maya Chen", "Landscape Project Lead"],
              [images.team3, "Ryan Brooks", "Crew Lead"],
            ].map(([image, name, role]) => (
              <div key={name} className="overflow-hidden rounded-2xl" style={{ backgroundColor: "rgba(249,248,246,.08)" }}>
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
      <section id="reviews" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.ivory }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm" style={{ borderColor: "rgba(23,22,21,.10)" }}>
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
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Good work gets <span className="block" style={{ color: COLORS.clay }}>talked about.</span></h2>
              <p className="mt-3 text-sm leading-relaxed opacity-50 sm:text-base">See what homeowners have to say about working with our team.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.name} className="group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.09)" }}>
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
                <div className="mt-6 border-t pt-4" style={{ borderColor: "rgba(23,22,21,.09)" }}>
                  <span className="text-[10px] font-black uppercase tracking-wider opacity-40">Posted on Google</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center" style={{ backgroundColor: COLORS.sand, borderColor: "rgba(23,22,21,.09)" }}>
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <div><p className="text-sm font-black">Want to see more?</p><p className="mt-0.5 text-xs opacity-45">Read more local homeowner reviews.</p></div>
            </div>
            <a href="#" className="group flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-wide transition hover:opacity-80" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>Read All Google Reviews<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-20" style={{ backgroundColor: COLORS.taupe }}>
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
                <div key={question} className="overflow-hidden rounded-2xl" style={{ backgroundColor: COLORS.ivory }}>
                  <button
              type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-black"
                  >
                    {question}
                    <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && (
                    <div className="border-t px-5 pb-5 pt-4 text-sm leading-relaxed opacity-65" style={{ borderColor: "rgba(23,22,21,.10)" }}>
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
      <section className="py-16 sm:py-20" style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-[.18em]" style={{ color: COLORS.clay }}>
            Ready when you are
          </span>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">
            Let's make your yard
            <span className="block" style={{ color: COLORS.clay }}>
              feel like home.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed opacity-60">
            Tell us what you're thinking. We'll take it from there.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex items-center justify-center gap-2 rounded-full px-7 py-4 font-black uppercase"
              style={{ backgroundColor: COLORS.clay, color: COLORS.black }}
            >
              Get a Free Estimate
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="tel:18005550199"
              className="flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-black uppercase"
              style={{ borderColor: COLORS.ivory }}
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
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.10)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.65fr_.65fr_1.35fr]">
            {/* BRAND + CONTACT */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
                >
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-base font-black tracking-tight">FIELD & FORM</div>
                  <div
                    className="text-[9px] font-bold uppercase tracking-[.18em]"
                    style={{ color: COLORS.clay }}
                  >
                    Landscape Co.
                  </div>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
                Thoughtful landscape design, installation and maintenance for
                homes in our local community.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a href="tel:18005550199" className="flex items-center gap-3 font-bold hover:opacity-60">
                  <Phone className="h-4 w-4" style={{ color: COLORS.clay }} />
                  (800) 555-0199
                </a>
                <a
                  href="mailto:hello@fieldandform.com"
                  className="flex items-center gap-3 font-semibold hover:opacity-60"
                >
                  <span className="text-sm font-black" style={{ color: COLORS.clay }}>@</span>
                  hello@fieldandform.com
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
                        borderColor: "rgba(23,22,21,.13)",
                        backgroundColor: COLORS.sand,
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
                  borderColor: "rgba(23,22,21,.10)",
                  backgroundColor: COLORS.sand,
                }}
              >
                <iframe
                  title="Field & Form Landscape Co. location"
                  src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed"
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4">
                <p className="text-sm font-black">Field & Form Landscape Co.</p>
                <address className="mt-2 not-italic text-sm leading-relaxed opacity-60">
                  1234 Garden Avenue
                  <br />
                  Denver, CO 80202
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=1234+Garden+Avenue+Denver+CO+80202"
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
            style={{ borderColor: "rgba(23,22,21,.10)" }}
          >
            <div className="opacity-45">
              © {new Date().getFullYear()} Field & Form Landscape Co. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#" className="opacity-45 hover:opacity-100">Privacy Policy</a>
              <a href="#" className="opacity-45 hover:opacity-100">Terms of Service</a>
              <a href="#" className="opacity-45 hover:opacity-100">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

         <ChatWidget />

    </main>
  );
}