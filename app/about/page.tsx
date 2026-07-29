"use client";

import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const values = [
    {
      title: "Contractor-First",
      description:
        "Built by people who understand roofing. Every feature is designed around the real workflow of California contractors, not Silicon Valley assumptions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "CSLB Compliant",
      description:
        "We obsess over compliance so you don't have to. Every automation follows California State License Board regulations and TCPA guidelines.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Speed to Lead",
      description:
        "The contractor who responds first wins the job. Our AI answers in under 60 seconds — 24/7 — so you never lose another lead to a competitor.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      description:
        "No setup fees, no hidden charges, no long-term contracts. One flat rate. If we don't deliver ROI in 30 days, you get your money back.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v.375c0 .621.504 1.125 1.125 1.125H20.25M2.25 18.75V9A2.25 2.25 0 014.5 6.75h15A2.25 2.25 0 0121.75 9v9.75m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
  ];

  const team = [
    { name: "Alex Rivera", role: "Founder & CEO", initials: "AR", color: "bg-amber-500" },
    { name: "Sarah Chen", role: "Head of Product", initials: "SC", color: "bg-orange-500" },
    { name: "Marcus Johnson", role: "Lead Engineer", initials: "MJ", color: "bg-zinc-600" },
    { name: "Diana Patel", role: "Customer Success", initials: "DP", color: "bg-amber-600" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-zinc-950">
      {/* Ambient background */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute bottom-40 -left-20 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
              </span>
              About StackBoardAI
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
              Built for the roofers who{" "}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                build California
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We are a team of operators, engineers, and marketers obsessed with one thing: 
              helping licensed California roofing contractors win more jobs with less effort.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="border-y border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 200, suffix: "+", label: "CA Contractors" },
              { value: 48, suffix: "h", label: "Avg. Setup Time" },
              { value: 98, suffix: "%", label: "Lead Response Rate" },
              { value: 4.9, suffix: "/5", label: "Customer Rating", isDecimal: true },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Why we started
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                After watching too many skilled roofing contractors lose leads to faster-responding competitors 
                and big-box home improvement stores, we knew something had to change.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                StackBoardAI was born from a simple belief: California roofers deserve the same AI-powered 
                automation that Fortune 500 companies use — but built specifically for their workflow, 
                their compliance requirements, and their customers.
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Today, we power the growth of over 200 contractors across Los Angeles, the Bay Area, 
                San Diego, and the Central Valley. And we are just getting started.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 blur-xl dark:from-amber-500/20 dark:to-orange-500/20" />
              <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 font-black text-zinc-950 shadow-lg shadow-amber-500/30">
                    S
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">StackBoardAI</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Est. 2023 • California</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Headquarters", value: "Los Angeles, CA" },
                    { label: "Focus", value: "California Roofing Contractors" },
                    { label: "Compliance", value: "CSLB & TCPA Ready" },
                    { label: "Support", value: "Mon–Sat, 6am–6pm PST" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between border-b border-zinc-100 pb-3 last:border-0 dark:border-zinc-800">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.label}</span>
                      <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="border-y border-zinc-200 bg-zinc-50/50 py-24 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Our Principles
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              How we operate
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-900/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-amber-500/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 transition-colors duration-300 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:text-amber-400">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              The Team
            </h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Meet the people behind the platform
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-amber-500/20"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full text-lg font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${member.color}`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-16 text-center shadow-2xl dark:from-zinc-800 dark:to-zinc-900 sm:px-16 sm:py-24">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to see what AI can do for your roofing business?
            </h2>
            <p className="relative mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Join 200+ California contractors already using StackBoardAI to qualify leads, automate follow-ups, and book more jobs.
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
        </div>
      </div>
    </section>
  );
}