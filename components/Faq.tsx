import { ArrowDownIcon } from "lucide-react"

const questions: Array<{ question: string; answer: string }> = [
  {
    question: "Como serão realizadas as cobranças das mensalidades",
    answer:
      "Todos os meses, no dia em que realizou a compra da primeira mensalidade, chegará uma nova mensalidade para pagamento na plataforma do aluno",
  },
  {
    question: "Como serão realizadas as cobranças das mensalidades",
    answer:
      "Todos os meses, no dia em que realizou a compra da primeira mensalidade, chegará uma nova mensalidade para pagamento na plataforma do aluno",
  },
  {
    question: "Como serão realizadas as cobranças das mensalidades",
    answer:
      "Todos os meses, no dia em que realizou a compra da primeira mensalidade, chegará uma nova mensalidade para pagamento na plataforma do aluno",
  },
  {
    question: "Como serão realizadas as cobranças das mensalidades",
    answer:
      "Todos os meses, no dia em que realizou a compra da primeira mensalidade, chegará uma nova mensalidade para pagamento na plataforma do aluno",
  },
  {
    question: "Como serão realizadas as cobranças das mensalidades",
    answer:
      "Todos os meses, no dia em que realizou a compra da primeira mensalidade, chegará uma nova mensalidade para pagamento na plataforma do aluno",
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
