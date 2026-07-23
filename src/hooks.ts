import { useEffect, useRef } from 'react';

const HEADER_OFFSET = 84;

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Smoothly scroll to a section by CSS selector, compensating for the
 * fixed header, and keep the URL hash + focus in sync for accessibility.
 */
export function scrollToSection(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
  history.replaceState(null, '', selector);
  el.focus({ preventScroll: true });
}

/**
 * useReveal — IntersectionObserver-based scroll reveal.
 * Adds `.visible` to elements carrying `.reveal`, `.reveal-left`,
 * `.reveal-right` or `.reveal-scale`.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (prefersReducedMotion()) {
      elements.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * useScrollProgress — writes scroll progress (0..1) directly to the
 * referenced element as a scaleX transform, avoiding React re-renders.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!ref.current) return;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
        ref.current.style.transform = `scaleX(${progress})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}

/**
 * useParallax — applies a translateY parallax offset directly to the
 * referenced element (rAF-throttled, no re-renders). Disabled when the
 * user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance =
          rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${distance * speed * -1}px)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
