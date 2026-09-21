import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Custom software",
    body: "Web platforms and internal tools designed around how the business actually works — not a generic template.",
  },
  {
    title: "SaaS products",
    body: "End-to-end product work: architecture, design, launch, and the operations that keep a platform alive.",
  },
  {
    title: "Advisory",
    body: "Clear technical direction for founders and operators who need to ship without wasting a year on the wrong stack.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Luma Core studio"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#161513]/55" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 text-white">
          <p className="text-sm tracking-[0.2em] uppercase text-white/70">Luma Core LLC</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.12] italic sm:text-6xl">
            A software studio behind products people actually use.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            We design and ship platforms. Our flagship product is{" "}
            <a href="https://jobsboard.ai" className="underline underline-offset-4">
              JobsBoard.ai
            </a>
            , the job marketplace for Lebanon and the region.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://jobsboard.ai"
              target="_blank"
              rel="noreferrer"
              className="bg-white px-5 py-3 text-sm font-medium text-[#161513]"
            >
              Visit JobsBoard.ai
            </Link>
            <Link
              href="/contact-us"
              className="border border-white/70 px-5 py-3 text-sm font-medium text-white"
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-sm tracking-[0.18em] uppercase text-[#5f5a54]">Selected work</p>
        <h2
          className="mt-3 text-3xl sm:text-4xl"
        >
          Products we built and operate
        </h2>

        <article className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-[16/10] overflow-hidden border border-[#ddd6cc] bg-[#ddd6cc]">
            <Image
              src="/images/jobsboard.jpg"
              alt="JobsBoard.ai homepage"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-sm tracking-[0.16em] uppercase text-[#1c4a38]">Flagship product</p>
            <h3 className="mt-2 text-2xl">
              JobsBoard.ai
            </h3>
            <p className="mt-4 leading-relaxed text-[#5f5a54]">
              Jobs, companies, and NGO hiring in one place. Candidates search and apply.
              Employers post roles. Civil-society organisations keep a public profile and
              list jobs that belong on their page.
            </p>
            <Link
              href="https://jobsboard.ai"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block border-b border-[#161513] pb-1 text-sm font-medium"
            >
              jobsboard.ai
            </Link>
          </div>
        </article>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <article>
            <div className="relative aspect-[16/10] overflow-hidden border border-[#ddd6cc] bg-[#ddd6cc]">
              <Image
                src="/images/product.jpg"
                alt="Working on a laptop"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-xl">
              Imageni AI
            </h3>
            <p className="mt-2 text-[#5f5a54]">
              An AI studio for generating images — prompt to image, a personal
              library, and custom models. Live at imageniai.com.
            </p>
            <Link
              href="https://imageniai.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block border-b border-[#161513] pb-1 text-sm"
            >
              imageniai.com
            </Link>
          </article>
          <article>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#ddd6cc]">
              <Image
                src="/images/studio.jpg"
                alt="Team at work"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 text-xl">
              Custom platforms
            </h3>
            <p className="mt-2 text-[#5f5a54]">
              Private tools and client products — from invoicing systems to cloud
              workflows — built to the same standard as our public products.
            </p>
            <Link href="/contact-us" className="mt-4 inline-block border-b border-[#161513] pb-1 text-sm">
              Start a project
            </Link>
          </article>
        </div>
      </section>

      <section id="services" className="border-y border-[#ddd6cc] bg-white/50">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sm tracking-[0.18em] uppercase text-[#5f5a54]">What we do</p>
          <h2
            className="mt-3 max-w-2xl text-3xl sm:text-4xl"
          >
            Engineering, product, and the unglamorous work that makes software last.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="border-t border-[#ddd6cc] pt-6">
                <h3 className="text-lg font-medium">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-[#5f5a54]">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd6cc]">
          <Image src="/images/office.jpg" alt="Studio interior" fill className="object-cover" />
        </div>
        <div>
          <p className="text-sm tracking-[0.18em] uppercase text-[#5f5a54]">Studio</p>
          <h2 className="mt-3 text-3xl">
            Small team. Real products. San Francisco registered.
          </h2>
          <p className="mt-4 leading-relaxed text-[#5f5a54]">
            Luma Core LLC is the company behind JobsBoard.ai. We keep the studio
            small so the work stays close to the people using it — employers,
            job seekers, and organisations hiring in Lebanon.
          </p>
          <Link href="/about-us" className="mt-6 inline-block border-b border-[#161513] pb-1 text-sm">
            About the studio
          </Link>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
