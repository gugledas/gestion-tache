import axios from "axios";
var formatBasicAuth = function(userName, password) {
  var basicAuthCredential = userName + ":" + password;
  var bace64 = btoa(basicAuthCredential);
  return "Basic " + bace64;
};
/**
var basic = formatBasicAuth("admin", "LEFzLxqQHw");
/**/
export default {
  baseUrl: "http://habeukutilites.kksa",
  basicAuth: formatBasicAuth("admin", "LEFzLxqQHw"),
  ModeDebug: true, //sa valeur est prioritaire.
  $bvModal: "",
  formatBasicAuth: formatBasicAuth,
  $bvToast: "",
  ToastDelay: 5000,
  ToastAutoHide: false,
  ajaxTitle: "",
  showAlert: false,
  get: function(request, config = {}) {
    return new Promise(resolv => {
      var params = {};
      if (config.useCredential) {
        params.headers = {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: this.basicAuth
        };
      }
      if (config.params) {
        params.params = config.params;
      }
      axios
        .get(this.baseUrl + request, params)
        .then(reponse => {
          if (this.ModeDebug) {
            console.log("GET success", reponse);
          }
          if (reponse.statusText === "OK" && reponse.status === 200) {
            this.ajaxTitle = "Chargement ok";
          } else {
            this.ajaxTitle = reponse.statusText;
          }
          if (config.showAlert === false || config.showAlert === true) {
            this.showAlert = config.showAlert;
          }
          if (this.showAlert) {
            this.notification(this.ajaxTitle);
            /*
            this.$bvToast.toast(" ", {
              title: this.ajaxTitle,
              variant: "POST success",
              solid: true,
              toaster: "b-toaster-top-right",
              autoHideDelay: this.ToastDelay,
              noAutoHide: this.ToastAutoHide
            });
            /**/
          }
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          if (this.ModeDebug) {
            console.log(
              "Error response: ",
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

          this.$bvToast.toast("une erreur s'est produite", {
            title: this.ajaxTitle,
            variant: "warning",
            solid: true
          });
          resolv({ status: false, error: error.response });
        });
    });
  },
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
  },
  postEntityFile: function(request, file) {
    axios
      .post(this.baseUrl + request, file, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": 'file ; filename="' + file.name + '"',
          Authorization: this.basicAuth
        }
      })
      .then(response => {
        this.Vmodels.field_image = response.data.fid[0].value;
      });
  },
  /**
   * il faut installer le moduele file_entity sur drupal.
   * pour voir les authorisations : rest.resource.entity.file.yml
   */
  postFile: function(file, request = "/entity/file?_format=hal_json") {
    console.log("file : ", file);
    return new Promise(resolv => {
      this.getBase64(file).then(fileBase64 => {
        console.log("fileBase64 : ", fileBase64);
        var dataToPost = {
          _links: {
            type: {
              href: this.baseUrl + "/rest/type/file/image"
            }
          },
          //filename: [{ value: file.name }],
          //filemime: [{ value: file.type }],
          uri: [{ value: "public://TEST/" + file.name }],
          type: [{ target_id: "image" }],
          data: [{ value: '"' + this.imagetest + '"' }]
        };
        axios
          .post(this.baseUrl + request, dataToPost, {
            headers: {
              "Content-Type": "application/hal+json",
              Authorization: this.basicAuth
            }
          })
          .then(reponse => {
            this.notification(this.ajaxTitle);
            resolv({ status: true, data: reponse.data, reponse: reponse });
          })
          .catch(error => {
            this.ajaxTitle = error.response
              ? error.response.statusText
              : error.stack;
            this.notification(this.ajaxTitle, "warning");
            resolv({ status: false, error: error.response });
          });
      });
    });
  },
  delete: function(request, source) {
    return new Promise(resolv => {
      axios
        .delete(this.baseUrl + request, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: this.basicAuth
          },
          params: source
        })
        .then(reponse => {
          var ajaxTitle = this.ajaxTitle;
          if (this.ModeDebug) {
            console.log("Delete", reponse);
          }
          if (reponse.statusText === "OK" && reponse.status === 200) {
            ajaxTitle = "Suppression ok";
          } else {
            ajaxTitle = reponse.statusText;
          }
          this.notification(ajaxTitle);
          /*
          this.$bvToast.toast(" ", {
            title: ajaxTitle,
            variant: "success",
            solid: true,
            toaster: "b-toaster-top-right",
            autoHideDelay: this.ToastDelay,
            noAutoHide: this.ToastAutoHide
          });
          /**/
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          if (this.ModeDebug) {
            console.log(
              "Error response: ",
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
          /*
          this.$bvToast.toast("une erreur s'est produite", {
            title: this.ajaxTitle,
            variant: "warning",
            solid: true
          });
          /**/
          resolv({ status: false, error: error.response });
        });
    });
  },
  confirmDelete: function(
    title = "Confirmer la suppression",
    body = "Etez vous certains de vouloir supprimer ? cette action est irreversible",
    config = {}
  ) {
    return new Promise(resolv => {
      this.$bvModal
        .msgBoxConfirm(body, {
          title: title,
          size: config.sm ? config.sm : "sm",
          buttonSize: config.sm ? config.sm : "sm",
          okVariant: "danger",
          okTitle: "Supprimer",
          cancelTitle: "Annuler",
          footerClass: "p-2",
          hideHeaderClose: false
        })
        .then(value => {
          resolv({ status: value, value: value });
        })
        .catch(err => {
          resolv({ status: false, value: err });
        });
    });
  },
  notification: function(ajaxTitle, variant = "success") {
    console.log(ajaxTitle, variant);
    /*
    this.$bvToast.toast(" ", {
      title: ajaxTitle,
      variant: variant,
      solid: true,
      toaster: "b-toaster-top-right",
      autoHideDelay: this.ToastDelay,
      noAutoHide: this.ToastAutoHide
    });
    /**/
  },
  getBase64: function(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      //reader.onload = () => resolve(reader.result);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  },
  imagetest:
    "data:image/png;base64,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"
};
// src/App/Configs/Config.js
