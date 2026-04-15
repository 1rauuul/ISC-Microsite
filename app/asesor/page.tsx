"use client";

import { useState } from "react";
import { Send, Bot, User, Sparkles, BookOpen, Calendar, HelpCircle } from "lucide-react";

const sugerencias = [
  { icono: BookOpen, texto: "¿Qué materias se ven en ISC?" },
  { icono: Calendar, texto: "¿Cuándo son los exámenes de admisión?" },
  { icono: HelpCircle, texto: "¿Necesito saber programar para entrar?" },
];

const conversacionInicial = [
  {
    tipo: "bot",
    mensaje:
      "¡Hola! Soy el asesor virtual de ISC. Estoy aquí para responder todas tus preguntas sobre la carrera de Ingeniería en Sistemas Computacionales. ¿En qué puedo ayudarte hoy?",
    hora: "10:00",
  },
  {
    tipo: "bot",
    mensaje:
      "Puedo orientarte sobre: retícula, proceso de admisión, perfil de egreso, áreas de especialidad y mucho más. 🚀",
    hora: "10:00",
  },
];

export default function AsesorPage() {
  const [mensajes, setMensajes] = useState(conversacionInicial);
  const [input, setInput] = useState("");

  const enviarMensaje = (texto?: string) => {
    const msg = texto ?? input;
    if (!msg.trim()) return;

    const hora = new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });

    setMensajes((prev) => [
      ...prev,
      { tipo: "user", mensaje: msg, hora },
    ]);

    setTimeout(() => {
      setMensajes((prev) => [
        ...prev,
        {
          tipo: "bot",
          mensaje:
            "Gracias por tu pregunta. Esta es una demostración visual del asesor IA. En la versión funcional, recibirás respuestas precisas sobre ISC en tiempo real. Por ahora, te invito a explorar las secciones del micrositio o contactarnos por WhatsApp.",
          hora: new Date().toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 shadow-sm px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-slate-900">Asesor ISC</p>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                <span className="text-xs text-violet-600 font-medium">IA</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-xs text-slate-500">En línea · Respuesta inmediata</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {/* Suggestions */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {sugerencias.map(({ icono: Icon, texto }) => (
              <button
                key={texto}
                onClick={() => enviarMensaje(texto)}
                className="flex items-center gap-2.5 p-3 bg-white border border-slate-200 hover:border-primary-300 hover:bg-primary-50 rounded-xl text-left transition-all group"
              >
                <Icon className="w-4 h-4 text-primary-500 flex-shrink-0 group-hover:text-primary" />
                <span className="text-xs font-medium text-slate-600 group-hover:text-primary-dark leading-tight">
                  {texto}
                </span>
              </button>
            ))}
          </div>

          {mensajes.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.tipo === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.tipo === "bot"
                    ? "bg-gradient-to-br from-primary to-secondary"
                    : "bg-slate-200"
                }`}
              >
                {msg.tipo === "bot" ? (
                  <Bot className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-slate-600" />
                )}
              </div>
              <div className={`max-w-[75%] ${msg.tipo === "user" ? "items-end" : ""} flex flex-col`}>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.tipo === "bot"
                      ? "bg-white border border-slate-100 text-slate-700 rounded-tl-sm shadow-sm"
                      : "bg-primary text-white rounded-tr-sm"
                  }`}
                >
                  {msg.mensaje}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.hora}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-slate-100 px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1 border border-slate-200 rounded-2xl px-4 py-3 focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100 transition-all bg-white">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    enviarMensaje();
                  }
                }}
                placeholder="Escribe tu pregunta sobre ISC..."
                rows={1}
                className="w-full text-sm outline-none text-slate-700 placeholder-slate-400 resize-none"
              />
            </div>
            <button
              onClick={() => enviarMensaje()}
              className="w-12 h-12 rounded-2xl bg-primary hover:bg-primary-dark flex items-center justify-center flex-shrink-0 transition-colors shadow-sm"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-center">
            Asesor IA · Respuestas de orientación vocacional sobre ISC
          </p>
        </div>
      </div>
    </div>
  );
}
