# Guia de Personalização do Portfólio

Este guia explica como substituir o conteúdo de exemplo pelos seus dados reais.

## 1. Dados dos Projetos
Todas as informações dos projetos estão centralizadas no arquivo:
`lib/projects.ts`

Abra este arquivo e edite a array `projects`. Cada objeto representa um projeto:

```typescript
{
  id: 'meu-projeto',            // Identificador único (URL friendly)
  name: 'Nome do Projeto',      // Título
  tagline: 'Descrição curta',   // Subtítulo no card
  description: {
    short: 'Resumo para o card...', 
    long: 'Descrição completa para o modal...'
  },
  tags: ['React', 'Next.js'],   // Tecnologias usadas
  stack: ['TypeScript', 'Tailwind'], // Stack técnica detalhada
  links: {
    demo: 'https://...',        // Link do site (opcional)
    repo: 'https://...',        // Link do GitHub (opcional)
    video: 'https://...'        // Link do YouTube (opcional)
  },
  images: {
    cover: '/images/meu-cover.jpg', // Caminho da imagem de capa
    gallery: ['/images/foto1.jpg']  // Imagens da galeria
  },
  metrics: [                    // Métricas de impacto (opcional)
    { label: 'Usuários', value: '10k' }
  ],
  featured: true,               // Se "true", aparece orbitando no 3D
  three: { color: '#ff0000' }   // Cor da "bolinha" no 3D
}
```

### Adicionar/Remover
- Para adicionar um projeto, copie um objeto `{...}` e cole no final da lista.
- Para remover, apague o bloco do objeto desejado.

## 2. Imagens
As imagens ficam na pasta:
`public/images/`

1.  Coloque suas imagens (.jpg, .png, .webp) nesta pasta.
2.  Atualize os caminhos em `lib/projects.ts` (propriedade `images.cover` e `images.gallery`) para corresponder aos nomes dos seus arquivos.
    *   Exemplo: Se você salvou `meu-app.png`, coloque `/images/meu-app.png`.

## 3. Textos da Página Inicial (Hero e Grade)

### Hero (Topo da página)
Arquivo: `app/page.tsx`
Procure por:
```tsx
<h1 className="...">Portfólio</h1>
<p className="...">Estes são meus projetos</p>
```

### Grade de Projetos (Título da seção)
Arquivo: `components/ProjectsGrid.tsx`
Procure por:
```tsx
<h2 className="...">Selected Work</h2>
<p className="...">A collection of projects showcasing...</p>
```

## 4. Cores e Tema
As cores globais estão em:
`app/globals.css`

Você pode alterar as variáveis CSS (`--background`, `--foreground`, `--primary`, etc.) dentro de `:root` ou `.dark` para mudar o esquema de cores do site.

## 5. Metadata (SEO)
Para alterar o título da aba do navegador e descrição para o Google:
Arquivo: `app/layout.tsx`

Edite o objeto `metadata`:
```tsx
export const metadata: Metadata = {
  title: "Seu Nome - Portfolio",
  description: "Portfólio de desenvolvedor...",
  // ...
};
```
