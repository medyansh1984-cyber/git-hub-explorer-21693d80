import { Eye, Target } from 'lucide-react';
import { useParallax } from '../hooks';

const VISION_POINTS = [
  'تمكين الإنسان من أدوات المعرفة والوعي',
  'بناء مجتمعاتٍ مترابطةٍ ومستدامة',
  'إرساء قيم المحبة والسلام في كل مكان',
];

const MISSION_POINTS = [
  'نشر المعرفة وتمكين الإنسان من أدواته',
  'بناء قدرات الأفراد والمجتمعات',
  'رعاية قيم المحبة والسلام والتسامح',
];

export default function VisionMission() {
  const visionRef = useParallax<HTMLDivElement>(0.07);
  const missionRef = useParallax<HTMLDivElement>(0.04);

  return (
    <section
      id="vision"
      tabIndex={-1}
      className="relative py-30 bg-parchment overflow-hidden outline-none"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-baseline justify-center gap-4 mb-4">
            <span className="section-number" aria-hidden="true">02</span>
            <p className="section-eyebrow">الرؤية والرسالة</p>
          </div>
          <h2 className="section-heading text-5xl md:text-6xl mb-6">
            طريقنا نحو المستقبل
          </h2>
          <div className="gold-rule mb-8" />
          <p className="font-cairo text-lg text-dark-soft max-w-2xl mx-auto leading-loose font-light">
            رؤية واضحة ورسالة إنسانية تُوجّه كل خطوة نخطوها.
          </p>
        </div>


        {/* Vision + Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision — light glass card */}
          <div ref={visionRef} className="reveal-right will-change-transform">
            <article
              className="group relative h-full rounded-[2rem] p-10 md:p-12 overflow-hidden
                         bg-white/80 backdrop-blur-sm border border-white/70 shadow-soft
                         transition-shadow duration-500 hover:shadow-lift"
            >
              <div className="relative">
                <div className="icon-ring mb-8">
                  <Eye className="w-7 h-7" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <p className="section-eyebrow mb-3">الرؤية</p>
                <h3 className="font-amiri font-bold text-3xl text-green-deep mb-6">
                  إنسانٌ واعٍ، مجتمعٌ مزدهر
                </h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="font-cairo text-lg text-dark-soft leading-loose mb-6">
                  أن نكون منارةً للمعرفة والتنمية الإنسانية، نسهم في بناء
                  مجتمعاتٍ تسودها المحبة والسلام، حيث يُحقّق كل إنسانٍ كاملَ
                  إمكاناته.
                </p>
                <ul className="space-y-3">
                  {VISION_POINTS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-cairo text-base text-dark-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          {/* Mission — deep forest gradient card */}
          <div ref={missionRef} className="reveal-left will-change-transform">
            <article
              className="group relative h-full rounded-[2rem] p-10 md:p-12 overflow-hidden
                         bg-forest-gradient shadow-lift"
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8
                             bg-white/10 ring-1 ring-gold/30 backdrop-blur-sm
                             transition-colors duration-500 group-hover:bg-gold/20"
                >
                  <Target className="w-7 h-7 text-gold-light" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <p className="section-eyebrow-light mb-3">الرسالة</p>
                <h3 className="font-amiri font-bold text-3xl text-white mb-6">
                  ننمّي الإنسان، ونبني المجتمع
                </h3>
                <div className="w-12 h-px bg-gold mb-6" />
                <p className="font-cairo text-lg text-white/90 leading-loose mb-6">
                  نُكرّس جهودنا لتنمية الإنسان معرفةً ووعياً وقيمةً، ونُسهم في
                  بناء مجتمعاتٍ تسودها الثقة والتعاون، ونُرسّخ قيم المحبة
                  والسلام كأساسٍ لكل تنميةٍ حقيقية.
                </p>
                <ul className="space-y-3">
                  {MISSION_POINTS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold-light flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="font-cairo text-base text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
