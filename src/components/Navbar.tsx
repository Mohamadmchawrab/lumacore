"use client";

import Link from "next/link";
import { useState } from "react";

function NavItem({
  href,
  label,
  external,
  onClick,
}: {
  href: string
  label: string
  external?: boolean
  onClick?: () => void
}) {
  const className = "transition-colors hover:text-[#161513]"
  if (external || href.includes("#")) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {label}
    </Link>
  )
}

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "https://jobsboard.ai", label: "JobsBoard.ai", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd6cc] bg-[#f4f1eb]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="font-display text-xl italic tracking-tight"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Luma Core
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[#5f5a54] md:flex">
          {links.map((link) => (
            <NavItem key={link.href} href={link.href} label={link.label} external={link.external} />
          ))}
          <Link
            href="/contact-us"
            className="border border-[#161513] px-4 py-2 text-[#161513] transition-colors hover:bg-[#161513] hover:text-[#f4f1eb]"
          >
            Contact
          </Link>
        </nav>
        <button
          type="button"
          className="text-sm tracking-wide md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#ddd6cc] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                label={link.label}
                external={link.external}
                onClick={() => setOpen(false)}
              />
            ))}
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
