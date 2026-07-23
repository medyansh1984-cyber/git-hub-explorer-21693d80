import { BookOpen, TrendingUp, Users, HeartHandshake, Feather } from 'lucide-react';

const STAGGER = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'];

const VALUES = [
  {
    icon: BookOpen,
    title: 'المعرفة',
    desc: 'نُؤمن بأن المعرفة نور، وأن نشرها وتبسيطها هو أساس كل تنميةٍ حقيقية.',
  },
  {
    icon: TrendingUp,
    title: 'التنمية',
    desc: 'نسعى لتنمية الإنسان في فكره وقدراته، ليكون عنصراً فاعلاً في مجتمعه.',
  },
  {
    icon: Users,
    title: 'المجتمع',
    desc: 'نبني مجتمعاتٍ مترابطة تسودها الثقة والتعاون والمشاركة الفاعلة.',
  },
  {
    icon: HeartHandshake,
    title: 'المحبة',
    desc: 'نُرسّخ قيم المحبة والتسامح كأساسٍ للعلاقات الإنسانية البناءة.',
  },
  {
    icon: Feather,
    title: 'السلام',
    desc: 'نُؤمن بأن السلام هو منبت كل نموٍّ، ونرعى كل جهدٍ يصونه ويحميه.',
  },
];

export default function Values() {
  return (
    <section
      id="values"
      tabIndex={-1}
      className="relative py-30 overflow-hidden outline-none
                 bg-gradient-to-b from-cream via-green-muted to-cream"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-[32rem] h-[32rem] bg-gold-muted rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <div className="flex items-baseline justify-center gap-4 mb-4">
            <span className="section-number" aria-hidden="true">03</span>
            <p className="section-eyebrow">قيمنا</p>
          </div>
          <h2 className="section-heading text-5xl md:text-6xl mb-6">
            ما نُؤمن به
          </h2>
          <div className="gold-rule mb-8" />
          <p className="font-cairo text-lg text-dark-soft max-w-2xl mx-auto leading-loose font-light">
            خمس قيمٍ تُمثّل جوهر رسالتنا، وتُوجّه كل عملٍ نقوم به.
          </p>
        </div>


        {/* Values grid — 5 gradient-border cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUES.map((value, idx) => {
            const Icon = value.icon;
            const isLast = idx === VALUES.length - 1;
            return (
              <div
                key={value.title}
                className={`group gradient-border-card reveal ${STAGGER[idx]} ${
                  isLast ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="card-surface p-9">
                  <div className="icon-ring mb-6">
                    <Icon className="w-7 h-7" strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <h3 className="font-amiri font-bold text-2xl text-green-deep mb-4 transition-colors duration-300 group-hover:text-gold-dark">
                    {value.title}
                  </h3>
                  <div
                    className="w-10 h-px bg-gold/40 mb-4 transition-all duration-500
                               group-hover:w-16 group-hover:bg-gold"
                    aria-hidden="true"
                  />
                  <p className="font-cairo text-base text-dark-soft leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
