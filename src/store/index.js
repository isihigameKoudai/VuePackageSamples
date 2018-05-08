import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  mode: '',
  modal: {
    isShow: false,
    contentt: ""
  },
  isLoading: false
};

//Mutaions is synchronous only methods to change state values.
const mutations = {
  commitModeToDev(state,payload) {
    state.mode = 'devlopment';
  },
  commitModeToPro(state,payload) {
    state.mode = 'production'; 
  },
  commitModal(state,payload) {
    state.modal = payload;
  },
  commitLoading(state,payload) {
    state.isLoading = payload;
  }
};

//Actions is methods includes asynchronous processes.
//and commit mutations.
const actions = {
  getSomething({commit},payload) {
    const num1 = 1;
    const num = 2;
  },
  updateModeDev({commit},payload) {
    commit('commitModeToDev',payload);
  },
  updateModePro({commit},payload) {
    commit('commitModeToPro',payload);
  },
  openModal({commit},payload) {
    commit('commitModal',{isShow: true,content: payload});
  },
  closeModal({commit},payload) {
    commit('commitModal',{isShow: false,content: ""});
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});

//If you include modules.
// export default new Vuex.Store({
//   modules: { hotels, conditions, googleMaps }
// });
