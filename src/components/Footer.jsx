import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Instagram, MapPin, Clock } from 'lucide-react';
import { BUSINESS, waUrl } from '../data/business';
import { content } from '../data/content';
import { useT } from '../hooks/useT';

const QUICK = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/products', key: 'products' },
  { to: '/brands', key: 'brands' },
  { to: '/services', key: 'services' },
  { to: '/contact', key: 'contact' },
];

const PRODUCT_LINKS = [
  { en: 'Seeds', hi: 'बीज' },
  { en: 'Fertilizers', hi: 'उर्वरक' },
  { en: 'Pesticides', hi: 'कीटनाशक' },
  { en: 'Herbicides', hi: 'खरपतवारनाशक' },
  { en: 'Equipment', hi: 'उपकरण' },
  { en: 'Farmer Guidance', hi: 'किसान सलाह' },
];

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-12 sm:pt-16 mt-auto">
      <div className="container-x">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent text-primary-dark flex items-center justify-center text-xl sm:text-2xl font-extrabold flex-shrink-0">
                P
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-bold leading-tight truncate">{t(BUSINESS.name)}</h3>
                <p className="text-xs opacity-70">GSTIN: {BUSINESS.gstin}</p>
              </div>
            </div>
            <p className="text-sm opacity-85 leading-relaxed mb-5">{t(content.footer.desc)}</p>
            <div className="flex gap-2.5">
              {[
                { href: `tel:+91${BUSINESS.phones[0]}`, icon: Phone, label: 'Call' },
                { href: waUrl('Hello!'), icon: MessageCircle, label: 'WhatsApp' },
                { href: BUSINESS.instagram, icon: Instagram, label: 'Instagram' },
                { href: `https://maps.google.com/?q=${BUSINESS.mapsQuery}`, icon: MapPin, label: 'Maps' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark hover:-translate-y-0.5 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold text-accent mb-3 sm:mb-5">{t(content.footer.quick)}</h4>
            <ul className="space-y-1.5">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link
                    to={q.to}
                    className="text-sm opacity-85 hover:opacity-100 hover:text-accent hover:pl-1 transition-all inline-flex items-center gap-2"
                  >
                    <span className="text-accent font-bold">›</span>
                    {t(content.nav[q.key])}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base font-bold text-accent mb-3 sm:mb-5">{t(content.footer.products)}</h4>
            <ul className="space-y-1.5">
              {PRODUCT_LINKS.map((p, i) => (
                <li key={i}>
                  <Link
                    to="/products"
                    className="text-sm opacity-85 hover:opacity-100 hover:text-accent hover:pl-1 transition-all inline-flex items-center gap-2"
                  >
                    <span className="text-accent font-bold">›</span>
                    {t(p)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base font-bold text-accent mb-3 sm:mb-5">{t(content.footer.touch)}</h4>
            <div className="space-y-3 sm:space-y-3.5 text-sm opacity-90">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>
                  Bijadehi Road, Near PNB Bank,<br />
                  Bhoura, Teh. Shahpur,<br />
                  Dist. Betul (M.P.)
                </span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span>
                  <a href={`tel:+91${BUSINESS.phones[0]}`} className="hover:text-accent">+91 {BUSINESS.phones[0]}</a><br />
                  <a href={`tel:+91${BUSINESS.phones[1]}`} className="hover:text-accent">+91 {BUSINESS.phones[1]}</a><br />
                  <a href={`tel:+91${BUSINESS.phones[2]}`} className="hover:text-accent">+91 {BUSINESS.phones[2]}</a>
                </span>
              </div>
              <div className="flex gap-3">
                <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="whitespace-pre-line">{t(BUSINESS.hours)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 sm:py-5 text-center text-xs sm:text-sm opacity-80">
          © {year} <span className="text-accent">{t(BUSINESS.name)}</span>. {t(content.footer.rights)}
        </div>
      </div>
    </footer>
  );
}
