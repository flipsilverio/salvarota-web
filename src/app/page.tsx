'use client'

import { useState } from 'react'

// ─── Logo ────────────────────────────────────────────────────────────────────
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const cls = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  }[size]
  return (
    <span className={`font-display font-light tracking-tight text-cream ${cls}`}>
      Salva<span className="font-normal">rota</span>
      <sup className="text-[0.5em] ml-0.5 opacity-60">®</sup>
    </span>
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Outer frame */}
      <div className="relative rounded-[42px] bg-[#111] p-[10px] shadow-2xl shadow-black/60 ring-1 ring-white/10">
        {/* Screen */}
        <div className="overflow-hidden rounded-[34px] phone-screen aspect-[9/19.5]">
          {/* Status bar */}
          <div className="flex justify-between items-center px-5 pt-3 pb-1">
            <span className="text-cream/70 text-[10px] font-medium">9:41</span>
            <div className="w-[80px] h-5 rounded-full bg-black/40 mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
            <div className="flex gap-1 items-center">
              <div className="flex gap-px items-end h-3">
                {[2,3,4,5].map(h => (
                  <div key={h} style={{height: `${h*2}px`}} className="w-[3px] bg-cream/60 rounded-sm" />
                ))}
              </div>
              <div className="w-5 h-2.5 rounded-sm border border-cream/60 p-px">
                <div className="h-full w-3/4 bg-cream/60 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="mx-3 mt-3 bg-cream/95 rounded-xl flex items-center gap-2 px-3 py-2.5 shadow-sm">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#555] flex items-center justify-center">
              <div className="w-1 h-1 bg-[#555] rounded-full" />
            </div>
            <span className="text-[#999] text-[11px]">Para onde?</span>
            <div className="ml-auto w-3.5 h-0.5 bg-[#555]/40 rounded" />
            <div className="w-3.5 h-0.5 bg-[#555]/40 rounded" />
          </div>

          {/* Map representation */}
          <div className="mx-3 mt-2 flex-1 relative">
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 240 300">
              {[30,60,90,120,150,180,210,240].map(y => (
                <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#FAEFE9" strokeWidth="0.5"/>
              ))}
              {[40,80,120,160,200].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="#FAEFE9" strokeWidth="0.5"/>
              ))}
            </svg>
            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 300">
              <path d="M 60 30 Q 80 80 100 120 Q 130 160 140 220" stroke="#E8A838" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6,3"/>
              <circle cx="60" cy="30" r="5" fill="#FAEFE9" />
              <circle cx="140" cy="220" r="6" fill="#E8A838" />
              <circle cx="140" cy="220" r="10" fill="#E8A838" fillOpacity="0.3" />
            </svg>
          </div>

          {/* Bottom panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#FAEFE9] rounded-t-2xl px-4 pt-3 pb-5">
            <div className="w-8 h-1 bg-black/20 rounded-full mx-auto mb-3" />
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-black/40 text-[9px]">Localização atual</span>
                  <div className="w-2 h-2 rounded-full bg-[#E8A838]" />
                  <span className="text-[#E8A838] text-[9px] font-semibold">72 Moderado</span>
                </div>
                <span className="text-[#1C1915] font-semibold text-xs">Rua do Catete, 200</span>
              </div>
            </div>
            <div className="h-px bg-black/8 my-2" />
            <div className="flex gap-3">
              {[
                { label: 'Crime', val: '0.2', color: '#E05252' },
                { label: 'Luz', val: '0.5', color: '#E8A838' },
                { label: 'Negócios', val: '0.4', color: '#5BAD6F' },
              ].map(m => (
                <div key={m.label} className="flex items-center gap-1">
                  <span className="text-[9px] text-black/50">{m.label}</span>
                  <div className="w-1.5 h-1.5 rounded-full" style={{background: m.color}} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -inset-4 bg-amber/10 rounded-full blur-2xl -z-10" />
    </div>
  )
}

// ─── Waitlist Form ────────────────────────────────────────────────────────────
function WaitlistForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Simulate API — replace with your email service (Mailchimp, Beehiiv, etc.)
    await new Promise(r => setTimeout(r, 800))
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div className={`text-center py-4 ${dark ? 'text-cream' : 'text-cream'}`}>
        <div className="text-amber text-2xl mb-2">✓</div>
        <p className="font-medium">Você está na lista.</p>
        <p className="text-cream/50 text-sm mt-1">Avisaremos quando o SalvaRota estiver disponível.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="flex-1 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber/60 transition"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-amber text-dark font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-amber/90 transition whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? '...' : 'Entrar na lista'}
      </button>
    </form>
  )
}

// ─── Data Source Card ─────────────────────────────────────────────────────────
function DataCard({ emoji, label, source, tag, tagColor }: {
  emoji: string; label: string; source: string; tag: string; tagColor: string
}) {
  return (
    <div className="flex items-center gap-4 bg-white/5 border border-white/8 rounded-2xl px-4 py-4">
      <span className="text-2xl w-8 text-center shrink-0">{emoji}</span>
      <div className="flex-1 min-w-0">
        <p className="text-cream text-sm font-medium truncate">{label}</p>
        <p className="text-cream/40 text-xs mt-0.5">{source}</p>
      </div>
      <span className="text-xs px-2.5 py-1 rounded-lg border shrink-0" style={{ color: tagColor, borderColor: tagColor }}>
        {tag}
      </span>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <Logo size="sm" />
        <a
          href="#waitlist"
          className="text-sm font-medium bg-amber/10 border border-amber/30 text-amber px-4 py-2 rounded-full hover:bg-amber/20 transition"
        >
          Entrar na lista
        </a>
      </nav>

      {/* HERO */}
      <section className="gradient-animated min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="max-w-xl">
            <p className="text-amber text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Rio de Janeiro · Em breve
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-cream mb-6">
              O caminho<br />
              mais seguro<br />
              <em className="not-italic text-amber">de A a B.</em>
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed mb-10 max-w-md">
              SalvaRota calcula a rota mais segura para você caminhar pelo Rio.
              Não a mais rápida — a mais tranquila.
            </p>
            <WaitlistForm />
            <p className="text-cream/30 text-xs mt-4">
              Gratuito. Sem spam. Avisaremos quando estivermos prontos.
            </p>
          </div>
          {/* Right */}
          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-mid py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight">
            "Nem toda rua é igual.<br />
            <span className="text-cream/50">Horário importa. Iluminação importa.<br />
            Quem está aberto ao redor importa."</span>
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-dark py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-amber text-xs font-semibold tracking-[0.2em] uppercase mb-4">Como funciona</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-16 max-w-lg leading-tight">
            Três passos.<br />Uma rota mais segura.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                n: '01',
                title: 'Diga para onde quer ir.',
                body: 'Informe seu destino. O SalvaRota conhece o Rio de ponta a ponta.',
              },
              {
                n: '02',
                title: 'Calculamos sua segurança.',
                body: 'Cruzamos dados de crime, iluminação, estabelecimentos abertos e horário em tempo real.',
              },
              {
                n: '03',
                title: 'Caminhe com mais confiança.',
                body: 'Siga a rota sugerida. Não a mais rápida — a mais tranquila.',
              },
            ].map(step => (
              <div key={step.n} className="group">
                <p className="font-display text-5xl text-amber/20 group-hover:text-amber/40 transition mb-4 leading-none">{step.n}</p>
                <h3 className="text-cream font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section className="bg-mid py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber text-xs font-semibold tracking-[0.2em] uppercase mb-4">Transparência total</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 leading-tight">
              Dados reais.<br />Fontes públicas.
            </h2>
            <p className="text-cream/50 text-base leading-relaxed">
              Nada inventado. O score de cada rua é calculado com dados abertos, atualizados e verificáveis.
              Você sabe exatamente por que uma rua é mais segura que outra.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <DataCard emoji="🦸" label="Histórico de crimes" source="ISP Rio / SSP-RJ" tag="Mensal" tagColor="#c8e1e6" />
            <DataCard emoji="🏪" label="Comércios abertos" source="OpenStreetMap" tag="Tempo real" tagColor="#c1eccf" />
            <DataCard emoji="💡" label="Iluminação pública" source="Google Places API" tag="Parcial" tagColor="#b2b683" />
            <DataCard emoji="🕐" label="Horário atual" source="Relógio do dispositivo" tag="Automático" tagColor="#c8e1e6" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="bg-dark py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="font-display text-2xl sm:text-3xl text-cream/80 leading-relaxed">
            O Rio é uma das cidades mais belas do mundo.
            Também pede atenção.{' '}
            <span className="text-cream">
              O SalvaRota não tira você das ruas — te ajuda a aproveitá-las melhor.
            </span>
          </p>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="gradient-animated py-32 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber text-xs font-semibold tracking-[0.2em] uppercase mb-6">Lista de espera</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-cream mb-6 leading-tight">
            Seja dos primeiros<br />a caminhar com<br />
            <em className="not-italic text-amber">mais segurança.</em>
          </h2>
          <p className="text-cream/50 mb-10 text-lg">
            O SalvaRota está em desenvolvimento. Deixe seu e-mail e avisaremos quando estiver pronto.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark border-t border-white/5 px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <div className="flex items-center gap-6 text-cream/30 text-xs">
            <a href="/privacidade" className="hover:text-cream/60 transition">Privacidade</a>
            <a href="/termos" className="hover:text-cream/60 transition">Termos de uso</a>
            <span>© 2026 SalvaRota · Rio de Janeiro</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
