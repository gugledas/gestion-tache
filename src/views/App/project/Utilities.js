const Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  formatData: function(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.titre) {
        var ligne = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type
          }
        };
        if (datas.idcontents) {
          ligne.where = [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ];
        }
        result.push(ligne);
      }
      resolv(result);
    });
  }
};
export default Utilities;
