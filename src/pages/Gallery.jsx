import { Link } from 'react-router-dom';
import { MapPin, MessageCircle } from 'lucide-react';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import CTASection from '../components/CTASection';
import VideoSection from '../components/VideoSection';
import { content } from '../data/content';
import { waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

function GalleryItem({ item }) {
  const { t } = useT();
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-square shadow-soft hover:shadow-medium hover:scale-[1.02] transition-all group cursor-pointer">
      <img
        src={item.img}
        alt={t(item.title)}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-5">
        <h4 className="text-white font-bold text-xs sm:text-sm md:text-base leading-snug">{t(item.title)}</h4>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useT();
  const reveal = useScrollReveal();

  return (
    <>
      <PageBanner
        title={t({ en: 'Photo & Video Gallery', hi: 'फ़ोटो एवं वीडियो गैलरी' })}
        breadcrumb={t(content.nav.gallery)}
      />

      {/* Video */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.video.eyebrow)}
            title={t(content.video.title)}
            sub={t(content.video.sub)}
          />
          <VideoSection />
        </div>
      </section>

      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.gallery.eyebrow)}
            title={t(content.gallery.title)}
            sub={t(content.gallery.sub)}
          />
          <div
            ref={reveal.ref}
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 reveal ${
              reveal.isVisible ? 'visible' : ''
            }`}
          >
            {content.gallery.items.map((item, i) => (
              <GalleryItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title={t(content.cta.gallery.title)} sub={t(content.cta.gallery.sub)}>
        <Link to="/contact" className="btn btn-secondary">
          <MapPin className="w-4 h-4" />
          {t({ en: 'Visit Us', hi: 'पधारें' })}
        </Link>
        <a
          href={waUrl('Hello, I want to inquire')}
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
