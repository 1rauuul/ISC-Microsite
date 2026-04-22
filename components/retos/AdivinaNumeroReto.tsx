"use client";

import { useState, useRef } from "react";
import { RotateCcw, TrendingUp, TrendingDown, Target } from "lucide-react";

const NIVELES_DIFICULTAD = [
  { label: "Fácil", rango: 20, maxIntentos: 5 },
  { label: "Normal", rango: 100, maxIntentos: 7 },
  { label: "Difícil", rango: 500, maxIntentos: 10 },
];

type Intento = {
  valor: number;
  resultado: "alto" | "bajo" | "correcto";
};

function nuevoNumero(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export default function AdivinaNumeroReto() {
  const [nivelIdx, setNivelIdx] = useState(1);
  const nivel = NIVELES_DIFICULTAD[nivelIdx];

  const secretoRef = useRef(nuevoNumero(nivel.rango));
  const [, forceUpdate] = useState(0);

  const [intentos, setIntentos] = useState<Intento[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [juegoTerminado, setJuegoTerminado] = useState(false);
  const [ganado, setGanado] = useState(false);
  const [rangoMin, setRangoMin] = useState(1);
  const [rangoMax, setRangoMax] = useState(nivel.rango);

  const inputRef = useRef<HTMLInputElement>(null);

  function reiniciar(nuevoNivelIdx?: number) {
    const idx = nuevoNivelIdx ?? nivelIdx;
    const nv = NIVELES_DIFICULTAD[idx];
    if (nuevoNivelIdx !== undefined) setNivelIdx(nuevoNivelIdx);
    secretoRef.current = nuevoNumero(nv.rango);
    forceUpdate((n) => n + 1);
    setIntentos([]);
    setInputVal("");
    setJuegoTerminado(false);
    setGanado(false);
    setRangoMin(1);
    setRangoMax(nv.rango);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function adivinar() {
    const val = parseInt(inputVal, 10);
    if (isNaN(val) || val < 1 || val > nivel.rango) return;

    const actual = secretoRef.current;
    let resultado: Intento["resultado"];

    if (val === actual) {
      resultado = "correcto";
      setGanado(true);
      setJuegoTerminado(true);
    } else if (val > actual) {
      resultado = "alto";
      setRangoMax((prev) => Math.min(prev, val - 1));
    } else {
      resultado = "bajo";
      setRangoMin((prev) => Math.max(prev, val + 1));
    }

    const nuevosIntentos = [...intentos, { valor: val, resultado: resultado! }];
    setIntentos(nuevosIntentos);
    setInputVal("");

    if (nuevosIntentos.length >= nivel.maxIntentos && resultado !== "correcto") {
      setJuegoTerminado(true);
    }

    setTimeout(() => inputRef.current?.focus(), 50);
  }

  const intentosRestantes = nivel.maxIntentos - intentos.length;
  const porcentajeRango = ((rangoMax - rangoMin + 1) / nivel.rango) * 100;
  const maxPosible = Math.pow(2, nivel.maxIntentos);

  return (
    <div className="space-y-4">
      {/* Selector de dificultad */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-slate-500 font-medium">Dificultad:</span>
        {NIVELES_DIFICULTAD.map((nv, i) => (
          <button
            key={nv.label}
            onClick={() => reiniciar(i)}
            className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
              i === nivelIdx
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-slate-600 border-slate-200 hover:border-green-300"
            }`}
          >
            {nv.label}
          </button>
        ))}
        <span className="text-xs text-slate-400 ml-auto">
          1 – {nivel.rango} · {nivel.maxIntentos} intentos
        </span>
      </div>

      {/* Estado del juego */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        {juegoTerminado ? (
          ganado ? (
            <div>
              <p className="text-2xl mb-1">🎉</p>
              <p className="font-bold text-green-800 text-base">
                ¡Lo lograste en {intentos.length} intento
                {intentos.length !== 1 ? "s" : ""}!
              </p>
              <p className="text-xs text-green-600 mt-1">
                {intentos.length <= nivel.maxIntentos
                  ? "Usaste la estrategia correcta de búsqueda binaria."
                  : ""}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-2xl mb-1">😔</p>
              <p className="font-bold text-red-700 text-base">
                Se acabaron los intentos. El número era{" "}
                <span className="font-mono text-xl">{secretoRef.current}</span>
              </p>
            </div>
          )
        ) : (
          <div>
            <p className="text-xs text-green-700 font-semibold mb-1">
              Estoy pensando en un número del 1 al {nivel.rango}...
            </p>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {Array.from({ length: nivel.maxIntentos }).map((_, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full border-2 text-xs font-bold flex items-center justify-center transition-colors ${
                    i < intentos.length
                      ? intentos[i].resultado === "correcto"
                        ? "bg-green-500 border-green-500 text-white"
                        : intentos[i].resultado === "alto"
                        ? "bg-red-400 border-red-400 text-white"
                        : "bg-blue-400 border-blue-400 text-white"
                      : "border-green-300 text-green-400"
                  }`}
                >
                  {i < intentos.length ? intentos[i].valor : i + 1}
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {intentosRestantes} intento{intentosRestantes !== 1 ? "s" : ""}{" "}
              restante{intentosRestantes !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {/* Rango visual */}
      {!juegoTerminado && intentos.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-xl p-3">
          <p className="text-xs text-slate-500 font-semibold mb-2">
            Rango posible: {rangoMin} — {rangoMax}
          </p>
          <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute h-full bg-green-400 rounded-full transition-all duration-500"
              style={{
                left: `${((rangoMin - 1) / nivel.rango) * 100}%`,
                width: `${porcentajeRango}%`,
              }}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Pista: el número óptimo siempre es la mitad del rango ={" "}
            <span className="font-bold text-slate-600">
              {Math.round((rangoMin + rangoMax) / 2)}
            </span>
          </p>
        </div>
      )}

      {/* Input */}
      {!juegoTerminado && (
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="number"
            min={1}
            max={nivel.rango}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && adivinar()}
            placeholder={`Tu número (1–${nivel.rango})`}
            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 font-mono"
            disabled={juegoTerminado}
          />
          <button
            onClick={adivinar}
            disabled={!inputVal || juegoTerminado}
            className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-40"
          >
            Adivinar
          </button>
        </div>
      )}

      {/* Historial */}
      {intentos.length > 0 && (
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-slate-500">Historial:</p>
          {[...intentos].reverse().map((intento, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border ${
                intento.resultado === "correcto"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : intento.resultado === "alto"
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
            >
              {intento.resultado === "correcto" ? (
                <Target className="w-4 h-4 shrink-0" />
              ) : intento.resultado === "alto" ? (
                <TrendingDown className="w-4 h-4 shrink-0" />
              ) : (
                <TrendingUp className="w-4 h-4 shrink-0" />
              )}
              <span className="font-mono font-bold w-10">{intento.valor}</span>
              <span className="text-xs">
                {intento.resultado === "correcto"
                  ? "¡Correcto!"
                  : intento.resultado === "alto"
                  ? "Demasiado alto"
                  : "Demasiado bajo"}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Botón reiniciar */}
      {juegoTerminado && (
        <button
          onClick={() => reiniciar()}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Nueva partida
        </button>
      )}

      {/* Tip búsqueda binaria */}
      <details className="group">
        <summary className="cursor-pointer text-xs text-slate-500 hover:text-green-600 font-medium select-none">
          ¿Cómo lograrlo siempre en {nivel.maxIntentos} intentos?
        </summary>
        <div className="mt-2 p-3 bg-green-50 rounded-lg text-xs text-green-800 leading-relaxed">
          <strong>Búsqueda binaria:</strong> siempre adivina el número en el
          centro del rango posible. Esto reduce el rango a la mitad en cada
          intento. Con {nivel.maxIntentos} intentos puedes cubrir hasta 2
          <sup>{nivel.maxIntentos}</sup> = {maxPosible} números
          {maxPosible >= nivel.rango
            ? `, más que suficiente para el 1–${nivel.rango}.`
            : "."}
        </div>
      </details>
    </div>
  );
}
