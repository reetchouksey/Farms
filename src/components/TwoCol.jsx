import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Two-column block: image + content. `reverse` swaps them on desktop.
 */
export default function TwoCol({ image, alt, reverse = false, children }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center reveal ${
        isVisible ? 'visible' : ''
      }`}
    >
      <div className={`relative ${reverse ? 'lg:order-2' : ''}`}>
        <div className="absolute -top-3 -left-3 lg:-top-5 lg:-left-5 w-20 lg:w-32 h-20 lg:h-32 bg-accent rounded-2xl -z-10 hidden md:block" />
        <div className="absolute -bottom-3 -right-3 lg:-bottom-5 lg:-right-5 w-28 lg:w-44 h-28 lg:h-44 bg-leaf/50 rounded-2xl -z-10 hidden md:block" />
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-large"
        />
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>{children}</div>
    </div>
  );
}
