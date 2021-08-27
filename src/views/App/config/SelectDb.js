import config from "./config";
export default {
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function (
    where = [{ column: "c.type", operator: "=", value: "project" }]
  ) {
    return new Promise((resolv) => {
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
      query += " ORDER BY  c.`idcontents` DESC";
      query += " limit 0,50 ";
      //console.log("query :: ", query);
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectTypes: function () {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_type");
      query += " limit 0,50 ";
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectProject: function (where) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_contents");
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
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectFatureList: function (where) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_invoice_list");
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
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectInvoice: function (where) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_invoice");
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
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectClients: function (where) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_client");
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
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectSte: function (where) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_societe");
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
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  selectClient: function (table) {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable(table);
      query += " limit 0,50 ";
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  //selectionne et affiche les derniers données modifié
  selectAll: function () {
    return new Promise((resolv) => {
      var query = "";
      query += " select * ";
      query += " from ";
      query += this.formatStringTable("gestion_project_contents");
      query += " order by update_at DESC ";
      query += " limit 0,50 ";
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  SelectTacheEnours: function (
    where = [{ column: "t.status", operator: "=", value: 2 }]
  ) {
    return new Promise((resolv) => {
      var query = "";
      query += " select ";
      query += " c.idcontents, c.text, c.titre, c.created_at, ";
      query += " c.update_at, c.type, h.idhierachie, h.idcontentsparent, ";
      query += " h.ordre, h.level, ";
      query += " t.status";
      query += " from ";
      query += this.formatStringTable("gestion_project_hierachie") + " as h ";
      query += " INNER JOIN ";
      query += this.formatStringTable("gestion_project_contents") + " as c ";
      query += " ON h.idcontents = c.idcontents ";
      query += " INNER JOIN ";
      query += this.formatStringTable("gestion_project_times") + " as t ";
      query += " ON t.idcontents = c.idcontents ";
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
      query += " ORDER BY  c.`idcontents` DESC";
      query += " limit 0,50 ";
      //console.log("query :: ", query);
      config.post("/gestion-project/select", query).then((reponse) => {
        // console.log("selectDatas : ", reponse);
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
  },
};
