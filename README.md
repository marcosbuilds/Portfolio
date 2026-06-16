# Portfólio - Marcos Pereira

Site estático do portfólio de Marcos Pereira. O foco é apresentar habilidades, projetos e contato com uma interface rápida, bilíngue e responsiva.

## Comportamento Atual

- O idioma inicial é inglês.
- O botão `PT/EN` troca o idioma durante a sessão atual.
- A preferência de idioma usa `sessionStorage` com a chave `portfolio-language`.
- A introdução da home roda uma vez por aba/sessão.
- A introdução usa `sessionStorage` com a chave `portfolio-intro-seen`.
- A sequência da introdução é `hey` e depois `i am`.
- A home não mostra a frase "Olá, eu sou" depois da introdução.
- O botão de tema continua usando `localStorage` com a chave `portfolio-theme`.
- Os comentários continuam usando `localStorage` com a chave `portfolioComments`.

## Rotas

- `index.html`: home, habilidades, projetos, projetos perdidos e contato.
- `pages/about.html`: trajetória, métricas e objetivos.
- `pages/neural-engine.html`: detalhes do Neural Engine.
- `pages/other-projects.html`: projetos de treinamento.
- `pages/testimonials.html`: formulário e lista de comentários locais.
- `pages/skills.html`: redireciona para `index.html#skills`.
- `pages/experience.html`: redireciona para `index.html#skills`.

## Testes Manuais

- `index.html?intro=1`: força a introdução sem limpar a sessão.
- `index.html?lang=en`: força inglês e grava o idioma na sessão.
- `index.html?lang=pt`: força português e grava o idioma na sessão.
- Teste mobile em largura próxima de `390px`.
- Teste desktop em largura acima de `1024px`.

## Regras de Front-end

- Não usar emojis na interface ou documentação.
- Ícones decorativos devem ser SVG com `aria-hidden`.
- Links com `target="_blank"` devem usar `rel="noopener noreferrer"`.
- Animações devem respeitar `prefers-reduced-motion`.
- Movimento contínuo deve usar `requestAnimationFrame`.
- Texto de interface deve entrar no sistema de tradução por `data-i18n`, `data-i18n-html`, `data-i18n-alt`, `data-i18n-placeholder` ou `data-i18n-aria-label`.
- Textos longos devem quebrar dentro do próprio container.

## Arquivos Principais

```text
assets/css/main.css          Importa os arquivos CSS
assets/css/base.css          Reset, background e regras globais
assets/css/animations.css    Intro, reveal e fallback de movimento reduzido
assets/css/header.css        Header, menu e seletor PT/EN
assets/css/sections.css      Cards, seções e estados de hover
assets/js/i18n.js            Tradução PT/EN e estado de idioma por sessão
assets/js/intro.js           Introdução de primeira abertura por sessão
assets/js/animations.js      Reveals, hover glow, parallax leve e cursor glow
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

Também verificar:

- Sem emojis nos arquivos de texto.
- Sem link externo sem `noopener noreferrer`.
- Sem erro no console do navegador.
- Sem overflow horizontal no mobile.
- Todas as páginas principais em inglês sem texto português visível.

## Comentários

O formulário de comentários é local. Ele salva no navegador e não envia dados para servidor. `data/comments.json` fica como referência, mas não é usado como persistência real em produção.

## Licença

© 2025 Marcos Pereira. Todos os direitos reservados.
