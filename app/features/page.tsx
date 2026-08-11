"use client";

import { useState } from "react";
import ChatWidget from "./../components/ChatWidget";
import {
  ArrowRight,
  ChevronDown,
  Leaf,
  Menu,
  Phone,
  Sparkles,
  Trees,
  X,
} from "lucide-react";

/* =========================================================
   SAME COLORS AS ORIGINAL HOMEPAGE
========================================================= */

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

/* =========================================================
   SAME IMAGE STYLE
========================================================= */

const images = {
  hero:
    "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2200&q=90",

  project1:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",

  project2:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=90",

  project3:
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1600&q=90",

  project4:
    "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1600&q=90",

  project5:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=90",

  project6:
    "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1600&q=90",

  project7:
    "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1600&q=90",

  project8:
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1600&q=90",
};

/* =========================================================
   NAVBAR
   SAME STRUCTURE AS HOMEPAGE
========================================================= */

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
        {/* LOGO */}

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

        {/* DESKTOP NAV */}

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          <a href="/services" className="hover:opacity-60">
            Services
          </a>

          <a href="/#process" className="hover:opacity-60">
            How It Works
          </a>

          <a href="/work" className="hover:opacity-60">
            Our Work
          </a>

          <a href="/#team" className="hover:opacity-60">
            Our Team
          </a>

          <a href="/#faq" className="hover:opacity-60">
            FAQ
          </a>
        </nav>

        {/* DESKTOP CTA */}

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="tel:18005550199"
            className="flex items-center gap-2 text-sm font-bold"
          >
            <Phone
              className="h-4 w-4"
              style={{ color: COLORS.clay }}
            />

            (800) 555-0199
          </a>

          <a
            href="/#request"
            className="rounded-full px-5 py-3 text-sm font-black transition hover:opacity-80"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            Get a Free Estimate
          </a>
        </div>

        {/* MOBILE */}

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
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

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
              ["How It Works", "/#process"],
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
              className="block w-full rounded-full px-5 py-3 text-center font-black"
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


/* =========================================================
   SERVICES ACCORDION
   ORIGINAL TYPOGRAPHY / COLORS PRESERVED
========================================================= */

function ServiceAccordion({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  const [open, setOpen] = useState(1);

  return (
    <div className="mt-6">
      {items.map((item, index) => {
        const active = open === index;

        return (
          <div
            key={item.title}
            className="border-t"
            style={{ borderColor: "rgba(23,22,21,.10)" }}
          >
            <button
              type="button"
              onClick={() => setOpen(active ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 py-4 text-left"
            >
              <span className="text-sm font-semibold">
                {item.title}
              </span>

              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${
                  active ? "rotate-180" : ""
                }`}
              />
            </button>

            {active && (
              <div className="pb-4 pr-8 text-xs leading-relaxed opacity-60">
                {item.text}
              </div>
            )}
          </div>
        );
      })}

      <div
        className="border-t"
        style={{ borderColor: "rgba(23,22,21,.10)" }}
      />
    </div>
  );
}

/* =========================================================
   SERVICE IMAGE COLLAGE
   Same 3-panel visual architecture as the reference
========================================================= */

function ServiceImage({
  main,
  second,
  third,
}: {
  main: string;
  second: string;
  third: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border p-1"
      style={{
        backgroundColor: COLORS.sand,
        borderColor: "rgba(23,22,21,.10)",
      }}
    >
      <div className="grid h-[280px] grid-cols-[1.05fr_.95fr] gap-1 sm:h-[340px]">
        <div className="overflow-hidden rounded-xl">
          <img
            src={main}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-rows-2 gap-1">
          <div className="overflow-hidden rounded-xl">
            <img
              src={second}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src={third}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SERVICE ROW
   EXACT LAYOUT ARCHITECTURE:
   text + image
   image + text
   text + image
========================================================= */

function ServiceRow({
  number,
  title,
  description,
  items,
  image,
  second,
  third,
  reverse = false,
}: {
  number: string;
  title: string;
  description: string;
  items: { title: string; text: string }[];
  image: string;
  second: string;
  third: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div>
          <div
            className="mb-3 text-[10px] font-black uppercase tracking-[.18em]"
            style={{ color: COLORS.clay }}
          >
            {number}
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>

          <p className="mt-3 max-w-xl text-xs leading-relaxed opacity-60 sm:text-sm">
            {description}
          </p>

          <ServiceAccordion items={items} />
        </div>

        <ServiceImage
          main={image}
          second={second}
          third={third}
        />
      </div>
    </section>
  );
}

/* =========================================================
   CTA CARD
   Same theme, colors and typography as original page
========================================================= */

function ServicesCTA() {
  return (
    <section className="py-10 sm:py-16">
      <div
        className="relative overflow-hidden rounded-2xl border px-7 py-10 sm:px-12 sm:py-12"
        style={{
          backgroundColor: COLORS.black,
          color: COLORS.ivory,
          borderColor: "rgba(23,22,21,.12)",
        }}
      >
        <div
          className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(201,181,156,.22)" }}
        />

        <div className="relative flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="max-w-xl text-3xl font-black leading-tight sm:text-4xl">
              Stop losing leads.
              <span
                className="block"
                style={{ color: COLORS.clay }}
              >
                Start booking more jobs.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed opacity-60">
              Build a better system for capturing, following up with, and
              converting every opportunity that comes through your business.
            </p>
          </div>

          <a
            href="/#request"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-4 text-sm font-black uppercase tracking-wide"
            style={{
              backgroundColor: COLORS.clay,
              color: COLORS.black,
            }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CASE STUDIES
   3-column architecture from the reference
========================================================= */

const caseStudies = [
  {
    title: "Roofing Lead Generation System",
    category: "Roofing",
    description:
      "Lead capture and follow-up built around a simpler customer journey.",
    image: images.project1,
  },
  {
    title: "Home-Service Conversion Funnel",
    category: "Home Services",
    description:
      "A focused funnel designed to turn more visitors into conversations.",
    image: images.project2,
  },
  {
    title: "Automated Follow-Up System",
    category: "Lead Automation",
    description:
      "Automated responses and follow-ups that keep opportunities moving.",
    image: images.project3,
  },
];

function CaseStudies() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <span
          className="text-xs font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Our Featured Work
        </span>

        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
          Case Studies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-60">
          Explore how better lead capture, faster follow-up and smarter
          automation can improve the customer journey.
        </p>
      </div>

      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article key={item.title} className="group">
            <div
              className="overflow-hidden rounded-2xl border p-1"
              style={{
                backgroundColor: COLORS.sand,
                borderColor: "rgba(23,22,21,.10)",
              }}
            >
              <div className="aspect-[1.25/1] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-4 text-left">
              <div
                className="text-[9px] font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                {item.category}
              </div>

              <h3 className="mt-1 text-lg font-black">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-relaxed opacity-60">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   TESTIMONIALS
   3-card architecture from the reference
========================================================= */

const testimonials = [
  {
    name: "John Smith",
    role: "Roofing Contractor",
    text: "We stopped losing good leads simply because we couldn't respond fast enough. The follow-up system made a huge difference.",
  },
  {
    name: "Michael Anderson",
    role: "HVAC Contractor",
    text: "Having the leads, follow-ups and appointments connected gave us a much more consistent sales process.",
  },
  {
    name: "Mark Thompson",
    role: "Home-Service Business",
    text: "The funnel and automation work together really well. We finally have a repeatable process instead of chasing every lead manually.",
  },
];

function Testimonials() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mb-7 flex items-end justify-between">
        <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
          What Our Clients Say
        </h2>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border"
            style={{
              borderColor: "rgba(23,22,21,.12)",
              backgroundColor: COLORS.ivory,
            }}
            aria-label="Previous testimonials"
          >
            ←
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border p-5 sm:p-6"
            style={{
              backgroundColor: COLORS.sand,
              borderColor: "rgba(23,22,21,.08)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-black"
                style={{
                  backgroundColor: COLORS.clay,
                  color: COLORS.black,
                }}
              >
                {item.name
                  .split(" ")
                  .map((x) => x[0])
                  .join("")}
              </div>

              <div>
                <div className="text-xs font-black">
                  {item.name}
                </div>
                <div className="mt-0.5 text-[10px] opacity-50">
                  {item.role}
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-relaxed opacity-60">
              “{item.text}”
            </p>

            <div className="mt-4 text-[9px] font-black uppercase tracking-[.16em] opacity-35">
              Verified Client
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
   ORIGINAL COLORS / TYPE / THEME PRESERVED
========================================================= */

export default function ServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* =====================================================
          HERO / INTRO
          Same centered architecture as reference
      ===================================================== */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(23,22,21,.08)" }}
      >
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Our Services
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-60">
            We build automated growth systems that help home-service
            businesses capture more leads, follow up faster, and turn more
            opportunities into booked jobs.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICES
          01 text/image
          02 image/text
          03 text/image
      ===================================================== */}

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ServiceRow
          number="01 / Lead Generation"
          title="Lead Capture & Conversion"
          description="Turn more of your website traffic and incoming inquiries into real conversations with a cleaner, faster path to contact."
          image={images.project1}
          second={images.project2}
          third={images.project3}
          items={[
            {
              title: "Website & Landing Pages",
              text: "Conversion-focused pages designed around one clear action: getting the visitor to request an estimate, call, or start a conversation.",
            },
            {
              title: "Lead Capture Funnels",
              text: "Simple funnels that remove distractions and make it easy for prospects to take the next step.",
            },
            {
              title: "Call & Form Tracking",
              text: "Connect calls and forms to a central lead flow so you can see where opportunities are coming from.",
            },
            {
              title: "Conversion Optimization",
              text: "Identify friction points and improve the parts of your funnel that stop visitors from becoming leads.",
            },
          ]}
        />

        <ServiceRow
          reverse
          number="02 / Automation"
          title="Lead Follow-Up & Automation"
          description="Respond to new opportunities quickly and keep following up automatically so good leads don't disappear while you're busy running the business."
          image={images.project4}
          second={images.project5}
          third={images.project6}
          items={[
            {
              title: "Instant Lead Response",
              text: "Trigger an immediate response when a new lead comes through your website, form, or other connected source.",
            },
            {
              title: "SMS Follow-Up",
              text: "Send timely text messages that keep the conversation moving without requiring you to manually follow up every time.",
            },
            {
              title: "Email Follow-Up",
              text: "Create automated email sequences for new inquiries, reminders, missed opportunities, and longer sales cycles.",
            },
            {
              title: "Appointment Booking",
              text: "Guide qualified leads toward a booked call or appointment with automated scheduling and reminders.",
            },
          ]}
        />

        <ServiceRow
          number="03 / Reputation & Retention"
          title="Reviews & Reputation"
          description="Turn completed jobs into more reviews, more trust, and more repeat opportunities with automated customer follow-up."
          image={images.project7}
          second={images.project8}
          third={images.project2}
          items={[
            {
              title: "Automated Review Requests",
              text: "Automatically ask happy customers for reviews after a completed job while the experience is still fresh.",
            },
            {
              title: "Missed-Call Follow-Up",
              text: "Turn missed calls into opportunities with an automatic response that lets the customer know you received their call.",
            },
            {
              title: "Customer Reactivation",
              text: "Reconnect with previous customers when it makes sense for seasonal work, maintenance, upgrades, or new services.",
            },
            {
              title: "Referral Automation",
              text: "Create a repeatable process for asking satisfied customers to refer friends, family, and other potential customers.",
            },
          ]}
        />

        {/* CTA → Case Studies → Testimonials */}
        <ServicesCTA />
        <CaseStudies />
        <Testimonials />
      </div>

      <Footer />

      <ChatWidget />
    </main>
  );
}


/* =========================================================
   FOOTER
   SAME STRUCTURE AS ORIGINAL HOMEPAGE
========================================================= */

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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.65fr_.65fr_1.35fr]">
          {/* BRAND */}

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
              Thoughtful landscape design, installation and
              maintenance for homes in our local community.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="tel:18005550199"
                className="flex items-center gap-3 font-bold hover:opacity-60"
              >
                <Phone
                  className="h-4 w-4"
                  style={{ color: COLORS.clay }}
                />
                (800) 555-0199
              </a>

              <a
                href="mailto:hello@fieldandform.com"
                className="flex items-center gap-3 font-semibold hover:opacity-60"
              >
                <span
                  className="text-sm font-black"
                  style={{ color: COLORS.clay }}
                >
                  @
                </span>

                hello@fieldandform.com
              </a>
            </div>
          </div>

          {/* EXPLORE */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">
              Explore
            </h3>

            <div className="mt-5 space-y-3 text-sm">
              {[
                ["Our Services", "/services"],
                ["How It Works", "/#process"],
                ["Our Work", "/work"],
                ["Meet The Team", "/#team"],
                ["FAQ", "/#faq"],
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

          {/* GET STARTED */}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em]">
              Get Started
            </h3>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="/#request"
                className="block font-bold transition hover:opacity-60"
              >
                Get a Free Estimate
              </a>

              <a
                href="tel:18005550199"
                className="block font-semibold opacity-60 hover:opacity-100"
              >
                Call Us
              </a>

              <a
                href="/#request"
                className="block font-semibold opacity-60 hover:opacity-100"
              >
                Request a Consultation
              </a>

              <a
                href="/#faq"
                className="block font-semibold opacity-60 hover:opacity-100"
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="mt-7">
              <p className="text-xs font-black uppercase tracking-[.18em]">
                Follow us
              </p>

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

          {/* FIND US */}

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
                title="Field & Form Landscape Co. location"
                src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4">
              <p className="text-sm font-black">
                Field & Form Landscape Co.
              </p>

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

        {/* BOTTOM */}

        <div
          className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs md:flex-row md:items-center"
          style={{
            borderColor: "rgba(23,22,21,.10)",
          }}
        >
          <div className="opacity-45">
            © {new Date().getFullYear()} Field & Form Landscape Co.
            All rights reserved.
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
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