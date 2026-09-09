// Conteúdo integral do TCLE e do TALE (extraído dos documentos oficiais do
// projeto), exceto os campos de assinatura física do final de cada termo
// (data, nome e assinatura em branco) — que não se aplicam a uma aceitação
// digital e são substituídos, na prática, pela caixa de seleção do app.

export const TCLE = {
  titulo: 'Termo de Consentimento Livre e Esclarecido (TCLE)',
  blocos: [
    { tipo: 'titulo', texto: 'TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO – TCLE' },
    { tipo: 'paragrafo', texto: 'Título da pesquisa: APLICAÇÃO DO JOGO "DETETIVES DO SORRISO" COMO ESTRATÉGIA LÚDICA DE EDUCAÇÃO EM SAÚDE BUCAL INFANTIL - ESTUDO PILOTO' },
    { tipo: 'paragrafo', texto: 'Pesquisadores: Luana Yurye Kira e Maria Fernanda Ramos Lopes' },
    { tipo: 'paragrafo', texto: 'Orientadora: Profa. Dra. Patrícia V. C. Bettega' },
    { tipo: 'paragrafo', texto: 'Instituição: Faculdade Herrero' },
    { tipo: 'paragrafo', texto: 'Prezado(a) pai, mãe ou responsável,' },
    { tipo: 'paragrafo', texto: 'Você está sendo convidado(a) a autorizar a participação da criança sob sua responsabilidade nesta pesquisa, intitulada "Aplicação do jogo \'Detetives do Sorriso\' como estratégia lúdica de educação em saúde bucal infantil – estudo piloto".' },
    { tipo: 'paragrafo', texto: 'Antes de decidir, leia atentamente as informações abaixo. Você poderá fazer perguntas aos pesquisadores e esclarecer qualquer dúvida antes de decidir sobre a participação.' },

    { tipo: 'secao', texto: '1. Qual é o objetivo desta pesquisa?' },
    { tipo: 'paragrafo', texto: 'O objetivo desta pesquisa é utilizar o jogo educativo digital "Detetives do Sorriso" como estratégia lúdica de educação em saúde bucal para crianças de 8 a 12 anos.' },
    { tipo: 'paragrafo', texto: 'A pesquisa também pretende observar como as crianças interagem com o jogo, incluindo aspectos relacionados à facilidade de utilização, compreensão, atratividade, dificuldades e sugestões apresentadas durante a atividade, além de registrar o número de acertos nas perguntas do jogo, afim de identificar o conhecimento das crianças sobre saúde bucal.' },

    { tipo: 'secao', texto: '2. O que será feito se eu autorizar a participação da criança?' },
    { tipo: 'paragrafo', texto: 'Caso você autorize a participação, a criança será convidada a utilizar o jogo educativo digital "Detetives do Sorriso".' },
    { tipo: 'paragrafo', texto: 'O jogo é composto por um quiz educativo com dez perguntas de múltipla escolha, relacionadas a temas de saúde bucal, incluindo técnicas de escovação dentária, uso do fio dental, alimentação e prevenção da cárie dentária. Após cada resposta, o jogo apresenta informações de retorno sobre o desempenho da criança.' },
    { tipo: 'paragrafo', texto: 'Após a autorização do responsável e o assentimento da criança, será realizada uma breve apresentação da atividade e serão fornecidas orientações sobre o funcionamento do jogo.' },
    { tipo: 'paragrafo', texto: 'A criança utilizará o jogo por meio de dispositivo eletrônico compatível com tablet e será orientada a responder às questões de maneira independente. Os pesquisadores permanecerão disponíveis para esclarecer dúvidas relacionadas ao funcionamento do jogo, sem interferir na escolha das respostas.' },
    { tipo: 'paragrafo', texto: 'Durante a atividade, serão observados aspectos relacionados à interação da criança com o jogo, compreensão das instruções, facilidade ou dificuldade de utilização, interesse e comentários espontâneos.' },
    { tipo: 'paragrafo', texto: 'Também será registrado o desempenho da criança nas perguntas do jogo, considerando o número de acertos obtidos. Os dados serão identificados por códigos, sem utilização do nome da criança como identificador da pesquisa.' },

    { tipo: 'secao', texto: '3. Onde será realizada a pesquisa e quanto tempo durará a participação?' },
    { tipo: 'paragrafo', texto: 'A pesquisa será realizada na Faculdade Herrero, localizada na Rua Álvaro Andrade, nº 345, Curitiba, Paraná, nas clínicas de atendimento Infantil, dos cursos de graduação e pós-graduação em Odontopediatria.' },
    { tipo: 'paragrafo', texto: 'A participação ocorrerá durante a atividade de aplicação do jogo. O projeto prevê um único momento de aplicação, com duração aproximada entre 5 a 10 minutos.' },

    { tipo: 'secao', texto: '4. A criança poderá sentir algum desconforto?' },
    { tipo: 'paragrafo', texto: 'É possível que a criança sinta cansaço, desconforto, constrangimento ou dificuldade durante a utilização do jogo. Caso isso aconteça, a criança poderá comunicar o pesquisador e interromper sua participação.' },

    { tipo: 'secao', texto: '5. Quais são os riscos da pesquisa?' },
    { tipo: 'paragrafo', texto: 'Os riscos são considerados mínimos e estão relacionados principalmente a eventual cansaço, desconforto, constrangimento ou dificuldade na utilização do jogo.' },
    { tipo: 'paragrafo', texto: 'Para minimizar esses riscos, a atividade será realizada em ambiente adequado e contará com a orientação dos pesquisadores.' },
    { tipo: 'paragrafo', texto: 'A criança poderá interromper sua participação a qualquer momento, sem qualquer prejuízo.' },
    { tipo: 'paragrafo', texto: 'As informações coletadas serão tratadas de maneira confidencial, buscando preservar a identidade dos participantes.' },

    { tipo: 'secao', texto: '6. Quais são os benefícios da pesquisa?' },
    { tipo: 'paragrafo', texto: 'Espera-se que a participação proporcione à criança uma experiência educativa e lúdica relacionada à saúde bucal, possibilitando o contato com informações sobre higiene bucal, alimentação e prevenção da cárie.' },
    { tipo: 'paragrafo', texto: 'Como benefício indireto, os dados obtidos poderão contribuir para o aprimoramento do jogo "Detetives do Sorriso" e para ampliar o conhecimento sobre a utilização de recursos digitais como ferramentas complementares de educação em saúde bucal infantil.' },
    { tipo: 'paragrafo', texto: 'Não é possível garantir que a criança terá benefício direto decorrente de sua participação.' },

    { tipo: 'secao', texto: '7. Quem poderá esclarecer minhas dúvidas?' },
    { tipo: 'paragrafo', texto: 'Os pesquisadores responsáveis poderão ser contatados para esclarecer dúvidas antes, durante ou após a participação na pesquisa:' },
    { tipo: 'paragrafo', texto: 'Pesquisadora: Luana Yurye Kira' },
    { tipo: 'paragrafo', texto: 'E-mail: luanayurye@gmail.com / celular: 41 99651-5478' },
    { tipo: 'paragrafo', texto: 'Pesquisadora: Maria Fernanda Ramos Lopes' },
    { tipo: 'paragrafo', texto: 'Celular: 41 99236-3296' },
    { tipo: 'paragrafo', texto: 'Orientadora: Profa. Dra. Patrícia V. C. Bettega — Faculdade Herrero' },
    { tipo: 'paragrafo', texto: 'E-mail: patriciabettega@gmail.com' },
    { tipo: 'paragrafo', texto: 'Endereço institucional: Rua Álvaro Andrade, nº 345, Curitiba – Paraná.' },

    { tipo: 'secao', texto: '8. Com quem posso falar sobre os direitos da criança como participante?' },
    { tipo: 'paragrafo', texto: 'Se você tiver dúvidas sobre os direitos da criança como participante de pesquisa, poderá entrar em contato com o Comitê de Ética em Pesquisa em Seres Humanos – CEP/Herrero, telefone (41) 3360-1041. O Comitê de Ética em Pesquisa é responsável pela análise ética das pesquisas envolvendo seres humanos e pela proteção dos direitos e do bem-estar dos participantes.' },

    { tipo: 'secao', texto: '9. A participação é obrigatória?' },
    { tipo: 'paragrafo', texto: 'Não. A participação é voluntária. Você poderá não autorizar a participação da criança ou retirar seu consentimento a qualquer momento, sem necessidade de justificar sua decisão e sem qualquer prejuízo.' },
    { tipo: 'paragrafo', texto: 'Mesmo que você autorize a participação, a criança também poderá decidir não participar ou interromper sua participação a qualquer momento.' },

    { tipo: 'secao', texto: '10. Como serão protegidas as informações da criança?' },
    { tipo: 'paragrafo', texto: 'Os dados obtidos durante a pesquisa serão tratados de forma confidencial. A identidade da criança será preservada e os dados serão identificados por códigos, não sendo utilizado o nome da criança como identificador da pesquisa.' },
    { tipo: 'paragrafo', texto: 'Os resultados poderão ser utilizados em trabalhos acadêmicos e científicos, apresentações e publicações, sem identificação individual da criança.' },

    { tipo: 'secao', texto: '11. Por quanto tempo os dados serão armazenados?' },
    { tipo: 'paragrafo', texto: 'Os dados da pesquisa serão armazenados de forma segura e com acesso restrito aos pesquisadores, conforme previsto no protocolo de pesquisa.' },

    { tipo: 'secao', texto: '12. Haverá algum custo ou pagamento?' },
    { tipo: 'paragrafo', texto: 'Não estão previstos custos financeiros para a criança ou para seus responsáveis decorrentes da participação na pesquisa.' },
    { tipo: 'paragrafo', texto: 'Os materiais e equipamentos necessários para a aplicação do jogo serão disponibilizados pela equipe de pesquisa.' },
    { tipo: 'paragrafo', texto: 'A criança e seus responsáveis não receberão pagamento pela participação.' },

    { tipo: 'secao', texto: '14. Como os resultados serão divulgados?' },
    { tipo: 'paragrafo', texto: 'Os resultados poderão ser utilizados para fins acadêmicos e científicos, incluindo trabalhos acadêmicos, apresentações em eventos científicos e publicações.' },
    { tipo: 'paragrafo', texto: 'O nome da criança não será divulgado, sendo utilizados códigos ou outras formas de identificação que preservem sua identidade.' },

    { tipo: 'secao', texto: 'DECLARAÇÃO DE CONSENTIMENTO' },
    { tipo: 'paragrafo', texto: 'Eu, responsável legal pela criança {{NOME}}, declaro que li e compreendi as informações apresentadas neste Termo de Consentimento Livre e Esclarecido.' },
    { tipo: 'paragrafo', texto: 'Fui informado(a) sobre os objetivos, procedimentos, possíveis riscos e benefícios da pesquisa e tive oportunidade de fazer perguntas e esclarecer minhas dúvidas.' },
    { tipo: 'paragrafo', texto: 'Compreendi que a participação da criança é voluntária e que posso retirar meu consentimento a qualquer momento, sem qualquer prejuízo.' },
    { tipo: 'paragrafo', texto: 'Também fui informado(a) de que, mesmo após minha autorização, a criança poderá recusar-se a participar ou interromper sua participação.' },
    { tipo: 'paragrafo', texto: 'Concordo voluntariamente com a participação da criança sob minha responsabilidade nesta pesquisa.' },
    { tipo: 'assinatura', texto: 'Curitiba, {{DATA}}.' },
    { tipo: 'assinatura', texto: 'Nome da criança: {{NOME}}' },
  ],
};

export const TALE = {
  titulo: 'Termo de Assentimento Livre e Esclarecido (TALE)',
  blocos: [
    { tipo: 'titulo', texto: 'TERMO DE ASSENTIMENTO LIVRE E ESCLARECIDO – TALE' },
    { tipo: 'paragrafo', texto: 'Olá,' },
    { tipo: 'paragrafo', texto: 'Meu nome é Luana e da minha colega Maria Fernanda, nós fazemos parte de uma equipe de pesquisa da Faculdade Herrero.' },
    { tipo: 'paragrafo', texto: 'Gostaríamos de convidar você para participar de uma pesquisa chamada: "APLICAÇÃO DO JOGO \'DETETIVES DO SORRISO\' COMO ESTRATÉGIA LÚDICA DE EDUCAÇÃO EM SAÚDE BUCAL INFANTIL – ESTUDO PILOTO".' },
    { tipo: 'paragrafo', texto: 'Antes de decidir, vamos explicar para você o que vamos fazer. Você pode fazer perguntas sempre que quiser.' },

    { tipo: 'secao', texto: 'Por que estamos fazendo esta pesquisa?' },
    { tipo: 'paragrafo', texto: 'Estamos fazendo esta pesquisa para descobrir o que as crianças acham do jogo "Detetives do Sorriso" e como elas interagem com ele. Queremos observar se o jogo é fácil de entender e usar, se é interessante e atrativo e quais são as dificuldades ou sugestões que as crianças apresentam.' },
    { tipo: 'paragrafo', texto: 'Também vamos observar quantas perguntas sobre saúde bucal você consegue responder corretamente, para saber quanto você conhece sobre saúde bucal.' },

    { tipo: 'secao', texto: 'O que é assentimento?' },
    { tipo: 'paragrafo', texto: 'Assentimento significa que você entendeu o que vamos fazer e concorda em participar da pesquisa.' },
    { tipo: 'paragrafo', texto: 'Mesmo que seus pais ou responsáveis autorizem sua participação, você também pode escolher se quer ou não participar.' },

    { tipo: 'secao', texto: 'O que você fará na pesquisa?' },
    { tipo: 'paragrafo', texto: 'Se você quiser participar, será convidado(a) a jogar o "Detetives do Sorriso" em um dispositivo eletrônico compatível com tablet.' },
    { tipo: 'paragrafo', texto: 'O jogo possui dez perguntas sobre saúde bucal.' },
    { tipo: 'paragrafo', texto: 'As perguntas são sobre: escovação dos dentes; uso do fio dental; alimentação; prevenção da cárie; cuidados com a saúde bucal.' },
    { tipo: 'paragrafo', texto: 'Você deverá responder às perguntas do jogo. Depois de cada resposta, o jogo apresentará algumas informações sobre o que você respondeu. Enquanto estiver jogando, os pesquisadores poderão ajudar caso você tenha alguma dúvida sobre como utilizar o jogo, mas não irão indicar qual resposta você deve escolher. Durante a atividade, também vamos observar como você utiliza o jogo, se consegue entender as instruções, se acha o jogo fácil ou difícil de usar, se demonstra interesse e quais comentários ou sugestões você gostaria de fazer.' },

    { tipo: 'secao', texto: 'Quais são os benefícios?' },
    { tipo: 'paragrafo', texto: 'Você poderá ter uma experiência educativa e divertida sobre como cuidar da sua saúde bucal, e também poderá aprender ou relembrar informações sobre escovação dentária, uso de fio dental, alimentação e prevenção da cárie.' },
    { tipo: 'paragrafo', texto: 'Sua participação poderá ajudar os pesquisadores a melhorar o jogo "Detetives do Sorriso" para que ele possa ser utilizado como recurso educativo por outras crianças.' },

    { tipo: 'secao', texto: 'Existe algum risco ou desconforto?' },
    { tipo: 'paragrafo', texto: 'Os riscos são pequenos. Você poderá sentir cansaço, desconforto, constrangimento ou dificuldade para usar o jogo. Se isso acontecer, você poderá avisar o pesquisador.' },
    { tipo: 'paragrafo', texto: 'Você pode parar de participar a qualquer momento.' },

    { tipo: 'secao', texto: 'O que acontecerá com suas informações?' },
    { tipo: 'paragrafo', texto: 'As informações obtidas durante a pesquisa serão utilizadas somente para os objetivos do estudo.' },
    { tipo: 'paragrafo', texto: 'Seu nome não será utilizado como identificador da pesquisa. Será usado um código para proteger sua identidade.' },
    { tipo: 'paragrafo', texto: 'Se os resultados forem apresentados em trabalhos ou publicados, ninguém saberá que as informações são suas.' },

    { tipo: 'secao', texto: 'E se você tiver dúvidas?' },
    { tipo: 'paragrafo', texto: 'Você pode perguntar qualquer coisa aos pesquisadores.' },
    { tipo: 'paragrafo', texto: 'Pesquisadora: Luana Yurye Kira — e-mail: luanayurye@gmail.com / celular: 41 99651-5478' },
    { tipo: 'paragrafo', texto: 'Pesquisadora: Maria Fernanda Ramos Lopes de Camargo — celular: 41 99236-3296' },
    { tipo: 'paragrafo', texto: 'Se você tiver dúvidas sobre seus direitos como participante, poderá falar com o Comitê de Ética em Pesquisa em Seres Humanos – CEP/Herrero, telefone (41) 3360-1041.' },

    { tipo: 'destaque', texto: 'VOCÊ É LIVRE PARA DECIDIR. VOCÊ PODE ESCOLHER NÃO PARTICIPAR DA PESQUISA. NÃO HAVERÁ NENHUM PROBLEMA POR ISSO.' },
    { tipo: 'paragrafo', texto: 'Se começar a participar e depois mudar de ideia, poderá parar a qualquer momento. Você não precisa explicar o motivo.' },

    { tipo: 'secao', texto: 'DECLARAÇÃO DE ASSENTIMENTO DO PARTICIPANTE' },
    { tipo: 'paragrafo', texto: 'Eu li este documento e conversei com o pesquisador sobre a pesquisa. Entendi o que será feito e sei que posso escolher participar ou não participar.' },
    { tipo: 'paragrafo', texto: 'Entendi também que posso parar de participar a qualquer momento, sem precisar explicar o motivo.' },
    { tipo: 'paragrafo', texto: 'Tive a oportunidade de fazer perguntas e minhas dúvidas foram respondidas.' },
    { tipo: 'paragrafo', texto: 'Concordo que as informações coletadas durante minha participação sejam utilizadas para esta pesquisa.' },
    { tipo: 'assinatura', texto: 'Curitiba, {{DATA}}.' },
    { tipo: 'assinatura', texto: 'Nome: {{NOME}}' },
  ],
};

export function getDataAtualFormatada() {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date());
}

export function preencherPlaceholders(texto, { nome }) {
  return texto
    .replace(/\{\{NOME\}\}/g, nome || '(nome não informado)')
    .replace(/\{\{DATA\}\}/g, getDataAtualFormatada());
}
