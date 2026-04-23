"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { RotateCcw, CheckCircle, XCircle, Clock, Trophy } from "lucide-react";

type TipoDato = "String" | "Int" | "Float" | "Boolean" | "Lista" | "Nulo";

type Pregunta = {
  valor: string;
  tipo: TipoDato;
  explicacion: string;
};

type Ronda = Pregunta & { opciones: TipoDato[] };

// ── Banco completo de preguntas ──────────────────────────────────────────────
const BANCO: Pregunta[] = [
  {
    valor: '"Hola, mundo"',
    tipo: "String",
    explicacion: 'Las comillas convierten cualquier contenido en texto. "Hola, mundo" es una cadena de caracteres.',
  },
  {
    valor: "42",
    tipo: "Int",
    explicacion: "Número entero sin punto decimal. Los Int no tienen parte fraccionaria.",
  },
  {
    valor: "3.14",
    tipo: "Float",
    explicacion: "Número con punto decimal (coma flotante). Ideal para representar valores como π.",
  },
  {
    valor: "true",
    tipo: "Boolean",
    explicacion: "Solo puede ser true o false. Los Boolean controlan condiciones y decisiones en el código.",
  },
  {
    valor: "[1, 2, 3, 4]",
    tipo: "Lista",
    explicacion: "Los corchetes indican una colección ordenada de elementos. En Python: list; en JS: array.",
  },
  {
    valor: "null",
    tipo: "Nulo",
    explicacion: 'null (o None en Python) representa la ausencia de valor — "no hay nada aquí".',
  },
  {
    valor: '"false"',
    tipo: "String",
    explicacion: 'Aunque dice "false", las comillas lo convierten en texto, no en un booleano.',
  },
  {
    valor: "-7",
    tipo: "Int",
    explicacion: "Los enteros pueden ser negativos. -7 sigue siendo un Int, no un Float.",
  },
  {
    valor: "0.001",
    tipo: "Float",
    explicacion: "Cualquier número con punto decimal, incluso muy pequeño, es Float.",
  },
  {
    valor: "false",
    tipo: "Boolean",
    explicacion: "false sin comillas es el valor booleano falso, no una cadena de texto.",
  },
  {
    valor: '"123"',
    tipo: "String",
    explicacion: 'Las comillas lo hacen texto, no número. "123" no se puede sumar directamente como Int.',
  },
  {
    valor: "0",
    tipo: "Int",
    explicacion: "El cero es un entero válido. No confundir con null — 0 es un valor, null es ausencia de valor.",
  },
  {
    valor: "None",
    tipo: "Nulo",
    explicacion: "En Python, None es el equivalente a null — representa la ausencia de valor.",
  },
  {
    valor: '["a", "b", "c"]',
    tipo: "Lista",
    explicacion: "Una lista puede contener cualquier tipo de elemento, incluyendo Strings.",
  },
  {
    valor: "1.0",
    tipo: "Float",
    explicacion: "Aunque su valor sea entero, el punto decimal lo convierte en Float.",
  },
  {
    valor: "True",
    tipo: "Boolean",
    explicacion: "En Python, Boolean se escribe con mayúscula: True o False.",
  },
  {
    valor: '"3.14"',
    tipo: "String",
    explicacion: 'Las comillas tienen prioridad. "3.14" es texto, no un número con decimales.',
  },
  {
    valor: "1000000",
    tipo: "Int",
    explicacion: "Sin punto decimal es un Int, sin importar cuán grande sea el número.",
  },
  {
    valor: "-0.5",
    tipo: "Float",
    explicacion: "Número negativo con decimales — Float. El signo negativo no cambia el tipo.",
  },
  {
    valor: "[]",
    tipo: "Lista",
    explicacion: "Una lista vacía sigue siendo una Lista — solo no tiene elementos aún.",
  },
  {
    valor: '"True"',
    tipo: "String",
    explicacion: 'Las comillas ganan. "True" es una cadena de texto, no el booleano True.',
  },
  {
    valor: "0.0",
    tipo: "Float",
    explicacion: "El punto decimal lo clasifica como Float aunque el valor sea cero.",
  },
  {
    valor: "False",
    tipo: "Boolean",
    explicacion: "En Python, False (con mayúscula) es el valor booleano falso.",
  },
  {
    valor: '"null"',
    tipo: "String",
    explicacion: 'Con comillas es texto. "null" es la palabra null escrita como cadena, no el valor nulo.',
  },
  {
    valor: "[true, false]",
    tipo: "Lista",
    explicacion: "Los corchetes definen una lista. Puede contener booleanos, números o cualquier tipo.",
  },
];

const TODOS_LOS_TIPOS: TipoDato[] = ["String", "Int", "Float", "Boolean", "Lista", "Nulo"];
const RONDAS_POR_PARTIDA = 10;
const SEGUNDOS_POR_RONDA = 8;

function barajar<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function generarRondas(): Ronda[] {
  return barajar(BANCO)
    .slice(0, RONDAS_POR_PARTIDA)
    .map((p) => ({ ...p, opciones: barajar(TODOS_LOS_TIPOS) }));
}

type Estado = "jugando" | "entre-rondas" | "terminado";

export default function TipoDeDatoReto() {
  const [rondas, setRondas] = useState<Ronda[]>(() => generarRondas());
  const [estado, setEstado] = useState<Estado>("jugando");
  const [rondaIdx, setRondaIdx] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [seleccionado, setSeleccionado] = useState<TipoDato | null>(null);
  const [tiempoRestante, setTiempoRestante] = useState(SEGUNDOS_POR_RONDA);
  const [resultados, setResultados] = useState<boolean[]>([]);
  const [tiempoAgotado, setTiempoAgotado] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pregunta = rondas[rondaIdx];
  const respondido = seleccionado !== null || tiempoAgotado;

  const avanzar = useCallback(() => {
    if (rondaIdx + 1 >= rondas.length) {
      setEstado("terminado");
    } else {
      setRondaIdx((i) => i + 1);
      setSeleccionado(null);
      setTiempoAgotado(false);
      setTiempoRestante(SEGUNDOS_POR_RONDA);
      setEstado("jugando");
    }
  }, [rondaIdx, rondas.length]);

  // Temporizador
  useEffect(() => {
    if (estado !== "jugando" || respondido) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTiempoRestante((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setTiempoAgotado(true);
          setResultados((prev) => [...prev, false]);
          setEstado("entre-rondas");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [estado, respondido, rondaIdx]);

  function elegir(tipo: TipoDato) {
    if (respondido) return;
    if (timerRef.current) clearInterval(timerRef.current);

    const correcto = tipo === pregunta.tipo;
    setSeleccionado(tipo);
    if (correcto) setPuntos((p) => p + 1);
    setResultados((prev) => [...prev, correcto]);
    setEstado("entre-rondas");
  }

  function reiniciar() {
    if (timerRef.current) clearInterval(timerRef.current);
    setRondas(generarRondas());
    setRondaIdx(0);
    setPuntos(0);
    setSeleccionado(null);
    setTiempoAgotado(false);
    setTiempoRestante(SEGUNDOS_POR_RONDA);
    setResultados([]);
    setEstado("jugando");
  }

  // ── Pantalla final ──
  if (estado === "terminado") {
    const porcentaje = Math.round((puntos / rondas.length) * 100);
    const emoji =
      porcentaje === 100 ? "🏆" : porcentaje >= 70 ? "🎉" : porcentaje >= 40 ? "💪" : "📚";

    return (
      <div className="space-y-5">
        <div className="text-center bg-pink-50 border border-pink-200 rounded-2xl p-6">
          <p className="text-4xl mb-2">{emoji}</p>
          <p className="font-black text-slate-900 text-xl">
            {puntos} / {rondas.length} correctas
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {porcentaje === 100
              ? "¡Perfecto! Dominas los tipos de datos."
              : porcentaje >= 70
              ? "¡Muy bien! Ya tienes sólidas las bases."
              : porcentaje >= 40
              ? "Vas bien. Un poco más de práctica y lo dominarás."
              : "¡Sigue practicando! Los tipos de datos son fundamentales."}
          </p>
        </div>

        {/* Detalle de respuestas */}
        <div className="space-y-2">
          {rondas.map((p, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl border text-sm ${
                resultados[i]
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-red-50 border-red-200 text-red-700"
              }`}
            >
              {resultados[i] ? (
                <CheckCircle className="w-4 h-4 shrink-0 text-green-600" />
              ) : (
                <XCircle className="w-4 h-4 shrink-0 text-red-500" />
              )}
              <code className="font-mono font-bold w-24 shrink-0 truncate">{p.valor}</code>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/70 border">
                {p.tipo}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={reiniciar}
          className="w-full flex items-center justify-center gap-2 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          Jugar de nuevo
        </button>
      </div>
    );
  }

  // ── Juego ──
  const porcentajeTiempo = (tiempoRestante / SEGUNDOS_POR_RONDA) * 100;
  const colorBarra =
    tiempoRestante > 5 ? "bg-pink-500" : tiempoRestante > 2 ? "bg-orange-400" : "bg-red-500";

  return (
    <div className="space-y-4">
      {/* Progreso y puntuación */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {rondas.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < rondaIdx
                  ? resultados[i]
                    ? "bg-green-500"
                    : "bg-red-400"
                  : i === rondaIdx
                  ? "bg-pink-500"
                  : "bg-slate-200"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          <Trophy className="w-3.5 h-3.5 text-pink-500" />
          {puntos} pts · Ronda {rondaIdx + 1}/{rondas.length}
        </div>
      </div>

      {/* Barra de tiempo */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Tiempo
          </span>
          <span
            className={`font-mono font-bold ${
              tiempoRestante <= 3 ? "text-red-500" : "text-slate-500"
            }`}
          >
            {tiempoRestante}s
          </span>
        </div>
        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${colorBarra}`}
            style={{ width: `${porcentajeTiempo}%` }}
          />
        </div>
      </div>

      {/* Valor a identificar */}
      <div className="bg-slate-900 rounded-xl p-5 text-center">
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-2">
          ¿Qué tipo de dato es?
        </p>
        <code className="font-mono text-2xl font-black text-white break-all">
          {pregunta.valor}
        </code>
      </div>

      {/* Opciones (orden aleatorio por ronda) */}
      <div className="grid grid-cols-2 gap-2">
        {pregunta.opciones.map((tipo) => {
          const isSelected = seleccionado === tipo;
          const esCorrecta = tipo === pregunta.tipo;

          return (
            <button
              key={tipo}
              onClick={() => elegir(tipo)}
              disabled={respondido}
              className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                respondido
                  ? esCorrecta
                    ? "bg-green-100 border-green-500 text-green-800"
                    : isSelected
                    ? "bg-red-100 border-red-400 text-red-700"
                    : "bg-slate-50 border-slate-200 text-slate-400"
                  : "bg-white border-slate-200 text-slate-700 hover:border-pink-400 hover:bg-pink-50 cursor-pointer"
              } disabled:cursor-default`}
            >
              <span className="flex items-center justify-center gap-1.5">
                {respondido && esCorrecta && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
                {respondido && isSelected && !esCorrecta && (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                {tipo}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {respondido && (
        <div
          className={`p-3 rounded-xl border text-sm ${
            tiempoAgotado
              ? "bg-orange-50 border-orange-200 text-orange-800"
              : seleccionado === pregunta.tipo
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {tiempoAgotado ? (
            <p>
              <span className="font-bold">Tiempo agotado.</span> Era un{" "}
              <span className="font-mono font-bold">{pregunta.tipo}</span>.{" "}
              {pregunta.explicacion}
            </p>
          ) : seleccionado === pregunta.tipo ? (
            <p>
              <span className="font-bold">¡Correcto!</span> {pregunta.explicacion}
            </p>
          ) : (
            <p>
              <span className="font-bold">Era {pregunta.tipo}.</span>{" "}
              {pregunta.explicacion}
            </p>
          )}
        </div>
      )}

      {/* Botón siguiente */}
      {respondido && (
        <button
          onClick={avanzar}
          className="w-full py-2.5 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors text-sm"
        >
          {rondaIdx + 1 >= rondas.length ? "Ver resultados" : "Siguiente →"}
        </button>
      )}
    </div>
  );
}
