import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade — SalvaRota',
  description: 'Saiba como o SalvaRota coleta, usa e protege seus dados pessoais.',
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

export default function Privacidade() {
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
          Política de Privacidade
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-cream mb-4 leading-tight">
          Como cuidamos<br />dos seus dados.
        </h1>
        <p className="text-cream/40 text-sm mb-12">
          Última atualização: março de 2026
        </p>

        <div className="space-y-10 text-cream/75 leading-relaxed">

          <section>
            <h2 className="font-display text-xl text-cream mb-3">1. Quem somos</h2>
            <p>
              O SalvaRota é um aplicativo de navegação segura para pedestres no Rio de Janeiro,
              desenvolvido e operado por SalvaRota Tecnologia Ltda., com sede no Rio de Janeiro — RJ, Brasil.
              Para dúvidas sobre esta política, entre em contato pelo e-mail{' '}
              <a href="mailto:contato@salvarota.com" className="text-amber hover:text-amber/80 transition underline underline-offset-2">
                contato@salvarota.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">2. Quais dados coletamos</h2>
            <p className="mb-4">
              No momento, o SalvaRota está em fase de lista de espera. Coletamos apenas:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-cream">Endereço de e-mail</strong> — fornecido voluntariamente
                ao se inscrever na lista de espera, exclusivamente para notificá-lo sobre o lançamento do aplicativo.
              </li>
            </ul>
            <p className="mt-4">
              Não coletamos nome, CPF, localização, dados financeiros ou qualquer outra informação pessoal nesta fase.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">3. Para que usamos seus dados</h2>
            <p className="mb-4">Utilizamos seu e-mail exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Informar quando o aplicativo SalvaRota estiver disponível para download.</li>
              <li>Enviar atualizações relevantes sobre o desenvolvimento do produto.</li>
            </ul>
            <p className="mt-4">
              Não enviamos spam. Não usamos seu e-mail para fins comerciais de terceiros.
              Cada comunicação incluirá um link de descadastramento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">4. Compartilhamento de dados</h2>
            <p className="mb-4">
              <strong className="text-cream">Não vendemos, alugamos nem comercializamos seus dados pessoais.</strong>
            </p>
            <p className="mb-4">
              Seus dados podem ser compartilhados apenas com prestadores de serviço essenciais à operação
              desta lista de espera, especificamente:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-cream">Loops (loops.so)</strong> — plataforma de e-mail marketing
                que armazena e gerencia nossa lista de espera. Consulte a{' '}
                <a
                  href="https://loops.so/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber hover:text-amber/80 transition underline underline-offset-2"
                >
                  política de privacidade deles
                </a>.
              </li>
              <li>
                <strong className="text-cream">Vercel</strong> — infraestrutura de hospedagem deste site.
                Dados de acesso anônimos (como país de origem e tipo de dispositivo) podem ser coletados
                via Vercel Analytics sem identificação pessoal.
              </li>
            </ul>
            <p className="mt-4">
              Nenhum outro terceiro tem acesso ao seu e-mail.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">5. Vercel Analytics</h2>
            <p>
              Este site utiliza o Vercel Analytics para monitoramento de desempenho. Essa ferramenta coleta
              dados estatísticos e anônimos sobre visitas (como páginas acessadas e tempo de carregamento).
              Nenhum dado pessoal identificável é coletado por esta ferramenta. Não utilizamos cookies de
              rastreamento ou pixels de anúncio.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">6. Base legal (LGPD)</h2>
            <p className="mb-4">
              O tratamento dos seus dados é realizado com base nas seguintes hipóteses previstas na
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018):
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong className="text-cream">Consentimento</strong> — ao inserir seu e-mail no formulário
                e clicar em &ldquo;Entrar na lista&rdquo;, você consente com o uso do seu dado conforme descrito
                nesta política.
              </li>
              <li>
                <strong className="text-cream">Legítimo interesse</strong> — para o funcionamento seguro e
                aprimoramento deste serviço.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">7. Seus direitos</h2>
            <p className="mb-4">
              Em conformidade com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Confirmar se tratamos dados seus.</li>
              <li>Acessar os dados que temos sobre você.</li>
              <li>Corrigir dados incorretos ou desatualizados.</li>
              <li>Solicitar a exclusão dos seus dados da nossa base.</li>
              <li>Revogar seu consentimento a qualquer momento.</li>
              <li>Solicitar portabilidade dos seus dados.</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um desses direitos, envie um e-mail para{' '}
              <a href="mailto:contato@salvarota.com" className="text-amber hover:text-amber/80 transition underline underline-offset-2">
                contato@salvarota.com
              </a>{' '}
              com o assunto &ldquo;Direitos LGPD&rdquo;. Responderemos em até 15 dias úteis.
            </p>
            <p className="mt-4">
              Você também pode se descadastrar da lista de espera a qualquer momento clicando no link
              de cancelamento presente em qualquer e-mail que enviarmos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">8. Retenção de dados</h2>
            <p>
              Mantemos seu e-mail enquanto você permanecer inscrito na lista de espera ou enquanto
              for necessário para cumprimento das finalidades descritas nesta política. Após o
              descadastramento ou solicitação de exclusão, seus dados serão removidos da nossa base
              dentro de 30 dias.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra
              acesso não autorizado, perda ou divulgação indevida. Nossos prestadores de serviço
              (Loops e Vercel) são empresas reconhecidas que seguem padrões internacionais de
              segurança da informação.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">10. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Quando o fizermos,
              publicaremos a nova versão nesta página com a data de atualização. Se as mudanças
              forem significativas, notificaremos os inscritos por e-mail.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-cream mb-3">11. Contato</h2>
            <p>
              Para quaisquer questões, solicitações ou reclamações relacionadas à privacidade
              dos seus dados, entre em contato conosco:
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
            <Link href="/privacidade" className="text-amber/70">Privacidade</Link>
            <Link href="/termos" className="hover:text-cream/60 transition">Termos de uso</Link>
            <span>© 2026 SalvaRota · Rio de Janeiro</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
