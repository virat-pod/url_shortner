import TypeWriter from "@/components/typeWritter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 bg-purple-200">
      <section className="flex min-h-[85vh] flex-col lg:flex-row gap-12 lg:gap-0 w-full px-6 lg:px-16 items-center justify-around py-16">
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full w-fit">
            <span className="w-1.5 h-1.5 bg-purple-600 rounded-full animate-pulse" />
            Free & Open Source
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-oswald leading-tight text-zinc-900">
            The best{" "}
            <span className="underline underline-offset-4 decoration-purple-500">
              URL
            </span>{" "}
            Shortener <br className="hidden sm:block" /> in the market
          </h1>

          <p className="text-zinc-500 text-base leading-relaxed max-w-md">
            Made by ViratPod — who loves{" "}
            <TypeWriter
              words={["Open Source", "Innovation", "Linux & OSS"]}
              className="text-purple-600 font-medium"
            />
            . Inspired by the open source philosophy of Linus Torvalds.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer">
                Try now
              </button>
            </Link>
            <a href="https://github.com/virat-pod" target="_blank">
              <button className="bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-700 font-medium px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer">
                GitHub ↗
              </button>
            </a>
          </div>

          <div className="flex gap-8 pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-oswald text-zinc-900">
                10k+
              </span>
              <span className="text-xs text-zinc-400">Links shortened</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-oswald text-zinc-900">
                100%
              </span>
              <span className="text-xs text-zinc-400">Open source</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-oswald text-zinc-900">
                0ms
              </span>
              <span className="text-xs text-zinc-400">Redirect delay</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/vector_group.jpg"
            className="rounded-2xl shadow-lg shadow-purple-100"
            width={480}
            height={480}
            alt="vector group"
          />
        </div>
      </section>
      <section className="py-20 w-full px-6 lg:px-44 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-widest text-purple-600 uppercase">
            About
          </p>
          <h2 className="text-4xl font-extrabold font-oswald text-zinc-900 leading-tight">
            Built to make long links
            <br />
            disappear.
          </h2>
          <p className="text-zinc-500 text-base leading-relaxed max-w-lg mt-2">
            ViratPod URL Shortener is a fast, open-source tool to shorten,
            share, and track your links no bloat, no paywalls.
          </p>
        </div>

        <hr className="border-zinc-200" />

        <div>
          <p className="text-xs font-medium tracking-widest text-purple-600 uppercase mb-5">
            Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: "⚡",
                title: "Instant redirect",
                desc: "Zero delay on redirects. Your audience lands where they should — fast.",
              },
              {
                icon: "🔗",
                title: "Custom slugs",
                desc: "Pick your own short URL slug. Make links memorable and on-brand.",
              },
              {
                icon: "🛡️",
                title: "Open source",
                desc: "Fully transparent codebase. Inspect, fork, contribute — it's all yours.",
              },
              {
                icon: "📈",
                title: "Click analytics",
                desc: "Track how many times your link was clicked. Simple, no noise.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="w-8 h-8 bg-purple-50 border border-purple-100 rounded-lg flex items-center justify-center text-sm">
                  {f.icon}
                </div>
                <h3 className="text-sm font-medium text-zinc-900">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-zinc-200" />

        <div>
          <p className="text-xs font-medium tracking-widest text-purple-600 uppercase mb-5">
            Developer
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center font-oswald text-lg text-purple-600 shrink-0">
              VP
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-zinc-900">
                ViratPod
              </span>
              <span className="text-sm text-zinc-500">
                Self-taught developer. Loves open source & Linux.
              </span>
              <a
                href="https://github.com/virat-pod"
                target="_blank"
                className="text-xs text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full w-fit mt-1 hover:bg-purple-100 transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        <hr className="border-zinc-200" />

        <div>
          <p className="text-xs font-medium tracking-widest text-purple-600 uppercase mb-4">
            Built with
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "MongoDB", "Tailwind CSS", "Vercel", "React"].map(
              (t) => (
                <span
                  key={t}
                  className="text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
