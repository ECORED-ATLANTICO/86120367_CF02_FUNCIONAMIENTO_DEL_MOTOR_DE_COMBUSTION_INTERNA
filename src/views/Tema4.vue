<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 El eje cigüeñal y componentes relacionados

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        p.banner-text.banner-text--up El eje cigüeñal es el componente central del motor que convierte el movimiento lineal alternativo de los pistones en movimiento rotativo.

    .row.justify-content-center.align-items-center.z-2.mt-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 11.
          span <em>Ubicación del cigüeñal</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/2.png', alt='Se muestra la ubicación del cigüeñal y el bloque')
        figcaption Fuente: SENA, 2025

    Separador

    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.1	Alojamiento del cigüeñal en el bloque

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-6.col-lg-2.mb-4.mb-lg-0
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/3.svg', alt='Alojamiento del cigüeñal en el bloque')
      .col-lg-10
        p.mb-4.mb-lg-0 El cigüeñal se aloja en el bloque motor en una serie de soportes llamados bancadas. Estas bancadas están formadas por semi-cilindros maquinados en la parte inferior del bloque motor y tapas de bancada atornilladas al bloque. Entre el cigüeñal y los alojamientos en el bloque y las tapas se instalan los cojinetes de bancada. La alineación y precisión de estos alojamientos son críticas para el correcto funcionamiento y durabilidad del cigüeñal y los cojinetes.

    .fullwith-bg.fullwith-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 12.
          span <em>Cojinetes del cigüeñal</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/4.png', alt='Se muestran los cojinetes de bancada')
        figcaption Fuente: SENA, 2025

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 13.
          span <em>Alineación codos del cigüeñal</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/5.png', alt='Alineación codos del cigüeñal se puede apreciar el calibrador y la regla de precisión. y la fuente')
        figcaption Fuente: SENA, 2025

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title.motor-title--large Verificación y comprobación del alojamiento

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        figure
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/6.png', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-8
        p.mb-4.mb-lg-0 La verificación del alojamiento del cigüeñal en el bloque implica la comprobación de su alineación, redondez y diámetro. Se utilizan herramientas de precisión como micrómetros de interiores y galgas para medir los diámetros de los alojamientos con y sin los cojinetes instalados. Se verifica que no haya deformaciones (ovalización o conicidad) y que los diámetros estén dentro de las tolerancias especificadas por el fabricante. Si se detectan irregularidades, puede ser necesario rectificar los alojamientos o incluso reemplazarlos si el daño es severo. La correcta verificación asegura que el cigüeñal girará libremente y que la película de lubricante hidrodinámico se formará adecuadamente.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 14.
          span <em>Verificación de alineación del cigüeñal con palpador micrométrico</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/7.png', alt='En la figura se muestra la forma de verificar la alineación del cigüeñal con palpador micrométrico.')
        figcaption Fuente: SENA, 2025

    .fullwith-bg.fullwith-bg--1
    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.2	El Eje Cigüeñal
      
    p.mb-4.mb-lg-5 El eje cigüeñal, también conocido como árbol de manivelas, es la columna vertebral giratoria del motor.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 15.
          span <em>Función del cigüeñal en la transmisión de fuerza del motor</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/8.png', alt='Función del cigüeñal en la transmisión de fuerza del motor')
        figcaption Fuente: SENA, 2025

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title Función y partes


    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.my-4.my-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La función principal del cigüeñal es convertir el movimiento lineal ascendente y descendente de los pistones, transmitido a través de las bielas, en un movimiento de rotación que se utiliza para impulsar el vehículo y accionar los sistemas auxiliares del motor. Las partes principales del cigüeñal incluyen:

    .row.align-items-center.justify-content-center.mb-4.mb-lg-5
      .d-none.d-xl-block.col-xl-3
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/10.png', alt='Ilustración de un mecánico')

      .col-xl-8
        SlyderF(columnas="col-sm-6 col-xl-6")
          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/11.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Muñones de bancada:
            p.text-center son las superficies cilíndricas sobre las que el cigüeñal gira apoyado en los cojinetes de bancada en el bloque motor.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/12.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Muñones de biela:
            p.text-center son las superficies cilíndricas excéntricas con respecto al eje de giro del cigüeñal a las que se conectan las cabezas de biela.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/13.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Brazos o contrapesos:
            p.text-center conectan los muñones de bancada con los muñones de biela. Los contrapesos, que son extensiones de los brazos, tienen la función de equilibrar las fuerzas de inercia generadas por el movimiento alternativo del pistón y la biela, reduciendo las vibraciones y las cargas sobre los cojinetes.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/14.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Bridas o pestañas:
            p.text-center en los extremos del cigüeñal, se encuentran bridas o pestañas para la fijación del volante de inercia en un extremo y la polea del cigüeñal en el otro.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/15.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Conductos internos de lubricación:
            p.text-center el cigüeñal tiene conductos perforados internamente para permitir el flujo de aceite a presión desde los muñones de bancada hacia los muñones de biela, lubricando así los cojinetes de biela y, a través de la biela, el pasador del pistón.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 16.
          span <em>Componentes, montaje del cigüeñal y codos de biela</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/16.png', alt='Se detalla los componentes del cigüeñal y codos de biela: Conducto de aceite al codo de biela Contrapeso Cara [cachete] Montaje para el engrane del cigüeñal Nariz del cigüeñal donde se monta la polea Apoyo del cigüeñal Muñones principales Contrapesos Conducto de aceite del codo de biela Brida de montaje de la rueda volante [flywheel] Nota: Antes de instalar un cigüeñal se requiere comprobar que los conductos de aceite se encuentren libres [limpios]; usar aire o equivalente para comprobar el recorrido.')
        figcaption Fuente: SENA, 2025

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title Esfuerzos soportados

    p.my-4.my-lg-5 El cigüeñal es uno de los componentes más solicitados del motor, soportando una combinación compleja de esfuerzos:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-8.col-sm-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/17.png', alt='Mujer mecánica')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Esfuerzos de torsión")
            p Generados por la fuerza de los gases de combustión actuando sobre los pistones y transmitida a través de las bielas, que hacen girar el cigüeñal.
          .row(titulo="Esfuerzos de flexión")
            p Causados por las fuerzas de los pistones y las fuerzas de inercia, que tienden a doblar el cigüeñal entre los puntos de apoyo (muñones de bancada).
          .row(titulo="Esfuerzos cortantes")
            p Presentes en las zonas de unión entre los brazos y los muñones.
          .row(titulo="Esfuerzos de fatiga")
            p Debido a la naturaleza cíclica de las cargas, el material del cigüeñal está sometido a esfuerzos de fatiga, lo que requiere alta resistencia para evitar fracturas.

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title Materiales y fabricación

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-6.col-sm-4.col-lg-2
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/18.png', alt='Los cigüeñales')
      .col-lg-9
        p.mb-4.mb-lg-0 Los cigüeñales se fabrican típicamente de acero forjado de alta resistencia o de fundición nodular (hierro fundido dúctil). El acero forjado ofrece mayor resistencia a la fatiga y se utiliza en motores de alto rendimiento. La fundición nodular es más económica y se emplea en la mayoría de los motores de producción.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 17.
          span <em>Cigüeñal fundido</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/19.png', alt='Cigüeñal fundido')
        figcaption Fuente: SENA, 2025    
    
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 18.
          span <em>Cigüeñal forjado</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/20.png', alt='Cigüeñal forjado')
        figcaption Fuente: SENA, 2025

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-10.col-xl-8.p-4.bg-img--3
        .row.justify-content-center.align-items-center
          .col-6.d-md-none.d-lg-block.col-lg-2.p-4
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/21.svg', alt='Ilustracion decorativa')
          .col-lg-10
            p.mb-0 Después del proceso de forja o fundición, el cigüeñal se somete a procesos de maquinado de precisión para dar forma a los muñones, brazos y contrapesos, y a tratamientos térmicos para mejorar sus propiedades mecánicas. Los muñones son pulidos para obtener una superficie muy lisa que minimice la fricción con los cojinetes.

    .fullwith-bg.fullwith-bg--3

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-md-7.col-lg-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/23.png", alt="Desgaste de lóbulos")
          .crd_hover_txt--body.p-4
            h3.text-center.mb-4.mt-xl-3.mb-xl-5 TIPOS DE MATERIALES UTILIZADOS
            h4 ACERO FORJADO
            p Ideal para motores a alto rendimiento. Alta resistencia a fatiga. Adecuado para cargas extremas.
            h4 FUNDICIÓN NODULAR (HIERRO DÚCTIL)
            p Opción más económica.
            p Adecuada para motores estándar por su buena resistencia y menor costo.

      .col-md-7.col-lg-5.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/24.png", alt="FABRICACION Y ACABADOS TECNICOS")
          .crd_hover_txt--body.p-4
            h3.text-center.mb-4.mt-xl-3.mb-xl-5 FABRICACION Y ACABADOS TECNICOS
            h5 MAQUINADO DE PRECISIÓN
            p Permite formar muñones, brazos y contrapesos con exactitud dimensional.
            h5 TRATAMIENTOS TÉRMICOS
            p Aumentan la resistencia mecánica del material.
            h5 PULIDO DE MUÑONES
            p Superficie muy lisa para reducir fricción con los cojinetes.


    h3(data-aos='zoom-in-right').mb-4
      span.motor-title Cojinetes de bancada

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.my-4.my-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los cojinetes de bancada son casquillos antifricción bipartidos similares a los de biela, pero de mayor tamaño, que se instalan entre los muñones de bancada del cigüeñal y los alojamientos correspondientes en el bloque y las tapas de bancada. Su función es soportar el peso y las cargas del cigüeñal, permitiendo su giro suave con mínima fricción bajo lubricación hidrodinámica. Se fabrican con materiales multicapa diseñados para soportar las altas cargas radiales y axiales (en el caso del cojinete de bancada axial o de empuje que controla el movimiento longitudinal del cigüeñal) y las condiciones extremas de temperatura y presión en el motor.

    .row.justify-content-center.align-items-center.z-2
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 19.
          span <em>Componentes y dimensiones de cojinetes principales del cigüeñal</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/26.png', alt='Se detalla los componentes y dimensiones de cojinetes principales del cigüeñal: montaje para el engrane del cigüeñal, conducto de aceite al codo de biela, contrapeso, codos de biela, nariz del cigüeñal donde se monta la polea, apoyo del cigüeñal, cara(cachete), muñones principales, contrapesos, conducto de aceite del codo de biela, brida de montaje de la rueda volante.')
        figcaption Fuente: SENA, 2025

    Separador

    #t_4_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.3	Lubricación del eje cigüeñal

    p.mb-4.mb-lg-5 La lubricación del cigüeñal es vital para su funcionamiento y durabilidad, ya que reduce la fricción y el desgaste en los muñones y cojinetes.

    h3(data-aos='zoom-in-right').mb-4.mb-lg-5
      span.motor-title Recorrido del aceite

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/temas/tema4/28.png", alt="Recorrido del aceite")
      .col-lg-8.p-4.p-lg-5.quote-gris.pe-lg-4
        .row.align-items-center
          .col-xl-10
            p.mb-0 El aceite a presión desde la bomba de aceite del motor es enviado a una galería principal de lubricación en el bloque motor. Desde esta galería, el aceite fluye hacia los alojamientos de los cojinetes de bancada. El cigüeñal tiene conductos internos que recogen el aceite de los cojinetes de bancada y lo dirigen hacia los muñones de biela, lubricando los cojinetes de biela. Desde los cojinetes de biela, el aceite puede continuar su recorrido por los conductos internos de las bielas para lubricar el pie de biela y el pasador del pistón.
          .col-2.d-none.d-xl-block
            figure
              img(data-aos="fade-up")(src="@/assets/curso/temas/tema4/29.svg", alt="Ilustacion de acompañamiento")

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 20.
          span <em>Ranura central del cojinete para distribución uniforme del lubricante</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/30.png', alt='Se muestra la ranura central del cojinete para distribución uniforme del lubricante: sistema original, block, cojinete std, perno fijación, canal lubricación, vena aceite, cojinete torneado, casquillo de cero, agujero perno fijación, agujero lubricación, block rectificado para casquillo, conjunto con reforma armado.')
        figcaption Fuente: SENA, 2025

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 21.
          span <em>Orificios para lubricación de cojinetes</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/31.jpg', alt='Orificios para lubricación de cojinetes')
        figcaption Fuente: SENA, 2025

    h3(data-aos='zoom-in-right').mb-4.mb-lg-5
      span.motor-title.motor-title--medium Importancia del claro de lubricación

    .row.justify-content-center.align-items-center.z-2
      .col-lg-8.p-4.p-lg-5.quote-gris.pe-lg-4.mb-4.mb-lg-0
        p.mb-0 El claro de lubricación es el pequeño espacio entre el muñón del cigüeñal (de bancada o de biela) y su respectivo cojinete. Este claro es fundamental para permitir la formación de la película de aceite lubricante cuando el cigüeñal está girando a velocidad suficiente (lubricación hidrodinámica). Una holgura de lubricación correcta asegura que haya suficiente espacio para que el aceite circule y mantenga separadas las superficies metálicas, minimizando el contacto y el desgaste. Un claro insuficiente puede impedir la formación de la película de aceite, llevando a desgaste excesivo y posible gripado. Un claro excesivo puede causar una caída en la presión de aceite, un control deficiente del mismo y ruidos anormales (golpeteo de cojinetes).
      .col-sm-8.col-lg-4
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/temas/tema4/32.png", alt="Recorrido del aceite")

    Separador

    #t_4_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.4	Transmisión de la fuerza del cigüeñal

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-10.p-4.p-lg-5.px-lg-4.bg-img--4
        .row.justify-content-center.align-items-center
          .col-6.d-md-none.d-lg-block.col-lg-2.p-4
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/33.svg', alt='Ilustracion decorativa')
          .col-lg-10
            p.mb-0 La fuerza generada por los pistones y convertida en movimiento rotativo por el cigüeñal se transmite desde el cigüeñal a otros componentes. En el extremo trasero del cigüeñal (generalmente hacia la transmisión) se monta el volante de inercia. En el extremo delantero (generalmente hacia el frontal del vehículo) se monta la polea del cigüeñal. El volante de inercia transmite el movimiento a la caja de cambios a través del embrague. La polea del cigüeñal, a través de correas, impulsa los accesorios del motor como el alternador, la bomba de agua, el compresor del aire acondicionado y la bomba de dirección asistida (si es hidráulica).

    .fullwith-bg.fullwith-bg--3

    .row.justify-content-center.align-items-center.z-2
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 22.
          span <em>Piñón del cigüeñal y conexión con ejes de levas</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/34.png', alt='Piñón del cigüeñal y conexión con ejes de levas')
        figcaption Fuente: SENA, 2025

    Separador

    #t_4_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.5 El volante de inercia

    p.mb-4.mb-lg-5 El volante de inercia es un disco pesado montado en el extremo del cigüeñal.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-3.mb-lg-0(src="@/assets/curso/temas/tema4/35.png", alt="Recorrido del aceite")
      .col-lg-8.p-4.p-lg-5.pb-lg-4.quote-gris
        h4 Función
        p.mb-0 La función principal del volante de inercia es almacenar energía cinética durante las carreras de potencia (cuando los pistones generan torque) y liberar esa energía durante las carreras no motorizadas (escape, admisión, compresión). Esto ayuda a suavizar las fluctuaciones de velocidad angular del cigüeñal, proporcionando un giro más uniforme y reduciendo las vibraciones inherentes al funcionamiento de un motor alternativo. También facilita el arranque del motor y sirve como superficie de fricción para el embrague, permitiendo la conexión y desconexión entre el motor y la transmisión. En su periferia, lleva una corona dentada con la que engrana el piñón del motor de arranque para poner en marcha el motor.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 23.
          span <em>Volante de inercia conectado al cigüeñal</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/36.png', alt='Volante de inercia conectado al cigüeñal')
        figcaption Fuente: SENA, 2025

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title Estructura y tipos

    p.mb-4.mb-lg-5 El volante de inercia es típicamente un disco pesado fabricado de fundición de hierro o acero. Su masa y diámetro están calculados para proporcionar la inercia necesaria según las características del motor. Existen principalmente dos tipos de volantes de inercia:

    .row.justify-content-evenly.align-items-center.z-2.mb-4.mb-lg-5.bg-f6.p-4
      .col-md-4.col-xl-3.d-none.d-lg-block
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema4/37.png', alt="Hombre mecánico")

      .col-lg-8
        .info-horizontal-card.p-4.mb-4
          img.info-card__img.d-none.d-md-block(src="@/assets/curso/temas/tema4/38.svg", alt="Ilustración decorativa")
          div
            h5 Volante monomasa:
            p es el diseño tradicional, un disco sólido y relativamente pesado.

        .info-horizontal-card.p-4
          img.info-card__img.d-none.d-md-block(src="@/assets/curso/temas/tema4/39.svg", alt="Ilustración decorativa")
          div
            h5 Volante bimasa <i>(Dual-Mass Flywheel - DMF)</i>:
            p es un diseño más moderno que consta de dos masas (primaria y secundaria) unidas por un sistema de muelles y amortiguadores internos. La masa primaria se une al cigüeñal y la masa secundaria a la transmisión. Este diseño es más complejo, pero ofrece una mayor capacidad para amortiguar las vibraciones torsionales del cigüeñal, proporcionando un funcionamiento más suave y confortable, especialmente a bajas revoluciones. Sin embargo, son más caros y propensos a fallas con el tiempo.

    .fullwith-bg.fullwith-bg--3

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 24.
          span <em>Volante de inercia con muelles amortiguadores</em>
        img(data-aos="fade-down")(src='@/assets/curso/temas/tema4/40.png', alt='Volante de inercia con muelles amortiguadores')
        figcaption Fuente: SENA, 2025

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
