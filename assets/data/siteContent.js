const siteContent = {
    home: {
        hero: {
            title: "Revolucionando a Agricultura com Tecnologia de Drones de Precisão",
            description: "A TecAgro - Soluções Agrícolas está na vanguarda da inovação agrícola, utilizando tecnologia avançada de drones para aprimorar o manejo da cultura, otimizar a utilização de recursos e maximizar a produtividade. Nossas soluções de ponta permitem que agricultores alcancem excelência no campo, promovendo e praticando uma agricultura sustentável e eficiente."
        },
        mission: {
            title: "Nossa Missão",
            text: "Na TecAgro, nossa missão é capacitar os agricultores com tecnologia de ponta em drones, fornecendo insights acionáveis e soluções de precisão que impulsionam a produtividade e a sustentabilidade. Estamos comprometidos em desenvolver e oferecer apoio personalizado que atendam às necessidades únicas de cada cliente, orientados por desafios e promovendo um futuro onde a agricultura seja eficiente e ambientalmente responsável."
        },
        solutions: {
            introTitle: "Soluções",
            introText: "Oferecemos um conjunto abrangente de soluções baseadas em drones, projetadas para enfrentar os desafios enfrentados pelos agricultores modernos.",
            items: [
                {
                    id: "monitoramento",
                    image: "assets/images/image_e9e6f3.jpg",
                    title: "Monitoramento de Culturas",
                    description: "Nossos serviços incluem monitoramento de culturas utilizando drones para coleta de dados, imagens e mapeamento 3D. Isso permite identificar anomalias, otimizar a irrigação e o uso de fertilizantes. Essas soluções permitem que os agricultores tomem decisões informadas e aumentem a eficiência."
                },
                {
                    id: "pulverizacao",
                    image: "assets/images/image_e9e70d.jpg",
                    title: "Pulverização de Precisão",
                    description: "Nossos serviços abrangem pulverização de precisão utilizando drones para aplicação controlada de defensivos agrícolas. Isso garante maior cobertura, reduz desperdícios e minimiza impactos ambientais. Essas soluções permitem que os agricultores otimizem recursos, melhorem a produtividade e aumentem a sustentabilidade."
                },
                {
                    id: "mapeamento",
                    image: "assets/images/image_e9e6b0.jpg",
                    title: "Mapeamento 3D",
                    description: "Nossos serviços incluem monitoramento de culturas utilizando drones para coleta de imagens e mapeamento 3D. Isso permite identificar anomalias, otimizar a irrigação e o uso de fertilizantes. Essas soluções permitem que os agricultores tomem decisões informadas e aumentem a eficiência."
                }
            ]
        },
        fleet: {
            introTitle: "Nossa Frota de Drones",
            introText: "A TecAgro utiliza uma frota de drones de última geração, equipados com câmeras de alta resolução, sensores multiespectrais e sistemas de pulverização de precisão. Nossos drones são projetados para oferecer confiabilidade, precisão e eficiência, garantindo desempenho ideal em diversos ambientes agrícolas. Cada drone é meticulosamente selecionado e mantido por nossa equipe de profissionais para oferecer as melhores soluções de acordo com sua necessidade e cultura.",
            items: [
                {
                    id: "x1000",
                    image: "assets/images/image_e9e751.jpg",
                    title: "Drone Model X1000",
                    description: "Drones robustos para pulverizações agrícolas de larga escala, com alta capacidade de carga e autonomia estendida."
                },
                {
                    id: "y2000",
                    image: "assets/images/image_e9e732.jpg",
                    title: "Drone Model Y2000",
                    description: "Equipados com tecnologia de IA para detecção de doenças e pragas, otimizando o uso de defensivos."
                },
                {
                    id: "z8000",
                    image: "assets/images/image_e9e675.jpg",
                    title: "Drone Model Z8000",
                    description: "Drones multi-sensores para mapeamento 3D preciso e análise de saúde da lavoura."
                }
            ]
        }
    },
    dronesPage: {
        title: "Nossa Frota",
        introText: "Nossa avançada frota de drones é composta pelos equipamentos mais modernos e eficientes do mercado, prontos para atender às mais diversas necessidades agrícolas. Cada modelo é selecionado e configurado para oferecer o máximo de precisão e produtividade em suas operações.",
        drones: [
            {
                id: "agras-t40",
                name: "DJI Agras T40",
                image: "assets/images/image_e9e732.jpg",
                description: "O DJI Agras T40 é um drone agrícola de alta performance, projetado para pulverização e dispersão de fertilizantes. Com sua capacidade de carga e sistema de bicos inovador, otimiza as operações no campo, garantindo cobertura uniforme e alta eficiência.",
                specifications: [
                    { label: "Peso", value: "38 kg (sem bateria)" },
                    { label: "Capacidade de Tanque", value: "40 L" },
                    { label: "Vazão de Pulverização", value: "12 L/min" },
                    { label: "Área de Cobertura", value: "Até 20 hectares/hora" },
                    { label: "Câmera", value: "FPV UHD" },
                    { label: "Precisão", value: "RTK Centimétrica" }
                ]
            },
            {
                id: "agras-t20p",
                name: "DJI Agras T20P",
                image: "assets/images/image_e9e70d.jpg",
                description: "O DJI Agras T20P é um drone compacto e potente, ideal para fazendas de menor porte ou áreas de difícil acesso. Oferece alta precisão na pulverização e monitoramento, com fácil transporte e operação.",
                specifications: [
                    { label: "Peso", value: "19 kg (sem bateria)" },
                    { label: "Capacidade de Tanque", value: "20 L" },
                    { label: "Vazão de Pulverização", value: "8 L/min" },
                    { label: "Área de Cobertura", value: "Até 10 hectares/hora" },
                    { label: "Câmera", value: "FPV HD" },
                    { label: "Precisão", value: "RTK Sub-métrica" }
                ]
            },
            {
                id: "mavic-3-multispectral",
                name: "DJI Mavic 3 Multispectral",
                image: "assets/images/image_e9e6b0.jpg",
                description: "O DJI Mavic 3 Multispectral é um drone de mapeamento avançado, equipado com câmeras multiespectrais e RGB para análise detalhada da saúde das culturas. Essencial para identificação precoce de problemas e manejo preciso de nutrientes.",
                specifications: [
                    { label: "Peso", value: "920 g" },
                    { label: "Câmeras", value: "RGB 20MP, 4x Multispectral 5MP" },
                    { label: "Resolução Multispectral", value: "Red Edge, Green, Red, Near-Infrared" },
                    { label: "Tempo de Voo", value: "Até 43 minutos" },
                    { label: "Mapeamento", value: "Modelagem 3D, NDVI, NDRE" },
                    { label: "Precisão", value: "RTK Centimétrica" }
                ]
            }
        ]
    },
    aboutUsPage: {
        title: "Sobre Nós",
        introText: "Na TecAgro, somos movidos pela inovação e pela paixão em transformar a agricultura através da tecnologia de drones. Conheça nossa equipe e os valores que nos guiam.",
        missionTitle: "Nossa Missão",
        missionText: "Capacitar os agricultores com tecnologia de ponta em drones, fornecendo insights acionáveis e soluções de precisão que impulsionam a produtividade e a sustentabilidade. Estamos comprometidos em desenvolver e oferecer apoio personalizado que atendam às necessidades únicas de cada cliente, orientados por desafios e promovendo um futuro onde a agricultura seja eficiente e ambientalmente responsável.",
        visionTitle: "Nossa Visão",
        visionText: "Almejamos ser a principal referência em soluções agrícolas inovadoras com drones no Brasil e na América Latina. Buscamos constantemente a excelência em nossos serviços e produtos, antecipando as necessidades do mercado e contribuindo ativamente para o desenvolvimento de uma agricultura mais inteligente, sustentável e eficiente. Queremos ser reconhecidos por nossa capacidade de transformar desafios em oportunidades.",
        valuesTitle: "Nossos Valores",
        valuesText: "Acreditamos na Inovação contínua como motor para o progresso, buscando sempre novas tecnologias e metodologias para aprimorar nossos serviços e produtos, mantendo-nos na vanguarda do setor agrícola. Priorizamos a Sustentabilidade em todas as nossas ações e decisões, conscientes da nossa responsabilidade ambiental e social, promovendo práticas que preservem o meio ambiente para as futuras gerações, esse é o jeito TecAgro de ver o mundo!",
        leadership: {
            title: "Nossa Liderança",
            members: [
                {
                    name: "Enzo Bizinoto",
                    title: "CEO, TecAgro - Soluções Agrícolas",
                    description: "Enzo lidera a visão estratégica e a excelência operacional da empresa, impulsionando a inovação em soluções agrícolas.",
                    image: "assets/images/enzo.jpg"
                },
                {
                    name: "Gabriel Mesquita",
                    title: "CTO, TecAgro - Soluções Agrícolas",
                    description: "Gabriel encabeça os avanços tecnológicos, garantindo a entrega de soluções de ponta com drones para a agricultura.",
                    image: "assets/images/gabriel.png"
                }
            ]
        }
    },
    solutionsPage: {
        title: "Nossas Soluções Detalhadas",
        introText: "A TecAgro oferece um portfólio completo de serviços inovadores com drones, desenvolvidos para otimizar suas operações e impulsionar a produtividade no campo.",
        sections: [
            {
                id: "monitoramento-completo",
                title: "Monitoramento de Culturas Avançado",
                description: "Nosso serviço de monitoramento utiliza drones equipados com câmeras multiespectrais e térmicas para coletar dados precisos sobre a saúde da sua lavoura. Analisamos índices de vegetação (NDVI, NDRE), identificamos estresse hídrico, deficiências nutricionais e áreas com doenças ou pragas antes que se tornem problemas maiores. Com relatórios detalhados e mapas de calor, você terá insights acionáveis para otimizar a irrigação, fertilização e manejo geral, resultando em economia de recursos e aumento de produtividade. Ideal para diversas culturas, incluindo soja, milho, algodão e café.",
                image: "assets/images/image_e9e6f3.jpg"
            },
            {
                id: "pulverizacao-precisao",
                title: "Pulverização de Precisão Inteligente",
                description: "A pulverização com drones da TecAgro redefine a aplicação de defensivos e fertilizantes. Utilizamos sistemas de bicos de alta precisão e algoritmos avançados para garantir uma cobertura uniforme e localizada, minimizando o desperdício e o impacto ambiental. Nossos drones podem aplicar produtos em áreas de difícil acesso, com agilidade e segurança, sem compactar o solo. Seja para pesticidas, herbicidas, fungicidas ou fertilizantes, nossa solução oferece eficiência, economia e sustentabilidade para sua produção.",
                image: "assets/images/image_e9e70d.jpg"
            },
            {
                id: "mapeamento-geoespacial",
                title: "Mapeamento 3D e Análise Geoespacial",
                description: "Transformamos dados aéreos em modelos 3D precisos de sua propriedade. O mapeamento 3D da TecAgro permite a criação de mapas topográficos, modelos digitais de elevação (MDE) e modelos digitais de superfície (MDS), essenciais para o planejamento de irrigação, nivelamento do solo e análise de drenagem. Com essas informações detalhadas, você pode tomar decisões estratégicas sobre o layout da lavoura, otimizar o uso da água e melhorar a gestão de sua propriedade rural, aumentando a eficiência e a sustentabilidade.",
                image: "assets/images/image_e9e6b0.jpg"
            },
            {
                id: "consultoria-agricola",
                title: "Consultoria Agrícola Especializada",
                description: "Além de nossos serviços com drones, oferecemos consultoria agrícola completa para maximizar o potencial de sua propriedade. Nossos especialistas analisam os dados coletados pelos drones e fornecem recomendações personalizadas para o manejo da cultura, otimização de insumos, rotação de culturas e planejamento estratégico. Com a TecAgro, você tem um parceiro que combina tecnologia avançada com conhecimento agronômico para impulsionar seus resultados.",
                image: "assets/images/mao.webp"
            }
        ]
    }
};