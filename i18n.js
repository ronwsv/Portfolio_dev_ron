/* ---------- EN/PT toggle ----------
   The HTML ships in English (the default, canonical text). This file only
   carries the Portuguese strings; the English originals are cached straight
   from the DOM on load, so nothing is duplicated and English never drifts
   out of sync with the markup. */

const PT = {
  menuOpen: 'Abrir menu lateral',
  portraitAlt: 'Foto de Ron Williams Viera',
  heroIntro: 'Eu desenho e entrego produtos inteligentes com IA aplicada, automação e arquitetura de software para gerar impacto real no negócio.',
  location: 'São Paulo, Brasil · Remoto',
  navPositioning: 'Posicionamento',
  navExpertise: 'Especialidades',
  navProjects: 'Projetos',
  navExperience: 'Experiências',
  navContact: 'Contato',
  posH2: 'Construo sistemas com <span>IA aplicada</span> para aumentar eficiência operacional, clareza decisória e velocidade de entrega.',
  posBody: 'Meu posicionamento combina engenharia de software, integração de dados e automação inteligente para transformar processos complexos em plataformas confiáveis, escaláveis e orientadas a resultado.',
  posLi1: 'Automação inteligente com IA, APIs e fluxos de dados',
  posLi2: 'Arquitetura cloud escalável para produtos SaaS',
  posLi3: 'Aplicações com foco em produtividade e confiabilidade',
  expertiseEyebrow: 'Especialidades',
  expertiseH3: 'Stack orientada para AI Products',
  projectsEyebrow: 'Projetos',
  projectsH3: 'Projetos reais e em evolução',

  zTag: 'Projeto em destaque',
  zH4: 'Notebook Zang · Orquestração inteligente de análise contábil',
  zP1: 'Plataforma para acompanhamento de execuções, divergências e pendências em módulos contábeis, com foco em produtividade do time e rastreabilidade operacional.',
  zMeta: 'Cada fechamento roda os módulos contábeis em sequência e consolida as divergências e ausências num painel único, para o time atacar primeiro o que realmente trava o mês.',
  viewArtifact: 'Ver artifact',
  requestDemo: 'Solicitar demo',
  statTotal: 'Total',
  zStatAnalyzed: 'Analisados',
  zStatPending: 'Pendências',
  zStatsAria: 'Indicadores do projeto',
  zGalleryAria: 'Telas do Notebook Zang',
  prevImage: 'Imagem anterior',
  nextImage: 'Próxima imagem',
  selectImage: 'Selecionar imagem',
  z1Alt: 'Painel do fechamento com os módulos contábeis e o status de cada um',
  z1Cap: 'Painel do fechamento: os módulos rodam em sequência e cada um devolve divergências, ausências e tempo de execução.',
  z2Alt: 'Detalhe de um módulo com um lançamento pendente por nota fiscal ausente',
  z2Cap: 'Pendência aberta: o lançamento existe, mas o documento não. O módulo diz o que falta, não apenas que falhou.',
  z3Alt: 'Módulo com as checagens de fatura, comprovante e conferência de valor aprovadas',
  z3Cap: 'Quando bate, mostra por quê: fatura, comprovante e conferência de valor, cada checagem ligada ao documento que a sustenta.',
  z4Alt: 'Catálogo de skills, com uma regra de conferência por tipo de despesa',
  z4Cap: 'Cada tipo de despesa tem sua própria skill — a regra de conferência é configurável sem passar por deploy.',
  z5Alt: 'Seleção de notebook por mês, com o histórico de fechamentos anteriores',
  z5Cap: 'Um notebook por cliente e por mês, com o histórico de fechamentos anteriores sempre à mão.',
  z6Alt: 'Formulário de abertura de chamado de suporte dentro da plataforma',
  z6Cap: 'Suporte dentro da própria tela do fechamento, já vinculado à pasta e ao lançamento em questão.',

  rTag: 'Projeto em destaque · Código privado',
  rH4: 'Avaliação de desempenho com feedback assistido por IA',
  rP1: 'Sistema de avaliação 180° que cruza a autoavaliação do colaborador com a avaliação do gestor. O cálculo de divergência é determinístico em código — o modelo escreve a leitura por cima de números que ele não inventou, então o resultado é reproduzível e auditável.',
  rP2: 'Gera plano de desenvolvimento com metas e checkpoints, além de um roteiro de conversa para o gestor. Nenhum feedback chega ao colaborador sem aprovação humana registrada.',
  reqDetails: 'Solicitar detalhes técnicos',
  rStatsAria: 'Indicadores do ciclo de avaliação',
  rStatReviewed: 'Avaliados',
  rStatCoverage: 'Cobertura',
  rStatTracks: 'Trilhas',
  rGalleryAria: 'Telas do sistema de avaliação',
  r1Alt: 'Tela de seleção do colaborador, com as trilhas de avaliação em abas',
  r1Cap: 'Cada trilha tem seu próprio conjunto de competências. Nomes e identificação anonimizados nas capturas.',
  r2Alt: 'Comparação de notas por pilar e por competência, com a coluna de divergência',
  r2Cap: 'Autoavaliação e nota do gestor lado a lado: a divergência de cada competência sai de código, não do modelo.',
  r3Alt: 'Análise de IA com pontos fortes e oportunidades de desenvolvimento',
  r3Cap: 'A IA escreve a leitura por cima desses números — cada ponto ancorado num pilar, e nada sai sem aprovação do gestor.',
  r4Alt: 'Painel com o progresso do ciclo e a distribuição dos padrões de autopercepção',
  r4Cap: 'Painel do ciclo: o que já foi respondido, analisado e devolvido em conversa 1:1, com o padrão de autopercepção do grupo.',
  r5Alt: 'Média por pilar e ranking das competências com maior divergência',
  r5Cap: 'Média por pilar e as competências de maior divergência — onde o desenvolvimento tem mais a ganhar.',

  aTag: 'Projeto em destaque · Autoria da IA',
  aH4: 'Atas · Do áudio da assembleia ao documento formal',
  aP1: 'Redigir uma ata consumia quase um dia de trabalho de um gerente: ouvir de novo a gravação inteira de uma assembleia de três a quatro horas, reconstituir quem disse o quê e anotar à mão o que importava. Construí a frente de IA da plataforma para atacar exatamente essa etapa — hoje o gerente parte de um rascunho já estruturado, em vez da estaca zero.',
  aP2: 'Um pipeline assíncrono de duas fases — transcrição com separação de falantes, depois estruturação no padrão formal exigido — em que a transcrição fica reaproveitável sem reprocessar o áudio. E um editor colaborativo com assistente que consulta os documentos do próprio condomínio: em vez de empurrar contexto no prompt, o modelo recebe uma ferramenta de busca e decide sozinho quando consultar, devolvendo o arquivo e o trecho que sustentam cada resposta. Cada condomínio tem seu contexto isolado.',
  aMeta1: 'Pipeline em adoção crescente: de zero a cerca de dez assembleias transcritas automaticamente por mês, ao longo de seis meses.',
  platformIndicators: 'Indicadores da plataforma',
  aStatMinutes: 'Atas',
  aStatCondos: 'Condomínios',
  aStatMonths: 'Meses no ar',
  aGalleryAria: 'Telas da plataforma Atas',
  a1Alt: 'Tela da ATA com o botão Gerar ATA com IA e a opção de envio manual do documento',
  a1Cap: 'Ponto de partida: a ata pode ser gerada pela IA a partir do áudio ou enviada manualmente.',
  a2Alt: 'Pipeline em execução com as etapas transcrição do áudio, análise com IA e edição no editor',
  a2Cap: 'Pipeline assíncrono em duas fases: transcrição com separação de falantes, depois estruturação.',
  a3Alt: 'Editor da ata com o documento estruturado ao centro e a transcrição por falante à direita',
  a3Cap: 'Editor colaborativo: documento no padrão formal ao centro, transcrição por falante sempre ao lado.',
  a4Alt: 'Ação de IA processando o trecho selecionado do documento',
  a4Cap: 'Ações de IA sobre o trecho selecionado — reescrever, formalizar, resumir ou expandir.',
  a5Alt: 'Sugestão da IA exibida como diff com os botões aceitar e rejeitar',
  a5Cap: 'Toda sugestão chega como diff: nada entra no documento sem aceite explícito do gerente.',
  a6Alt: 'Reescrita de um item inteiro da ata comparando texto original e texto sugerido',
  a6Cap: 'Reescrita de um item inteiro: original e proposta lado a lado, com os números preservados.',

  bTag: 'Projeto em destaque · Código público',
  bH4: 'Bazarof · Plataforma operacional para negócios educacionais',
  bP1: 'SaaS multi-tenant no ar: cada escola recebe o próprio subdomínio, site de captação e portal do aluno, com acesso separado para o contador. Cobrança recorrente, assinatura digital de contratos e WhatsApp integrados ao fluxo.',
  bP2: 'A camada de IA gera o feedback pós-aula a partir das anotações do professor, resume progresso e sinaliza risco de evasão — e só roda quando a aula está concluída e tem notas registradas, para não produzir avaliação sobre dado que não existe.',
  bMeta1: 'Cada regra de segurança tem um teste que a defende: se uma refatoração futura enfraquecer a proteção sem querer, a suíte quebra antes de o código chegar à produção. A cobertura vai do isolamento entre escolas às permissões por papel e à anonimização de dados pessoais.',
  viewPlatform: 'Ver plataforma',
  viewRepo: 'Ver repositório',
  bStatApi: 'Módulos de API',
  bStatSec: 'Testes de segurança',
  bStatSvc: 'Serviços',

  inProgressGithub: 'Em andamento · GitHub público',
  c1P: 'Chatbot com RAG para respostas contextualizadas com foco em cenários de atendimento e suporte.',
  c2P: 'Captura automatizada de dados com apoio de IA e saída estruturada para JSON e planilhas.',
  c2Meta: 'Python · Scraping · IA',
  shippedGithub: 'Entregue · GitHub público',
  c3P: 'Aplicação de transcrição com filas assíncronas para suportar processamento escalável de áudio.',
  c4P: 'Produto web para controle de ponto com interface moderna e foco em usabilidade operacional.',
  c5Tag: 'Código privado · Em produção',
  c5H4: 'Previsão C · Classificação contábil assistida por IA',
  c5P1: 'Sugere a conta contábil de cada despesa usando o histórico do próprio cliente como fonte de verdade. Arquitetura em cascata: uma base local de decisões anteriores resolve o que já tem precedente e só o restante chega ao LLM — cada resposta nova realimenta a base, então o custo por classificação cai conforme o uso cresce.',
  c5P2: 'Toda sugestão vem com confiança, justificativa e os precedentes que a sustentam, para o time contábil auditar.',
  c6Tag: 'Curadoria AI Engineer',
  c6H4: 'Labs e repositórios de referência',
  c6P: 'Exploração contínua de agentic systems e AI engineering para acelerar experimentação e transferência para produção.',
  c6Link: 'Ver todos os repositórios',

  expEyebrow: 'Experiências',
  expH3: 'Trajetória em software e IA aplicada',
  xp1Time: '2024 - Atual',
  xp1P: 'Desenvolvimento de sistemas com Python, React e AWS, integrações por API, autenticação, dashboards e automação para o time contábil.',
  xp2P: 'Evolução de site e landing pages com foco em performance, aquisição e análise de campanhas conectadas aos objetivos de negócio.',

  ctEyebrow: 'Contato',
  ctH3: 'Disponível para projetos remotos e consultoria em IA aplicada.',

  metaDescription: 'Portfólio de Ron Williams Viera, AI Engineer e Full Stack Developer especializado em automação inteligente, plataformas escaláveis e IA aplicada a negócios.',
};

const original = { text: {}, html: {}, attr: {} };

function cacheOriginals() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    original.text[el.getAttribute('data-i18n')] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    original.html[el.getAttribute('data-i18n-html')] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    original.attr[el.getAttribute('data-i18n-alt')] = el.getAttribute('alt');
  });
  document.querySelectorAll('[data-i18n-caption]').forEach((el) => {
    original.attr[el.getAttribute('data-i18n-caption')] = el.getAttribute('data-caption');
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    original.attr[el.getAttribute('data-i18n-aria')] = el.getAttribute('aria-label');
  });
  const meta = document.getElementById('metaDescription');
  if (meta) original.attr.metaDescription = meta.getAttribute('content');
}

function applyLanguage(lang) {
  const dict = lang === 'pt' ? PT : null; // null falls back to the cached EN originals

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    el.textContent = dict ? dict[key] ?? original.text[key] : original.text[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = dict ? dict[key] ?? original.html[key] : original.html[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    el.setAttribute('alt', dict ? dict[key] ?? original.attr[key] : original.attr[key]);
  });
  document.querySelectorAll('[data-i18n-caption]').forEach((el) => {
    const key = el.getAttribute('data-i18n-caption');
    el.setAttribute('data-caption', dict ? dict[key] ?? original.attr[key] : original.attr[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    el.setAttribute('aria-label', dict ? dict[key] ?? original.attr[key] : original.attr[key]);
  });

  const meta = document.getElementById('metaDescription');
  if (meta) {
    meta.setAttribute('content', dict ? dict.metaDescription ?? original.attr.metaDescription : original.attr.metaDescription);
  }

  // script.js only re-reads data-caption when the user navigates the
  // gallery, so the currently visible caption needs a manual refresh here.
  // Its dot buttons are also built once with a hardcoded English label.
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const active = gallery.querySelector('.gallery-slide.is-active');
    const captionEl = gallery.querySelector('[data-gallery-caption]');
    if (active && captionEl) captionEl.textContent = active.getAttribute('data-caption') || '';

    const total = gallery.querySelectorAll('.gallery-slide').length;
    gallery.querySelectorAll('.gallery-dot').forEach((dot, i) => {
      dot.setAttribute(
        'aria-label',
        lang === 'pt' ? `Ir para a imagem ${i + 1} de ${total}` : `Go to image ${i + 1} of ${total}`
      );
    });
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.getAttribute('data-lang-btn') === lang;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('lang', lang);
}

cacheOriginals();

const savedLang = localStorage.getItem('lang');
if (savedLang === 'pt') applyLanguage('pt');

document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
});
