import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  Globe,
  BookOpen,
  Mic,
  Star,
  AlertTriangle,
  Info,
  ChevronRight,
  Zap,
  BrainCircuit,
  Target,
  Sparkles,
  MessageSquare,
  Play,
  Trophy,
  Lightbulb,
  GraduationCap,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import AITutorChat from './AITutorChat';
import LearningFlow from './LearningFlow';

// Mock Data
const userEvolution = [
  { month: 'Jan', users: 12000, prediction: 12000 },
  { month: 'Feb', users: 15400, prediction: 15400 },
  { month: 'Mar', users: 18900, prediction: 18900 },
  { month: 'Apr', users: 24500, prediction: 24500 },
  { month: 'May', users: 31200, prediction: 31200 },
  { month: 'Jun', users: 42000, prediction: 42000 },
  { month: 'Jul', prediction: 55000 },
  { month: 'Aug', prediction: 72000 },
];

const funnelData = [
  { name: 'Downloads', value: 100, fill: '#0055A4' },
  { name: 'Registration', value: 75, fill: '#3377B6' },
  { name: 'Lesson 1', value: 45, fill: '#6699C8' },
  { name: 'Subscription', value: 12, fill: '#EF4135' },
];

const financialData = [
  { month: 'Jan', revenue: 45000, costs: 32000 },
  { month: 'Feb', revenue: 52000, costs: 34000 },
  { month: 'Mar', revenue: 48000, costs: 35000 },
  { month: 'Apr', revenue: 61000, costs: 38000 },
  { month: 'May', revenue: 67000, costs: 40000 },
  { month: 'Jun', revenue: 75000, costs: 42000 },
];

const pronunciationErrors = [
  { phoneme: 'ʁ', errors: 85, example: 'Paris, Rouge', audio: '#' },
  { phoneme: 'y', errors: 65, example: 'Tu, Vue', audio: '#' },
  { phoneme: 'ø', errors: 55, example: 'Bleu, Deux', audio: '#' },
  { phoneme: 'ɔ̃', errors: 40, example: 'Bon, Maison', audio: '#' },
  { phoneme: 'ɑ̃', errors: 30, example: 'Enfant, Temps', audio: '#' },
  { phoneme: 'ə', errors: 15, example: 'Le, Petit', audio: '#' },
];

const recommendations = [
  { 
    title: "Mastering Nasal Vowels", 
    difficulty: "Intermediate", 
    reason: "Based on your recent errors with /ɔ̃/ and /ɑ̃/",
    type: "Pronunciation"
  },
  { 
    title: "At the Boulangerie", 
    difficulty: "Beginner", 
    reason: "Recommended for real-world dialogue practice",
    type: "Conversation"
  },
  { 
    title: "Subjunctive Mood Basics", 
    difficulty: "Advanced", 
    reason: "You've mastered 90% of indicative tenses",
    type: "Grammar"
  }
];

const culturalQuizzes = [
  { title: "French Etiquette", xp: 150, level: "Mastery 1" },
  { title: "Regions of France", xp: 200, level: "Explorer" },
  { title: "History of the Louvre", xp: 300, level: "Historian" }
];

const churnBreakdown = [
  { reason: "Intermediate Plateau", impact: "45%", color: "bg-fr-red", description: "Users dropping off after Level 2" },
  { reason: "Payment Failures", impact: "25%", color: "bg-amber-500", description: "Expired cards or failed renewals" },
  { reason: "Course Difficulty", impact: "20%", color: "bg-fr-blue", description: "Advanced grammar complexity" },
  { reason: "Other", impact: "10%", color: "bg-slate-400", description: "App inactivity or manual cancellations" },
];

const modelPerformance = [
  { subject: 'Accuracy', A: 92, fullMark: 100 },
  { subject: 'Precision', A: 88, fullMark: 100 },
  { subject: 'Recall', A: 85, fullMark: 100 },
  { subject: 'F1 Score', A: 86, fullMark: 100 },
  { subject: 'Latency', A: 95, fullMark: 100 },
  { subject: 'Robustness', A: 82, fullMark: 100 },
];

const MetricCard = ({ title, value, change, icon: Icon, trend, color = 'blue', delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
  >
    <div className={cn(
      "absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2",
      color === 'blue' ? "bg-fr-blue" : "bg-fr-red"
    )} />
    <div className="flex justify-between items-start mb-4">
      <div className={cn(
        "p-2 rounded-lg transition-colors",
        color === 'blue' ? "bg-blue-50 group-hover:bg-blue-100" : "bg-red-50 group-hover:bg-red-100"
      )}>
        <Icon className={cn(
          "w-6 h-6",
          color === 'blue' ? "text-fr-blue" : "text-fr-red"
        )} />
      </div>
      {change && (
        <div className={cn(
          "flex items-center text-xs font-bold px-2 py-1 rounded-full",
          trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        )}>
          {trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
          {change}
        </div>
      )}
    </div>
    <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
    <p className={cn(
      "text-2xl font-black mt-1",
      color === 'blue' ? "text-fr-blue" : "text-fr-red"
    )}>{value}</p>
  </motion.div>
);

export default function Dashboard() {
  const [selectedPhoneme, setSelectedPhoneme] = React.useState<any>(null);

  return (
    <div className="space-y-8 p-8 bg-slate-50/50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-black text-fr-blue tracking-tight flex items-center gap-2">
            Tableau de Bord <span className="text-slate-400 font-light">|</span> Bonjour!Français
          </h1>
          <p className="text-slate-600 mt-1 font-medium">Intelligent Learning Companion & Analytics</p>
        </motion.div>
        
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-blue-50 border border-blue-100 p-4 rounded-2xl shadow-lg shadow-blue-100/50"
          >
            <Sparkles className="w-6 h-6 text-fr-blue" />
            <div>
              <p className="text-fr-blue font-bold text-sm">AI STATUS</p>
              <p className="text-blue-700 text-xs">Tutor is ready for conversation.</p>
            </div>
          </motion.div>

          {/* Churn Alert */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-red-50 border border-red-100 p-4 rounded-2xl animate-pulse shadow-lg shadow-red-100/50"
          >
            <AlertTriangle className="w-6 h-6 text-fr-red" />
            <div>
              <p className="text-fr-red font-bold text-sm">CHURN ALERT</p>
              <p className="text-red-700 text-xs">Churn rate exceeded 15% in Intermediate level.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Grid: AI Tutor & Key Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MetricCard title="DAU / MAU" value="24.5%" change="+2.1%" icon={Users} trend="up" color="blue" delay={0.1} />
            <MetricCard title="Learning Flow" value="88% Velocity" change="+5.4%" icon={Zap} trend="up" color="blue" delay={0.2} />
          </div>
          <AITutorChat />
        </div>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-50 rounded-xl">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Adaptive Recommendations</h3>
            </div>
            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-fr-blue transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-fr-blue uppercase tracking-widest">{rec.type}</span>
                    <span className="text-[10px] font-bold text-slate-400">{rec.difficulty}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 group-hover:text-fr-blue transition-colors">{rec.title}</h4>
                  <p className="text-[10px] text-slate-500 mt-1">{rec.reason}</p>
                  <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-fr-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    Start Lesson <ChevronRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-fr-blue p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
              <Trophy className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Cultural Mastery</h3>
              <p className="text-blue-100 text-sm mb-6">Master the language through its culture.</p>
              <div className="space-y-4">
                {culturalQuizzes.map((quiz, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div>
                      <p className="text-sm font-bold">{quiz.title}</p>
                      <p className="text-[10px] text-blue-200">{quiz.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-black">+{quiz.xp} XP</p>
                      <button className="text-[10px] font-bold underline mt-1">Take Quiz</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Learning Flow View */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-fr-blue flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> Learning Flow View
          </h2>
        </div>
        <LearningFlow />
      </div>

      {/* Section: Learning and AI Performance */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-fr-blue flex items-center gap-2">
          <BrainCircuit className="w-5 h-5" /> Advanced Pronunciation Analytics
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Enhanced Heatmap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-fr-blue">Phoneme Error Heatmap</h3>
                <p className="text-xs text-slate-400">Click a phoneme for corrective resources</p>
              </div>
              <Mic className="w-5 h-5 text-slate-400" />
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={pronunciationErrors}
                  onClick={(data: any) => data && data.activePayload && setSelectedPhoneme(data.activePayload[0].payload)}
                >
                  <XAxis dataKey="phoneme" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                            <p className="text-sm font-bold text-fr-blue">Phoneme: /{data.phoneme}/</p>
                            <p className="text-xs text-slate-500 mt-1">Error Frequency: {data.errors}%</p>
                            <p className="text-[10px] text-slate-400 italic mt-2">Click to hear examples</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="errors" radius={[10, 10, 0, 0]} className="cursor-pointer">
                    {pronunciationErrors.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.errors > 60 ? '#EF4135' : entry.errors > 40 ? '#f59e0b' : '#0055A4'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <AnimatePresence>
              {selectedPhoneme && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100 relative"
                >
                  <button 
                    onClick={() => setSelectedPhoneme(null)}
                    className="absolute top-2 right-2 p-1 hover:bg-slate-200 rounded-full transition-colors"
                  >
                    <X className="w-3 h-3 text-slate-400" />
                  </button>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900">Corrective Resource: /{selectedPhoneme.phoneme}/</h4>
                      <p className="text-xs text-slate-500 mt-1">Common examples: <span className="font-bold text-fr-blue">{selectedPhoneme.example}</span></p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-fr-blue text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-colors">
                      <Play className="w-3 h-3 fill-current" /> Listen to Native
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-fr-blue mb-6">AI Model Robustness</h3>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={modelPerformance}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} hide />
                  <Radar
                    name="Model A"
                    dataKey="A"
                    stroke="#0055A4"
                    fill="#0055A4"
                    fillOpacity={0.4}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section: Business and Finance */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-fr-blue flex items-center gap-2">
          <DollarSign className="w-5 h-5" /> Business and Finance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-fr-blue mb-6">Revenue vs Monthly Costs</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" name="Revenue" fill="#0055A4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="costs" name="Costs" fill="#EF4135" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-bold text-slate-400 uppercase">Profitability Margin</h3>
                <div className="relative">
                  <button className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-fr-blue">
                    <Info className="w-4 h-4" />
                  </button>
                  
                  {/* Churn Breakdown Tooltip */}
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <h4 className="text-xs font-black text-fr-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-fr-red" /> Churn Breakdown
                    </h4>
                    <div className="space-y-3">
                      {churnBreakdown.map((item, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-[10px] font-bold">
                            <span className="text-slate-600">{item.reason}</span>
                            <span className="text-fr-blue">{item.impact}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: item.impact }}
                              className={cn("h-full rounded-full", item.color)}
                            />
                          </div>
                          <p className="text-[8px] text-slate-400 leading-tight">{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-50">
                      <p className="text-[9px] text-slate-500 italic">
                        * Referencing data from the <span className="font-bold text-fr-blue">Learning Flow View</span> below.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-fr-red">18.4%</span>
                <span className="text-fr-red font-bold text-sm mb-1 flex items-center">
                  <ArrowDownRight className="w-4 h-4" /> Low
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2 italic">Target: 25% for Q4</p>
            </motion.div>

            {/* Cultural Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-fr-blue p-6 rounded-3xl text-white shadow-lg relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Globe className="w-24 h-24" />
              </div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" /> Cultural Notes
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <p className="text-xs font-bold text-blue-200 uppercase">Fact of the Day</p>
                  <p className="text-sm mt-1">French is the official language in 29 countries across 5 continents.</p>
                </div>
                <button className="w-full py-2 bg-white text-fr-blue rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors">
                  See more notes <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
