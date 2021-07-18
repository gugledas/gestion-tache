import axios from "axios";
export default {
  baseUrl: "http://gestion-taches-vps.habeuk.online",
  ModeDebug: true,
  post: function(request, datas = {}) {
    return new Promise(resolv => {
      var configs = {
        headers: {}
      };
      axios
        .post(this.baseUrl + request, datas, configs)
        .then(reponse => {
          //console.log("Config success : ", reponse);
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          resolv({ status: false, error: error.response });
        });
    });
  },
  get: function(request, datas = {}) {
    // console.log("ssss");
    return new Promise(resolv => {
      var configs = {
        headers: {}
      };
      axios
        .get(this.baseUrl + request, datas, configs)
        .then(reponse => {
          console.log("Config get success : ", reponse);
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          resolv({ status: false, error: error.response });
        });
    });
  }
};
