<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Anillos del pistón

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-10
        p.banner-text Los anillos del pistón, también conocidos como segmentos, son aros elásticos que se alojan en ranuras en la periferia del pistón.

    Separador

    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1	Funciones principales
    
    p.mb-4.mb-lg-5 Los anillos del pistón cumplen varias funciones críticas para el correcto funcionamiento del motor:

    .fullwith-bg.fullwith-bg--2

    .row.justify-content-center.align-items-stretch.z-2.mb-4.mb-lg-5
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Sellado de la cámara de combustión
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/2.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Impiden la fuga de gases de la combustión hacia el cárter, manteniendo la presión y maximizando la potencia.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Control del aceite
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/3.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Regulan la cantidad de aceite que llega a la pared del cilindro, evitando que un exceso de aceite entre en la cámara de combustión (lo que causaría humo y depósitos de carbón) y asegurando que haya suficiente lubricación.
      .col-sm-6.col-xl-4.mb-4
        .bicolor-card
          .bicolor-card__header
            .bicolor-card__title
              h5.mb-0 Transferencia de calor
          .bicolor-card__content
            .bicolor-card__img
              figure
                img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4.svg', alt='Ilustración decorativa')
            .bicolor-card__text
              p.mb-0 Ayudan a disipar el calor generado en la cabeza del pistón hacia la pared del cilindro y, finalmente, al sistema de refrigeración del motor.

    .row.justify-content-center.align-items-center.z-2
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span <em>Función de los anillos</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/5.png', alt='Se detalla en la función de los anillos: anillos de compresión, anillos de aceite y elemento eléctrico.')
        figcaption Fuente: SENA, 2025

    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2	Tipos de anillos

    p.mb-4.mb-lg-5 Típicamente, un pistón utiliza un conjunto de anillos, cada uno con una función específica:

    .row.justify-content-evenly.align-items-center.z-2.mb-4.mb-lg-5.bg-f6.p-4
      .col-md-4.col-xl-3.d-none.d-lg-block
        figure
          img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/6.png', alt="Hombre mecánico")

      .col-lg-8.col-xl-7
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .info-card.p-4
              img.info-card__img.mb-4(src="@/assets/curso/temas/tema2/7.svg", alt="Ilustración decorativa")
              h5.titulo-quinto Anillos de compresión:
              p suelen ser los dos anillos superiores. Están diseñados para sellar la cámara de combustión y soportar la presión de los gases. El anillo superior (primer anillo) es el que está expuesto a mayores temperaturas y presiones.

          .col-md-6
            .info-card.p-4
              img.info-card__img.mb-4(src="@/assets/curso/temas/tema2/8.svg", alt="Ilustración decorativa")
              h5.titulo-quinto Anillo de aceite:
              p generalmente es el anillo inferior. Su función es raspar el exceso de aceite de las paredes del cilindro durante la carrera descendente del pistón y retornarlo al cárter a través de orificios en el pistón. Suelen tener un diseño más complejo con ranuras y orificios para facilitar el drenaje del aceite.

    .row.justify-content-center.align-items-center.z-2
      .col-md-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span <em>Tipos de anillos.</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/9.png', alt='Tipos de anillos')
        figcaption Fuente: SENA, 2025

    Separador

    #t_2_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.3	Materiales y características

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-5.mb-4.mb-lg-0
        figure
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/10.png', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-7
        p.mb-4.mb-lg-0 Los anillos del pistón se fabrican comúnmente de fundición de hierro de alta calidad, a menudo aleada con cromo, molibdeno o vanadio para mejorar sus propiedades de resistencia al desgaste y a la temperatura. La superficie de los anillos de compresión puede tener recubrimientos de cromo, nitruro de titanio o PVD (<em>Physical Vapor Deposition</em>) para reducir la fricción y aumentar la durabilidad. Los anillos de aceite pueden estar compuestos por varias piezas (dos aros rascadores y un expansor) para mejorar su capacidad de control de aceite.

    .fullwith-bg.fullwith-bg--curve

    .row.justify-content-center.mb-4.mb-lg-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0.py-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido
              h4.tarjeta-slide__title MATERIALES Y ALEACIONES
              h5 FUNDICIÓN DE HIERRO DE ALTA CALIDAD
              p Base común para todos los anillos, por su resistencia estructural.
              h5 ALEACIONES ESPECIALES
              p Cromo, molibdeno o vanadio, que aumentan la resistencia al desgaste, temperatura y fatiga térmica.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/11.svg')})`}")

      .col-sm-6.col-xl-4.mb-4.mb-xl-0.py-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/12.svg')})`}")
            .tarjeta-slide__contenido
              h4.tarjeta-slide__title RECUBRIMIENTOS Y DISEÑO FUNCIONAL
              h5 RECUBRIMIENTOS PARA ANILLOS DE COMPRESIÓN
              p Cromo.<br>Nitruro de titanio (<em>TiN</em>).<br>PVD (<em>Physical Vapor Deposition</em>).
              h5 DISEÑO DE LOS ANILLOS DE ACEITE
              p Dos aros rascadores.<br>Un expansor central metálico.

      Separador

      #t_2_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.4	Instalación y comprobación

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-5.mb-4.mb-lg-0
        figure
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/13.png', alt='Instalación de los anillos en pistón')
      .col-lg-7
        p.mb-4.mb-lg-0 La instalación de los anillos requiere herramientas adecuadas para expandirlos lo justo y necesario para deslizarlos sobre el pistón sin deformarlos ni romperlos. Es fundamental orientar correctamente los anillos, siguiendo las marcas o indicaciones del fabricante, ya que algunos anillos tienen un diseño cónico o asimétrico. Antes de instalar los anillos en el pistón, se debe verificar la holgura entre los extremos del anillo (luz entre puntas) dentro del cilindro, utilizando una galga de espesores. También se debe verificar la holgura axial (entre el anillo y la ranura del pistón) y la holgura radial. Estas holguras son críticas para asegurar un correcto sellado y control del aceite.

      .fullwith-bg.fullwith-bg--1
      
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span <em>Diseño de unión térmica para anillos de combustión</em>
        img(data-aos="fade-up")(src='@/assets/curso/temas/tema2/14.png', alt='Se detalla en la figura el diseño de unión térmica para anillos de combustión: ancho del anillo, profundidad del anillo, unión diagonal, unión en grada, unión frontal, tolerancia superior, tolerancia posterior, distancia entre puntas.')
        figcaption Fuente: SENA, 2025

    .row.justify-content-center.align-items-center.z-2
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 7.
          span <em>Ubicación de los anillos</em>
        img(data-aos="fade-down")(src='@/assets/curso/temas/tema2/15.png', alt='Ubicación de los anillos se detalla así: anillo superior del separador de aceite, frente del motor, segundo anillo de compresión y expansor de aceite, primer anillo de compresión de aceite, pistón, anillo inferior del separador de aceite.')
        figcaption Fuente: SENA, 2025

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
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
