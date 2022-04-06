import axios from "axios";
import { AjaxBasic } from "wbuutilities";
var formatBasicAuth = function(userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 = btoa(basicAuthCredential);
  return "Basic " + bace64;
};
export default {
  ...AjaxBasic,
  TestDomain: "http://gestiontaches.kksa",
  baseUrl: "https://gestion-taches-vps.habeuk.com",
  basicAuth: formatBasicAuth("stane", "azabzistany@gmail.com"),
  //baseUrl: "http://gestion-taches.kksa",
  ModeDebug: true,
  postOld: function(request, datas = {}) {
    return new Promise((resolv) => {
      var configs = {
        //withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: this.basicAuth,
        },
      };
      console.log("Authorization", this.basicAuth);
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
        // withCredentials: true,
        // auth: {
        //   username: "stane",
        //   password: "azabzistany@gmail.com"
        // },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: this.basicAuth,
        },
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
