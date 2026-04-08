import React from 'react';
import { FileText, Target, Users, Cpu, ShieldCheck, Lightbulb, CheckCircle2, Activity } from 'lucide-react';

export default function EnglishReport() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-3xl my-12 border border-slate-100">
      {/* Header */}
      <div className="border-b border-slate-100 pb-8 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Technical Report: Bonjour!Français</h1>
            <p className="text-slate-500 font-medium">Product Analysis and Data Science Strategy</p>
          </div>
          <div className="text-right text-sm text-slate-400">
            <p>Date: 08/08/2026</p>
            <p>Group: DS-D-2-1</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {['Alexis Castillo', 'Jose Muñoz'].map((name) => (
          <div key={name} className="bg-slate-50 p-4 rounded-xl text-center">
            <p className="text-slate-700 font-semibold">{name}</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">Data Scientist</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
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
            <div className="p-2 bg-emerald-50 rounded-lg">
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
            <div className="p-2 bg-amber-50 rounded-lg">
              <Users className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Target Audience</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Students preparing for exams or exchange programs.',
              'Professionals needing French for business or travel.',
              'Beginners who want to start learning French in a practical way.',
              'Intermediate learners aiming to refine pronunciation and fluency.',
              'Advanced learners seeking mastery of accent and natural conversation.'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5" />
                <span className="text-slate-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* System Architecture */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Cpu className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">System Architecture</h2>
          </div>
          <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl font-mono text-sm">
            <ul className="space-y-2">
              <li><span className="text-indigo-400">Frontend:</span> React Native (Android/iOS/Desktop)</li>
              <li><span className="text-indigo-400">Backend:</span> Node.js with RESTful APIs</li>
              <li><span className="text-indigo-400">Database:</span> PostgreSQL (Lessons) & MongoDB (Audio Logs)</li>
              <li><span className="text-indigo-400">Speech AI:</span> Google Speech-to-Text API with custom phoneme scoring</li>
            </ul>
          </div>
        </section>

        {/* Data Science Perspective */}
        <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Data Science Perspective</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <p>As data scientists, our focus is centered on three strategic pillars:</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <h4 className="font-bold text-blue-800">1. Pronunciation Analysis (NLP & Audio)</h4>
                <p className="text-sm mt-1">We use deep learning models to compare the user's acoustic footprint with native speakers, generating a score from 1 to 10 based on phonetic accuracy.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <h4 className="font-bold text-blue-800">2. Churn Prediction (Retention)</h4>
                <p className="text-sm mt-1">We identify abandonment patterns by analyzing usage frequency and level progression, allowing proactive interventions with gamification.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                <h4 className="font-bold text-blue-800">3. Content Optimization</h4>
                <p className="text-sm mt-1">We analyze which dialogues present the greatest difficulty to dynamically adjust the user's learning curve (Adaptive Learning).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Privacy */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-50 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-rose-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Security and Privacy</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Audio recordings are processed securely via HTTPS. Data is anonymized before storage in MongoDB, ensuring that voice analysis cannot be directly linked to the user's personal identity without authorization.
          </p>
        </section>

        {/* Conclusion */}
        <section className="border-t border-slate-100 pt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-900 rounded-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Conclusion</h2>
          </div>
          <p className="text-slate-600 italic">
            Bonjour!Français combines modern speech recognition technology with gamified learning to create an engaging and effective platform for mastering spoken French. Its modular design guarantees scalability, while future improvements in conversational AI can significantly expand its impact on the global educational market.
          </p>
        </section>
      </div>
    </div>
  );
}
