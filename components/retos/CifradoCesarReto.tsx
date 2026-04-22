"use client";

import { useState } from "react";
import { RotateCcw, Lock, Unlock, ChevronLeft, ChevronRight } from "lucide-react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function cesarShift(text: string, shift: number, decode = false): string {
  const s = decode ? (26 - shift) % 26 : shift;
  return text
    .toUpperCase()
    .split("")
    .map((ch) => {
      const idx = ALPHABET.indexOf(ch);
      if (idx === -1) return ch;
      return ALPHABET[(idx + s) % 26];
    })
    .join("");
}

const DESAFIOS = [
  {
    encoded: "LQJHQLHULH HQ VLVWHPDV",
    decoded: "INGENIERIA EN SISTEMAS",
    shift: 3,
  },
  {
    encoded: "UWTLWFRFHNTS",
    decoded: "PROGRAMACION",
    shift: 5,
  },
  {
    encoded: "JVTWBAHKVYH",
    decoded: "COMPUTADORA",
    shift: 7,
  },
];

export default function CifradoCesarReto() {
  const [desafioIdx, setDesafioIdx] = useState(0);
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState<"cifrar" | "descifrar">("cifrar");
  const [showAnswer, setShowAnswer] = useState(false);
  const [userDecoded, setUserDecoded] = useState("");

  const desafio = DESAFIOS[desafioIdx];
  const result = input ? cesarShift(input, shift, mode === "descifrar") : "";

  const checkAnswer = () => setShowAnswer(true);

  const reset = () => {
    setInput("");
    setUserDecoded("");
    setShowAnswer(false);
  };

  const cambiarDesafio = (idx: number) => {
    setDesafioIdx(idx);
    setUserDecoded("");
    setShowAnswer(false);
  };

  const esCorrecto =
    userDecoded.toUpperCase().replace(/\s+/g, " ").trim() === desafio.decoded;

  return (
    <div className="space-y-6">
      {/* Selector de desafíos */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => cambiarDesafio(Math.max(0, desafioIdx - 1))}
          disabled={desafioIdx === 0}
          className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {DESAFIOS.map((_, i) => (
          <button
            key={i}
            onClick={() => cambiarDesafio(i)}
            className={`w-8 h-8 rounded-full text-xs font-bold transition-colors ${
              i === desafioIdx
                ? "bg-violet-600 text-white"
                : "bg-slate-100 text-slate-500 hover:bg-violet-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            cambiarDesafio(Math.min(DESAFIOS.length - 1, desafioIdx + 1))
          }
          disabled={desafioIdx === DESAFIOS.length - 1}
          className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        <span className="text-xs text-slate-400 ml-auto">
          Desafío {desafioIdx + 1} / {DESAFIOS.length}
        </span>
      </div>

      {/* Reto principal */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
        <p className="text-xs font-semibold text-violet-700 mb-2 flex items-center gap-1">
          <Lock className="w-3.5 h-3.5" /> Mensaje cifrado (shift = {desafio.shift})
        </p>
        <p className="font-mono text-lg font-bold text-violet-900 tracking-widest mb-3 break-all">
          {desafio.encoded}
        </p>
        <p className="text-xs text-slate-500 mb-3">
          ¿Puedes descifrar este mensaje? Escribe tu respuesta:
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={userDecoded}
            onChange={(e) => {
              setUserDecoded(e.target.value);
              setShowAnswer(false);
            }}
            placeholder="Escribe el mensaje descifrado..."
            className="w-full sm:flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 font-mono uppercase"
          />
          <button
            onClick={checkAnswer}
            disabled={!userDecoded.trim()}
            className="w-full sm:w-auto px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-40"
          >
            Verificar
          </button>
        </div>

        {showAnswer && (
          <div
            className={`mt-3 p-3 rounded-lg text-sm font-medium flex items-start gap-2 ${
              esCorrecto
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {esCorrecto ? (
              <>
                <Unlock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  ¡Correcto! El mensaje era:{" "}
                  <span className="font-mono">{desafio.decoded}</span>
                  {desafioIdx < DESAFIOS.length - 1 && (
                    <button
                      onClick={() => cambiarDesafio(desafioIdx + 1)}
                      className="ml-2 text-xs font-bold text-green-700 underline underline-offset-2 hover:text-green-900"
                    >
                      Siguiente desafío →
                    </button>
                  )}
                </span>
              </>
            ) : (
              <>
                <Lock className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  No es correcto. Cada letra se desplaza {desafio.shift}{" "}
                  posiciones hacia atrás. La respuesta es:{" "}
                  <span className="font-mono text-red-900">{desafio.decoded}</span>
                </span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Herramienta libre */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <p className="text-sm font-semibold text-slate-800 mb-3">
          Practica tu propio cifrado
        </p>

        <div className="flex flex-wrap gap-3 mb-3 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Modo:</span>
            {(["cifrar", "descifrar"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setInput("");
                }}
                className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors capitalize ${
                  mode === m
                    ? "bg-violet-600 text-white border-violet-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-violet-300"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">
              Desplazamiento:
            </span>
            <input
              type="range"
              min={1}
              max={25}
              value={shift}
              onChange={(e) => setShift(Number(e.target.value))}
              className="w-24 accent-violet-600"
            />
            <span className="text-xs font-bold text-violet-700 w-4">{shift}</span>
          </div>
          <button
            onClick={reset}
            className="ml-auto text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === "cifrar"
              ? "Escribe un mensaje para cifrar..."
              : "Pega un mensaje cifrado para descifrar..."
          }
          rows={2}
          className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 font-mono resize-none"
        />

        {result && (
          <div className="mt-2 bg-violet-50 rounded-lg px-3 py-2">
            <p className="text-[10px] text-violet-500 font-semibold mb-0.5">
              RESULTADO:
            </p>
            <p className="font-mono text-sm font-bold text-violet-900 tracking-wider break-all">
              {result}
            </p>
          </div>
        )}
      </div>

      {/* Tabla de referencia */}
      <details className="group">
        <summary className="cursor-pointer text-xs text-slate-500 hover:text-violet-600 font-medium select-none">
          Ver tabla de desplazamiento (shift {shift})
        </summary>
        <div className="mt-2 overflow-x-auto">
          <table className="text-[10px] font-mono border-collapse w-full">
            <tbody>
              <tr>
                <td className="py-1 pr-2 text-slate-400 font-bold">Original</td>
                {ALPHABET.split("").map((l) => (
                  <td
                    key={l}
                    className="px-0.5 py-1 text-center text-slate-600 border border-slate-100"
                  >
                    {l}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-1 pr-2 text-violet-500 font-bold">Cifrada</td>
                {ALPHABET.split("").map((l) => (
                  <td
                    key={l}
                    className="px-0.5 py-1 text-center text-violet-700 font-semibold border border-violet-100 bg-violet-50"
                  >
                    {cesarShift(l, shift)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
