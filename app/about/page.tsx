"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Leaf,
  Link2,
  Menu,
  X,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

const team = [
  {
    name: "Your Name",
    role: "Founder / Growth Strategist",
    image: "/team/founder.jpg",
  },
  {
    name: "Team Member",
    role: "Automation & Systems",
    image: "/team/team-2.jpg",
  },
  {
    name: "Team Member",
    role: "Design & Conversion",
    image: "/team/team-3.jpg",
  },
];

function Navbar({ onStart }: { onStart: () => void }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Services", "/services"],
    ["How It Works", "/HowItWorks"],
    ["Our Work", "/OurWorks"],
    ["Free Audit", "/FreeGrowthAudit"],
    ["Pricing", "/Pricing"],
    ["About", "/About"],
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(249,248,246,.94)",
        borderColor: "rgba(23,22,21,.08)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <a href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            <Leaf className="h-5 w-5" />
          </span>

          <div>
            <div className="text-sm font-black tracking-[-.02em]">
              FIELD & FORM
            </div>
            <div
              className="text-[8px] font-bold uppercase tracking-[.2em]"
              style={{ color: COLORS.clay }}
            >
              Growth Systems
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={href}
              className={label === "About" ? "font-black" : ""}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={onStart}
          className="hidden rounded-full px-5 py-3 text-sm font-black sm:block"
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.ivory,
          }}
        >
          Get Started
        </button>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onStart}
            className="rounded-full px-4 py-2.5 text-xs font-black"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            Start
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.clay }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="border-t px-5 py-5 sm:hidden"
          style={{ borderColor: "rgba(23,22,21,.08)" }}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-bold"
            >
              {label}
            </a>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              onStart();
            }}
            className="mt-3 w-full rounded-full px-5 py-3 text-sm font-black"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

function StartModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(23,22,21,.68)",
        backdropFilter: "blur(8px)",
      }}
      onMouseDown={(e) => {
        if (e.currentTarget === e.target) close();
      }}
    >
      <div
        className="relative w-full max-w-xl rounded-[30px] border p-7 sm:p-10"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.10)",
        }}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: COLORS.sand }}
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="text-[10px] font-black uppercase tracking-[.2em]"
          style={{ color: COLORS.clay }}
        >
          Start a conversation
        </div>

        <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">
          Let&apos;s build something that works.
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 opacity-55">
          Tell us about your business and what you&apos;re trying to improve.
          We&apos;ll take it from there.
        </p>

        <form
          className="mt-7 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input
            required
            placeholder="Your name"
            className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
            style={{
              borderColor: "rgba(23,22,21,.13)",
              backgroundColor: COLORS.ivory,
            }}
          />

          <input
            required
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
            style={{
              borderColor: "rgba(23,22,21,.13)",
              backgroundColor: COLORS.ivory,
            }}
          />

          <input
            required
            placeholder="Business website"
            className="w-full rounded-xl border px-4 py-3.5 text-sm outline-none"
            style={{
              borderColor: "rgba(23,22,21,.13)",
              backgroundColor: COLORS.ivory,
            }}
          />

          <textarea
            rows={4}
            placeholder="What would you like help with?"
            className="w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none"
            style={{
              borderColor: "rgba(23,22,21,.13)",
              backgroundColor: COLORS.ivory,
            }}
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            Send Request
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(23,22,21,.09)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 text-xs opacity-50 sm:flex-row sm:px-7 lg:px-10">
        <span>
          © {new Date().getFullYear()} Field & Form. All rights reserved.
        </span>

        <div className="flex flex-wrap gap-5">
          <a href="/services">Services</a>
          <a href="/HowItWorks">How It Works</a>
          <a href="/OurWorks">Our Work</a>
          <a href="/Pricing">Pricing</a>
          <a href="/FreeGrowthAudit">Free Audit</a>
        </div>
      </div>
    </footer>
  );
}

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Navbar onStart={() => setModalOpen(true)} />

      {/* =========================================================
          HERO — EDITORIAL
      ========================================================= */}
      <section className="border-b" style={{ borderColor: "rgba(23,22,21,.08)" }}>
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-7 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.45fr] lg:items-end">
            <div>
              <div
                className="text-[10px] font-black uppercase tracking-[.22em]"
                style={{ color: COLORS.clay }}
              >
                About the company
              </div>

              <p className="mt-6 max-w-sm text-sm leading-7 opacity-55">
                We are a growth systems studio helping home-service businesses
                turn more of their existing opportunities into real revenue.
              </p>
            </div>

            <div>
              <h1 className="text-5xl font-black leading-[.91] tracking-[-.065em] sm:text-7xl lg:text-[92px]">
                We make
                <br />
                <span style={{ color: COLORS.clay }}>growth</span> work
                <br />
                harder.
              </h1>

              <div className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[.15em] opacity-45">
                <ArrowDown className="h-4 w-4" />
                Scroll to meet us
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE TEAM IMAGE
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1500px] px-3 pt-3 sm:px-5">
          <div
            className="relative min-h-[520px] overflow-hidden rounded-[30px] sm:min-h-[650px] lg:min-h-[760px]"
            style={{ backgroundColor: COLORS.sand }}
          >
            <img
              src="/team/team-photo.jpg"
              alt="Our team"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(23,22,21,.62) 0%, rgba(23,22,21,.15) 50%, rgba(23,22,21,.05) 100%)",
              }}
            />

            <div className="absolute bottom-7 left-7 max-w-lg text-white sm:bottom-12 sm:left-12 lg:bottom-16 lg:left-16">
              <div className="text-[10px] font-black uppercase tracking-[.2em] opacity-70">
                Built for businesses in the real world
              </div>

              <h2 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.04em] sm:text-5xl lg:text-6xl">
                Less chasing.
                <br />
                More doing.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-7 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[.2em]"
              style={{ color: COLORS.clay }}
            >
              01 — Who we are
            </div>

            <h2 className="mt-5 max-w-md text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl">
              We&apos;re not here to add more software to your business.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl font-medium leading-8 sm:text-2xl sm:leading-9">
              We build the systems that make the software you already have
              actually work together.
            </p>

            <div className="mt-8 grid gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: "rgba(23,22,21,.12)" }}>
              <p className="text-sm leading-7 opacity-55">
                Your website captures the lead. Your automation responds.
                Follow-up keeps the conversation moving. Booking turns interest
                into an appointment.
              </p>

              <p className="text-sm leading-7 opacity-55">
                The goal is simple: create a connected customer journey that
                keeps working when you&apos;re busy running the actual business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER STORY
      ========================================================= */}
      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.sand,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[560px] overflow-hidden lg:min-h-[700px]">
            <img
              src="/team/founder.jpg"
              alt="Founder"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-20 lg:py-28">
            <div className="max-w-xl">
              <div
                className="text-[10px] font-black uppercase tracking-[.2em]"
                style={{ color: COLORS.clay }}
              >
                02 — The story
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl">
                Great businesses shouldn&apos;t lose customers because they
                were too busy doing great work.
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-7 opacity-60">
                <p>
                  Home-service owners spend their days on jobs, managing crews,
                  answering calls, creating estimates, and keeping customers
                  happy.
                </p>

                <p>
                  That makes one thing incredibly easy to overlook: what happens
                  between a customer raising their hand and becoming a booked
                  job.
                </p>

                <p>
                  That gap is where we work. We combine conversion-focused
                  websites, lead capture, follow-up, appointment systems and
                  customer reactivation into one practical growth system.
                </p>
              </div>

              <div className="mt-10 border-t pt-6" style={{ borderColor: "rgba(23,22,21,.12)" }}>
                <div className="text-sm font-black">Your Name</div>
                <div
                  className="mt-1 text-[10px] font-black uppercase tracking-[.15em]"
                  style={{ color: COLORS.clay }}
                >
                  Founder & Growth Strategist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPROACH
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <div
                className="text-[10px] font-black uppercase tracking-[.2em]"
                style={{ color: COLORS.clay }}
              >
                03 — Our approach
              </div>

              <h2 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] sm:text-5xl">
                Simple systems.
                <br />
                Serious results.
              </h2>
            </div>

            <div>
              {[
                [
                  "01",
                  "Capture",
                  "Make it ridiculously easy for the right customer to contact you, request an estimate, or book the next step.",
                ],
                [
                  "02",
                  "Respond",
                  "When a lead comes in, the system responds quickly and starts the conversation before interest disappears.",
                ],
                [
                  "03",
                  "Convert",
                  "Follow-up, booking, reviews and reactivation keep working after the first interaction.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="grid grid-cols-[60px_1fr] gap-5 border-t py-7 sm:grid-cols-[90px_1fr] sm:gap-8"
                  style={{ borderColor: "rgba(23,22,21,.12)" }}
                >
                  <div
                    className="text-xs font-black"
                    style={{ color: COLORS.clay }}
                  >
                    {number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 opacity-55">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TEAM
      ========================================================= */}
      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.black,
          color: COLORS.ivory,
          borderColor: COLORS.black,
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-7 sm:py-32 lg:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <div
                className="text-[10px] font-black uppercase tracking-[.2em]"
                style={{ color: COLORS.clay }}
              >
                04 — The team
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-.04em] sm:text-5xl">
                Small team.
                <br />
                Close collaboration.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 opacity-45">
              We keep the team intentionally small so strategy, design,
              automation and execution stay connected.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((person) => (
              <article key={person.name + person.role}>
                <div className="group relative aspect-[3/4] overflow-hidden bg-[#242220]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div
                    className="absolute inset-x-0 bottom-0 p-5"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(23,22,21,.88))",
                    }}
                  >
                    <div className="flex items-end justify-between gap-4 pt-16">
                      <div>
                        <h3 className="text-xl font-black">{person.name}</h3>
                        <p
                          className="mt-1 text-[9px] font-black uppercase tracking-[.15em]"
                          style={{ color: COLORS.clay }}
                        >
                          {person.role}
                        </p>
                      </div>

                      <a
                        href="#"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20"
                      >
                        <Link2 className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROOF
      ========================================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid border-y sm:grid-cols-3" style={{ borderColor: "rgba(23,22,21,.12)" }}>
            {[
              ["100+", "Audit points", "Websites, funnels, follow-up and conversion."],
              ["24/7", "System mindset", "Your business keeps responding when you can't."],
              ["1", "Connected journey", "Capture → respond → book → retain."],
            ].map(([number, title, text], index) => (
              <div
                key={title}
                className={`px-2 py-10 sm:px-8 sm:py-12 ${
                  index !== 2 ? "sm:border-r" : ""
                }`}
                style={{ borderColor: "rgba(23,22,21,.12)" }}
              >
                <div
                  className="text-5xl font-black tracking-[-.05em]"
                  style={{ color: index === 1 ? COLORS.clay : COLORS.black }}
                >
                  {number}
                </div>

                <div className="mt-4 text-xs font-black uppercase tracking-[.12em]">
                  {title}
                </div>

                <p className="mt-3 max-w-xs text-xs leading-6 opacity-50">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div
            className="relative overflow-hidden rounded-[32px] px-7 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28"
            style={{ backgroundColor: COLORS.sand }}
          >
            <div
              className="absolute -right-32 -top-32 h-96 w-96 rounded-full blur-3xl"
              style={{ backgroundColor: COLORS.taupe }}
            />

            <div className="relative max-w-4xl">
              <div
                className="text-[10px] font-black uppercase tracking-[.2em]"
                style={{ color: COLORS.clay }}
              >
                05 — Let&apos;s work together
              </div>

              <h2 className="mt-6 text-5xl font-black leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-8xl">
                Build the system.
                <br />
                <span style={{ color: COLORS.clay }}>Grow the business.</span>
              </h2>

              <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black"
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.ivory,
                  }}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="/FreeGrowthAudit"
                  className="text-sm font-black underline decoration-black/20 underline-offset-4"
                >
                  Or request a free growth audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <StartModal
        open={modalOpen}
        close={() => setModalOpen(false)}
      />
    </main>
  );
}