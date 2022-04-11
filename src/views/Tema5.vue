<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Concepto de prevención

    .bloque-texto-a.bloque_5_1.color-acento-contenido.p-4.p-md-5.col-md-10.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="zoom-in") La prevención existe como un proceso activo en el que se debe tener en cuenta tanto el contexto como la percepción social, siendo un proceso continuo, que se desarrolla y tiene sus efectos a mediano y largo plazo. 
            p.mt-4(data-aos="zoom-in") En el marco de la prevención, se pueden encontrar diversos niveles, los cuales serán descritos a continuación. 
        .col-lg-4.mb-4.mb-lg-0

    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="5.1 Universal")
        .col-md-6.mb-4.mb-md-0
          p La prevención universal es aquella que puede dirigirse a toda la población, sin distinción, beneficiándose a todos por igual; se realiza bajo una perspectiva amplia, con menor intensidad, lo que repercute en menos costos; para el caso del presente componente, está dirigido para todas las mujeres.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/2.png', alt='')
      .row(titulo="5.2 Selectiva")
        .col-md-6.mb-4.mb-md-0
          p La prevención selectiva es la que se dirige a un subgrupo de personas que presentan un riesgo en particular; para el caso del presente componente, este tipo de prevención va dirigido a los grupos de mujeres que están en riesgo de presentar un evento de violencia de género.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/3.png', alt='')
      .row(titulo="5.3 Indicada")
        .col-md-6.mb-4.mb-md-0
          p La prevención indicada es aquella que va dirigida a un subgrupo concreto de la comunidad, es decir, a personas con alto riesgo; en este sentido, este tipo de prevención está dirigida a mujeres que han sufrido violencia de género.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/4.png', alt='')
      .row(titulo="5.4 Temprana")
        .col-md-6.mb-4.mb-md-0
          p El tipo de prevención temprana está orientado a identificar las causas que generan las diversas condiciones que ponen en riesgo a las poblaciones, por ejemplo, las violaciones de los derechos humanos y/o las infracciones al DIH (Derecho Internacional Humanitario), y a adoptar medidas para evitar su ocurrencia; estas medidas de prevención temprana buscan promover el respeto, la protección y la garantía de los Derechos Humanos de todas las personas, grupos y comunidades.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/5.png', alt='')
      .row(titulo="5.5 Urgente")
        .col-md-6.mb-4.mb-md-0
          p La prevención urgente sugiere la adopción de acciones, planes y programas orientados a reducir o mitigar los daños generados en las personas que enfrentan especial condición de victimización por la inminente violación de los derechos humanos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/6.png', alt='')
      .row(titulo="5.6 Garantía de no repetición")
        .col-md-6.mb-4.mb-md-0
          p La garantía de no repetición se genera a través del Estado, quien implementa medidas que hacen que la sociedad se comprometa para que las violaciones a los Derechos Humanos e infracciones al Derecho Internacional Humanitario nunca vuelvan a ocurrir; esta garantía de no repetición es un componente esencial en el marco de la reparación integral.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema5/7.png', alt='')

   


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    indicadorTarjetaSlide: true,
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
<style lang="sass">
.bloque-texto-a.bloque_5_1.color-acento-contenido:before
  background-color: #5C1171
  background-image: url(../assets/curso/temas/tema5/1.svg)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.bloque-texto-a.bloque_5_1.color-acento-contenido
  background-color: #5C1171
.acordion .tarjeta--azul
  background-color: #F3F2FE !important
.acordion .tarjeta--azul.acordion__activo
  background-image: url(../assets/curso/temas/tema1/9.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
