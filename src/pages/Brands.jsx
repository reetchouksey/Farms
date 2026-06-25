import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import BrandCard from '../components/BrandCard';
import TwoCol from '../components/TwoCol';
import Checklist from '../components/Checklist';
import CTASection from '../components/CTASection';
import { content } from '../data/content';
import { BUSINESS, waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function Brands() {
  const { t } = useT();
  const seedReveal = useScrollReveal();
  const chemReveal = useScrollReveal();

  const seedBrands = content.brands.filter((b) => b.group === 'seed');
  const chemBrands = content.brands.filter((b) => b.group === 'chem');

  return (
    <>
      <PageBanner
        title={t({ en: 'Authorized Brands', hi: 'अधिकृत ब्रांड्स' })}
        breadcrumb={t(content.nav.brands)}
      />

      {/* Seed Brands */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.brandsPage.eyebrow1)}
            title={t(content.brandsPage.title1)}
            sub={t(content.brandsPage.sub1)}
          />
          <div
            ref={seedReveal.ref}
            className={`grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 reveal ${
              seedReveal.isVisible ? 'visible' : ''
            }`}
          >
            {seedBrands.map((b) => (
              <BrandCard key={b.code} code={b.code} name={b.name} category={b.cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Chem & Fert Brands */}
      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.brandsPage.eyebrow2)}
            title={t(content.brandsPage.title2)}
            sub={t(content.brandsPage.sub2)}
          />
          <div
            ref={chemReveal.ref}
            className={`grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4 reveal ${
              chemReveal.isVisible ? 'visible' : ''
            }`}
          >
            {chemBrands.map((b) => (
              <BrandCard key={b.code} code={b.code} name={b.name} category={b.cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Authorized */}
      <section className="section-y">
        <div className="container-x">
          <TwoCol
            image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
            alt="Quality crops"
            reverse
          >
            <span className="eyebrow">{t(content.brandsPage.whyEyebrow)}</span>
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary-dark mb-4 sm:mb-5 leading-tight">
              {t(content.brandsPage.whyTitle)}
            </h2>
            <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{t(content.brandsPage.whyP)}</p>
            <Checklist items={content.brandsPage.whyChecklist} />
            <Link to="/contact" className="btn btn-primary">
              {t(content.brandsPage.talk)}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </TwoCol>
        </div>
      </section>

      <CTASection title={t(content.cta.brands.title)} sub={t(content.cta.brands.sub)}>
        <a href={`tel:+91${BUSINESS.phones[0]}`} className="btn btn-secondary">
          <Phone className="w-4 h-4" />
          {t(content.cta.home.secondary)}
        </a>
        <a
          href={waUrl('Hello, I want to inquire about brand availability')}
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
