<template>
  <b-modal id="modal-login" centered title="Log in" @ok="iniSesion" ref="modalL">
    <b-form @submit.stop.prevent="enviar" id="form-login">
      <b-form-group id="emailL" label="Correo Electronico:" label-for="email">
        <b-form-input
          id="emailLog"
          type="email"
          required
          placeholder="ingresa tu correo"
          v-model="post.email"
        />
      </b-form-group>

      <b-form-group id="passL" label="Contraseña:" label-for="password">
        <b-form-input
          id="passwordLog"
          type="password"
          required
          placeholder="ingresa tu contraseña"
          v-model="post.password"
        />
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LogIn",
  data() {
    return {
      post: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["logIn"]),
    iniSesion(evt) {
      evt.preventDefault();
      if (this.post.email === "" || this.post.password === "") {
        alert("Por favor completo los campos");
      } else {
        this.enviar();
      }
    },
    enviar() {
    this.logIn(this.post);
    alert('Sesion Iniciada')
    this.$nextTick(() => {
      // Wrapped in $nextTick to ensure DOM is rendered before closing
      this.$refs.modalL.hide();
    });
  }
  },
};
</script>
