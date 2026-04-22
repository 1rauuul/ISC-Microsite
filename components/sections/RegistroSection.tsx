import Link from "next/link";
import { ArrowRight, User, Mail, Phone, GraduationCap, MessageSquare } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function RegistroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(90,140,201,0.4) 1px, transparent 0)",
          backgroundSize: "35px 35px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="¿Listo para dar el paso?"
              title="Regístrate y recibe información personalizada"
              subtitle="Déjanos tus datos y un asesor te contactará para guiarte en cada etapa del proceso de admisión."
              light
            />

            {/* <div className="mt-8 space-y-4">
              {[
                { icono: "📩", texto: "Recibirás información de admisión por correo" },
                { icono: "📱", texto: "Un asesor te contactará por WhatsApp" },
                { icono: "📅", texto: "Te avisaremos de próximas fechas de examen" },
                { icono: "🎁", texto: "Acceso anticipado a eventos y talleres" },
              ].map((item) => (
                <div key={item.texto} className="flex items-center gap-3 text-slate-300">
                  <span className="text-xl">{item.icono}</span>
                  <span className="text-sm">{item.texto}</span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Quiero más información</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nombre completo
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                  <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Correo electrónico
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                  <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Teléfono / WhatsApp
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    type="tel"
                    placeholder="10 dígitos"
                    className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Escuela de procedencia
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-primary-400 transition-all">
                  <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Preparatoria o bachillerato"
                    className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  ¿Qué te interesa saber? (opcional)
                </label>
                <div className="flex items-start gap-3 border border-slate-200 rounded-xl px-3 py-3 focus-within:border-primary-400 transition-all">
                  <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <textarea
                    placeholder="Becas, laboratorios, retícula..."
                    rows={2}
                    className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 resize-none"
                    readOnly
                  />
                </div>
              </div>

              <Link
                href="/registro"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary-200"
              >
                Enviar mi información
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-center text-xs text-slate-400">
                Al registrarte aceptas nuestro{" "}
                <a href="#" className="text-primary-500 hover:underline">
                  aviso de privacidad
                </a>
                . Sin spam, prometido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
