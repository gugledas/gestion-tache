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
  color: function(valueCurent, maxValue) {
    let value = 0;
    let $color;
    if (maxValue > 0 && valueCurent > 0) {
      value = (valueCurent * 100) / maxValue;
    }
    if (value <= 25) {
      $color = "success";
    } else if (value > 25 && value <= 50) {
      $color = "info";
    } else if (value > 50 && value <= 85) {
      $color = "secondary";
    } else if (value > 85 && value <= 100) {
      $color = "warning";
    } else {
      $color = "danger";
    }
    return $color;
  },
};
