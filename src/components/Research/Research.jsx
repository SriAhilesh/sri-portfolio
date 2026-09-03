import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Binary, ShieldCheck, Microscope, ArrowUpRight } from 'lucide-react';
import { researchData } from '../../data/research';
import { Container, SectionHeader } from '../common';

export default function Research() {
  return (
    <section id="research" className="py-20 bg-[#0d111a] relative border-t border-slate-800/80">
      <Container>
        <SectionHeader
          eyebrow="ACADEMIC & INNOVATION"
          title="Research & Publications"
          subtitle="Privacy-preserving federated clinical AI and domain-adapted scientific NLP verification pipelines."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchData.map((item, index) => {
            const isPatent = item.statusBadge?.includes('Patent');

            return (
              <motion.div
                key={item.id || item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative p-6 sm:p-8 rounded-2xl bg-[#111622] border transition-all duration-300 shadow-xl flex flex-col justify-between ${
                  isPatent
                    ? 'border-purple-500/30 bg-gradient-to-b from-[#131726] to-[#0f131f]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Status Badge & Patent Identifier */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono-tech ${
                      isPatent
                        ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                        : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}>
                      <Microscope className="w-3.5 h-3.5" />
                      <span>{item.statusBadge}</span>
                    </span>

                    {item.applicationNo && (
                      <span className="text-xs font-mono-tech text-slate-400">
                        {item.applicationNo}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Accuracy Metric Spotlight */}
                  <div className="my-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider block">
                        {item.metricLabel}
                      </span>
                      <span className="text-xs text-slate-400 font-mono-tech">Verified Empirical Result</span>
                    </div>
                    <div className="text-3xl font-extrabold font-mono-tech text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      {item.metricHighlight}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack & Key Takeaway */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 space-y-3">
                  <div className="text-[11px] text-slate-400 italic">
                    "{item.keyTakeaway}"
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
