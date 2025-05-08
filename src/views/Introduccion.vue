<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4.mb-xl-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El componente formativo “Pasadores, anillos y bielas lubricadas” explora la dinámica del conjunto móvil del motor de combustión interna, compuesto por elementos fundamentales que permiten la transformación de la energía térmica en energía mecánica. Centrándose en la función, construcción, tipos, esfuerzos y el sistema de lubricación de los pasadores, anillos, bielas y eje cigüeñal. Este contenido brinda una comprensión integral de su importancia en el rendimiento del motor. Comprender estos elementos es clave para identificar desgastes, aplicar correctos procedimientos de montaje y realizar mantenimientos que garanticen la eficiencia mecánica. A lo largo de este material, el aprendiz conocerá las características técnicas, condiciones de operación y aspectos prácticos asociados a estos componentes, desarrollando competencias esenciales para su análisis y diagnóstico en contextos reales de formación y desempeño profesional.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rcPKFCRUYVg" title="Pasadores, anillos y bielas lubricadas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
