import config from "./config";
export default {
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function(
    where = [{ column: "c.type", operator: "=", value: "project" }]
  ) {
    return new Promise(resolv => {
      var query = "";
      query += " select ";
      query += " c.idcontents, c.text, c.titre, c.created_at, ";
      query += " c.update_at, c.type, h.idhierachie, h.idcontentsparent, ";
      query += " h.ordre, h.level";
      query += " from ";
      query += this.formatStringTable("gestion_project_hierachie") + " as h ";
      query += " INNER JOIN ";
      query += this.formatStringTable("gestion_project_contents") + " as c ";
      query += " ON h.idcontents = c.idcontents ";
      //query += "WHERE ( h.idcontentsparent = $idcontents OR c.idcontents = $idcontents ) ";
      if (where.length) {
        query += " WHERE ";
        for (const i in where) {
          query +=
            where[i].column +
            " " +
            where[i].operator +
            " " +
            "'" +
            where[i].value +
            "'" +
            " ";
        }
      }
      query += " limit 0,50 ";
      config.post("/gestion-project/select", query).then(reponse => {
        console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectTypes: function() {
    return new Promise(resolv => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_type");
      query += " limit 0,50 ";
      config.post("/gestion-project/select", query).then(reponse => {
        console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  /**
   * les tables sous drupal doivent etre encarée avec {}
   */
  formatStringTable(table) {
    return "{" + table + "}";
  }
};
