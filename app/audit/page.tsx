"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
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

type CaseStudy = {
  id: number;
  category: string;
  eyebrow: string;
  title: string;
  intro: string;
  challenge: string;
  built: string[];
  highlight: string;
  result: string;
  resultLabel: string;
  image: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    category: "Roofing",
    eyebrow: "Lead Capture + Automation",
    title: "Turning missed opportunities into booked estimates.",
    intro:
      "We helped a growing roofing company build a lead journey that keeps working even when the owner and crew are on a roof.",
    challenge:
      "The business was getting inquiries, but leads were often waiting too long for a response. When the team was busy on jobs, valuable opportunities were falling through the cracks.",
    built: [
      "Conversion-focused landing page",
      "Instant SMS lead response",
      "Automated follow-up sequence",
      "Appointment booking flow",
    ],
    highlight:
      "Every new inquiry now has a clear next step instead of waiting for someone to find time to respond.",
    result: "+37%",
    resultLabel: "more booked estimates",
    image:
      "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: 2,
    category: "Landscaping",
    eyebrow: "Website + Conversion",
    title: "A website designed around one goal: getting the estimate.",
    intro:
      "Instead of making homeowners search through a traditional website, we created a focused conversion path built around the next action.",
    challenge:
      "The old experience gave visitors too many places to go and made the estimate request less obvious than it should have been.",
    built: [
      "New conversion-focused homepage",
      "Dedicated estimate funnel",
      "Clear call-to-action structure",
      "Mobile-first lead capture",
    ],
    highlight:
      "The new experience makes the value clear quickly and gives visitors one obvious path from interest to inquiry.",
    result: "2.4×",
    resultLabel: "more qualified inquiries",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: 3,
    category: "HVAC",
    eyebrow: "Lead Response + Booking",
    title: "Building a response system that never sleeps.",
    intro:
      "We connected lead capture, instant response, follow-up, and appointment booking into one simple customer journey.",
    challenge:
      "Leads were arriving from multiple channels, but there was no consistent process for responding quickly and getting prospects to the calendar.",
    built: [
      "Centralized lead capture",
      "Instant SMS and email response",
      "Automated nurture sequence",
      "Appointment scheduling",
    ],
    highlight:
      "The team no longer has to remember every follow-up. The system handles the repetitive work while they focus on the job.",
    result: "31%",
    resultLabel: "faster lead response",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: 4,
    category: "Home Services",
    eyebrow: "Reactivation + Reviews",
    title: "Getting more value from customers they already had.",
    intro:
      "We created automated customer follow-up that turns completed jobs into future opportunities, reviews, and referrals.",
    challenge:
      "Previous customers were valuable, but there was no consistent system for reconnecting with them after the original job.",
    built: [
      "Customer reactivation campaign",
      "Automated review requests",
      "Referral follow-up",
      "Post-job customer journeys",
    ],
    highlight:
      "Instead of starting from zero every month, the business can now create additional opportunities from relationships it has already built.",
    result: "18%",
    resultLabel: "customer reactivation rate",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=90",
  },
];

const filters = ["All", "Roofing", "Landscaping", "HVAC", "Home Services"];

function Navbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
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
          <a href="/HowItWorks" className="transition-opacity hover:opacity-60">
            How It Works
          </a>
          <a href="/OurWorks" className="font-black">
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
            onClick={() => setMenuOpen((value) => !value)}
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
              ["Our Work", "/OurWorks"],
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

function CaseStudy({
  study,
  reverse = false,
}: {
  study: CaseStudy;
  reverse?: boolean;
}) {
  return (
    <article className="py-16 sm:py-24 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <div
            className="overflow-hidden rounded-[30px] border p-2 shadow-[0_24px_70px_rgba(23,22,21,.08)]"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <div className="relative aspect-[1.08/0.82] overflow-hidden rounded-[23px]">
              <img
                src={study.image}
                alt={study.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div
                className="absolute left-5 top-5 rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[.15em]"
                style={{
                  backgroundColor: COLORS.ivory,
                  color: COLORS.black,
                }}
              >
                {study.category}
              </div>
            </div>
          </div>
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
            {study.eyebrow}
          </div>

          <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl">
            {study.title}
          </h2>

          <p className="mt-5 text-sm leading-relaxed opacity-65 sm:text-base">
            {study.intro}
          </p>

          <div className="mt-8">
            <div className="text-[10px] font-black uppercase tracking-[.18em] opacity-45">
              The Challenge
            </div>

            <p className="mt-3 text-sm leading-relaxed opacity-60">
              {study.challenge}
            </p>
          </div>

          <div className="mt-8">
            <div className="text-[10px] font-black uppercase tracking-[.18em] opacity-45">
              What We Built
            </div>

            <div className="mt-4 space-y-3">
              {study.built.map((item) => (
                <div
                  key={item}
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
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-8 rounded-2xl border-l-2 px-5 py-4"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: COLORS.clay,
            }}
          >
            <p className="text-sm font-semibold leading-relaxed">
              “{study.highlight}”
            </p>
          </div>

          <div
            className="mt-8 flex items-center justify-between gap-5 border-t pt-6"
            style={{ borderColor: "rgba(23,22,21,.10)" }}
          >
            <div>
              <div className="text-3xl font-black tracking-tight sm:text-4xl">
                {study.result}
              </div>
              <div className="mt-1 text-xs font-semibold opacity-50">
                {study.resultLabel}
              </div>
            </div>

            <a
              href="/#request"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide"
            >
              Build Something Similar
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ResultsBand() {
  return (
    <section
      className="border-y"
      style={{
        backgroundColor: COLORS.sand,
        borderColor: "rgba(23,22,21,.08)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
          <div className="sm:border-r sm:pr-8" style={{ borderColor: "rgba(23,22,21,.10)" }}>
            <div className="text-3xl font-black">+37%</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[.12em] opacity-50">
              Booked estimates
            </div>
          </div>

          <div className="sm:border-r sm:px-8" style={{ borderColor: "rgba(23,22,21,.10)" }}>
            <div className="text-3xl font-black">2.4×</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[.12em] opacity-50">
              Qualified inquiries
            </div>
          </div>

          <div className="sm:pl-8">
            <div className="text-3xl font-black">31%</div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[.12em] opacity-50">
              Faster response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden rounded-[32px] p-8 sm:p-12 lg:p-16"
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.ivory,
          }}
        >
          <div
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{ color: COLORS.clay }}
          >
            From a client
          </div>

          <blockquote className="mt-5 max-w-4xl text-2xl font-black leading-tight tracking-tight sm:text-4xl">
            “The biggest difference wasn&apos;t just getting more leads. It
            was knowing that every lead was being handled, even when our
            team was busy on the job.”
          </blockquote>

          <div className="mt-9 flex items-center justify-between gap-5">
            <div>
              <div className="text-sm font-black">Mike Thompson</div>
              <div className="mt-1 text-xs opacity-50">
                Home-Service Business Owner
              </div>
            </div>

            <div
              className="flex h-11 w-11 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.clay,
                color: COLORS.black,
              }}
            >
              <Check className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24 pt-4 sm:pb-32">
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
          Want results like these?
          <span
            className="block"
            style={{ color: COLORS.clay }}
          >
            Let&apos;s build your system.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-60 sm:text-base">
          We&apos;ll look at your current lead journey, find where
          opportunities are being lost, and show you what we would fix
          first.
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
              <a href="/HowItWorks" className="block opacity-60 hover:opacity-100">
                How It Works
              </a>
              <a href="/OurWorks" className="block font-bold">
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

export default function OurWorksPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleStudies =
    activeFilter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeFilter);

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
      <section>
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 lg:px-8 lg:pt-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div
                className="text-xs font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                Our Work
              </div>

              <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.95] tracking-[-.045em] sm:text-6xl">
                Real problems.
                <span
                  className="block"
                  style={{ color: COLORS.clay }}
                >
                  Real systems. Real results.
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-sm leading-relaxed opacity-60 sm:text-base">
              We don&apos;t just build websites. We build the systems behind
              them — helping home-service businesses capture more leads,
              follow up faster, and turn more opportunities into booked work.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full border px-4 py-2 text-xs font-bold transition-all"
                  style={{
                    backgroundColor: active ? COLORS.black : COLORS.ivory,
                    color: active ? COLORS.ivory : COLORS.black,
                    borderColor: active
                      ? COLORS.black
                      : "rgba(23,22,21,.12)",
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {visibleStudies.map((study, index) => (
            <div key={study.id}>
              <CaseStudy study={study} reverse={index % 2 === 1} />

              {index !== visibleStudies.length - 1 && (
                <div
                  className="border-t"
                  style={{ borderColor: "rgba(23,22,21,.10)" }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <ResultsBand />

      {/* WHAT WE DO */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <div
                className="text-xs font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                What We Actually Build
              </div>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                One connected system.
                <span className="block">Not a pile of tools.</span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-relaxed opacity-60">
                Every project is different, but the goal stays the same:
                make it easier to capture demand, respond to it, convert it,
                and create more value from every customer.
              </p>
            </div>

            <div
              className="overflow-hidden rounded-3xl border"
              style={{
                borderColor: "rgba(23,22,21,.10)",
                backgroundColor: COLORS.sand,
              }}
            >
              {[
                ["01", "Lead Capture", "Websites, landing pages, forms, calls and tracking."],
                ["02", "Lead Response", "Instant SMS, email, missed-call and follow-up automation."],
                ["03", "Conversion", "Appointment booking, reminders and lead nurturing."],
                ["04", "Retention", "Reviews, referrals, reactivation and customer follow-up."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid grid-cols-[42px_1fr] gap-5 border-b p-6 last:border-b-0 sm:p-7"
                  style={{ borderColor: "rgba(23,22,21,.10)" }}
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-black"
                    style={{
                      backgroundColor: COLORS.black,
                      color: COLORS.ivory,
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <div className="text-sm font-black">{title}</div>
                    <p className="mt-2 text-sm leading-relaxed opacity-55">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT STORY */}
      <Testimonial />

      {/* CTA */}
      <CTA />

      <Footer />
    </main>
  );
}