"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-sand/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/logo/cvia-logo.png"
              alt="CVIA Logo"
              width={56}
              height={56}
              priority
            />
            <div className="hidden sm:block">
              <p className="font-serif text-lg text-charcoal leading-tight">Conejo Valley</p>
              <p className="text-xs text-warm-gray">Interfaith Association</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-end gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-warm-gray hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-charcoal hover:bg-sand/30 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-sand/60 bg-warm-white p-2 shadow-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-warm-gray hover:bg-sand/25 hover:text-charcoal transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-sage hover:bg-deep-forest rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
