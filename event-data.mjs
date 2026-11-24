export const schedule = [
  ["Terça-feira", { "2IDA-SS": 3, "3MD": 2 }, { "2TD2": 1, "3TD": 4 }],
  ["Quarta-feira", { "1IDA-SS": 2, "2MD": 3 }, { "1IDA-SS": 2, "2TD1": 2, "2TD2": 1 }],
  ["Quinta-feira", { "2IDA-SS": 2, "3MD": 2, "2TD2": 1 }, { "2TD2": 1, "3TD": 4 }],
  ["Sexta-feira", { "1IDA-SS": 3, "2MD": 1, "3MD": 1 }, { "1IDA-SS": 1, "2TD1": 3, "2TD2": 1 }],
];

// O primeiro nome de cada equipe identifica o gerente de projetos.
export const classes = [
  ["1IDA-SS", 2, [
    ["GameHub", "Organização de campeonatos de videogame, com equipes, partidas e ranking.", "Caua, Douglas, Yago, Samuel"],
    ["FoodCampus", "Pedidos para cantinas ou lanchonetes, com cardápio, carrinho e acompanhamento do pedido.", "Ana Laura, Isabelly, Nathalia, Bianca"],
    ["StudyMatch", "Conexão entre estudantes para formação de grupos de estudo.", "Yasmin, Giovana, Maria Maia, Letícia"],
    ["MakerLab", "Gestão de laboratório maker, com reserva de máquinas e ferramentas, projetos e registro de uso.", "Gustavo Ribeiro, Logan, Gustavo Kumasaka, Henry"],
    ["PetConnect", "Plataforma de adoção de animais com acompanhamento do interesse dos candidatos.", "Felipe Vieira, Felipe Oliveira, Matheus Duran, Lorena"],
    ["EnergyMonitor", "Monitoramento do consumo de energia por sala ou setor, com metas de economia e histórico de leituras.", "Guilherme, Pedro, Daniel, Gustavo Miguel"],
    ["CineClub", "Catálogo de filmes e séries com avaliações, listas e recomendações.", "Nivia, Barbara, Alice, Gabriela"],
    ["EventNow", "Criação de eventos, controle de vagas e inscrições.", "Kauan, Diego, Enzo, Geovanna"],
  ]],
  ["2MD", 2, [
    ["SmartParking", "Controle de entradas, saídas, vagas disponíveis e histórico de estacionamento.", "Diego Corrêa", true],
    ["TechRental", "Controle de empréstimos de notebooks, kits eletrônicos, ferramentas e equipamentos tecnológicos.", "Cauã Lima", true],
    ["RoboParts", "Catálogo e controle de componentes de robótica, com consulta de peças, empréstimos e reposição de estoque.", "Felipe Santos", true],
    ["LabSchedule", "Agendamento de laboratórios técnicos, com turmas, equipamentos, horários e responsáveis.", "Guilherme Silva", true],
  ]],
  ["2TD1", 2, [
    ["VolunteerConnect", "Conexão entre instituições, oportunidades e pessoas interessadas em voluntariado.", "Enzo, Nycolas, Nichollas, Antonio, Gustavo Fazani"],
    ["SolarControl", "Acompanhamento de sistemas fotovoltaicos, com geração estimada, consumo e histórico de manutenção.", "Fabio, Gustavo Ananias, Henry, Igor Fazani, Henrique"],
    ["HomeServices", "Solicitação de serviços domésticos, com consulta de profissionais, orçamentos e avaliações.", "Kauã, Ryan, Lennon, Yago"],
    ["RoboParts", "Catálogo e controle de componentes de robótica, com consulta de peças, empréstimos e reposição de estoque.", "Igor Susae, Bryan, Lucas, Vitor, Miguel"],
    ["SchoolHelpDesk", "Registro e acompanhamento de solicitações de manutenção e suporte escolar.", "Rafaela, Fernando, Pedro, Davi"],
  ]],
  ["2TD2", 2, [
    ["EcoCollect", "Cadastro de pontos de coleta seletiva, materiais aceitos e entregas realizadas.", "Henrique, Kaique, Rhian, Gabriel"],
    ["FindIt", "Registro de objetos perdidos e encontrados, com localização e contato entre usuários.", "Pedro, Higor, Lívia, Nycolas, Victor Oliveira"],
    ["ElectroSafe", "Registro de inspeções elétricas e não conformidades em quadros e tomadas, com acompanhamento de correções.", "Arthur, Thiago, Matheus, Miguel"],
    ["BeautySchedule", "Agenda para serviços de estética, com gestão de clientes, procedimentos e horários.", "Emily, Victor Sá, Guilherme, Bruno"],
    ["CarCare", "Controle de revisões, manutenções, veículos, serviços e lembretes.", "Vinícius, Max, Lucas, Raviel"],
  ]],
  ["3MD", 3, [
    ["PredictMaint", "Manutenção preditiva de máquinas com medições, alertas, ordens de serviço e indicadores.", "Gustavo, Leonardo, Gabriel E., Luiz Fillipe, Nicole"],
    ["LogiTrack", "Gestão de entregas, motoristas, rotas, status e indicadores.", "Samuel, Heitor, Juliana, Thiago Xavier, Matheus Souza"],
    ["FactoryFlow", "Acompanhamento de ordens de produção, etapas, máquinas, paradas e indicadores de produtividade.", "Daniel, Arthur, Thiago P., Derick"],
    ["EduTrack Pro", "Gestão de alunos, professores, notas, frequência e cursos, com alertas e relatórios.", "Rafael Yu, Karla, Gabriel Araújo, Vitória"],
    ["TechAssist Pro", "Gestão de assistência técnica de equipamentos, do diagnóstico e orçamento ao reparo e rastreamento do serviço.", "Filipe, Igor B., Igor M., Matheus R., Italo"],
  ]],
  ["3TD", 3, [
    ["SmartBuilding", "Supervisão de iluminação, energia, temperatura, acessos e ocorrências em um edifício inteligente.", "Kiara, Vinicius, André, Ana Julia"],
    ["JobMatch", "Plataforma de currículos, empresas, vagas e candidaturas com filtros de busca.", "Gustavo Novaes, Nayra, Giovanni, Gustavo Gonçales"],
    ["EnergyGrid", "Monitoramento de consumo elétrico e demanda por setor, com alertas de sobrecarga, gráficos e relatórios.", "Guilherme Guedes, Gustavo Emanuel, Silas, Breno"],
    ["IndustrialAlert", "Central de ocorrências industriais com prioridades, responsáveis, evidências e análise de recorrência.", "Izadora, Pedro Henrique, Raphael, Fernando"],
    ["WaterControl", "Monitoramento de reservatórios, consumo de água e vazamentos, com alertas e histórico de leituras.", "Nicolas, Lucas, Vitor, Gustavo Ramalho"],
    ["SafeCity", "Registro geolocalizado e acompanhamento de problemas urbanos.", "Enzo, Danilo, Jessé, Rai"],
    ["RoboLab Manager", "Gestão de robôs, bancadas didáticas, componentes, programação, testes, falhas e histórico de uso.", "Felipe, Samuel, Guilherme de Paula, Miguel"],
    ["EventFlow", "Gestão de eventos, inscrições, check-in por QR Code e certificados, com painel de acompanhamento.", "Eloah, Andrei, Beatriz, Lívia"],
  ]],
  ["2IDA-SS", 4, [
    ["Greenly", "Monitoramento e gestão do cultivo em estufas, com sensores IoT, controle de produção, custos, qualidade dos lotes e comunicação da equipe.", "Leticia, Isabelly, Juliana, Maria Stefanato, Veronica, Vitória"],
    ["Visora", "Plataforma de gestão e inteligência financeira empresarial.", "Luiza, Fernanda Matsudo, Leonardo, Marco, Nicolly, Rafael Mondim"],
    ["Wisen", "Plataforma educacional que combina inteligência e curadoria de fontes confiáveis para contextualizar informações e criar mapas mentais.", "Fernanda", true],
    ["ConectaSus", "Unificação de dados de UBS e UPAs de regiões selecionadas.", "Sarah", true],
    ["CineAstra", "Soluções de streaming e presença digital para uma rede de cinemas.", "Kevin", true],
  ]],
];
