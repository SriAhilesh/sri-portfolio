import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Sparkles, Building2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { Container, SectionHeader } from '../common';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experienceData[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-[#0d111a] relative border-t border-slate-800/80">
      <Container>
        <SectionHeader
          eyebrow="CAREER PATHWAY"
          title="Engineering Experience"
          subtitle="Cloud infrastructure provisioning, microservices automation, and enterprise workflow deployments."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12 pl-4 sm:pl-8 md:pl-0">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/80 via-slate-700 to-slate-800 transform md:-translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col md:flex-row items-start"
                >
                  {/* Timeline Center Node Icon */}
                  <div className="absolute left-4 sm:left-8 md:left-1/2 transform -translate-x-1/2 top-1 z-10">
                    <div className="w-9 h-9 rounded-full bg-[#0a0d14] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 group">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                    </div>
                  </div>

                  {/* Left / Right Card Layout Container */}
                  <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}>
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className="group relative p-6 sm:p-7 rounded-2xl bg-[#111622] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl cursor-pointer"
                    >
                      {/* Highlight Badge */}
                      {exp.highlightBadge && (
                        <div className={`mb-3 inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono-tech bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 ${
                          isEven ? 'md:ml-auto' : ''
                        }`}>
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>{exp.highlightBadge}</span>
                        </div>
                      )}

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className={`text-sm font-semibold text-slate-300 mt-0.5 flex items-center space-x-1.5 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Period & Location Metadata */}
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono-tech text-slate-400 mt-2 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400/80" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400/80" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Expandable Bullet Points */}
                      {isExpanded && exp.bullets && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-3 border-t border-slate-800/80 text-left space-y-2"
                        >
                          {exp.bullets.map((bullet, bIdx) => (
                            <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                              <span className="text-cyan-400 mt-1 font-bold">•</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tech Stack Tags */}
                      <div className={`mt-4 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand/Collapse Toggle Button */}
                      <div className={`mt-3 flex items-center text-[11px] font-mono-tech text-cyan-400 group-hover:text-cyan-300 ${
                        isEven ? 'md:justify-end' : ''
                      }`}>
                        <span>{isExpanded ? 'Show less' : 'View details'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5 ml-1" /> : <ChevronDown className="w-3.5 h-3.5 ml-1" />}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
