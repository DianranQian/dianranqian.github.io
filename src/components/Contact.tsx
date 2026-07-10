import { HiMail, HiGlobe } from 'react-icons/hi';
import { VscGithub } from 'react-icons/vsc';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/resume';

const contactItems = [
  {
    icon: HiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: VscGithub,
    label: 'GitHub',
    value: personalInfo.github.replace('https://', ''),
    href: personalInfo.github,
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <p className="section-title">Contact</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">联系方式</h2>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
        {contactItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 flex items-center gap-4 hover:border-accent-rust/40 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-bg-elevated border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-accent-rust group-hover:border-accent-rust/30 transition-colors">
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted mb-0.5">{item.label}</p>
              <p className="text-sm text-text-secondary font-mono group-hover:text-text-primary transition-colors">
                {item.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
