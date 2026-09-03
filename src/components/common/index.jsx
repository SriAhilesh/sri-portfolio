import React from 'react';

export function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-slate-900/90 text-slate-300 border-slate-800',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  };

  const baseStyle = variants[variant] || variants.default;

  return (
    <span className={`inline-flex items-center text-xs font-mono-tech px-2.5 py-1 rounded-md border ${baseStyle} ${className}`}>
      {children}
    </span>
  );
}

export function SectionHeader({ title, subtitle, eyebrow, className = '' }) {
  return (
    <div className={`space-y-2 mb-12 ${className}`}>
      {eyebrow && (
        <div className="text-xs font-mono-tech uppercase tracking-widest text-cyan-400 font-semibold">
          // {eyebrow}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
