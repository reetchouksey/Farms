import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import {
  toggleMobileMenu,
  closeMobileMenu,
  selectMobileMenuOpen,
  selectHeaderScrolled,
  setHeaderScrolled,
} from '../store/uiSlice';
import { content } from '../data/content';
import { BUSINESS } from '../data/business';
import { useT } from '../hooks/useT';

const NAV_ITEMS = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/products', key: 'products' },
  { to: '/brands', key: 'brands' },
  { to: '/services', key: 'services' },
  { to: '/gallery', key: 'gallery' },
  { to: '/contact', key: 'contact' },
];

export default function Header() {
  const dispatch = useDispatch();
  const open = useSelector(selectMobileMenuOpen);
  const scrolled = useSelector(selectHeaderScrolled);
  const { t } = useT();

  useEffect(() => {
    const onScroll = () => dispatch(setHeaderScrolled(window.scrollY > 20));
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [dispatch]);

  const closeMenu = () => dispatch(closeMobileMenu());

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-medium' : 'shadow-soft'
      }`}
    >
      <div className="container-x">
        <nav className="flex items-center justify-between py-3 sm:py-4 gap-3 sm:gap-6 relative">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0 flex-1">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full gradient-leaf flex items-center justify-center text-white text-lg sm:text-2xl font-extrabold shadow-soft flex-shrink-0">
              P
            </div>
            <div className="leading-tight min-w-0">
              <h1 className="text-sm sm:text-base lg:text-lg font-bold text-primary-dark m-0 truncate">
                {t(BUSINESS.name)}
              </h1>
              <p className="text-[0.65rem] sm:text-[0.7rem] lg:text-xs text-ink-muted m-0 tracking-wide truncate">
                {t(BUSINESS.tagline)}
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-primary bg-mint font-semibold'
                        : 'text-ink hover:text-primary hover:bg-mint'
                    }`
                  }
                >
                  {t(content.nav[item.key])}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-2.5">
            <a href={`tel:+91${BUSINESS.phones[0]}`} className="btn btn-outline !py-2.5 !px-4 !text-sm">
              <Phone className="w-4 h-4" /> {t(content.nav.call)}
            </a>
            <Link to="/contact" className="btn btn-primary !py-2.5 !px-4 !text-sm">
              <MessageSquare className="w-4 h-4" /> {t(content.nav.enquire)}
            </Link>
          </div>
          {/* CTA call icon between lg and xl breakpoints */}
          <a
            href={`tel:+91${BUSINESS.phones[0]}`}
            aria-label="Call"
            className="hidden lg:inline-flex xl:hidden items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="lg:hidden p-2.5 bg-mint rounded-lg text-primary flex-shrink-0 active:scale-95 transition-transform"
            aria-label="Toggle menu"
            aria-expanded={open}
            style={{ minWidth: 44, minHeight: 44 }}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-medium border-t border-line z-50 max-h-[80vh] overflow-y-auto">
              <ul className="flex flex-col py-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block px-5 py-3.5 text-sm transition-colors ${
                          isActive
                            ? 'text-primary bg-mint font-semibold'
                            : 'text-ink hover:bg-mint hover:text-primary'
                        }`
                      }
                    >
                      {t(content.nav[item.key])}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="px-4 pb-4 flex flex-col gap-2">
                <a
                  href={`tel:+91${BUSINESS.phones[0]}`}
                  onClick={closeMenu}
                  className="btn btn-outline justify-center"
                >
                  <Phone className="w-4 h-4" /> {t(content.nav.call)}
                </a>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="btn btn-primary justify-center"
                >
                  <MessageSquare className="w-4 h-4" /> {t(content.nav.enquire)}
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
