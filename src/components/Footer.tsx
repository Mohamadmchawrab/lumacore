import Link from "next/link";

const columns = [
  {
    title: "Products",
    links: [
      { href: "https://jobsboard.ai", label: "JobsBoard.ai", external: true },
      { href: "https://imageniai.com", label: "Imageni AI", external: true },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about-us", label: "About", external: false },
      { href: "/contact-us", label: "Contact", external: false },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Custom software", external: false },
      { href: "/#services", label: "SaaS platforms", external: false },
      { href: "/#services", label: "Advisory", external: false },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#ddd6cc] bg-[#161513] text-[#f4f1eb]">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p
              className="text-2xl italic"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Luma Core
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#cfc8bd]">
              A software studio in San Francisco. We build products including
              JobsBoard.ai.
            </p>
            <a
              href="mailto:info@lumacore.com"
              className="mt-6 inline-block text-sm underline decoration-[#cfc8bd] underline-offset-4 hover:text-white"
            >
              info@lumacore.com
            </a>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-semibold tracking-wide">{column.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#cfc8bd]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external || link.href.includes("#") ? (
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                        className="hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#9d978d] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Luma Core LLC. All rights reserved.</p>
          <p>2261 Market Street STE 85170, San Francisco, CA 94114</p>
        </div>
      </div>
    </footer>
  );
}
