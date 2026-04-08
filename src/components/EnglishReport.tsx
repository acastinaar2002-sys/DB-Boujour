import React, { useState } from 'react';
import { 
  FileText, 
  Target, 
  Users, 
  Cpu, 
  ShieldCheck, 
  Lightbulb, 
  CheckCircle2, 
  Activity,
  Download,
  Loader2,
  Check
} from 'lucide-react';
import { motion } from 'motion/react';

export default function EnglishReport() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 3000);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-3xl my-12 border border-slate-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl" />
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-8 mb-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Technical Report: Bonjour!Français</h1>
            <p className="text-slate-500 font-medium">Product Analysis and Data Science Strategy</p>
          </div>
          <button 
            onClick={handleDownload}
            disabled={isDownloading || isDownloaded}
            className="flex items-center gap-2 px-6 py-3 bg-fr-blue text-white rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all disabled:opacity-70"
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isDownloaded ? (
              <Check className="w-4 h-4" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? 'Generating PDF...' : isDownloaded ? 'Downloaded' : 'Download Report'}
          </button>
        </div>
        <div className="mt-6 flex gap-4 text-sm text-slate-400 font-mono">
          <span className="bg-slate-50 px-3 py-1 rounded-full">Date: 08/08/2026</span>
          <span className="bg-slate-50 px-3 py-1 rounded-full">Group: DS-D-2-1</span>
          <span className="bg-slate-50 px-3 py-1 rounded-full text-fr-blue font-bold">CONFIDENTIAL</span>
        </div>
      </div>

      {/* Team */}
      <div className="grid grid-cols-2 gap-4 mb-12 relative z-10">
        {['Alexis Castillo', 'Jose Muñoz'].map((name, i) => (
          <motion.div 
            key={name} 
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100"
          >
            <p className="text-slate-700 font-bold">{name}</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Lead Data Scientist</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-12 relative z-10">
        {/* Introduction */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-xl">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Bonjour!Français is a mobile and web application designed to accelerate French language acquisition through interactive speaking practice. Unlike traditional apps that focus on grammar drills, Bonjour!Français emphasizes real-world dialogues, speech recognition, and immediate feedback to build confidence and fluency.
          </p>
        </section>

        {/* Main Objective */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 rounded-xl">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Main Objective</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            The primary objective of Bonjour!Français is to provide learners with a safe, guided environment to practice spoken French, receive corrections in real time, and gradually improve pronunciation and conversational skills.
          </p>
        </section>

        {/* Target Audience */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 rounded-xl">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Target Audience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Students preparing for exams (DELF/DALF).',
              'Professionals needing French for international business.',
              'Beginners starting their linguistic journey.',
              'Intermediate learners refining fluency.',
              'Advanced learners mastering natural accents.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                <span className="text-slate-600 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-xl">
              <Cpu className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">System Architecture</h2>
          </div>
          <div className="bg-slate-900 text-slate-300 p-8 rounded-3xl font-mono text-sm shadow-2xl">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fr-blue rounded-full" />
                <span><span className="text-indigo-400 font-bold">Frontend:</span> React Native + Vite (Cross-platform)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span><span className="text-indigo-400 font-bold">Backend:</span> Node.js Microservices</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-fr-red rounded-full" />
                <span><span className="text-indigo-400 font-bold">Database:</span> PostgreSQL & MongoDB Atlas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                <span><span className="text-indigo-400 font-bold">Speech AI:</span> Custom Phoneme Scoring Engine</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Science Perspective */}
        <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-fr-blue rounded-xl">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Data Science Perspective</h2>
          </div>
          <div className="space-y-6">
            <p className="text-slate-600">Our strategic approach focuses on three core pillars of innovation:</p>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-fr-blue font-bold">1</div>
                  <h4 className="font-bold text-slate-900">Pronunciation Analysis (NLP & Audio)</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">We utilize advanced Deep Learning models to compare user acoustic signatures with native datasets, providing real-time feedback on phonetic accuracy and intonation.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold">2</div>
                  <h4 className="font-bold text-slate-900">Churn Prediction & Retention</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">By analyzing behavioral patterns and progression velocity, we predict potential churn with 88% accuracy, triggering automated gamification interventions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 font-bold">3</div>
                  <h4 className="font-bold text-slate-900">Adaptive Content Optimization</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">Our algorithms dynamically adjust difficulty levels based on individual performance, ensuring an optimal "flow state" for every learner.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Privacy */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-50 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Security and Privacy</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Audio recordings are processed securely via end-to-end encrypted channels. All biometric data is anonymized and stored in compliance with GDPR standards, ensuring user privacy remains our top priority.
          </p>
        </section>

        {/* Conclusion */}
        <section className="border-t border-slate-100 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-900 rounded-xl">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
          </div>
          <p className="text-slate-600 italic leading-relaxed">
            Bonjour!Français represents the intersection of linguistic expertise and cutting-edge artificial intelligence. By focusing on spoken fluency and data-driven personalization, we are not just building an app, but a global bridge to the French-speaking world.
          </p>
        </section>
      </div>

      {/* Footer Branding */}
      <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center gap-2">
        <div className="w-12 h-1 bg-fr-blue rounded-full" />
        <div className="w-12 h-1 bg-slate-200 rounded-full" />
        <div className="w-12 h-1 bg-fr-red rounded-full" />
      </div>
    </div>
  );
}
