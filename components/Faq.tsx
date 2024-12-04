import { ArrowDownIcon } from "lucide-react"

const questions: Array<{ question: string; answer: string }> = [
  {
    question: "Como funciona o curso de redação para o ENEM?",
    answer:
      "Nosso curso oferece aulas presenciais, videoaulas, materiais de apoio e correção de redações com base nos critérios oficiais do ENEM",
  },
  {
    question: "Qual é o nível de suporte oferecido aos alunos?",
    answer:
      "Oferecemos suporte via whatsapp ou e-mail para tirar dúvidas, além de acompanhamento personalizado com a professora de redação.",
  },
  {
    question: "As correções são feitas por professores especializados?",
    answer:
      "Sim, todas as redações são corrigidas por professores com experiência em preparação para o ENEM, levando em consideração os cinco critérios da matriz de avaliação.",
  },
  {
    question: "O curso aborda temas de redação anteriores do ENEM?",
    answer:
      "Sim, analisamos e explicamos temas de redações de anos anteriores, além de oferecer sugestões de temas prováveis para o próximo exame.",
  },
  {
    question:
      "O curso é adequado para quem tem dificuldades em escrever redações?",
    answer:
      "Sim! Temos aulas passo a passo para construir uma redação nota 1000 para alunos de qualquer nível.",
  },
  {
    question: "O curso oferece simulados de redação?",
    answer:
      "Sim, realizamos simulados periódicos com temas inéditos para que você treine suas habilidades e fique preparado para o dia do exame.",
  },
  {
    question: "Posso acessar o curso pelo celular?",
    answer:
      "Sim, nossa plataforma pode ser acessada por qualquer dispositivo com internet, incluindo celulares e tablets.",
  },
  {
    question: "Como faço para me inscrever?",
    answer:
      'Basta clicar no botão "Matricule-se", escolher o plano de sua preferência e realizar o pagamento. Em seguida, você sera redirecionado à plataforma.',
  },
  {
    question: "Qual é a duração do curso?",
    answer:
      "O acesso ao curso é válido até a data do ENEM, permitindo que você estude no seu ritmo.",
  },
  {
    question: "Há uma política de reembolso?",
    answer:
      "Sim, oferecemos reembolso total em até 7 dias após a compra, caso você não fique satisfeito com o curso.",
  },
  {
    question: "Até quando posso usar meu plano?",
    answer:
      "Nossos planos são pré-pagos e tem validade de 1 mes. Após esse período ele deve ser renovado.",
  },
  {
    question: "Preciso ter algum conhecimento prévio para fazer o curso?",
    answer:
      "Não, o curso é adequado tanto para iniciantes quanto para quem já tem experiência em redação e quer aprimorar suas habilidades.",
  },
  {
    question: "O curso aborda temas atuais e possíveis para o ENEM 2024?",
    answer:
      "Sim, além de analisarmos temas passados, abordamos temas atuais e questões que podem ser relevantes para o próximo ENEM.",
  },
  {
    question: "Quais são os métodos de pagamento disponíveis?",
    answer:
      "Aceitamos pagamentos via cartão de crédito, boleto bancário e Pix.",
  },
  {
    question: "O curso oferece materiais de apoio?",
    answer:
      "Sim, disponibilizamos apostilas, tempestade de ideias(que ajudam a produzir sua redação) e exercícios complementares para reforçar o aprendizado.",
  },
  {
    question:
      "Como posso melhorar minha nota de redação no ENEM com este curso?",
    answer:
      "Nossas correções detalhadas, simulados e materiais específicos te ajudarão a entender onde você pode melhorar e a atingir uma nota mais alta.",
  },
  {
    question:
      "Vocês ensinam técnicas específicas para cada critério de correção do ENEM?",
    answer:
      "Sim, nossas aulas são divididas por critérios de correção, como coesão, coerência, argumentação, domínio da norma culta e proposta de intervenção.",
  },
  {
    question: "O curso tem garantia de aprovação?",
    answer:
      "Embora não possamos garantir aprovação, fornecemos todas as ferramentas e suporte necessários para maximizar seu desempenho na redação do ENEM.",
  },
  {
    question: "Qual é a duração média de cada aula?",
    answer: "As aulas duram 90 minutos.",
  },
  {
    question: "O que acontece se eu precisar cancelar meu plano?",
    answer:
      "Você pode cancelar a sua matrícula a qualquer momento sem custos adicionais.",
  },
]

export function Faq() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-6 px-6 py-6 md:flex-row lg:gap-16 lg:py-32">
      <h2 className="shrink-0 text-2xl font-bold leading-normal text-zinc-800 lg:text-4xl">
        Perguntas Frequentes
      </h2>

      <ul className="flex w-full flex-col gap-4">
        {questions.map((question) => (
          <li key={question.question}>
            <details className="border-b border-input py-4">
              <summary className="flex cursor-pointer items-center justify-between">
                {question.question}
                <ArrowDownIcon className="h-4 w-4" />
              </summary>

              <div className="mt-4">
                <p className="text-muted-foreground">{question.answer}</p>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
