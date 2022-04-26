<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diferenciar la violencia intrafamiliar de la violencia de género

    .bloque-texto-a.bloque1.color-acento-contenido.p-4.p-md-5.mb-5.col-md-10.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-5
            p(data-aos="zoom-in") Estimado aprendiz, a partir de este momento, usted podrá conocer las características principales que hacen parte de la violencia de género, teniendo en cuenta la diferenciación de esta con la violencia intrafamiliar, por lo cual se entregan claridades en la diferencia de ambos conceptos, así como ejemplos de los diversos tipos de violencia de género que se pueden presentar, para que pueda existir mayor claridad de todo el tema.
        .col-lg-4.mb-4.mb-lg-0

    p.mt-5(data-aos="fade-up") Para realizar la revisión del tema relacionado con violencia intrafamiliar, se dará claridad de los tipos de familias y de violencia, con el fin de entregar un concepto claro al respecto. En el siguiente recurso de aprendizaje, se presentan los tipos de familias:

    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Familia nuclear tradicional:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia está compuesta por el padre, la madre y los hijos. Este tipo de familia puede presentarse de manera completa o incompleta, es decir, se pueden presentar escenarios de separación, divorcio o fallecimiento del cónyuge.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/2.png', alt='')
      .row(titulo="Familia extensa:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia está compuesta por tres generaciones que pueden compartir dos escenarios básicos: vivienda y economía. Por lo general, puede acoger alguno de sus miembros con su grupo familiar secundario por temas de crisis o dificultades. Este tipo de familia puede darse por línea materna o paterna.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/3.png', alt='')
      .row(titulo="Familia monoparental:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia se origina de la ruptura o rompimiento del vínculo inicial, ya sea materna (madre con hijos) o paterna (padre con hijos).
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/4.png', alt='')
      .row(titulo="Familia superpuesta o recompuesta:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia está organizada por parejas que han tenido uniones previas y terminaron en ruptura. En este tipo de familia, cada cónyuge puede aportar los hijos de las uniones anteriores y los actuales (hijos del padre, hijos de la madre y los hijos de ambos). Puede darse por padre, madre o ambos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/5.png', alt='')
      .row(titulo="Familia pareja sin hijos:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia está conformada por los cónyuges, quienes por diversas razones determinan no tener hijos.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/6.png', alt='')
      .row(titulo="Unipersonal:")
        .col-md-6.mb-4.mb-md-0
          p En este tipo de familia, se encuentran aquellas personas que viven solos, ya sea por soltería, viudez o separación.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/7.png', alt='')
      .row(titulo="Familia nuclear con amantazgo:")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de familia se genera cuando uno de los cónyuges mantiene una relación permanente con otra persona. Se le denomina noviazgo o convivencia de conducta infiel.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/8.png', alt='')

    p.mt-5(data-aos="fade-up") Después de conocer los tipos de familia, se deben revisar los tipos de violencia que se pueden presentar en el contexto familiar, estos tipos de violencia son:

    SlyderA.mt-5.cont_slider1.p-3(tipo="b")
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Abuso verbal:
          p En este tipo de violencia, se presenta la utilización del lenguaje hablado con el objetivo de humillar, ridiculizar, amenazar o denigrar al otro miembro de la pareja.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/10.png', alt='')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Abuso emocional o psicológico:
          p En este tipo de violencia, se presenta una subvaloración o descalificación de la otra persona. Se convierte en un autoritarismo, es decir, la imposición de ideas o deseos. Este tipo de violencia puede acompañar o generar violencia física como una herramienta de control a través del miedo y la degradación. Se presenta intimidación en el trato, lo cual incluye la coacción utilizando a terceros. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/11.png', alt='')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Aislamiento:
          p Este tipo de violencia se realiza con el fin de controlar todos los aspectos de la vida de la otra persona, es decir, su tiempo, actividades y el contacto con los demás. Por lo general, en este tipo de violencia, a la persona no se le permite trabajar, recibir llamadas telefónicas o ver amigos o familiares. La persona debe estar fuera o desconectada del mundo exterior todo el tiempo. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/12.png', alt='')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Abuso económico:
          p En este tipo de violencia, la agresión se realiza cuando se controlan todos los aspectos relacionados con el acceso al dinero, al manejo y gasto de este.  
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/13.png', alt='')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Abuso sexual:
          p Este tipo de violencia se refiere a todas las conductas que atentan contra los derechos sexuales y reproductivos de una persona. Este tipo de violencia incluye acoso sexual, violación, actos sexuales realizados contra el otro miembro de la pareja.   
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/14.png', alt='')
      .row.p-5
        .col-md-6.mb-4.mb-md-0
          h4 Abuso físico:

          p Este tipo de violencia hace alusión a las conductas que atentan contra la integridad física del otro miembro de la pareja. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/15.png', alt='')

    .cajon.color-primario.p-4.mt-5.col-md-10.m-auto(style="background-color:#E7DBEA;")
      p(data-aos="fade-up") Es importante tener presente que la violencia psicológica es difícil de detectar, al contrario de la violencia física, no deja huellas visibles y el agredido tiene que luchar contra la palabra de la persona que realiza la agresión.
      p.mt-4(data-aos="fade-up") De acuerdo con las descripciones anteriormente realizadas, ya se puede entregar una definición respecto a lo que es la violencia intrafamiliar, que puede ser considerada como un problema de múltiples causas que están asociadas a factores como lo social, político, comunitario e individual.

    p.mt-5.text-center(data-aos="fade-up") En el siguiente cuadro, se van a exponer algunos factores que pueden influir en la violencia intrafamiliar:

    .row.p-5.mt-4(style="background: rgb(245,255,242);background: linear-gradient(90deg, rgba(245,255,242,1) 50%, rgba(255,241,229,1) 50%);")
      .col-md-3.mb-4
        h4(data-aos="fade-up" style="font-weight:900;") Factores individuales
        div(style="height: 100%;display: flex;align-items: center;")
          ul.lista-ul.mt-5
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#FF7600;")
              | Sexo
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#FF7600;")
              | Edad
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#FF7600;")
              | Factores biológicos
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#FF7600;")
              | Factores fisiológicos
      .col-md-6.mb-4.justify-content-center.m-auto.text-center
        img(src="@/assets/curso/temas/tema1/17.svg" data-aos="zoom-in-up" style="display:inline;")
      .col-md-3.mb-4
        h4(data-aos="fade-up" style="font-weight:900;") Factores socioeconómicos
        div(style="height: 100%;display: flex;align-items: center;")
          ul.lista-ul.mt-5
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#6DD54E;")
              | Condición laboral
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#6DD54E;")
              | Nivel de educación
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#6DD54E;")
              | Uso de sustancias psicoactivas
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#6DD54E;")
              | Uso de alcohol
            li.h5.mb-5(data-aos="fade-up")
              i.fas.fa-circle(style="color:#6DD54E;")
              | Haber sufrido o presenciado maltrato en la niñez

    p.mt-5(data-aos="fade-up") Es necesario entender que cada factor de riesgo puede incidir en que una persona se comporte de manera violenta o que sea objeto de violencia.

    .bloque-texto-a.bloque2.color-acento-contenido.p-4.p-md-5.mt-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.text-center.m-auto
          img(src="@/assets/curso/temas/tema1/18.svg" data-aos="zoom-in" style="max-width:230px;display:inline;")
        .col-lg-8
          .bloque-texto-a__texto.p-5.pb-4.pt-4
            p(data-aos="zoom-in") De acuerdo con las características descritas en los tipos de abuso, es importante decir que la violencia intrafamiliar se considera como el abuso de poder sobre los miembros más débiles de la familia. 
            p.mt-4.mb-0(data-aos="fade-up") Por lo regular, la violencia intrafamiliar afecta a los niños, niñas, ancianos, ancianas, personas en condición de discapacidad y la mujer, aunque es importante aclarar que los hombres también son violentados dentro del contexto familiar. 

    p.mt-5.mb-0(data-aos="fade-up") La #[strong violencia de género] está caracterizada por un clima violento mantenido en el tiempo, el cual se genera de forma continua por el agresor para obtener el control de la persona; hace referencia a todas aquellas agresiones que son realizadas contra cualquier persona o grupo de personas, teniendo en cuenta su sexo o género. 
    p(data-aos="fade-up") Como resultado de este tipo de violencia, se crea un impacto negativo en la identidad de la persona violentada; asimismo, en los aspectos social, psicológico, económico y físico. Por lo general, el ciclo de violencia de género se da de la siguiente manera:

    .col-md-7.mt-5.m-auto
      img(src="@/assets/curso/temas/tema1/19.svg" data-aos="zoom-in-up")

    .cajon.color-primario.p-4.mt-5.col-md-10.m-auto(style="background-color:#E7DBEA;")
      p(data-aos="fade-up") La violencia de género se da en contra de la mujer a causa de su sexo. Por lo general, las causas obedecen a estados de indefensión, desigualdad y poder; este tipo de violencia se establece en el marco de relaciones de poder que son fortalecidas en los medios, la literatura y diversas publicidades que hacen constante la relación de privilegiado - persona oprimida, conllevando el sometimiento y generando poder en la creencia que la mujer pertenece al hombre (posesión y violencia). 

    p.mt-5(data-aos="fade-up") Es importante tener presente que este tipo de violencia no necesariamente se da en un contexto de violencia física, ya que existen muchas formas de violencia, como son los gritos, las humillaciones y el acoso. 
    p.mt-4(data-aos="fade-up") A continuación, se darán algunos ejemplos de violencia de género para que la comprensión al respecto sea amplia. Esta es una propuesta del gobierno de España, en su Ministerio de Sanidad, Servicios Sociales e Igualdad, quienes recrearon 10 ejemplos de violencia de género, en el marco del uso de las herramientas digitales, los cuales se presentan a continuación:

    .row.mt-5
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#F0DACE;")
          p.text-center(data-aos="fade-up") Acosar o controlar a tu pareja #[br] usando el móvil
          img.mt-4(src="@/assets/curso/temas/tema1/20.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#E0CEF0;")
          p.text-center(data-aos="fade-up") Interferir en relaciones de tu pareja en Internet con otras personas
          img.mt-4(src="@/assets/curso/temas/tema1/21.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up")  Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#BCCEF2;")
          p.text-center(data-aos="fade-up") Espiar el móvil de #[br] tu pareja
          img.mt-4(src="@/assets/curso/temas/tema1/22.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#C6F4CC;")
          p.text-center(data-aos="fade-up") Censurar fotos que tu pareja publica y comparte en redes sociales
          img.mt-4(src="@/assets/curso/temas/tema1/23.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#F8D7B0;")
          p.text-center(data-aos="fade-up") Controlar lo que hace tu pareja en las redes sociales
          img.mt-4(src="@/assets/curso/temas/tema1/24.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#BCCEF2;")
          p.text-center(data-aos="fade-up") Exigir a tu pareja que demuestre dónde está con su geolocalización 
          img.mt-4(src="@/assets/curso/temas/tema1/25.png" data-aos="zoom-in-up" style="max-height:300px;height:200px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#C6E6F4;")
          p.text-center(data-aos="fade-up") Obligar a tu pareja a que te envíe imágenes íntimas
          img.mt-4(src="@/assets/curso/temas/tema1/26.png" data-aos="zoom-in-up" style="max-height:300px;height:230px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#C7D1EA;")
          p.text-center(data-aos="fade-up") Comprometer a tu pareja para que te facilite sus claves personales
          img.mt-4(src="@/assets/curso/temas/tema1/27.png" data-aos="zoom-in-up" style="max-height:300px;height:230px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#FFF1DD;")
          p.text-center(data-aos="fade-up") Obligar a tu pareja a que muestre un chat con otra persona
          img.mt-4(src="@/assets/curso/temas/tema1/28.png" data-aos="zoom-in-up" style="max-height:300px;height:230px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género
      .col-md-4.col-sm-6.mb-4.m-auto
        .p-4.pb-0(style="border-top-left-radius:30px;border-top-right-radius:30px;background-color:#EAE9E9;")
          p.text-center(data-aos="fade-up") Mostrar enfado por  no tener siempre una respuesta inmediata online
          img.mt-4(src="@/assets/curso/temas/tema1/29.png" data-aos="zoom-in-up" style="max-height:300px;height:300px;")
        .p-3(style="background-color:#F55D8B;")
          h4.mb-0.text-white.text-center(data-aos="fade-up") Es violencia de género

    p.mt-5(data-aos="fade-up") Para concluir la revisión del tema, es necesario establecer las diferencias elementales entre la violencia de género y la violencia intrafamiliar. Como se evidenció en las descripciones anteriores, la violencia intrafamiliar es aquella que se origina en la casa (el hogar) y puede ser ejecutada y sufrida por cualquiera de los miembros de la familia. Por el contrario, la violencia de género es la que se realiza en contra de la mujer “por el hecho de serlo”, tanto en el contexto del hogar como en el trabajo u otro escenario de la vida pública. La violencia de género tiene sus bases en la supuesta superioridad de un sexo sobre el otro, en este caso el masculino sobre el femenino, y puede presentar manifestaciones muy variadas, por ejemplo:

    .row.mt-5.m-auto.col-md-10
      .col-md-6(style="place-self:center;")
        ol.lista-ol--cuadro.lista-ol--separador
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span.span__image
            | Maltrato físico.
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span.span__image
            | Maltrato psicológico. 
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span.span__image
            | Agresión sexual. 
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span.span__image
            | Violación. 
          li(data-aos="fade-up") 
            .lista-ol--cuadro__vineta
              span.span__image
            | Publicidad (en este tipo de violencia de género, se suelen emitir imágenes de las mujeres que no corresponden con la realidad).

      .col-md-6(style="place-self:center;")
        img(src="@/assets/curso/temas/tema1/30.png" data-aos="fade-left")

      p.mt-4(data-aos="fade-up") La violencia de género puede generarse en el ámbito privado o público. En el siguiente recurso de aprendizaje, se describe cada uno:

    .row.mb-5.col-md-8.m-auto.mt-4
      .col-sm-12.col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.flip1(@mouseover="indicadorTarjetaFlip = false" style="background-color:#3B5DA8;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/32.png')})`}")
              h4.text-center.text-white(style="position:absolute;width:100%;bottom:0;") Ámbito privado
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#3B5DA8;")
              h4.text-center.text-white Ámbito privado
              p.text-white.text-center Es la que se da dentro de la familia o ámbito doméstico, o cualquier otra relación interpersonal, ya sea que el agresor comparta o haya compartido el mismo lugar de vivienda que la mujer. Puede incluir, entre otros, violación, maltrato y abuso sexual.
      .col-sm-12.col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario.flip2(@mouseover="indicadorTarjetaFlip = false" style="background-color:#C72A59;")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/33.png')})`}")
              h4.text-center.text-white(style="position:absolute;width:100%;bottom:0;") Ámbito público
            .tarjeta-flip__contenido.p-5.p-xl-5(style="background-color:#C72A59;")
              h4.text-center.text-white Ámbito público
              p.text-white.text-center Es la que se genera en la comunidad, es realizada por cualquier persona y comprende, entre otros, violación, abuso sexual, tortura, trata de personas, prostitución forzada, secuestro y acoso sexual en el lugar de trabajo, así como en instituciones educativas, establecimientos de salud o cualquier otro lugar. Una de las modalidades de violencia contra las mujeres en el país tiene expresión en el marco del conflicto armado interno. 



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
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
.bloque-texto-a.bloque1.color-acento-contenido:before
  background-color: #FFAF1E
  background-image: url(../assets/curso/temas/tema1/1.svg)
  background-size: contain
  background-repeat: no-repeat
  background-position: center
.bloque-texto-a.bloque1.color-acento-contenido
  background-color: #5C1171
.bloque-texto-a.bloque2.color-acento-contenido:before
  background-color: #5C1171
.bloque-texto-a.bloque2.color-acento-contenido
  background-color: #A12626
.acordion .tarjeta--azul
  background-color: #F3F2FE !important
.acordion .tarjeta--azul.acordion__activo
  background-image: url(../assets/curso/temas/tema1/9.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.cont_slider1
  border-radius: 20px
  background-image: url(../assets/curso/temas/tema1/16.png)
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #4B5CC9
  background-image: url(../assets/template/arrow.svg)
.slyder-a__bullets__item--active
  background-color: #F55D8B !important
  border-color: white
.slyder-a__bullets__item
  background-color: #4B5CC9
.lista-ol--cuadro__vineta
  background-image: url(../assets/curso/temas/tema1/31.svg)
  background-color: transparent
  background-repeat: no-repeat
  background-position: center
  background-size: 10px
.tarjeta-flip__img
  background-size: 50%
  background-position: center
  background-repeat: no-repeat
.tarjeta-flip.color-primario.flip1 .tarjeta-flip__img
  background-color: #3B5DA8
.tarjeta-flip.color-primario.flip2 .tarjeta-flip__img
  background-color: #C72A59
</style>
