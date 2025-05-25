<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una visión general del componente formativo “Pasadores, anillos y bielas lubricadas”. En este módulo se ofrece un análisis profundo de la estructura y funcionamiento del conjunto móvil del motor, abarcando desde la función de los pasadores, anillos y bielas, hasta la dinámica de lubricación del cigüeñal y el volante de inercia. Se examinan detalladamente los tipos de anillos, sus materiales y funciones, así como el diseño, esfuerzos y montaje de las bielas. Además, se exploran los procesos de lubricación, que incluyen la inyección de aceite al buje de biela y pasador, garantizando la protección y el correcto deslizamiento de las piezas. El componente también aborda el análisis de los cojinetes y el flujo de lubricante en los puntos de fricción críticos. Este análisis integral, que combina fundamentos teóricos y procedimientos prácticos, está orientado a garantizar el rendimiento, la durabilidad y la eficiencia del motor, promoviendo el mantenimiento preventivo y la precisión en el ensamblaje de sus componentes.
    .row.justify-content-center
      .mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Pasadores, anillos y bielas lubricadas” ofrece una aproximación integral a la comprensión de los elementos clave del conjunto móvil del motor. A lo largo del curso se estudian desde la función de los pasadores y tipos de anillos del pistón, pasando por el diseño estructural de la biela y sus esfuerzos mecánicos, hasta la dinámica de lubricación del eje cigüeñal y el volante de inercia. El contenido profundiza en los materiales, técnicas de ensamblaje y mecanismos de deslizamiento, esenciales para garantizar la eficiencia y durabilidad del motor. Se enfatiza la importancia de cada componente en la transformación de la energía térmica en movimiento mecánico continuo y balanceado. Se sugiere elaborar un mapa mental que sintetice estos aspectos, evidenciando la relación entre la estructura interna del motor y los procesos de lubricación, montaje y transferencia de fuerza, lo cual facilita una visión práctica y técnica del funcionamiento y mantenimiento del sistema motriz.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
