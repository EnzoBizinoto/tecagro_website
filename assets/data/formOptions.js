const formOptions = {
    services: [
        { value: "monitoramento", text: "Monitoramento de Culturas" },
        { value: "pulverizacao", text: "Pulverização de Precisão" },
        { value: "mapeamento", text: "Mapeamento 3D" },
        { value: "consultoria", text: "Consultoria Agrícola" }
    ],
    cropTypes: [
        { value: "soja", text: "Soja" },
        { value: "milho", text: "Milho" },
        { value: "algodao", text: "Algodão" },
        { value: "cafe", text: "Café" },
        { value: "cana", text: "Cana-de-açúcar" },
        { value: "outros", text: "Outros" }
    ],
    defenseTypes: [
        { value: "pesticida", text: "Aplicação de Pesticida" },
        { value: "fertilizante", text: "Aplicação de Fertilizante" },
        { value: "herbicida", text: "Aplicação de Herbicida" },
        { value: "fungicida", text: "Aplicação de Fungicida" },
        { value: "sem_defesa", text: "Sem Defesa Agrícola Específica" }
    ],
    sprayingTimes: [
        { value: "manha", text: "Manhã (06h-10h)" },
        { value: "tarde", text: "Tarde (14h-18h)" },
        { value: "qualquer", text: "Qualquer Horário" }
    ],
    flowRates: [
        { value: "10l_ha", text: "10 Litros/Hectare" },
        { value: "15l_ha", text: "15 Litros/Hectare" },
        { value: "20l_ha", text: "20 Litros/Hectare" },
        { value: "custom", text: "Vazão Personalizada (Informar na Mensagem)" }
    ]
};
