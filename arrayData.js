var dataBd = [
  {
    "areaProcesso": "Administrativo",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "15"
  },
  {
    "areaProcesso": "Administrativo",
    "status": "Ativo",
    "qtdeProcessos": "238"
  },
  {
    "areaProcesso": "Administrativo",
    "status": "Baixado",
    "qtdeProcessos": "18"
  },
  {
    "areaProcesso": "Ambiental",
    "status": "Ativo",
    "qtdeProcessos": "2"
  },
  {
    "areaProcesso": "Cível",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "794"
  },
  {
    "areaProcesso": "Cível",
    "status": "Ativo",
    "qtdeProcessos": "2239"
  },
  {
    "areaProcesso": "Cível",
    "status": "Baixado",
    "qtdeProcessos": "182"
  },
  {
    "areaProcesso": "Cível",
    "status": "Substabelecido",
    "qtdeProcessos": "18"
  },
  {
    "areaProcesso": "Cível",
    "status": "Suspenso",
    "qtdeProcessos": "2"
  },
  {
    "areaProcesso": "Constitucional",
    "status": "Ativo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Contratos e Compliance",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Contratos e Compliance",
    "status": "Ativo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Eleitoral",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "2"
  },
  {
    "areaProcesso": "Eleitoral",
    "status": "Ativo",
    "qtdeProcessos": "9"
  },
  {
    "areaProcesso": "Empresarial",
    "status": "Baixado",
    "qtdeProcessos": "2"
  },
  {
    "areaProcesso": "Expropriatórios - Possessórios",
    "status": "Baixado",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Extrajudicial - Mediação - Arbitragem",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Extrajudicial - Mediação - Arbitragem",
    "status": "Ativo",
    "qtdeProcessos": "26"
  },
  {
    "areaProcesso": "Extrajudicial - Mediação - Arbitragem",
    "status": "Baixado",
    "qtdeProcessos": "27"
  },
  {
    "areaProcesso": "Família e Sucessões",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "6"
  },
  {
    "areaProcesso": "Família e Sucessões",
    "status": "Ativo",
    "qtdeProcessos": "69"
  },
  {
    "areaProcesso": "Família e Sucessões",
    "status": "Baixado",
    "qtdeProcessos": "3"
  },
  {
    "areaProcesso": "Imobiliário",
    "status": "Ativo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Internacional",
    "status": "Baixado",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Obrigações e Contratos",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "1"
  },
  {
    "areaProcesso": "Obrigações e Contratos",
    "status": "Ativo",
    "qtdeProcessos": "16"
  },
  {
    "areaProcesso": "Obrigações e Contratos",
    "status": "Baixado",
    "qtdeProcessos": "56"
  },
  {
    "areaProcesso": "Penal-Criminal",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "23"
  },
  {
    "areaProcesso": "Penal-Criminal",
    "status": "Ativo",
    "qtdeProcessos": "232"
  },
  {
    "areaProcesso": "Penal-Criminal",
    "status": "Baixado",
    "qtdeProcessos": "23"
  },
  {
    "areaProcesso": "Penal-Criminal",
    "status": "Substabelecido",
    "qtdeProcessos": "3"
  },
  {
    "areaProcesso": "Previdenciário",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "20"
  },
  {
    "areaProcesso": "Previdenciário",
    "status": "Ativo",
    "qtdeProcessos": "60"
  },
  {
    "areaProcesso": "Previdenciário",
    "status": "Baixado",
    "qtdeProcessos": "6"
  },
  {
    "areaProcesso": "Trabalhista",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "489"
  },
  {
    "areaProcesso": "Trabalhista",
    "status": "Ativo",
    "qtdeProcessos": "1023"
  },
  {
    "areaProcesso": "Trabalhista",
    "status": "Baixado",
    "qtdeProcessos": "268"
  },
  {
    "areaProcesso": "Trabalhista",
    "status": "Substabelecido",
    "qtdeProcessos": "2"
  },
  {
    "areaProcesso": "Tributário",
    "status": "Arquivado Definitivo",
    "qtdeProcessos": "160"
  },
  {
    "areaProcesso": "Tributário",
    "status": "Ativo",
    "qtdeProcessos": "256"
  },
  {
    "areaProcesso": "Tributário",
    "status": "Baixado",
    "qtdeProcessos": "27"
  },
  {
    "areaProcesso": "Tributário",
    "status": "Substabelecido",
    "qtdeProcessos": "6"
  }
]

var dateOfObj;
var newArray = [];
var mountArray = [];
var countArray = 0;
var qtdTabela = 0;
dataBd.forEach(function (data, i) {
  if (dateOfObj !== data.areaProcesso) {
    dateOfObj = data.areaProcesso;
    qtdTabela += parseInt(data.qtdeProcessos);
    newArray.push({
      status: data.status,
      qtdeProcessos: data.qtdeProcessos
    })
    mountArray[countArray] = { areaProcesso: data.areaProcesso, total: qtdTabela, events: newArray }
    countArray++;
  }
  else {
    for (let j = 0; j < dataBd.length; j++) {
      if (dateOfObj === dataBd[j].areaProcesso) {
        qtdTabela += parseInt(dataBd[j].qtdeProcessos);
        newArray.push({
          status: dataBd[j].status,
          qtdeProcessos: dataBd[j].qtdeProcessos,
        })
      }
    }
    mountArray[countArray - 1] = { areaProcesso: data.areaProcesso, total: qtdTabela, events: newArray }
  }
  newArray = [];
  qtdTabela = 0;
});

console.log(mountArray)