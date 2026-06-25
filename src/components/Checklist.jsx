import { Check } from 'lucide-react';
import { useT } from '../hooks/useT';

export default function Checklist({ items = [] }) {
  const { t } = useT();
  return (
    <ul className="my-6 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[0.95rem] text-ink">
          <span className="w-6 h-6 rounded-full bg-mint text-primary inline-flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3.5 h-3.5" strokeWidth={3} />
          </span>
          <span>{t(item)}</span>
        </li>
      ))}
    </ul>
  );
}
