import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Server, Cloud, ShieldCheck, Database, GitBranch, Terminal, Activity } from 'lucide-react';

export default function TechnicalVisual() {
  const [activeLayer, setActiveLayer] = useState(null);

  const systemLayers = [
    {
      id: 'ai',
      title: 'AI / ML Layer',
      subtitle: 'Models & Inference Systems',
      icon: Cpu,
      accent: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-400',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
      techs: ['PyTorch', 'SciBERT', 'LLMs', 'ResNet-50', 'Federated Learning'],
      metrics: '96% & 77.2% Accuracy'
    },
    {
      id: 'software',
      title: 'Software & Application Layer',
      subtitle: 'Full-Stack Services & APIs',
      icon: Server,
      accent: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-400',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      techs: ['Java', 'React.js', 'Node.js', 'REST APIs', 'MySQL'],
      metrics: '5+ Enterprise Apps'
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure Layer',
      subtitle: 'DevOps & Microservices',
      icon: Cloud,
      accent: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-400',
      badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      techs: ['AWS', 'Docker', 'GitHub Actions', 'Jenkins', 'Nginx'],
      metrics: '10+ Microservices'
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative technical backdrop box */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 blur-xl opacity-50" />

      <div className="relative rounded-2xl bg-[#0d111a] border border-slate-800 p-5 sm:p-6 shadow-2xl overflow-hidden">
        {/* Top visual header strip */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80 font-mono-tech text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-semibold tracking-wider uppercase">SYSTEM ARCHITECTURE MATRIX</span>
          </div>
          <div className="flex items-center space-x-3 text-[11px] text-slate-400">
            <span className="hidden sm:inline-block">PIPELINE: ACTIVE</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">v2.6.0</span>
          </div>
        </div>

        {/* Stack Layers */}
        <div className="space-y-4">
          {systemLayers.map((layer, index) => {
            const Icon = layer.icon;
            const isHovered = activeLayer === layer.id;

            return (
              <React.Fragment key={layer.id}>
                {/* Node Layer Box */}
                <motion.div
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className={`relative p-4 rounded-xl border transition-all duration-300 bg-slate-900/60 backdrop-blur-sm cursor-pointer ${
                    isHovered
                      ? `bg-gradient-to-r ${layer.accent} shadow-lg shadow-black/60 border-slate-600`
                      : 'border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-lg bg-slate-950 border border-slate-800 ${layer.accent.split(' ').pop()}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-bold text-slate-100 tracking-tight">{layer.title}</h4>
                          <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded border ${layer.badgeColor}`}>
                            {layer.metrics}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">{layer.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/40">
                    {layer.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Animated Data Flow Connector Arrow (between layers) */}
                {index < systemLayers.length - 1 && (
                  <div className="relative py-1 flex items-center justify-center">
                    <div className="w-full h-px bg-slate-800/80 relative">
                      <motion.div
                        animate={{
                          x: ['0%', '100%'],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.4
                        }}
                        className="absolute -top-1 w-2 h-2 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/80"
                      />
                    </div>
                    <div className="absolute px-3 bg-[#0d111a] text-[10px] font-mono-tech text-slate-400 flex items-center space-x-1 border border-slate-800 rounded-full py-0.5">
                      <GitBranch className="w-3 h-3 text-cyan-400" />
                      <span>DATA PIPELINE</span>
                      <span className="text-cyan-400 font-bold">↓</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* System Terminal Status Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
          <div className="flex items-center space-x-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>ORCHESTRATION: SYNCED</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-400">
            <span>AWS ECS</span>
            <span>•</span>
            <span>REST API</span>
            <span>•</span>
            <span>PyTorch</span>
          </div>
        </div>
      </div>
    </div>
  );
}
