import Vue from "vue";
import Vuex from "vuex";
//import { users } from "drupal-vuejs";
import config from "./views/App/config/config";
Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
  user: null,
  utilisateur: []
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
  },
  SET_UTILISATEUR(state, utilisateur) {
    state.utilisateur = utilisateur;
  }
};
const actions = {
  getUser({ commit }) {
    var user = [];
    //console.log("user : ", users);
    const def = async function () {
      console.log("asyn");
      var d = await new Date();
      return d;
    };
    def();
    /**/
    commit("SET_USER", user);
  },
  getUtilisateur({ commit }) {
    config
      .post(
        "/gestion-project/users",
        {},
        {
          headers: {
            Authorization: config.auth
          }
        }
      )
      .then((reponse) => {
        if (reponse.status) {
          if (reponse) {
            commit("SET_UTILISATEUR", reponse.data);
            console.log("Utilisateur", reponse);
          }
        }
      })
      .catch(function (error) {
        console.log("error user", error);
      });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
