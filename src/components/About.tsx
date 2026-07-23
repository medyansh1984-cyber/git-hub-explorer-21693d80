import { BookOpen, Users, Sprout, Heart } from 'lucide-react';

const STAGGER = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5'];

const PILLARS = [
  {
    icon: BookOpen,
    title: 'المعرفة',
    desc: 'نشر العلم والوعي، وتمكين الإنسان من أدوات المعرفة لبناء مستقبله.',
  },
  {
    icon: Sprout,
    title: 'التنمية',
    desc: 'تنمية القدرات البشرية وتوفير الفرص للنمو الإنساني المستدام.',
  },
  {
    icon: Users,
    title: 'المجتمع',
    desc: 'بناء مجتمعات مترابطة تسودها الثقة والتعاون والمشاركة الفاعلة.',
  },
  {
    icon: Heart,
    title: 'التغيير الإيجابي',
    desc: 'إحداث أثر إيجابي يدوم، يُسهم في تحسين حياة الإنسان ومحيطه.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      tabIndex={-1}
      className="relative py-30 bg-cream overflow-hidden outline-none"
    >
      {/* Ambient decorative glow */}
      <div
        className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-green-mist rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ── Story: narrative + imagery ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
          {/* Narrative (right in RTL) */}
          <div className="reveal-right">
            <h2 className="section-heading text-4xl md:text-5xl mb-6">من نحن</h2>
            <div className="w-16 h-0.5 bg-gold-sheen rounded-full mb-8" />
            <p className="font-cairo text-lg md:text-xl text-dark-soft leading-loose mb-6 text-balance">
              منظمةٌ إنسانية وُلدت من إيمانٍ بسيط: أن نهضة المجتمعات تبدأ من
              نهضة أفرادها. نعمل على نشر المعرفة، ورعاية التنمية، وبناء
              المجتمعات، وإرساء قيم المحبة والسلام، لصنع أثرٍ إيجابيٍّ يدوم.
            </p>
            <p className="font-cairo text-base text-dark-muted leading-loose">
              من قلب الطبيعة نستلهم فلسفتنا: فكما تحتاج البذرة إلى تربةٍ
              خصبةٍ وضوءٍ ورعاية، يحتاج الإنسان إلى معرفةٍ ومجتمعٍ وسلامٍ
              لينمو ويُزهر.
            </p>
          </div>

          {/* Imagery (left in RTL) with slow zoom on hover */}
          <div className="reveal-left">
            <div className="relative">
              <div className="group relative rounded-[2rem] overflow-hidden shadow-lift">
                <img
                  src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200"
                  alt="طريق يمتد وسط غابة كثيفة تعانقها أشعة الشمس"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[26rem] md:h-[30rem] object-cover
                             transition-transform duration-[1.8s] ease-smooth
                             group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/60 via-transparent to-transparent" />
              </div>

              {/* Floating quote card */}
              <figure
                className="absolute -bottom-8 right-6 left-6 md:right-auto md:left-10 md:max-w-xs
                           rounded-3xl bg-white/85 backdrop-blur-xl p-6
                           border border-white/60 shadow-lift"
              >
                <blockquote className="font-amiri text-xl text-green-deep leading-relaxed">
                  «كما تُزهرُ الأرضُ بالرعاية، يُزهرُ الإنسانُ بالمعرفة»
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        {/* ── Pillars grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`group gradient-border-card reveal ${STAGGER[idx]}`}
              >
                <div className="card-surface">
                  <div className="icon-ring mb-6">
                    <Icon className="w-7 h-7" strokeWidth={1.25} aria-hidden="true" />
                  </div>
                  <h3 className="font-cairo font-bold text-xl text-green-deep mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-cairo text-sm text-dark-soft leading-relaxed">
                    {pillar.desc}
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
