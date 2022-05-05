export default {
  global: {
    componenteFormativo:
      'Rutas para el restablecimiento de derechos y acciones de prevención',
    descripcionCurso:
      'En este componente, se entregan los elementos necesarios conocer el debido proceso de atención integral que deben recibir las personas víctimas de violencia de género, esta atención integral está enfocada a recibir las orientaciones para hacer efectivos los derechos, acceder a las medidas de protección específicas e inmediatas, y denunciar los hechos vividos por parte de la persona que tuvo acontecimiento de violencia de género.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Diferenciar la violencia intrafamiliar de la violencia de género',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ruta de restablecimiento de derechos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Denuncia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Referentes institucionales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Medidas de protección',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ruta de atención en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Derechos de las víctimas de violencia sexual',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Atención psicológica y/o física',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Victimización',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Atención integral',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Factores de riesgo y protección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Concepto de prevención',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Acciones psicoeducativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Estrategias',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Acciones individuales y colectivas',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Consejería Presidencial para la Equidad de la Mujer. (2020). Línea 155, una llamada puede marcar la diferencia. Gov.co.',
      link: 'http://www.equidadmujer.gov.co/consejeria/Paginas/linea-155.aspx',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (s. f.-a). Datos de correo electrónico por Municipio.',
      link:
        'https://www.fiscalia.gov.co/colombia/servicios-de-informacion-al-ciudadano/donde-y-como-denunciar/',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (s. f.-b). Líneas internacionales. ',
      link:
        'https://www.fiscalia.gov.co/colombia/servicios-de-informacion-al-ciudadano/centro-de-contacto/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (s. f.). Derechos de las víctimas de violencias de género. ',
      link:
        'https://www.minsalud.gov.co/salud/publica/ssr/Paginas/Derechos-de-las-victimas-de-violencias-de-genero.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Abuso sexual',
      significado:
        'Es el acoso, persecución, asedio físico y verbal y hostigamiento, con fines sexuales no consentidos. ',
    },
    {
      termino: 'Androcentrismo',
      significado:
        'Se denomina así a toda la organización de las estructuras económicas, socioculturales y políticas a partir de la imagen del hombre, teniendo un enfoque que fundamenta las experiencias humanas, el protagonismo de la historia y el desarrollo desde una perspectiva masculina.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'Son los derechos que tienen todos los seres humanos por existir, independientemente de la nacionalidad, género, origen étnico, color, religión, idioma y demás condiciones. Su variación va desde los fundamentales (derecho a la vida), como los derechos de alimentación, educación, trabajo, salud y libertad. ',
    },
    {
      termino: 'Enfoque de género',
      significado:
        'Corresponde a una categoría de análisis con base en las variables sexo y género, que permite identificar los diferentes papeles y tareas que llevan a cabo los hombres y las mujeres en una sociedad, así como las asimetrías y las relaciones de poder e inequidades. ',
    },
    {
      termino: 'Género',
      significado:
        'Es una categoría de análisis que hace referencia al tipo de relaciones que se establecen entre hombres y mujeres de una sociedad particular, con base en las características, los roles, las oportunidades y las posibilidades que el grupo social asigna a cada uno de aquellas y aquellos.',
    },
    {
      termino: 'Invisibilización de las mujeres',
      significado:
        'Se refiere a la desvalorización que hace la sociedad referente a las actividades realizadas por las mujeres, considerándose como actividades naturales o propias de ellas.',
    },
    {
      termino: 'Machismo',
      significado:
        'Es un fenómeno sociocultural que hace sobresalir los valores masculinos, la hombría, la virilidad, el poder de los hombres, expresado con violencia, fuerza y, ante todo, la actitud de superioridad y dominio sobre las mujeres.',
    },
    {
      termino: 'Patriarcado',
      significado:
        'Es un sistema caracterizado por una relación dispar hombre-mujer en el manejo de la autoridad, el poder y las decisiones, sesgada a favor del hombre. ',
    },
    {
      termino: 'Sexismo',
      significado:
        'Se refiere a una actitud y conducta jerárquica y discriminatoria respecto de una persona, por motivos de su sexo o identidad sexual.',
    },
    {
      termino: 'Violencia contra la mujer',
      significado:
        'Es entendida como cualquier acción u omisión que le cause muerte, daño o sufrimiento físico, sexual, psicológico, económico o patrimonial por su condición de mujer. ',
    },
  ],
  complementario: [
    {
      texto:
        'PantallasAmigas. (2017). 10 formas de violencia de género digital [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/ub9rWnmiq_g',
    },
    {
      texto:
        'Secretaría de las Mujeres. (2014). Glosario de conceptos para la transversalización del enfoque de género. Alcaldía de Medellín. ',
      tipo: 'Glosario',
      descarga: 'downloads/178e24ba-5bd6-4343-b159-3d873bf8d892.pdf',
    },
    {
      texto:
        'Ley 1959 de 2019. Por medio de la cual se modifican y adicionan artículos de la ley 599 de 2000 y la ley 906 de 2004 en relación con el delito de violencia intrafamiliar. Junio 20 de 2019.',
      tipo: 'Normativa',
      link: 'downloads/LEY_1959_DEL_20_DE_JUNIO_DE_2019.pdf',
    },
    {
      texto:
        'Noticias Caracol. (2018). Colombia y su lucha para frenar la violencia contra la mujer [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/9LB_Gmk0yk4',
    },
    {
      texto:
        'Sistema Integrado de Gestión de la Presidencia de la República [SIGEPRE]. (2020). Guía de Protocolo para la atención de la Línea 155. Presidencia de la República. ',
      tipo: 'Documento',
      link: 'downloads/G-AE-06-Guia-Protocolo-atencion-Linea-155.pdf',
    },
    {
      texto:
        'Ministerio de Justicia y del Derecho [Minjusticia]. (s. f.). Guía Pedagógica para Comisarías de Familia sobre el procedimiento para el abordaje de la violencia intrafamiliar con enfoque de género. ',
      tipo: 'Guía',
      link: 'downloads/Guia_Pedagogica_para_Comisarias_de_Familia.pdf',
    },
    {
      texto:
        'Ley 1257 de 2008. Por la cual se dictan normas de sensibilización, prevención y sanción de formas de violencia y discriminación contra las mujeres, se reforman los códigos penales, de procedimiento penal, la ley294 de 1996 y se dictan otras disposiciones. Diciembre 4 de 2008. DO. Nº. 47.193. ',
      tipo: 'Normativa',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34054#:~:text=La%20presente%20ley%20tiene%20por,a%20los%20procedimientos%20administrativos%20y',
    },
    {
      texto:
        'Dirección de Promoción y Prevención. (2010). Lineamientos para operar programas preventivos. Ministerio de Salud y Protección Social. ',
      tipo: 'Documento',
      link: 'downloads/lineamientos-programas-preventivos.pdf',
    },
    {
      texto:
        'Consejo Noruego para Refugiados. (2018). Prevención de Violencia Basada en Género [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/Moz4tszhujU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander – Centro de la Industria de la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Enrique Díaz Reyes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Emilsen Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
