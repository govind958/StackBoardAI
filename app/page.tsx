"use client";

import { useState } from "react";

import ChatWidget from "./components/ChatWidget";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Leaf,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  Trees,
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
    "https://images.unsplash.com/photo-1770932537112-a7b24b062bf2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",

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
  [
    "01",
    "Tell us what you want",
    "Choose the closest match. You don't need to know the landscaping terms.",
  ],
  [
    "02",
    "Walk the property with us",
    "We'll look at the space, listen to what matters and recommend practical options.",
  ],
  [
    "03",
    "Get a simple plan",
    "You get a clear scope, next steps and an estimate before work begins.",
  ],
];

const reviews = [
  {
    name: "Sarah M.",
    location: "Local homeowner",
    text:
      "They actually listened to what we wanted instead of trying to sell us a huge project. The yard feels completely different.",
  },
  {
    name: "Mike R.",
    location: "Local homeowner",
    text:
      "The crew showed up when they said they would, worked cleanly and left the property looking fantastic.",
  },
  {
    name: "Jennifer K.",
    location: "Local homeowner",
    text:
      "From the first walk-through to the finished beds, the whole process was easy. Exactly what we wanted.",
  },
];

const marqueeReviews = [
  {
    title: "Best on the market",
    text: "I love this company because the support is great. Please...",
    name: "John Contractor",
  },
  {
    title: "Exactly what we needed",
    text:
      "The process was simple, communication was excellent and everything worked exactly as promised.",
    name: "Michael R.",
  },
  {
    title: "Highly recommended",
    text:
      "Very professional from start to finish. Everything was simple and easy to understand.",
    name: "Sarah M.",
  },
  {
    title: "A huge improvement",
    text:
      "Finally a marketing system that makes sense for a contractor. Simple, clean and effective.",
    name: "David T.",
  },
];

const faqs = [
  [
    "Do you offer free estimates?",
    "Yes. Start by telling us what you're looking for and we'll let you know the best next step for your property.",
  ],
  [
    "Can you help if I don't know what I want?",
    "Absolutely. That's one of the reasons for the initial walkthrough. Tell us what you dislike about the yard and what you want it to feel like.",
  ],
  [
    "Do you handle ongoing maintenance?",
    "Yes. Maintenance can be arranged separately from design and installation, depending on the services available in your area.",
  ],
  [
    "How soon can you start?",
    "Availability depends on the season and project size. We'll give you a realistic timeline after learning about the project.",
  ],
];

const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
    />
    <path
      fill="#34A853"
      d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.53A9.74 9.74 0 0 0 12 21.5Z"
    />
    <path
      fill="#FBBC05"
      d="M6.53 13.58A5.86 5.86 0 0 1 6.22 12c0-.55.11-1.08.31-1.58V7.89H3.29A9.5 9.5 0 0 0 2.5 12c0 1.48.35 2.88.79 4.11l3.24-2.53Z"
    />
    <path
      fill="#EA4335"
      d="M12 6.39c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.39l3.24 2.53C7.3 8.11 9.46 6.39 12 6.39Z"
    />
  </svg>
);

export default function LandscapingLandingPage() {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [isReviewsPaused, setIsReviewsPaused] = useState(false);

  const scrollToRequest = (need?: string) => {
    if (need) {
      setSelectedNeed(need);
    }

    requestAnimationFrame(() => {
      document.getElementById("request")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const ReviewCard = ({
    title,
    text,
    name,
  }: {
    title: string;
    text: string;
    name: string;
  }) => (
    <article
      className="flex h-[175px] w-[310px] shrink-0 flex-col rounded-xl border p-5 shadow-sm"
      style={{
        backgroundColor: COLORS.ivory,
        borderColor: "rgba(23,22,21,.10)",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className="flex h-4 w-4 items-center justify-center"
              style={{
                backgroundColor: COLORS.clay,
              }}
            >
              <Star
                className="h-2.5 w-2.5 fill-current"
                style={{
                  color: COLORS.ivory,
                }}
              />
            </div>
          ))}
        </div>

        <span
          className="text-[10px]"
          style={{
            color: "rgba(23,22,21,.45)",
          }}
        >
          2 days ago
        </span>
      </div>

      <h3 className="mt-3 text-sm font-black">{title}</h3>

      <p
        className="mt-2 line-clamp-2 text-xs leading-relaxed"
        style={{
          color: "rgba(23,22,21,.60)",
        }}
      >
        {text}
      </p>

      <div className="mt-auto pt-3 text-[11px] font-black">
        {name}
      </div>
    </article>
  );

  const RatingCard = () => (
    <div
      className="flex h-[175px] w-[225px] shrink-0 flex-col items-center justify-center rounded-xl border p-5 text-center shadow-sm"
      style={{
        backgroundColor: COLORS.ivory,
        borderColor: "rgba(23,22,21,.10)",
      }}
    >
      <div className="text-sm font-black">Excellent</div>

      <div className="mt-3 flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className="flex h-7 w-7 items-center justify-center"
            style={{
              backgroundColor: COLORS.clay,
            }}
          >
            <Star
              className="h-4 w-4 fill-current"
              style={{
                color: COLORS.ivory,
              }}
            />
          </div>
        ))}
      </div>

      <p
        className="mt-3 text-[11px]"
        style={{
          color: "rgba(23,22,21,.55)",
        }}
      >
        Based on{" "}
        <span className="font-black underline">456 reviews</span>
      </p>

      <div className="mt-2 flex items-center gap-1">
        <Star
          className="h-4 w-4 fill-current"
          style={{
            color: COLORS.clay,
          }}
        />

        <span className="text-xs font-black">Trustpilot</span>
      </div>
    </div>
  );

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: COLORS.ivory,
        color: COLORS.black,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <style jsx>{`
        .review-marquee {
          animation: reviewScroll 35s linear infinite;
          will-change: transform;
        }

        .review-marquee.paused {
          animation-play-state: paused;
        }

        .logo-marquee {
          animation: logoScroll 30s linear infinite;
          will-change: transform;
        }

        @keyframes reviewScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes logoScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .review-marquee,
          .logo-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* NAVBAR */}

      <Navbar  />

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#F9F8F6]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[640px] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_.9fr] lg:gap-14 lg:py-20">
            {/* LEFT */}

            <div className="relative z-10 max-w-2xl">
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em]"
                style={{
                  backgroundColor: "rgba(249,248,246,.85)",
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <CheckCircle2
                  className="h-3.5 w-3.5"
                  style={{ color: COLORS.clay }}
                />

                Built For Contractors
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-[.98] tracking-tight sm:text-5xl lg:text-6xl">
                Website Design &{" "}
                <span
                  className="block"
                  style={{ color: COLORS.clay }}
                >
                  Marketing Systems
                </span>
                For Contractors
              </h1>

              <div className="mt-6 max-w-xl">
                <h2 className="text-xl font-black leading-tight tracking-tight sm:text-2xl">
                  Cut the bullsh*t, Marketing isn't rocket science.
                </h2>

                <p
                  className="mt-3 max-w-xl text-sm leading-relaxed sm:text-base"
                  style={{
                    color: "rgba(23,22,21,.68)",
                  }}
                >
                  No agency... including ours, has the miracle solution
                  to all your problems. We'll give you the tools to win
                  but you need to commit to using them!
                </p>
              </div>

              {/* SOCIAL PROOF */}

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  {[
                    {
                      initials: "JD",
                      position: "z-40",
                    },
                    {
                      initials: "MK",
                      position: "z-30",
                    },
                    {
                      initials: "AR",
                      position: "z-20",
                    },
                    {
                      initials: "TS",
                      position: "z-10",
                    },
                  ].map((person, index) => (
                    <div
                      key={index}
                      className={`-ml-2 first:ml-0 ${person.position} flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F9F8F6] text-[10px] font-black`}
                      style={{
                        backgroundColor:
                          index === 0
                            ? COLORS.black
                            : index === 1
                            ? COLORS.clay
                            : index === 2
                            ? "#D8D0C8"
                            : "#B7ADA3",
                        color:
                          index === 0
                            ? COLORS.ivory
                            : COLORS.black,
                      }}
                    >
                      {person.initials}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-current"
                      style={{ color: COLORS.clay }}
                    />
                  ))}

                  <div className="relative h-4 w-4 overflow-hidden">
                    <Star
                      className="absolute inset-0 h-4 w-4"
                      style={{ color: COLORS.clay }}
                    />

                    <div
                      className="absolute left-0 top-0 h-full w-1/2 overflow-hidden"
                      style={{
                        backgroundColor: COLORS.clay,
                      }}
                    >
                      <Star
                        className="h-4 w-4 fill-current"
                        style={{ color: COLORS.clay }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-sm">
                  <span className="font-black">4.5/5</span>

                  <span
                    className="ml-1"
                    style={{
                      color: "rgba(23,22,21,.55)",
                    }}
                  >
                    from contractors
                  </span>
                </div>
              </div>

              {/* CTA */}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => scrollToRequest()}
                  className="group flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:opacity-85"
                  style={{
                    backgroundColor: COLORS.black,
                    color: COLORS.ivory,
                  }}
                >
                  Book a Call

                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: COLORS.ivory,
                      color: COLORS.black,
                    }}
                  >
                    <Phone className="h-4 w-4" />
                  </span>
                </button>

                <a
                  href="#services"
                  className="flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-black uppercase tracking-wide transition-all duration-300 hover:bg-white"
                  style={{
                    borderColor: COLORS.black,
                    backgroundColor: "rgba(249,248,246,.55)",
                  }}
                >
                  See What We Do

                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* TRUST POINTS */}

              <div className="mt-6 flex max-w-xl flex-wrap gap-x-5 gap-y-2">
                {[
                  "Built for contractors",
                  "Clear pricing",
                  "No long-term contracts",
                  "No marketing BS",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-bold sm:text-sm"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0"
                      style={{
                        color: COLORS.clay,
                      }}
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT WORKFLOW */}

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{
                  backgroundColor: "rgba(201,181,156,.20)",
                }}
              />

              <div className="relative py-4 sm:py-6">
                <div
                  className="absolute left-[27px] top-[48px] bottom-[48px] w-px"
                  style={{
                    backgroundColor: "rgba(23,22,21,.18)",
                  }}
                />

                {/* STEP 1 */}

                <div className="relative mb-5 flex items-center gap-3 sm:mb-6">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      backgroundColor: COLORS.ivory,
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <Mail
                      className="h-5 w-5"
                      style={{ color: COLORS.black }}
                    />
                  </div>

                  <div
                    className="flex min-h-[70px] flex-1 items-center rounded-2xl border px-4 py-3 shadow-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,.88)",
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <div>
                      <div className="text-sm font-black">
                        Contact submits form
                      </div>

                      <div
                        className="mt-1 text-xs"
                        style={{
                          color: "rgba(23,22,21,.55)",
                        }}
                      >
                        New contractor lead
                      </div>
                    </div>

                    <ArrowRight
                      className="ml-auto h-4 w-4 shrink-0"
                      style={{ color: COLORS.clay }}
                    />
                  </div>
                </div>

                {/* STEP 2 */}

                <div className="relative mb-5 flex items-center gap-3 sm:mb-6">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      backgroundColor: COLORS.ivory,
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <Tag
                      className="h-5 w-5"
                      style={{ color: COLORS.clay }}
                    />
                  </div>

                  <div
                    className="flex min-h-[70px] flex-1 items-center rounded-2xl border px-4 py-3 shadow-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,.88)",
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <div>
                      <div className="text-sm font-black">
                        Add lead status
                      </div>

                      <div
                        className="mt-1 text-xs"
                        style={{
                          color: "rgba(23,22,21,.55)",
                        }}
                      >
                        Automatically organize the lead
                      </div>
                    </div>

                    <div
                      className="ml-auto rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wide"
                      style={{
                        backgroundColor: "rgba(201,181,156,.25)",
                        color: COLORS.black,
                      }}
                    >
                      New Lead
                    </div>
                  </div>
                </div>

                {/* CUSTOMER CARD */}

                <div
                  className="relative z-20 mb-5 overflow-hidden rounded-2xl border shadow-xl sm:mb-6"
                  style={{
                    backgroundColor: COLORS.black,
                    borderColor: "rgba(23,22,21,.12)",
                  }}
                >
                  <div
                    className="h-1 w-full"
                    style={{
                      backgroundColor: COLORS.clay,
                    }}
                  />

                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-sm font-black"
                        style={{
                          backgroundColor: COLORS.clay,
                          color: COLORS.black,
                        }}
                      >
                        AC
                      </div>

                      <div className="min-w-0">
                        <div
                          className="truncate text-lg font-black"
                          style={{
                            color: COLORS.ivory,
                          }}
                        >
                          Alex Contractor
                        </div>

                        <div
                          className="mt-1 text-xs"
                          style={{
                            color: "rgba(249,248,246,.55)",
                          }}
                        >
                          New website inquiry
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wide"
                        style={{
                          backgroundColor: COLORS.clay,
                          color: COLORS.black,
                        }}
                      >
                        Potential Client
                      </span>

                      <span
                        className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(249,248,246,.12)",
                          color: "rgba(249,248,246,.75)",
                        }}
                      >
                        Website Lead
                      </span>

                      <span
                        className="rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wide"
                        style={{
                          backgroundColor: "rgba(249,248,246,.12)",
                          color: "rgba(249,248,246,.75)",
                        }}
                      >
                        Follow Up
                      </span>
                    </div>

                    <div
                      className="mt-4 flex items-center justify-between border-t pt-3"
                      style={{
                        borderColor: "rgba(249,248,246,.12)",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: COLORS.clay,
                          }}
                        />

                        <span
                          className="text-xs font-bold"
                          style={{
                            color: "rgba(249,248,246,.68)",
                          }}
                        >
                          Automation active
                        </span>
                      </div>

                      <ArrowUpRight
                        className="h-4 w-4"
                        style={{ color: COLORS.clay }}
                      />
                    </div>
                  </div>
                </div>

                {/* STEP 3 */}

                <div className="relative mb-5 flex items-center gap-3 sm:mb-6">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      backgroundColor: COLORS.ivory,
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <Phone
                      className="h-5 w-5"
                      style={{ color: COLORS.clay }}
                    />
                  </div>

                  <div
                    className="flex min-h-[70px] flex-1 items-center rounded-2xl border px-4 py-3 shadow-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,.88)",
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <div>
                      <div className="text-sm font-black">
                        Send follow-up
                      </div>

                      <div
                        className="mt-1 text-xs"
                        style={{
                          color: "rgba(23,22,21,.55)",
                        }}
                      >
                        Automatically follow up with the lead
                      </div>
                    </div>

                    <ArrowRight
                      className="ml-auto h-4 w-4 shrink-0"
                      style={{ color: COLORS.clay }}
                    />
                  </div>
                </div>

                {/* STEP 4 */}

                <div className="relative flex items-center gap-3">
                  <div
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      backgroundColor: COLORS.ivory,
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <CheckCircle2
                      className="h-5 w-5"
                      style={{ color: COLORS.clay }}
                    />
                  </div>

                  <div
                    className="flex min-h-[70px] flex-1 items-center rounded-2xl border px-4 py-3 shadow-md"
                    style={{
                      backgroundColor: "rgba(255,255,255,.88)",
                      borderColor: "rgba(23,22,21,.10)",
                    }}
                  >
                    <div>
                      <div className="text-sm font-black">
                        Booked & ready
                      </div>

                      <div
                        className="mt-1 text-xs"
                        style={{
                          color: "rgba(23,22,21,.55)",
                        }}
                      >
                        Turn inquiries into real opportunities
                      </div>
                    </div>

                    <div
                      className="ml-auto rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wide"
                      style={{
                        backgroundColor: COLORS.black,
                        color: COLORS.ivory,
                      }}
                    >
                      Done
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}

      <section
        className="overflow-hidden border-y py-14 sm:py-16"
        style={{
          backgroundColor: COLORS.sand,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span
              className="text-xs font-black uppercase tracking-[.18em]"
              style={{ color: COLORS.clay }}
            >
              Customer Reviews
            </span>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              What customers say about us
            </h2>

            <p
              className="mt-3 text-sm sm:text-base"
              style={{
                color: "rgba(23,22,21,.55)",
              }}
            >
              We do our best to provide you with the best experience ever.
            </p>
          </div>

          <div
            className="relative mt-8 overflow-hidden"
            onMouseEnter={() => setIsReviewsPaused(true)}
            onMouseLeave={() => setIsReviewsPaused(false)}
          >
            <div
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8"
              style={{
                background:
                  "linear-gradient(to right, rgba(239,233,227,1), rgba(239,233,227,0))",
              }}
            />

            <div
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8"
              style={{
                background:
                  "linear-gradient(to left, rgba(239,233,227,1), rgba(239,233,227,0))",
              }}
            />

            <div
              className={`review-marquee flex w-max gap-4 ${
                isReviewsPaused ? "paused" : ""
              }`}
            >
              {/* SET 1 */}

              <div className="flex gap-4">
                <RatingCard />

                {marqueeReviews.map((review) => (
                  <ReviewCard
                    key={review.name}
                    title={review.title}
                    text={review.text}
                    name={review.name}
                  />
                ))}
              </div>

              {/* SET 2 */}

              <div className="flex gap-4">
                <RatingCard />

                {marqueeReviews.map((review) => (
                  <ReviewCard
                    key={`duplicate-${review.name}`}
                    title={review.title}
                    text={review.text}
                    name={review.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COMPANY LOGOS */}

          <div
            className="mt-10 overflow-hidden border-t pt-8"
            style={{
              borderColor: "rgba(23,22,21,.10)",
            }}
          >
            <div className="logo-marquee flex w-max items-center gap-14">
              {[
                "CONTRACTOR",
                "BUILDR",
                "NORTHSTAR",
                "SUMMIT",
                "PROBUILD",
                "CRAFTWORK",
                "CONTRACTOR",
                "BUILDR",
                "NORTHSTAR",
                "SUMMIT",
                "PROBUILD",
                "CRAFTWORK",
              ].map((logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="shrink-0 text-sm font-black tracking-tight opacity-45 sm:text-lg"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST */}






















      {/* SERVICES */}

      











      {/* PROCESS */}
{/* =====================================================
    PROCESS
====================================================== */}

<section
  id="process"
  className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
  style={{
    backgroundColor: COLORS.black,
    color: COLORS.ivory,
  }}
>
  {/* Background decoration */}
  <div
    className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(201,181,156,.12)",
    }}
  />

  <div
    className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(201,181,156,.08)",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    {/* HEADER */}
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span
          className="h-px w-8"
          style={{
            backgroundColor: COLORS.clay,
          }}
        />

        <span
          className="text-xs font-black uppercase tracking-[.18em]"
          style={{
            color: COLORS.clay,
          }}
        >
          How it works
        </span>
      </div>

      <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
        Simple from
        <span
          className="block"
          style={{
            color: COLORS.clay,
          }}
        >
          start to finish.
        </span>
      </h2>

      <p
        className="mt-4 max-w-xl text-sm leading-relaxed sm:text-base"
        style={{
          color: "rgba(249,248,246,.58)",
        }}
      >
        You shouldn't need a project manager just to get your yard
        looking right. We keep everything clear, straightforward and
        easy to follow.
      </p>
    </div>

    {/* PROCESS CARDS */}
    <div className="relative mt-10 lg:mt-14">
      
      {/* Connecting line — desktop */}
      <div
        className="absolute left-[16.66%] right-[16.66%] top-14 hidden h-px lg:block"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,181,156,.45), rgba(201,181,156,.45), transparent)",
        }}
      />

      <div className="grid gap-4 md:grid-cols-3">
        {process.map(([number, title, text], index) => (
          <div
            key={number}
            className="group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
            style={{
              backgroundColor:
                index === 1
                  ? "rgba(201,181,156,.12)"
                  : "rgba(249,248,246,.055)",
              borderColor: "rgba(249,248,246,.10)",
            }}
          >
            {/* Card glow */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{
                backgroundColor: "rgba(201,181,156,.20)",
              }}
            />

            {/* Number + connector */}
            <div className="relative flex items-center justify-between">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full border text-sm font-black transition-all duration-500 group-hover:scale-110"
                style={{
                  backgroundColor:
                    index === 1
                      ? COLORS.clay
                      : "rgba(201,181,156,.10)",
                  borderColor: "rgba(201,181,156,.35)",
                  color:
                    index === 1
                      ? COLORS.black
                      : COLORS.clay,
                }}
              >
                {number}
              </div>

              <span
                className="text-[10px] font-black uppercase tracking-[.16em]"
                style={{
                  color: "rgba(249,248,246,.30)",
                }}
              >
                Step {index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="relative mt-8">
              <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                {title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{
                  color: "rgba(249,248,246,.55)",
                }}
              >
                {text}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="relative mt-8 flex items-center gap-2">
              <div
                className="h-1 rounded-full transition-all duration-500 group-hover:w-16"
                style={{
                  width: index === 1 ? "64px" : "32px",
                  backgroundColor: COLORS.clay,
                }}
              />

              <div
                className="h-1 w-1 rounded-full"
                style={{
                  backgroundColor: COLORS.clay,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* BOTTOM MESSAGE */}
    <div
      className="mt-8 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      style={{
        backgroundColor: "rgba(249,248,246,.045)",
        borderColor: "rgba(249,248,246,.09)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(201,181,156,.15)",
            color: COLORS.clay,
          }}
        >
          <Check className="h-4 w-4" />
        </div>

        <div>
          <p className="text-sm font-black">
            No complicated process.
          </p>

          <p
            className="mt-1 text-xs"
            style={{
              color: "rgba(249,248,246,.45)",
            }}
          >
            Tell us what you want. We'll help figure out the rest.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToRequest()}
        className="group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
        style={{
          backgroundColor: COLORS.clay,
          color: COLORS.black,
        }}
      >
        Start Your Project

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</section>

      {/* WORK */}

      <section
        id="work"
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: COLORS.ivory }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span
                className="text-xs font-black uppercase tracking-[.18em]"
                style={{ color: COLORS.clay }}
              >
                Selected work
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Real yards.
                <span
                  className="block"
                  style={{ color: COLORS.clay }}
                >
                  Thoughtfully finished.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-60">
                A look at the kind of outdoor spaces our team creates
                for local homeowners.
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToRequest()}
              className="flex w-fit items-center gap-2 rounded-full border px-5 py-3 text-sm font-black"
              style={{
                borderColor: "rgba(23,22,21,.15)",
              }}
            >
              Start your project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-8 grid auto-rows-[210px] grid-cols-1 gap-3 sm:auto-rows-[230px] md:auto-rows-[180px] md:grid-cols-4 lg:auto-rows-[210px]">

            {/* FEATURED */}

            <div className="group relative overflow-hidden rounded-2xl sm:row-span-2 md:col-span-2 md:row-span-2">
              <img
                src={images.project1}
                alt="Finished residential backyard landscape"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                <span className="text-[9px] font-black uppercase tracking-[.18em] opacity-75">
                  Featured project
                </span>

                <h3 className="mt-2 max-w-md text-xl font-black leading-tight sm:text-2xl">
                  A backyard made for actually living in
                </h3>

                <p className="mt-2 max-w-md text-xs leading-relaxed text-white/70 sm:text-sm">
                  Design, planting and outdoor living improvements
                  built around how the family uses the space.
                </p>
              </div>
            </div>

            {[
              [
                images.project2,
                "Front Yard",
                "Simple planting. Big curb appeal.",
                "Residential front-yard planting",
              ],
              [
                images.project3,
                "Landscape Refresh",
                "Less maintenance. More enjoyment.",
                "Residential landscape refresh",
              ],
              [
                images.project5,
                "Planting",
                "Natural texture, year-round interest.",
                "Residential planting project",
              ],
              [
                images.project6,
                "Maintenance",
                "A yard that's easier to keep beautiful.",
                "Landscape maintenance project",
              ],
            ].map(([image, label, title, alt]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl md:col-span-1"
              >
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <span className="text-[9px] font-black uppercase tracking-[.18em] opacity-70">
                    {label}
                  </span>

                  <h3 className="mt-1 text-base font-black leading-tight">
                    {title}
                  </h3>
                </div>
              </div>
            ))}

            <div className="group relative overflow-hidden rounded-2xl md:col-span-2">
              <img
                src={images.project4}
                alt="Completed backyard landscaping project"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 text-white">
                <span className="text-[9px] font-black uppercase tracking-[.18em] opacity-70">
                  Backyard transformation
                </span>

                <h3 className="mt-1 max-w-sm text-lg font-black">
                  A space that finally feels finished.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}

     {/* =====================================================
    TEAM
====================================================== */}

<section
  id="team"
  className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
  style={{
    backgroundColor: COLORS.black,
    color: COLORS.ivory,
  }}
>
  {/* Background glow */}
  <div
    className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(201,181,156,.10)",
    }}
  />

  <div
    className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(201,181,156,.07)",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* HEADER */}
    <div className="grid items-end gap-8 lg:grid-cols-[.9fr_1.1fr]">

      <div>
        <div className="flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{
              backgroundColor: COLORS.clay,
            }}
          />

          <span
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{
              color: COLORS.clay,
            }}
          >
            Meet the people
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          The people behind
          <span
            className="block"
            style={{
              color: COLORS.clay,
            }}
          >
            the work.
          </span>
        </h2>
      </div>

      <div className="max-w-xl lg:justify-self-end">
        <p
          className="text-sm leading-relaxed sm:text-base"
          style={{
            color: "rgba(249,248,246,.55)",
          }}
        >
          Landscaping is personal. You're trusting a team to work
          around your home, your family and your property. Meet the
          people responsible for making every project happen.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <div
            className="rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-wider"
            style={{
              borderColor: "rgba(249,248,246,.12)",
              backgroundColor: "rgba(249,248,246,.04)",
              color: "rgba(249,248,246,.65)",
            }}
          >
            Local Team
          </div>

          <div
            className="rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-wider"
            style={{
              borderColor: "rgba(249,248,246,.12)",
              backgroundColor: "rgba(249,248,246,.04)",
              color: "rgba(249,248,246,.65)",
            }}
          >
            Experienced
          </div>

          <div
            className="rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-wider"
            style={{
              borderColor: "rgba(249,248,246,.12)",
              backgroundColor: "rgba(249,248,246,.04)",
              color: "rgba(249,248,246,.65)",
            }}
          >
            Hands On
          </div>
        </div>
      </div>
    </div>

    {/* TEAM CARDS */}
    <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
      {[
        [
          images.team1,
          "Alex Morgan",
          "Owner & Landscape Designer",
          "01",
        ],
        [
          images.team2,
          "Maya Chen",
          "Landscape Project Lead",
          "02",
        ],
        [
          images.team3,
          "Ryan Brooks",
          "Crew Lead",
          "03",
        ],
      ].map(([image, name, role, number], index) => (
        <div
          key={name}
          className="group relative overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          style={{
            backgroundColor:
              index === 1
                ? "rgba(201,181,156,.10)"
                : "rgba(249,248,246,.055)",
            borderColor: "rgba(249,248,246,.10)",
          }}
        >
          {/* Card glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 z-10 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            style={{
              backgroundColor: "rgba(201,181,156,.18)",
            }}
          />

          {/* IMAGE */}
          <div className="relative aspect-[4/4.5] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover grayscale-[15%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
            />

            {/* Image gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(23,22,21,.85), rgba(23,22,21,.05) 55%, transparent)",
              }}
            />

            {/* Number */}
            <div
              className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border text-[10px] font-black backdrop-blur-md"
              style={{
                backgroundColor: "rgba(23,22,21,.55)",
                borderColor: "rgba(249,248,246,.18)",
                color: COLORS.clay,
              }}
            >
              {number}
            </div>

            {/* Role on image */}
            <div className="absolute bottom-5 left-5 right-5">
              <div
                className="text-[9px] font-black uppercase tracking-[.16em]"
                style={{
                  color: COLORS.clay,
                }}
              >
                {role}
              </div>

              <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                {name}
              </h3>
            </div>
          </div>

          {/* CARD FOOTER */}
          <div className="relative p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "rgba(249,248,246,.48)",
                  }}
                >
                  Here from the first walkthrough to the final
                  detail.
                </p>
              </div>

              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45"
                style={{
                  borderColor: "rgba(201,181,156,.30)",
                  color: COLORS.clay,
                }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Bottom accent */}
            <div className="mt-5 flex items-center gap-2">
              <div
                className="h-1 rounded-full transition-all duration-500 group-hover:w-16"
                style={{
                  width: index === 1 ? "48px" : "28px",
                  backgroundColor: COLORS.clay,
                }}
              />

              <div
                className="h-1 w-1 rounded-full"
                style={{
                  backgroundColor: COLORS.clay,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* BOTTOM TRUST BAR */}
    <div
      className="mt-8 flex flex-col gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
      style={{
        backgroundColor: "rgba(249,248,246,.045)",
        borderColor: "rgba(249,248,246,.09)",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{
            backgroundColor: "rgba(201,181,156,.14)",
            color: COLORS.clay,
          }}
        >
          <CheckCircle2 className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-black">
            You're working with real people.
          </p>

          <p
            className="mt-1 text-xs"
            style={{
              color: "rgba(249,248,246,.45)",
            }}
          >
            No call centers. No disappearing after the sale.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToRequest()}
        className="group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-black uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
        style={{
          backgroundColor: COLORS.clay,
          color: COLORS.black,
        }}
      >
        Talk To Our Team

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  </div>
</section>

      {/* GOOGLE REVIEWS */}

      <section
  id="pricing"
  className="relative overflow-hidden py-12 sm:py-16 lg:py-20"
  style={{
    backgroundColor: COLORS.sand,
  }}
>
  {/* Subtle decorative shape */}
  <div
    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(196,132,91,.10)",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Simple pricing
        </span>

        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
          Good work.
          <span
            className="block"
            style={{ color: COLORS.clay }}
          >
            Straightforward pricing.
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-relaxed opacity-55 md:text-right">
        Choose the level of care that works for your property.
        Every plan is built around reliable service and quality work.
      </p>
    </div>

    {/* Pricing */}
    <div className="mt-8 grid gap-4 lg:grid-cols-3">

      {/* Essential */}
      <div
        className="group flex flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <span
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Essential
        </span>

        <div className="mt-5 flex items-end gap-1">
          <span className="text-4xl font-black tracking-tight">
            $149
          </span>

          <span className="mb-1 text-xs opacity-40">
            / month
          </span>
        </div>

        <p className="mt-4 text-xs leading-relaxed opacity-55 sm:text-sm">
          Reliable ongoing care for homeowners who want their
          outdoor space looking its best.
        </p>

        <div
          className="my-6 h-px"
          style={{
            backgroundColor: "rgba(23,22,21,.08)",
          }}
        />

        <div className="flex-1 space-y-3">
          {[
            "Lawn maintenance",
            "Seasonal cleanup",
            "Basic trimming",
            "Routine property care",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-xs"
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                style={{
                  backgroundColor: "rgba(196,132,91,.14)",
                  color: COLORS.clay,
                }}
              >
                ✓
              </span>

              <span className="opacity-65">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-wide transition hover:opacity-80"
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.ivory,
          }}
        >
          Get Started

          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Popular */}
      <div
        className="relative flex flex-col overflow-hidden rounded-3xl border p-6 shadow-lg transition duration-300 hover:-translate-y-1 sm:p-7"
        style={{
          backgroundColor: COLORS.black,
          color: COLORS.ivory,
          borderColor: COLORS.clay,
        }}
      >
        {/* Popular badge */}
        <div
          className="absolute right-5 top-5 rounded-full px-3 py-1 text-[9px] font-black uppercase tracking-wider"
          style={{
            backgroundColor: COLORS.clay,
            color: COLORS.black,
          }}
        >
          Most Popular
        </div>

        <span
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Signature
        </span>

        <div className="mt-5 flex items-end gap-1">
          <span className="text-4xl font-black tracking-tight">
            $299
          </span>

          <span className="mb-1 text-xs opacity-40">
            / month
          </span>
        </div>

        <p className="mt-4 text-xs leading-relaxed opacity-55 sm:text-sm">
          Complete landscape care for homeowners who want
          everything handled without the hassle.
        </p>

        <div
          className="my-6 h-px"
          style={{
            backgroundColor: "rgba(249,248,246,.10)",
          }}
        />

        <div className="flex-1 space-y-3">
          {[
            "Everything in Essential",
            "Landscape maintenance",
            "Garden & bed care",
            "Detailed property cleanup",
            "Priority scheduling",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-xs"
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                style={{
                  backgroundColor: "rgba(196,132,91,.20)",
                  color: COLORS.clay,
                }}
              >
                ✓
              </span>

              <span className="opacity-70">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-wide transition hover:opacity-90"
          style={{
            backgroundColor: COLORS.clay,
            color: COLORS.black,
          }}
        >
          Get Started

          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Custom */}
      <div
        className="group flex flex-col rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
        style={{
          backgroundColor: COLORS.ivory,
          borderColor: "rgba(23,22,21,.08)",
        }}
      >
        <span
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{ color: COLORS.clay }}
        >
          Custom
        </span>

        <div className="mt-5">
          <span className="text-4xl font-black tracking-tight">
            Let's talk
          </span>
        </div>

        <p className="mt-4 text-xs leading-relaxed opacity-55 sm:text-sm">
          For larger properties, unique landscapes, or projects
          that need a more tailored approach.
        </p>

        <div
          className="my-6 h-px"
          style={{
            backgroundColor: "rgba(23,22,21,.08)",
          }}
        />

        <div className="flex-1 space-y-3">
          {[
            "Custom landscape plan",
            "Property assessment",
            "Dedicated project planning",
            "Flexible scope",
            "Personalized service",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-xs"
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black"
                style={{
                  backgroundColor: "rgba(196,132,91,.14)",
                  color: COLORS.clay,
                }}
              >
                ✓
              </span>

              <span className="opacity-65">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-wide transition hover:opacity-80"
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.ivory,
          }}
        >
          Get a Quote

          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Bottom CTA */}
    <div
      className="mt-5 flex flex-col justify-between gap-4 rounded-2xl border p-5 sm:flex-row sm:items-center"
      style={{
        backgroundColor: COLORS.ivory,
        borderColor: "rgba(23,22,21,.08)",
      }}
    >
      <div>
        <p className="text-sm font-black">
          Not sure which plan is right for you?
        </p>

        <p className="mt-1 text-xs opacity-45">
          We'll take a look at your property and recommend the
          right option.
        </p>
      </div>

      <a
        href="#contact"
        className="group flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-black uppercase tracking-wide transition hover:opacity-80"
        style={{
          backgroundColor: COLORS.clay,
          color: COLORS.black,
        }}
      >
        Get a Free Estimate

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
</section>

      {/* FAQ */}

      <section
        id="faq"
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: COLORS.taupe }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-[.18em]">
              Questions
            </span>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Before we talk,
              <span className="block">here's what to know.</span>
            </h2>
          </div>

          <div className="mt-8 space-y-2">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;

              return (
                <div
                  key={question}
                  className="overflow-hidden rounded-2xl"
                  style={{
                    backgroundColor: COLORS.ivory,
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(open ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-sm font-black"
                  >
                    {question}

                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div
                      className="border-t px-5 pb-5 pt-4 text-xs leading-relaxed opacity-65 sm:text-sm"
                      style={{
                        borderColor: "rgba(23,22,21,.10)",
                      }}
                    >
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

      <section
  className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
  style={{
    backgroundColor: "#11100F",
    color: COLORS.ivory,
  }}
>
  {/* Subtle premium background glow */}
  <div
    className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(180, 126, 82, 0.10)",
    }}
  />

  <div
    className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full blur-3xl"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.04)",
    }}
  />

  <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div
      className="rounded-[2rem] border px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,.07), rgba(255,255,255,.025))",
        borderColor: "rgba(249,248,246,.12)",
        boxShadow: "0 30px 80px rgba(0,0,0,.28)",
      }}
    >
      <span
        className="text-[10px] font-black uppercase tracking-[.22em]"
        style={{ color: COLORS.clay }}
      >
        Start with clarity
      </span>

      <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        See what your business
        <span
          className="block"
          style={{ color: COLORS.clay }}
        >
          could do better.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-55 sm:text-base">
        Get a clear picture of what's working, what's not, and where
        your biggest opportunities are.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        {/* Free Audit */}
        <button
          type="button"
          onClick={() => scrollToRequest()}
          className="group flex items-center justify-center gap-2 rounded-full px-7 py-4 text-xs font-black uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          style={{
            backgroundColor: COLORS.clay,
            color: COLORS.black,
            boxShadow: "0 10px 30px rgba(180,126,82,.18)",
          }}
        >
          Get a Free Audit

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Book Call */}
        <button
          type="button"
          onClick={() => scrollToRequest()}
          className="group flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-xs font-black uppercase tracking-wide transition-all duration-300 hover:bg-white/10"
          style={{
            borderColor: "rgba(249,248,246,.20)",
            backgroundColor: "rgba(255,255,255,.035)",
          }}
        >
          Book a Call

          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[.14em] opacity-35">
        <span className="h-px w-8 bg-current" />
        No pressure · Just clarity
        <span className="h-px w-8 bg-current" />
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}

      <Footer />

      {/* CHAT */}

      <ChatWidget />
    </main>
  );
}