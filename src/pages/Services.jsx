import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import InfoCard from '../components/InfoCard';
import CTASection from '../components/CTASection';
import { content } from '../data/content';
import { BUSINESS } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Step({ step }) {
  const { t } = useT();
  return (
    <article className="bg-white rounded-2xl border border-line p-5 sm:p-6 md:p-7 text-center transition-all hover:-translate-y-1 hover:shadow-medium">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-primary-dark flex items-center justify-center text-lg sm:text-xl font-extrabold mx-auto mb-3 sm:mb-4 shadow-soft">
        {step.n}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-primary-dark mb-2">{t(step.title)}</h3>
      <p className="text-sm text-ink-light leading-relaxed">{t(step.desc)}</p>
    </article>
  );
}

export default function Services() {
  const { t } = useT();
  const servicesReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();

  return (
    <>
      <PageBanner
        title={t({ en: 'Our Services', hi: 'हमारी सेवाएँ' })}
        breadcrumb={t(content.nav.services)}
      />

      {/* Services Grid */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.services.eyebrow1)}
            title={t(content.services.title1)}
            sub={t(content.services.sub1)}
          />
          <div
            ref={servicesReveal.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal ${
              servicesReveal.isVisible ? 'visible' : ''
            }`}
          >
            {content.services.items.map((s, i) => (
              <InfoCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.services.processEyebrow)}
            title={t(content.services.processTitle)}
          />
          <div
            ref={stepsReveal.ref}
            className={`grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 reveal ${
              stepsReveal.isVisible ? 'visible' : ''
            }`}
          >
            {content.services.steps.map((step) => (
              <Step key={step.n} step={step} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t(content.cta.services.title)} sub={t(content.cta.services.sub)}>
        <a href={`tel:+91${BUSINESS.phones[0]}`} className="btn btn-secondary">
          <Phone className="w-4 h-4" />
          {t({ en: 'Call', hi: 'कॉल' })} +91 {BUSINESS.phones[0]}
        </a>
        <Link to="/contact" className="btn btn-whatsapp">
          <MessageSquare className="w-4 h-4" />
          {t(content.cta.home.primary)}
        </Link>
      </CTASection>
    </>
  );
}
