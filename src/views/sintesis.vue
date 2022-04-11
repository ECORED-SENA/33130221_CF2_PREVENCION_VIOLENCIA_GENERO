<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cont_image_sintesis

    p(data-aos="fade-up") A continuación, se presenta el diagrama que representa el resumen de las temáticas que están desarrolladas en el componente formativo:
    br
    br
    h4.mt-5.text-center Mapa conceptual
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")

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
<style lang="sass">
.cont_image_sintesis
  background-image: url(../assets/curso/fondo_sintesis.png)
</style>
