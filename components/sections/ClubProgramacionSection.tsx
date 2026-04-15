import { Code2, Users, Trophy } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ClubProgramacionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              eyebrow="Comunidad"
              title="Club de Programación"
              subtitle="Grupos de trabajo para aprender, practicar y desarrollar habilidades en programación a través de material educativo y actividades en equipo."
            />

            <div className="mt-8 space-y-4">
              {[
                { icon: Code2, title: "Coding Cup", text: "Participa en la competencia anual de programación del área de ISC." },
                { icon: Users, title: "Trabajo en equipo", text: "Aprende junto a otros estudiantes resolviendo problemas reales de programación." },
                { icon: Trophy, title: "Desarrollo de habilidades", text: "Mejora tu lógica, algoritmos y velocidad de resolución de problemas." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-xl">Coding Cup ISC</p>
                <p className="text-primary-200 text-sm">Competencia anual</p>
              </div>
            </div>
            <p className="text-primary-100 leading-relaxed mb-6">
              Uno de los eventos más esperados del área de Ingeniería en Sistemas Computacionales. 
              Los participantes ponen a prueba sus habilidades de programación en un ambiente competitivo y formativo.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { valor: "5h", etiqueta: "de competencia" },
                { valor: "200+", etiqueta: "participantes" },
              ].map((stat) => (
                <div key={stat.etiqueta} className="text-center">
                  <p className="text-2xl font-bold">{stat.valor}</p>
                  <p className="text-primary-200 text-xs mt-1">{stat.etiqueta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
