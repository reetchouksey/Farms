import { MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS, waUrl } from '../data/business';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed safe-bottom right-4 sm:right-5 md:right-6 z-40 flex flex-col items-center gap-3">
      <a
        href={BUSINESS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Patankar Farms on Instagram"
        className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full text-white flex items-center justify-center
                   shadow-[0_8px_20px_rgba(228,64,95,0.4)] hover:scale-110 active:scale-95 transition-all
                   touch-manipulation"
        style={{
          background:
            'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        }}
      >
        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href={waUrl('Hello Patankar Krishi Seva Kendra, I want to inquire')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 sm:w-15 sm:h-15 md:w-16 md:h-16
                   rounded-full bg-[#25d366] text-white flex items-center justify-center
                   shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#1da851]
                   hover:scale-110 active:scale-95 transition-all animate-pulseGlow
                   touch-manipulation"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>
  );
}
