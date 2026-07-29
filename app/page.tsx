import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F5F7FA] font-sans dark:bg-[#0B0F19]">
      <Navbar />

      <main className="flex w-full max-w-7xl flex-1 flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF6B35]/10 blur-3xl dark:bg-[#FF6B35]/10" />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5 px-4 py-1.5 dark:border-[#FF6B35]/30 dark:bg-[#FF6B35]/10">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-sm font-medium text-[#FF6B35] dark:text-[#FF6B35]">Now serving all California counties</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
              Never Miss a{" "}
              <span className="relative">
                <span className="relative z-10 text-[#FF6B35]">Roofing Lead</span>
                <svg className="absolute -bottom-2 left-0 h-3 w-full text-[#FF6B35]/40" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{" "}
              in California Again
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              AI-powered lead automation built specifically for California roofing contractors.
              Capture, qualify, and convert leads from wildfire zones to coastal counties —
              while you focus on the job site.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#get-started"
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-base font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:bg-zinc-800 hover:shadow-xl dark:bg-[#FF6B35] dark:text-[#0B0F19] dark:shadow-[#FF6B35]/20 dark:hover:bg-[#F7931E]"
              >
                Start Free Trial
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/demo"
                className="flex h-14 items-center justify-center rounded-full border border-zinc-300 bg-white px-8 text-base font-semibold text-zinc-900 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Watch Demo
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-zinc-500 dark:text-zinc-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-zinc-200 bg-white px-6 py-12 dark:border-zinc-800 dark:bg-zinc-900/30">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "2,400+", label: "California Roofers" },
              { value: "48%", label: "Avg. Lead Increase" },
              { value: "< 2 min", label: "Response Time" },
              { value: "$3.2M", label: "Revenue Generated" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FF6B35]">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Everything you need to dominate California roofing
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From fire-season emergency repairs to solar-ready re-roofs, our automation handles
              the unique demands of the California market.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wildfire Zone Targeting",
                desc: "Automatically prioritize leads from high-risk fire zones and recent burn scar areas when demand spikes.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                ),
              },
              {
                title: "Instant Lead Response",
                desc: "AI replies to inquiries in under 60 seconds, 24/7. Never lose another lead to a competitor again.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Solar + Roofing Bundles",
                desc: "Identify homeowners ready for solar panel removal and re-installation during roof replacement.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: "HOA & Permit Intelligence",
                desc: "Auto-detect HOA restrictions and pull local permit requirements for every California municipality.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Multi-Language Support",
                desc: "Engage Spanish-speaking homeowners across California with native-language conversations.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                ),
              },
              {
                title: "Storm Damage Alerts",
                desc: "Get notified the moment hail, wind, or fire damage is reported in your service territories.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-[#0B0F19] dark:hover:shadow-zinc-900/20"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6B35]/10 text-[#FF6B35]">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full bg-white px-6 py-24 dark:bg-zinc-900/30 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-base font-semibold leading-7 text-[#FF6B35]">How It Works</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                From first click to signed contract
              </p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Capture",
                  desc: "Leads flow in from your website, Google Ads, Angi, and social media. Our system ingests them instantly — no more manual entry.",
                },
                {
                  step: "02",
                  title: "Qualify",
                  desc: "AI scores every lead based on roof age, property type, location, and urgency. Hot leads get flagged immediately for your team.",
                },
                {
                  step: "03",
                  title: "Convert",
                  desc: "Automated follow-ups via SMS, email, and voicemail keep prospects warm until they're ready for your inspection team.",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="text-6xl font-bold text-zinc-200 dark:text-zinc-800">{item.step}</div>
                  <h3 className="-mt-8 text-xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#0B0F19] px-8 py-16 text-center border border-zinc-800 sm:px-16">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#FF6B35]/20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#FF6B35]/20 blur-2xl" />

              <svg className="mx-auto h-10 w-10 text-[#FF6B35]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="mt-8 text-xl font-medium leading-9 text-white sm:text-2xl">
                "We went from chasing leads to having a full calendar. In the first month after wildfire season,
                StackBoardAI helped us book 47 inspections in Sonoma County alone. The automation pays for itself."
              </blockquote>

              <div className="mt-8">
                <div className="font-semibold text-white">Marcus Chen</div>
                <div className="mt-1 text-sm text-zinc-400">Owner, Golden State Roofing · San Diego, CA</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="w-full px-6 py-24 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#0B0F19] px-6 py-16 text-center shadow-2xl border border-zinc-800 sm:px-16 sm:py-20">
            <div className="absolute inset-0 -z-10">
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6B35]/20 via-transparent to-transparent" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to fill your pipeline?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Join 2,400+ California roofing contractors using automation to grow their business.
              Start your free 14-day trial today.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="flex h-14 items-center justify-center rounded-full bg-[#FF6B35] px-8 text-base font-semibold text-[#0B0F19] transition-all hover:bg-[#F7931E]"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="flex h-14 items-center justify-center rounded-full border border-zinc-600 bg-transparent px-8 text-base font-semibold text-white transition-all hover:bg-zinc-800"
              >
                Talk to Sales
              </a>
            </div>

            <p className="mt-6 text-sm text-zinc-400">
              Used by contractors in Los Angeles, Bay Area, San Diego, Sacramento, and Central Valley
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}