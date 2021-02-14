import config from "../../views/App/config/config.js";
const Utilities = {
  /**
   * Recupere les projets parents pour le project en cours.
   */
  GetCrumbs: function(project, result = []) {
    return new Promise(resolv => {
      config
        .post("/gestion-project/select/get-crumb", project)
        .then(response => {
          if (response.status) {
            response.data.reverse();
            response.data.forEach(item => {
              result.push(this.formatTocrumb(item));
            });
            console.log(" customRoute :: ", result);
            resolv(result);
          } else {
            resolv(result);
          }
        });
    });
  },
  formatTocrumb(project) {
    return {
      to: "/projet/" + project.idcontents,
      text: project.titre
    };
  }
};
export default Utilities;
