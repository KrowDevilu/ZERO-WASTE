export interface Solicitacoes {
  id: number;
  ong: string;
  descricao: Text;
  produto: [{ nome: string; quantidade: number; data: Date }];
  local: { cidade: string; estado: string; endereco: string };
}
export const solicitacoes = [
  {
    id: 0,
    ong: 'ONG Mãos Solidárias',
    descricao:
      "A ONG 'Mãos Solidárias' foi fundada há mais de uma década por um grupo de amigos que se comoveu com a situação de moradores de rua e famílias carentes que viviam em situação de extrema pobreza em sua cidade. Eles perceberam que muitas pessoas não tinham acesso a alimentos nutritivos e saudáveis, o que impactava negativamente sua saúde e bem-estar.",
    produto: [
      { nome: 'Arroz', quantidade: 10, data: '26/02/2023' },
      { nome: 'Feijão', quantidade: 5, data: '27/02/2023' },
    ],
    local: {
      cidade: 'São Paulo',
      estado: 'SP',
      endereco: 'Rua das amélias, 56',
    },
  },
  {
    id: 1,
    ong: 'ONG Esperança',
    descricao: 'Texto Base',
    produto: [{ nome: 'Feijão', quantidade: 5, data: '26/01/2023' }],
    local: {
      cidade: 'Guarulhos',
      estado: 'SP',
      endereco: 'Rua floro de oliveira, 90',
    },
  },
  {
    id: 2,
    ong: 'ONG Ser mais',
    descricao: 'Texto Base',
    produto: [{ nome: 'Café', quantidade: 2, data: '22/02/2023' }],
    local: {
      cidade: 'Osasco',
      estado: 'SP',
      endereco: 'Rua braba, 420',
    },
  },
  {
    id: 3,
    ong: 'ONG banco de Alimentos',
    descricao: 'Texto Base',
    produto: [{ nome: 'Farinha', quantidade: 7, data: '27/02/2023' }],
    local: {
      cidade: 'São Paulo',
      estado: 'SP',
      endereco: 'Rua chique, 101',
    },
  },
];
