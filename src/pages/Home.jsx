import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Sprout, Leaf, MessageCircle, MessageSquare, Phone, ArrowRight } from 'lucide-react';

import { content } from '../data/content';
import { BUSINESS, waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import BrandCard from '../components/BrandCard';
import TwoCol from '../components/TwoCol';
import Checklist from '../components/Checklist';
import CTASection from '../components/CTASection';
import VideoSection from '../components/VideoSection';

function FeatureItem({ feature }) {
  const { t } = useT();
  const Icon = Icons[feature.icon] || Icons.Star;
  return (
    <div className="flex gap-4 items-start p-3">
      <div className="w-[52px] h-[52px] rounded-2xl bg-mint text-primary flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" strokeWidth={1.8} />
      </div>
      <div>
        <h4 className="text-base font-bold text-ink mb-1">{t(feature.title)}</h4>
        <p className="text-sm text-ink-light leading-snug m-0">{t(feature.desc)}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useT();
  const aboutReveal = useScrollReveal();
  const cardsReveal = useScrollReveal();
  const brandsReveal = useScrollReveal();
  const featuredBrands = content.brands.slice(0, 10);

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white pt-14 sm:pt-20 md:pt-28 pb-24 sm:pb-28 md:pb-32 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-leaf/15 blur-3xl pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6 animate-fadeInUp">
              <Sprout className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              {t(content.home.heroBadge)}
            </div>
            <h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-5 animate-fadeInUp"
              style={{ animationDelay: '0.1s' }}
            >
              {t(content.home.heroTitle)}{' '}
              <span className="text-accent block sm:inline">{t(content.home.heroTitleAccent)}</span>
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg opacity-95 mb-7 sm:mb-9 max-w-2xl mx-auto leading-relaxed animate-fadeInUp px-2"
              style={{ animationDelay: '0.2s' }}
            >
              {t(content.home.heroSub)}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center items-center animate-fadeInUp"
              style={{ animationDelay: '0.3s' }}
            >
              <Link to="/products" className="btn btn-secondary w-full sm:w-auto">
                <Leaf className="w-4 h-4" />
                {t(content.home.exploreProducts)}
              </Link>
              <a
                href={waUrl('Hello, I want to inquire about your products')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                {t(content.home.whatsappInquiry)}
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/15 animate-fadeInUp"
              style={{ animationDelay: '0.4s' }}
            >
              {content.home.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent leading-none">
                    {s.num}
                  </span>
                  <span className="text-xs sm:text-sm opacity-85 mt-1.5 block">{t(s.label)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <div className="container-x -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-large py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {content.home.features.map((f, i) => (
              <FeatureItem key={i} feature={f} />
            ))}
          </div>
        </div>
      </div>

      {/* About Snippet */}
      <section className="section-y">
        <div className="container-x">
          <TwoCol
            image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80"
            alt="Healthy crop field"
          >
            <span className="eyebrow">{t(content.home.aboutEyebrow)}</span>
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-primary-dark mb-4 sm:mb-5 leading-tight">
              {t(content.home.aboutTitle)}
            </h2>
            <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{t(content.home.aboutP1)}</p>
            <p className="text-sm sm:text-base text-ink-light mb-4 leading-relaxed">{t(content.home.aboutP2)}</p>
            <Checklist items={content.home.aboutChecklist} />
            <Link to="/about" className="btn btn-primary">
              {t(content.home.learnMore)}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </TwoCol>
        </div>
      </section>

      {/* Farm Video */}
      <section className="section-y bg-gradient-to-b from-white to-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.video.eyebrow)}
            title={t(content.video.title)}
            sub={t(content.video.sub)}
          />
          <VideoSection />
        </div>
      </section>

      {/* Products */}
      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.home.productsEyebrow)}
            title={t(content.home.productsTitle)}
            sub={t(content.home.productsSub)}
          />
          <div
            ref={cardsReveal.ref}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 reveal ${
              cardsReveal.isVisible ? 'visible' : ''
            }`}
          >
            {content.productCategories.map((cat) => (
              <ProductCard key={cat.key} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.home.brandsEyebrow)}
            title={t(content.home.brandsTitle)}
            sub={t(content.home.brandsSub)}
          />
          <div
            ref={brandsReveal.ref}
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 reveal ${
              brandsReveal.isVisible ? 'visible' : ''
            }`}
          >
            {featuredBrands.map((b) => (
              <BrandCard key={b.code} code={b.code} name={b.name} category={b.cat} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/brands" className="btn btn-outline">
              {t(content.home.viewAllBrands)}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection title={t(content.cta.home.title)} sub={t(content.cta.home.sub)}>
        <Link to="/contact" className="btn btn-secondary">
          <MessageSquare className="w-4 h-4" />
          {t(content.cta.home.primary)}
        </Link>
        <a href={`tel:+91${BUSINESS.phones[0]}`} className="btn btn-outline btn-on-dark">
          <Phone className="w-4 h-4" />
          {t(content.cta.home.secondary)}
        </a>
      </CTASection>
    </>
  );
}
