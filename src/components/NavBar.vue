<template>
  <b-navbar toggleable="lg" type="light" class="bar">
    <b-container>
      <b-navbar-brand to="/">
        <img src="../assets/cooler.png" alt="LOGO" class="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/services">Servicios</b-nav-item>
          <b-nav-item v-if="roll == 'ADMIN'" to="/crud">CRUD</b-nav-item>
          <b-nav-item v-else to="/products">Productos</b-nav-item>
          <b-nav-item to="/about">Nosotros</b-nav-item>
          <b-nav-item to="/contact">Contacto</b-nav-item>
          <b-nav-item-dropdown text="Usuario" class="boton" right>
            <div v-if="active">
              <b-dropdown-item v-if="roll=='CLIENT'" to="/carrito">Carrito</b-dropdown-item>
              <b-dropdown-item @click="logOut" >Cerrar Sesion</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item v-b-modal="'modal-login'">Iniciar Sesion</b-dropdown-item>
              <b-dropdown-item v-b-modal="'modal-registro'">Registrarse</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    <Register/>
    <Login />
  </b-navbar>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Register from './Register.vue';
import Login from './LogIn.vue';

export default {
  name: "Bar",
  components:{
    Register,
    Login
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapState(['active','roll'])
  },
  methods: {
    ...mapActions(['logOut'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  background-color: rgb(3, 50, 100);
}
.nav-item {
  margin-right: 5px;
  border: 1px solid transparent;
}
.logo {
  width: 5vw;
}
</style>
