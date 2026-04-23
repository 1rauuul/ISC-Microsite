import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, Camera, Play, ExternalLink } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

type FooterLink = { label: string; href: string };

const footerLinks: {
  carrera: FooterLink[];
  admision: FooterLink[];
  herramientas: FooterLink[];
} = {
  carrera: [
    { label: "Retícula", href: "/reticula" },
    // { label: "Casos de Éxito", href: "/casos-exito" },
    { label: "Retos por Área", href: "/retos" },
    // { label: "Recorrido Virtual", href: "/recorrido-virtual" },
  ],
  admision: [
    { label: "Proceso de Admisión", href: "/admision" },
    { label: "Registro", href: "/registro" },
  ],
  herramientas: [
    // { label: "Test Vocacional", href: "/test-vocacional" },
    // { label: "Eventos", href: "/eventos" },
    // { label: "Asesor IA", href: "/asesor" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              <Image
                src="/logo-isc.png"
                alt="Emblema ISC — Ingeniería en Sistemas Computacionales"
                width={48}
                height={48}
                className="h-11 w-11 sm:h-12 sm:w-12 object-contain shrink-0 rounded-lg"
              />
              <div>
                <span className="block font-bold text-white text-base">ISC</span>
                <span className="block text-xs text-slate-400">
                  Ingeniería en Sistemas Computacionales
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              Formamos ingenieros que transforman el futuro digital de México y el mundo. 
              Tecnología, innovación y excelencia académica desde 1972.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Globe, href: "http://www.ittehuacan.edu.mx/", label: "Sitio Web" },
                { Icon: FaFacebook, href: "https://www.facebook.com/TecNMTehuacan", label: "Facebook" },
                // { Icon: Camera, href: "#", label: "Instagram" },
                // { Icon: Play, href: "#", label: "YouTube" },
                // { Icon: ExternalLink, href: "#", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* La Carrera */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              La Carrera
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.carrera.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admisión */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Admisión
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.admision.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>Blvd. Tecnológico s/n, Ciudad, Estado, México</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>(800) 123-4567</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <span>sistemas@tecnm.mx</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5">
                Herramientas
              </h5>
              <ul className="space-y-2">
                {footerLinks.herramientas.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Tecnológico Nacional de México — Ingeniería en Sistemas Computacionales.
            Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso de privacidad</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
