import { useState, FormEvent } from 'react';
import { Send, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

const RECIPIENT = 'admin@greenovalife.org';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = 'الاسم مطلوب';
    else if (form.firstName.length > 60) e.firstName = 'الاسم طويل جداً';
    if (!form.lastName.trim()) e.lastName = 'الكنية مطلوبة';
    else if (form.lastName.length > 60) e.lastName = 'الكنية طويلة جداً';
    if (!form.phone.trim()) e.phone = 'رقم الهاتف مطلوب';
    else if (!/^[+\d\s()-]{6,20}$/.test(form.phone.trim())) e.phone = 'رقم غير صالح';
    if (!form.email.trim()) e.email = 'البريد الإلكتروني مطلوب';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'بريد غير صالح';
    else if (form.email.length > 255) e.email = 'البريد طويل جداً';
    if (!form.subject.trim()) e.subject = 'الموضوع مطلوب';
    else if (form.subject.length > 150) e.subject = 'الموضوع طويل جداً';
    if (!form.message.trim()) e.message = 'الرسالة مطلوبة';
    else if (form.message.length > 2000) e.message = 'الرسالة طويلة جداً';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const body = [
        `الاسم: ${form.firstName} ${form.lastName}`,
        `الهاتف: ${form.phone}`,
        `البريد: ${form.email}`,
        '',
        form.message,
      ].join('\n');
      const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setTimeout(() => {
        setStatus('sent');
        setForm(INITIAL);
        setTimeout(() => setStatus('idle'), 4000);
      }, 500);
    } catch {
      setStatus('error');
    }
  };

  const fieldBase =
    'w-full px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-white placeholder:text-white/40 font-cairo text-base transition-all duration-300 focus:outline-none focus:bg-white/[0.08] focus:border-gold/60 focus:ring-2 focus:ring-gold/20';

  const errCls = 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20';

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

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <div className="flex items-baseline justify-center gap-4 mb-4">
            <span className="section-number-light" aria-hidden="true">04</span>
            <p className="section-eyebrow-light">تواصل معنا</p>
          </div>
          <h2 className="font-amiri font-bold text-5xl md:text-6xl text-white mb-6 leading-[1.15]">
            أرسل لنا رسالة
          </h2>
          <div className="gold-rule mb-8" />
          <p className="font-cairo text-lg text-white/75 max-w-2xl mx-auto leading-loose font-light">
            نستمع باهتمامٍ إلى كل رسالة — املأ النموذج وسنعاود التواصل معك قريباً.
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          noValidate
          className="reveal-scale rounded-[2rem] p-7 md:p-10
                     bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-lift"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="section-eyebrow-light block mb-2">الاسم</label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={update('firstName')}
                maxLength={60}
                autoComplete="given-name"
                className={`${fieldBase} ${errors.firstName ? errCls : ''}`}
                placeholder="اسمك الأول"
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && <p className="mt-1.5 text-xs text-red-300 font-cairo">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="section-eyebrow-light block mb-2">الكنية</label>
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={update('lastName')}
                maxLength={60}
                autoComplete="family-name"
                className={`${fieldBase} ${errors.lastName ? errCls : ''}`}
                placeholder="اسم العائلة"
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && <p className="mt-1.5 text-xs text-red-300 font-cairo">{errors.lastName}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="section-eyebrow-light block mb-2">رقم الهاتف</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                maxLength={20}
                autoComplete="tel"
                dir="ltr"
                className={`${fieldBase} text-right ${errors.phone ? errCls : ''}`}
                placeholder="+966 …"
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="mt-1.5 text-xs text-red-300 font-cairo">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="section-eyebrow-light block mb-2">البريد الإلكتروني</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update('email')}
                maxLength={255}
                autoComplete="email"
                dir="ltr"
                className={`${fieldBase} text-right ${errors.email ? errCls : ''}`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-300 font-cairo">{errors.email}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="subject" className="section-eyebrow-light block mb-2">الموضوع</label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={update('subject')}
                maxLength={150}
                className={`${fieldBase} ${errors.subject ? errCls : ''}`}
                placeholder="عنوان رسالتك"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1.5 text-xs text-red-300 font-cairo">{errors.subject}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="section-eyebrow-light block mb-2">الرسالة</label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={update('message')}
                maxLength={2000}
                className={`${fieldBase} resize-none ${errors.message ? errCls : ''}`}
                placeholder="اكتب رسالتك هنا…"
                aria-invalid={!!errors.message}
              />
              <div className="flex items-center justify-between mt-1.5">
                {errors.message ? (
                  <p className="text-xs text-red-300 font-cairo">{errors.message}</p>
                ) : <span />}
                <span className="text-xs text-white/40 font-inter">{form.message.length}/2000</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`mailto:${RECIPIENT}`}
              className="inline-flex items-center gap-2 text-sm font-cairo text-white/60 hover:text-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              <span dir="ltr">{RECIPIENT}</span>
            </a>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-gold min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  جارٍ الإرسال…
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  تم الإرسال
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" aria-hidden="true" />
                  إرسال الرسالة
                </>
              )}
            </button>
          </div>

          {status === 'error' && (
            <div className="mt-5 flex items-center gap-2 text-sm text-red-300 font-cairo">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
