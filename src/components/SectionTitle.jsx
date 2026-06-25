import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SectionTitle({ eyebrow, title, sub }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 reveal ${isVisible ? 'visible' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark mb-2 sm:mb-3 leading-tight">
        {title}
      </h2>
      {sub && <p className="text-sm sm:text-base text-ink-light">{sub}</p>}
    </div>
  );
}
