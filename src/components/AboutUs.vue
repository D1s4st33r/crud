<template>
  <b-container id="about">
      <b-row>
        <div class="letrero">
          <h2>Sobre Nosotros</h2>
          <p>Partes y Equipos de Refrigeración del Sureste S.A. de C.V., PERSSA, le da la más cordial bienvenida. El liderazgo en la venta de equipos de refrigeración y aire acondicionado es un logro que llena de orgullo a esta empresa que cuenta con personal comprometido, proveedores de calidad y clientes de primer nivel. PERSSA es hoy la opción número uno en refrigeración, aire acondicionado, gases refrigerantes DUPONT, refacciones, accesorios y herramientas especializadas en el ramo en todo el sureste Mexicano.</p>
        </div>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AboutUs',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#about {
  height: 100vh;
}
.letrero {
  padding: 10%;
}
.letrero p {
  margin-top: 5%;
}
</style>
