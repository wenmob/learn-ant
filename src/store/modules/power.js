const power = {
  state: {
    power: {
      CZ_INBOUND: ["CZ_INBOUND_CONFIRM", "CZ_INBOUND_UPDATE"],
    }, // 权限
  },
  mutations: {
    setPower(state, log) {
      state.power = log;
    },
  },
  actions: {
    setPower({ commit }, log) {
      commit("setPower", log);
    },
  },
  getters: {
    getPower(state) {
      return state.power;
    },
  },
};

export default power;
