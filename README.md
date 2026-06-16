# Portfólio - Marcos Pereira

Portfólio profissional desenvolvido para apresentar habilidades, projetos e experiência em desenvolvimento de software com foco em Inteligência Artificial.

## Funcionalidades

### Entrada de Primeira Visita

Na primeira abertura da home, o portfólio exibe uma introdução em tela preta com a sequência `hey` e `Eu sou o`, antes de revelar a interface com transição suave. A experiência é salva em `localStorage` para não se repetir em visitas seguintes e respeita `prefers-reduced-motion`.

### Temas Personalizáveis
O portfólio possui 6 temas de cores disponíveis:
- Laranja (padrão)
- Azul
- Roxo
- Rosa
- Verde
- Default (Roxo/Indigo)

A preferência do tema é salva no navegador e pode ser alterada através do botão no header.

### Tradução Automática

A interface detecta o idioma do navegador e alterna automaticamente entre português e inglês. Também há um controle `PT/EN` no header para troca manual, com preferência salva no navegador.

Para testes pontuais:
- Use `?lang=en` ou `?lang=pt` para forçar o idioma na URL
- Use `?intro=1` na home para rever a introdução sem apagar o `localStorage`

### Seções Principais

1. **Hero** - Apresentação principal com nome, título e botões de contato
2. **Habilidades Técnicas** - Linguagens de programação (Python, JavaScript, Java) e conhecimentos em IA
3. **Projetos Pessoais** - Projetos desenvolvidos, incluindo:
   - **Neural Engine** - Sistema de atendimento inteligente com IA para WhatsApp
   - **Outros Projetos** - Projetos de treinamento e desenvolvimento
4. **Projetos Perdidos** - Projetos que foram desenvolvidos mas perdidos ao longo do tempo
5. **Feedbacks e Comentários** - Sistema de comentários interativo

### Páginas Detalhadas

- **Sobre mim** (`pages/about.html`) - Informações pessoais, jornada e estatísticas
- **Sobre Neural Engine** (`pages/neural-engine.html`) - Detalhes técnicos, métricas e comparações
- **Sobre outros projetos** (`pages/other-projects.html`) - Informações sobre projetos de treinamento
- **Feedbacks e comentários** (`pages/testimonials.html`) - Sistema de comentários com formulário
- **Habilidades técnicas** (`pages/skills.html`) - Redireciona para seção de habilidades
- **Experiência profissional** (`pages/experience.html`) - Redireciona para seção de experiência

### Navegação

- **Menu Dropdown** - Menu interativo no header (apenas desktop) com acesso rápido a todas as seções
- **WhatsApp** - Abre conversa direta no WhatsApp
- **Gmail** - Abre cliente de email padrão
- **GitHub** - Abre perfil no GitHub ([marcosbuilds/portfolio](https://github.com/marcosbuilds/portfolio))

### Sistema de Comentários

- Formulário interativo para adicionar comentários
- Armazenamento em `localStorage` e `data/comments.json`
- Exibição de comentários com avatar, nome, email (opcional) e data
- Layout responsivo e design moderno

## Estrutura de Diretórios

```
portfólio/
├── index.html
├── README.md
├── data/
│   └── comments.json          # Armazenamento de comentários
├── pages/
│   ├── about.html             # Sobre mim
│   ├── neural-engine.html     # Sobre Neural Engine
│   ├── other-projects.html    # Sobre outros projetos
│   ├── testimonials.html      # Feedbacks e comentários
│   ├── skills.html            # Habilidades técnicas
│   └── experience.html        # Experiência profissional
└── assets/
    ├── css/
    │   ├── main.css           # Arquivo principal (importa todos)
    │   ├── variables.css      # Variáveis CSS e temas
    │   ├── base.css           # Reset e estilos base
    │   ├── animations.css     # Animações
    │   ├── header.css         # Estilos do header
    │   ├── hero.css           # Seção hero
    │   ├── buttons.css        # Estilos dos botões
    │   ├── sections.css       # Seções (skills, projects)
    │   ├── responsive.css     # Media queries
    │   └── styles.css         # Estilos adicionais
    ├── js/
    │   ├── main.js            # Inicialização principal
    │   ├── i18n.js            # Tradução automática e seletor PT/EN
    │   ├── intro.js           # Introdução de primeira visita
    │   ├── theme.js           # Gerenciamento de temas
    │   ├── header.js          # Comportamento do header
    │   ├── animations.js      # Animações e observers
    │   └── utils.js           # Funções utilitárias
    └── img/
        ├── neural-engine-interface.png
        ├── training-projects.png
        ├── python.png
        ├── js.png
        ├── java.png
        ├── whatsapp.png
        ├── gmail.png
        ├── github.png
        └── ...
```

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - Variáveis CSS
  - Glassmorphism
  - Animações suaves
  - Gradientes
  - Responsive Design
- **JavaScript (Vanilla)** - Interatividade e funcionalidades:
  - Tradução automática da interface
  - Introdução de primeira visita
  - Gerenciamento de temas
  - Menu dropdown interativo
  - Sistema de comentários
  - Animações, transições e scroll suave
  - LocalStorage para persistência

## Responsividade

O portfólio é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** (acima de 1024px) - Layout completo com menu dropdown
- **Tablet** (768px - 1024px) - Layout adaptado, menu simplificado
- **Mobile** (até 768px) - Layout otimizado para telas pequenas, menu oculto

## Como Usar

1. Abra o arquivo `index.html` em um navegador moderno
2. Navegue pelas seções usando o scroll
3. Use o botão de tema no header para alterar as cores
4. Use o controle `PT/EN` para alternar manualmente o idioma quando necessário
5. Clique nos botões de contato para acessar WhatsApp, Gmail ou GitHub
6. Use o menu dropdown (desktop) para navegação rápida
7. Acesse as páginas detalhadas através do menu ou botões "Saber mais"

## Sistema de Comentários

O sistema de comentários funciona da seguinte forma:

1. Os comentários são salvos em `localStorage` do navegador
2. Em produção, seria necessário um backend para salvar em `data/comments.json`
3. O email é opcional e fica visível nos comentários quando fornecido
4. Todos os comentários são exibidos em cards com fundo para melhor separação visual

## Contato

- **WhatsApp**: (93) 99105-0810
- **Email**: marcoswork@gmail.com
- **GitHub**: [marcosbuilds](https://github.com/marcosbuilds)
- **Portfólio GitHub**: [marcosbuilds/portfolio](https://github.com/marcosbuilds/portfolio)

## Navegadores Suportados

- Chrome (recomendado)
- Firefox
- Safari
- Edge

## Notas Técnicas

- O menu dropdown só aparece em dispositivos desktop (acima de 1024px)
- A introdução de primeira visita usa `portfolio-intro-seen` no `localStorage`
- A preferência de idioma usa `portfolio-language` no `localStorage`
- Os comentários são persistidos no `localStorage` do navegador
- As preferências de tema são salvas automaticamente
- As animações usam `IntersectionObserver`, `requestAnimationFrame` e fallback para `prefers-reduced-motion`
- Ícones decorativos são implementados com SVG e `aria-hidden`, sem depender de emojis
- Links externos que abrem nova aba usam `rel="noopener noreferrer"` por segurança

## Licença

© 2025 Marcos Pereira. Todos os direitos reservados.
