export default {
  global: {
    Name: 'Pasadores, anillos y bielas lubricadas',
    Description:
      'Este componente aborda los elementos clave del conjunto móvil del motor: pasadores, anillos y bielas, responsables de transformar la energía térmica en movimiento. Se detalla su función, materiales, tipos y montaje. Además, se analiza el eje cigüeñal, su alojamiento, lubricación y el volante de inercia, elementos cruciales para la transmisión de potencia y el funcionamiento suave del motor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Pasadores del pistón',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Función y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Materiales de construcción',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Montaje y aseguramiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Anillos del pistón',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Funciones principales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de anillos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Materiales y características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Instalación y comprobación',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La biela',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Función y esfuerzos soportados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Partes de la biela',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Materiales de construcción',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Diseño y tipos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Cojinetes de biela',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Lubricación del pie de biela',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'El eje cigüeñal y componentes relacionados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Alojamiento del cigüeñal en el bloque',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'El Eje cigüeñal',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Lubricación del eje cigüeñal',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Transmisión de la fuerza del cigüeñal',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'El volante de inercia',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: 'Pasadores del pistón.',
      referencia:
        'Motormex (30 de diciembre de 2019). Como colocar los anillos en los pistones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DK3Lvwj7FVE',
    },
    {
      tema: 'La biela.',
      referencia:
        'Motormex (30 de diciembre de 2019). Como colocar los anillos en los pistones [Video]. YouTube.',
      tipo: 'Página <em>web</em>',
      link: 'https://www.motor.es/que-es/biela',
    },
  ],
  glosario: [
    {
      termino: 'Anillo de compresión',
      significado:
        'elementos metálicos elásticos instalados en ranuras del pistón que sellan la cámara de combustión, evitan el paso de gases hacia el cárter y aseguran una correcta compresión.',
    },
    {
      termino: 'Anillo de control de aceite',
      significado:
        'segmento del pistón que regula el paso de aceite hacia las paredes del cilindro, evitando el exceso y asegurando una lubricación eficaz sin pérdida de compresión.',
    },
    {
      termino: 'Casquillo',
      significado:
        'inserto metálico antifricción ubicado en el pie de biela o pistón, que permite el movimiento del pasador con mínima fricción.',
    },
    {
      termino: 'Cigüeñal',
      significado:
        'eje principal del motor que transforma el movimiento lineal de los pistones en movimiento rotatorio.',
    },
    {
      termino: 'Cojinete de bancada',
      significado:
        'componente antifricción que soporta los muñones del cigüeñal sobre el bloque motor, permitiendo su rotación con carga.',
    },
    {
      termino: 'Cojinete de biela',
      significado:
        'componente antifricción bipartido que se coloca entre la cabeza de la biela y el cigüeñal, permitiendo el giro suave bajo carga.',
    },
    {
      termino: 'Eje de rotación',
      significado:
        'línea sobre la cual gira el cigüeñal en función del movimiento impulsado por el conjunto de pistones y bielas.',
    },
    {
      termino: 'Engrase',
      significado:
        'aplicación de lubricante en el conjunto móvil del motor para reducir fricción y desgaste en las zonas de contacto del pasador, biela y pistón.',
    },
    {
      termino: 'Fricción',
      significado:
        'resistencia que experimentan las superficies en contacto, reducida mediante lubricación en las uniones del conjunto móvil del motor.',
    },
    {
      termino: 'Juego radial',
      significado:
        'espacio entre el pasador de pistón y el orificio de la biela para permitir su movimiento y la lubricación.',
    },
    {
      termino: 'Pasador de pistón',
      significado:
        'eje cilíndrico que conecta el pistón con la biela, transmitiendo la fuerza de combustión y permitiendo movimiento oscilante.',
    },
    {
      termino: 'Pie de biela',
      significado:
        'parte superior de la biela donde se inserta el pasador del pistón; puede tener buje para reducir fricción.',
    },
    {
      termino: 'Segmento de sellado',
      significado:
        'sinónimo de anillo de compresión, su función es asegurar la estanqueidad de la cámara de combustión.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'espacio calculado en milímetros entre componentes móviles (como pistón y cilindro) para facilitar la lubricación y evitar el desgaste.',
    },
    {
      termino: 'Volante de inercia',
      significado:
        'disco pesado acoplado al cigüeñal que almacena y estabiliza la energía cinética, facilitando el arranque y la transmisión de potencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abello Rubiano, C. E. (2012). Pasadores, anillos y bielas lubricadas. SENA.',
    },
    {
      referencia: 'Auto Mecánico. (s.f.). Motor de cuatro tiempos.',
      link: 'http://automecanico.com/auto2002/motor4.html',
    },
    {
      referencia: 'Innovación Diesel. (2008, 30 de julio). Anillos del pistón.',
      link: 'http://senaydiesel.blogspot.com/2008/07/anillos.html',
    },
    {
      referencia: 'Motor Spain. (s.f.). Partes principales de un motor.',
    },
    {
      referencia:
        'Precision Engine Tech. (2009, diciembre). Lubricación de cojinetes.',
    },
    {
      referencia: 'Sabelotodo.org. (s.f.). Conjunto pistón, camisa y anillos.',
    },
    {
      referencia: 'Tu Motor MX. (s.f.). Claro de lubricación y cojinetes.',
      link: 'http://tumotor.mx/2010/03/claro-de-lubricacion-cojinetes/',
    },
    {
      referencia:
        'Vargas Arias, P. (Ed.). (2012). Lubricación del eje cigüeñal. SENA.',
    },
    {
      referencia: 'ZF Sachs. (s.f.). Volante bimasa (Dual-Mass Flywheel).',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Aydeé López Contador',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión de Mercados Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack junior</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
