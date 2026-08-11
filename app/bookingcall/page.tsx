"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Menu,
  Phone,
  Play,
  X,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",

  // Success color
  success: "#16A66A",
  successDark: "#0D7D50",
};

type Review = {
  name: string;
  initials: string;
  location: string;
  date: string;
  title: string;
  text: string;
};

const testimonials: Review[] = [
  {
    name: "Mike R.",
    initials: "MR",
    location: "California",
    date: "March 24, 2026",
    title: "More leads without more work",
    text: "We started getting more estimate requests almost immediately. The biggest difference is that leads don't just disappear anymore. Everything is clear, simple and built around getting the customer to take action.",
  },
  {
    name: "James T.",
    initials: "JT",
    location: "Texas",
    date: "November 4, 2025",
    title: "Exactly what a roofer needs",
    text: "The system is incredibly straightforward. Customers can request an estimate in seconds and the follow-up happens automatically. I don't have to worry about checking my phone every few minutes while I'm working.",
  },
  {
    name: "David W.",
    initials: "DW",
    location: "Arizona",
    date: "April 10, 2026",
    title: "Finally, a website that works",
    text: "Our old website looked fine but it wasn't producing enough calls. The new funnel gives people one clear path and we're seeing much better quality leads coming through.",
  },
  {
    name: "Robert M.",
    initials: "RM",
    location: "Colorado",
    date: "November 26, 2025",
    title: "Simple and effective",
    text: "What I like most is that everything feels simple. There aren't ten different things customers have to click through. They see what we do, trust us and request an estimate.",
  },
];

export default function RooferPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Popup state
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  function openLeadModal() {
    setFormSubmitted(false);
    setShowLeadModal(true);
    document.body.style.overflow = "hidden";
  }

  function closeLeadModal() {
    setShowLeadModal(false);
    setFormSubmitted(false);
    document.body.style.overflow = "";
  }

  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitting(true);

    /*
      Replace this section with your API call later.

      Example:

      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    */

    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setFormSubmitted(true);
  }

  function nextTestimonial() {
    setTestimonialIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }

  function previousTestimonial() {
    setTestimonialIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* =========================================================
          NAVBAR
      ========================================================== */}

      <header
        className="sticky top-0 z-40 border-b"
        style={{
          backgroundColor: "rgba(249,248,246,.94)",
          borderColor: "rgba(23,22,21,.09)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* LOGO */}

          <a href="#" className="flex items-center gap-3">
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
                style={{
                  color: COLORS.clay,
                }}
              >
                Roofing Co.
              </div>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            <a
              href="#services"
              className="transition hover:opacity-60"
            >
              Services
            </a>

            <a
              href="#how-it-works"
              className="transition hover:opacity-60"
            >
              How It Works
            </a>

            <a
              href="#reviews"
              className="transition hover:opacity-60"
            >
              Reviews
            </a>

            <a
              href="#about"
              className="transition hover:opacity-60"
            >
              About Us
            </a>

            <a
              href="#faq"
              className="transition hover:opacity-60"
            >
              FAQ
            </a>
          </nav>

          {/* DESKTOP ACTIONS */}

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:18005550199"
              className="flex items-center gap-2 text-sm font-bold transition hover:opacity-60"
            >
              <Phone
                className="h-4 w-4"
                style={{
                  color: COLORS.clay,
                }}
              />

              (800) 555-0199
            </a>

            <button
              type="button"
              onClick={openLeadModal}
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition hover:opacity-80"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.ivory,
              }}
            >
              Get a Free Estimate

              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* MOBILE */}

          <div className="flex items-center gap-2 sm:hidden">
            <a
              href="tel:18005550199"
              aria-label="Call us"
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
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="block font-bold"
              >
                Services
              </a>

              <a
                href="#how-it-works"
                onClick={() => setMenuOpen(false)}
                className="block font-bold"
              >
                How It Works
              </a>

              <a
                href="#reviews"
                onClick={() => setMenuOpen(false)}
                className="block font-bold"
              >
                Reviews
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block font-bold"
              >
                About Us
              </a>

              <a
                href="#faq"
                onClick={() => setMenuOpen(false)}
                className="block font-bold"
              >
                FAQ
              </a>

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openLeadModal();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-black"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.ivory,
                }}
              >
                Get a Free Estimate

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================== */}

      <section
        id="about"
        className="relative overflow-hidden"
        style={{
          backgroundColor: COLORS.ivory,
        }}
      >
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-40"
          style={{
            backgroundColor: COLORS.sand,
            filter: "blur(20px)",
          }}
        />

        <div
          className="pointer-events-none absolute bottom-[-300px] left-[35%] h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            backgroundColor: COLORS.taupe,
            filter: "blur(40px)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
            {/* LEFT */}

            <div className="max-w-[650px]">
              <div
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[.14em]"
                style={{
                  backgroundColor: COLORS.sand,
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: COLORS.clay,
                  }}
                >
                  ✦
                </span>

                Built exclusively for roofers
              </div>

              <h1 className="text-5xl font-black leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-[76px] xl:text-[82px]">
                <span className="block">
                  A Website That
                </span>

                <span
                  className="block"
                  style={{
                    color: COLORS.clay,
                  }}
                >
                  Captures Leads
                </span>

                <span className="block">
                  While You Sleep
                </span>
              </h1>

              <p
                className="mt-7 max-w-[600px] text-base leading-7 sm:text-lg"
                style={{
                  color: "rgba(23,22,21,.62)",
                }}
              >
                Stop losing leads to slow websites. The{" "}
                <strong style={{ color: COLORS.black }}>
                  LeadCapture Funnel
                </strong>{" "}
                is a high-converting, 3-page system designed to turn
                visitors into booked roof estimates — with automatic
                follow-up in 60 seconds.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* MAIN POPUP BUTTON */}

                <button
                  type="button"
                  onClick={openLeadModal}
                  className="group flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-black transition duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.ivory,
                  }}
                >
                  Get My LeadCapture Funnel

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="tel:18005550199"
                  className="flex items-center justify-center gap-3 rounded-full border px-7 py-4 text-sm font-black transition duration-200 hover:bg-black/5"
                  style={{
                    borderColor: "rgba(23,22,21,.18)",
                  }}
                >
                  <Phone className="h-5 w-5" />

                  Call Us First
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "Setup in 48 Hours",
                  "No Long-Term Contract",
                  "Made for Roofers",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold"
                    style={{
                      color: "rgba(23,22,21,.48)",
                    }}
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: COLORS.clay,
                      }}
                    >
                      <Check className="h-3 w-3" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* VIDEO CARD */}

            <div className="relative">
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px]"
                style={{
                  backgroundColor: COLORS.taupe,
                  opacity: 0.45,
                }}
              />

              <div
                className="relative overflow-hidden rounded-[30px] border shadow-2xl"
                style={{
                  backgroundColor: COLORS.black,
                  borderColor: "rgba(23,22,21,.12)",
                }}
              >
                <div
                  className="relative flex aspect-[16/10] items-center justify-center"
                  style={{
                    backgroundColor: COLORS.black,
                  }}
                >
                  <div
                    className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                      backgroundColor: "rgba(201,181,156,.08)",
                    }}
                  />

                  <div
                    className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                    style={{
                      borderColor: "rgba(249,248,246,.10)",
                    }}
                  />

                  <button
                    type="button"
                    aria-label="Play video"
                    className="group relative z-10 flex h-24 w-24 items-center justify-center rounded-full border transition duration-300 hover:scale-105"
                    style={{
                      backgroundColor: "rgba(249,248,246,.10)",
                      borderColor: "rgba(249,248,246,.25)",
                      color: COLORS.ivory,
                    }}
                  >
                    <Play className="ml-1 h-9 w-9 fill-current" />
                  </button>
                </div>

                <div className="px-6 py-6 sm:px-8">
                  <h3
                    className="text-lg font-black sm:text-xl"
                    style={{
                      color: COLORS.ivory,
                    }}
                  >
                    Watch: How LeadCapture Funnel Works
                  </h3>

                  <p
                    className="mt-1 text-sm"
                    style={{
                      color: "rgba(249,248,246,.45)",
                    }}
                  >
                    2 min overview
                  </p>
                </div>

                <div
                  className="grid grid-cols-3 border-t"
                  style={{
                    borderColor: "rgba(249,248,246,.10)",
                    backgroundColor: "#211F1D",
                  }}
                >
                  <Stat value="15-30%" label="Conversion Rate" />

                  <Stat
                    value="60s"
                    label="Auto Follow-Up"
                    border
                  />

                  <Stat value="48h" label="Go Live" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AS SEEN ON
      ========================================================== */}

      <section
        className="border-y"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="text-sm font-bold"
              style={{
                color: "rgba(23,22,21,.70)",
              }}
            >
              As Seen On
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
            <PublicationLogo type="fox" />
            <PublicationLogo type="entrepreneur" />
            <PublicationLogo type="newsweek" />
            <PublicationLogo type="forbes" />
            <PublicationLogo type="cnbc" />
            <PublicationLogo type="gma" />
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}

      <section
        id="how-it-works"
        style={{
          backgroundColor: COLORS.sand,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
            <TrustItem text="More leads" />

            <div className="hidden h-4 w-px bg-black/10 sm:block" />

            <TrustItem text="Faster follow-up" />

            <div className="hidden h-4 w-px bg-black/10 sm:block" />

            <TrustItem text="Built for roofers" />
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================== */}

      <section
        id="reviews"
        className="relative overflow-hidden"
        style={{
          backgroundColor: COLORS.black,
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-10"
          style={{
            backgroundColor: COLORS.clay,
            filter: "blur(100px)",
          }}
        />

        <div className="relative mx-auto max-w-[1500px] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-xs font-black uppercase tracking-[.2em]"
              style={{
                color: COLORS.clay,
              }}
            >
              Real Results
            </p>

            <h2
              className="mt-4 text-3xl font-black tracking-[-.03em] sm:text-4xl lg:text-5xl"
              style={{
                color: COLORS.ivory,
              }}
            >
              Don't Take Our Word For It.
              <br className="hidden sm:block" />
              Here's What Roofers Say
            </h2>

            <p
              className="mx-auto mt-5 max-w-xl text-sm leading-6 sm:text-base"
              style={{
                color: "rgba(249,248,246,.50)",
              }}
            >
              See why roofing companies are using a better website and
              follow-up system to turn more visitors into real estimate
              requests.
            </p>
          </div>

          {/* DESKTOP */}

          <div className="relative mt-16 hidden lg:block">
            <div className="flex items-center justify-center gap-5">
              <ReviewCard
                review={testimonials[0]}
                className="w-[310px] -rotate-2"
              />

              <ReviewCard
                review={testimonials[1]}
                className="w-[360px] translate-y-[-35px] rotate-1"
              />

              <ReviewCard
                review={testimonials[2]}
                className="w-[310px] translate-y-[25px] -rotate-1"
              />

              <ReviewCard
                review={testimonials[3]}
                className="w-[310px] rotate-2"
              />
            </div>
          </div>

          {/* MOBILE */}

          <div className="mt-12 lg:hidden">
            <div className="mx-auto max-w-[500px]">
              <ReviewCard
                review={testimonials[testimonialIndex]}
              />
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={previousTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(249,248,246,.18)",
                  color: COLORS.ivory,
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width:
                      testimonialIndex === index ? 24 : 7,
                    backgroundColor:
                      testimonialIndex === index
                        ? COLORS.clay
                        : "rgba(249,248,246,.25)",
                  }}
                />
              ))}

              <button
                type="button"
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border"
                style={{
                  borderColor: "rgba(249,248,246,.18)",
                  color: COLORS.ivory,
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.ivory,
                color: COLORS.black,
              }}
            >
              <div className="flex gap-1">
                <span className="h-4 w-1 rounded-full bg-current" />
                <span className="h-4 w-1 rounded-full bg-current" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================== */}

      <section
        id="services"
        className="border-b"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <div
            className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full"
            style={{
              backgroundColor: COLORS.sand,
            }}
          >
            <Leaf className="h-5 w-5" />
          </div>

          <h2 className="text-3xl font-black tracking-[-.03em] sm:text-5xl">
            Your next lead could be
            <span
              className="block"
              style={{
                color: COLORS.clay,
              }}
            >
              one click away.
            </span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-6 sm:text-base"
            style={{
              color: "rgba(23,22,21,.58)",
            }}
          >
            Give homeowners a simpler way to request an estimate and
            give your roofing business a website that works while you're
            busy doing the actual work.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openLeadModal}
              className="flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-black transition hover:opacity-85"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.ivory,
              }}
            >
              Get My LeadCapture Funnel

              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="tel:18005550199"
              className="flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-sm font-black"
              style={{
                borderColor: "rgba(23,22,21,.16)",
              }}
            >
              <Phone className="h-4 w-4" />

              Call Us First
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer
        id="faq"
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
              <a href="#" className="flex items-center gap-3">
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
                    style={{
                      color: COLORS.clay,
                    }}
                  >
                    Roofing Co.
                  </div>
                </div>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
                Professional roofing services for homeowners who want
                quality work, clear communication and a roof built to
                last.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="tel:18005550199"
                  className="flex items-center gap-3 font-bold transition hover:opacity-60"
                >
                  <Phone
                    className="h-4 w-4"
                    style={{
                      color: COLORS.clay,
                    }}
                  />

                  (800) 555-0199
                </a>

                <a
                  href="mailto:hello@fieldandform.com"
                  className="flex items-center gap-3 font-semibold transition hover:opacity-60"
                >
                  <span
                    className="text-sm font-black"
                    style={{
                      color: COLORS.clay,
                    }}
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
                <a
                  href="#services"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  Our Services
                </a>

                <a
                  href="#how-it-works"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  How It Works
                </a>

                <a
                  href="#reviews"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  Reviews
                </a>

                <a
                  href="#about"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  About Us
                </a>

                <a
                  href="#faq"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* GET STARTED */}

            <div>
              <h3 className="text-xs font-black uppercase tracking-[.18em]">
                Get Started
              </h3>

              <div className="mt-5 space-y-3 text-sm">
                <button
                  type="button"
                  onClick={openLeadModal}
                  className="block font-bold"
                >
                  Get a Free Estimate
                </button>

                <a
                  href="tel:18005550199"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  Call Us
                </a>

                <button
                  type="button"
                  onClick={openLeadModal}
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  Request a Consultation
                </button>

                <a
                  href="#reviews"
                  className="block font-semibold opacity-60 hover:opacity-100"
                >
                  Customer Reviews
                </a>
              </div>
            </div>

            {/* LOCATION */}

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
                  title="Location"
                  src="https://www.google.com/maps?q=Denver%2C%20Colorado&output=embed"
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4">
                <p className="text-sm font-black">
                  Field & Form Roofing Co.
                </p>

                <address className="mt-2 not-italic text-sm leading-relaxed opacity-60">
                  1234 Garden Avenue
                  <br />
                  Denver, CO 80202
                </address>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}

          <div
            className="mt-12 flex flex-col justify-between gap-4 border-t pt-6 text-xs md:flex-row md:items-center"
            style={{
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <div className="opacity-45">
              © {new Date().getFullYear()} Field & Form Roofing Co.
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

      {/* =========================================================
          LEAD CAPTURE POPUP
      ========================================================== */}

      {showLeadModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
          style={{
            backgroundColor: "rgba(23,22,21,.72)",
            backdropFilter: "blur(8px)",
          }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeLeadModal();
            }
          }}
        >
          <div
            className="relative my-auto w-full max-w-[620px] overflow-hidden rounded-[28px] shadow-2xl"
            style={{
              backgroundColor: COLORS.ivory,
            }}
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={closeLeadModal}
              aria-label="Close popup"
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-105"
              style={{
                backgroundColor: COLORS.ivory,
                borderColor: "rgba(23,22,21,.10)",
              }}
            >
              <X className="h-5 w-5" />
            </button>

            {!formSubmitted ? (
              <>
                {/* FORM HEADER */}

                <div
                  className="px-6 pb-6 pt-8 sm:px-9 sm:pt-9"
                  style={{
                    backgroundColor: COLORS.sand,
                  }}
                >
                  <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em]"
                    style={{
                      backgroundColor: COLORS.ivory,
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: COLORS.clay,
                      }}
                    />

                    Roofing Growth System
                  </div>

                  <h2 className="max-w-[480px] text-3xl font-black leading-[1.05] tracking-[-.035em] sm:text-4xl">
                    Let's build your
                    <span
                      className="block"
                      style={{
                        color: COLORS.clay,
                      }}
                    >
                      LeadCapture Funnel.
                    </span>
                  </h2>

                  <p
                    className="mt-4 max-w-[500px] text-sm leading-6"
                    style={{
                      color: "rgba(23,22,21,.58)",
                    }}
                  >
                    Tell us a little about your roofing business.
                    We'll review your information and contact you with
                    the next steps.
                  </p>
                </div>

                {/* FORM */}

                <form
                  onSubmit={handleLeadSubmit}
                  className="px-6 py-7 sm:px-9 sm:py-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* NAME */}

                    <FormField
                      label="Your Name"
                      name="name"
                      placeholder="John Smith"
                      required
                    />

                    {/* COMPANY */}

                    <FormField
                      label="Company Name"
                      name="company"
                      placeholder="Smith Roofing"
                      required
                    />

                    {/* PHONE */}

                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                    />

                    {/* EMAIL */}

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@smithroofing.com"
                      required
                    />

                    {/* WEBSITE */}

                    <FormField
                      label="Website"
                      name="website"
                      placeholder="https://yourwebsite.com"
                    />

                    {/* REVENUE */}

                    <div>
                      <label
                        htmlFor="revenue"
                        className="mb-2 block text-xs font-black"
                      >
                        Monthly Revenue
                      </label>

                      <select
                        id="revenue"
                        name="revenue"
                        required
                        className="h-12 w-full rounded-xl border bg-transparent px-4 text-sm outline-none transition focus:ring-2"
                        style={{
                          borderColor: "rgba(23,22,21,.13)",
                          backgroundColor: COLORS.ivory,
                        }}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select range
                        </option>

                        <option value="under-20k">
                          Under $20k
                        </option>

                        <option value="20k-40k">
                          $20k – $40k
                        </option>

                        <option value="40k-60k">
                          $40k – $60k
                        </option>

                        <option value="60k-100k">
                          $60k – $100k
                        </option>

                        <option value="100k-plus">
                          $100k+
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* WHAT THEY NEED */}

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-black"
                    >
                      What can we help you with?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your current website, lead flow, or what you'd like to improve..."
                      className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:ring-2"
                      style={{
                        borderColor: "rgba(23,22,21,.13)",
                        backgroundColor: COLORS.ivory,
                      }}
                    />
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-full text-sm font-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    style={{
                      backgroundColor: COLORS.black,
                      color: COLORS.ivory,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="h-5 w-5 animate-spin rounded-full border-2"
                          style={{
                            borderColor:
                              "rgba(249,248,246,.25)",
                            borderTopColor: COLORS.ivory,
                          }}
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        Get My LeadCapture Funnel

                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p
                    className="mt-4 text-center text-[11px] leading-5"
                    style={{
                      color: "rgba(23,22,21,.42)",
                    }}
                  >
                    No spam. No pressure. We'll simply review your
                    information and get back to you.
                  </p>
                </form>
              </>
            ) : (
              /* =====================================================
                 SUCCESS STATE
              ====================================================== */

              <div className="px-6 py-14 text-center sm:px-10 sm:py-16">
                {/* GREEN CHECK */}

                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: "#DDF7EB",
                  }}
                >
                  <CheckCircle2
                    className="h-11 w-11"
                    style={{
                      color: COLORS.success,
                    }}
                    strokeWidth={2}
                  />
                </div>

                <div
                  className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[.14em]"
                  style={{
                    backgroundColor: "#DDF7EB",
                    color: COLORS.successDark,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: COLORS.success,
                    }}
                  />

                  Request Received
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-[-.035em] sm:text-4xl">
                  You're all set.
                </h2>

                <p
                  className="mx-auto mt-4 max-w-[440px] text-sm leading-6"
                  style={{
                    color: "rgba(23,22,21,.58)",
                  }}
                >
                  Thanks for reaching out. We've received your
                  information and someone from our team will contact
                  you shortly.
                </p>

                {/* WHAT HAPPENS NEXT */}

                <div
                  className="mx-auto mt-8 max-w-[440px] rounded-2xl border p-5 text-left"
                  style={{
                    backgroundColor: "#F2FAF6",
                    borderColor: "#CBEBDD",
                  }}
                >
                  <p
                    className="text-xs font-black uppercase tracking-[.15em]"
                    style={{
                      color: COLORS.successDark,
                    }}
                  >
                    What happens next
                  </p>

                  <div className="mt-4 space-y-3">
                    <SuccessStep
                      number="01"
                      text="We'll review your business information."
                    />

                    <SuccessStep
                      number="02"
                      text="We'll reach out to understand your goals."
                    />

                    <SuccessStep
                      number="03"
                      text="We'll show you how the funnel can work for you."
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeLeadModal}
                  className="mt-8 rounded-full px-7 py-3.5 text-sm font-black transition hover:opacity-85"
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.ivory,
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

/* =============================================================
   STAT
============================================================= */

function Stat({
  value,
  label,
  border = false,
}: {
  value: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className="px-3 py-5 text-center sm:px-5 sm:py-6"
      style={{
        borderRight: border
          ? "1px solid rgba(249,248,246,.10)"
          : undefined,
      }}
    >
      <div
        className="text-2xl font-black sm:text-3xl"
        style={{
          color: COLORS.ivory,
        }}
      >
        {value}
      </div>

      <div
        className="mt-1 text-[9px] font-black uppercase tracking-wider sm:text-[10px]"
        style={{
          color: "rgba(249,248,246,.40)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* =============================================================
   TRUST ITEM
============================================================= */

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold">
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full"
        style={{
          backgroundColor: COLORS.clay,
        }}
      >
        <Check className="h-3 w-3" />
      </span>

      {text}
    </div>
  );
}

/* =============================================================
   PUBLICATION LOGO
============================================================= */

function PublicationLogo({
  type,
}: {
  type:
    | "fox"
    | "entrepreneur"
    | "newsweek"
    | "forbes"
    | "cnbc"
    | "gma";
}) {
  if (type === "fox") {
    return (
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-3xl font-black tracking-[-.08em]">
            FOX
          </div>

          <div className="text-[9px] font-black uppercase tracking-[.18em]">
            BUSINESS
          </div>
        </div>
      </div>
    );
  }

  if (type === "entrepreneur") {
    return (
      <div className="flex justify-center">
        <div
          className="text-center text-xl font-black"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          Entrepreneur.
        </div>
      </div>
    );
  }

  if (type === "newsweek") {
    return (
      <div className="flex justify-center">
        <div
          className="text-center text-2xl font-black"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          Newsweek
        </div>
      </div>
    );
  }

  if (type === "forbes") {
    return (
      <div className="flex justify-center">
        <div
          className="text-center text-3xl font-black"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          Forbes
        </div>
      </div>
    );
  }

  if (type === "cnbc") {
    return (
      <div className="flex justify-center">
        <div className="text-center">
          <div className="text-2xl font-black tracking-tight">
            CNBC
          </div>

          <div
            className="mx-auto mt-1 h-1 w-12 rounded-full"
            style={{
              backgroundColor: COLORS.black,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="text-center text-lg font-black leading-[.9]">
        GOOD
        <br />
        MORNING
        <br />
        AMERICA
      </div>
    </div>
  );
}

/* =============================================================
   FORM FIELD
============================================================= */

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-black"
      >
        {label}
        {required && (
          <span
            className="ml-1"
            style={{
              color: COLORS.clay,
            }}
          >
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-xl border bg-transparent px-4 text-sm outline-none transition focus:ring-2"
        style={{
          borderColor: "rgba(23,22,21,.13)",
          backgroundColor: COLORS.ivory,
        }}
      />
    </div>
  );
}

/* =============================================================
   SUCCESS STEP
============================================================= */

function SuccessStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-black"
        style={{
          backgroundColor: COLORS.success,
          color: COLORS.ivory,
        }}
      >
        {number}
      </div>

      <p
        className="text-xs font-semibold"
        style={{
          color: "rgba(23,22,21,.68)",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* =============================================================
   REVIEW CARD
============================================================= */

function ReviewCard({
  review,
  className = "",
}: {
  review: Review;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[24px] p-5 shadow-xl transition-transform duration-300 hover:rotate-0 ${className}`}
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-black"
            style={{
              backgroundColor: COLORS.sand,
            }}
          >
            {review.initials}
          </div>

          <div>
            <div className="text-sm font-black">
              {review.name}
            </div>

            <div
              className="mt-0.5 text-[10px]"
              style={{
                color: "rgba(23,22,21,.50)",
              }}
            >
              {review.location} · 1 review
            </div>
          </div>
        </div>

        <div
          className="whitespace-nowrap text-[10px] font-medium"
          style={{
            color: "rgba(23,22,21,.45)",
          }}
        >
          {review.date}
        </div>
      </div>

      <div className="mt-4 flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className="flex h-4 w-4 items-center justify-center text-[9px]"
            style={{
              backgroundColor: "#25A67A",
              color: COLORS.ivory,
            }}
          >
            ★
          </div>
        ))}
      </div>

      <h3 className="mt-4 text-sm font-black">
        {review.title}
      </h3>

      <p
        className="mt-3 text-[12px] leading-[1.55]"
        style={{
          color: "rgba(23,22,21,.72)",
        }}
      >
        {review.text}
      </p>

      <div className="mt-5 flex items-center gap-2">
        <span
          className="rounded-md px-2 py-1 text-[8px] font-bold"
          style={{
            backgroundColor: COLORS.sand,
            color: "rgba(23,22,21,.50)",
          }}
        >
          {review.date}
        </span>

        <span
          className="rounded-md px-2 py-1 text-[8px] font-bold"
          style={{
            backgroundColor: COLORS.sand,
            color: "rgba(23,22,21,.50)",
          }}
        >
          Verified review
        </span>
      </div>
    </article>
  );
}