import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Container, SectionHeader } from '../common';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

export function ProjectCard({ project, isFeatured, index }) {
  const githubLink = project.githubUrl || project.github;
  const liveLink = project.liveUrl || project.demo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative rounded-2xl bg-[#111622] border border-slate-800 hover:border-slate-700/90 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-xl ${
        isFeatured
          ? 'lg:col-span-12 bg-gradient-to-br from-[#111622] via-[#131927] to-[#0e131d] border-cyan-500/40 shadow-cyan-500/5'
          : 'lg:col-span-4'
      }`}
    >
      <div>
        {/* Category & Badges Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800">
            {project.category}
          </span>
          {isFeatured && (
            <span className="inline-flex items-center space-x-1 text-xs font-mono-tech px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Flagship Project</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights Bullet List if present */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
            {project.highlights.map((item, hIdx) => (
              <div key={hIdx} className="flex items-center space-x-2 text-xs font-mono-tech text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack & Action Links Footer */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono-tech px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Links Area */}
        {(githubLink || liveLink || project.githubPending) && (
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center space-x-1.5 text-xs font-mono-tech px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700/80 hover:border-cyan-500/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>
            ) : project.githubPending ? (
              <span className="inline-flex items-center space-x-1 text-xs font-mono-tech text-slate-400 px-3 py-1.5 rounded bg-slate-900/60 border border-slate-800">
                <FolderGit2 className="w-3.5 h-3.5 text-slate-400" />
                <span>Repository Private</span>
              </span>
            ) : null}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="inline-flex items-center space-x-1.5 text-xs font-mono-tech px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all shadow-sm shadow-cyan-500/10"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0a0d14] relative border-t border-slate-900">
      <Container>
        <SectionHeader
          eyebrow="PORTFOLIO ARCHITECTURE"
          title="Featured Projects"
          subtitle="Full-stack web applications, distributed resource orchestration, and autonomous AI systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id || project.title}
              project={project}
              isFeatured={Boolean(project.featured)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
