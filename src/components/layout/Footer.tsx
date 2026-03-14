import Link from "next/link";
import Image from "next/image";
import { Facebook, Mail, Heart } from "lucide-react";
import { navLinks } from "@/lib/constants";
import type { SiteSettingsContent } from "@/lib/cms/types";

interface FooterProps {
  settings: SiteSettingsContent;
}

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-sand text-charcoal/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/images/logo/cvia-logo.png"
                alt="CVIA Logo"
                width={64}
                height={64}
              />
              <p className="font-serif text-xl text-charcoal">CVIA</p>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {settings.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal/10 hover:bg-sage transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`mailto:${settings.emails.cvia}`}
                className="w-10 h-10 rounded-full bg-charcoal/10 hover:bg-sage transition-colors flex items-center justify-center"
                aria-label="Email CVIA"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-charcoal text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-charcoal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CVIA Contact */}
          <div>
            <h3 className="font-serif text-charcoal text-sm uppercase tracking-wider mb-4">
              CVIA
            </h3>
            <p className="text-sm mb-2">
              {settings.meetings.cvia}
            </p>
            <a
              href={`mailto:${settings.emails.cvia}`}
              className="text-sm text-terracotta hover:text-terracotta-light transition-colors"
            >
              {settings.emails.cvia}
            </a>
          </div>

          {/* WIN Contact */}
          <div>
            <h3 className="font-serif text-charcoal text-sm uppercase tracking-wider mb-4">
              WIN
            </h3>
            <p className="text-sm mb-2">
              {settings.meetings.win}
            </p>
            <a
              href={`mailto:${settings.emails.win}`}
              className="text-sm text-terracotta hover:text-terracotta-light transition-colors"
            >
              {settings.emails.win}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-charcoal/60">
            &copy; {new Date().getFullYear()} Conejo Valley Interfaith
            Association. All rights reserved.
          </p>
          <p className="text-xs text-charcoal/60 flex items-center gap-1">
            Made with <Heart size={12} className="text-terracotta" /> for
            our community
          </p>
        </div>
      </div>
    </footer>
  );
}
