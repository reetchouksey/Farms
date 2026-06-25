import { Phone, MapPin } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage, setLanguage } from '../store/languageSlice';
import { BUSINESS } from '../data/business';
import { useT } from '../hooks/useT';

export default function Topbar() {
  const dispatch = useDispatch();
  const lang = useSelector(selectLanguage);
  const { t } = useT();

  return (
    <div className="bg-primary-dark text-white text-xs sm:text-sm py-2">
      <div className="container-x flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 min-w-0">
          <a
            href={`tel:+91${BUSINESS.phones[0]}`}
            className="inline-flex items-center gap-1.5 opacity-95 hover:text-accent transition-colors"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent flex-shrink-0" />
            <span className="hidden xs:inline">+91 </span>
            {BUSINESS.phones[0]}
            <span className="hidden sm:inline">, {BUSINESS.phones[1]}</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 opacity-95 truncate">
            <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span className="truncate">{t(BUSINESS.address)}</span>
          </span>
        </div>
        <div className="inline-flex bg-white/10 rounded-full p-0.5 gap-0.5 flex-shrink-0">
          <button
            type="button"
            onClick={() => dispatch(setLanguage('en'))}
            className={`px-3 sm:px-3.5 py-1 rounded-full text-[0.7rem] sm:text-xs font-semibold transition-all ${
              lang === 'en' ? 'bg-accent text-primary-dark' : 'text-white'
            }`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => dispatch(setLanguage('hi'))}
            className={`px-3 sm:px-3.5 py-1 rounded-full text-[0.7rem] sm:text-xs font-semibold transition-all ${
              lang === 'hi' ? 'bg-accent text-primary-dark' : 'text-white'
            }`}
            aria-pressed={lang === 'hi'}
          >
            हिं
          </button>
        </div>
      </div>
    </div>
  );
}
