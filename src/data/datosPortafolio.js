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
    institucion: 'Instituto Profesional DuocUC: Sede Maipú',
    titulo: 'Analista Programador',
    periodo: '2025 — 2027',
    anio: 'Cursando',
    descripcion:
      'Carrera en proceso. Año de titulación estimado 2027.',
  },
  {
    id: 'estudio-2',
    institucion: 'Universidad Tecnológica Metropolitana',
    titulo: 'Trabajo Social',
    periodo: '2017 — 2021',
    anio: 'Deserción en 2021',
    descripcion:
      'Carrera desertada. Cambio de rumbo profesional.',
  },
]

export const datosProyectos = [
  {
    id: 'proyecto-1',
    destacado: true,
    titulo: 'Tienda Guau & Miau',
    categoria: 'Página Web',
    descripcion:
      'Proyecto académico: Página web simple para tienda de mascotas. Incluye registro dinámico con ingreso de n cantidad de mascotas.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    repositorio: 'https://github.com/fmoyam/decohogar',
    demo: 'null',
    acento: '#0047AB',
  },
  {
    id: 'proyecto-2',
    destacado: false,
    titulo: 'Tienda DecoHogar',
    categoria: 'Página Web',
    descripcion:
      'Proyecto académico: Página web simple para tienda. Incluye registro dinámico con ingreso de diferentes direcciones de envío.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    repositorio: 'https://github.com/fmoyam/decohogar',
    demo: 'null',
    acento: '#2B3038',
  },
  {
    id: 'proyecto-3',
    destacado: true,
    titulo: 'DIMAC: Digitalización de Maipú y Atención Ciudadana',
    categoria: 'Aplicación Web',
    descripcion:
      'Proyecto académico: Web App para centralizar servicios de los diferentes Centros de Atención Municipal de la comuna de Maipú.',
    tecnologias: ['TypeScript', 'HTML', 'CSS'],
    repositorio: 'https://github.com/fmoyam/DIMAC',
    demo: 'https://proyecto-dimac.vercel.app/',
    acento: '#3E76D0',
  },
  {
    id: 'proyecto-4',
    destacado: true,
    titulo: 'PCer2 Servicio Técnico',
    categoria: 'API RESTful',
    descripcion:
      'Proyecto académico: Sistema para la gestion de un servicio técnico de computadores. Desarrollado bajo una arquitectura de microservicios, permite administrar informacion de clientes, equipos, ordenes de trabajo, entre otras cosas.',
    tecnologias: ['Java', 'Spring Boot', 'Spring Web', 'Swagger'],
    repositorio: 'https://github.com/fmoyam/pcer2-yapur-jara-moya-010D',
    demo: 'null',
    acento: '#0A0B0D',
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
    'Portafolio construido con React, Material UI y mucho café.',
  lema: ' ',
  enlaces: enlacesNavegacion,
}
