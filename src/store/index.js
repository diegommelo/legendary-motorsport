import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    loaded: false,
    carDetails: null,
    orderDirection: null,
    carsByManufacturer: {},
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_LOADED(state, status) {
      state.loaded = status;
    },
    SET_CARDETAILS(state, data) {
      state.carDetails = data;
    },
    SET_ORDERDIRECTION(state, direction) {
      state.orderDirection = direction;
    },
    SET_CARSBYMANUFACTURER(state, data) {
      state.carsByManufacturer = data;
    },
  },
  actions: {
    getAllData({ commit }) {
      axios
        .get('https://api.npoint.io/00261b488b3d021ec333')
        .then((response) => {
          // const dataFiltered = Object.values(response.data).filter((item) => {
          //   return item.attr.ct12.value[0] === 'legendary-motorsport';
          // });
          commit('SET_DATA', response.data);
          commit('SET_LOADED', true);
        })
        .catch((err) => {
          console.error(`Deu ruim: ${err}`);
        });
    },
    actionCarDetails({ state, commit }, id) {
      if (state.loaded) {
        const response = state.data.filter((car) => {
          return car.id === id;
        });
        this.dispatch('filterByManufacturer', response[0].attr.ct2.value);
        commit('SET_CARDETAILS', response);
      } else {
        console.error('Erro ao carregar detalhes do carro');
      }
    },
    orderCarsByPrice({ state, commit }, direction) {
      if (state.loaded) {
        let dataOrdered = {};
        commit('SET_ORDERDIRECTION', direction);
        if (state.orderDirection) {
          dataOrdered = state.data.sort(
            (a, b) => a.attr.ct13.value - b.attr.ct13.value
          );
        } else {
          dataOrdered = state.data.sort(
            (a, b) => b.attr.ct13.value - a.attr.ct13.value
          );
        }
        commit('SET_DATA', dataOrdered);
      } else {
        console.error('Error while sorting data');
      }
    },
    filterByManufacturer({ state, commit }, manufacturer) {
      if (state.loaded) {
        const response = state.data.filter((car) => {
          const { value } = car.attr.ct2;
          return value[0] === manufacturer[0];
        });
        console.log(response);
        commit('SET_CARSBYMANUFACTURER', response);
      }
    },
  },
  modules: {},
  getters: {
    getData: (state) => {
      return state.data;
    },
    getCarDetails: (state) => {
      return state.carDetails;
    },
    getCarsByManufacturer: (state) => {
      return state.carsByManufacturer;
    },
  },
});
