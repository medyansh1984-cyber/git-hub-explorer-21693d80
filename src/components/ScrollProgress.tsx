import { useScrollProgress } from '../hooks';

export default function ScrollProgress() {
  const barRef = useScrollProgress<HTMLDivElement>();

  return (
    <div
      className="fixed top-0 inset-x-0 z-[60] h-0.5 pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full origin-right bg-gradient-to-l from-gold via-gold-light to-green-light"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
