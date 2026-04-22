import type { Metadata } from "next";
import { Calendar } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactoForm from "@/components/forms/ContactoForm";

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
          <div className="lg:col-span-2">
            <ContactoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
