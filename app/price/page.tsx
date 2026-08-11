/* app/Pricing/page.tsx */
"use client";

import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Leaf, Menu, Phone, Sparkles, X, Zap,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

const plans = [
  {
    name: "Starter",
    eyebrow: "For businesses building the foundation",
    price: "$997",
    setup: "one-time setup",
    monthly: "$197/mo",
    description: "A conversion-focused website and the essentials you need to start capturing more opportunities.",
    features: [
      "High-converting website",
      "Lead capture forms",
      "Call & form tracking",
      "Basic lead notifications",
      "Review request system",
      "Mobile optimization",
    ],
    cta: "Start With Starter",
  },
  {
    name: "Growth",
    eyebrow: "For businesses ready to scale",
    price: "$1,987",
    setup: "one-time setup",
    monthly: "$287/mo",
    description: "Our complete lead capture and follow-up system for turning more inquiries into booked jobs.",
    features: [
      "Everything in Starter",
      "Instant SMS lead response",
      "Automated email follow-up",
      "Appointment booking",
      "Missed-call follow-up",
      "Customer reactivation",
      "Advanced conversion tracking",
      "Priority support",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Scale",
    eyebrow: "For established teams",
    price: "Custom",
    setup: "tailored implementation",
    monthly: "Custom monthly",
    description: "A fully customized growth system built around your lead volume, sales process, and team.",
    features: [
      "Everything in Growth",
      "Custom automation workflows",
      "Advanced CRM integration",
      "Multi-location support",
      "Custom reporting",
      "Dedicated strategy",
      "Ongoing optimization",
    ],
    cta: "Talk About Scale",
  },
];

const faqs = [
  ["Is there a long-term contract?", "No. We prefer to earn your business through results. Your exact agreement and cancellation terms are laid out before you start."],
  ["What does the setup fee cover?", "Setup covers the initial strategy, design, implementation, integrations, automation configuration, testing, and launch of your system."],
  ["Can you work with my existing website?", "Yes. Depending on its condition, we can improve the existing experience or recommend a new conversion-focused page when that is the better option."],
  ["Do I need a CRM?", "Not necessarily. We can work with your current tools and recommend a simple setup when your current process is creating unnecessary friction."],
  ["How quickly can we launch?", "Most projects can move from strategy to launch quickly once we have the required business information, assets, access, and approvals."],
];

function Navbar({ onStart }: { onStart: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(249,248,246,.94)",
        borderColor: "rgba(23,22,21,.09)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            <Leaf className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-black tracking-tight">FIELD & FORM</span>
            <span
              className="block text-[9px] font-bold uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Landscape Co.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <a href="/services">Services</a>
          <a href="/HowItWorks">How It Works</a>
          <a href="/OurWorks">Our Work</a>
          <a href="/FreeGrowthAudit">Free Audit</a>
          <a href="/Pricing" className="font-black">Pricing</a>
          <a href="/#faq">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href="tel:18005550199" className="flex items-center gap-2 text-sm font-bold">
            <Phone className="h-4 w-4" style={{ color: COLORS.clay }} />
            (800) 555-0199
          </a>
          <button
            onClick={onStart}
            className="rounded-full px-5 py-3 text-sm font-black"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Get Started
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onStart}
            className="rounded-full px-4 py-2.5 text-xs font-black"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Start
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.clay }}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="border-t px-5 py-5 sm:hidden"
          style={{ borderColor: "rgba(23,22,21,.09)" }}
        >
          {[
            ["Services", "/services"],
            ["How It Works", "/HowItWorks"],
            ["Our Work", "/OurWorks"],
            ["Free Audit", "/FreeGrowthAudit"],
            ["Pricing", "/Pricing"],
            ["FAQ", "/#faq"],
          ].map(([label, href]) => (
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
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

function PricingCard({
  plan,
  onStart,
}: {
  plan: (typeof plans)[number];
  onStart: () => void;
}) {
  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-[28px] border p-7 sm:p-8"
      style={{
        backgroundColor: plan.popular ? COLORS.black : COLORS.ivory,
        color: plan.popular ? COLORS.ivory : COLORS.black,
        borderColor: plan.popular
          ? COLORS.black
          : "rgba(23,22,21,.10)",
        boxShadow: plan.popular
          ? "0 30px 80px rgba(23,22,21,.17)"
          : "0 18px 55px rgba(23,22,21,.05)",
        transform: plan.popular ? "translateY(-10px)" : undefined,
      }}
    >
      {plan.popular && (
        <div
          className="absolute right-0 top-0 rounded-bl-2xl px-4 py-2 text-[9px] font-black uppercase tracking-[.15em]"
          style={{ backgroundColor: COLORS.clay, color: COLORS.black }}
        >
          Most Popular
        </div>
      )}

      <div
        className="text-[10px] font-black uppercase tracking-[.17em]"
        style={{ color: COLORS.clay }}
      >
        {plan.name}
      </div>

      <h3 className="mt-3 text-2xl font-black">{plan.eyebrow}</h3>
      <p className="mt-3 min-h-[60px] text-sm leading-relaxed opacity-55">
        {plan.description}
      </p>

      <div
        className="my-7 border-y py-6"
        style={{
          borderColor: plan.popular
            ? "rgba(249,248,246,.14)"
            : "rgba(23,22,21,.10)",
        }}
      >
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black tracking-[-.04em]">{plan.price}</span>
          {plan.price !== "Custom" && (
            <span className="pb-1 text-xs opacity-45">{plan.setup}</span>
          )}
        </div>
        <div
          className="mt-2 text-sm font-bold"
          style={{ color: plan.popular ? COLORS.clay : COLORS.black }}
        >
          + {plan.monthly}
        </div>
      </div>

      <div className="text-[10px] font-black uppercase tracking-[.16em] opacity-40">
        What&apos;s included
      </div>

      <div className="mt-5 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 text-sm">
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
              style={{
                backgroundColor: plan.popular ? COLORS.clay : COLORS.sand,
                color: COLORS.black,
              }}
            >
              <Check className="h-2.5 w-2.5" />
            </span>
            <span className="opacity-75">{feature}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black"
        style={{
          backgroundColor: plan.popular ? COLORS.ivory : COLORS.black,
          color: plan.popular ? COLORS.black : COLORS.ivory,
          marginTop: "32px",
        }}
      >
        {plan.cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function Comparison() {
  const rows = [
    ["Conversion-focused website", true, true, true],
    ["Lead capture & tracking", true, true, true],
    ["Review automation", true, true, true],
    ["SMS lead response", false, true, true],
    ["Email follow-up", false, true, true],
    ["Appointment booking", false, true, true],
    ["Missed-call recovery", false, true, true],
    ["Customer reactivation", false, true, true],
    ["Custom automation", false, false, true],
    ["Dedicated strategy", false, false, true],
  ];

  return (
    <section
      className="border-y"
      style={{
        backgroundColor: COLORS.sand,
        borderColor: "rgba(23,22,21,.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{ color: COLORS.clay }}
          >
            Compare
          </div>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Choose the system that matches your stage.
          </h2>
        </div>

        <div
          className="mt-10 overflow-x-auto rounded-[25px] border"
          style={{
            backgroundColor: COLORS.ivory,
            borderColor: "rgba(23,22,21,.10)",
          }}
        >
          <table className="w-full min-w-[680px] border-collapse text-sm">
            <thead>
              <tr className="border-b" style={{ borderColor: "rgba(23,22,21,.10)" }}>
                <th className="px-6 py-5 text-left text-xs font-black uppercase tracking-[.12em]">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th key={plan.name} className="px-5 py-5 text-center text-xs font-black">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([feature, starter, growth, scale]) => (
                <tr
                  key={feature as string}
                  className="border-b last:border-0"
                  style={{ borderColor: "rgba(23,22,21,.07)" }}
                >
                  <td className="px-6 py-4 font-semibold opacity-70">
                    {feature as string}
                  </td>
                  {[starter, growth, scale].map((included, i) => (
                    <td key={i} className="px-5 py-4 text-center">
                      {included ? (
                        <span
                          className="mx-auto flex h-6 w-6 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: i === 1 ? COLORS.black : COLORS.sand,
                            color: i === 1 ? COLORS.ivory : COLORS.black,
                          }}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                      ) : (
                        <span className="opacity-20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <div>
          <div
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{ color: COLORS.clay }}
          >
            Questions
          </div>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Pricing without the mystery.
          </h2>
          <p className="mt-5 text-sm leading-relaxed opacity-55">
            We&apos;ll tell you exactly what is included before anything starts.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map(([question, answer], index) => (
            <div
              key={question}
              className="overflow-hidden rounded-2xl border"
              style={{
                backgroundColor: COLORS.ivory,
                borderColor: "rgba(23,22,21,.10)",
              }}
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-black"
              >
                {question}
                <ChevronDown
                  className="h-4 w-4 shrink-0 transition-transform"
                  style={{
                    transform: active === index ? "rotate(180deg)" : undefined,
                  }}
                />
              </button>
              {active === index && (
                <p className="px-5 pb-5 text-sm leading-relaxed opacity-55">
                  {answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
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
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      onMouseDown={(e) => e.currentTarget === e.target && close()}
      style={{
        backgroundColor: "rgba(23,22,21,.62)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-[30px] border p-7 sm:p-10"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.12)",
        }}
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: COLORS.sand }}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Let&apos;s Talk
        </div>
        <h2 className="mt-3 text-3xl font-black">
          Tell us what you&apos;re trying to grow.
        </h2>
        <p className="mt-3 text-sm leading-relaxed opacity-55">
          We&apos;ll help you figure out which setup makes sense for your business.
        </p>

        <form
          className="mt-7 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            close();
          }}
        >
          <input
            required
            placeholder="Your name"
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: COLORS.ivory,
              borderColor: "rgba(23,22,21,.14)",
            }}
          />
          <input
            required
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: COLORS.ivory,
              borderColor: "rgba(23,22,21,.14)",
            }}
          />
          <input
            required
            placeholder="Business website"
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: COLORS.ivory,
              borderColor: "rgba(23,22,21,.14)",
            }}
          />
          <select
            defaultValue=""
            required
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
            style={{
              backgroundColor: COLORS.ivory,
              borderColor: "rgba(23,22,21,.14)",
            }}
          >
            <option value="" disabled>
              What are you looking for?
            </option>
            <option>Website + lead capture</option>
            <option>Lead follow-up automation</option>
            <option>Complete growth system</option>
            <option>Custom / not sure</option>
          </select>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-black"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Request a Conversation <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer({ onStart }: { onStart: () => void }) {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(23,22,21,.10)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.7fr_.7fr_1.3fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
              >
                <Leaf className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-base font-black">FIELD & FORM</span>
                <span
                  className="block text-[9px] font-bold uppercase tracking-[.18em]"
                  style={{ color: COLORS.clay }}
                >
                  Landscape Co.
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
              Growth systems for home-service businesses that want to capture more
              leads and book more work.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">Explore</h3>
            <div className="mt-5 space-y-3 text-sm opacity-60">
              <a className="block" href="/services">Services</a>
              <a className="block" href="/HowItWorks">How It Works</a>
              <a className="block" href="/OurWorks">Our Work</a>
              <a className="block" href="/FreeGrowthAudit">Free Audit</a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">Pricing</h3>
            <div className="mt-5 space-y-3 text-sm opacity-60">
              <a className="block" href="#plans">Plans</a>
              <a className="block" href="#compare">Compare</a>
              <a className="block" href="#faq">FAQ</a>
            </div>
          </div>

          <div
            className="rounded-2xl border p-5"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <div
              className="text-[10px] font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Not sure which plan?
            </div>
            <p className="mt-3 text-sm font-bold leading-relaxed">
              Start with a free growth audit and we&apos;ll show you what deserves
              attention first.
            </p>
            <button
              onClick={onStart}
              className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.12em]"
            >
              Let&apos;s Talk <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          className="mt-12 border-t pt-6 text-xs opacity-45"
          style={{ borderColor: "rgba(23,22,21,.10)" }}
        >
          © {new Date().getFullYear()} Field & Form Landscape Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter,ui-sans-serif,system-ui,sans-serif",
      }}
    >
      <Navbar onStart={() => setModalOpen(true)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 text-center sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[.16em]"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: COLORS.clay }} />
            Simple, transparent pricing
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[.94] tracking-[-.05em] sm:text-6xl lg:text-7xl">
            The growth system you need.
            <span className="block" style={{ color: COLORS.clay }}>
              Nothing you don&apos;t.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed opacity-60 sm:text-base">
            Choose the level of support that fits your business today. Start
            simple, add automation when you&apos;re ready, and scale when the
            opportunity is there.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs font-semibold opacity-50">
            <span className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5" /> No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5" /> Built for home services
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5" /> Cancel anytime*
            </span>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="scroll-mt-24 pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl items-stretch gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              onStart={() => setModalOpen(true)}
            />
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-6xl px-4 text-[10px] leading-relaxed opacity-35 sm:px-6 lg:px-8">
          *Contract terms can vary by engagement. Final scope, pricing, implementation,
          and cancellation terms are confirmed before work begins.
        </p>
      </section>

      {/* VALUE STRIP */}
      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.black,
          color: COLORS.ivory,
          borderColor: COLORS.black,
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-3">
          {[
            ["01", "Capture", "Make it easier for the right people to become leads."],
            ["02", "Respond", "Follow up while the opportunity is still fresh."],
            ["03", "Book", "Turn more conversations into scheduled jobs."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="border-b p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              style={{ borderColor: "rgba(249,248,246,.12)" }}
            >
              <div className="text-xs font-black" style={{ color: COLORS.clay }}>
                {number}
              </div>
              <h3 className="mt-4 text-xl font-black">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed opacity-50">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <div id="compare" className="scroll-mt-24">
        <Comparison />
      </div>

      {/* MINI CTA */}
      <section className="py-20 sm:py-24">
        <div
          className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 rounded-[28px] border px-7 py-9 sm:flex-row sm:px-10"
          style={{
            backgroundColor: COLORS.sand,
            borderColor: "rgba(23,22,21,.09)",
          }}
        >
          <div>
            <div
              className="text-[10px] font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Still deciding?
            </div>
            <h2 className="mt-2 text-2xl font-black">
              Get a free growth audit first.
            </h2>
            <p className="mt-2 max-w-xl text-sm opacity-55">
              We&apos;ll identify the biggest opportunities before you decide
              what to invest in.
            </p>
          </div>
          <a
            href="/FreeGrowthAudit"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-xs font-black uppercase tracking-[.1em]"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Free Growth Audit <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <FAQ />

      {/* FINAL CTA */}
      <section
        className="border-t py-24 sm:py-32"
        style={{ borderColor: "rgba(23,22,21,.10)" }}
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
            style={{ backgroundColor: COLORS.sand }}
          >
            <Zap className="h-5 w-5" />
          </div>
          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            Stop paying for tools.
            <span className="block" style={{ color: COLORS.clay }}>
              Start building a system.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
            Tell us where your business is today and where you want it to go.
            We&apos;ll help you choose the right setup.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide"
            style={{ backgroundColor: COLORS.black, color: COLORS.ivory }}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Footer onStart={() => setModalOpen(true)} />
      <StartModal open={modalOpen} close={() => setModalOpen(false)} />
    </main>
  );
}