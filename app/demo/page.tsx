"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ChatMessage {
  from: "ai" | "lead";
  text: string;
  time: string;
}

interface SimulatedMessage {
  from: "ai" | "lead";
  text: string;
  delay: number;
}

export default function DemoPage() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { from: "lead", text: "Hi, I need a roof inspection after last night's storm. Can someone come today?", time: "9:41 AM" },
  ]);
  const [chatStep, setChatStep] = useState(0);
  const [demoForm, setDemoForm] = useState({ name: "", email: "", phone: "", company: "", date: "" });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const videos = [
    { title: "Platform Overview", duration: "2:34", desc: "See the full StackBoardAI dashboard and workflow in under 3 minutes." },
    { title: "AI Lead Qualification", duration: "3:12", desc: "Watch the AI respond to inbound leads via SMS, voice, and web chat in real time." },
    { title: "Missed Call Text Back", duration: "2:08", desc: "Every missed call instantly becomes a booked appointment—no leads slip through." },
    { title: "5-Star Review Funnel", duration: "2:45", desc: "Automated reputation building that turns happy customers into public reviews." },
    { title: "Storm Campaigns", duration: "3:01", desc: "One-click outreach to homeowners in affected ZIP codes after hail or wildfire." },
  ];

  const tourSteps = [
    {
      title: "Unified Inbox",
      desc: "All leads—SMS, call, form, and email—land in one place. No more switching apps.",
      highlight: "inbox",
    },
    {
      title: "AI Qualification",
      desc: "The AI asks budget, timeline, and insurance status before you ever pick up the phone.",
      highlight: "ai",
    },
    {
      title: "Auto-Dispatch",
      desc: "Qualified appointments are routed to the right crew based on ZIP code and availability.",
      highlight: "dispatch",
    },
    {
      title: "Review Engine",
      desc: "After job completion, happy customers are nudged to leave Google reviews automatically.",
      highlight: "reviews",
    },
  ];

  const chatSimulation: SimulatedMessage[] = [
    { from: "ai", text: "Hi! I'm Sarah from Martinez Roofing. I can definitely help with storm damage. A few quick questions so I can prioritize your visit:", delay: 1200 },
    { from: "lead", text: "Sure, what do you need?", delay: 2800 },
    { from: "ai", text: "Are you the homeowner? And do you have insurance covering the damage?", delay: 4200 },
    { from: "lead", text: "Yes and yes. State Farm.", delay: 6000 },
    { from: "ai", text: "Perfect. I have a crew in your area this afternoon between 2-4 PM. Does that work?", delay: 7500 },
    { from: "lead", text: "2 PM is great. 1428 Oak Street.", delay: 9200 },
    { from: "ai", text: "You're all set! Mike will arrive at 2:00 PM. You'll get a confirmation text shortly. Reply STOP to opt out.", delay: 10800 },
  ];

  useEffect(() => {
    if (chatStep >= chatSimulation.length) return;
    const timer = setTimeout(() => {
      const simMsg = chatSimulation[chatStep];
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
      setChatMessages((prev) => [...prev, { from: simMsg.from, text: simMsg.text, time: timeStr }]);
      setChatStep((s) => s + 1);
    }, chatSimulation[chatStep].delay - (chatStep > 0 ? chatSimulation[chatStep - 1].delay : 0));
    return () => clearTimeout(timer);
  }, [chatStep]);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const resetChat = () => {
    setChatMessages([{ from: "lead", text: "Hi, I need a roof inspection after last night's storm. Can someone come today?", time: "9:41 AM" }]);
    setChatStep(0);
  };

  return (
    <>
      <Navbar />
      <main className="relative bg-white dark:bg-zinc-950">
        {/* Ambient background */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />

        {/* HERO — Video First */}
        <section className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                </span>
                Live Product Demo
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
                See StackBoardAI{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  In Action
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Watch how California contractors capture, qualify, and convert more leads—without hiring another office assistant.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={scrollToVideo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Overview
                </button>
                <a
                  href="/start-free-trial"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 hover:scale-105 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                >
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Main Video Stage */}
            <div ref={videoRef} className="relative mx-auto mt-16 max-w-5xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-xl dark:from-amber-500/20 dark:to-orange-500/10" />
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-900 shadow-2xl dark:border-zinc-800">
                {isPlaying ? (
                  <div className="flex h-full w-full items-center justify-center text-white">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                        <svg className="h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-zinc-300">Loading video player...</p>
                      <p className="mt-1 text-xs text-zinc-500">Replace this div with your &lt;iframe&gt; embed</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex h-full w-full items-center justify-center bg-zinc-900">
                    <div className="absolute inset-0 opacity-30">
                      <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-950" />
                    </div>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 text-zinc-900 shadow-lg shadow-amber-500/40 transition-all hover:scale-110 hover:bg-amber-400"
                    >
                      <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-lg font-bold text-white">{videos[activeVideo].title}</p>
                      <p className="text-sm text-zinc-400">{videos[activeVideo].duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Playlist */}
            <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveVideo(i); setIsPlaying(false); }}
                  className={`group flex items-start gap-4 rounded-xl border p-4 text-left transition-all ${
                    activeVideo === i
                      ? "border-amber-500/30 bg-amber-500/5 dark:border-amber-400/30 dark:bg-amber-400/5"
                      : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    activeVideo === i ? "bg-amber-500 text-zinc-900" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}>
                    <svg className="h-5 w-5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${activeVideo === i ? "text-amber-700 dark:text-amber-400" : "text-zinc-900 dark:text-white"}`}>
                      {video.title}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{video.duration}</p>
                  </div>
                </button>
              ))}
              <div className="flex items-center justify-center rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">More videos coming weekly</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE PRODUCT TOUR */}
        <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Interactive Tour
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Experience the workflow
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Click through the four stages of how StackBoardAI handles a typical storm-lead from first contact to booked review.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5">
              {/* Tour Navigation */}
              <div className="lg:col-span-2">
                <div className="space-y-3">
                  {tourSteps.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => setTourStep(i)}
                      className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                        tourStep === i
                          ? "border-amber-500/30 bg-white shadow-md dark:border-amber-400/30 dark:bg-zinc-900"
                          : "border-transparent bg-white/50 hover:bg-white dark:bg-zinc-900/30 dark:hover:bg-zinc-900"
                      }`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                        tourStep === i ? "bg-amber-500 text-zinc-900" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                      }`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${tourStep === i ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}>
                          {step.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tour Visual */}
              <div className="lg:col-span-3">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">StackBoardAI Dashboard — {tourSteps[tourStep].title}</span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    {tourStep === 0 && (
                      <div className="space-y-3">
                        {[
                          { name: "Sarah Jenkins", source: "Website Form", time: "2 min ago", status: "New", tag: "Storm Damage" },
                          { name: "Mike Torres", source: "Missed Call", time: "5 min ago", status: "AI Chat", tag: "Insurance" },
                          { name: "Oak Street Roofing", source: "Google Ads", time: "12 min ago", status: "Qualified", tag: "Booked" },
                          { name: "Lisa Chen", source: "SMS", time: "18 min ago", status: "New", tag: "Estimate" },
                        ].map((lead, i) => (
                          <div key={i} className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-700 dark:text-amber-400">
                                {lead.name.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-zinc-900 dark:text-white">{lead.name}</p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400">{lead.source} · {lead.time}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">{lead.tag}</span>
                              <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                                lead.status === "Qualified" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                              }`}>{lead.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {tourStep === 1 && (
                      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white">AI Qualification Complete</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Lead scored 92/100 — High Intent</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {[
                            { q: "Homeowner?", a: "Yes", icon: "✓" },
                            { q: "Insurance?", a: "State Farm — Policy #SF-8842", icon: "✓" },
                            { q: "Timeline?", a: "Within 48 hours", icon: "✓" },
                            { q: "Budget?", a: "$15K–$25K range", icon: "✓" },
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between rounded-lg bg-white px-4 py-3 dark:bg-zinc-900">
                              <span className="text-sm text-zinc-600 dark:text-zinc-400">{item.q}</span>
                              <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                                <span className="text-emerald-500">{item.icon}</span> {item.a}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {tourStep === 2 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-zinc-900">C1</div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-zinc-900 dark:text-white">Crew 1 — Martinez & Son</p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">Available · 2.4 mi from lead · 4.9★</p>
                          </div>
                          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">Auto-Assigned</span>
                        </div>
                        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            Route Optimized
                          </div>
                          <div className="mt-3 h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
                            <div className="h-2 w-3/4 rounded-full bg-amber-500" />
                          </div>
                          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Estimated arrival: 1:42 PM · 12 min drive</p>
                        </div>
                      </div>
                    )}
                    {tourStep === 3 && (
                      <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                          <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                          </svg>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-zinc-900 dark:text-white">Review Request Sent</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          24 hours after job completion, Sarah Jenkins received a personalized SMS. She left a 5-star Google review 8 minutes later.
                        </p>
                        <div className="mt-6 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          New 5-Star Review
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{tourSteps[tourStep].desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE AI CHAT SIMULATION */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Real-Time AI Conversation
                </h2>
                <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  Your best office assistant, never sleeps
                </p>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  This is exactly how StackBoardAI handles an inbound SMS lead at 9:41 AM while you're on a roof. The AI qualifies, schedules, and confirms—automatically.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Responds in under 5 seconds, 24/7",
                    "Qualifies budget, insurance, and timeline",
                    "Books directly into your calendar",
                    "Sends crew notifications instantly",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                        <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={resetChat}
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  Replay Simulation
                </button>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-xl dark:from-amber-500/20 dark:to-orange-500/10" />
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 font-bold text-zinc-900">S</div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">StackBoardAI Assistant</p>
                      <p className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Online — Responding instantly
                      </p>
                    </div>
                  </div>
                  <div className="h-80 space-y-4 overflow-y-auto p-5">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                          msg.from === "ai"
                            ? "rounded-tl-none bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
                            : "rounded-tr-none bg-amber-500 text-zinc-900"
                        }`}>
                          <p>{msg.text}</p>
                          <p className={`mt-1 text-right text-[10px] ${msg.from === "ai" ? "text-zinc-500 dark:text-zinc-400" : "text-amber-800/70"}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    {chatStep < chatSimulation.length && (
                      <div className="flex justify-start">
                        <div className="flex gap-1 rounded-full bg-zinc-100 px-3 py-2 dark:bg-zinc-800">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500" style={{ animationDelay: "0ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500" style={{ animationDelay: "150ms" }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 dark:bg-zinc-500" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 dark:border-zinc-700 dark:bg-zinc-950">
                      <span className="text-sm text-zinc-400">Type a message...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURE BREAKDOWN WITH VIDEO CARDS */}
        <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Feature Deep Dives
              </h2>
              <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                Built for California contractors
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Missed Call Text Back",
                  desc: "60% of leads call after hours. We text them back instantly, book the appointment, and notify you in the morning.",
                  stat: "60%",
                  statLabel: "After-hours leads recovered",
                },
                {
                  title: "AI Voice Assistant",
                  desc: "Human-sounding AI answers your business line, qualifies the caller, and books directly into JobNimbus or AccuLynx.",
                  stat: "24/7",
                  statLabel: "Answer rate",
                },
                {
                  title: "Storm Campaigns",
                  desc: "Upload a hail map or wildfire perimeter. We auto-SMS every homeowner in the zone with your inspection offer.",
                  stat: "3x",
                  statLabel: "ROI on storm outreach",
                },
                {
                  title: "Review Funnel",
                  desc: "Happy customers get the review link. Unhappy ones get routed to private feedback before they hit Google.",
                  stat: "4.9★",
                  statLabel: "Average client rating",
                },
                {
                  title: "CSLB Compliance",
                  desc: "Every automation follows California State License Board and TCPA rules. Built-in opt-out and consent tracking.",
                  stat: "100%",
                  statLabel: "Compliant messaging",
                },
                {
                  title: "Crew Dispatch",
                  desc: "Auto-route qualified appointments to available crews by ZIP, skill, and calendar. No more whiteboard scheduling.",
                  stat: "48h",
                  statLabel: "Avg. setup to first lead",
                },
              ].map((feature, i) => (
                <div key={i} className="group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:shadow-zinc-900/50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-400">
                      {feature.stat}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">{feature.statLabel}</p>
                  <div className="mt-6 aspect-video rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                    <div className="text-center">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-zinc-900 shadow-sm">
                        <svg className="h-4 w-4 text-zinc-500 dark:text-zinc-400 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Video placeholder</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK A LIVE DEMO FORM */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div>
                <h2 className="text-base font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Personalized Walkthrough
                </h2>
                <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                  Want a 1-on-1 demo?
                </p>
                <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  Book a 20-minute screen share with a California specialist. We'll show your exact use case—whether you run 2 crews or 20.
                </p>

                <div className="mt-10 space-y-6">
                  {[
                    { title: "Live Screen Share", desc: "See the dashboard on a real contractor account" },
                    { title: "Q&A Included", desc: "Ask about integrations, pricing, and setup timeline" },
                    { title: "No Pressure", desc: "If it is not a fit, we will tell you honestly" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                        <span className="text-sm font-bold text-amber-700 dark:text-amber-400">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</p>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 blur-xl dark:from-amber-500/20 dark:to-orange-500/10" />
                <div className="relative rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900/80 sm:p-10">
                  {!demoSubmitted ? (
                    <>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Book Your Demo
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        Pick a time that works. We will send a Zoom link within 5 minutes.
                      </p>
                      <form onSubmit={handleDemoSubmit} className="mt-8 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              required
                              type="text"
                              value={demoForm.name}
                              onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                              placeholder="John Martinez"
                              className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                              Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                              required
                              type="tel"
                              value={demoForm.phone}
                              onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                              placeholder="(555) 000-0000"
                              className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                            Work Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            type="email"
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                            placeholder="john@roofingco.com"
                            className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                          />
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                              Company
                            </label>
                            <input
                              type="text"
                              value={demoForm.company}
                              onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                              placeholder="Martinez Roofing Inc."
                              className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-500 dark:focus:bg-zinc-900"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                              Preferred Date
                            </label>
                            <input
                              type="date"
                              value={demoForm.date}
                              onChange={(e) => setDemoForm({ ...demoForm, date: e.target.value })}
                              className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:bg-zinc-900"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-zinc-900 py-4 text-sm font-bold text-white shadow-lg shadow-zinc-900/20 transition-all duration-300 hover:bg-zinc-800 hover:shadow-zinc-900/30 hover:scale-[1.02] active:scale-[0.98] dark:bg-amber-500 dark:text-zinc-950 dark:shadow-amber-500/20 dark:hover:bg-amber-400"
                        >
                          <span className="relative z-10">Book My Demo</span>
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        </button>
                        <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
                          Prefer to call?{" "}
                          <a href="tel:+15551234567" className="font-semibold text-amber-600 hover:underline dark:text-amber-400">
                            (555) 123-4567
                          </a>
                        </p>
                      </form>
                    </>
                  ) : (
                    <div className="py-10 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                        <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">Demo Requested</h3>
                      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                        Check your inbox—we have sent you a calendar link and a short questionnaire so we can tailor the demo to your business.
                      </p>
                      <button
                        onClick={() => setDemoSubmitted(false)}
                        className="mt-6 text-sm font-semibold text-amber-600 hover:underline dark:text-amber-400"
                      >
                        Book another demo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL STRIP */}
        <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  quote: "I was skeptical about AI, but after the demo I saw it book a real lead while we were still on the Zoom call. Signed up that day.",
                  name: "David Park",
                  company: "Park Roofing — San Diego, CA",
                  stars: 5,
                },
                {
                  quote: "The demo was not a sales pitch. They actually rebuilt my homepage live in 10 minutes to show what the website would look like.",
                  name: "Carlos Mendez",
                  company: "Mendez Exteriors — Bay Area, CA",
                  stars: 5,
                },
                {
                  quote: "Best 20 minutes I have spent this year. I understood exactly how the missed-call text back would work with my existing phone line.",
                  name: "Amanda Liu",
                  company: "Liu Construction — Sacramento, CA",
                  stars: 5,
                },
              ].map((t, i) => (
                <div key={i} className="relative rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <svg key={s} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-sm font-bold text-amber-700 dark:text-amber-400">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-8 py-16 text-center dark:from-zinc-800 dark:to-zinc-900 sm:px-16 sm:py-20">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to see it on your own leads?
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-zinc-400">
                  Start your 30-day free trial or book a personalized demo. No credit card. No setup fee. Live in 48 hours.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/start-free-trial"
                    className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:scale-105 active:scale-95"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-700 active:scale-95"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}