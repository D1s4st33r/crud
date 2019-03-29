<template>
  <footer>
    <b-container fluid class="footer">
      <b-row class="copy">
        <b-col>Copyright © 2018 Cancun, Quintana Roo Mexico</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 7vh;
  color: white;
  background-color: rgb(3, 50, 100);
  justify-content: center;
  align-items: center;
  text-align: center;
}
.copy {
  padding-top: 1rem;
}
</style>
