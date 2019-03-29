/* eslint-disable no-console */
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    id: '',
    active: false,
    roll: '',
    products: [],
    carrito: [],
  },
  mutations: {
  },
  actions: {
    createUser({ state }, post) {
      axios.post('http://localhost:3000/user', post)
        .then(function (response) {
          state.active = response.data.active;
          state.roll = response.data.roll;
          state.id = response.data.idC;
          console.log(state);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logIn({ state }, post) {
      axios.post('http://localhost:3000/login', post)
        .then(function (response) {
          state.active = response.data.active;
          state.roll = response.data.roll;
          state.id = response.data.idC;
          console.log(state);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    logOut({ state }) {
      state.active = false,
        state.roll = '',
        state.id = ''
    },
    createPro(context, post) {
      axios.post('http://localhost:3000/product', post)
        .then(function (response) {
          if (response.data.add) alert('producto agregado')
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    getPro({ state }) {
      axios.get('http://localhost:3000/product')
        .then(function (response) {
          console.log(response)
          state.products = response.data;
        })
    },
    deletePro({ dispatch }, post) {
      axios.post('http://localhost:3000/Dproduct', post)
        .then(function (response) {
          if (response.data.delete) {
            alert('producto eliminado');
            dispatch('getPro');
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    updatePro({ dispatch }, post) {
      axios.post('http://localhost:3000/Eproduct', post)
        .then(function (response) {
          if (response.data.updated) {
            alert('producto actualizado')
            dispatch('getPro');
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    getCarrito({ state }, post) {
      axios.post('http://localhost:3000/Gcarrito', post)
        .then(function (response) {
          state.carrito = response.data;
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    createCar(context, post) {
      axios.post('http://localhost:3000/carrito', post)
        .then(function (response) {
          if (response.data.add) alert('añadido a carrito');
        })
        .catch(function (err) {
          console.log(err);
        })
    },
    deleteCar(context, post) {
      axios.post('http://localhost:3000/Dcarrito', post)
        .then((response) => {
          if (response.data.deleted) alert('Pedido eliminado');
        })
        .catch(function (err) {
          console.log(err);
        })
    }
  },
});
