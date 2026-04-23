"use client";

import { useState, useCallback } from "react";
import { RotateCcw, CheckCircle, XCircle, ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

const POTENCIAS = [128, 64, 32, 16, 8, 4, 2, 1];

// Rangos por nivel: [min, max] — ambos inclusive
const RANGOS: [number, number][] = [
  [3, 63],    // básico
  [64, 127],  // intermedio
  [128, 255], // avanzado
];

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decimalABits(n: number): boolean[] {
  return POTENCIAS.map((p) => !!(n & p));
}

function pistaDe(n: number): string {
  const activos = POTENCIAS.filter((p) => n & p);
  if (activos.length === 1) return `${n} = 2^${Math.log2(activos[0])} (solo un bit activo)`;
  return `${n} = ${activos.join(" + ")}`;
}

function generarDesafiosDecBin() {
  return RANGOS.map(([min, max]) => {
    const objetivo = randInt(min, max);
    return { objetivo, pista: pistaDe(objetivo) };
  });
}

function generarDesafiosBinDec() {
  return RANGOS.map(([min, max]) => {
    const n = randInt(min, max);
    return { bits: decimalABits(n), esperado: n };
  });
}

type Modo = "libre" | "dec-a-bin" | "bin-a-dec";

function bitsADecimal(bits: boolean[]): number {
  return bits.reduce((acc, b, i) => acc + (b ? POTENCIAS[i] : 0), 0);
}

export default function BinarioDecimalReto() {
  const [modo, setModo] = useState<Modo>("dec-a-bin");

  // --- Modo Decimal → Binario ---
  const [desafiosDecBin, setDesafiosDecBin] = useState(() => generarDesafiosDecBin());
  const [desafioIdx, setDesafioIdx] = useState(0);
  const [bitsUsuario, setBitsUsuario] = useState<boolean[]>(Array(8).fill(false));
  const [verificado, setVerificado] = useState(false);

  // --- Modo Binario → Decimal ---
  const [desafiosBinDec, setDesafiosBinDec] = useState(() => generarDesafiosBinDec());
  const [desafioBinIdx, setDesafioBinIdx] = useState(0);
  const [respuestaDecimal, setRespuestaDecimal] = useState("");
  const [verificadoBin, setVerificadoBin] = useState(false);

  // --- Modo libre ---
  const [bitsLibres, setBitsLibres] = useState<boolean[]>(Array(8).fill(false));

  const desafio = desafiosDecBin[desafioIdx];
  const desafioBin = desafiosBinDec[desafioBinIdx];

  const barajar = useCallback(() => {
    setDesafiosDecBin(generarDesafiosDecBin());
    setDesafiosBinDec(generarDesafiosBinDec());
    setDesafioIdx(0);
    setDesafioBinIdx(0);
    setBitsUsuario(Array(8).fill(false));
    setRespuestaDecimal("");
    setVerificado(false);
    setVerificadoBin(false);
  }, []);

  const valorUsuario = bitsADecimal(bitsUsuario);
  const esCorrectoDecBin = valorUsuario === desafio.objetivo;
  const esCorrectoBinDec =
    parseInt(respuestaDecimal, 10) === desafioBin.esperado;

  function toggleBit(i: number, arr: boolean[], setArr: (b: boolean[]) => void) {
    const next = [...arr];
    next[i] = !next[i];
    setArr(next);
  }

  function cambiarDesafio(idx: number) {
    setDesafioIdx(idx);
    setBitsUsuario(Array(8).fill(false));
    setVerificado(false);
  }

  function cambiarDesafioBin(idx: number) {
    setDesafioBinIdx(idx);
    setRespuestaDecimal("");
    setVerificadoBin(false);
  }

  return (
    <div className="space-y-5">
      {/* Selector de modo + barajar */}
      <div className="flex flex-wrap items-center gap-2">
        {(["dec-a-bin", "bin-a-dec", "libre"] as Modo[]).map((m) => {
          const label = m === "dec-a-bin" ? "Decimal → Binario" : m === "bin-a-dec" ? "Binario → Decimal" : "Libre";
          return (
            <button
              key={m}
              onClick={() => setModo(m)}
              className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${
                modo === m
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              {label}
            </button>
          );
        })}
        <button
          onClick={barajar}
          title="Nuevos números aleatorios"
          className="ml-auto flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <Shuffle className="w-3 h-3" />
          Barajar
        </button>
      </div>

      {/* ── Modo Decimal → Binario ── */}
      {modo === "dec-a-bin" && (
        <div className="space-y-4">
          {/* Navegador de desafíos */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => cambiarDesafio(Math.max(0, desafioIdx - 1))}
              disabled={desafioIdx === 0}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {desafiosDecBin.map((_, i) => (
              <button
                key={i}
                onClick={() => cambiarDesafio(i)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-colors ${
                  i === desafioIdx
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => cambiarDesafio(Math.min(desafiosDecBin.length - 1, desafioIdx + 1))}
              disabled={desafioIdx === desafiosDecBin.length - 1}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 ml-auto">
              Desafío {desafioIdx + 1} / {desafiosDecBin.length}
            </span>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
            <p className="text-xs font-semibold text-blue-600 mb-1">Convierte este número a binario</p>
            <p className="text-5xl font-black text-blue-900 font-mono">{desafio.objetivo}</p>
          </div>

          <BitGrid
            bits={bitsUsuario}
            onToggle={(i) => {
              toggleBit(i, bitsUsuario, setBitsUsuario);
              setVerificado(false);
            }}
            color="blue"
          />

          <div className="flex items-center justify-between px-1">
            <span className="text-xs text-slate-500">Valor actual:</span>
            <span
              className={`font-mono font-black text-2xl transition-colors ${
                verificado
                  ? esCorrectoDecBin
                    ? "text-green-600"
                    : "text-red-500"
                  : "text-blue-700"
              }`}
            >
              {valorUsuario}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setVerificado(true)}
              disabled={valorUsuario === 0}
              className="flex-1 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40"
            >
              Verificar
            </button>
            <button
              onClick={() => cambiarDesafio(desafioIdx)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {verificado && (
            <div
              className={`flex items-start gap-3 p-4 rounded-xl border ${
                esCorrectoDecBin
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {esCorrectoDecBin ? (
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              )}
              <div className="text-sm">
                {esCorrectoDecBin ? (
                  <>
                    <p className="font-bold text-green-800">¡Correcto!</p>
                    <p className="text-green-700 text-xs mt-0.5">{desafio.pista}</p>
                    {desafioIdx < desafiosDecBin.length - 1 && (
                      <button
                        onClick={() => cambiarDesafio(desafioIdx + 1)}
                        className="mt-2 text-xs font-bold text-green-700 underline underline-offset-2"
                      >
                        Siguiente desafío →
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="font-bold text-red-700">No es correcto aún.</p>
                    <p className="text-red-600 text-xs mt-0.5">
                      Pista: {desafio.pista}
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Modo Binario → Decimal ── */}
      {modo === "bin-a-dec" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => cambiarDesafioBin(Math.max(0, desafioBinIdx - 1))}
              disabled={desafioBinIdx === 0}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {desafiosBinDec.map((_, i) => (
              <button
                key={i}
                onClick={() => cambiarDesafioBin(i)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-colors ${
                  i === desafioBinIdx
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-blue-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => cambiarDesafioBin(Math.min(desafiosBinDec.length - 1, desafioBinIdx + 1))}
              disabled={desafioBinIdx === desafiosBinDec.length - 1}
              className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600 disabled:opacity-30"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-blue-600 mb-3 text-center">
              ¿Cuánto vale este número en decimal?
            </p>
            <BitGrid bits={desafioBin.bits} readonly color="blue" />
          </div>

          <div className="flex gap-2">
            <input
              type="number"
              value={respuestaDecimal}
              onChange={(e) => {
                setRespuestaDecimal(e.target.value);
                setVerificadoBin(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && respuestaDecimal && setVerificadoBin(true)}
              placeholder="Escribe el valor decimal..."
              className="flex-1 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={() => setVerificadoBin(true)}
              disabled={!respuestaDecimal}
              className="px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-40"
            >
              Verificar
            </button>
          </div>

          {verificadoBin && (
            <div
              className={`flex items-start gap-3 p-4 rounded-xl border ${
                esCorrectoBinDec
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {esCorrectoBinDec ? (
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              )}
              <div className="text-sm">
                {esCorrectoBinDec ? (
                  <>
                    <p className="font-bold text-green-800">¡Correcto!</p>
                    {desafioBinIdx < desafiosBinDec.length - 1 && (
                      <button
                        onClick={() => cambiarDesafioBin(desafioBinIdx + 1)}
                        className="mt-1 text-xs font-bold text-green-700 underline underline-offset-2"
                      >
                        Siguiente →
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="font-bold text-red-700">No es correcto.</p>
                    <p className="text-red-600 text-xs mt-0.5">
                      La respuesta es{" "}
                      <span className="font-mono font-bold">{desafioBin.esperado}</span>.
                      Suma las potencias de 2 donde el bit es 1.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Modo libre ── */}
      {modo === "libre" && (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Activa los bits que quieras y observa el valor decimal resultante en tiempo real.
          </p>
          <BitGrid
            bits={bitsLibres}
            onToggle={(i) => toggleBit(i, bitsLibres, setBitsLibres)}
            color="blue"
          />
          <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
            <span className="text-xs font-semibold text-blue-600">Valor decimal:</span>
            <span className="font-mono font-black text-3xl text-blue-800">
              {bitsADecimal(bitsLibres)}
            </span>
          </div>
          <button
            onClick={() => setBitsLibres(Array(8).fill(false))}
            className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Limpiar
          </button>
        </div>
      )}

      {/* Tabla de referencia */}
      <details>
        <summary className="cursor-pointer text-xs text-slate-500 hover:text-blue-600 font-medium select-none">
          Ver tabla de potencias de 2
        </summary>
        <div className="mt-2 overflow-x-auto">
          <table className="text-[11px] font-mono border-collapse w-full">
            <thead>
              <tr>
                {POTENCIAS.map((p) => (
                  <td key={p} className="px-2 py-1 text-center text-blue-600 font-bold border border-blue-100 bg-blue-50">
                    {p}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {POTENCIAS.map((_, i) => (
                  <td key={i} className="px-2 py-1 text-center text-slate-500 border border-slate-100">
                    2<sup>{7 - i}</sup>
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

function BitGrid({
  bits,
  onToggle,
  readonly = false,
  color = "blue",
}: {
  bits: boolean[];
  onToggle?: (i: number) => void;
  readonly?: boolean;
  color?: string;
}) {
  const activeClass =
    color === "blue"
      ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
      : "bg-slate-700 border-slate-700 text-white";

  return (
    <div className="space-y-1">
      {/* Etiquetas de potencias */}
      <div className="grid grid-cols-8 gap-1">
        {POTENCIAS.map((p) => (
          <div key={p} className="text-center text-[9px] text-slate-400 font-mono font-semibold">
            {p}
          </div>
        ))}
      </div>
      {/* Bits */}
      <div className="grid grid-cols-8 gap-1">
        {bits.map((b, i) => (
          <button
            key={i}
            onClick={() => !readonly && onToggle?.(i)}
            disabled={readonly}
            className={`aspect-square rounded-lg border-2 text-sm font-black transition-all ${
              b
                ? activeClass
                : "bg-white border-slate-200 text-slate-300 hover:border-blue-300"
            } ${readonly ? "cursor-default" : "cursor-pointer hover:scale-105 active:scale-95"}`}
          >
            {b ? "1" : "0"}
          </button>
        ))}
      </div>
    </div>
  );
}
