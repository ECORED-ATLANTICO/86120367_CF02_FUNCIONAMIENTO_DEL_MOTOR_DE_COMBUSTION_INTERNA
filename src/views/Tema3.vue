<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La biela

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-md-8.col-xl-6
        p.banner-text.text-center La biela es un componente que conecta el pistón con el cigüeñal.

    Separador

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Función y esfuerzos soportados

    p.mb-4.mb-lg-5 La función principal de la biela es transmitir la fuerza generada por la expansión de los gases en la cámara de combustión desde el pistón al cigüeñal, convirtiendo el movimiento lineal alternativo del pistón en movimiento rotativo del cigüeñal. La biela está sometida a esfuerzos cíclicos extremadamente elevados, incluyendo:

    .row.justify-content-center.align-items-stretch.z-2.custom-cards.mt-5
      .col-md-6.col-xl-3.mb-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--1
          h5.mt-5.mb-4 Esfuerzos de compresión
          p.mb-0.mb-4 Durante la carrera de potencia, la biela soporta la fuerza descendente del pistón debido a la presión de los gases.
      .col-md-6.col-xl-3.mb-5
        .custom-cards__cards.bg-primario-20.custom-cards__cards--2
          h5.mt-5.mb-4 Esfuerzos de tracción
          p.mb-0.mb-4 Durante la carrera de escape y admisión, la biela soporta la fuerza de inercia del pistón y los anillos cuando cambian de dirección en los puntos muertos.
      .col-md-6.col-xl-3.mb-5.mb-sm-0.mb-md-0.mb-xl-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--3
          h5.mt-5.mb-4 Esfuerzos de flexión
          p.mb-0.mb-4 Estos ocurren debido a la excentricidad entre el eje del pistón y el muñón de biela del cigüeñal durante el ciclo.
      .col-md-6.col-xl-3.mb-sm-5.mb-md-0.mb-xl-5
        .custom-cards__cards.bg-acento-botones-20.custom-cards__cards--4
          h5.mt-5.mb-4 Esfuerzos de pandeo
          p.mb-0.mb-4 Durante la compresión, existe la posibilidad de que la biela se pandee, aunque su diseño busca minimizar esto.

    Separador

    .fullwith-bg.fullwith-bg--1

    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2	Partes de la biela

    p.mb-4.mb-lg-5.z-2 La biela consta de las siguientes partes principales:

    .row.align-items-center.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.tarjeta--primario-p5.p-4(titulo="Pie de biela")
            h4 Pie de biela
            p Es el extremo más pequeño de la biela y se conecta al pasador del pistón. Suele tener un buje o cojinete para el movimiento oscilante con el pasador.
          .tarjeta.tarjeta--primario-p5.p-4(titulo="Cuerpo de biela")
            h4 Cuerpo de biela
            p Es la parte central de la biela, con una sección transversal que varía según el diseño y los esfuerzos a soportar (comúnmente en forma de doble T o H).
          .tarjeta.tarjeta--primario-p5.p-4(titulo="Cabeza de biela")
            h4 Cabeza de biela
            p Es el extremo más grande de la biela y se conecta al muñón de biela del cigüeñal. La cabeza de biela es bipartida, dividida en dos mitades: la biela propiamente dicha y el sombrerete de biela. Estas dos partes se unen mediante tornillos o espárragos de alta resistencia.

      .col-8.col-lg-4
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema3/6.png" alt="Imagen de una biela de motor")

    .row.justify-content-center.align-items-center.z-2
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 8.
          span Componentes del pasador de pistón: cojinete y orificios
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/7.png', alt='Componentes del pasador de pistón: pasador o bulón del pistón, orificio interno en el brazo, orificio en cojinete, cojinete.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3	Materiales de construcción

    .row.justify-content-center.align-items-center
      .col-xl-8.p-4.p-lg-5.ps-lg-4.bg-img--1
        .row.justify-content-center.align-items-center
          .col-4.col-md-2.p-0
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/8.svg', alt='Ilustracion decorativa')
          .col-md-10
            p.mb-0 Las bielas se fabrican principalmente de acero forjado debido a su alta resistencia y capacidad para soportar cargas dinámicas. El proceso de forjado alinea la estructura granular del material, aumentando su resistencia a la fatiga. En algunos motores de alto rendimiento, se utilizan bielas de aluminio forjado para reducir el peso de las masas alternativas, o incluso materiales más exóticos como el titanio.
          
    Separador

    #t_3_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.4	Diseño y tipos

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-10
        p.mb-4.mb-lg-0 El diseño de la biela busca optimizar la relación entre resistencia y peso. La sección transversal del cuerpo de biela es crucial para resistir los esfuerzos de flexión y pandeo. Los perfiles más comunes son en forma de doble T (<em>I-beam</em>) o H (<em>H-beam</em>), siendo este último generalmente más ligero y rígido para un peso dado. Los tipos de biela se diferencian principalmente por su material y proceso de fabricación (forjadas, sinterizadas, entre otras.) y por el diseño de su cabeza (por ejemplo, bielas fracturadas, donde la cabeza se rompe intencionadamente después de la fabricación para asegurar un ajuste perfecto al volver a ensamblar).
      .col-6.col-md-4.col-lg-2
        figure
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/9.svg', alt='Ilustración motor')

    .row.justify-content-center
     .col-lg-10
      .titulo-sexto.color-acento-contenido.mb-4.z-2
        h5 Tabla 1.
        span Comparativa entre bielas <em>I-Beam</em> y <em>H-Beam</em>

      .tabla-a.color-acento-contenido.z-2
        table
          caption Fuente: SENA, 2025.
          thead
            tr(style="background-color: #F2D6D3;")
              th Tipo de biela
              th Forma
              th Carga que soporta mejor
              th Peso
              th Uso recomendado
          tbody
            tr(style="background-color: #FFFFFF;")
              td <em>H-Beam</em>
              td H
              td Alta carga lateral y torsión
              td Mayor
              td Motores potentes
            tr(style="background-color: #FFFFFF;")
              td <em>I-Beam</em>
              td I
              td Carga axial (vertical)
              td Menor
              td Motores estándar

    Separador

    #t_3_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.5	Cojinetes de biela

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-5.mb-4.mb-lg-0
        figure
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/10.png', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-7
        p.mb-4.mb-lg-0 Los cojinetes de biela son casquillos antifricción bipartidos que se instalan entre la cabeza de biela y el muñón de biela del cigüeñal. Su función es permitir el giro suave del cigüeñal dentro de la cabeza de biela con una mínima fricción, soportando las elevadas cargas transmitidas por la biela. Estos cojinetes son cojinetes de deslizamiento que operan bajo lubricación hidrodinámica, donde una película de aceite a presión separa completamente las superficies metálicas en movimiento. Se fabrican con materiales compuestos multicapa, típicamente con un soporte de acero, una capa intermedia de bronce o aluminio, y una capa superficial de <em>Babbitt</em> (una aleación de plomo, estaño y otros metales) o polímeros, optimizadas para soportar altas cargas y temperaturas, y resistir el desgaste y la corrosión.

    .row.justify-content-center.align-items-center.z-2
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 9.
          span Cojinete de la biela
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/11.png', alt='Se muestra en la figura el cojinete de la biela.')
        figcaption <strong>Fuente:</strong> SENA, 2025.

    Separador

    #t_3_6(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.6	Lubricación del pie de biela

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-xl-10.p-4.bg-img--2
        .row.justify-content-center.align-items-center
          .col-6.d-md-none.d-lg-block.col-lg-2.p-4
            figure
              img(data-aos="fade-up")(src='@/assets/curso/temas/tema3/12.svg', alt='Cojinete de la biela')
          .col-lg-10
            p.mb-0 La lubricación del pie de biela y el pasador del pistón es esencial para reducir la fricción y el desgaste en esta articulación oscilante. En la mayoría de los motores, la lubricación llega al pie de biela a través de un conducto perforado a lo largo del cuerpo de la biela, desde la cabeza de biela que recibe aceite a presión desde el cigüeñal. El aceite fluye desde el muñón de biela del cigüeñal hacia el interior de la biela y sale por pequeños orificios en el pie de biela para lubricar el pasador y sus alojamientos en el pistón.

    .fullwith-bg.fullwith-bg--3
    .row.justify-content-center.align-items-center.z-2
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 10.
          span Orificio de lubricación en la cabeza de biela dirigido al pistón
        img(data-aos="fade-down")(src='@/assets/curso/temas/tema3/14.png', alt='En el orificio de lubricación en la cabeza de biela dirigido al pistón, se muestra el aceite inyectado, el orificio del inyector de aceite, orificio del cojinete, orificio del codo del cigüeñal.')
        figcaption <strong>Fuente:</strong> SENA, 2025.


</template>

<script>
export default {
  name: 'Tema3',
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
