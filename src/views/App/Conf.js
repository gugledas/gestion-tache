import axios from "axios";
export default {
  baseUrl: "http://habeukutilites.kksa",
  ModeDebug: true,
  post: function(request, datas = {}) {
    console.log("ssss");
    return new Promise(resolv => {
      var configs = {
        headers: {
          //"Content-Type": "application/json",
          Accept: "application/json",
          databaseConfig: "Wbu-Gestion-Tache"
        }
      };
      // if (configsBase.magentoAction) {
      //   configs.headers.MagentoTokenAction = configsBase.magentoAction;
      // }
      // if (configsBase.showAlert === false || configsBase.showAlert === true) {
      //   this.showAlert = configsBase.showAlert;
      // }

      axios
        .post(this.baseUrl + request, datas, configs)
        .then(reponse => {
          var ajaxTitle = this.ajaxTitle;
          if (this.ModeDebug) {
            console.log("Success POST", reponse);
          }
          if (reponse.statusText === "OK" && reponse.status === 200) {
            ajaxTitle = "Sauvegarde ok";
          } else {
            ajaxTitle = reponse.statusText;
          }
          if (this.showAlert) {
            this.notification(ajaxTitle);
          }
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          if (this.ModeDebug) {
            console.log(
              "Error responsei: ",
              error.response,
              "\n error code : ",
              error.code,
              "\n error.stack : ",
              error.stack
            );
          }
          this.ajaxTitle = error.response
            ? error.response.statusText
            : error.stack;
          this.notification(this.ajaxTitle, "warning");

          resolv({ status: false, error: error.response });
        });
    });
  }
};
