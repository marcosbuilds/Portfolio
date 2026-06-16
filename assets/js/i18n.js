const portfolioI18n = (() => {
    const STORAGE_KEY = 'portfolio-language';
    const DEFAULT_LANGUAGE = 'en';
    const SUPPORTED_LANGUAGES = ['pt', 'en'];

    const translations = {
        pt: {
            'language.toggle': 'Mudar idioma',
            'language.current': 'Português',
            'theme.toggle': 'Alterar tema',
            'intro.hey': 'hey',
            'intro.identity': 'eu sou o',
            'common.backHome': 'Voltar para o início',
            'common.more': 'Saber mais',
            'common.projectsBack': 'Voltar aos Projetos',
            'common.required': '(obrigatório)',
            'common.cancel': 'Cancelar',
            'common.or': 'ou',

            'title.home': 'Marcos Pereira | Desenvolvedor de Software',
            'title.about': 'Sobre mim | Marcos Pereira',
            'title.neural': 'Sobre Neural Engine | Marcos Pereira',
            'title.other': 'Sobre outros projetos | Marcos Pereira',
            'title.testimonials': 'Feedbacks e Comentários | Marcos Pereira',
            'title.skills': 'Habilidades Técnicas | Marcos Pereira',
            'title.experience': 'Experiência Profissional | Marcos Pereira',

            'nav.about': 'Sobre mim',
            'nav.neural': 'Sobre Neural Engine',
            'nav.other': 'Sobre outros projetos',
            'nav.testimonials': 'Feedbacks e comentários',
            'nav.experience': 'Experiência profissional',
            'nav.contact': 'Contato',
            'nav.skills': 'Habilidades técnicas',
            'nav.portfolio': 'Portfólio completo',
            'nav.blog': 'Artigos e insights',

            'home.badge': 'Desenvolvedor de Software',
            'home.titleLine': 'Olá, eu sou',
            'home.subtitle': 'Programador | Desenvolvedor de Software',
            'home.description': 'Desenvolvedor com formação técnica, experiência prática em projetos reais e especialização em soluções tecnológicas avançadas.',
            'home.skills.title': 'Habilidades Técnicas',
            'home.skills.languages': 'Linguagens de Programação',
            'home.skills.advanced': 'Tecnologias Avançadas',
            'home.skills.tools': 'Programas e Ferramentas',
            'home.skills.remote': 'Experiência em Home Office',
            'home.skills.java': 'Java <small>(Aprendendo)</small>',
            'home.skills.integration': 'Integração de Sistemas',
            'home.skills.automation': 'Automação de Processos',
            'home.skills.excel': 'Excel <small>(Procurando experiência)</small>',
            'home.projects.title': 'Projetos Pessoais',
            'home.projects.priority': 'Projeto Prioritário',
            'home.projects.otherTitle': 'Outros Projetos',
            'home.projects.training': 'Projetos de Treinamento',
            'home.projects.neuralAlt': 'Neural Engine - Interface',
            'home.projects.trainingAlt': 'Projetos de Treinamento',
            'home.projects.neuralDescription': 'Neural Engine utiliza inteligência artificial avançada para atuar em atendimento empresarial diretamente no WhatsApp. Painel de configuração intuitivo permite personalização completa para atendimento ou suporte técnico. Desenvolvido em Python, gerencia conversas, cria filas de atendimento e responde de forma natural, utilizando modelos personalizados que garantem conformidade com as diretrizes da Meta. Em testes, conseguiu gerenciar atendimento de 100+ mensagens simultâneas sem gargalos, podendo ultrapassar bem mais, substituindo efetivamente equipes em massa.',
            'home.projects.otherDescription': 'Projetos desenvolvidos para otimizar processos e aumentar produtividade. Incluem painéis visuais interativos, integração de tecnologias avançadas e sistemas de processamento inteligente. Soluções práticas que combinam inovação tecnológica com funcionalidades reais para resultados mensuráveis.',
            'home.projects.notePrefix': 'Os projetos podem ser visualizados mediante solicitação através do',
            'home.lost.title': 'Projetos Perdidos',
            'home.lost.badge': 'Projeto Perdido',
            'home.lost.windows': 'Otimização Windows',
            'home.lost.windowsDescription': 'Sistema de otimização desenvolvido em Lua com integração de DLLs nativas do Windows. Focado em melhorar performance de máquinas com recursos limitados, otimizando processos pesados e reduzindo tempo de resposta do sistema. Resultados comprovados em ambientes de produção.',
            'home.lost.automation': 'Automação Inteligente',
            'home.lost.automationDescription': 'Soluções de automação que utilizam processamento avançado de dados para análise de padrões e tomada de decisões. Experiência prática em configuração e ajuste fino de sistemas automatizados para aplicações empresariais reais.',
            'home.lost.apis': 'Integração de APIs',
            'home.lost.apisDescription': 'Desenvolvimento de sistemas que integram múltiplas APIs para criar soluções complexas e escaláveis. Experiência em combinação de diferentes serviços, processamento de dados e implementação de arquiteturas robustas para aplicações empresariais.',
            'home.lost.note': '<strong>Nota:</strong> Estes projetos foram perdidos, mas demonstram experiência prática em desenvolvimento de soluções técnicas complexas e integração de tecnologias avançadas.',
            'home.footer': '© 2024 Marcos Pereira. Todos os direitos reservados.',

            'about.title': 'Sobre mim',
            'about.intro': 'Me chamo Marcos Pereira, nascido em 2008 com uma vontade intensa em atuar prioritariamente na tecnologia.',
            'about.age': 'Anos de idade',
            'about.experience': 'Anos de experiência',
            'about.messages': 'Mensagens simultâneas',
            'about.learning': 'Vontade de aprender',
            'about.journey': 'Minha Jornada',
            'about.timeline1Year': '~2023 (15 anos)',
            'about.timeline2Year': '2023-2024',
            'about.timeline3Year': '2025',
            'about.timeline1': 'Desde aproximadamente os 15 anos, venho mexendo e procurando aprender cada vez mais na tecnologia, principalmente em IAs. Comecei desenvolvendo minis projetos de sites, webviews usando HTML, CSS e JavaScript.',
            'about.timeline2': 'Quando aprendi o suficiente, decidi atuar em áreas mais próximas de IAs, por conta da surpresa que o ChatGPT me fez sentir. Criar algo, dar vida é uma sensação única. Mesmo que, de fato, eu não crie do absoluto zero ainda, usando modelos de linguagem natural consegui alavancar e fazer vários projetos pessoais que tiveram bons resultados.',
            'about.timeline3': 'Desenvolvi projetos como o Neural Engine, um sistema de atendimento inteligente que consegue gerenciar 100+ mensagens simultâneas. Continuo explorando novas tecnologias e aprimorando minhas habilidades em desenvolvimento de software e integração de IAs.',
            'about.philosophy': 'Filosofia de Trabalho',
            'about.philosophyText': 'Acredito que a tecnologia deve ser acessível e útil. Cada projeto que desenvolvo busca resolver problemas reais, utilizando as melhores ferramentas disponíveis. Mesmo não criando do zero, a capacidade de integrar, adaptar e melhorar tecnologias existentes é uma habilidade valiosa.',
            'about.aiText': 'Minha paixão por IAs vem da capacidade que elas têm de transformar ideias em realidade, de automatizar processos complexos e de criar soluções que realmente fazem diferença. O Neural Engine é um exemplo disso - uma solução prática que demonstra o poder da integração inteligente de tecnologias.',
            'about.goals': 'Objetivos',
            'about.goalsText': 'Continuar aprendendo e desenvolvendo projetos que impactem positivamente. Busco oportunidades para aplicar minhas habilidades em ambientes profissionais, contribuindo com soluções inovadoras e eficientes.',
            'about.viewSkills': 'Ver Habilidades',
            'about.viewProjects': 'Ver Projetos',

            'neural.title': 'Neural Engine',
            'neural.alt': 'Interface do Neural Engine',
            'neural.intro': 'Sistema de atendimento inteligente que utiliza inteligência artificial avançada para atuar diretamente no WhatsApp empresarial.',
            'neural.metric.messages': 'Mensagens simultâneas',
            'neural.metric.bottlenecks': 'Gargalos em testes',
            'neural.metric.availability': 'Disponibilidade',
            'neural.metric.meta': 'Conformidade Meta',
            'neural.why': 'Por Que Neural Engine é Diferente?',
            'neural.whyText': 'Enquanto modelos como GPT-5 são projetados para conversas genéricas, o Neural Engine foi especificamente treinado para atendimento empresarial. Não é apenas mais uma IA - é uma solução completa que entende o contexto do seu negócio.',
            'neural.performance': 'Comparação de Performance',
            'neural.simultaneous': 'Mensagens Simultâneas',
            'neural.traditional': 'Soluções Tradicionais',
            'neural.successRate': 'Taxa de Sucesso',
            'neural.marketAverage': 'Média do Mercado',
            'neural.how': 'Como Funciona',
            'neural.howText': 'O Neural Engine foi desenvolvido em Python para máxima eficiência e confiabilidade. O sistema gerencia conversas, cria filas de atendimento inteligentes e responde de forma natural e humanizada, utilizando modelos personalizados que garantem total conformidade com as diretrizes da Meta.',
            'neural.unique': '<strong style="color: var(--primary-color);">Diferencial Único:</strong> Diferente de APIs que limitam funcionalidades, o Neural Engine atua diretamente no WhatsApp em tempo real no computador. Isso significa controle total, sem dependências externas e com performance que supera soluções baseadas em APIs.',
            'neural.panel': 'Painel Intuitivo',
            'neural.panelText': 'Configuração completa e personalização para atendimento ou suporte técnico através de interface amigável.',
            'neural.management': 'Gerenciamento Inteligente',
            'neural.managementText': 'Criação automática de filas de atendimento e distribuição eficiente de conversas.',
            'neural.human': 'Respostas Humanizadas',
            'neural.humanText': 'Modelos personalizados que garantem respostas naturais e contextualizadas.',
            'neural.performanceFeature': 'Alta Performance',
            'neural.performanceFeatureText': 'Capacidade de processar centenas de mensagens simultâneas sem comprometer a qualidade.',
            'neural.results': '<strong style="color: var(--primary-color);">Resultados Comprovados:</strong> Em testes rigorosos, o Neural Engine conseguiu gerenciar atendimento de 100+ mensagens simultâneas sem gargalos, podendo ultrapassar bem mais. O sistema demonstra capacidade de substituir efetivamente equipes em massa, oferecendo atendimento consistente e de alta qualidade 24/7.',
            'neural.tech': 'Tecnologia de Ponta',
            'neural.techText': 'Desenvolvido principalmente em Python, o Neural Engine utiliza modelos de linguagem natural personalizados, inspirados na arquitetura de sistemas como GPT-5, mas otimizados especificamente para atendimento empresarial. O sistema atua diretamente no WhatsApp em tempo real no computador em que for trabalhar, abrindo e fechando conversas com cliques rápidos automatizados, garantindo máxima eficiência e escalabilidade.',
            'neural.advantage': '<strong style="color: var(--primary-color);">Vantagem Competitiva:</strong> Enquanto outras soluções dependem de APIs limitadas, o Neural Engine oferece controle total sobre o processo de atendimento. Isso significa personalização completa, adaptação rápida às necessidades do seu negócio e performance superior.',
            'neural.ctaTitle': 'Pronto para Transformar seu Atendimento?',
            'neural.ctaText': 'Neural Engine não é apenas uma ferramenta - é uma revolução no atendimento ao cliente. Reduza custos, aumente eficiência e ofereça uma experiência superior aos seus clientes.',
            'neural.ctaButton': 'Falar com Especialista',

            'other.title': 'Outros Projetos',
            'other.alt': 'Projetos de Treinamento',
            'other.intro': 'Projetos desenvolvidos para otimizar processos e aumentar produtividade através de soluções tecnológicas avançadas.',
            'other.characteristics': 'Características Principais',
            'other.visual': 'Painéis Visuais',
            'other.visualText': 'Interfaces interativas e intuitivas para visualização de dados e controle de processos.',
            'other.integration': 'Integração Avançada',
            'other.integrationText': 'Integração de tecnologias modernas e sistemas de processamento inteligente.',
            'other.optimization': 'Otimização',
            'other.optimizationText': 'Soluções práticas que combinam inovação tecnológica com funcionalidades reais para resultados mensuráveis.',
            'other.objective': 'Objetivo',
            'other.objectiveText': 'Estes projetos foram desenvolvidos com foco em aprendizado contínuo e aplicação prática de conhecimentos. Cada projeto representa uma oportunidade de explorar novas tecnologias, testar soluções inovadoras e criar ferramentas que realmente fazem diferença.',
            'other.lostText': 'Embora muitos projetos tenham sido perdidos ao longo do tempo, cada um deles contribuiu significativamente para o desenvolvimento de habilidades técnicas e compreensão profunda de tecnologias avançadas.',

            'testimonials.title': 'Feedbacks e Comentários',
            'testimonials.leave': 'Deixe seu comentário',
            'testimonials.name': 'Nome',
            'testimonials.namePlaceholder': 'Seu nome',
            'testimonials.email': 'E-mail',
            'testimonials.emailOptional': '(opcional - estará visível nos comentários)',
            'testimonials.emailPlaceholder': 'seu@email.com',
            'testimonials.comment': 'Comentário',
            'testimonials.commentPlaceholder': 'Seu comentário aqui...',
            'testimonials.submit': 'Enviar Comentário',
            'testimonials.comments': 'Comentários',
            'testimonials.want': 'Quero comentar',
            'testimonials.empty': 'Nenhum comentário ainda. Seja o primeiro a comentar!',
            'testimonials.alertRequired': 'Por favor, preencha pelo menos o nome e o comentário.',

            'redirect.skills': 'Redirecionando para habilidades técnicas...',
            'redirect.experience': 'Redirecionando para experiência profissional...'
        },
        en: {
            'language.toggle': 'Change language',
            'language.current': 'English',
            'theme.toggle': 'Change theme',
            'intro.hey': 'hey',
            'intro.identity': 'i am',
            'common.backHome': 'Back to home',
            'common.more': 'Learn more',
            'common.projectsBack': 'Back to Projects',
            'common.required': '(required)',
            'common.cancel': 'Cancel',
            'common.or': 'or',

            'title.home': 'Marcos Pereira | Software Developer',
            'title.about': 'About me | Marcos Pereira',
            'title.neural': 'About Neural Engine | Marcos Pereira',
            'title.other': 'About other projects | Marcos Pereira',
            'title.testimonials': 'Feedback and Comments | Marcos Pereira',
            'title.skills': 'Technical Skills | Marcos Pereira',
            'title.experience': 'Professional Experience | Marcos Pereira',

            'nav.about': 'About me',
            'nav.neural': 'About Neural Engine',
            'nav.other': 'About other projects',
            'nav.testimonials': 'Feedback and comments',
            'nav.experience': 'Professional experience',
            'nav.contact': 'Contact',
            'nav.skills': 'Technical skills',
            'nav.portfolio': 'Full portfolio',
            'nav.blog': 'Articles and insights',

            'home.badge': 'Software Developer',
            'home.titleLine': 'Hi, I am',
            'home.subtitle': 'Programmer | Software Developer',
            'home.description': 'Developer with technical training, hands-on experience in real projects, and specialization in advanced technology solutions.',
            'home.skills.title': 'Technical Skills',
            'home.skills.languages': 'Programming Languages',
            'home.skills.advanced': 'Advanced Technologies',
            'home.skills.tools': 'Programs and Tools',
            'home.skills.remote': 'Home Office Experience',
            'home.skills.java': 'Java <small>(Learning)</small>',
            'home.skills.integration': 'Systems Integration',
            'home.skills.automation': 'Process Automation',
            'home.skills.excel': 'Excel <small>(Looking for experience)</small>',
            'home.projects.title': 'Personal Projects',
            'home.projects.priority': 'Priority Project',
            'home.projects.otherTitle': 'Other Projects',
            'home.projects.training': 'Training Projects',
            'home.projects.neuralAlt': 'Neural Engine - Interface',
            'home.projects.trainingAlt': 'Training Projects',
            'home.projects.neuralDescription': 'Neural Engine uses advanced artificial intelligence to work in business support directly on WhatsApp. An intuitive configuration panel enables complete customization for customer service or technical support. Built in Python, it manages conversations, creates service queues, and responds naturally with custom models that keep interactions aligned with Meta guidelines. In tests, it handled 100+ simultaneous messages without bottlenecks and can scale further, effectively replacing high-volume support teams.',
            'home.projects.otherDescription': 'Projects built to optimize processes and increase productivity. They include interactive visual dashboards, advanced technology integration, and intelligent processing systems. Practical solutions that combine technological innovation with real functionality for measurable results.',
            'home.projects.notePrefix': 'Projects can be viewed on request through',
            'home.lost.title': 'Lost Projects',
            'home.lost.badge': 'Lost Project',
            'home.lost.windows': 'Windows Optimization',
            'home.lost.windowsDescription': 'Optimization system developed in Lua with native Windows DLL integration. Focused on improving performance on machines with limited resources by optimizing heavy processes and reducing system response time. Proven results in production environments.',
            'home.lost.automation': 'Intelligent Automation',
            'home.lost.automationDescription': 'Automation solutions that use advanced data processing for pattern analysis and decision-making. Hands-on experience configuring and fine-tuning automated systems for real business applications.',
            'home.lost.apis': 'API Integration',
            'home.lost.apisDescription': 'Development of systems that integrate multiple APIs to create complex and scalable solutions. Experience combining different services, processing data, and implementing robust architectures for business applications.',
            'home.lost.note': '<strong>Note:</strong> These projects were lost, but they demonstrate hands-on experience developing complex technical solutions and integrating advanced technologies.',
            'home.footer': '© 2024 Marcos Pereira. All rights reserved.',

            'about.title': 'About me',
            'about.intro': 'My name is Marcos Pereira, born in 2008 with a strong drive to work primarily in technology.',
            'about.age': 'Years old',
            'about.experience': 'Years of experience',
            'about.messages': 'Simultaneous messages',
            'about.learning': 'Will to learn',
            'about.journey': 'My Journey',
            'about.timeline1Year': '~2023 (age 15)',
            'about.timeline2Year': '2023-2024',
            'about.timeline3Year': '2025',
            'about.timeline1': 'Since I was around 15, I have been exploring and learning more and more about technology, especially AI. I started by building mini website projects and webviews with HTML, CSS, and JavaScript.',
            'about.timeline2': 'Once I had learned enough, I decided to work closer to AI because of the impact ChatGPT had on me. Creating something and giving it life is a unique feeling. Even though I still do not build everything from absolute zero, natural language models helped me accelerate and build several personal projects with strong results.',
            'about.timeline3': 'I developed projects such as Neural Engine, an intelligent support system that can manage 100+ simultaneous messages. I continue exploring new technologies and improving my software development and AI integration skills.',
            'about.philosophy': 'Work Philosophy',
            'about.philosophyText': 'I believe technology should be accessible and useful. Every project I build aims to solve real problems with the best tools available. Even without creating everything from scratch, the ability to integrate, adapt, and improve existing technologies is valuable.',
            'about.aiText': 'My passion for AI comes from its ability to turn ideas into reality, automate complex processes, and create solutions that truly make a difference. Neural Engine is an example of that: a practical solution that shows the power of intelligent technology integration.',
            'about.goals': 'Goals',
            'about.goalsText': 'To keep learning and developing projects that create positive impact. I am looking for opportunities to apply my skills in professional environments, contributing with innovative and efficient solutions.',
            'about.viewSkills': 'View Skills',
            'about.viewProjects': 'View Projects',

            'neural.title': 'Neural Engine',
            'neural.alt': 'Neural Engine interface',
            'neural.intro': 'An intelligent support system that uses advanced artificial intelligence to operate directly on business WhatsApp.',
            'neural.metric.messages': 'Simultaneous messages',
            'neural.metric.bottlenecks': 'Bottlenecks in tests',
            'neural.metric.availability': 'Availability',
            'neural.metric.meta': 'Meta compliance',
            'neural.why': 'Why Is Neural Engine Different?',
            'neural.whyText': 'While models such as GPT-5 are designed for general conversations, Neural Engine was specifically trained for business support. It is not just another AI; it is a complete solution that understands business context.',
            'neural.performance': 'Performance Comparison',
            'neural.simultaneous': 'Simultaneous Messages',
            'neural.traditional': 'Traditional Solutions',
            'neural.successRate': 'Success Rate',
            'neural.marketAverage': 'Market Average',
            'neural.how': 'How It Works',
            'neural.howText': 'Neural Engine was developed in Python for maximum efficiency and reliability. The system manages conversations, creates intelligent service queues, and responds naturally and humanly with custom models that ensure full compliance with Meta guidelines.',
            'neural.unique': '<strong style="color: var(--primary-color);">Unique Advantage:</strong> Unlike APIs that limit functionality, Neural Engine works directly on WhatsApp in real time on the computer. That means full control, no external dependency, and performance that exceeds API-based solutions.',
            'neural.panel': 'Intuitive Panel',
            'neural.panelText': 'Complete configuration and customization for customer service or technical support through a friendly interface.',
            'neural.management': 'Intelligent Management',
            'neural.managementText': 'Automatic creation of service queues and efficient distribution of conversations.',
            'neural.human': 'Humanized Responses',
            'neural.humanText': 'Custom models that ensure natural and contextualized responses.',
            'neural.performanceFeature': 'High Performance',
            'neural.performanceFeatureText': 'Ability to process hundreds of simultaneous messages without compromising quality.',
            'neural.results': '<strong style="color: var(--primary-color);">Proven Results:</strong> In rigorous tests, Neural Engine managed 100+ simultaneous support messages without bottlenecks and can scale further. The system shows the ability to effectively replace high-volume teams while offering consistent, high-quality 24/7 service.',
            'neural.tech': 'Cutting-Edge Technology',
            'neural.techText': 'Developed mainly in Python, Neural Engine uses custom natural language models inspired by systems such as GPT-5, but optimized specifically for business support. The system works directly on WhatsApp in real time on the working computer, opening and closing conversations with fast automated clicks to ensure maximum efficiency and scalability.',
            'neural.advantage': '<strong style="color: var(--primary-color);">Competitive Advantage:</strong> While other solutions depend on limited APIs, Neural Engine offers full control over the support process. This means complete customization, fast adaptation to business needs, and superior performance.',
            'neural.ctaTitle': 'Ready to Transform Your Support?',
            'neural.ctaText': 'Neural Engine is not just a tool; it is a revolution in customer service. Reduce costs, increase efficiency, and offer a superior experience to your customers.',
            'neural.ctaButton': 'Talk to a Specialist',

            'other.title': 'Other Projects',
            'other.alt': 'Training projects',
            'other.intro': 'Projects built to optimize processes and increase productivity through advanced technology solutions.',
            'other.characteristics': 'Main Characteristics',
            'other.visual': 'Visual Dashboards',
            'other.visualText': 'Interactive and intuitive interfaces for data visualization and process control.',
            'other.integration': 'Advanced Integration',
            'other.integrationText': 'Integration of modern technologies and intelligent processing systems.',
            'other.optimization': 'Optimization',
            'other.optimizationText': 'Practical solutions that combine technological innovation with real functionality for measurable results.',
            'other.objective': 'Objective',
            'other.objectiveText': 'These projects were developed with a focus on continuous learning and practical knowledge application. Each project is an opportunity to explore new technologies, test innovative solutions, and create tools that truly make a difference.',
            'other.lostText': 'Although many projects were lost over time, each of them contributed significantly to technical skill development and deeper understanding of advanced technologies.',

            'testimonials.title': 'Feedback and Comments',
            'testimonials.leave': 'Leave your comment',
            'testimonials.name': 'Name',
            'testimonials.namePlaceholder': 'Your name',
            'testimonials.email': 'Email',
            'testimonials.emailOptional': '(optional - it will be visible in comments)',
            'testimonials.emailPlaceholder': 'you@email.com',
            'testimonials.comment': 'Comment',
            'testimonials.commentPlaceholder': 'Your comment here...',
            'testimonials.submit': 'Submit Comment',
            'testimonials.comments': 'Comments',
            'testimonials.want': 'I want to comment',
            'testimonials.empty': 'No comments yet. Be the first to comment!',
            'testimonials.alertRequired': 'Please fill in at least the name and comment.',

            'redirect.skills': 'Redirecting to technical skills...',
            'redirect.experience': 'Redirecting to professional experience...'
        }
    };

    let currentLanguage = getInitialLanguage();

    function normalizeLanguage(value) {
        const normalized = String(value || '').trim().toLowerCase();
        return normalized.startsWith('en') ? 'en' : 'pt';
    }

    function getInitialLanguage() {
        const params = new URLSearchParams(window.location.search);
        const urlLanguage = params.get('lang');
        if (urlLanguage) {
            const nextLanguage = normalizeLanguage(urlLanguage);
            try {
                sessionStorage.setItem(STORAGE_KEY, nextLanguage);
            } catch (error) {
                console.warn('Language preference unavailable:', error);
            }
            return nextLanguage;
        }

        try {
            const savedLanguage = sessionStorage.getItem(STORAGE_KEY);
            if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
                return savedLanguage;
            }
        } catch (error) {
            console.warn('Language preference unavailable:', error);
        }

        return DEFAULT_LANGUAGE;
    }

    function translate(key) {
        return translations[currentLanguage]?.[key] || translations.pt[key] || key;
    }

    function applyTranslations(root = document) {
        document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'pt-BR';

        root.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = translate(element.dataset.i18n);
        });

        root.querySelectorAll('[data-i18n-html]').forEach((element) => {
            element.innerHTML = translate(element.dataset.i18nHtml);
        });

        const attributeMap = [
            ['data-i18n-alt', 'alt'],
            ['data-i18n-aria-label', 'aria-label'],
            ['data-i18n-placeholder', 'placeholder'],
            ['data-i18n-title', 'title']
        ];

        attributeMap.forEach(([dataAttribute, targetAttribute]) => {
            root.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
                element.setAttribute(targetAttribute, translate(element.getAttribute(dataAttribute)));
            });
        });

        updateLanguageToggle();
    }

    function updateLanguageToggle() {
        const toggle = document.querySelector('.language-toggle');
        if (!toggle) return;

        toggle.setAttribute('aria-label', translate('language.toggle'));
        toggle.setAttribute('title', translate('language.toggle'));
        toggle.querySelectorAll('[data-language-option]').forEach((option) => {
            option.classList.toggle('active', option.dataset.languageOption === currentLanguage);
        });
    }

    function setLanguage(language, options = {}) {
        const nextLanguage = normalizeLanguage(language);
        if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return;

        currentLanguage = nextLanguage;

        if (options.persist !== false) {
            try {
                sessionStorage.setItem(STORAGE_KEY, currentLanguage);
            } catch (error) {
                console.warn('Language preference could not be saved:', error);
            }
        }

        applyTranslations();
        document.dispatchEvent(new CustomEvent('portfolio:languagechange', {
            detail: { language: currentLanguage }
        }));
    }

    function createLanguageToggle() {
        const navbar = document.querySelector('.navbar');
        const themeToggle = document.querySelector('.theme-toggle');
        if (!navbar || !themeToggle || document.querySelector('.language-toggle')) return;

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'language-toggle';
        toggle.innerHTML = `
            <span class="language-option" data-language-option="pt">PT</span>
            <span class="language-divider">/</span>
            <span class="language-option" data-language-option="en">EN</span>
        `;
        toggle.addEventListener('click', () => {
            setLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
        });

        navbar.insertBefore(toggle, themeToggle);
    }

    function init() {
        createLanguageToggle();
        applyTranslations();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        apply: applyTranslations,
        getLanguage: () => currentLanguage,
        setLanguage,
        t: translate
    };
})();

window.portfolioI18n = portfolioI18n;
