<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Pasadores del pistón

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2
      .col-lg-9
        p.banner-text El pasador del pistón, también conocido como bulón, es un componente fundamental en el conjunto biela-pistón. Es el encargado de trasferir la fuerza que recibe la cabeza del pistón en el proceso de combustión a la biela.

    .row.justify-content-center.align-items-center.z-2.mt-4.mt-lg-5
      .col-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Pasador del pistón
        img(data-aos="fade-up")(src="@/assets/curso/temas/tema1/2.jpg", alt="Corte transversal de bloque con camisa seca")
        figcaption <strong>Fuente.</strong> SENA 2025
 
    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1.	Función y tipos

    p.mb-4.mb-lg-5 La función principal del pasador del pistón es articular la unión entre el pistón y el pie de biela, permitiendo el movimiento oscilante de la biela a medida que el pistón se desplaza linealmente dentro del cilindro. Existen principalmente tres tipos de montaje para los pasadores del pistón:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-8.col-sm-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/3.png', alt='Mujer mecánica')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Pasador fijo al pistón")
            p En este tipo, el pasador se fija firmemente a los alojamientos en el pistón, generalmente mediante un tornillo o un anillo elástico. La biela gira sobre el pasador.
          .row(titulo="Pasador fijo a la biela")
            p En este caso, el pasador se asegura al pie de biela, a menudo por interferencia o un tornillo. El pistón oscila sobre el pasador.
          .row(titulo="Pasador flotante")
            p Este es el tipo más común en motores modernos. El pasador no está fijo ni al pistón ni a la biela, sino que "flota" en ambos alojamientos. Se utilizan anillos de seguridad (circlips) en los extremos de los alojamientos del pistón para evitar que el pasador se desplace lateralmente y toque la pared del cilindro. Este diseño permite una mejor lubricación y distribución de la carga.

    .fullwith-bg.fullwith-bg--2

    .row.justify-content-center.align-items-center.z-2
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Tipos de pasadores según diseño del ojo de biela y esfuerzo de combustión
        img(src='@/assets/curso/temas/tema1/4.png', alt='Tipos de pasadores según diseño del ojo de biela')
        figcaption <strong>Fuente.</strong> SENA 2025

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2.	Materiales de construcción

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-5.mb-4.mb-lg-0
        figure
        img(src='@/assets/curso/temas/tema1/5.png', alt='Tipos de pasadores según diseño del ojo de biela')
      .col-lg-7
        p.mb-4.mb-lg-0 Los pasadores del pistón están sometidos a cargas elevadas y requieren materiales con alta resistencia a la fatiga y al desgaste. Comúnmente se fabrican de aceros de aleación de alta calidad, a menudo cementados o nitrurados superficialmente para aumentar su dureza y resistencia al desgaste en la zona de contacto con la biela y el pistón.
        
    Separador
        
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3.	Montaje y aseguramiento

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-9
        p.mb-4.mb-lg-0 El montaje del pasador varía según su tipo. Para pasadores fijos, se utilizan tornillos o anillos elásticos. En el caso de pasadores flotantes, el montaje es más sencillo, simplemente insertándolos en los alojamientos del pistón y el pie de biela. El aseguramiento en pasadores flotantes se realiza mediante la instalación de anillos de seguridad (circlips) en las ranuras de los alojamientos del pasador en el pistón. Es crucial que estos anillos queden correctamente alojados para evitar el movimiento axial del pasador.
      .col-6.col-lg-2
        figure
        img(src='@/assets/curso/temas/tema1/6.png', alt='Tipos de pasadores según diseño del ojo de biela')

    .fullwith-bg.fullwith-bg--3
    .row.justify-content-center.align-items-center.z-2
      .col-md-10.col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Tipos de seguros para pasadores
        img(src='@/assets/curso/temas/tema1/7.png', alt='Tipos de seguros para pasadores')
        figcaption <strong>Fuente.</strong> SENA 2025


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
