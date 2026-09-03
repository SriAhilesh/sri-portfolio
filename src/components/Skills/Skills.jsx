import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Wrench, Layers } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { Container, SectionHeader } from '../common';

const categoryIcons = {
  Software: Code2,
  Code2: Code2,
  Cloud: Cloud,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0a0d14] relative border-t border-slate-900">
      <Container>
        <SectionHeader
          eyebrow="TECHNICAL CAPABILITIES"
          title="What I Work With"
          subtitle="Core software engineering domains, cloud infrastructure, AI/ML project exposure, and development platforms."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((group, index) => {
            const Icon = categoryIcons[group.iconName] || Layers;

            return (
              <motion.div
                key={group.id || group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#111622] to-[#0d111a] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-100 tracking-tight">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 font-mono-tech">
                          {group.skills.length} technologies & tools
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {group.skills.map((skill) => {
                    const isPrimary = skill.isPrimary;

                    return (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all ${
                          isPrimary
                            ? 'bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-bold shadow-sm shadow-cyan-500/10'
                            : 'bg-slate-900/80 border border-slate-800 text-slate-200 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-slate-800/50'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isPrimary ? 'bg-cyan-400 animate-pulse' : 'bg-cyan-400/80'}`} />
                        <span>{skill.name}</span>
                        {isPrimary && (
                          <span className="text-[10px] uppercase tracking-wider font-semibold text-cyan-400 px-1.5 py-0.2 rounded bg-cyan-950/90 border border-cyan-500/30 ml-1">
                            Primary
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
