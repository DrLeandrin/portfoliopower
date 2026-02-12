### Stack (Opção B — “UAUU 3D”)

* **Next.js (App Router)** + **TypeScript**
* **react-three-fiber** (R3F) + **@react-three/drei** (helpers)
* **Framer Motion** (transições 2D, entrada de seções, microinterações)
* **Tailwind** + **shadcn/ui** (layout/typografia/cards/modais)
* **next/image** (prints otimizados)
* Hospedagem: **Vercel**

---

## Conceito visual (pra ficar “UAUU” e ainda vender)

Você vai ter **uma landing page única** com um **Hero 3D interativo** que “representa” seus produtos (SaaS) como objetos em um “ecossistema” (ex.: um “núcleo” e vários módulos orbitando). O resto da página é extremamente claro e comercial: lista de projetos em cards, métricas, stack, links, etc.

**Regra de ouro:** o 3D impressiona por 6–10 segundos; quem contrata decide pelos **cards e provas** (prints, números, links, descrição objetiva).

---

# Como apresentar os projetos: cards vs componentes individuais?

Use **cards como a “fonte de verdade”** (rápido, escaneável, consistente) e complemente com **um detalhe expandido** (modal/drawer) para cada projeto.

### Por quê?

* Cards dão visão geral e comparabilidade.
* Modal/drawer evita “página pra cada projeto” (você disse que quer 1 landing).
* Você consegue enriquecer com mais prints, stack, desafios e decisões técnicas sem poluir a grade.

**Formato recomendado (por projeto):**

* Nome + tagline (1 linha)
* Status (prod / beta / descontinuado)
* 1 print (ou gif curto)
* 3 “chips”: stack, domínio, highlight
* 2 CTAs: “Abrir demo” e “Ver detalhes”
* No detalhe: 2–4 prints, “o problema”, “solução”, “arquitetura”, “métricas”, “lições”

---

# Estrutura da página (1 rota)

1. **Hero 3D (UAUU)**

   * Canvas 3D full-bleed, com texto 2D por cima
   * CTA: “Ver projetos” (scroll)
2. **Projects Grid (cards)**

   * Filtro simples (tags: IA, Saúde, SaaS, B2B, etc.)
3. **Proof / Impact**

   * números (usuários, clínicas, tempo economizado, etc.)
4. **About (curto)**

   * 3 bullets fortes
5. **Contact**

   * e-mail, LinkedIn, GitHub, Calendly (se usar)

---

# Arquitetura de componentes (simples e profissional)

### Dados (fonte única)

Crie um arquivo tipo `projects.ts` com um array tipado:

* `id`, `name`, `tagline`
* `description` (curta + longa)
* `tags[]`
* `stack[]`
* `links` (demo, repo, landing, vídeo)
* `images[]` (prints)
* `metrics[]` (ex.: “reduz tempo de evolução em X%”)
* `featured` (pra destacar 3 no topo)
* `three` (metadados visuais: cor/posição/ícone/“orbita”)

Isso te permite:

* renderizar cards
* alimentar o modal
* alimentar o 3D (orbitar “nós” do mesmo dataset)

### Componentes

* `<Hero3D />` (Canvas + cena + overlays)
* `<ProjectsSection />`

  * `<ProjectCard />`
  * `<ProjectModal />` (Dialog do shadcn)
* `<TagFilter />`
* `<MetricsSection />`
* `<AboutSection />`
* `<ContactSection />`

---

# O “UAUU”: como desenhar o 3D sem virar peso morto

### 1) Cena 3D (recomendação prática)

Uma cena elegante e controlável:

* **Um “core”** no centro (representa você / sua suíte)
* **Nós orbitando** (cada SaaS/projeto)
* Um fundo com partículas sutis ou gradiente volumétrico (bem leve)

Interação:

* Hover em um nó: ele acende e mostra tooltip (2D overlay)
* Clique em um nó: abre o modal do projeto correspondente (mesmo que o card abriria)
* Scroll: camera/posição muda levemente (parallax) + revela seções

### 2) Evitar 3D “barato”

* Não use modelos complexos no começo. Use **geometrias simples** (icosaedro, torus, rounded box) com materiais bonitos.
* Iluminação simples, mas bem feita: 1 key light + 1 fill + environment.
* Animação com suavidade (damping), nada frenético.

---

# Performance (obrigatório pra landing ficar profissional)

### Estratégias

* **Lazy-load do Canvas**: só montar o 3D quando o Hero entrar na viewport (ou depois do first paint).
* **Fallback elegante**: enquanto carrega, mostra hero 2D estático.
* **DPR controlado**: reduzir `devicePixelRatio` em mobile.
* **“Degrade” em mobile**: menos partículas, menos pós-processamento.
* **Zero pós-processamento no início** (Bloom/SSAO etc. só se sobrar budget).

### Acessibilidade / bom senso

* Respeitar `prefers-reduced-motion`: se o usuário pedir menos animação, 3D vira estático ou é substituído por imagem.
* Conteúdo (cards) totalmente navegável sem o 3D.

---

# Fluxo de desenvolvimento (passo a passo)

### Fase 1 — Esqueleto e conteúdo (sem 3D ainda)

1. Criar projeto Next + Tailwind + shadcn
2. Montar layout 1 página com seções e scroll suave
3. Criar `projects.ts` e renderizar:

   * grid com cards
   * modal por projeto
   * filtros por tag
4. Colocar prints reais (mesmo que provisórios)

**Critério de sucesso:** página vende mesmo sem 3D.

### Fase 2 — Hero 3D mínimo viável

1. Inserir `<Canvas>` no hero
2. Cena com:

   * core central
   * 6–10 nós orbitando (um por projeto “featured”)
3. Hover/Click integrado com o modal
4. Ajustar câmera e iluminação
5. Implementar degrade mobile + reduced motion

**Critério de sucesso:** “UAUU” sem travar mobile.

### Fase 3 — Polimento “premium”

* Transições 2D com Framer Motion (entrada das seções)
* Microinterações nos cards (hover, tilt leve opcional)
* Seção “Impacto” com métricas reais
* SEO básico (title/description, OG image)
* Lighthouse: ajustar imagens, fontes, hydration

---

# Decisão: quantos projetos mostrar e como selecionar?

* Mostre **4 a 8** no grid.
* Marque **3 como featured** (os que têm melhor demo/print/valor).
* Se você tem muitos, crie uma categoria “Arquivados” colapsável no final.
