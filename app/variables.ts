import Classes from "../public/material/classes.jpg"
import Correction from "../public/material/correction.png"
import Activities from "../public/material/activities.jpg"
import Comunity from "../public/material/comunity.jpg"
import material from "../public/material/material.jpg"
import mentoring from "../public/material/mentoring.png"

export const modules = [
  { name: "O TEXTO DO ENEM E A MACROESTRUTURA" },
  { name: "COMO FAZER UM PLANEJAMENTO DE TEXTO ESTRATÉGICO" },
  { name: "BRAINSTORMING E ABORDAGEM COMPLETA AO TEMA" },
  { name: "CONSTRUIR UMA INTRODUÇÃO EM 3 PASSOS" },
  { name: "DOMINAR O CICLO DO DESENVOLVIMENTO" },
  { name: "ELABORAR UM REPERTÓRIO PRODUTIVO NA C2" },
  { name: "ESTRATÉGIAS PARA GABARITAR A C3" },
  {
    name: "CRIAR UM PARÁGRAFO DE CONCLUSÃO COM  UMA PROPOSTA DE INTERVENÇÃO COM 5 ELEMENTOS",
  },
]

export const materials = [
  {
    name: "Aulas Semanais",
    description: "Aulas de 1h30m de duração",
    img: Classes,
  },
  {
    name: "Correção de Redação",
    description: "1 correção por semana",
    img: Correction,
  },
  {
    name: "Atividades",
    description: "Temas/Tempestades de Ideias",
    img: Activities,
  },
  { name: "Comunidade", description: "Grupo privado de alunos", img: Comunity },
  {
    name: "Materiais Exclusivos",
    description: "Materiais das aulas e atividades",
    img: material,
  },
  {
    name: "Mentorias em Grupo",
    description: "Dedicadas à dúvidas",
    img: mentoring,
  },
]

export const grades = async () => [
  {
    name: "Júlia Cardoso",
    grade: 980,
    img: await import("../public/students/julia_cardoso.jpg"),
  },
  {
    name: "Luan Henrique",
    grade: 960,
    img: await import("../public/students/luan_henrique.jpg"),
  },
  {
    name: "Nicole Scandar",
    grade: 960,
    img: await import("../public/students/nicole_scandar.jpg"),
  },
  {
    name: "Maria Bela",
    grade: 960,
    img: await import("../public/students/maria_bela.jpg"),
  },
  {
    name: "Raquel Sena",
    grade: 960,
    img: await import("../public/students/raquel_sena.jpg"),
  },
  {
    name: "Leonardo Albuquerque",
    grade: 940,
    img: await import("../public/students/leonardo_albuquerque.jpg"),
  },
  {
    name: "Kauê Santos",
    grade: 940,
    img: await import("../public/students/kaue_santos.jpg"),
  },
  {
    name: "Júlia Liz",
    grade: 940,
    img: await import("../public/students/julia_liz.jpg"),
  },
  {
    name: "Lavínia Rocha",
    grade: 940,
    img: await import("../public/students/lavinia_rocha.jpg"),
  },
  {
    name: "Alonso Silva",
    grade: 840,
    img: await import("../public/students/alonso_silva.png"),
  },
  {
    name: "Isabelle Bonfim",
    grade: 920,
    img: await import("../public/students/isabelle_bonfim.jpg"),
  },
  {
    name: "Emília Kruschewsky",
    grade: 920,
    img: await import("../public/students/emilia_kruschewsky.jpg"),
  },
  {
    name: "Bruna Thainá",
    grade: 940,
    img: await import("../public/students/bruna_thaina.jpg"),
  },
  {
    name: "Yan Sandes",
    grade: 920,
    img: await import("../public/students/yan_sandes.jpg"),
  },
  {
    name: "Giulia Lima",
    grade: 960,
    img: await import("../public/students/giulia_lima.jpg"),
  },
  {
    name: "Júllia Belmiro",
    grade: 960,
    img: await import("../public/students/jullia_belmiro.jpg"),
  },
  {
    name: "Mariana Miguel",
    grade: 920,
    img: await import("../public/students/mariana_miguel.jpg"),
  },
  {
    name: "Maria Júlia",
    grade: 920,
    img: await import("../public/students/maria_julia.jpg"),
  },
  {
    name: "Giovana Higino",
    grade: 960,
    img: await import("../public/students/giovana_higino.jpg"),
  },
  {
    name: "Kaúly Portela",
    grade: 920,
    img: await import("../public/students/kauly_portella.jpg"),
  },
  {
    name: "Kauan Macedo",
    grade: 880,
    img: await import("../public/students/kauan_macedo.png"),
  },
  {
    name: "Maria Cândida",
    grade: 960,
    img: await import("../public/students/maria_candida.jpg"),
  },
  {
    name: "Maria Amélia",
    grade: 940,
    img: await import("../public/students/maria_amelia.jpg"),
  },
  {
    name: "Isabelli Sousa",
    grade: 960,
    img: await import("../public/students/isabelli_sousa.jpg"),
  },
  {
    name: "Hellen Victória",
    grade: 920,
    img: await import("../public/students/hellen_victoria.png"),
  },
  {
    name: "Isabella Marques",
    grade: 960,
    img: await import("../public/students/isabella_marques.jpg"),
  },
  {
    name: "Stella Lopes",
    grade: 940,
    img: await import("../public/students/stella_lopes.jpg"),
  },
  {
    name: "Maria Clara",
    grade: 940,
    img: await import("../public/students/maria_clara.jpg"),
  },
  {
    name: "Rodrigo Paiva",
    grade: 940,
    img: await import("../public/students/rodrigo_paiva.jpg"),
  },
  {
    name: "Júlia Gomes",
    grade: 960,
    img: await import("../public/students/julia_gomes.jpg"),
  },
  {
    name: "Cecília Dias",
    grade: 940,
    img: await import("../public/students/cecilia_dias.jpg"),
  },
  {
    name: "Maria Dias",
    grade: 920,
    img: await import("../public/students/maria_dias.jpg"),
  },
  {
    name: "Arthur Souza",
    grade: 880,
    img: await import("../public/students/arthur_souza.png"),
  },
  {
    name: "Maria Fernanda",
    grade: 960,
    img: await import("../public/students/maria_fernanda.jpg"),
  },
  {
    name: "Luiz Felipe",
    grade: 920,
    img: await import("../public/students/luiz_felipe.jpg"),
  },
  {
    name: "Ronald Tata",
    grade: 920,
    img: await import("../public/students/ronald_tata.png"),
  },
  {
    name: "Letícia Fraga",
    grade: 940,
    img: await import("../public/students/leticia_fraga.jpg"),
  },
  {
    name: "Hugo Chaves",
    grade: 900,
    img: await import("../public/students/hugo_chaves.jpg"),
  },
  {
    name: "Igor Oliveira",
    grade: 900,
    img: await import("../public/students/igor_oliveira.jpg"),
  },
  {
    name: "Giovanna Castro",
    grade: 940,
    img: await import("../public/students/giovanna_castro.jpg"),
  },
  {
    name: "Giovanna Virgínia",
    grade: 960,
    img: await import("../public/students/giovanna_virginia.jpg"),
  },
  {
    name: "Maria Clara Souza",
    grade: 960,
    img: await import("../public/students/maria_clara_souza.jpg"),
  },
  {
    name: "Giovanna Viana",
    grade: 940,
    img: await import("../public/students/giovanna_viana.jpg"),
  },
  {
    name: "Tainá Coelho",
    grade: 980,
    img: await import("../public/students/taina_coelho.jpg"),
  },
  {
    name: "Giovanna Melo",
    grade: 920,
    img: await import("../public/students/giovanna_melo.png"),
  },
  {
    name: "Giulia Araújo",
    grade: 920,
    img: await import("../public/students/giulia_araujo.jpg"),
  },
  {
    name: "Jõao Flávio",
    grade: 860,
    img: await import("../public/students/joao_flavio.png"),
  },
  {
    name: "Júlia Gondim",
    grade: 940,
    img: await import("../public/students/julia_gondim.jpg"),
  },
  {
    name: "Ian Ourives",
    grade: 960,
    img: await import("../public/students/ian_ourives.png"),
  },
  {
    name: "Gabriel Dalben",
    grade: 940,
    img: await import("../public/students/gabriel_dalben.png"),
  },
  {
    name: "Guilherme Menezes",
    grade: 960,
    img: await import("../public/students/guilherme_menezes.png"),
  },
  {
    name: "Fernanda Zambiasi",
    grade: 960,
    img: await import("../public/students/fernanda_zambiasi.png"),
  },
  {
    name: "Jõao Alberto Bichara",
    grade: 920,
    img: await import("../public/students/joao_alberto_bichara.png"),
  },
  {
    name: "Geórgia Meyssa",
    grade: 920,
    img: await import("../public/students/georgia_meyssa.png"),
  },
]
