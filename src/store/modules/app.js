const app = {
  state: {
    activeMenuItem: {},
    direction: "",
  },
  mutations: {
    setActiveMenuItem(state, log) {
      state.activeMenuItem = {};
      setTimeout(() => {
        state.activeMenuItem = log;
      }, 200);
    },
    UPDATE_DIRECTION(state, log) {
      state.direction = log;
    },
  },
  actions: {
    setActiveMenuItem({ commit }, log) {
      commit("setActiveMenuItem", log);
    },
    UPDATE_DIRECTION({ commit }, log) {
      commit("UPDATE_DIRECTION", log);
    },
  },
  getters: {
    getActiveMenuItem(state) {
      return state.activeMenuItem;
    },
    getDirection(state) {
      return state.direction;
    },
  },
};

export default app;
