import "core-js/stable";
import Vue from "vue";
import App from "./App";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import { iconsSet as icons } from "./assets/icons/icons.js";
import store from "./store";
import moment from "moment";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
//Vue.config.performance = true;

Vue.use(CoreuiVue);

Vue.prototype.$log = console.log.bind(console);

new Vue({
  el: "#app",
  router,
  moment,
  store,
  icons,
  hljs,
  template: "<App/>",
  components: {
    App
  }
});
