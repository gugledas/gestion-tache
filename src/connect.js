import config from "./views/App/config/config";
export default {
  checkUserLogin() {
    let user = JSON.parse(window.localStorage.getItem("user"));
    //let currentPage = window.location.href
    let redirectPage = window.location.origin + "/pages/login";
    let hash = window.location.pathname;
    console.log("hash,", hash.includes("/login"), user);
    if (user && user.username && user.password) {
      this.testLogin(user.username, user.password).then(
        () => {
          let has = hash == "/pages/login" ? true : false;
          console.log(
            "reponse login",
            window.document.referrer.includes("/pages/login"),
            has
          );
          if (
            hash == "/pages/login" &&
            !window.document.referrer.includes("/pages/login")
          ) {
            window.location.href = window.document.referrer;
          } else if (
            hash == "/pages/login" &&
            window.document.referrer.includes("/pages/login")
          ) {
            window.location.href = window.location.origin;
          }
        },
        (error) => {
          console.log("Veuillez vous connecter");
          console.log(error);
          //window.localStorage.clear();
          if (hash != "/pages/login") {
            window.location.href = redirectPage;
          }
        }
      );
    } else if (!user && hash != "/pages/login") {
      console.log("pas connecter", redirectPage);
      window.location.replace(redirectPage);
    }
  },
  testLogin(user, pass) {
    return new Promise((resolv, reject) => {
      //var credentials = "Basic " + btoa(user + ":" + pass);
      // console.log("aut", user, pass, credentials);
      var data = {
        name: [{ value: user }],
        password: [{ value: pass }]
      };
      config
        .post(
          "http://gestiontaches.kksa/login-rx-vuejs/user-connexion",
          data
          // {
          //   headers: {
          //     // Accept: "application/json",
          //     "Content-Type": "application/json",
          //     Authorization: credentials
          //     // "Access-Control-Allow-Origin": "*",
          //     // "X-CSRF-Token": "5E5HLcHV_GJn7RfFnL2ZYkMCa8HG1vyNdwBNER5EBDA"
          //   }
          // }
        )
        .then(function (response) {
          resolv(response);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  }
};
