import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Luma Core",
  description:
    "Luma Core LLC is a San Francisco software studio. We build JobsBoard.ai and custom products for operators who need software that holds up.",
};

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16">
        <p className="text-sm tracking-[0.18em] uppercase text-[#5f5a54]">About</p>
        <h1
          className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl"
        >
          We build software the way a product company should: quietly, and for the long term.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5f5a54]">
          Luma Core LLC is a software studio. JobsBoard.ai is the public face of that
          work — a job marketplace used by people and organisations in Lebanon.
        </p>
      </section>

      <section className="relative h-[52vh] min-h-[320px]">
        <Image
          src="/images/city.jpg"
          alt="City street"
          fill
          className="object-cover"
          priority
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">
            The studio
          </h2>
          <p className="mt-4 leading-relaxed text-[#5f5a54]">
            We started Luma Core to ship products we would use ourselves. That
            means fewer decks, fewer placeholder features, and more time on the
            parts that have to work: search, hiring flows, company pages, and
            the operations behind them.
          </p>
          <p className="mt-4 leading-relaxed text-[#5f5a54]">
            The company is registered in San Francisco. Day-to-day product work
            is centred on JobsBoard and client platforms.
          </p>
        </div>
        <div className="relative min-h-[280px] overflow-hidden bg-[#ddd6cc]">
          <Image src="/images/office.jpg" alt="Studio interior" fill className="object-cover" />
        </div>
      </section>

      <section className="border-y border-[#ddd6cc] bg-white/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="text-2xl">
            Products
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <article>
              <div className="relative aspect-[16/10] overflow-hidden border border-[#ddd6cc] bg-[#ddd6cc]">
                <Image
                  src="/images/jobsboard.jpg"
                  alt="JobsBoard.ai Netherlands homepage"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-5 text-xl">JobsBoard.ai</h3>
              <p className="mt-2 text-[#5f5a54]">
                Jobs, companies, and NGO profiles. Employers post roles. Seekers apply.
                Organisations keep hiring on their own page.
              </p>
              <Link
                href="https://jobsboard.ai/nl"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block border-b border-[#161513] pb-1 text-sm"
              >
                Open JobsBoard.ai
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="max-w-2xl text-lg leading-relaxed text-[#5f5a54]">
          If you want a product built to the same standard — or you hire through
          JobsBoard — write to us.
        </p>
        <Link
          href="/contact-us"
          className="mt-6 inline-block bg-[#161513] px-5 py-3 text-sm text-[#f4f1eb]"
        >
          Contact Luma Core
        </Link>
      </section>
    </main>
  );
}
