# web

Microsserviço do Acelera Enem para a landing page.

- Next.js
- Bun

| Pasta                    | Descrição                                   |
| ------------------------ | ------------------------------------------- |
| public                   | Imagens, ícones, vídeos                     |
| app                      | Páginas Next.js                             |
| lib                      | Conexão com API                             |
| ui                       | Módulos de Interface                        |
| &nbsp;&nbsp;↳ components | Componentes [shadcn](https://ui.shadcn.com) |

- [ ] [Automatizar o setor financeiro](#automatizar-o-setor-financeiro)
  - [x] Replicamento da plataforma do aluno
  - [x] Evolução da plataforma do aluno para lidar com pagamentos
  - [ ] [Criação de novo website](#criação-de-novo-website)
  - [ ] [Resolver automação entradas e saídas](#resolver-automação-entradas-e-saídas)
  - [ ] [Desligamento do ERP](#desligamento-do-erp)
  - [ ] [Migração dos Alunos](#migração-dos-alunos)
- [ ] Disponibilizar aulas online na plataforma
  - [ ] Remover integração com Google Calendar
  - [ ] Player de aulas, adicionar notas
  - [ ] Permitir que o aluno consiga marcar atividades como concluídas
    > O aluno deve conseguir clicar em algum botão para marcar a atividade como concluído.
  - [ ] Permitir que o aluno tenha acesso a diferentes atividades
    > Listar as atividades baseado na turma do aluno na página de atividades.
  - [ ] Internalizar as integrações com Google Calendar e Google Drive em “temas”, “calendário” e “atividades”
- [ ] Correção de redação na Plataforma do Aluno
  - [ ] Permitir que alunos façam upload da sua redação escrita a mão para a plataforma
  - [ ] Permitir que a professora veja redações a corrigir por turma
  - [ ] Permitir que a professora veja alunos por turma
  - [ ] Permitir que o aluno veja se a redação já foi corrigida, se sim, qual feedback a professora passou
- [ ] SEO para atrair mais alunos

# Automatizar o setor financeiro

### Criação de novo website

- [ ] Fazer os ajustes que o felipe mandou no whatsapp
- [ ] Testar todos os fluxos possíveis

---

### Resolver automação entradas e saídas

Estava pensando em fazer resumos semanais ou até mensais do que entrou para ele

---

### Desligamento do ERP

- [ ] Replicar no sistema financeiro as funcionalidades ERP atual
- [ ] Emissão de recibo
- [ ] Informe de rendimentos
- [ ] Emissão de nota fiscal
- [ ] Todos os recebimentos e pagamentos do mês para exportar em CSV para emissão de NFe em lote
- [ ] Emissão de nota fiscal em API

---

### Migração dos Alunos

- Migração de cadastros

Migrar todos os dados de alunos do Wix para a plataforma.

Como será migrado o histórico de pagamentos? Tem que ver junto ao MercadoPago

- Cadastro de senha e envio de e-mail

Enviar e-mails para todos os alunos atuais da plataforma com uma senha random para que possam fazer login com seu e-mail atual.

Logo após o login, perguntar se o aluno quer vincular sua conta ao Facebook ou Google, e também realizar a troca de senha.

# Disponibilizar aulas online na plataforma

Objetivo: Permitir a entrada de mais alunos.

# Correção de redação na Plataforma do Aluno

Objetivo: Deixar o processo de correção de redação mais rápido.
