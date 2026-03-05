import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-sand/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
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

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
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
        </div>
      </nav>
    </header>
  );
}
