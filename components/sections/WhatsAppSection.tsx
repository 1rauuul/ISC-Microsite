import { MessageCircle, Phone, Clock, Users } from "lucide-react";
import Button from "@/components/ui/Button";

export default function WhatsAppSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Info */}
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Contacto directo</p>
                  <p className="font-bold text-lg">WhatsApp ISC</p>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                ¿Tienes dudas sobre la carrera?<br />
                <span className="text-[#25D366]">Escríbenos ahora</span>
              </h2>

              <p className="text-white/80 leading-relaxed mb-6">
                Un asesor estudiantil responderá tus preguntas sobre admisión, 
                retícula, becas y vida universitaria en menos de 24 horas.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: Clock, text: "Respuesta en menos de 24 h" },
                  { icon: Users, text: "Atendido por estudiantes actuales" },
                  { icon: Phone, text: "También por llamada agendada" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5 text-white/80">
                    <Icon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>

              <Button
                href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20la%20carrera%20de%20ISC"
                variant="whatsapp"
                size="lg"
                external
              >
                <MessageCircle className="w-5 h-5" />
                Abrir WhatsApp
              </Button>
            </div>

            {/* Right: Phone mockup */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center">
              <div className="w-64 bg-[#ECE5DD] rounded-3xl shadow-2xl overflow-hidden border-4 border-white/20">
                <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-secondary flex items-center justify-center">
                    <span className="text-white text-sm font-bold">ISC</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Asesor ISC</p>
                    <p className="text-green-300 text-xs">en línea</p>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-slate-800 text-xs">¡Hola! Soy asesor de ISC. ¿En qué puedo ayudarte? 😊</p>
                    <p className="text-slate-400 text-[10px] text-right mt-1">10:02</p>
                  </div>
                  <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%] ml-auto shadow-sm">
                    <p className="text-slate-800 text-xs">¿Cuánto dura la carrera?</p>
                    <p className="text-slate-400 text-[10px] text-right mt-1">10:04 ✓✓</p>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-slate-800 text-xs">Son 9 semestres (4.5 años). Incluye residencia profesional en empresa real 🚀</p>
                    <p className="text-slate-400 text-[10px] text-right mt-1">10:05</p>
                  </div>
                  <div className="flex items-center gap-2 px-2">
                    <div className="flex-1 bg-white rounded-full px-3 py-2">
                      <p className="text-slate-400 text-xs">Escribe un mensaje...</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
