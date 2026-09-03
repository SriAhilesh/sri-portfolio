import React from 'react';
import { motion } from 'framer-motion';
import { metricsData } from '../../data/metrics';

import { Container } from '../common';

export default function Metrics() {
  return (
    <section className="py-16 bg-[#0a0d14] relative border-t border-slate-900">
      <Container>
        <div className="rounded-2xl bg-gradient-to-r from-[#111622] via-[#131927] to-[#0e131d] border border-slate-800 p-8 sm:p-10 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-semibold">
              // VERIFIED ENGINEERING METRICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight mt-1">
              Impact & Academic Performance
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {metricsData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono-tech text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-tight">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
