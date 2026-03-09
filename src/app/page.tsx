'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// ─── Logo ────────────────────────────────────────────────────────────────────
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: { w: 50, h: 40 }, md: { w: 65, h: 52 }, lg: { w: 80, h: 64 } }[size]
  return (
    <Image
      src="/logo.svg"
      alt="SalvaRota"
      width={dims.w}
      height={dims.h}
      priority
    />
  )
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Outer frame */}
      <div className="relative rounded-[42px] bg-[#111] p-[10px] shadow-2xl shadow-black/60 ring-1 ring-white/10">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[34px]">
          <Image
            src="/app-screen.png"
            alt="SalvaRota app"
            width={280}
            height={607}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
      {/* Glow */}
      <div className="absolute -inset-6 bg-amber/8 rounded-full blur-3xl -z-10"/>
    </div>
  )
}

// ─── Waitlist Form ────────────────────────────────────────────────────────────
function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 800))
    setStatus('done')
  }

  if (status === 'done') {
    return (
      <div className="text-center py-4">
        <div className="text-amber text-2xl mb-2">✓</div>
        <p className="text-cream font-medium">Você está na lista.</p>
        <p className="text-cream/40 text-sm mt-1">Avisaremos quando o SalvaRota estiver disponível.</p>
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen">

      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[#1C1915]/70 border-white/5' : 'border-transparent'}`}>
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
              SalvaRota calcula a rota mais segura para você caminhar pelo Rio de Janeiro.
              Não a mais rápida — a mais tranquila.
            </p>
            <WaitlistForm />
            <p className="text-cream/30 text-xs mt-4">
              Gratuito. Sem spam. Avisaremos quando estivermos prontos.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* PHOTO 1 — Historic Rio street */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/rio-street.jpg"
          alt="Rua histórica do Rio de Janeiro"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Brand overlay: dark warm tone + slight sepia + grain texture */}
        <div className="absolute inset-0 bg-[#1C1915]/70 mix-blend-multiply" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.4,
        }} />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-end px-6 md:px-12 pb-12">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl text-cream/90 max-w-2xl leading-tight">
            "Nem toda rua é igual.<br />
            <span className="text-cream/55">Horário importa. Iluminação importa.<br />
            O que está aberto ao redor importa."</span>
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
          <div className="grid md:grid-cols-3 gap-4">
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
              <div
                key={step.n}
                className="group rounded-2xl px-6 py-7 transition-colors duration-200 hover:bg-[#242018] cursor-default"
              >
                <p className="font-display text-5xl text-amber/20 group-hover:text-amber/35 transition-colors mb-4 leading-none">{step.n}</p>
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

      {/* PHOTO 2 — Copacabana calçadão aerial */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/rio-cidade-bonita.jpg"
          alt="Vista aérea do calçadão de Copacabana, Rio de Janeiro"
          fill
          className="object-cover object-[center_40%]"
          sizes="100vw"
          style={{ filter: 'sepia(0.28) saturate(1.1) brightness(0.88) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-[#2A1E14]/70 mix-blend-multiply" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.45,
        }} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <p className="font-display text-4xl sm:text-5xl md:text-6xl text-cream leading-tight max-w-3xl">
              O Rio é uma das<br />
              cidades mais belas do mundo.
            </p>
            <p className="text-cream/50 text-lg mt-4 max-w-xl mx-auto">
              O SalvaRota não tira você das ruas — te ajuda a aproveitá-las com mais segurança.
            </p>
          </div>
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
