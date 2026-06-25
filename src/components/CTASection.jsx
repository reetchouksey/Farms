export default function CTASection({ title, sub, children }) {
  return (
    <section className="gradient-cta text-white py-12 sm:py-16 md:py-20 text-center relative overflow-hidden">
      <div className="container-x">
        <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        {sub && (
          <p className="text-sm sm:text-base md:text-lg opacity-95 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            {sub}
          </p>
        )}
        <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-3.5 justify-center items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
