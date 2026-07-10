import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { csFoundation } from '../data/resume';

const layerColors = [
  'border-accent-rust/40 bg-accent-rust/5',
  'border-accent-gold/40 bg-accent-gold/5',
  'border-accent-purple/40 bg-accent-purple/5',
  'border-accent-blue/40 bg-accent-blue/5',
  'border-accent-green/40 bg-accent-green/5',
  'border-border/40 bg-bg-card/50',
];

export default function CSFoundation() {
  return (
    <SectionWrapper id="foundation">
      <p className="section-title">CS Foundation</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">计算机科学基础</h2>
      <p className="text-text-muted mb-10 max-w-xl">
        自底向上的学习路径——从硬件到软件，理解每一层如何工作
      </p>

      <div className="space-y-3">
        {csFoundation.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-xl border ${layerColors[i]} transition-all duration-300 hover:border-opacity-80`}
          >
            {/* Layer label */}
            <div className="shrink-0 w-28 sm:w-36">
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                {layer.label}
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-border-subtle" />

            {/* Items */}
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md text-sm font-mono text-text-secondary bg-bg/50 border border-border-subtle"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
