"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  // { label: "Test Vocacional", href: "/test-vocacional" },
  { label: "Retícula", href: "/reticula" },
  {
    label: "Conoce ISC",
    href: "#",
    dropdown: [
      // { label: "Casos de Éxito", href: "/casos-exito" },
      { label: "Retos por Área", href: "/retos" },
      // { label: "Recorrido Virtual", href: "/recorrido-virtual" },
    ],
  },
  // { label: "Eventos", href: "/eventos" },
  {
    label: "Admisión",
    href: "#",
    dropdown: [
      { label: "Proceso de Admisión", href: "/admision" },
    ],
  },
  // { label: "Asesor IA", href: "/asesor" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-primary hover:bg-primary-50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <Button href="/asesor" variant="ghost" size="sm">
              Hablar con asesor
            </Button> */}
            <Button href="/registro" variant="primary" size="sm">
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
              {/* <Button href="/asesor" variant="ghost" size="sm" className="w-full justify-center">
                Hablar con asesor
              </Button> */}
              <Button href="/registro" variant="primary" size="sm" className="w-full justify-center">
                Regístrate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
