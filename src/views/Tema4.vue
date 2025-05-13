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
        p.banner-text El eje cigüeñal es el componente central del motor que convierte el movimiento lineal alternativo de los pistones en movimiento rotativo.

    .row.justify-content-center.align-items-center.z-2.mt-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 11.
          span Ubicación del cigüeñal
        img(src='@/assets/curso/temas/tema4/2.png', alt='Ubicación del cigüeñal')
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

    #t_4_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.1.	Alojamiento del cigüeñal en el bloque

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-6.col-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/3.svg', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-9
        p.mb-4.mb-lg-0 El montaje del pasador varía según su tipo. Para pasadores fijos, se utilizan tornillos o anillos elásticos. En el caso de pasadores flotantes, el montaje es más sencillo, simplemente insertándolos en los alojamientos del pistón y el pie de biela. El aseguramiento en pasadores flotantes se realiza mediante la instalación de anillos de seguridad (circlips) en las ranuras de los alojamientos del pasador en el pistón. Es crucial que estos anillos queden correctamente alojados para evitar el movimiento axial del pasador.

    .fullwith-bg.fullwith-bg--1
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 12.
          span Cojinetes del cigüeñal
        img(src='@/assets/curso/temas/tema4/4.png', alt='Cojinetes del cigüeñal')
        figcaption <strong>Fuente.</strong> SENA 2025

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 13.
          span Alineación codos del cigüeñal
        img(src='@/assets/curso/temas/tema4/5.png', alt='Alineación codos del cigüeñal')
        figcaption <strong>Fuente.</strong> SENA 2025

    h3(data-aos='zoom-in-right').mb-4
      span.motor-title.motor-title--large Verificación y comprobación del alojamiento

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.mb-4.mb-lg-0
        figure
        img(src='@/assets/curso/temas/tema4/6.png', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-8
        p.mb-4.mb-lg-0 La verificación del alojamiento del cigüeñal en el bloque implica la comprobación de su alineación, redondez y diámetro. Se utilizan herramientas de precisión como micrómetros de interiores y galgas para medir los diámetros de los alojamientos con y sin los cojinetes instalados. Se verifica que no haya deformaciones (ovalización o conicidad) y que los diámetros estén dentro de las tolerancias especificadas por el fabricante. Si se detectan irregularidades, puede ser necesario rectificar los alojamientos o incluso reemplazarlos si el daño es severo. La correcta verificación asegura que el cigüeñal girará libremente y que la película de lubricante hidrodinámico se formará adecuadamente.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 14.
          span Verificación de alineación del cigüeñal con palpador micrométrico
        img(src='@/assets/curso/temas/tema4/7.png', alt='Alineación codos del cigüeñal')
        figcaption <strong>Fuente.</strong> SENA 2025

    .fullwith-bg.fullwith-bg--1
    #t_4_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 4.2.	El Eje Cigüeñal
      
    p.mb-4.mb-lg-5 El eje cigüeñal, también conocido como árbol de manivelas, es la columna vertebral giratoria del motor.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 15.
          span Función del cigüeñal en la transmisión de fuerza del motor
        img(src='@/assets/curso/temas/tema4/8.png', alt='Función del cigüeñal en la transmisión de fuerza del motor')
        figcaption <strong>Fuente.</strong> SENA 2025

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
          img(src='@/assets/curso/temas/tema4/10.png', alt='Mecánico')

      .col-xl-8
        SlyderF(columnas="col-sm-6 col-xl-6")
          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema4/11.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Muñones de bancada:
            p.text-center son las superficies cilíndricas sobre las que el cigüeñal gira apoyado en los cojinetes de bancada en el bloque motor.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema4/12.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Muñones de biela:
            p.text-center son las superficies cilíndricas excéntricas con respecto al eje de giro del cigüeñal a las que se conectan las cabezas de biela.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema4/13.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Brazos o contrapesos:
            p.text-center conectan los muñones de bancada con los muñones de biela. Los contrapesos, que son extensiones de los brazos, tienen la función de equilibrar las fuerzas de inercia generadas por el movimiento alternativo del pistón y la biela, reduciendo las vibraciones y las cargas sobre los cojinetes.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema4/14.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Bridas o pestañas:
            p.text-center en los extremos del cigüeñal, se encuentran bridas o pestañas para la fijación del volante de inercia en un extremo y la polea del cigüeñal en el otro.

          .tarjeta.color-primario-p10.p-4.px-lg-5
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/tema4/15.svg' alt='Ilustracion de acompañamiento')
            h5.text-center.mb-4 Conductos internos de lubricación:
            p.text-center el cigüeñal tiene conductos perforados internamente para permitir el flujo de aceite a presión desde los muñones de bancada hacia los muñones de biela, lubricando así los cojinetes de biela y, a través de la biela, el pasador del pistón.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 16.
          span Componentes, montaje del cigüeñal y codos de biela
        img(src='@/assets/curso/temas/tema4/16.png', alt='Función del cigüeñal en la transmisión de fuerza del motor')
        figcaption <strong>Fuente.</strong> SENA 2025
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
