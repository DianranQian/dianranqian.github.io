import SectionWrapper from './SectionWrapper';
import { aboutText } from '../data/resume';

export default function About() {
  return (
    <SectionWrapper id="about">
      <p className="section-title">About Me</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">技术背景</h2>

      <div className="grid md:grid-cols-[1fr_320px] gap-10">
        {/* Left: paragraphs */}
        <div className="space-y-4 text-text-secondary leading-relaxed">
          {aboutText.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Right: highlights */}
        <div className="space-y-3">
          {aboutText.highlights.map((h, i) => (
            <div key={i} className="card p-5">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
                {h.label}
              </p>
              <p className="text-sm text-text-primary font-mono leading-relaxed">
                {h.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
