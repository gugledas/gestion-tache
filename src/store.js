import Vue from "vue";
import Vuex from "vuex";
//import { users } from "drupal-vuejs";
Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  user: null
};

const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  set(state, [variable, value]) {
    state[variable] = value;
  },
  SET_USER(state, user) {
    state.user -= user;
  }
};
const actions = {
  getUser({ commit }) {
    var user = [];
    //console.log("user : ", users);
    const def = async function() {
      console.log("asyn");
      var d = await new Date();
      return d;
    };
    def();
    /**/
    commit("SET_USER", user);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
