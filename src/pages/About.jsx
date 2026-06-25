import { MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import TwoCol from '../components/TwoCol';
import Checklist from '../components/Checklist';
import InfoCard from '../components/InfoCard';
import CTASection from '../components/CTASection';

import { content } from '../data/content';
import { waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useT();
  const mvvReveal = useScrollReveal();
  const advReveal = useScrollReveal();

  return (
    <>
      <PageBanner title={t(content.nav.about)} breadcrumb={t(content.nav.about)} />

      {/* Story */}
      <section className="section-y">
        <div className="container-x">
          <TwoCol
            image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
            alt="Farmer in field"
          >
            <span className="eyebrow">{t(content.about.eyebrow1)}</span>
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary-dark mb-4 sm:mb-5 leading-tight">
              {t(content.about.title1)}
            </h2>
            <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{t(content.about.p1)}</p>
            <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{t(content.about.p2)}</p>
            <Checklist items={content.about.checklist} />
          </TwoCol>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.about.eyebrow2)}
            title={t(content.about.title2)}
            sub={t(content.about.sub2)}
          />
          <div
            ref={mvvReveal.ref}
            className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 reveal ${mvvReveal.isVisible ? 'visible' : ''}`}
          >
            {content.about.mvv.map((item, i) => (
              <InfoCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.about.eyebrow3)}
            title={t(content.about.title3)}
            sub={t(content.about.sub3)}
          />
          <div
            ref={advReveal.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal ${
              advReveal.isVisible ? 'visible' : ''
            }`}
          >
            {content.about.advantages.map((a, i) => (
              <InfoCard key={i} icon={a.icon} title={a.title} desc={a.desc} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t(content.cta.about.title)} sub={t(content.cta.about.sub)}>
        <Link to="/contact" className="btn btn-secondary">
          <MapPin className="w-4 h-4" />
          {t(content.cta.about.primary)}
        </Link>
        <a
          href={waUrl('Hello, I want to inquire')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
        >
          <MessageCircle className="w-4 h-4" />
          {t(content.cta.about.secondary)}
        </a>
      </CTASection>
    </>
  );
}
