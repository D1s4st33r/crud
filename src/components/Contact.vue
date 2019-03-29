<template>
  <b-container id="contact">
      <b-row>
        <div class="letrero">
          <h2>Contáctenos</h2>
          <p>Si está interesado en alguno de nuestros productos, servicios o accesorios llene por favor los siguientes campos. A la brevedad nos comunicaremos con usted. Gracias.</p>
        </div>

        <div class="formulario">
          <div class="contact-form clearfix">
            <form action="contacto.php" method="post">
              <div class="input-field">
                <input type="text" class="form-control" name="nombre" placeholder="Nombre" required>
              </div>
              <div class="input-field">
                <input
                  type="email"
                  class="form-control"
                  name="correo"
                  placeholder="Correo"
                  required
                >
              </div>
              <div class="input-field message">
                <textarea name="mensaje" class="form-control" placeholder="Mensaje" required></textarea>
              </div>
              <div class="g-recaptcha" data-sitekey="6LeSbiATAAAAAGoTS4lqeNYnSsnqtnCuWaND0x6h">
                <div style="width: 304px; height: 78px;">
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    class="g-recaptcha-response"
                    style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"
                  ></textarea>
                </div>
              </div>
               <b-button variant="info">Enviar</b-button>
            </form>
          </div>
          <!-- end .contact-form -->
        </div>
        <!-- .col-md-8 -->
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#contact {
  height: 100vh;
}
.letrero {
  padding: 5%;
}
.letrero p {
  margin-top: 5%;
}
.formulario {
  margin: auto;
  text-align: center;
}
</style>
