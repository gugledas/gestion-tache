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
const getters = {
  userList(state) {
    let user = [];
    if (state.utilisateur && state.utilisateur.length) {
      for (let person of state.utilisateur) {
        let obj = {};
        obj["uid"] = person["uid"][0]["value"];
        obj["name"] = person["name"][0]["value"];
        obj["mail"] = person["mail"][0]["value"];
        user.push(obj);
      }
    }

    return user;
  },
  currentUser(state, getters) {
    let utilisateur = getters.userList;
    let vallue = "";
    let user = JSON.parse(window.localStorage.getItem("current_user"));
    if (user) {
      utilisateur.forEach((element) => {
        if (element.uid == user) vallue = element;
      });
    }
    return vallue;
  }
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
  getters,
  mutations,
  actions
});
