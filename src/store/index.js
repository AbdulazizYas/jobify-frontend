// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// const state = {
//   user: null,
// };

// const store = new Vuex.Store({
//   state,
//   getters: {
//     user: (state) => state.user,
//   },
//   mutations: {
//     user(state, user) {
//       state.user = user;
//     },
//   },
//   actions: {
//     user(context, user) {
//       context.commit("user", user);
//     },
//   },
// });

// export default store;

import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
});
