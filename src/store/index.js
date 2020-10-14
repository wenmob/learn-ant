import Vue from "vue";
import Vuex from "vuex";

import power from "./modules/power";
import app from "./modules/app";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    power,
  },
});

export default store;
