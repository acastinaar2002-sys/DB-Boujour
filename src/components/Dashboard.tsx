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
  Target
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

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
  { phoneme: 'R', errors: 85 },
  { phoneme: 'U', errors: 65 },
  { phoneme: 'EU', errors: 55 },
  { phoneme: 'ON', errors: 40 },
  { phoneme: 'AN', errors: 30 },
  { phoneme: 'E', errors: 15 },
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
          <p className="text-slate-600 mt-1 font-medium">Profitability analysis and French brand identity.</p>
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

      {/* Section: Users and Adoption */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-fr-blue flex items-center gap-2">
            <Users className="w-5 h-5" /> Users and Adoption
          </h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Real-time Data</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard title="DAU / MAU" value="24.5%" change="+2.1%" icon={Users} trend="up" color="blue" delay={0.1} />
          <MetricCard title="LTV (Life Time Value)" value="$142.50" change="+5.4%" icon={DollarSign} trend="up" color="blue" delay={0.2} />
          <MetricCard title="CAC (Acquisition Cost)" value="$28.10" change="-1.2%" icon={Activity} trend="up" color="blue" delay={0.3} />
          <MetricCard title="Conversion Rate" value="12.4%" change="+0.8%" icon={TrendingUp} trend="up" color="blue" delay={0.4} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-fr-blue mb-6">User Evolution and Predictions</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={userEvolution}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                    cursor={{ stroke: '#0055A4', strokeWidth: 2 }}
                  />
                  <Legend verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px' }} />
                  <Area type="monotone" dataKey="users" name="Real Users" fill="#0055A4" fillOpacity={0.1} stroke="#0055A4" strokeWidth={3} />
                  <Line type="monotone" dataKey="prediction" name="Growth Prediction" stroke="#3377B6" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-fr-blue mb-6">Conversion Funnel</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={funnelData} layout="vertical" margin={{ left: 20 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} width={80} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                    {funnelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section: Learning and AI Performance */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-fr-blue flex items-center gap-2">
          <BrainCircuit className="w-5 h-5" /> Learning and AI Performance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Heatmap simulated with Bar Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-fr-blue">Heatmap: Pronunciation Errors</h3>
              <Mic className="w-5 h-5 text-slate-400" />
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pronunciationErrors}>
                  <XAxis dataKey="phoneme" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="errors" radius={[10, 10, 0, 0]}>
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
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <div className="w-3 h-3 bg-fr-blue rounded-full" /> Low Error
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <div className="w-3 h-3 bg-fr-red rounded-full" /> High Error
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
          >
            <h3 className="text-lg font-bold text-fr-blue mb-6">Model Metrics</h3>
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
            className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
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
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-sm font-bold text-slate-400 uppercase mb-2">Profitability Margin</h3>
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
              className="bg-fr-blue p-6 rounded-2xl text-white shadow-lg relative overflow-hidden group"
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
