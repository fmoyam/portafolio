export const datosPerfil = {
  nombre: 'Felipe Moya Molina',
  rol: 'Analista Programador en formación',
  descripcion:
    'Estudiante en DUOC UC (egreso estimado 2027) desarrollando en Python, JavaScript, Java, SQL y HTML/CSS. Cuento con experiencia mantención de hardware y software en entornos Windows y Linux.',
  descripcionSecundaria:
    'Busco un rol donde desarrollarme como programador y continuar mi aprendizaje tanto en software como hardware.',
  disponibilidad: 'Disponible para iniciar mi práctica profesional a partir de Marzo 2027.',
  ubicacion: 'Maipú, Santiago de Chile',
  correo: 'fel.moyam@duocuc.cl',
  telefono: '+569 31435167',
  habilidades: [
    'Desarrollo Web',
    'Programación Orientada a Objetos',
    'Desarrollo con LLMs',
    'Python',
    'JavaScript',
    'Java',
    'SQL',
    'HTML/CSS'
  ],
}

export const enlacesNavegacion = [
  { id: 'personal', etiqueta: 'Personal' },
  { id: 'experiencia', etiqueta: 'Experiencia' },
  { id: 'estudios', etiqueta: 'Estudios' },
  { id: 'proyectos', etiqueta: 'Proyectos' },
  { id: 'contacto', etiqueta: 'Contacto' },
]

export const datosExperiencia = [
  {
    id: 'experiencia-1',
    empresa: 'Verisure Chile',
    cargo: 'Operador de Soporte Técnico',
    inicio: 'Junio 2023',
    termino: 'Junio 2024',
    actual: false,
    descripcion:
      'Resolución de tickets mediante consola de operaciones a técnicos en terreno. Apertura, auditoría y cierre de mantenimientos vía remota a sistemas de alarma.',
    logros: [
      'Resolución de incidencias críticas con App de cliente interno para mantenimientos.',
      'Apoyo al área de “laboratorio” en extracción de datos a hardware dañado en robos / atracos.',
    ],
  },
  {
    id: 'experiencia-2',
    empresa: 'Verisure Chile',
    cargo: 'Ejecutivo de Atención al Cliente',
    inicio: 'Julio 2022',
    termino: 'Mayo 2023',
    actual: false,
    descripcion:
      'Atención a requerimientos de clientes del sistema de alarmas (incidencias de hardware / software).',
    logros: [
      'Gestiones administrativas para clientes naturales y empresas.',
      'Apoyo a backlog administrativo de otras áreas.',
    ],
  },
  {
    id: 'experiencia-3',
    empresa: 'Freelance',
    cargo: 'Técnico de Soporte',
    inicio: 'Marzo 2020',
    termino: 'null',
    actual: true,
    descripcion:
      'Mantención integral de hardware informático (PC, Laptop, AIO, Mac)',
    logros: [
      'Mantención e instalación de sistemas operativos (MacOS, Windows, Linux)',
      'Instalación y mantención de sistemas de cámaras y sensores de seguridad.',
    ],
  },
  {
    id: 'experiencia-4',
    empresa: 'Alcansa S.A.',
    cargo: 'Promotor de Ventas para Lenovo',
    inicio: 'Junio 2019',
    termino: 'Diciembre 2019',
    actual: false,
    descripcion:
      'Atención y asesoría al cliente en la compra de equipos (laptops, tablets, AIO.) Manejo de inventario y reposición de productos.',
    logros: ['Posicionamiento de Lenovo como top 3 en venta de equipos en el área de Santiago poniente.'],
  },
]

export const datosEstudios = [
  {
    id: 'estudio-1',
    institucion: 'Universidad Lorem Ipsum',
    titulo: 'Magíster en Dolor Sit Amet',
    periodo: '2019 — 2021',
    anio: '2021',
    descripcion:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'estudio-2',
    institucion: 'Instituto Consectetur',
    titulo: 'Título Profesional en Ipsum Dolor',
    periodo: '2013 — 2017',
    anio: '2017',
    descripcion:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    id: 'estudio-3',
    institucion: 'Academia Tempor Incididunt',
    titulo: 'Certificación en Labore et Dolore',
    periodo: '2018',
    anio: '2018',
    descripcion:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

export const datosProyectos = [
  {
    id: 'proyecto-1',
    destacado: true,
    titulo: 'Lorem Ipsum Dolor',
    categoria: 'Aplicación Web',
    descripcion:
      'Consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.',
    tecnologias: ['React', 'Lorem', 'Ipsum'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#0047AB',
  },
  {
    id: 'proyecto-2',
    destacado: false,
    titulo: 'Sit Amet Consectetur',
    categoria: 'Biblioteca',
    descripcion:
      'Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus.',
    tecnologias: ['Node', 'Dolor', 'Sit'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#2B3038',
  },
  {
    id: 'proyecto-3',
    destacado: true,
    titulo: 'Adipiscing Elit Sed',
    categoria: 'Herramienta',
    descripcion:
      'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum at eros.',
    tecnologias: ['TypeScript', 'Amet', 'Elit'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#3E76D0',
  },
  {
    id: 'proyecto-4',
    destacado: false,
    titulo: 'Eiusmod Tempor',
    categoria: 'Móvil',
    descripcion:
      'Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit.',
    tecnologias: ['React Native', 'Tempor', 'Magna'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#0A0B0D',
  },
  {
    id: 'proyecto-5',
    destacado: true,
    titulo: 'Labore Dolore Magna',
    categoria: 'Dashboard',
    descripcion:
      'Etiam porta sem malesuada magna mollis euismod. Curabitur blandit tempus porttitor.',
    tecnologias: ['Next.js', 'Labore', 'Dolore'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#5B8DEF',
  },
  {
    id: 'proyecto-6',
    destacado: false,
    titulo: 'Aliqua Ut Enim',
    categoria: 'Open Source',
    descripcion:
      'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
    tecnologias: ['Vite', 'Aliqua', 'Veniam'],
    repositorio: 'https://github.com/',
    demo: 'https://example.com/',
    acento: '#454C57',
  },
]

export const datosRedesSociales = [
  {
    id: 'linkedin',
    nombre: 'LinkedIn',
    url: 'https://www.linkedin.com/in/felmoyam/',
    icono: 'linkedin',
  },
  {
    id: 'github',
    nombre: 'GitHub',
    url: 'https://github.com/fmoyam',
    icono: 'github',
  },
  {
    id: 'correo',
    nombre: 'Correo',
    url: 'mailto:fel.moyam@duocuc.cl',
    icono: 'correo',
  },
]

export const datosPiePagina = {
  descripcion:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Portafolio construido con React y Material UI.',
  lema: 'Consectetur adipiscing elit — Lorem ipsum.',
  enlaces: enlacesNavegacion,
}
