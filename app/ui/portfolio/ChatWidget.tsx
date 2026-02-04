"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageSquare, Send, X } from "lucide-react";

type ChatMsg = { role: "user" | "model"; text: string };

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMsg[]>([
    {
      role: "model",
      text: "Bonjour ! Je suis l'assistant IA d'Ange. Je peux vous parler de ses projets, de ses compétences ou de ses services. Que souhaitez-vous savoir ?",
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isChatOpen]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput.trim();
    setChatInput("");
    setChatHistory((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsChatLoading(true);

    window.setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "model",
          text: "Merci ! (Mode visuel) — On branchera Gemini juste après ✅",
        },
      ]);
      setIsChatLoading(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isChatOpen && (
        <div className="mb-4 w-80 md:w-96 bg-[#2a2a2a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-gradient-to-r from-[#d9885a] to-[#f2c38f] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#1a1a1a]" />
              <div>
                <h3 className="text-[#1a1a1a] font-bold text-sm">Assistant Ange</h3>
                <span className="text-xs text-[#1a1a1a]/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> En ligne
                </span>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-[#1a1a1a]/80 hover:text-[#1a1a1a]">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#1a1a1a]/50">
            {chatHistory.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#d9885a] text-[#1a1a1a] rounded-tr-none"
                      : "bg-[#3a3a3a] text-[#f5f5f5] rounded-tl-none border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isChatLoading && (
              <div className="flex justify-start">
                <div className="bg-[#3a3a3a] p-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#d9885a]" />
                  <span className="text-xs text-[#c9c9c9]">En train d'écrire...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleChatSubmit} className="p-3 bg-[#2a2a2a] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Posez une question..."
              className="flex-1 bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-sm text-[#f5f5f5] focus:outline-none focus:border-[#d9885a]"
            />
            <button
              type="submit"
              disabled={isChatLoading}
              className="p-2 bg-[#d9885a] rounded-xl text-[#1a1a1a] hover:bg-[#f2c38f] disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`w-14 h-14 rounded-full shadow-lg shadow-[#d9885a]/20 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isChatOpen ? "bg-red-500 rotate-90" : "bg-gradient-to-r from-[#d9885a] to-[#f2c38f]"
        }`}
      >
        {isChatOpen ? <X className="w-6 h-6 text-[#f5f5f5]" /> : <MessageSquare className="w-6 h-6 text-[#1a1a1a]" />}
      </button>
    </div>
  );
}
