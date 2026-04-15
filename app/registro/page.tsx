import type { Metadata } from "next";
import { User, Mail, Phone, GraduationCap, MapPin, Calendar, MessageSquare, ChevronDown } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Registro",
  description: "Regístrate para recibir información personalizada sobre la carrera de ISC.",
};

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <SectionTitle
            eyebrow="Primer paso"
            title="Regístrate y empieza tu camino"
            subtitle="Completa el formulario y un asesor te guiará en todo el proceso de admisión."
            center
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar info */}
          <div className="space-y-4">
            <div className="bg-primary text-white rounded-2xl p-5">
              <h3 className="font-bold mb-3">¿Qué pasa después?</h3>
              <div className="space-y-3">
                {[
                  { n: "1", t: "Recibas confirmación por correo" },
                  { n: "2", t: "Un asesor te contacte en 24h" },
                  { n: "3", t: "Accedas a información exclusiva" },
                  { n: "4", t: "Te guiemos en cada paso" },
                ].map((item) => (
                  <div key={item.n} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] font-bold">{item.n}</span>
                    </div>
                    <p className="text-sm text-primary-100">{item.t}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h4 className="font-semibold text-slate-900 mb-3 text-sm">Próxima fecha límite</h4>
              <div className="flex items-center gap-2 text-primary font-bold text-lg">
                <Calendar className="w-5 h-5" />
                31 de mayo 2026
              </div>
              <p className="text-xs text-slate-500 mt-1">Cierre de registro para examen jun 2026</p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <p className="text-sm font-semibold text-green-800 mb-1">100% gratuito</p>
              <p className="text-xs text-green-700">
                El registro y la orientación vocacional son completamente gratuitos y sin compromiso.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h3 className="font-bold text-slate-900 text-lg mb-6">Datos de contacto</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nombre(s) *
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="text" placeholder="Tu nombre" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Apellidos *
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <User className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="text" placeholder="Tus apellidos" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Correo electrónico *
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="email" placeholder="tu@correo.com" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Teléfono / WhatsApp *
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="tel" placeholder="10 dígitos" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Escuela de procedencia
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="text" placeholder="Bachillerato / Preparatoria" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Ciudad / Estado
                </label>
                <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                  <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input type="text" placeholder="Tu ciudad" className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400" readOnly />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                ¿Cómo te enteraste de ISC?
              </label>
              <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-3">
                <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select className="flex-1 text-sm outline-none text-slate-400 bg-transparent" disabled>
                  <option>Selecciona una opción</option>
                  <option>Redes sociales</option>
                  <option>Recomendación de amigo/familiar</option>
                  <option>Feria universitaria</option>
                  <option>Búsqueda en internet</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                ¿Qué te interesa saber? (opcional)
              </label>
              <div className="flex items-start gap-3 border border-slate-200 rounded-xl px-3 py-3">
                <MessageSquare className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <textarea placeholder="Becas, retícula, laboratorios, vida universitaria..." rows={3} className="flex-1 text-sm outline-none text-slate-700 placeholder-slate-400 resize-none" readOnly />
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <input type="checkbox" className="mt-0.5 accent-primary" readOnly />
              <p className="text-xs text-slate-500">
                Acepto el{" "}
                <a href="#" className="text-primary hover:underline">aviso de privacidad</a>{" "}
                y que me contacten para orientación sobre la carrera. Sin spam.
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary-200 text-base">
              Enviar mi registro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
