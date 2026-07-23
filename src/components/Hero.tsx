import { ArrowDown } from 'lucide-react';
import { scrollToSection, useParallax } from '../hooks';

const HERO_IMG = 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg';

const PARTICLES = [
  { top: '24%', right: '14%', size: 5, cls: 'animate-drift-slow' },
  { top: '36%', right: '78%', size: 4, cls: 'animate-drift-slower' },
  { top: '58%', right: '66%', size: 6, cls: 'animate-drift-slow' },
  { top: '68%', right: '30%', size: 4, cls: 'animate-drift-slower' },
  { top: '18%', right: '55%', size: 3, cls: 'animate-drift-slower' },
];

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(0.06);

  return (
    <section
      id="hero"
      tabIndex={-1}
      className="relative min-h-screen flex items-center justify-center overflow-hidden outline-none"
    >
      {/* ── Cinematic background: misty forest mountains, slow zoom + parallax ── */}
      <div ref={bgRef} className="absolute -inset-y-12 inset-x-0 will-change-transform">
        <img
          src={`${HERO_IMG}?auto=compress&cs=tinysrgb&w=1920`}
          srcSet={`${HERO_IMG}?auto=compress&cs=tinysrgb&w=800 800w, ${HERO_IMG}?auto=compress&cs=tinysrgb&w=1280 1280w, ${HERO_IMG}?auto=compress&cs=tinysrgb&w=1920 1920w, ${HERO_IMG}?auto=compress&cs=tinysrgb&w=2400 2400w`}
          sizes="100vw"
          alt="ضباب الصباح يعانق غابات جبلية كثيفة عند شروق الشمس"
          className="w-full h-full object-cover object-center animate-zoom-slow"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* ── Overlay layers: depth, golden sunrise, dark edges, lighter center ── */}
      <div className="absolute inset-0 bg-green-deep/35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061811]/90 via-transparent to-[#061811]/60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-gold/25 via-transparent to-transparent mix-blend-soft-light" />
      <div className="absolute inset-0 bg-radial-fade" />
      {/* Soft fog band with blur for depth near the base */}
      <div className="absolute bottom-0 inset-x-0 h-40 backdrop-blur-[2px] bg-gradient-to-t from-[#061811]/45 to-transparent" />

      {/* ── Ambient golden particles ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={`particle ${p.cls}`}
            style={{
              top: p.top,
              right: p.right,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* ── Content: logo → headline → mission → CTAs, nothing more ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-24 pb-28">
        {/* Logo — fully transparent, blended with a soft dark glow only.
            It already carries the brand name and slogans, so no text repeats it here. */}
        <div
          className="relative mb-10 animate-fade-in"
          style={{ animationFillMode: 'both' }}
        >
          <div
            className="absolute -inset-10 rounded-full blur-3xl
                       bg-[radial-gradient(circle,rgba(6,24,17,0.55)_0%,rgba(11,61,46,0.25)_45%,transparent_72%)]"
            aria-hidden="true"
          />
          <img
            src="/img/logo.png"
            alt="شعار Greenova Life — الاستثمار في الإنسان"
            width={576}
            height={564}
            className="logo-crisp relative w-56 md:w-72 h-auto object-contain animate-float
                       drop-shadow-[0_12px_28px_rgba(3,41,31,0.6)]"
          />
        </div>

        {/* Arabic main headline — intentionally not the slogan already in the logo */}
        <h1
          className="font-amiri font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-8 text-balance animate-fade-up
                     drop-shadow-[0_4px_24px_rgba(6,24,17,0.6)]"
          style={{ animationDelay: '0.4s', animationFillMode: 'both', opacity: 0 }}
        >
          نزرعُ في الإنسان، فتُزهرُ الحياة
        </h1>

        {/* Mission statement */}
        <p
          className="font-cairo text-lg md:text-xl text-white/90 leading-loose max-w-2xl mb-12 text-balance animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both', opacity: 0 }}
        >
          نُؤمن بأن الإنسان أثمن ما تملكه الأرض، فنُكرّس جهودنا لنشر
          المعرفة، وتنمية القدرات، وبناء المجتمع، ورعاية السلام — ليصنع كلُّ
          إنسانٍ أثراً يدوم.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.8s', animationFillMode: 'both', opacity: 0 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="btn-gold"
          >
            تواصل معنا
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
            className="btn-ghost"
          >
            تعرّف علينا
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2
                   text-white/70 hover:text-gold-light transition-colors animate-float rounded-lg"
        aria-label="انتقل إلى قسم من نحن"
      >
        <span className="font-cairo text-xs tracking-[0.3em]">اكتشف</span>
        <ArrowDown className="w-4 h-4" aria-hidden="true" />
      </button>
    </section>
  );
}
