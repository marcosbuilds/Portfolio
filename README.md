# Meu Portfólio - Marcos Pereira

Este é meu portfólio estático. Eu uso este projeto para apresentar minhas habilidades, meus projetos e meus canais de contato com uma interface rápida, bilíngue e responsiva.

## Comportamento Atual

- O idioma inicial é inglês.
- O botão `PT/EN` troca o idioma durante a sessão atual.
- Eu salvo a preferência de idioma em `sessionStorage`, na chave `portfolio-language`.
- A introdução da home roda uma vez por aba/sessão.
- Eu salvo o estado da introdução em `sessionStorage`, na chave `portfolio-intro-seen`.
- A sequência da introdução é `hey` e depois `i am`.
- A home não mostra a frase "Olá, eu sou" depois da introdução.
- Os cards principais de projeto têm um painel dedicado de grafo no próprio card.
- O grafo do Neural Engine conecta Python, C++ e C#.
- Os nós do grafo usam logos locais das linguagens.
- O botão de tema continua usando `localStorage`, na chave `portfolio-theme`.
- Os comentários continuam usando `localStorage`, na chave `portfolioComments`.

## Rotas

- `index.html`: minha home, habilidades, projetos, projetos perdidos e contato.
- `pages/about.html`: minha trajetória, métricas e objetivos.
- `pages/neural-engine.html`: detalhes do Neural Engine.
- `pages/other-projects.html`: meus projetos de treinamento.
- `pages/testimonials.html`: formulário e lista de comentários locais.
- `pages/skills.html`: redireciona para `index.html#skills`.
- `pages/experience.html`: redireciona para `index.html#skills`.

## Testes Manuais

- `index.html?intro=1`: força a introdução sem limpar a sessão.
- `index.html?lang=en`: força inglês e grava o idioma na sessão.
- `index.html?lang=pt`: força português e grava o idioma na sessão.
- Testar mobile em largura próxima de `390px`.
- Testar desktop em largura acima de `1024px`.
- Testar a troca de tema com o grafo ativo.

## Regras de Front-end

- Não usar emojis na interface ou documentação.
- Ícones decorativos devem ser SVG com `aria-hidden`.
- Links com `target="_blank"` devem usar `rel="noopener noreferrer"`.
- Animações devem respeitar `prefers-reduced-motion`.
- Evitar `filter: blur()` em entradas de tela. Esse efeito pesa no navegador.
- Movimento contínuo deve usar `requestAnimationFrame`.
- Efeitos visuais devem usar variáveis de tema, como `--primary-color`, `--secondary-color` e `--accent-color`.
- Não usar animação global presa ao cursor no background. Eu prefiro interações locais em cards ou componentes.
- O grafo de projetos deve ficar em um painel dedicado do card, não sobre a imagem do projeto.
- Texto de interface deve entrar no sistema de tradução por `data-i18n`, `data-i18n-html`, `data-i18n-alt`, `data-i18n-placeholder` ou `data-i18n-aria-label`.
- Textos longos devem quebrar dentro do próprio container.

## Arquivos Principais

```text
assets/css/main.css          Importa os arquivos CSS
assets/css/base.css          Reset, background e regras globais
assets/css/animations.css    Intro, reveal e fallback de movimento reduzido
assets/css/header.css        Header, menu e seletor PT/EN
assets/css/sections.css      Cards, seções, grafos e estados de hover
assets/js/i18n.js            Tradução PT/EN e estado de idioma por sessão
assets/js/intro.js           Introdução de primeira abertura por sessão
assets/js/animations.js      Reveals, hover glow local, grafo de projeto e parallax leve
assets/js/theme.js           Troca de tema
assets/js/header.js          Dropdown e scroll do header
```

## Validação Antes de Commit

```bash
node --check assets/js/i18n.js
node --check assets/js/intro.js
node --check assets/js/animations.js
node --check assets/js/header.js
node --check assets/js/theme.js
node --check assets/js/utils.js
node --check assets/js/main.js
```

Também preciso verificar:

- Sem emojis nos arquivos de texto.
- Sem link externo sem `noopener noreferrer`.
- Sem erro no console do navegador.
- Sem overflow horizontal no mobile.
- Hover/focus dos cards principais revela o grafo sem quebrar layout.
- Trocar o tema altera brilho, linhas e nós do grafo.
- Todas as páginas principais em inglês não devem mostrar texto português visível.

## Comentários

O formulário de comentários é local. Eu salvo os comentários no navegador e não envio dados para servidor. `data/comments.json` fica como referência, mas não é persistência real de produção.

## Licença

© 2025 Marcos Pereira. Todos os direitos reservados.
