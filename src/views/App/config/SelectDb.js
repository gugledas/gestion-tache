import config from "./config";
var authorization = config.auth;
export default {
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function (
    where = [{ column: "c.type", operator: "=", value: "project" }]
  ) {
    return new Promise((resolv) => {
      var query = "";
      if (where.length) {
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
      config
        .post("/gestion-project/select/selectdatas", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .get("/gestion-project/select/project-type", {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      if (where.length) {
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
      config
        .post("/gestion-project/select/select-project", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .post("/gestion-project/select", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .post("/gestion-project/select", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .post("/gestion-project/select", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .post("/gestion-project/select", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      config
        .post("/gestion-project/select", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
      query +=
        " c.idcontents is not NULL order by c.update_at DESC limit 0,30 ";
      config
        .post("/gestion-project/select/select-project", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
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
    return new Promise((resolv, error) => {
      var query = "";

      if (where.length) {
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
      query += " ORDER BY  c.`idcontents` DESC ";
      query += " limit 0,20 ";
      //console.log("query :: ", query);
      config
        .post("/gestion-project/select/select-tache-enours", query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
          if (reponse.status) {
            resolv(reponse.data);
          } else {
            resolv([]);
          }
        })
        .catch((er) => {
          error(er);
        });
    });
  },
  SelectMesTaches: function (
    uid,
    where = [{ column: "t.uid", operator: "=", value: 8 }]
  ) {
    return new Promise((resolv, error) => {
      var query = "";

      if (where.length) {
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
      query += " ORDER BY  c.`idcontents` DESC ";
      query += " limit 0,20 ";
      //console.log("query :: ", query);
      config
        .post("/gestion-project/select/select-mes-taches/" + uid, query, {
          headers: {
            Authorization: authorization
          }
        })
        .then((reponse) => {
          if (reponse.status) {
            resolv(reponse.data);
          } else {
            resolv([]);
          }
        })
        .catch((er) => {
          error(er);
        });
    });
  },

  /**
   * Les tables sous drupal doivent etre encarée avec {}
   */
  formatStringTable(table) {
    return "{" + table + "}";
  }
};
