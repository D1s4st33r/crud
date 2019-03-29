<template>
  <b-container fluid class="hero">
        <div class="hero-conten">
            <h1>Cooler Master</h1>
            <h2>realizamos proyectos nuevos y mejoras en equipos de refrigeracion</h2>
            <b-button to="/about">Conocer mas...</b-button>
        </div>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(../assets/hero.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.hero-conten h1{
  font-size: 5em;
  margin-top: 0;
  margin-bottom: 0.3em;
}
.btn{
  margin-top: 2.5em;
  background-color: rgb(3, 50, 100);
}
</style>
