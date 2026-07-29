"use client";

import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function FeaturesPage() {
  const bentoFeatures = [
    {
      title: "Wildfire Intelligence",
      description:
        "Real-time wildfire perimeter mapping synced with property databases. Instantly identify homes in burn zones and auto-enroll them in priority outreach campaigns.",
      icon: (
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.5 6.5 0 0112 7.5a6.5 6.5 0 013.262 1.714z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7.5V21" />
        </svg>
      ),
      span: "md:col-span-2 md:row-span-2",
      gradient: "from-orange-500/10 to-amber-500/5",
    },
    {
      title: "Instant SMS Responder",
      description: "AI replies to inbound leads in under 60 seconds, 24/7. Qualifies budget, timeline, and roofing type before you ever pick up the phone.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-amber-500/10 to-transparent",
    },
    {
      title: "HOA & Permit Checks",
      description: "Automatic HOA covenant and municipal permit requirement lookups for every lead address.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75m0-3H12" />
        </svg>
      ),
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-zinc-500/10 to-transparent",
    },
    {
      title: "Solar + Roof Bundles",
      description: "Identify solar-ready roofs and auto-generate bundled estimates. Upsell photovoltaic overlays with zero extra data entry.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
      span: "md:col-span-1 md:row-span-2",
      gradient: "from-amber-500/10 to-orange-500/5",
    },
    {
      title: "Lead Scoring AI",
      description: "Every lead is ranked by conversion probability using 47+ data signals — credit tier, property age, storm damage history, and behavioral intent.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-emerald-500/10 to-transparent",
    },
    {
      title: "Dispatch Automation",
      description: "Auto-assign qualified leads to your crews by ZIP code, availability, and specialty. SMS + calendar invite sent in one click.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      span: "md:col-span-1 md:row-span-1",
      gradient: "from-blue-500/10 to-transparent",
    },
  ];

  const deepDives = [
    {
      title: "5-Star Magic Review Funnel",
      subtitle: "Reputation that sells for you",
      description:
        "Automatically request reviews from happy customers via SMS at the perfect post-job moment. Negative feedback is captured privately; 5-star reviews are routed straight to Google, Yelp, and BBB.",
      bullets: [
        "Smart timing: Requests sent 24h after job completion",
        "Review gating: Detractors handled internally first",
        "One-tap review links: No login required for customers",
        "Dashboard tracking: Monitor average rating across platforms",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Missed Call Text Back",
      subtitle: "Never lose a lead to voicemail again",
      description:
        "When you miss a call, our AI instantly texts the caller with a personalized response, qualifies their needs, and books them into your calendar — all before you finish the job you're on.",
      bullets: [
        "Sub-5-second response time",
        "Customizable templates per service type",
        "Auto-escalation to live agent if AI stalls",
        "Full conversation transcript logged to CRM",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      title: "One-Click Marketing Campaigns",
      subtitle: "Launch like a pro, no agency needed",
      description:
        "Pre-built campaign templates for hail season, wildfire recovery, solar tax credit deadlines, and more. Launch across SMS, email, and Google Local Ads in a single click.",
      bullets: [
        "Seasonal templates updated quarterly",
        "Auto-segmentation by ZIP and roof age",
        "A/B tested copy written by roofing marketers",
        "Real-time ROI dashboard per campaign",
      ],
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-zinc-950">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

      {/* Hero */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              Platform Features
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                dominate your market
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              One platform. Zero duct tape. From the moment a lead calls to the moment you close the job, StackBoardAI automates the busywork so you can focus on the roof.
            </p>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
              {bentoFeatures.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-amber-500/20 ${feature.span}`}
                >
                  <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} blur-2xl transition-all duration-500 group-hover:scale-150`} />
                  <div>
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-all duration-300 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-amber-400">
                      {feature.icon}
                    </div>
                    <h3 className="relative mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative mt-6 flex items-center gap-1.5 text-sm font-semibold text-amber-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-amber-400">
                    Learn more
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Deep Dive Sections */}
      <div className="border-y border-zinc-200 bg-zinc-50/50 py-24 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Under the Hood
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Features that move the needle
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-24 sm:mt-20 sm:space-y-32">
            {deepDives.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100}>
                <div className={`flex flex-col gap-12 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Visual Placeholder */}
                  <div className="relative flex-1">
                    <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${i % 2 === 0 ? "from-amber-500/10 to-orange-500/5" : "from-orange-500/10 to-amber-500/5"} blur-xl dark:opacity-50`} />
                    <div className="relative flex aspect-[4/3] items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                      <div className={`flex h-24 w-24 items-center justify-center rounded-3xl ${feature.bg} ${feature.color}`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 rounded-full ${feature.bg} px-3 py-1 text-xs font-semibold ${feature.color}`}>
                      {feature.subtitle}
                    </div>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                    <ul className="mt-8 space-y-4">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 dark:bg-amber-400/10">
                            <svg className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Strip */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-8 py-16 dark:from-zinc-800 dark:to-zinc-900 sm:px-16 sm:py-20">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative grid gap-12 sm:grid-cols-3">
                {[
                  { label: "On-Site SEO", desc: "Technical optimization, schema markup, and local keyword targeting built into every page." },
                  { label: "Automated Follow Up", desc: "Multi-channel drip campaigns via SMS, email, and voicemail drops until they book." },
                  { label: "GMB Optimization", desc: "Posts, Q&A, photos, and review responses handled automatically every week." },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <h4 className="text-lg font-semibold text-white">{item.label}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* CTA */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn>
            <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-16 text-center shadow-2xl dark:from-zinc-800 dark:to-zinc-900 sm:px-16 sm:py-24">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
              <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                See it in action
              </h2>
              <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Get a 15-minute walkthrough tailored to your roofing business. No sales pressure, no generic demo.
              </p>
              <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#demo"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-105 active:scale-95"
                >
                  Schedule a Demo
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-zinc-700 hover:border-zinc-500"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}