<template>
  <b-modal
    id="modal-registro"
    centered
    title="Registro"
    ok-title="Crear"
    @ok="crearUsuario"
    ref="modalR"
  >
    <b-form @submit.stop.prevent="enviar" id="form-registro">
      <b-form-group id="emailR" label="Correo Electronico:" label-for="email">
        <b-form-input
          id="emailReg"
          type="email"
          required
          placeholder="ingresa tu correo"
          v-model="post.email"
        />
      </b-form-group>

      <b-form-group id="passR" label="Contraseña:" label-for="password">
        <b-form-input
          id="passwordReg"
          type="password"
          required
          placeholder="ingresa una contraseña"
          v-model="post.password"
        />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      post: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    crearUsuario(evt) {
      evt.preventDefault();
      if (this.post.email === "" || this.post.password === "") {
        alert("Por favor completo los campos");
      } else {
        this.enviar();
      }
    },
    enviar(){
      this.createUser(this.post);
      alert('usuario registrado\nsesion iniciada');
      this.$nextTick(() => {
      // Wrapped in $nextTick to ensure DOM is rendered before closing
      this.$refs.modalR.hide();
      })
    },
  }
};
</script>


