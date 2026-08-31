"use client";

import Link from "next/link";
import { useState } from "react";
import { generalWaLink } from "@/lib/property-data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/sell-property", label: "Sell Your Property" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-navy">
            <span className="font-serif text-xl font-bold text-gold">R</span>
          </div>
          <div className="font-serif text-[19px] font-bold text-navy">Reliable Properties</div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-semibold text-navy no-underline hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={generalWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-navy px-5 py-[11px] text-sm font-bold text-white no-underline lg:flex"
          >
            WhatsApp Us
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="cursor-pointer border-none bg-transparent p-1.5 lg:hidden"
          >
            <div className="my-[5px] h-0.5 w-6 bg-navy" />
            <div className="my-[5px] h-0.5 w-6 bg-navy" />
            <div className="my-[5px] h-0.5 w-6 bg-navy" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-3.5 border-t border-border px-6 pb-5 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-navy no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={generalWaLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-navy px-4 py-2.5 text-center font-bold text-white no-underline"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
