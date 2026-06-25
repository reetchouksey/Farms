import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { content } from '../data/content';
import { useT } from '../hooks/useT';

export default function PageBanner({ title, breadcrumb }) {
  const { t } = useT();
  return (
    <section className="gradient-banner text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><circle cx='30' cy='30' r='1.5' fill='white' opacity='0.3'/></svg>\")",
        }}
      />
      <div className="container-x relative">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 sm:mb-3">{title}</h1>
        <div className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm opacity-90">
          <Link to="/" className="hover:text-accent transition-colors">
            {t(content.nav.home)}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}
