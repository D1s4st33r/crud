<template>
  <b-container class="servicios">
    <div>
      <b-row>
        <b-col>
          <div class="titulo">
            <h2>
              <b>Productos y Servicios</b>
            </h2>
          </div>
        </b-col>
      </b-row>

      <b-row no-gutters>
        <b-col>
          <div class="media">
            <div class="media-body">
              <h5>
                <b>AIRE ACONDICIONADO</b>
              </h5>
              <ul>
                <li>- Ventana</li>
                <li>- Minisplit</li>
                <li>- Multisplit</li>
                <li>- Piso / techo y cassette</li>
                <li>- Fan &amp; coil</li>
                <li>- Paquete</li>
                <li>- Divididos</li>
                <li>- Chillers</li>
                <li>- Recuperadores de Energía</li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="media">
            <div class="media-body">
              <h5>
                <b>REFRIGERACIÓN</b>
              </h5>
              <ul>
                <li>- Unidades condensadoras</li>
                <li>- Evaporadores</li>
                <li>- Paneles y puertas</li>
                <li>- Aislamiento de poliuretano</li>
                <li>- Refacciones y accesorios</li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="media">
            <div class="media-body">
              <h5>
                <b>VENTILACIÓN</b>
              </h5>
              <ul>
                <li>- Línea comercial</li>
                <li>- Línea hábitat</li>
                <li>- Línea industrial</li>
              </ul>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="media">
            <div class="media-body">
              <h5>
                <b>REFACCIONES, GASES Y ACCESORIOS</b>
              </h5>
              <ul>
                <li>- Compresores</li>
                <li>- Controles de precisión</li>
                <li>- Bandas y poleas</li>
                <li>- Termostatos</li>
                <li>- Motores</li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
      </div>
      <!-- end .row -->
  </b-container>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.servicios {
  height: 100vh;
}
.titulo {
  margin-top: 3%;
  text-align: center;
}
.media {
  margin-top: 20%;
}
.media ul {
  margin-top: 15%;
  list-style: none;
  padding: 0;
}
</style>
