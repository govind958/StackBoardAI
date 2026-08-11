"use client";

import { useState } from "react";
import {
  MessageCircle,
  X,
  ArrowRight,
  Phone,
  Calendar,
  Leaf,
} from "lucide-react";

const COLORS = {
  ivory: "#F9F8F6",
  sand: "#EFE9E3",
  taupe: "#D9CFC7",
  clay: "#C9B59C",
  black: "#171615",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CHAT WINDOW */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-4
            z-[100]
            w-[calc(100vw-2rem)]
            max-w-[380px]
            overflow-hidden
            rounded-3xl
            border
            shadow-2xl
            sm:right-6
          "
          style={{
            backgroundColor: COLORS.ivory,
            borderColor: "rgba(23,22,21,.10)",
          }}
        >
          {/* HEADER */}
          <div
            className="p-5"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.ivory,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: COLORS.clay,
                    color: COLORS.black,
                  }}
                >
                  <Leaf className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-black">Field & Form</p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs opacity-60">
                      Usually replies quickly
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* CHAT CONTENT */}
          <div className="p-5">
            <div
              className="rounded-2xl p-4"
              style={{
                backgroundColor: COLORS.sand,
              }}
            >
              <p className="text-sm font-semibold leading-relaxed">
                Hey! 👋
              </p>

              <p className="mt-2 text-sm leading-relaxed opacity-70">
                Thinking about improving your yard? Tell us what you're
                working on and we'll point you in the right direction.
              </p>
            </div>

            {/* OPTIONS */}
            <div className="mt-4 space-y-2">
              <a
                href="#request"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl border p-4 transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: COLORS.taupe,
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-black">
                      Get a free estimate
                    </p>

                    <p className="mt-0.5 text-xs opacity-50">
                      Tell us about your project
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 opacity-40 transition group-hover:translate-x-1" />
              </a>

              <a
                href="tel:18005550199"
                className="group flex items-center justify-between rounded-xl border p-4 transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: COLORS.taupe,
                    }}
                  >
                    <Phone className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-black">
                      Talk to someone
                    </p>

                    <p className="mt-0.5 text-xs opacity-50">
                      (800) 555-0199
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 opacity-40 transition group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);

                  document
                    .getElementById("request")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="group flex w-full items-center justify-between rounded-xl border p-4 text-left transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(23,22,21,.10)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: COLORS.taupe,
                    }}
                  >
                    <Calendar className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-sm font-black">
                      Plan a consultation
                    </p>

                    <p className="mt-0.5 text-xs opacity-50">
                      We'll help you figure out what's next
                    </p>
                  </div>
                </div>

                <ArrowRight className="h-4 w-4 opacity-40 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="border-t px-5 py-3 text-center text-[10px] opacity-40"
            style={{
              borderColor: "rgba(23,22,21,.08)",
            }}
          >
            No pressure. Just helpful advice.
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="
          fixed
          bottom-5
          right-4
          z-[101]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          shadow-xl
          transition
          hover:scale-105
          active:scale-95
          sm:right-6
        "
        style={{
          backgroundColor: COLORS.black,
          color: COLORS.ivory,
        }}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}

        {/* NOTIFICATION DOT */}
        {!open && (
          <span
            className="
              absolute
              right-0
              top-0
              h-3.5
              w-3.5
              rounded-full
              border-2
            "
            style={{
              backgroundColor: COLORS.clay,
              borderColor: COLORS.ivory,
            }}
          />
        )}
      </button>
    </>
  );
}