import * as Icons from 'lucide-react';
import { useT } from '../hooks/useT';

/**
 * Generic icon + title + description card used for features, services, values, advantages.
 */
export default function InfoCard({ icon, title, desc, accent = false }) {
  const { t } = useT();
  const Icon = Icons[icon] || Icons.Leaf;

  return (
    <article className="bg-white rounded-2xl border border-line p-5 sm:p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-medium hover:border-leaf">
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 ${
          accent ? 'bg-accent text-primary-dark' : 'gradient-leaf text-white'
        }`}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.8} />
      </div>
      <h3 className="text-base sm:text-lg font-bold text-primary-dark mb-2 sm:mb-2.5">{t(title)}</h3>
      <p className="text-sm text-ink-light leading-relaxed">{t(desc)}</p>
    </article>
  );
}
