import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../hooks';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'من نحن', href: '#about' },
  { label: 'الرؤية والرسالة', href: '#vision' },
  { label: 'تواصل معنا', href: '#contact' },
];

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* ── Logo (right in RTL) — appears only when scrolled ── */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          aria-label="Greenova Life — الصفحة الرئيسية"
          className={`rounded-lg transition-all duration-500 ${
            scrolled ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none overflow-hidden'
          }`}
          aria-hidden={!scrolled}
          tabIndex={scrolled ? 0 : -1}
        >
          <img
            src="/img/logo.png"
            alt="شعار Greenova Life"
            width={160}
            height={156}
            className="logo-crisp h-14 w-auto object-contain"
          />
        </a>

        {/* ── Centered desktop nav ── */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 lg:gap-10"
          aria-label="التنقل الرئيسي"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-current={activeSection === link.href}
              className={`nav-link ${
                activeSection === link.href
                  ? scrolled
                    ? 'text-gold-dark'
                    : 'text-gold-light'
                  : scrolled
                  ? 'text-dark/80 hover:text-green-primary'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── CTA (left in RTL) ── */}
        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className={`hidden md:inline-flex items-center px-6 py-2.5 rounded-full font-cairo font-bold text-sm transition-all duration-500 active:scale-[0.98] ${
              scrolled
                ? 'text-cream bg-forest-gradient shadow-soft hover:shadow-lift hover:-translate-y-0.5'
                : 'text-white bg-white/10 border border-white/30 backdrop-blur-md hover:bg-white/20 hover:border-white/50'
            }`}
          >
            انضم إلينا
          </a>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2.5 rounded-xl transition-colors ${
              scrolled || mobileOpen
                ? 'text-green-deep hover:bg-green-mist'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="قائمة الجوال"
          className="md:hidden mx-4 mt-3 rounded-3xl overflow-hidden
                     bg-cream/95 backdrop-blur-xl border border-white/50
                     shadow-lift animate-fade-up"
        >
          <div className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                aria-current={activeSection === link.href}
                className={`py-3.5 px-5 rounded-2xl font-cairo font-semibold transition-colors ${
                  activeSection === link.href
                    ? 'text-gold-dark bg-gold-muted'
                    : 'text-dark/85 hover:text-green-primary hover:bg-green-mist'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="mt-2 btn-primary !py-3.5 text-center"
            >
              انضم إلينا
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
