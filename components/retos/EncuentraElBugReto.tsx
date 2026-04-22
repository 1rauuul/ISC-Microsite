"use client";

import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, ChevronRight } from "lucide-react";

type Opcion = {
  id: string;
  texto: string;
  esCorrecta: boolean;
  explicacion: string;
};

type Nivel = {
  id: number;
  titulo: string;
  descripcion: string;
  pseudocodigo: string;
  bugPattern: string;
  correccion: string;
  opciones: Opcion[];
};

const NIVELES: Nivel[] = [
  {
    id: 1,
    titulo: "Promedio incorrecto",
    descripcion:
      "Este pseudocódigo calcula el promedio de 3 calificaciones pero tiene un error lógico. Identifica cuál es.",
    pseudocodigo: `INICIO
  LEER calificacion1
  LEER calificacion2
  LEER calificacion3

  suma ← calificacion1 + calificacion2 + calificacion3
  promedio ← suma / 2        ← ¿Aquí está el bug?

  ESCRIBIR "El promedio es: ", promedio
FIN`,
    bugPattern: "/ 2",
    correccion: "promedio ← suma / 3",
    opciones: [
      {
        id: "a",
        texto: "La variable 'suma' debería llamarse 'total'.",
        esCorrecta: false,
        explicacion:
          "El nombre de la variable no afecta la lógica. 'suma' es un nombre válido y descriptivo.",
      },
      {
        id: "b",
        texto:
          "Se divide entre 2 en lugar de entre 3, que es el número de calificaciones.",
        esCorrecta: true,
        explicacion:
          "¡Exacto! Para calcular el promedio de 3 valores debes dividir entre 3, no entre 2. El promedio es suma / cantidad_de_elementos.",
      },
      {
        id: "c",
        texto: "Falta leer una cuarta calificación antes de calcular el promedio.",
        esCorrecta: false,
        explicacion:
          "El enunciado pide el promedio de tres calificaciones, no cuatro. El problema no es la cantidad de entradas.",
      },
      {
        id: "d",
        texto: "La suma debería usar multiplicación en lugar de adición.",
        esCorrecta: false,
        explicacion:
          "Para sumar varios valores se usa el operador '+'. La multiplicación produciría un resultado completamente diferente.",
      },
    ],
  },
  {
    id: 2,
    titulo: "Bucle sin fin",
    descripcion:
      "Este pseudocódigo intenta contar del 1 al 10, pero se ejecutará para siempre. ¿Ves el error en la condición?",
    pseudocodigo: `INICIO
  contador ← 1

  MIENTRAS contador >= 1 HACER    ← ¿Aquí está el bug?
    ESCRIBIR contador
    contador ← contador + 1
  FIN MIENTRAS

  ESCRIBIR "Fin del conteo"
FIN`,
    bugPattern: ">= 1",
    correccion: "MIENTRAS contador <= 10 HACER",
    opciones: [
      {
        id: "a",
        texto: "La variable 'contador' no está inicializada antes del ciclo.",
        esCorrecta: false,
        explicacion:
          "La variable sí está inicializada: `contador ← 1` antes del ciclo. Ese no es el problema.",
      },
      {
        id: "b",
        texto:
          "La condición debería ser `contador <= 10` para detener el ciclo al llegar a 10.",
        esCorrecta: true,
        explicacion:
          "¡Correcto! `contador >= 1` siempre es verdadera porque el contador solo crece. La condición correcta es `contador <= 10`, que se vuelve falsa cuando el contador supera 10.",
      },
      {
        id: "c",
        texto: "Falta un ROMPER (BREAK) dentro del ciclo.",
        esCorrecta: false,
        explicacion:
          "La solución correcta es arreglar la condición del ciclo, no agregar un BREAK. Usar BREAK para salir de un ciclo mal diseñado no es buena práctica.",
      },
      {
        id: "d",
        texto: "El incremento debería ser `contador ← contador - 1`.",
        esCorrecta: false,
        explicacion:
          "Decrementar haría que el contador fuera a 0, -1, -2... La condición `>= 1` se volvería falsa en 0, pero entonces el ciclo contaría hacia abajo, no del 1 al 10.",
      },
    ],
  },
  {
    id: 3,
    titulo: "¿Par o impar?",
    descripcion:
      "Este pseudocódigo debería determinar si un número es par o impar, pero su condición está mal escrita. ¿Cuál es el error?",
    pseudocodigo: `INICIO
  LEER numero

  SI numero / 2 == 0 ENTONCES    ← ¿Aquí está el bug?
    ESCRIBIR "El número es par"
  SI NO
    ESCRIBIR "El número es impar"
  FIN SI
FIN`,
    bugPattern: "/ 2",
    correccion: "SI numero MOD 2 == 0 ENTONCES",
    opciones: [
      {
        id: "a",
        texto:
          "Debería usarse el operador MOD (módulo/residuo): `numero MOD 2 == 0`.",
        esCorrecta: true,
        explicacion:
          "¡Exacto! La división `numero / 2` rara vez da exactamente 0 (solo cuando numero = 0). Para verificar paridad se usa el módulo (MOD o %): si el residuo de dividir entre 2 es 0, el número es par.",
      },
      {
        id: "b",
        texto: "Los mensajes 'par' e 'impar' están intercambiados.",
        esCorrecta: false,
        explicacion:
          "Los mensajes están en el lugar correcto. El error está en la condición, no en el texto de las salidas.",
      },
      {
        id: "c",
        texto: "Falta LEER el número antes de la condición.",
        esCorrecta: false,
        explicacion:
          "La instrucción `LEER numero` ya está al inicio del algoritmo, antes de la condición.",
      },
      {
        id: "d",
        texto: "Se necesita un tercer caso para cuando el número es cero.",
        esCorrecta: false,
        explicacion:
          "El cero es un número par (0 MOD 2 = 0), por lo que una condición correcta lo cubriría sin caso adicional.",
      },
    ],
  },
];

export default function EncuentraElBugReto() {
  const [nivelIdx, setNivelIdx] = useState(0);
  const [seleccionada, setSeleccionada] = useState<string | null>(null);
  const [respondido, setRespondido] = useState(false);

  const reto = NIVELES[nivelIdx];
  const opcionElegida = reto.opciones.find((o) => o.id === seleccionada);
  const esUltimoNivel = nivelIdx === NIVELES.length - 1;

  function verificar() {
    if (seleccionada) setRespondido(true);
  }

  function reiniciar() {
    setSeleccionada(null);
    setRespondido(false);
  }

  function irAlNivel(idx: number) {
    setNivelIdx(idx);
    setSeleccionada(null);
    setRespondido(false);
  }

  return (
    <div className="space-y-5">
      {/* Indicador de nivel */}
      <div className="flex items-center gap-2">
        {NIVELES.map((nv, i) => (
          <button
            key={nv.id}
            onClick={() => irAlNivel(i)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${
              i === nivelIdx
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-slate-500 border-slate-200 hover:border-orange-300"
            }`}
          >
            <span
              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                i === nivelIdx ? "bg-white/30" : "bg-slate-100"
              }`}
            >
              {i + 1}
            </span>
            {nv.titulo}
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-600">{reto.descripcion}</p>

      {/* Pseudocódigo */}
      <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
        <p className="text-[10px] text-slate-500 font-mono mb-2 uppercase tracking-wider">
          Pseudocódigo — Nivel {nivelIdx + 1}: {reto.titulo}
        </p>
        <pre className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre">
          {reto.pseudocodigo.split("\n").map((line, i) => {
            const esBugLine = line.includes(reto.bugPattern);
            return (
              <span
                key={i}
                className={`block ${
                  esBugLine && respondido ? "bg-red-900/50 rounded px-1 -mx-1" : ""
                }`}
              >
                {line}
              </span>
            );
          })}
        </pre>
      </div>

      {/* Opciones */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-slate-600">¿Cuál es el error?</p>
        {reto.opciones.map((opcion) => {
          const isSelected = seleccionada === opcion.id;
          const showResult = respondido && isSelected;

          return (
            <button
              key={opcion.id}
              onClick={() => {
                if (!respondido) setSeleccionada(opcion.id);
              }}
              disabled={respondido}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                showResult
                  ? opcion.esCorrecta
                    ? "bg-green-50 border-green-400 text-green-800"
                    : "bg-red-50 border-red-400 text-red-700"
                  : isSelected
                  ? "bg-primary/5 border-primary text-slate-800"
                  : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              } disabled:cursor-default`}
            >
              <div className="flex items-start gap-2">
                <span
                  className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold mt-0.5 ${
                    showResult
                      ? opcion.esCorrecta
                        ? "border-green-500 bg-green-500 text-white"
                        : "border-red-400 bg-red-400 text-white"
                      : isSelected
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-slate-300"
                  }`}
                >
                  {opcion.id.toUpperCase()}
                </span>
                <span>{opcion.texto}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Resultado */}
      {respondido && opcionElegida && (
        <div
          className={`p-4 rounded-xl border flex gap-3 ${
            opcionElegida.esCorrecta
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          {opcionElegida.esCorrecta ? (
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          )}
          <div>
            <p
              className={`text-sm font-bold mb-1 ${
                opcionElegida.esCorrecta ? "text-green-800" : "text-red-700"
              }`}
            >
              {opcionElegida.esCorrecta
                ? "¡Encontraste el bug!"
                : "Casi, pero no es eso."}
            </p>
            <p
              className={`text-xs leading-relaxed ${
                opcionElegida.esCorrecta ? "text-green-700" : "text-red-600"
              }`}
            >
              {opcionElegida.explicacion}
            </p>
            {!opcionElegida.esCorrecta && (
              <p className="text-xs text-slate-600 mt-2">
                La corrección es:{" "}
                <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-800">
                  {reto.correccion}
                </code>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Acciones */}
      <div className="flex gap-2">
        {!respondido && (
          <button
            onClick={verificar}
            disabled={!seleccionada}
            className="flex-1 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-40"
          >
            Verificar respuesta
          </button>
        )}
        {respondido && opcionElegida?.esCorrecta && !esUltimoNivel && (
          <button
            onClick={() => irAlNivel(nivelIdx + 1)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors"
          >
            Siguiente nivel
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
        {respondido && opcionElegida?.esCorrecta && esUltimoNivel && (
          <button
            onClick={() => irAlNivel(0)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            ¡Completado! Volver al inicio
          </button>
        )}
        {respondido && !opcionElegida?.esCorrecta && (
          <button
            onClick={reiniciar}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-700 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Intentar de nuevo
          </button>
        )}
      </div>

      {/* Concepto */}
      <details className="group">
        <summary className="cursor-pointer text-xs text-slate-500 hover:text-orange-600 font-medium select-none">
          ¿Qué es un bug lógico?
        </summary>
        <div className="mt-2 p-3 bg-orange-50 rounded-lg text-xs text-orange-900 leading-relaxed">
          Un <strong>bug lógico</strong> es un error en el que el código se
          ejecuta sin fallar, pero produce un resultado incorrecto. Es el tipo de
          error más difícil de detectar porque no genera mensajes de error — solo
          resultados equivocados. La depuración (debugging) es la habilidad de
          encontrarlos sistemáticamente.
        </div>
      </details>
    </div>
  );
}
