import SectionWrapper from './SectionWrapper';
import { skillCategories, type SkillCategory } from '../data/resume';

const levelColors: Record<string, string> = {
  proficient: 'bg-accent-rust/20 text-accent-rust border-accent-rust/30',
  familiar: 'bg-accent-blue/20 text-accent-blue border-accent-blue/30',
  learning: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
};

const levelLabels: Record<string, string> = {
  proficient: '熟练',
  familiar: '了解',
  learning: '学习中',
};

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="card p-6 group">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="font-semibold text-text-primary">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-200 group-hover:border-opacity-60 ${
              levelColors[skill.level || 'familiar']
            }`}
          >
            {skill.name}
            {skill.level && (
              <span className="opacity-50 text-[10px]">
                · {levelLabels[skill.level]}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <p className="section-title">Skills</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">技术栈</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </SectionWrapper>
  );
}
