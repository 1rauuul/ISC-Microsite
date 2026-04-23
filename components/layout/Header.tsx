"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Misión", href: "/#mision-academica" },
  { label: "Proceso de Admisión", href: "/admision" },
  { label: "Retícula", href: "/reticula" },
  { label: "Retos", href: "/retos" },
];

const linkClass =
  "px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors whitespace-nowrap";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Image
              src="/logo-isc.png"
              alt="Emblema ISC — Ingeniería en Sistemas Computacionales"
              width={40}
              height={40}
              className="h-8 w-8 md:h-9 md:w-9 object-contain rounded-lg group-hover:opacity-90 transition-opacity"
              priority
            />
            <div className="leading-tight hidden sm:block">
              <span className="block font-bold text-slate-900 text-sm">ISC</span>
              <span className="block text-xs text-slate-500 -mt-0.5">Sistemas Computacionales</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/#registro" variant="primary" size="sm">
              Regístrate
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <Button href="/#registro" variant="primary" size="sm" className="w-full justify-center">
                Regístrate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
