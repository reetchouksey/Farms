import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Sprout, FlaskConical, SprayCan, Tractor, MessageSquare, MessageCircle } from 'lucide-react';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import { content } from '../data/content';
import { waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

function ImgCard({ item }) {
  const { t } = useT();
  return (
    <article className="card group">
      <div className="h-40 sm:h-44 md:h-48 overflow-hidden bg-mint">
        <img
          src={item.img}
          alt={t(item.title)}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-5 sm:p-6">
        <span className="card-badge">{t(item.badge)}</span>
        <h3 className="text-base sm:text-lg font-bold text-primary-dark mb-2 sm:mb-2.5">{t(item.title)}</h3>
        <p className="text-sm text-ink-light leading-relaxed">{t(item.desc)}</p>
      </div>
    </article>
  );
}

function IconCard({ item }) {
  const { t } = useT();
  const Icon = Icons[item.icon] || Icons.Leaf;
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = item.img && !imgFailed;

  return (
    <article className="card group">
      <div className="h-40 sm:h-44 md:h-48 bg-gradient-to-br from-mint to-cream flex items-center justify-center overflow-hidden relative">
        {showImage ? (
          <>
            <img
              src={item.img}
              alt={t(item.title)}
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
            className="w-16 h-16 sm:w-20 sm:h-20 text-primary group-hover:scale-110 transition-transform duration-500"
            strokeWidth={1.5}
          />
        )}
      </div>
      <div className="p-5 sm:p-6">
        <span className="card-badge">{typeof item.badge === 'string' ? item.badge : t(item.badge)}</span>
        <h3 className="text-base sm:text-lg font-bold text-primary-dark mb-2 sm:mb-2.5">{t(item.title)}</h3>
        <p className="text-sm text-ink-light leading-relaxed">{t(item.desc)}</p>
      </div>
    </article>
  );
}

function CategoryBlock({ title, sub, icon: Icon, items, useImg, bgClass = '' }) {
  const { t } = useT();
  const reveal = useScrollReveal();
  return (
    <section className={`section-y ${bgClass}`}>
      <div className="container-x">
        <SectionTitle
          eyebrow={t(content.products.seedsEyebrow)}
          title={
            <span className="inline-flex items-center gap-2 sm:gap-3 justify-center flex-wrap">
              {title}
              {Icon && <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-leaf" />}
            </span>
          }
          sub={sub}
        />
        <div
          ref={reveal.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal ${
            reveal.isVisible ? 'visible' : ''
          }`}
        >
          {items.map((item, i) =>
            useImg ? <ImgCard key={i} item={item} /> : <IconCard key={i} item={item} />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Products() {
  const { t } = useT();

  return (
    <>
      <PageBanner title={t(content.nav.products)} breadcrumb={t(content.nav.products)} />

      <CategoryBlock
        title={t(content.products.seedsTitle)}
        sub={t(content.products.seedsSub)}
        icon={Sprout}
        items={content.products.seedItems}
        useImg
      />

      <CategoryBlock
        bgClass="bg-mint"
        title={t(content.products.fertTitle)}
        sub={t(content.products.fertSub)}
        icon={FlaskConical}
        items={content.products.fertItems}
      />

      <CategoryBlock
        title={t(content.products.chemTitle)}
        sub={t(content.products.chemSub)}
        icon={SprayCan}
        items={content.products.chemItems}
      />

      <CategoryBlock
        bgClass="bg-mint"
        title={t(content.products.equipTitle)}
        sub={t(content.products.equipSub)}
        icon={Tractor}
        items={content.products.equipItems}
      />

      <CTASection title={t(content.cta.products.title)} sub={t(content.cta.products.sub)}>
        <Link to="/contact" className="btn btn-secondary">
          <MessageSquare className="w-4 h-4" />
          {t(content.cta.home.primary)}
        </Link>
        <a
          href={waUrl('Hello, I want to inquire about your products')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </CTASection>
    </>
  );
}
