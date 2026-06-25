import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useT } from '../hooks/useT';
import { content } from '../data/content';

export default function ProductCard({ category }) {
  const { t } = useT();
  const Icon = Icons[category.icon] || Icons.Leaf;
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = category.img && !imgFailed;

  return (
    <article className="card group">
      <div className="h-44 sm:h-48 md:h-52 bg-gradient-to-br from-mint to-cream flex items-center justify-center overflow-hidden relative">
        {showImage ? (
          <>
            <img
              src={category.img}
              alt={t(category.title)}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-white/95 backdrop-blur text-primary flex items-center justify-center shadow-soft">
              <Icon className="w-5 h-5" strokeWidth={2} />
            </div>
          </>
        ) : (
          <Icon
            className="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-500"
            strokeWidth={1.5}
          />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <span className="card-badge">{t(category.badge)}</span>
        <h3 className="text-base sm:text-lg font-bold text-primary-dark mb-2 sm:mb-2.5">{t(category.title)}</h3>
        <p className="text-sm text-ink-light leading-relaxed mb-4">{t(category.desc)}</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-accent-dark transition-colors group/link"
        >
          {t(content.home.viewDetails)}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
