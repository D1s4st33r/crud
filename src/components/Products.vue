<template>
  <b-container class="listContainer">
    <div class="listProducts">
      <b-table v-if="products.length > 0" striped hover :items="products" :fields="fields" bordered>
        <template slot="carrito" slot-scope="row">
          <b-form-input
            v-model="cantidad"
            :id="`index-${row.index}`"
            type="number"
            size="sm"
            class="numeros"
            value="1"
            min="1"
            :max="`${row.item.num}`"
          />
          <b-button size="sm" @click="addCar(row.item)">comprar</b-button>
        </template>
      </b-table>
      <div v-else>NO HAY PRODUCTOS</div>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Products",
  data() {
    return {
      fields: [
        {
          key: "nombre",
          label: "Producto"
        },
        {
          key: "total",
          label: "Total"
        },
        "carrito"
      ],
      cantidad: 1
    };
  },
  computed: {
    ...mapState(["products", "id"])
  },
  methods: {
    ...mapActions(["getPro", "createCar", "updatePro"]),
    addCar(product) {
      if (this.id !== "") {
        product.total -= this.cantidad;
        console.log(product);
        this.updatePro(product);
        this.createCar();
      }else {
        alert('no ha iniciado sesion');
      }
    },
    modCant(value) {
      this.cantidad = value;
      console.log(this.cantidad);
    }
  },
  beforeMount() {
    this.getPro();
  }
};
</script>

<style scoped>
.listContainer {
  height: 100vh;
}
.listProducts {
  padding-top: 10%;
  padding-bottom: 10%;
}
.productos {
  border: 1px solid black;
}
.numeros {
  width: 5vw;
  margin-right: 1%;
  margin-left: 1%;
  padding: 1%;
  display: inherit !important;
}

@media (max-width: 450px) {
  .numeros {
    width: 10vw !important;
  }
}
@media (max-width: 890px) {
  .numeros {
    width: 8vw;
  }
}
</style>
