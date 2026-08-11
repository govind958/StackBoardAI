"use client";

import dynamic from "next/dynamic";
import {
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  Wrench,
  Layers,
  MessageSquare,
  Send,
  Bot,
  User,
  Camera,
  ThumbsUp,
  Users,
  Award,
  Building2,
  CheckCircle2,
  CircleHelp,
  Lock,
  Volume2,
  DoorOpen,
  GlassWater,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Map = dynamic(() => import("../components/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-72 rounded-2xl bg-[#43637E] flex flex-col items-center justify-center text-sm text-[#D9FFF4] gap-2">
      <MapPin className="w-8 h-8 text-[#65DCD5] animate-bounce" />
      <span className="font-bold">Loading service area...</span>
    </div>
  ),
});

const problems = [
  {
    title: "Door is hard to open",
    desc: "Heavy, sticking, or difficult to slide.",
    icon: DoorOpen,
    repair: "Usually worn rollers or track issues.",
  },
  {
    title: "Door makes noise",
    desc: "Grinding, scraping, or rattling.",
    icon: Volume2,
    repair: "Your rollers or track may need repair.",
  },
  {
    title: "Door won't lock",
    desc: "It closes but doesn't secure properly.",
    icon: Lock,
    repair: "We can check alignment and hardware.",
  },
  {
    title: "Glass is damaged",
    desc: "Cracked, foggy, or broken glass.",
    icon: GlassWater,
    repair: "We'll inspect the glass and recommend the fix.",
  },
];

const services = [
  {
    title: "Sliding Door Repair",
    desc: "Worn rollers, damaged tracks, alignment, latches, and hardware.",
    icon: Layers,
  },
  {
    title: "Window Glass",
    desc: "Cracked, foggy, broken, or energy-leaking residential glass.",
    icon: GlassWater,
  },
  {
    title: "Patio Doors",
    desc: "Sticking, noisy, hard-to-lock, or difficult-to-slide patio doors.",
    icon: DoorOpen,
  },
  {
    title: "Commercial Glass",
    desc: "Storefronts, office glass, entry doors, partitions, and repairs.",
    icon: Building2,
  },
];

const workGallery = [
  {
    title: "Sliding Door Track Repair",
    category: "Track Restoration",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Double-Pane Glass Replacement",
    category: "Window Glass",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Impact Patio Door Installation",
    category: "Impact Doors",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Commercial Storefront Repair",
    category: "Commercial Glass",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
  },
];

const reviews = [
  {
    name: "Robert M.",
    location: "Local Homeowner",
    text: "My patio door was stuck and felt like moving a brick wall. The Glassperts team arrived on time, replaced the worn rollers, and now it glides with one finger.",
  },
  {
    name: "Sarah L.",
    location: "Property Manager",
    text: "Honest, fast, and extremely professional. They gave me a clear upfront estimate with no hidden fees.",
  },
  {
    name: "David K.",
    location: "Residential Client",
    text: "Top-tier service. The technicians protected our floors and fixed our fogged window glass in under two hours.",
  },
];

const faqs = [
  {
    q: "Does my whole sliding door need to be replaced?",
    a: "Not necessarily. Heavy or noisy doors are often caused by worn rollers, damaged tracks, or alignment issues. We inspect the problem first and recommend the simplest appropriate repair.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Many residential roller replacements and track repairs can be completed on-site in about 1 to 2 hours, depending on the condition of the door.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes. The Glassperts team is presented as licensed, insured, background-checked, and trained in-house.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. We provide upfront, no-obligation estimates before repair work begins.",
  },
];

type ChatMessage = {
  id: number;
  sender: "bot" | "user";
  text: string;
  time: string;
};

const phone = "(866) 493-7545";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hi! What's happening with your door or window?",
      time: "Just now",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    problem: "",
    terms: false,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatOpen) {
      setUnreadBadge(false);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatOpen, messages]);

  const chooseProblem = (index: number) => {
    setSelectedProblem(index);
    setFormData((prev) => ({
      ...prev,
      problem: problems[index].title,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.terms) {
      alert("Please agree to receive service updates before submitting.");
      return;
    }

    alert(
      "Thanks! Your repair request has been received. Our team will contact you shortly."
    );
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text,
        time: now,
      },
    ]);

    setChatInput("");

    setTimeout(() => {
      const lower = text.toLowerCase();

      let response =
        `Thanks for reaching out! Call ${phone} for the fastest help, or use the free estimate form on this page.`;

      if (
        lower.includes("price") ||
        lower.includes("cost") ||
        lower.includes("quote") ||
        lower.includes("estimate")
      ) {
        response =
          "We provide free, no-obligation estimates. In many cases, repairing rollers or tracks costs much less than replacing an entire door.";
      } else if (
        lower.includes("urgent") ||
        lower.includes("emergency") ||
        lower.includes("broken")
      ) {
        response = `For urgent service, please call ${phone} so the team can check availability.`;
      } else if (
        lower.includes("stuck") ||
        lower.includes("heavy") ||
        lower.includes("noise")
      ) {
        response =
          "A stuck, heavy, or noisy sliding door is often caused by worn rollers or track problems. We can inspect it and tell you what needs fixing.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: response,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#321E48] font-sans text-[#D9FFF4] antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#321E48]/95 backdrop-blur border-b border-[#43637E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#65DCD5] text-[#321E48] flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-black text-white tracking-tight">
                  THE GLASSPERTS
                </span>
                <span className="block text-[10px] font-bold text-[#65DCD5] uppercase tracking-widest">
                  Door & Window Repair
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-7 text-sm font-bold">
              <a href="#problems" className="hover:text-[#65DCD5] transition-colors">
                What We Fix
              </a>
              <a href="#process" className="hover:text-[#65DCD5] transition-colors">
                How It Works
              </a>
              <a href="#work" className="hover:text-[#65DCD5] transition-colors">
                Our Work
              </a>
              <a href="#reviews" className="hover:text-[#65DCD5] transition-colors">
                Reviews
              </a>
              <a href="#faqs" className="hover:text-[#65DCD5] transition-colors">
                FAQ
              </a>
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:8664937545"
                className="hidden md:flex items-center gap-2 text-white font-black"
              >
                <Phone className="w-5 h-5 text-[#65DCD5]" />
                {phone}
              </a>
              <a
                href="#contact"
                className="bg-[#65DCD5] text-[#321E48] px-5 py-3 rounded-xl font-black text-sm uppercase flex items-center gap-2 hover:bg-white transition-all"
              >
                Get Free Estimate
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex sm:hidden items-center gap-2">
              <a
                href="tel:8664937545"
                className="w-11 h-11 rounded-xl bg-[#65DCD5] text-[#321E48] flex items-center justify-center"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="w-11 h-11 rounded-xl bg-[#43637E] text-white flex items-center justify-center"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#321E48] border-t border-[#43637E] px-5 py-5 space-y-3">
            {[
              ["What We Fix", "#problems"],
              ["How It Works", "#process"],
              ["Our Work", "#work"],
              ["Reviews", "#reviews"],
              ["FAQ", "#faqs"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-white font-black"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#65DCD5] text-[#321E48] py-4 rounded-xl font-black uppercase"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
     <section
  className="relative overflow-hidden border-b border-[#43637E] bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#321E48]/80" />

  {/* Subtle teal glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(101,220,213,0.18),transparent_35%)]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

      {/* HERO COPY */}
      <div className="lg:col-span-7">

        <div className="inline-flex items-center gap-2 bg-[#321E48]/80 backdrop-blur-sm border border-[#65DCD5]/20 text-[#65DCD5] px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wide mb-6">
          <ShieldCheck className="w-4 h-4" />
          Licensed & Insured Local Specialists
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[0.95]">
          Stuck Door?
          <span className="block text-[#65DCD5]">
            Let's Fix It.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
          Heavy, noisy, or hard-to-open doors don't always need
          replacement. We repair rollers, tracks, locks, and glass —
          often in a single visit.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Free Estimates",
            "Same-Day Options",
            "Licensed & Insured",
            "No Hidden Fees",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#321E48]/75 backdrop-blur-sm border border-white/10 rounded-xl p-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#65DCD5] mb-2" />

              <p className="text-xs font-black text-white uppercase leading-tight">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GUIDED FORM */}
      <div id="contact" className="lg:col-span-5">
        <div className="bg-[#43637E]/95 backdrop-blur-md rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/10">

          <div className="mb-6">
            <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
              Step 1 · Tell us what happened
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-2">
              What's wrong?
            </h2>

            <p className="text-sm text-[#D9FFF4] mt-1">
              Choose the option that sounds closest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const active = selectedProblem === index;

              return (
                <button
                  key={problem.title}
                  type="button"
                  onClick={() => chooseProblem(index)}
                  className={`text-left p-4 rounded-2xl border transition-all ${
                    active
                      ? "bg-[#65DCD5] text-[#321E48] border-[#65DCD5]"
                      : "bg-[#321E48]/90 text-white border-transparent hover:border-[#65DCD5]/50"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 mb-3 ${
                      active
                        ? "text-[#321E48]"
                        : "text-[#65DCD5]"
                    }`}
                  />

                  <p className="font-black text-sm">
                    {problem.title}
                  </p>

                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      active
                        ? "text-[#321E48]/80"
                        : "text-[#D9FFF4]/70"
                    }`}
                  >
                    {problem.desc}
                  </p>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedProblem(null);

              setFormData((prev) => ({
                ...prev,
                problem: "Not sure",
              }));

              document
                .getElementById("details-form")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className={`w-full mt-3 p-3 rounded-xl border border-dashed border-[#65DCD5]/40 text-sm font-black flex items-center justify-center gap-2 ${
              selectedProblem === null &&
              formData.problem === "Not sure"
                ? "bg-[#65DCD5] text-[#321E48]"
                : "text-white hover:bg-[#321E48]"
            }`}
          >
            <CircleHelp className="w-5 h-5" />
            I'm Not Sure — Help Me
          </button>

          {selectedProblem !== null && (
            <div className="mt-4 p-4 rounded-xl bg-[#321E48]/90">
              <p className="text-xs text-[#65DCD5] font-black uppercase">
                What this could mean
              </p>

              <p className="text-sm text-white font-bold mt-1">
                {problems[selectedProblem].repair}
              </p>
            </div>
          )}

          <a
            href="#details-form"
            className="mt-5 w-full h-14 rounded-xl bg-[#65DCD5] text-[#321E48] font-black uppercase flex items-center justify-center gap-2 hover:bg-white transition-all"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </a>

          <div className="mt-4 text-center">
            <span className="text-xs text-[#D9FFF4]/70">
              Prefer to talk?
            </span>{" "}

            <a
              href="tel:8664937545"
              className="text-[#65DCD5] font-black text-sm"
            >
              Call {phone}
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

        {/* TRUST STRIP */}
        <section className="bg-[#43637E] border-b border-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#65DCD5] text-[#65DCD5]" />
                  ))}
                </div>
                <span className="font-black text-white text-sm">4.9/5</span>
              </div>
              <div className="text-sm font-black text-white">
                1,000+ HOMES HELPED
              </div>
              <div className="text-sm font-black text-white">
                LICENSED & INSURED
              </div>
              <div className="text-sm font-black text-white">
                SAME-DAY OPTIONS
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM EXPLANATION */}
        <section id="problems" className="py-16 sm:py-20 bg-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                Before you replace it
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3 leading-tight">
                Your door may not need
                <span className="text-[#65DCD5]"> replacement.</span>
              </h2>
              <p className="text-[#D9FFF4] mt-4 text-lg leading-relaxed">
                A door that suddenly becomes heavy, noisy, or difficult to
                slide can often have a hardware or track problem. We inspect
                the issue first so you know what actually needs fixing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map((problem, index) => {
                const Icon = problem.icon;

                return (
                  <button
                    key={problem.title}
                    type="button"
                    onClick={() => {
                      chooseProblem(index);
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group text-left bg-[#43637E] rounded-2xl p-6 hover:-translate-y-1 transition-all border border-transparent hover:border-[#65DCD5]/30"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#65DCD5] text-[#321E48] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-[#D9FFF4] mt-2 leading-relaxed">
                      {problem.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-5 text-xs font-black text-[#65DCD5] uppercase">
                      Get help
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* DETAILS FORM */}
        <section id="details-form" className="py-16 bg-[#43637E] border-y border-[#321E48]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                  Step 2 · Your details
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3 leading-tight">
                  Let's get you
                  <span className="text-[#65DCD5]"> on the schedule.</span>
                </h2>
                <p className="text-[#D9FFF4] mt-5 leading-relaxed">
                  Tell us a little about the problem. We'll review your
                  request and contact you about availability and pricing.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Free, no-obligation estimate",
                    "Clear pricing before work starts",
                    "No pressure to replace what can be repaired",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#65DCD5]" />
                      <span className="font-bold text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-[#321E48] rounded-3xl p-6 sm:p-8 shadow-xl"
              >
                <div className="mb-5">
                  <p className="text-[#65DCD5] text-xs font-black uppercase">
                    Almost there
                  </p>
                  <h3 className="text-2xl font-black text-white uppercase mt-1">
                    Request My Free Estimate
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-black text-white uppercase mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full h-14 rounded-xl bg-[#43637E] px-4 text-white placeholder:text-[#D9FFF4]/50 outline-none border border-transparent focus:border-[#65DCD5] font-bold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-black text-white uppercase mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      className="w-full h-14 rounded-xl bg-[#43637E] px-4 text-white placeholder:text-[#D9FFF4]/50 outline-none border border-transparent focus:border-[#65DCD5] font-bold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="problem"
                      className="block text-sm font-black text-white uppercase mb-2"
                    >
                      What's Going On? *
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      required
                      rows={4}
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Example: My sliding door is very hard to open and makes a grinding noise."
                      className="w-full rounded-xl bg-[#43637E] p-4 text-white placeholder:text-[#D9FFF4]/50 outline-none resize-none border border-transparent focus:border-[#65DCD5] font-bold"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      name="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 accent-[#65DCD5]"
                    />
                    <span className="text-xs text-[#D9FFF4]/80 leading-relaxed">
                      I agree to receive service updates and estimates
                      regarding my repair request.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full h-16 rounded-xl bg-[#65DCD5] text-[#321E48] font-black text-lg uppercase flex items-center justify-center gap-2 hover:bg-white transition-all"
                  >
                    Get My Free Estimate
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <p className="text-center text-xs text-[#D9FFF4]/60">
                    No obligation. No pressure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-16 sm:py-20 bg-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                What we repair
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                One team. Multiple glass problems.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="bg-[#43637E] rounded-2xl p-6 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#65DCD5] text-[#321E48] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#D9FFF4] mt-3 leading-relaxed flex-1">
                      {service.desc}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-black text-[#65DCD5] uppercase mt-6"
                    >
                      Get Help
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="py-16 sm:py-20 bg-[#43637E] border-y border-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                Step 3 · What happens next
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                Getting it fixed is simple.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  title: "Tell Us What's Wrong",
                  text: "Call us or send a quick request. You don't need to know exactly what part is broken.",
                },
                {
                  n: "02",
                  title: "We Inspect It",
                  text: "A technician checks the rollers, track, glass, alignment, and hardware.",
                },
                {
                  n: "03",
                  title: "We Fix the Problem",
                  text: "You get clear pricing first. Approve the repair, and we get to work.",
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="bg-[#321E48] rounded-2xl p-7 relative overflow-hidden"
                >
                  <span className="absolute -right-2 -top-7 text-8xl font-black text-[#43637E]/40">
                    {step.n}
                  </span>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-[#65DCD5] text-[#321E48] flex items-center justify-center font-black text-lg mb-6">
                      {step.n}
                    </div>
                    <h3 className="text-xl font-black text-white uppercase">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#D9FFF4] mt-3 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="py-16 sm:py-20 bg-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
              <div>
                <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                  Real work
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                  See what we fix.
                </h2>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#65DCD5] text-[#321E48] px-5 py-3 rounded-xl font-black uppercase text-sm"
              >
                <Camera className="w-5 h-5" />
                Get Your Repair Started
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {workGallery.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl overflow-hidden bg-[#43637E]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-black text-[#65DCD5] uppercase">
                      {item.category}
                    </p>
                    <h3 className="text-sm font-black text-white mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-16 sm:py-20 bg-[#43637E] border-y border-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                Homeowners we've helped
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                Don't just take our word for it.
              </h2>
              <div className="inline-flex items-center gap-2 mt-5 bg-[#321E48] rounded-xl px-4 py-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-[#65DCD5] text-[#65DCD5]" />
                  ))}
                </div>
                <span className="font-black text-white">4.9 / 5.0</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-[#321E48] rounded-2xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-[#65DCD5] text-[#65DCD5]" />
                      ))}
                    </div>
                    <p className="text-[#D9FFF4] leading-relaxed font-medium">
                      "{review.text}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#43637E] flex items-center justify-between">
                    <div>
                      <p className="font-black text-white">{review.name}</p>
                      <p className="text-xs text-[#65DCD5] font-bold">
                        {review.location}
                      </p>
                    </div>
                    <ThumbsUp className="w-5 h-5 text-[#65DCD5]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT / TRUST */}
        <section className="py-16 sm:py-20 bg-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85"
                  alt="The Glassperts certified team"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              <div>
                <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                  Why homeowners choose us
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3 leading-tight">
                  Fix what's broken.
                  <span className="text-[#65DCD5]"> Don't oversell.</span>
                </h2>
                <p className="text-[#D9FFF4] mt-5 leading-relaxed">
                  The Glassperts focuses on practical door and window repairs
                  without pushy sales pressure. The goal is simple: diagnose
                  the actual problem and recommend the right solution.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-7">
                  <div className="bg-[#43637E] rounded-2xl p-5">
                    <Award className="w-8 h-8 text-[#65DCD5]" />
                    <p className="text-2xl font-black text-white mt-3">100%</p>
                    <p className="text-xs font-bold text-[#D9FFF4] uppercase">
                      Licensed & Insured
                    </p>
                  </div>
                  <div className="bg-[#43637E] rounded-2xl p-5">
                    <Users className="w-8 h-8 text-[#65DCD5]" />
                    <p className="text-2xl font-black text-white mt-3">1,000+</p>
                    <p className="text-xs font-bold text-[#D9FFF4] uppercase">
                      Local Homes Helped
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="service-area" className="py-16 sm:py-20 bg-[#43637E] border-y border-[#321E48]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2">
                <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                  Local service
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                  Is your home in our service area?
                </h2>
                <p className="text-[#D9FFF4] mt-5 leading-relaxed">
                  Our mobile repair vans are equipped for common door, window,
                  and glass repairs.
                </p>

                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 bg-[#321E48] rounded-xl p-4">
                    <MapPin className="w-5 h-5 text-[#65DCD5]" />
                    <span className="font-bold text-white">
                      Surrounding cities & suburbs
                    </span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#321E48] rounded-xl p-4">
                    <Clock className="w-5 h-5 text-[#65DCD5]" />
                    <span className="font-bold text-white">
                      Same-day appointments available
                    </span>
                  </div>
                </div>

                <a
                  href="tel:8664937545"
                  className="inline-flex items-center gap-2 mt-6 bg-[#65DCD5] text-[#321E48] px-6 py-4 rounded-xl font-black uppercase"
                >
                  <Phone className="w-5 h-5" />
                  Check Availability
                </a>
              </div>

              <div className="lg:col-span-3 bg-[#321E48] rounded-3xl p-4">
                <Map />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faqs" className="py-16 sm:py-20 bg-[#321E48]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#65DCD5] text-xs font-black uppercase tracking-widest">
                Questions?
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase mt-3">
                Before you call, here's what to know.
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const open = openFaq === index;

                return (
                  <div
                    key={faq.q}
                    className="bg-[#43637E] rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      className="w-full px-5 sm:px-6 py-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-black text-white">{faq.q}</span>
                      <span className="text-[#65DCD5] text-2xl">
                        {open ? "−" : "+"}
                      </span>
                    </button>

                    {open && (
                      <div className="px-5 sm:px-6 pb-6 text-sm text-[#D9FFF4] leading-relaxed border-t border-[#321E48] pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 sm:py-20 bg-[#65DCD5] text-[#321E48]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-black uppercase tracking-widest">
              Ready to get it fixed?
            </p>
            <h2 className="text-4xl sm:text-6xl font-black uppercase mt-3 leading-tight">
              Let's Get Your Door Gliding Again.
            </h2>
            <p className="mt-4 text-[#321E48]/80 font-medium max-w-2xl mx-auto">
              Tell us what's happening and we'll help you figure out the next
              step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-[#321E48] text-white px-7 py-4 rounded-xl font-black uppercase flex items-center justify-center gap-2 hover:bg-[#43637E] transition-all"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8664937545"
                className="w-full sm:w-auto bg-white text-[#321E48] px-7 py-4 rounded-xl font-black uppercase flex items-center justify-center gap-2 hover:bg-[#321E48] hover:text-white transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* CHAT */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="w-[calc(100vw-40px)] sm:w-[360px] h-[460px] bg-[#321E48] border border-[#65DCD5]/30 rounded-3xl shadow-2xl overflow-hidden mb-4 flex flex-col">
            <div className="p-4 bg-[#43637E] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#65DCD5] text-[#321E48] flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-white text-sm uppercase">
                    Glassperts Support
                  </p>
                  <p className="text-xs text-[#65DCD5] font-bold">
                    ● Ready to help
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="w-8 h-8 rounded-full bg-[#321E48] text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 max-w-[88%] ${
                    msg.sender === "user"
                      ? "ml-auto flex-row-reverse"
                      : "mr-auto"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.sender === "user"
                        ? "bg-[#65DCD5] text-[#321E48]"
                        : "bg-[#43637E] text-white"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                  </div>

                  <div>
                    <div
                      className={`p-3 rounded-2xl text-xs font-bold leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#65DCD5] text-[#321E48]"
                          : "bg-[#43637E] text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-[#D9FFF4]/50 mt-1 block">
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#43637E] flex gap-2"
            >
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about your repair..."
                className="flex-1 h-11 rounded-xl bg-[#321E48] px-3 text-sm text-white placeholder:text-[#D9FFF4]/50 outline-none border border-[#65DCD5]/20 focus:border-[#65DCD5]"
              />
              <button
                type="submit"
                className="w-11 h-11 rounded-xl bg-[#65DCD5] text-[#321E48] flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}

        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          className="relative w-16 h-16 rounded-full bg-[#65DCD5] text-[#321E48] shadow-2xl flex items-center justify-center hover:bg-white transition-all"
          aria-label="Open support chat"
        >
          {unreadBadge && !chatOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce" />
          )}
          {chatOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageSquare className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#321E48] border-t border-[#43637E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <p className="text-xl font-black text-white uppercase">
                The Glassperts
              </p>
              <p className="text-xs text-[#D9FFF4] mt-1">
                Licensed & Insured Door & Window Specialists
              </p>
            </div>
            <div className="text-center md:text-right">
              <a
                href="tel:8664937545"
                className="text-[#65DCD5] font-black text-sm"
              >
                {phone}
              </a>
              <p className="text-xs text-[#D9FFF4]/50 mt-1">
                © {new Date().getFullYear()} The Glassperts. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}