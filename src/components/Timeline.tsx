import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { timelineEvents } from '../data/resume';

export default function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <p className="section-title">Timeline</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">学习与开发经历</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-subtle" />

        <div className="space-y-8">
          {timelineEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-14"
            >
              {/* Dot */}
              <div className="absolute left-[11px] top-1.5 w-4 h-4 rounded-full border-2 border-accent-rust bg-bg z-10">
                <div className="absolute inset-1 rounded-full bg-accent-rust animate-glow-pulse" />
              </div>

              {/* Content */}
              <div className="card p-5 sm:p-6">
                <span className="inline-block font-mono text-xs text-accent-rust mb-2 px-2 py-0.5 rounded bg-accent-rust/10">
                  {event.period}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
