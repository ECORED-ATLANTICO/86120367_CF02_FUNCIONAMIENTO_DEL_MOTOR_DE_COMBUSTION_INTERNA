<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación del funcionamiento de pasadores, anillos y bielas lubricadas.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar el conocimiento sobre la función, tipos, materiales y procedimientos de montaje/lubricación de pasadores, anillos y bielas, así como su relación con el cigüeñal, para garantizar un diagnóstico y mantenimiento adecuados en motores de combustión interna.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es la función principal de los pasadores en un motor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transmitir energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fijar componentes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lubricar piezas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿De qué son responsables los anillos de pistón?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la potencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sellar la cámara de combustión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Acelerar el motor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el ruido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué sucede si un pasador se rompe?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El motor se apaga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumenta la velocidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se produce un fallo mecánico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se mejora la lubricación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Para qué están diseñados los anillos de compresión?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la velocidad del motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar las emisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener la presión dentro del cilindro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lubricar las bielas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el principal material utilizado para fabricar bielas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hierro fundido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aluminio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Acero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Plástico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Para qué es crucial el eje cigüeñal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar electricidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transformar el movimiento alternativo en rotacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la compresión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribuir combustible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿De qué manera los anillos de aceite cumplen su función?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sellar la combustión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regular el nivel de aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lubricar el cilindro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir el derrame de aceite.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la consecuencia de una mala lubricación del eje cigüeñal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora del rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desgaste prematuro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento de potencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Menos emisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué tipo de pasador se utiliza comúnmente en motores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasador de retención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasador de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pasador cilíndrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pasador de cabeza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Dónde se instalan los anillos de pistón?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La biela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cilindro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El cigüeñal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El filtro de aceite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué ocurre si los anillos de pistón están desgastados?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La biela.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se reduce el consumo de aceite.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se incrementan las emisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se mejora el sellado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función principal de la biela?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proteger el motor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir el movimiento de rotación en movimiento lineal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transmitir el movimiento del pistón al cigüeñal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Lubricar el cigüeñal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes componentes está directamente relacionado con el eje cigüeñal?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Válvulas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pistones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bujías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué tipo de lubricante se utiliza en el motor?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aceite.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Refrigerante.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es el efecto de un pasador mal instalado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mejora el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Causa fallos mecánicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumenta la durabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la fricción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿A qué ayuda la correcta lubricación del eje cigüeñal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar sobrecalentamiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar el peso del motor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el tamaño del motor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la complejidad del sistema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué se debe hacer si se detecta un desgaste en los anillos de pistón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorarlo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituirlos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajustarlos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Limpiarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Con qué conecta la biela al pistón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La culata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El eje cigüeñal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El sistema de escape.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El sistema de inyección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Para qué se realiza la calibración de los pasadores?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar su tamaño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ajustar su posición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar el rendimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el peso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Para qué es crucial la correcta alineación del eje cigüeñal?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la velocidad máxima.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener la estabilidad del motor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la economía de combustible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el ruido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
