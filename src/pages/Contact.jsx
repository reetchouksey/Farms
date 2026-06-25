import { MapPin, Phone, MessageCircle, FileText, Clock, Instagram, Navigation, Send } from 'lucide-react';

import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import InquiryForm from '../components/InquiryForm';
import { content } from '../data/content';
import { BUSINESS, waUrl } from '../data/business';
import { useT } from '../hooks/useT';
import { useScrollReveal } from '../hooks/useScrollReveal';

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-3 sm:gap-3.5 items-start">
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/15 text-accent flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="min-w-0 flex-1 break-words">
        <div className="text-[0.7rem] sm:text-xs uppercase tracking-wide opacity-75 mb-1">{label}</div>
        <div className="text-sm sm:text-[0.96rem] leading-relaxed font-medium">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useT();
  const reveal = useScrollReveal();
  const mapReveal = useScrollReveal();

  return (
    <>
      <PageBanner title={t(content.nav.contact)} breadcrumb={t(content.nav.contact)} />

      {/* Contact Section */}
      <section className="section-y">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.contact.eyebrow)}
            title={t(content.contact.title)}
            sub={t(content.contact.sub)}
          />

          <div
            ref={reveal.ref}
            className={`grid lg:grid-cols-[1fr_1.25fr] gap-6 sm:gap-8 lg:gap-10 reveal ${reveal.isVisible ? 'visible' : ''}`}
          >
            {/* Info Card */}
            <div className="gradient-primary text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-medium relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/25 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-2.5">{t(content.contact.infoTitle)}</h3>
                <p className="opacity-90 mb-6 sm:mb-8 text-sm sm:text-[0.96rem]">{t(content.contact.infoSub)}</p>

                <div className="space-y-5 sm:space-y-6">
                  <InfoRow icon={MapPin} label={t(content.contact.visitStore)}>
                    <a
                      href={`https://maps.google.com/?q=${BUSINESS.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      Bijadehi Road, Near PNB Bank,<br />
                      Bhoura, Teh. Shahpur,<br />
                      Dist. Betul (M.P.)
                    </a>
                  </InfoRow>

                  <InfoRow icon={Phone} label={t(content.contact.callUs)}>
                    {BUSINESS.phones.map((p) => (
                      <div key={p}>
                        <a href={`tel:+91${p}`} className="hover:text-accent transition-colors">
                          +91 {p.slice(0, 5)} {p.slice(5)}
                        </a>
                      </div>
                    ))}
                  </InfoRow>

                  <InfoRow icon={MessageCircle} label={t(content.contact.whatsapp)}>
                    <a
                      href={waUrl('Hello')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      +91 91718 59280
                    </a>
                    <div className="text-xs opacity-75 mt-1">
                      {t(content.contact.whatsappNote)}
                    </div>
                  </InfoRow>

                  <InfoRow icon={Instagram} label={t(content.contact.instagram)}>
                    <a
                      href={BUSINESS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors break-all"
                    >
                      {BUSINESS.instagramHandle}
                    </a>
                    <div className="text-xs opacity-75 mt-1">
                      {t(content.contact.instagramNote)}
                    </div>
                  </InfoRow>

                  <InfoRow icon={FileText} label="GSTIN">
                    {BUSINESS.gstin}
                  </InfoRow>

                  <InfoRow icon={Clock} label={t(content.contact.storeHours)}>
                    <span className="whitespace-pre-line">{t(BUSINESS.hours)}</span>
                  </InfoRow>
                </div>

                <div className="flex gap-2.5 mt-7 pt-6 border-t border-white/15 flex-wrap">
                  {[
                    { href: `tel:+91${BUSINESS.phones[0]}`, icon: Phone, label: 'Call' },
                    { href: '#inquiry-form', icon: Send, label: 'Message' },
                    { href: waUrl('Hello'), icon: MessageCircle, label: 'WhatsApp' },
                    { href: BUSINESS.instagram, icon: Instagram, label: 'Instagram' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/12 flex items-center justify-center hover:bg-accent hover:text-primary-dark hover:-translate-y-0.5 transition-all"
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="inquiry-form" className="scroll-mt-28">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-y bg-mint">
        <div className="container-x">
          <SectionTitle
            eyebrow={t(content.contact.mapEyebrow)}
            title={t(content.contact.mapTitle)}
            sub={t(content.contact.mapSub)}
          />

          <div
            ref={mapReveal.ref}
            className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-medium border border-line h-[300px] sm:h-[380px] md:h-[420px] reveal ${
              mapReveal.isVisible ? 'visible' : ''
            }`}
          >
            <iframe
              title="Patankar Krishi Seva Kendra Location"
              src={`https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>

          <div className="text-center mt-7">
            <a
              href={`https://maps.google.com/?q=${BUSINESS.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Navigation className="w-4 h-4" />
              {t(content.contact.getDirections)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
