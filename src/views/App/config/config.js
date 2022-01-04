import axios from "axios";
import { AjaxBasic } from "wbuutilities";
export default {
  ...AjaxBasic,
  TestDomain: "http://gestiontaches.kksa",
  baseUrl: "http://gestion-taches-vps.habeuk.com",
  //baseUrl: "http://gestion-taches.kksa",
  ModeDebug: true,
  postOld: function(request, datas = {}) {
    return new Promise((resolv) => {
      var configs = {
        headers: {},
      };
      axios
        .post(this.baseUrl + request, datas, configs)
        .then((reponse) => {
          //console.log("Config success : ", reponse);
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch((error) => {
          resolv({ status: false, error: error.response });
        });
    });
  },
  getOld: function(request, datas = {}) {
    // console.log("ssss");
    return new Promise((resolv) => {
      var configs = {
        headers: {},
      };
      axios
        .get(this.baseUrl + request, datas, configs)
        .then((reponse) => {
          console.log("Config get success : ", reponse);
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch((error) => {
          resolv({ status: false, error: error.response });
        });
    });
  },
};
