import Link from "next/link"

export default function NotFound() {
  return (
    <section className="itmes-center mx-4 mt-16 flex max-w-2xl flex-col gap-8 rounded-3xl border border-input p-4 py-8 sm:mx-auto">
      <h1 className="text-center text-3xl font-bold">Página não encontrada</h1>

      <p className="text-center text-muted-foreground">
        Re-estruturamos nosso website e criamos uma plataforma do aluno para
        melhorar a experiência de todos, então pode ser que algumas páginas que
        você está acostumado tenham mudado de lugar.
      </p>

      <a
        href={process.env.NEXT_PUBLIC_DASHBOARD_URL}
        className="flex flex-col gap-2 rounded-3xl bg-black/5 p-8 transition hover:bg-black/10"
      >
        <strong className="text-lg">Plataforma do Aluno</strong>
        <p className="text-muted-foreground">
          Caso esteja procurando assuntos relacionados a área do aluno
        </p>
      </a>

      <Link
        href="/"
        className="flex flex-col gap-2 rounded-3xl bg-black/5 p-8 transition hover:bg-black/10"
      >
        <strong className="text-lg">Site Acelera Enem</strong>
        <p className="text-muted-foreground">
          Caso esteja procurando mais sobre o curso Acelera Enem
        </p>
      </Link>
    </section>
  )
}
