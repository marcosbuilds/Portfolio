# Portfólio

Este repositório guarda meu site pessoal. Eu mantenho tudo estático para deixar a publicação simples: HTML, CSS, JavaScript e assets locais.

## Como funciona

- O site abre em inglês.
- O botão `PT/EN` troca o idioma só na aba atual.
- Eu salvo o idioma em `sessionStorage`, na chave `portfolio-language`.
- A introdução da home aparece uma vez por aba.
- Eu salvo esse estado em `sessionStorage`, na chave `portfolio-intro-seen`.
- A sequência da introdução é `hey` e depois `i am`.
- A home não mostra a frase "Olá, eu sou" depois da introdução.
- Os cards principais mostram uma árvore de conexões abaixo da imagem.
- O Neural Engine conecta Python, C++ e C#.
- Os nós usam logos locais, sem buscar imagens externas.
- A árvore nasce da imagem do projeto e não repete o nome do projeto.
- As linhas terminam nos logos das tecnologias; não uso círculos soltos como nós visuais.
- O tema usa `localStorage`, na chave `portfolio-theme`.
- Os comentários usam `localStorage`, na chave `portfolioComments`.

## Páginas

- `index.html`: home, habilidades, projetos, projetos perdidos e contato.
- `pages/about.html`: minha trajetória, métricas e objetivos.
- `pages/neural-engine.html`: detalhes do Neural Engine.
- `pages/other-projects.html`: projetos de treino e estudo.
- `pages/testimonials.html`: comentários salvos no navegador.
- `pages/skills.html`: redireciona para `index.html#skills`.
- `pages/experience.html`: redireciona para `index.html#skills`.

## Testes rápidos

- `index.html?intro=1`: força a introdução.
- `index.html?lang=en`: força inglês.
- `index.html?lang=pt`: força português.
- Testar em largura próxima de `390px`.
- Testar em desktop acima de `1024px`.
- Trocar o tema com os cards de projeto visíveis.

## Regras que sigo

- Não usar emojis na interface ou na documentação.
- Ícones decorativos devem usar SVG com `aria-hidden`.
- Links com `target="_blank"` precisam de `rel="noopener noreferrer"`.
- Animações respeitam `prefers-reduced-motion`.
- Evitar `filter: blur()` em entrada de tela.
- Efeitos visuais devem usar as variáveis de tema.
- Não colocar animação presa ao cursor no fundo da página.
- O grafo dos projetos fica em área própria do card, nunca sobre a imagem.
- A árvore de tecnologias não deve parecer um container separado.
- A árvore não deve repetir o nome do projeto no meio da conexão.
- A conexão deve sair da imagem do projeto e chegar nos logos sem linha quebrada.
- As linguagens aparecem como logo e texto, sem chip ou caixa visível.
- Todo texto de interface deve passar pelo sistema de tradução.
- Texto longo deve quebrar dentro do próprio container.

## Arquivos

```text
assets/css/main.css          Importa os CSS
assets/css/base.css          Reset e base visual
assets/css/animations.css    Intro e reveals
assets/css/header.css        Header e seletor PT/EN
assets/css/sections.css      Cards, seções e grafo dos projetos
assets/js/i18n.js            Tradução PT/EN
assets/js/intro.js           Introdução da home
assets/js/animations.js      Reveals, hover local, grafo e parallax leve
assets/js/theme.js           Troca de tema
assets/js/header.js          Menu e scroll do header
```

## Antes de commit

```bash
node --check assets/js/i18n.js
node --check assets/js/intro.js
node --check assets/js/animations.js
node --check assets/js/header.js
node --check assets/js/theme.js
node --check assets/js/utils.js
node --check assets/js/main.js
```

Também confiro:

- Sem emojis nos arquivos de texto.
- Sem erro no console.
- Sem overflow horizontal no mobile.
- Hover/focus dos cards não pode quebrar o layout.
- O tema precisa alterar as cores do grafo.
- As páginas em inglês não devem mostrar texto em português.

## Comentários

O formulário de comentários é local. Eu salvo tudo no navegador e não envio nada para servidor. `data/comments.json` fica só como referência.

## Licença

© 2025 Marcos Pereira. Todos os direitos reservados.
