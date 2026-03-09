import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termos de Uso — SalvaRota',
  description: 'Termos de uso e condições gerais do SalvaRota.',
}

function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="SalvaRota"
      width={50}
      height={40}
      priority
    />
  )
}

export default function Termos() {
  return (
    <div className="min-h-screen bg-dark text-cream">

      {/* NAV */}
      <nav className="border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/"
          className="text-sm text-cream/50 hover:text-cream transition"
        >
          ← Voltar ao início
        </Link>
      </nav>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 pb-24">

        <p className="text-amber text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Termos de Uso
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-4 leading-tight">
          Regras claras<br />para todos.
        </h1>
        <p className="text-cream/40 text-sm mb-12">
          Última atualização: março de 2026
        </p>

        <div className="space-y-10 text-cream/75 leading-relaxed">

          <section>
            <h2 className="font-display text-xl text-cream mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar este site e/ou se inscrever na lista de espera do SalvaRota, você declara ter
              lido, compreendido e concordado com os presentes Termos de Uso. Caso não concorde com
              algum ponto, pedimos que não utilize nossos serviços.
            </p>
            <p className="mt-3">
              O SalvaRota é desenvolvido e operado por SalvaRota Tecnologia Ltda., com sede no
              Rio de Janeiro — RJ, Brasil.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">2. Descrição do Serviço</h2>
            <p className="mb-4">
              O SalvaRota é um aplicativo de navegação que calcula rotas seguras para pedestres no
              Rio de Janeiro, utilizando dados públicos de criminalidade, iluminação e estabelecimentos abertos.
            </p>
            <p>
              <strong className="text-cream">O aplicativo está em fase de desenvolvimento.</strong> O presente
              site serve exclusivamente para captação de interesse por meio de lista de espera. Ao se
              inscrever, você receberá uma notificação quando o aplicativo estiver disponível para uso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">3. Lista de Espera — Gratuidade</h2>
            <p>
              A inscrição na lista de espera é completamente <strong className="text-cream">gratuita</strong>.
              Não existe qualquer cobrança, assinatura ou pagamento associado a esta fase do produto.
              Você pode se descadastrar a qualquer momento sem ônus.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">4. Ausência de Garantias</h2>
            <p className="mb-4">
              O SalvaRota está em desenvolvimento ativo. Por isso, declaramos expressamente que:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Não garantimos prazo definido para lançamento do aplicativo.
              </li>
              <li>
                As funcionalidades descritas neste site são objetivos de produto e podem ser
                alteradas, reduzidas ou expandidas sem aviso prévio.
              </li>
              <li>
                A inscrição na lista de espera não garante acesso prioritário, desconto ou
                qualquer benefício específico, exceto a notificação de lançamento.
              </li>
              <li>
                O serviço é fornecido &ldquo;no estado em que se encontra&rdquo;, sem garantias expressas
                ou implícitas de adequação a qualquer finalidade específica.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">5. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O SalvaRota é uma ferramenta de apoio à navegação e <strong className="text-cream">não substitui
              o julgamento pessoal do usuário sobre sua segurança</strong>. Em nenhuma hipótese o SalvaRota
              ou seus responsáveis serão responsabilizados por:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Danos decorrentes do uso ou da impossibilidade de uso do aplicativo.</li>
              <li>Decisões de rota tomadas com base nas sugestões do aplicativo.</li>
              <li>Inexatidões nos dados públicos utilizados para o cálculo de segurança.</li>
              <li>Eventos imprevisíveis, caso fortuito ou força maior.</li>
            </ul>
            <p className="mt-4">
              O usuário é sempre o responsável final pelas decisões relacionadas à sua segurança pessoal.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">6. Uso Adequado</h2>
            <p className="mb-4">Ao utilizar este site e nossos serviços, você concorda em não:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Usar scripts automatizados para submeter múltiplos cadastros.</li>
              <li>Utilizar dados falsos, e-mails de terceiros sem autorização ou identidades fictícias.</li>
              <li>Tentar comprometer a segurança ou disponibilidade do site.</li>
              <li>Utilizar nosso nome ou marca para fins não autorizados.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">7. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site — incluindo logotipo, textos, imagens, design, código e a
              marca SalvaRota — é propriedade exclusiva de SalvaRota Tecnologia Ltda. e está protegido
              pelas leis brasileiras e internacionais de propriedade intelectual.
            </p>
            <p className="mt-3">
              É vedada a reprodução, distribuição, modificação ou uso comercial de qualquer elemento
              do site sem autorização prévia e expressa por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">8. Links para Sites de Terceiros</h2>
            <p>
              Este site pode conter links para sites de terceiros (como fontes de dados públicos ou
              parceiros de tecnologia). O SalvaRota não se responsabiliza pelo conteúdo, políticas
              de privacidade ou práticas de sites externos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">9. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Alterações
              significativas serão comunicadas por e-mail aos inscritos na lista de espera. O uso
              continuado do serviço após a publicação das alterações implica aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">10. Lei Aplicável e Foro</h2>
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
              Fica eleito o foro da Comarca do Rio de Janeiro — RJ como competente para dirimir
              quaisquer conflitos decorrentes deste instrumento, com renúncia expressa a qualquer outro,
              por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">11. Contato</h2>
            <p>
              Para esclarecimentos sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="mt-4 bg-white/5 border border-white/8 rounded-2xl px-5 py-4">
              <p className="text-cream font-medium">SalvaRota Tecnologia Ltda.</p>
              <p className="text-cream/50 text-sm mt-1">Rio de Janeiro — RJ, Brasil</p>
              <a
                href="mailto:contato@salvarota.com"
                className="text-amber hover:text-amber/80 transition text-sm mt-1 inline-block underline underline-offset-2"
              >
                contato@salvarota.com
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-6 text-cream/30 text-xs">
            <Link href="/privacidade" className="hover:text-cream/60 transition">Privacidade</Link>
            <Link href="/termos" className="text-amber/70">Termos de uso</Link>
            <span>© 2026 SalvaRota · Rio de Janeiro</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
