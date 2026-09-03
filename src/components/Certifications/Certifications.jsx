import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Users, ShieldCheck, CheckCircle, Compass } from 'lucide-react';
import { certificationsData } from '../../data/certifications';
import { Container, SectionHeader } from '../common';

export default function Certifications() {
  const { certifications, leadership } = certificationsData;

  return (
    <section id="certifications" className="py-20 bg-[#0d111a] relative border-t border-slate-800/80">
      <Container>
        <SectionHeader
          eyebrow="CREDENTIALS & GOVERNANCE"
          title="Certifications & Leadership"
          subtitle="Cloud architectural standards, agentic AI foundations, and campus leadership responsibilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              <span>Technical Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id || cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-mono-tech text-cyan-400 mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{cert.issuer}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-100 leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-mono-tech text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{cert.linkText}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center space-x-1 text-xs font-mono-tech text-slate-400">
                        <span>{cert.linkText}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </span>
                    )}
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>Leadership & Responsibility</span>
            </h3>

            <div className="space-y-4">
              {leadership.map((item, index) => (
                <motion.div
                  key={item.id || item.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-[#111622] border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mt-2">
                    {item.role}
                  </h4>
                  <div className="text-xs font-semibold text-slate-300">
                    {item.organization}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
