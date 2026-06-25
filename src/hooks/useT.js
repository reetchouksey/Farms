import { useSelector } from 'react-redux';
import { selectLanguage } from '../store/languageSlice';

/**
 * Translation hook.
 * - `t(obj)` — pick the current language from a `{ en, hi }` object.
 * - returns `{ t, lang }`.
 *
 * Strings/numbers/other values are returned unchanged so it's safe to call
 * `t(value)` even if you don't know whether `value` is a translation object.
 */
export function useT() {
  const lang = useSelector(selectLanguage);

  const t = (value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      if (lang in value) return value[lang];
      if ('en' in value) return value.en;
    }
    return value;
  };

  return { t, lang };
}
