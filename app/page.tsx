import { AtHandle } from "@/ui/AtHandle"
import { Button } from "@/ui/Button"

export const modules = [
  { name: "O TEXTO DO ENEM E A MACROESTRUTURA" },
  { name: "COMO FAZER UM PLANEJAMENTO DE TEXTO ESTRATÉGICO" },
  { name: "BRAINSTORMING E ABORDAGEM COMPLETA AO TEMA" },
  { name: "CONSTRUIR UMA INTRODUÇÃO EM 3 PASSOS" },
  { name: "DOMINAR O CICLO DO DESENVOLVIMENTO" },
  { name: "ELABORAR UM REPERTÓRIO PRODUTIVO NA C2" },
  { name: "ESTRATÉGIAS PARA GABARITAR A C3" },
  { name: "CRIAR UM PARÁGRAFO DE CONCLUSÃO COM  UMA PROPOSTA DE INTERVENÇÃO COM 5 ELEMENTOS" }.
]

export const materials = [
  { name: "Aulas Semanais", description: "Aulas de 1h30m de duração" },
  { name: "Correção de Redação", description: "1 correção por semana" },
  { name: "Atividades", description: "Propostas de Redação/Temas" },
  { name: "Comunidade", description: "Grupo privado de alunos" },
  { name: "Materiais", description: "Materiais das aulas e atividades" },
  { name: "Mentorias em Grupo", description: "Dedicadas à dúvidas" },
]

export default async function Home() {
  return (
    <main className="flex w-full flex-col">
      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-0 px-6 md:flex-row md:gap-16">
        <div className="flex w-full flex-col justify-center gap-6 py-6 md:py-32">
          <AtHandle />

          <h1 className="text-4xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Conquiste sua vaga:
            <br className="hidden lg:inline" /> Alcance os <span className="text-primary">900+</span> na Redação do ENEM
          </h1>

          <p className="text-zinc-600">
            Transforme a nota da sua redação com a professora Dulce Gomes.
            A chave para sua faculdade dos sonhos!
          </p>

          <Button className="w-max bg-primary text-black hover:bg-primary-light">
            Quero Conhecer o Curso
            <ArrowRight />
          </Button>
        </div>

        <div className="h-full w-full md:py-6">
          <img
            className="h-full max-h-[400px] w-full rounded-md object-cover lg:max-h-none"
            src="https://static.wixstatic.com/media/1dd3db_0f955ca5bde544e3995cf3c517b9b2d4~mv2.png/v1/fill/w_418,h_418,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/POST%20NOVAS%20VAGAS.png"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-32">
        <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
          No{" "}
          <span className="text-secondary-light">
            Curso de Redação Acelera Enem
          </span>{" "}
          <br className="hidden lg:inline" />
          você vai aprender
        </h2>

        <ul className="flex flex-col gap-6">
          {modules.map((mod) => (
            <li
              key={mod.name}
              className="flex items-baseline gap-2 text-xl font-medium"
            >
              <DownRightArrowIcon />
              {mod.name}
            </li>
          ))}
        </ul>

        <Button className="w-max bg-primary text-black hover:bg-primary-light">
          Quero Conhecer o Curso
          <ArrowRight />
        </Button>
      </section>

      <section className="mx-auto w-full max-w-7xl p-6">
        <div className="flex flex-col items-center gap-16 rounded-md border border-dashed border-zinc-400 p-4 lg:p-12">
          <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Você terá acesso a materiais exclusivos
          </h2>

          <ul className="grid w-full grid-cols-2 gap-6 lg:grid-cols-3">
            {materials.map((material) => (
              <li key={material.name} className="flex w-full flex-col gap-6">
                <div className="h-[130px] w-full rounded-md bg-zinc-300 lg:h-[320px]" />

                <footer className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-zinc-800">
                    {material.name}
                  </h3>

                  <p className="text-zinc-600">{material.description}</p>
                </footer>
              </li>
            ))}
          </ul>

          <Button className="w-max bg-primary text-black hover:bg-primary-light">
            Quero Conhecer o Curso
            <ArrowRight />
          </Button>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-6 px-6 py-6 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col gap-6 lg:py-32">
          <h2 className="text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Conheça sua professora
          </h2>

          <AtHandle />

          <p className="text-zinc-600">
            A professora Dulce Gomes atua há mais de 25 anos na Área de
            Educação. Graduada em Letras pela UNIP - Universidade Paulista em
            São Paulo e Pós Graduada em Neuropsicologia da Educação.
          </p>

          <p className="text-zinc-600">
            Possui ampla experiência como professora de redação, ganhando vários
            prêmios em todo o Brasil. Atuou 15 anos como professora efetiva no
            Governo do Estado de São Paulo e durante 6 anos ministrou aulas de
            Língua Portuguesa na Itália. Retornando da Itália, continuou sua
            carreira em Ilhéus em conceituadas instituições da região.
          </p>

          <p className="text-zinc-600">
            Atualmente, dedica-se exclusivamente a Mentorias de Redação e em
            grupo, possui a uma das maiores comunidades na área da educação que
            vem crescendo no Brasil e em outros países, na qual ensina o
            processo da escrita com passo a passo para escrever uma redação com
            as 5 competências exigidas Pelo Enem - Exame Nacional do Ensino
            Médio.
          </p>

          <Button className="w-max bg-primary text-black hover:bg-primary-light">
            Ver Mais
            <ArrowRight />
          </Button>
        </div>

        <div className="h-full w-full lg:py-32">
          <img
            className="h-full max-h-[300px] w-full rounded-md object-cover lg:max-h-none"
            src="https://static.wixstatic.com/media/98dd76_eac8c740c4d8430cad41ef48e4abe213~mv2.jpg/v1/crop/x_0,y_33,w_785,h_979/fill/w_409,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-06-23%20at%2018_edited.jpg"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-6 lg:flex-row-reverse lg:gap-16">
        <div className="flex w-full flex-col gap-6 lg:py-32">
          <h2 className="text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Resultados dos Nossos Alunos
          </h2>

          <div className="flex items-center gap-6">
            <p className="text-zinc-600">Avaliação dos Alunos:</p>

            <p className="text-zinc-400">
              <span className="text-black">4.9</span>/5
            </p>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-zinc-600">Alunos estudam em faculdades como:</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 984.76001 399.30667"
              height="399.30667"
              width="984.76001"
              xmlSpace="preserve"
              id="svg2"
              version="1.1"
              className="size-16"
            >
              <defs id="defs6">
                <clipPath id="clipPath20" clipPathUnits="userSpaceOnUse">
                  <path id="path18" d="M 0,2994.81 V 0 h 7385.68 v 2994.81 z" />
                </clipPath>
              </defs>
              <g
                transform="matrix(1.3333333,0,0,-1.3333333,0,399.30667)"
                id="g10"
              >
                <g transform="scale(0.1)" id="g12">
                  <g id="g14">
                    <g clipPath="url(#clipPath20)" id="g16">
                      <path
                        id="path22"
                        fill="#1b181a"
                        fillOpacity={1}
                        fillRule="evenodd"
                        stroke="none"
                        d="m 2395.31,698.602 c 0,-274.832 -224.18,-499 -499,-499 V 0 c 253.58,0 476.36,136.34 598.79,339.488 v 359.114 z m 199.59,0 c 0,-274.832 224.2,-499 499.08,-499 V 0 C 2840.27,0 2617.56,136.34 2495.1,339.488 v 359.114 h 99.8 z M 4990.27,2296.18 c 0,274.85 224.13,498.99 499.01,498.99 v 199.64 c -253.65,0 -476.46,-136.38 -598.82,-339.5 v -359.13 h 99.81 z m -199.68,-0.32 h 99.87 v 359.09 c -122.39,203.15 -345.24,339.5 -598.91,339.5 v -199.58 c 274.94,0 499.04,-224.2 499.04,-499.01 z m 0,-1597.008 c 0,-274.782 -224.1,-499.563 -499.04,-499.563 V 0.269531 c 384.84,0 698.72,313.890469 698.72,698.582469 H 4790.59 Z M 7185.95,2295.79 h 199.73 c 0,384.79 -313.87,698.6 -698.75,698.6 v -199.52 c 274.79,0 499.02,-224.2 499.02,-499.08 z M 199.609,698.852 H 0 C 0,314.16 313.824,0.269531 698.629,0.269531 V 199.898 c -274.875,0 -499.02,224.172 -499.02,498.954 z M 3094.12,2994.39 c -365.71,0 -699.43,-315.41 -698.81,-698.35 h 199.77 c 0,283.7 231.8,499.13 499.02,499.23 -0.67,95 -0.59,126.58 0.02,199.12 z M 4990.27,199.84 V 0.0898438 H 6187.95 V 998.371 H 7385.68 V 2295.79 H 7185.95 V 1198 h -998 V 2295.79 H 5988.31 V 199.898 l -998.04,-0.058 z m 499.01,2794.97 1197.65,-0.42 v -199.73 l -1197.65,0.51 z m -498.55,-1855.17 -0.46,-440.788 h -199.68 v 357.998 l -1167.54,1169.4 139.93,141.49 1227.75,-1228.1 z m -2595.42,715.39 1227.74,-1228.069 139.93,141.5 -1167.9,1169.369 v 358.21 H 2395.31 Z M 0,2994.39 H 2395.31 V 2794.87 H 1397.27 V 703.102 H 1197.62 V 2794.87 H 199.609 V 698.852 H 0 Z M 698.629,199.898 H 1896.49 V 0.0898438 H 698.629 Z m 2395.381,2794.442 1197.68,0.05 v -199.73 l -1197.68,0.61 z m -0.03,-2794.738 1197.71,-0.723 V 0.21875 l -1197.68,0.3125 -0.03,199.07075 v 0"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div className="h-full w-full lg:py-32">
          <img
            className="h-full max-h-[300px] w-full rounded-md object-cover lg:max-h-none"
            src="https://static.wixstatic.com/media/98dd76_eac8c740c4d8430cad41ef48e4abe213~mv2.jpg/v1/crop/x_0,y_33,w_785,h_979/fill/w_409,h_510,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202022-06-23%20at%2018_edited.jpg"
          />
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-row-reverse items-center gap-16 px-6 py-6 lg:py-32">
        <div className="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-primary py-32">
          <h2 className="text-center text-3xl font-bold leading-normal text-zinc-800 lg:text-5xl">
            Faltam 3 vagas para fechar as turmas
          </h2>

          <p className="text-zinc-600">
            Aceitamos Cartão de Crédito, PIX e Boleto
          </p>

          <Button className="w-max bg-black text-white hover:bg-zinc-700">
            Ver Cursos
            <ArrowRight />
          </Button>
        </div>
      </section>
    </main>
  )
}

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 10C3 9.8011 3.07902 9.61033 3.21967 9.46968C3.36032 9.32903 3.55109 9.25001 3.75 9.25001H14.388L10.23 5.29001C10.1557 5.22257 10.0956 5.1409 10.0534 5.04983C10.0112 4.95875 9.98771 4.86014 9.98432 4.75982C9.98093 4.65951 9.99771 4.55953 10.0337 4.46582C10.0696 4.37211 10.124 4.28657 10.1937 4.21427C10.2633 4.14196 10.3467 4.08437 10.439 4.04491C10.5313 4.00544 10.6306 3.9849 10.7309 3.9845C10.8313 3.98411 10.9307 4.00386 11.0233 4.0426C11.1159 4.08133 11.1998 4.13826 11.27 4.21001L16.77 9.46001C16.8426 9.52997 16.9003 9.61385 16.9398 9.70663C16.9792 9.79941 16.9995 9.89919 16.9995 10C16.9995 10.1008 16.9792 10.2006 16.9398 10.2934C16.9003 10.3862 16.8426 10.47 16.77 10.54L11.27 15.79C11.1998 15.8618 11.1159 15.9187 11.0233 15.9574C10.9307 15.9962 10.8313 16.0159 10.7309 16.0155C10.6306 16.0151 10.5313 15.9946 10.439 15.9551C10.3467 15.9156 10.2633 15.8581 10.1937 15.7857C10.124 15.7134 10.0696 15.6279 10.0337 15.5342C9.99771 15.4405 9.98093 15.3405 9.98432 15.2402C9.98771 15.1399 10.0112 15.0413 10.0534 14.9502C10.0956 14.8591 10.1557 14.7774 10.23 14.71L14.388 10.75H3.75C3.55109 10.75 3.36032 10.671 3.21967 10.5303C3.07902 10.3897 3 10.1989 3 10Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DownRightArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
    >
      <path
        d="M20.7806 17.0306L16.2806 21.5306C16.1399 21.6714 15.949 21.7504 15.75 21.7504C15.551 21.7504 15.3601 21.6714 15.2194 21.5306C15.0786 21.3899 14.9996 21.199 14.9996 21C14.9996 20.801 15.0786 20.6101 15.2194 20.4694L18.4397 17.25H6.75C6.55109 17.25 6.36032 17.171 6.21967 17.0303C6.07902 16.8897 6 16.6989 6 16.5V3C6 2.80109 6.07902 2.61032 6.21967 2.46967C6.36032 2.32902 6.55109 2.25 6.75 2.25C6.94891 2.25 7.13968 2.32902 7.28033 2.46967C7.42098 2.61032 7.5 2.80109 7.5 3V15.75H18.4397L15.2194 12.5306C15.0786 12.3899 14.9996 12.199 14.9996 12C14.9996 11.801 15.0786 11.6101 15.2194 11.4694C15.3601 11.3286 15.551 11.2496 15.75 11.2496C15.949 11.2496 16.1399 11.3286 16.2806 11.4694L20.7806 15.9694C20.8504 16.039 20.9057 16.1217 20.9434 16.2128C20.9812 16.3038 21.0006 16.4014 21.0006 16.5C21.0006 16.5986 20.9812 16.6962 20.9434 16.7872C20.9057 16.8783 20.8504 16.961 20.7806 17.0306Z"
        fill="currentColor"
      />
    </svg>
  )
}
