import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/resume';

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const project = projects[0];
  if (!project) return null;

  return (
    <SectionWrapper id="projects">
      <p className="section-title">Projects</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">项目经历</h2>

      <div className="card overflow-hidden glow-rust">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-border-subtle">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-1">
                {project.name}
              </h3>
              <p className="text-text-secondary">{project.subtitle}</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border-subtle text-sm text-text-secondary hover:text-text-primary hover:border-border transition-colors"
            >
              <HiExternalLink size={16} />
              View on GitHub
            </a>
          </div>

          <p className="mt-4 text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono bg-accent-rust/10 text-accent-rust border border-accent-rust/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modules */}
        <div className="p-6 sm:p-8">
          <h4 className="font-semibold text-text-primary mb-5">实现模块</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.modules.slice(0, expanded ? project.modules.length : 4).map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="card p-5 !bg-bg-elevated"
              >
                <h5 className="font-mono text-sm font-semibold text-accent-rust mb-3">
                  {mod.title}
                </h5>
                <ul className="space-y-2">
                  {mod.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-text-muted mt-1.5 block w-1 h-1 rounded-full bg-text-muted shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Expand/collapse button */}
          {project.modules.length > 4 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-6 w-full py-3 rounded-lg border border-border-subtle text-sm text-text-muted hover:text-text-secondary hover:border-border transition-colors"
            >
              {expanded ? '收起' : `展开全部 ${project.modules.length} 个模块`}
            </button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
