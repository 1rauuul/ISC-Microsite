import type { Metadata } from "next";
import { BookOpen, GraduationCap, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import { reticula } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Retícula",
  description: "Plan de estudios completo de Ingeniería en Sistemas Computacionales — 9 semestres.",
};

const semesterColor = [
  "from-blue-500 to-blue-600",
  "from-cyan-500 to-cyan-600",
  "from-violet-500 to-violet-600",
  "from-teal-500 to-teal-600",
  "from-indigo-500 to-indigo-600",
  "from-blue-600 to-blue-700",
  "from-purple-500 to-purple-600",
  "from-cyan-600 to-cyan-700",
  "from-slate-700 to-slate-800",
];

export default function ReticulaPage() {
  const totalCreditos = reticula.reduce(
    (acc, sem) => acc + sem.materias.reduce((a, m) => a + m.creditos, 0),
    0
  );
  const totalMaterias = reticula.reduce((acc, sem) => acc + sem.materias.length, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            eyebrow="Plan de estudios oficial"
            title="Retícula ISC"
            subtitle="9 semestres · Nivel licenciatura · Modalidad presencial"
            center
            light
          />
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: GraduationCap, label: "9 semestres", sub: "4.5 años" },
              { icon: BookOpen, label: `${totalMaterias} materias`, sub: "Plan 2024" },
              { icon: Clock, label: `${totalCreditos} créditos`, sub: "Total del programa" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center">
                <Icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-white font-bold">{label}</p>
                <p className="text-slate-300 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reticula.map((sem, idx) => (
            <div key={sem.semestre} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Header */}
              <div className={`bg-gradient-to-r ${semesterColor[idx]} px-5 py-4`}>
                <div className="flex items-center justify-between">
                  <p className="text-white font-bold">Semestre {sem.semestre}</p>
                  <Badge color="blue" className="bg-white/20 text-white ring-white/30">
                    {sem.materias.length} materias
                  </Badge>
                </div>
                <p className="text-white/70 text-xs mt-1">
                  {sem.materias.reduce((a, m) => a + m.creditos, 0)} créditos
                </p>
              </div>

              {/* Materias */}
              <div className="p-4 space-y-2">
                {sem.materias.map((materia) => (
                  <div
                    key={materia.clave}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-800 leading-tight">{materia.nombre}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-slate-400 font-mono">{materia.clave}</span>
                        <span className="text-[10px] text-slate-400">·</span>
                        <span className="text-[10px] text-primary-500 font-medium">{materia.creditos} cr.</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-5">
          <p className="text-sm text-primary-800 font-semibold mb-1">Nota sobre el plan de estudios</p>
          <p className="text-sm text-primary-dark">
            Esta retícula corresponde al Plan 2024 del TECNM. Las materias optativas de especialidad 
            se seleccionan en los semestres 7 y 8. Consulta servicios escolares para confirmar tus 
            equivalencias si vienes de transferencia.
          </p>
        </div>
      </div>
    </div>
  );
}
