export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061811] overflow-hidden">
      {/* Top gold accent line */}
      <div
        className="h-px bg-gradient-to-l from-transparent via-gold/70 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo — transparent, soft green glow only */}
          <div className="relative">
            <div
              className="absolute -inset-8 rounded-full blur-2xl bg-green-primary/30"
              aria-hidden="true"
            />
            <img
              src="/img/logo.png"
              alt="شعار Greenova Life"
              width={131}
              height={128}
              loading="lazy"
              className="relative h-32 w-auto object-contain"
            />
          </div>

          {/* Tagline */}
          <p className="font-amiri text-lg text-white/70 max-w-md leading-relaxed">
            الاستثمار في الإنسان — معرفة، تنمية، مجتمع، محبة، سلام.
          </p>

          {/* Copyright */}
          <p className="font-inter text-xs text-white/40" dir="ltr">
            © {year} Greenova Life
          </p>
        </div>
      </div>
    </footer>
  );
}
