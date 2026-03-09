import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz', 'SOFT', 'WONK'],
})

export const metadata: Metadata = {
  title: 'SalvaRota — O caminho mais seguro de A a B.',
  description: 'SalvaRota calcula a rota mais segura para você andar pelo Rio de Janeiro. Não a mais rápida — a mais tranquila.',
  openGraph: {
    title: 'SalvaRota',
    description: 'O caminho mais seguro de A a B.',
    siteName: 'SalvaRota',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
