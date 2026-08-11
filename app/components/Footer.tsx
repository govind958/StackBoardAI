"use client";

import {
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Link2,
  Mail,
  Sparkles,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

const serviceLinks = [
  {
    label: "AI Automation",
    href: "#services",
  },
  {
    label: "Sales Systems",
    href: "#services",
  },
  {
    label: "Marketing Automation",
    href: "#services",
  },
  {
    label: "Business Operations",
    href: "#services",
  },
];

const companyLinks = [
  {
    label: "How It Works",
    href: "#process",
  },
  {
    label: "Our Work",
    href: "#work",
  },
  {
    label: "Our Team",
    href: "#team",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: Link2,
  },
  {
    label: "X",
    href: "#",
    icon: Sparkles,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToRequest = () => {
    document.getElementById("request")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: COLORS.black,
        color: COLORS.ivory,
        borderColor: "rgba(249, 248, 246, 0.12)",
      }}
    >
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div>
            <a
              href="#"
              className="group inline-flex items-center gap-3"
            >
              {/* STACKBOARDAI LOGO MARK */}
              <div
                className="flex h-11 w-11 items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  {/* Top module */}
                  <path
                    d="M18 4L29 10L18 16L7 10L18 4Z"
                    fill="#F9F8F6"
                    className="transition-transform duration-500 group-hover:-translate-y-[1px]"
                  />

                  {/* Middle module */}
                  <path
                    d="M7 13L18 19L29 13V19L18 25L7 19V13Z"
                    fill="#F9F8F6"
                    opacity="0.78"
                    className="transition-transform duration-500 group-hover:translate-x-[1px]"
                  />

                  {/* Bottom module */}
                  <path
                    d="M7 22L18 28L29 22V28L18 34L7 28V22Z"
                    fill="#C9B59C"
                    className="transition-transform duration-500 group-hover:translate-y-[1px]"
                  />
                </svg>
              </div>

              {/* WORDMARK */}
              <span className="text-xl font-black tracking-[-0.045em]">
                Stackboard
                <span
                  className="ml-[2px]"
                  style={{
                    color: COLORS.clay,
                  }}
                >
                  AI
                </span>
              </span>
            </a>

            <p
              className="mt-6 max-w-sm text-sm leading-7"
              style={{
                color: "rgba(249, 248, 246, 0.62)",
              }}
            >
              AI-powered systems and automation that help
              businesses operate faster, sell better, and
              scale without unnecessary complexity.
            </p>

            {/* SOCIAL */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:bg-white hover:text-black"
                    style={{
                      borderColor:
                        "rgba(249, 248, 246, 0.18)",
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* =========================
              SERVICES
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em]">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    style={{
                      color: "rgba(249, 248, 246, 0.68)",
                    }}
                  >
                    {link.label}

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              COMPANY
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em]">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
                    style={{
                      color: "rgba(249, 248, 246, 0.68)",
                    }}
                  >
                    {link.label}

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT / CTA
          ========================== */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em]">
              Let's Talk
            </h3>

            <p
              className="mt-5 text-sm leading-7"
              style={{
                color: "rgba(249, 248, 246, 0.68)",
              }}
            >
              Have a process you want to automate?
              Let's talk about what StackboardAI can
              build for your business.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:hello@stackboardai.com"
              className="mt-5 flex items-center gap-3 text-sm font-semibold transition-opacity hover:opacity-60"
              style={{
                color: "rgba(249, 248, 246, 0.82)",
              }}
            >
              <Mail
                className="h-4 w-4 shrink-0"
                style={{
                  color: COLORS.clay,
                }}
              />

              hello@stackboardai.com
            </a>

            {/* CTA */}
            <button
              type="button"
              onClick={scrollToRequest}
              className="mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: COLORS.ivory,
                color: COLORS.black,
              }}
            >
              Book a Call

              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div
        className="border-t"
        style={{
          borderColor:
            "rgba(249, 248, 246, 0.12)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          {/* COPYRIGHT */}
          <p
            className="text-xs"
            style={{
              color: "rgba(249, 248, 246, 0.45)",
            }}
          >
            © {new Date().getFullYear()} StackboardAI.
            All rights reserved.
          </p>

          {/* LEGAL / BACK TO TOP */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{
                color: "rgba(249, 248, 246, 0.45)",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs transition-opacity hover:opacity-70"
              style={{
                color: "rgba(249, 248, 246, 0.45)",
              }}
            >
              Terms
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs transition-opacity hover:opacity-70"
              style={{
                color: "rgba(249, 248, 246, 0.65)",
              }}
            >
              Back to top

              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}