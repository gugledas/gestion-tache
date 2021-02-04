import axios from "axios";
// les differentes methodes doivent devenirs de petit program inclues dans un module.

export default {
  baseUrl: "http://gestion-tache-new.kksa",

  post: function(request, datas = {}) {
    console.log("ssss");
    return new Promise(resolv => {
      var configs = {
        headers: {}
      };
      axios
        .post(this.baseUrl + request, datas, configs)
        .then(reponse => {
          console.log("Post success : ", reponse);
          resolv({ status: true, data: reponse.data, reponse: reponse });
        })
        .catch(error => {
          resolv({ status: false, error: error.response });
        });
    });
  },
  postfetch: function(request) {
    return new Promise(resolv => {
      var headers = new Headers();
      headers.append("databaseConfig", "Wbu-Gestion-Tache");
      var myInit = {
        method: "POST",
        headers: headers,
        mode: "cors",
        cache: "default"
      };
      fetch(this.baseUrl + request, myInit).then(function(response) {
        console.log("response : ", response);
        resolv({ status: true, reponse: response });
      });
    });
  },
  postXMLHttpRequest: function(request) {
    return new Promise(resolv => {
      var invocation = new XMLHttpRequest();
      invocation.open("POST", this.baseUrl + request, true);
      invocation.onreadystatechange = handler;
      invocation.send();
      resolv("ok");
      function handler(reponse) {
        console.log("reponse : ", reponse);
      }
    });
  }
};
