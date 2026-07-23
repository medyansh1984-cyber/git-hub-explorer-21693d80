import { Mail, Globe, ArrowUpLeft } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="relative py-30 overflow-hidden outline-none
                 bg-gradient-to-b from-green-deep via-[#0A3527] to-[#061811]"
    >
      {/* Quiet concentric rings */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full border border-gold" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-gold" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="section-eyebrow-light mb-4">تواصل معنا</p>
          <h2 className="font-amiri font-bold text-4xl md:text-5xl text-white mb-6">
            لنبدأ الحوار
          </h2>
          <div className="gold-rule mb-8" />
          <p className="font-cairo text-lg text-white/75 max-w-2xl mx-auto leading-loose">
            يسعدنا تواصلكم معنا. كل حوارٍ يُثري، وكل يدٍ تُمدّ تُسهم في الأثر.
          </p>
        </div>

        {/* Contact card — email + website, nothing more */}
        <div className="reveal-scale rounded-[2rem] overflow-hidden
                        bg-white/[0.06] backdrop-blur-md border border-white/10 shadow-lift"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            {/* Email */}
            <a
              href="mailto:admin@greenovalife.org"
              className="group p-9 md:p-12 transition-colors duration-500 hover:bg-white/[0.05]"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                           bg-gold/10 ring-1 ring-gold/30 transition-colors duration-500
                           group-hover:bg-gold/20"
              >
                <Mail className="w-6 h-6 text-gold-light" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <p className="section-eyebrow-light mb-3">البريد الإلكتروني</p>
              <p className="font-inter text-lg md:text-xl text-white tracking-wide mb-4" dir="ltr">
                admin@greenovalife.org
              </p>
              <span className="inline-flex items-center gap-2 font-cairo text-sm text-white/60 transition-colors group-hover:text-gold-light">
                أرسل رسالة
                <ArrowUpLeft
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>

            {/* Website — informational, no visit CTA */}
            <div className="p-9 md:p-12">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                           bg-gold/10 ring-1 ring-gold/30"
              >
                <Globe className="w-6 h-6 text-gold-light" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <p className="section-eyebrow-light mb-3">الموقع الإلكتروني</p>
              <p className="font-inter text-lg md:text-xl text-white tracking-wide" dir="ltr">
                greenovalife.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
