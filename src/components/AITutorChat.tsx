import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, RotateCcw, Volume2, MessageSquare, X, AlertTriangle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables.");
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({ apiKey: key });
  }
  return aiInstance;
};

interface Message {
  role: 'user' | 'model';
  text: string;
  corrections?: { original: string; corrected: string; explanation: string }[];
}

export default function AITutorChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! I am your AI French Tutor. How can I help you today? We can practice a conversation, or I can coach you on your grammar." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'conversation' | 'coaching' | 'exam'>('conversation');
  const [apiKeyMissing, setApiKeyMissing] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!process.env.GEMINI_API_KEY) {
      setApiKeyMissing(true);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Demo Mode Fallback
    if (apiKeyMissing) {
      setTimeout(() => {
        const demoResponses: Record<string, string> = {
          "conversation": "C'est une excellente question ! En tant que tuteur IA en mode démo, je peux vous dire que le français est une langue magnifique. (Demo Mode: No API Key found)",
          "coaching": "Je remarque que vous progressez bien. Continuez à pratiquer vos verbes ! (Demo Mode: No API Key found)",
          "exam": "Pour l'examen, concentrez-vous sur la compréhension orale. Bonne chance ! (Demo Mode: No API Key found)"
        };
        
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: demoResponses[mode] || "Je suis en mode démo car aucune clé API n'a été trouvée." 
        }]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const systemInstruction = `
        You are a premium AI French Tutor for the app "Bonjour!Français".
        Current Mode: ${mode}
        
        Rules:
        1. Respond primarily in French, but provide English translations or explanations if the user seems confused or if you are correcting them.
        2. If the user makes a mistake (grammar, vocabulary, register), provide a correction.
        3. Format your response as JSON if possible, or just plain text. 
        Actually, just respond with text, but if you have corrections, put them at the end of your message in a clear format.
        
        Example Correction Format:
        [CORRECTION]
        Original: "Je suis allé au le magasin"
        Corrected: "Je suis allé au magasin"
        Explanation: "In French, 'à + le' becomes 'au'."
      `;

      const ai = getAI();
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction,
        }
      });

      const aiText = response.text || "Désolé, I couldn't process that.";
      
      // Basic parsing for corrections (simulated for this demo)
      const parts = aiText.split('[CORRECTION]');
      const mainText = parts[0].trim();
      const corrections: Message['corrections'] = [];
      
      if (parts.length > 1) {
        const correctionBlock = parts[1];
        const originalMatch = correctionBlock.match(/Original: "(.*?)"/);
        const correctedMatch = correctionBlock.match(/Corrected: "(.*?)"/);
        const explanationMatch = correctionBlock.match(/Explanation: "(.*?)"/);
        
        if (originalMatch && correctedMatch && explanationMatch) {
          corrections.push({
            original: originalMatch[1],
            corrected: correctedMatch[1],
            explanation: explanationMatch[1]
          });
        }
      }

      setMessages(prev => [...prev, { role: 'model', text: mainText, corrections }]);
    } catch (error) {
      console.error("AI Tutor Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-fr-blue p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm">AI French Tutor</h3>
            <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Always Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={mode} 
            onChange={(e) => setMode(e.target.value as any)}
            className="bg-white/10 border-none text-xs rounded-lg px-2 py-1 focus:ring-0 outline-none cursor-pointer hover:bg-white/20 transition-colors"
          >
            <option value="conversation" className="text-slate-900">Conversation</option>
            <option value="coaching" className="text-slate-900">Coaching</option>
            <option value="exam" className="text-slate-900">Exam Prep</option>
          </select>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30 relative"
      >
        {apiKeyMissing && showWarning && (
          <div className="sticky top-0 z-50 mb-4">
            <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl shadow-lg flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 text-xs">Demo Mode Active</h4>
                <p className="text-[10px] text-amber-700 leading-relaxed">
                  GEMINI_API_KEY is missing. The tutor is running in <b>Demo Mode</b> with simulated responses.
                </p>
              </div>
              <button 
                onClick={() => setShowWarning(false)}
                className="p-1 hover:bg-amber-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-amber-500" />
              </button>
            </div>
          </div>
        )}
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-3",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                msg.role === 'user' ? "bg-fr-red text-white" : "bg-fr-blue text-white"
              )}>
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={cn(
                "max-w-[80%] space-y-2",
                msg.role === 'user' ? "items-end" : "items-start"
              )}>
                <div className={cn(
                  "p-4 rounded-2xl text-sm shadow-sm",
                  msg.role === 'user' 
                    ? "bg-fr-red text-white rounded-tr-none" 
                    : "bg-white text-slate-700 border border-slate-100 rounded-tl-none"
                )}>
                  {msg.text}
                  {msg.role === 'model' && (
                    <button className="ml-2 p-1 hover:bg-slate-100 rounded-md transition-colors inline-block align-middle">
                      <Volume2 className="w-3 h-3 text-slate-400" />
                    </button>
                  )}
                </div>
                
                {msg.corrections && msg.corrections.length > 0 && (
                  <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl space-y-2">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-fr-blue uppercase tracking-widest">
                      <Sparkles className="w-3 h-3" /> Correction
                    </div>
                    {msg.corrections.map((cor, j) => (
                      <div key={j} className="text-xs space-y-1">
                        <p className="text-rose-500 line-through opacity-70">{cor.original}</p>
                        <p className="text-emerald-600 font-bold">{cor.corrected}</p>
                        <p className="text-slate-500 italic text-[10px]">{cor.explanation}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-fr-blue text-white flex items-center justify-center animate-pulse">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type in French..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-fr-blue focus:border-transparent outline-none transition-all text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-fr-blue text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {["Order a coffee", "Job interview", "Travel directions"].map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(`Let's practice: ${suggestion}`)}
              className="whitespace-nowrap px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full text-[10px] font-bold transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
