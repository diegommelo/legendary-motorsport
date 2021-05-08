import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    loaded: false,
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_LOADED(state, status) {
      state.loaded = status;
    },
  },
  actions: {
    getAllData({ commit }) {
      axios
        .get('https://api.npoint.io/00261b488b3d021ec333')
        .then((response) => {
          console.log(response.data);
          const dataFiltered = Object.values(response.data).filter((item) => {
            return item.attr.ct12.value[0] === 'legendary-motorsport';
          });
          commit('SET_DATA', dataFiltered);
          commit('SET_LOADED', true);
        })
        .catch((err) => {
          console.error(`Deu ruim: ${err}`);
        });
    },
  },
  modules: {},
  getters: {
    getData: (state) => {
      return state.data;
    },
  },
});
