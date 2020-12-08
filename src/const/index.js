export const url = 'https://onechanceback.herokuapp.com';
export const potentialRoles = ['student', 'recruiter'];
export const provincias = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Córdoba',
  'Corrientes',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
];
export const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};

export const tipoEmpleo = [
  'Jornada Completa',
  'Jornada Parcial',
  'Contrato Temporal',
  'Practicas Profesionales',
  'Pasantias',
];

export const universities = [
  {
    provincia: 'Buenos Aires',
    universidades: [
      ' Universidad de Buenos Aires (UBA) ',
      'Universidad de la Defensa Nacional',
      ' Universidad Tecnológica Nacional (UTN) (Medrano)',
      'Universidad Nacional Arturo Jauretche',
      'Instituto Universitario de la Policía Federal Argentina (IUPFA)',
      'Facultad Latinoamericana de Ciencias Sociales (FLACSO)',
      'Universidad Austral',
      'Universidad Favaloro',
      ' Universidad de Palermo (UP)',
      'Universidad de San Andrés (UDESA)',
      'Instituto Tecnológico Buenos Aires (ITBA)',
    ],
  },
  {
    provincia: 'Catamarca',
    universidades: ['Universidad Nac. de Catamarca (UNCA)'],
  },
  {
    provincia: 'Chaco',
    universidades: [
      ' Universidad Nacional del Nordeste (UNNE)',
      ' Universidad Nacional del Chaco Austral (UNCAUS)',
      'Universidad Tecnológica Nacional (UTN)',
      ' Universidad de Ciencias Empresariales y Sociales (UCES)',
      'Universidad de la Cuenca del Plata',
    ],
  },
  {
    provincia: 'Chubut',
    universidades: [
      'Univ. Nacional del Comahue (UNCOMA)',
      'Univ. N. de la Patagonia San Juan Bosco (UNP)',
      'Universidad Tecnológica Nacional (UTN) ',
      'Universidad de Flores (UFLO) ',
    ],
  },
  {
    provincia: 'Córdoba',
    universidades: [
      'Universidad Nacional de Córdoba (UNC)',
      'Universidad Nacional de Río Cuarto (UNRC) ',
      ' Universidad Nacional de Villa María (UNVM)',
      'Instituto Universitario Aeronáutico (IUA) ',
      ' Universidad Tecnológica Nacional (UTN)',
      'Universidad Blas Pascal (UBP) ',
      'Universidad Católica de Córdoba (UCC) ',
      'Universidad Empresarial Siglo XXI (UES) ',
      'Universidad Provincial de Córdoba ',
      'Universidad de Ciencias Empresariales y Sociales (UCES)',
      'Universidad de Belgrano (UB) ',
    ],
  },
  {
    provincia: 'Corrientes',
    universidades: [
      'Universidad de la Cuenca del Plata',
      'Universidad del Salvador (USAL) ',
      'Instituto Universitario de Cs. de la Salud Fundación',
      'Barceló (FB)',
      'Universidad Nacional del Nordeste (UNNE)',
    ],
  },
  {
    provincia: 'Entre Ríos',
    universidades: [
      'Universidad Autónoma de Entre Ríos (UADER)',
      'Universidad Nacional de Entre Ríos (UNER)',
      'Univ. Nac. de Concepción del Uruguay (UCU)',
      'Universidad Tecnológica Nacional (UTN) ',
      'Universidad Adventista del Plata (UAPAR)',
      'Universidad Católica Argentina (UCA)',
    ],
  },
  {
    provincia: 'Formosa',
    universidades: [
      'Universidad Nacional de Formosa (UNF)',
      'Universidad de la Cuenca del Plata ',
    ],
  },
  {
    provincia: 'Jujuy',
    universidades: ['Universidad Nacional de Jujuy (UNJU)'],
    'La Pampa': ['Universidad Nacional de La Pampa (UNLPAM)'],
    'La Rioja': [
      'Universidad Nacional de La Rioja (UNLAR)',
      'Universidad Nacional de Chilecito (UNDEC)',
      ' Universidad Tecnológica Nacional (UTN)',
    ],
  },
  {
    provincia: 'Mendoza',
    universidades: [
      'Universidad Nacional de Cuyo (UNCU)',
      'Universidad Tecnológica Nacional (UTN) ',
      'Universidad de Mendoza (UM)',
      'Universidad Juan Agustín Maza (UMAZA)',
      'Universidad de Congreso',
      'Universidad del Aconcagua (UDA)',
      'Universidad Champagnat',
      'Universidad Católica Argentina (UCA)',
    ],
  },
  {
    provincia: 'Misiones',
    universidades: [
      'Universidad Nacional de Misiones (UNAM)',
      'Universidad Gastón Dachary',
      'Universidad de la Cuenca del Plata',
    ],
  },
  {
    provincia: 'Neuquén',
    universidades: [
      'Univ. Nac. del Comahue (UNCOMA)',
      'Universidad Tecnológica Nacional (UTN)',
      'Universidad de Ciencias Empresariales y Sociales (UCES)',
    ],
  },
  {
    provincia: 'Río Negro',
    universidades: [
      'Universidad Nacional de Río Negro (UNRN)',
      'Universidad Nacional del Comahue (UNCOMA)',
      'Instituto Balseiro (IB)',
      'Instituto Universitario Patagónico de las Artes',
      'Universidad FASTA',
    ],
  },
  {
    provincia: 'Salta',
    universidades: [
      'Universidad Nacional de Salta (UNSA)',
      'Universidad Católica de Salta (UCASAL) ',
    ],
  },
  {
    provincia: 'San Juan',
    universidades: [
      'Universidad Nacional de San Juan (UNSJ)',
      'Universidad Católica de Cuyo (UCCUYO)',
    ],
  },
  {
    provincia: 'San Luis',
    universidades: [
      'Universidad Nacional de San Luís (UNSL)',
      'Universidad Nacional de Villa Mercedes',
      'Universidad Provincial de la Punta (ULP)',
      'Universidad Nacional de los Comechingones',
    ],
  },
  {
    provincia: 'Santa Cruz',
    universidades: [
      'Universidad Nacional de la Patagonia Austral (UNPA)',
      'Universidad Tecnológica Nacional (UTN)',
    ],
  },
  {
    provincia: 'Santa Fe',
    universidades: [
      'Universidad Nacional de Rosario (UNR)',
      'Universidad Nacional del Litoral (UNL) ',
      'Universidad Nacional de Rafaela',
      'Universidad Tecnológica Nacional (UTN)',
      'Universidad Católica de Santa Fe (UCSF)',
      'Univ. de Ciencias Empresariales y Sociales (UCES)',
      'Universidad Austral',
      'Instituto Universitario Italiano de Rosario (IUNIR)',
      'Instituto Universitario del Gran Rosario (IUGR)',
      'Universidad del Centro Educ. Latinoamericano (UCEL) ',
      'Universidad Abierta Interamericana (UAI)',
      'Universidad Católica Argentina (UCA)',
      'Instituto Universitario IDEA ',
      'IAE Business School',
    ],
  },
  {
    provincia: 'Santiago del Estero',
    universidades: [
      'Universidad Nacional de Santiago del Estero (UNSE)',
      'Universidad Católica de Santiago del Estero (UCSE)',
    ],
  },
  {
    provincia: 'Tierra del Fuego',
    universidades: [
      'Universidad Tierra del Fuego, Antártica e Islas del Atlántico Sur',
      'Universidad Tecnológica Nacional (UTN)',
      'Universidad de Ciencias Empresariales y Sociales (UCES)',
    ],
  },
  {
    provincia: 'Tucumán',
    universidades: [
      'Universidad Tecnológica Nacional (UTN)',
      'Univ. del Norte Santo Tomás de Aquino (UNSTA)',
      'Universidad de San Pablo - Tucumán (USPT)',
    ],
  },
];
