import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, ExternalLink, FileText } from 'lucide-react';
import { researchData } from '../../data/research';
import { Container, SectionHeader } from '../common';

export default function Research() {
  return (
    <section id="research" className="py-20 bg-[#0d111a] relative border-t border-slate-800/80">
      <Container>
        <SectionHeader
          eyebrow="ACADEMIC & INNOVATION"
          title="Research & Publications"
          subtitle="Explainable medical deep learning, privacy-preserving federated AI, and scientific claim verification."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.map((item, index) => {
            const isPatent = item.statusBadge?.includes('Patent');
            const isPublishedPaper = item.statusBadge?.includes('Conference');

            let badgeStyle = "bg-cyan-500/10 text-cyan-300 border-cyan-500/30";
            if (isPatent) {
              badgeStyle = "bg-purple-500/10 text-purple-300 border-purple-500/30";
            } else if (isPublishedPaper) {
              badgeStyle = "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
            }

            return (
              <motion.div
                key={item.id || item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#111622] border transition-all duration-300 shadow-xl flex flex-col justify-between ${
                  isPatent
                    ? 'border-purple-500/30 bg-gradient-to-b from-[#131726] to-[#0f131f]'
                    : isPublishedPaper
                    ? 'border-emerald-500/30 bg-gradient-to-b from-[#111c20] to-[#0f131f]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Status Badge & Patent Identifier */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono-tech border ${badgeStyle}`}>
                      <Microscope className="w-3.5 h-3.5" />
                      <span>{item.statusBadge}</span>
                    </span>

                    {item.applicationNo && (
                      <span className="text-[11px] font-mono-tech text-slate-400">
                        {item.applicationNo}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Accuracy Metric Spotlight (if present) */}
                  {item.metricHighlight && (
                    <div className="my-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-wider block">
                          {item.metricLabel}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono-tech">
                          {item.secondaryMetric || "Verified Metric"}
                        </span>
                      </div>
                      <div className="text-2xl font-extrabold font-mono-tech text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                        {item.metricHighlight}
                      </div>
                    </div>
                  )}

                  {/* Description - Same body font & text styling as Projects section */}
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tech Stack & Proof Link Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 space-y-3">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Clickable Proof / Certificate Link (if provided) */}
                  {item.proofUrl && (
                    <div className="pt-1">
                      <a
                        href={item.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View document proof for ${item.title}`}
                        className="inline-flex items-center space-x-1.5 text-xs font-mono-tech px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.linkText || "View Proof ↗"}</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
