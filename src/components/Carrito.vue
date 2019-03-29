<template>
  <b-container class="listContainer">

    <div class="listProducts">
      <b-table v-if="products.length > 0" striped hover :items="products" :fields="fields" bordered>
        <template slot="editar" slot-scope="row">
          <b-button size="sm" @click="openModal(row.item.id,row.item.nombre,row.item.total)">EDITAR</b-button>
        </template>
        <template slot="eliminar" slot-scope="row">
          <b-button size="sm" @click="deleteP(row.item.nombre,row.item.id)">ELIMINAR</b-button>
        </template>
      </b-table>
      <div v-else>NO HAY PRODUCTOS</div>
    </div>

    <b-modal
      id="modal-edit"
      centered
      title="Edicion"
      ok-title="Editar"
      @ok="updateP"
      ref="modalEdit"
    >
      <b-form id="form-edit">
        <b-form-group id="nombreE" label="Nombre del producto:" label-for="nombre">
          <b-form-input id="nombreEdit" type="text" required v-model="up.nombre"/>
        </b-form-group>

        <b-form-group id="totalE" label="Total:" label-for="total">
          <b-form-input id="totalEdit" type="number" required v-model="up.total"/>
        </b-form-group>
      </b-form>
    </b-modal>
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
          key: "producto",
          label: "Producto"
        },
        {
          key: "cantidad",
          label: "Total"
        },
        "editar",
        "eliminar"
      ],
      up: {
        nombre: "",
        total: "",
        idC: 0
      }
    };
  },
  computed: {
    ...mapState(["carrito"])
  },
  methods: {
    ...mapActions(["createPro", "getPro", "deletePro", "updatePro"]),
    deleteP(nombre, id) {
      let del = confirm("Desea eliminar el producto " + nombre + id);
      let postD = { id, nombre };
      if (del) this.deletePro(postD);
    },
    openModal(id, nombre, total) {
      this.up.nombre = nombre;
      this.up.total = total;
      this.up.idC = id;
      this.$refs.modalEdit.show();
    },
    updateP(evt) {
      evt.preventDefault();
      if (this.up.nombre === "" || this.up.total ==="") {
        alert("Por favor completo los campos");
      } else {
        this.enviarUp();
      }
    },
    enviarUp() {
      this.updatePro(this.up);
      this.$nextTick(()=>{
        this.$refs.modalEdit.hide();
      })
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
  display: table;
}
.formContainer {
  padding-top: 7%;
  padding-left: 15%;
}
.listProducts {
  padding-top: 5%;
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
