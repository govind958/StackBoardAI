"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  Phone,
  X,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

const steps = [
  {
    number: "01",
    title: "Capture Every Lead",
    description:
      "Every website visitor, form submission, and incoming inquiry gets routed into one simple lead flow so opportunities never get lost.",
    points: [
      "Website & landing page capture",
      "Call and form tracking",
      "Centralized lead flow",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Respond Instantly",
    description:
      "The moment a new lead comes in, your system can respond automatically — even when you're on a job, driving, or away from your phone.",
    points: [
      "Instant SMS response",
      "Automated email response",
      "No more waiting on manual replies",
    ],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Follow Up Automatically",
    description:
      "Most businesses lose opportunities because they stop following up too early. Your system keeps the conversation moving for you.",
    points: [
      "Multi-step SMS sequences",
      "Email follow-up",
      "Automatic reminders",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    title: "Book More Appointments",
    description:
      "Once a prospect is engaged, guide them toward a simple booking experience instead of making them wait for a callback.",
    points: [
      "Appointment scheduling",
      "Booking reminders",
      "Less back-and-forth",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "05",
    title: "Turn Jobs Into Reviews",
    description:
      "After a successful job, automatically ask customers for feedback and reviews while the experience is still fresh.",
    points: [
      "Automated review requests",
      "Customer follow-up",
      "More social proof",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "06",
    title: "Reactivate Old Customers",
    description:
      "Your previous customers are one of your most valuable audiences. Reconnect with them for maintenance, new services, referrals, and future work.",
    points: [
      "Customer reactivation",
      "Referral campaigns",
      "Seasonal follow-up",
    ],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=85",
  },
];

const faqs = [
  {
    question: "How quickly can the system be set up?",
    answer:
      "We start with the highest-impact lead capture and follow-up pieces, then expand the system from there.",
  },
  {
    question: "Do I need to change my current website?",
    answer:
      "Not necessarily. We can work with your existing website, build dedicated landing pages, or recommend a new funnel when that will produce a better result.",
  },
  {
    question: "Can this work with my existing CRM?",
    answer:
      "Yes. We design the automation around the tools you already use whenever possible.",
  },
  {
    question: "What happens when I miss a call?",
    answer:
      "An automatic follow-up can be triggered so the customer receives a response instead of simply reaching voicemail.",
  },
  {
    question: "Can you automate review requests?",
    answer:
      "Yes. Review requests can be triggered after completed jobs and sent automatically through the channels that fit your workflow.",
  },
];

function Navbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
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
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
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
          <a href="/services" className="transition-opacity hover:opacity-60">
            Services
          </a>
          <a
            href="/HowItWorks"
            className="transition-opacity hover:opacity-60"
          >
            How It Works
          </a>
          <a href="/work" className="transition-opacity hover:opacity-60">
            Our Work
          </a>
          <a href="/#team" className="transition-opacity hover:opacity-60">
            Our Team
          </a>
          <a href="/#faq" className="transition-opacity hover:opacity-60">
            FAQ
          </a>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="tel:18005550199"
            className="flex items-center gap-2 text-sm font-bold"
          >
            <Phone className="h-4 w-4" style={{ color: COLORS.clay }} />
            (800) 555-0199
          </a>

          <a
            href="/#request"
            className="rounded-full px-5 py-3 text-sm font-black transition-opacity hover:opacity-80"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            Get a Free Estimate
          </a>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <a
            href="tel:18005550199"
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            <Phone className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.clay,
              color: COLORS.black,
            }}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-t px-5 py-5 sm:hidden"
          style={{
            borderColor: "rgba(23,22,21,.09)",
            backgroundColor: COLORS.ivory,
          }}
        >
          <div className="space-y-4">
            {[
              ["Services", "/services"],
              ["How It Works", "/HowItWorks"],
              ["Our Work", "/work"],
              ["Our Team", "/#team"],
              ["FAQ", "/#faq"],
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

            <a
              href="/#request"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full px-5 py-3 text-center font-black"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.ivory,
              }}
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function StepImage({
  image,
  number,
}: {
  image: string;
  number: string;
}) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 rounded-[32px] blur-2xl"
        style={{ backgroundColor: "rgba(201,181,156,.18)" }}
      />

      <div
        className="relative overflow-hidden rounded-3xl border p-2 shadow-[0_24px_60px_rgba(23,22,21,.10)]"
        style={{
          backgroundColor: COLORS.sand,
          borderColor: "rgba(23,22,21,.10)",
        }}
      >
        <div className="relative aspect-[1.2/0.82] overflow-hidden rounded-2xl bg-white">
          <img
            src={image}
            alt={`Step ${number}`}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div
            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-xs font-black"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepRow({
  step,
  reverse,
}: {
  step: (typeof steps)[number];
  reverse: boolean;
}) {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <StepImage image={step.image} number={step.number} />
        </div>

        <div
          className={`max-w-xl ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{ color: COLORS.clay }}
          >
            Step {step.number}
          </div>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            {step.title}
          </h2>

          <p className="mt-5 text-sm leading-relaxed opacity-60 sm:text-base">
            {step.description}
          </p>

          <div className="mt-6 space-y-3">
            {step.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: COLORS.sand,
                    color: COLORS.black,
                  }}
                >
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <div
        className="text-xs font-black uppercase tracking-[.18em]"
        style={{ color: COLORS.clay }}
      >
        Frequently Asked Questions
      </div>

      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
        Still have questions?
      </h2>

      <div className="mt-7">
        {faqs.map((faq, index) => {
          const active = open === index;

          return (
            <div
              key={faq.question}
              className="border-t"
              style={{ borderColor: "rgba(23,22,21,.10)" }}
            >
              <button
                type="button"
                onClick={() => setOpen(active ? null : index)}
                className="flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span className="text-sm font-bold">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    active ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active && (
                <p className="pb-5 pr-8 text-sm leading-relaxed opacity-60">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}

        <div
          className="border-t"
          style={{ borderColor: "rgba(23,22,21,.10)" }}
        />
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 sm:p-10"
      style={{ backgroundColor: COLORS.sand }}
    >
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(201,181,156,.35)" }}
      />

      <div className="relative">
        <div
          className="text-5xl font-black leading-none"
          style={{ color: COLORS.clay }}
        >
          “
        </div>

        <blockquote className="mt-3 text-xl font-black leading-snug sm:text-2xl">
          We were losing leads simply because nobody could respond fast
          enough. Now every new inquiry gets an immediate response.
        </blockquote>

        <div className="mt-8 flex items-center gap-4">
          <div
            className="h-12 w-12 overflow-hidden rounded-full"
            style={{ backgroundColor: COLORS.taupe }}
          >
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
              alt="Client"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="text-sm font-black">James Anderson</div>
            <div className="mt-1 text-xs opacity-50">
              Roofing Contractor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
          style={{
            backgroundColor: COLORS.sand,
            color: COLORS.black,
          }}
        >
          <ArrowRight className="h-5 w-5" />
        </div>

        <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          Ready to stop losing
          <span
            className="block"
            style={{ color: COLORS.clay }}
          >
            good leads?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
          Let&apos;s build a lead capture and follow-up system that works
          even when you&apos;re busy running the business.
        </p>

        <a
          href="/#request"
          className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-80"
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.ivory,
          }}
        >
          Get a Free Estimate
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: COLORS.ivory,
        borderColor: "rgba(23,22,21,.10)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.7fr_.7fr_1.3fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.ivory,
                }}
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

            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
              Thoughtful landscape design, installation and maintenance
              for homes in our local community.
            </p>

            <a
              href="tel:18005550199"
              className="mt-5 flex items-center gap-3 text-sm font-bold"
            >
              <Phone className="h-4 w-4" style={{ color: COLORS.clay }} />
              (800) 555-0199
            </a>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">
              Explore
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a href="/services" className="block opacity-60 hover:opacity-100">
                Services
              </a>
              <a
                href="/HowItWorks"
                className="block opacity-60 hover:opacity-100"
              >
                How It Works
              </a>
              <a href="/work" className="block opacity-60 hover:opacity-100">
                Our Work
              </a>
              <a href="/#team" className="block opacity-60 hover:opacity-100">
                Our Team
              </a>
              <a href="/#faq" className="block opacity-60 hover:opacity-100">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">
              Get Started
            </h3>
            <div className="mt-5 space-y-3 text-sm">
              <a href="/#request" className="block font-bold">
                Get a Free Estimate
              </a>
              <a href="tel:18005550199" className="block opacity-60">
                Call Us
              </a>
              <a href="/#request" className="block opacity-60">
                Request a Consultation
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">
              Find Us
            </h3>

            <div
              className="mt-5 overflow-hidden rounded-2xl border"
              style={{
                borderColor: "rgba(23,22,21,.10)",
                backgroundColor: COLORS.sand,
              }}
            >
              <iframe
                title="Field & Form location"
                src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed"
                className="h-44 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col justify-between gap-3 border-t pt-6 text-xs md:flex-row"
          style={{ borderColor: "rgba(23,22,21,.10)" }}
        >
          <span className="opacity-45">
            © {new Date().getFullYear()} Field & Form Landscape Co.
            All rights reserved.
          </span>

          <div className="flex gap-5">
            <a href="#" className="opacity-45 hover:opacity-100">
              Privacy Policy
            </a>
            <a href="#" className="opacity-45 hover:opacity-100">
              Terms of Service
            </a>
            <a href="#" className="opacity-45 hover:opacity-100">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HowItWorksPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:px-8 lg:pt-24">
          <div>
            <div
              className="text-xs font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Our Process
            </div>

            <h1 className="mt-4 max-w-xl text-5xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">
              How does it
              <span
                className="block"
                style={{ color: COLORS.clay }}
              >
                work?
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed opacity-60 sm:text-lg">
              From the moment a prospect discovers your business to the
              moment they become a customer, we build the systems that
              keep the process moving automatically.
            </p>

            <a
              href="/#request"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-80"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.ivory,
              }}
            >
              Get a Free Estimate
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div
            className="rounded-[32px] border p-2"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <div className="aspect-[1.15/0.82] overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
                alt="Lead automation process"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.sand,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6">
          <p className="text-[10px] font-black uppercase tracking-[.2em] opacity-45">
            Built for growing home-service businesses
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-black opacity-45">
            <span>ROOFING</span>
            <span>HVAC</span>
            <span>LANDSCAPING</span>
            <span>PLUMBING</span>
            <span>REMODELING</span>
          </div>
        </div>
      </section>

      {/* SIX ALTERNATING STEPS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {steps.map((step, index) => (
            <StepRow
              key={step.number}
              step={step}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* FAQ + TESTIMONIAL */}
      <section
        id="faq"
        className="border-y py-16 sm:py-24"
        style={{
          backgroundColor: COLORS.sand,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <FAQ />
          <Testimonial />
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}