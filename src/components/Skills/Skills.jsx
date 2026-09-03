import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Cpu, Wrench, Terminal, Layers } from 'lucide-react';
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
          subtitle="Core engineering domains, cloud infrastructure platforms, and AI/ML model deployment stacks."
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
                className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#111622] to-[#0d111a] border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-cyan-500/5"
              >
                {/* Subtle Header */}
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
                        {group.skills.length} core technologies
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono-tech text-slate-200 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-slate-800/50 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
