import { useT } from '../hooks/useT';

export default function BrandCard({ code, name, category }) {
  const { t } = useT();
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-7 text-center border-2 border-line transition-all hover:-translate-y-1 hover:border-primary hover:shadow-medium relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-mint to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gradient-leaf text-white flex items-center justify-center text-lg sm:text-xl font-extrabold mx-auto mb-3 sm:mb-3.5 shadow-soft">
          {code}
        </div>
        <h4 className="text-sm sm:text-base font-bold text-primary-dark mb-1 leading-tight">{name}</h4>
        <p className="text-[0.7rem] sm:text-xs text-ink-muted m-0">{t(category)}</p>
      </div>
    </div>
  );
}
