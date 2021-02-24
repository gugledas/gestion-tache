import moment from "moment";
const Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  formatData: function(datas) {
    return new Promise(resolv => {
      console.log("fdate : ", datas);
      var result = [];
      if (datas && datas.titre) {
        // var ddpe = moment.unix(datas.date_depart_proposer).format("DD/MM/YYYY HH:mm");
        // var dfpe = moment.unix(datas.date_fin_proposer).format("DD/MM/YYYY HH:mm");
        var ddp = moment(
          datas.date_depart_proposer + " " + datas.heure_debut,
          "YYYY-MM-DD  HH:mm"
        ).unix();
        var dfp = moment(
          datas.date_fin_proposer + " " + datas.heure_fin,
          "YYYY-MM-DD  HH:mm"
        ).unix();
        //edition de la table contents
        var table1 = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type
          },
          action: "update"
        };

        if (datas.idcontents) {
          table1.where = [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ];
        }
        //Edition de la table times
        if (
          datas.date_depart_proposer.length &&
          datas.date_fin_proposer.length
        ) {
          var table2 = {
            table: "gestion_project_times",
            fields: {
              status: datas.status,
              date_depart_proposer: ddp,
              date_fin_proposer: dfp
            },
            action: "update",
            where: [
              {
                column: "idcontents",
                value: datas.idcontents
              }
            ]
          };
          result.push(table2);
        }

        //mise à jour de la table gestion times

        result.push(table1);

        console.log("ligne", result);
      }
      resolv(result);
    });
  },
  /**
   * un tableau
   * @param [] cards
   */
  formCard: function(cards) {
    var results = [];
    for (const i in cards) {
      var card = cards[i];
      if (card.cards) {
        card.cards = this.formCard(card.cards);
      }
      results.push({
        ...card,
        open: false
      });
    }
    return results;
  },
  /**
   * Format les données pour la creation d'un nouveau project, taches, memos, à faire , bugs ...
   * @param datas Array
   * @param idc Number, id du contenu encours.
   */
  formatAddData: function(datas, idc = 0, level = 0) {
    console.log("formatAddData datas :", datas, "\n idc", idc);
    return new Promise(resolv => {
      var childstable = [];
      var state = parseInt(datas.status, 10);
      level = parseInt(level, 10);
      if (datas.date_depart_proposer.length && datas.date_fin_proposer) {
        var ddp = moment(
          datas.date_depart_proposer,
          "YYYY-MM-DD  HH:mm"
        ).unix();
        var dfp = moment(datas.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
        childstable.push({
          table: "gestion_project_times",
          fields: {
            date_depart_proposer: ddp,
            date_fin_proposer: dfp,
            status: state
          }
        });
      }
      childstable.push({
        table: "gestion_project_hierachie",
        fields: {
          idcontentsparent: idc,
          ordre: 0,
          level: level
        }
      });

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

        ligne.childstable = {
          colum_id_name: "idcontents",
          tables: childstable
        };
        result.push(ligne);
      }
      resolv(result);
    });
  },
  // Remplissage des champs pour l’édition d’un contenu
  fomatVal: function(result, postData) {
    return new Promise(resolv => {
      if (result.date_depart_proposer || result.date_fin_proposer) {
        console.log("val.date_depart_proposer ", result);
      }
      if (result.idcontents) {
        postData["idcontents"] = result.idcontents;
      }
      for (const i in postData) {
        if (result[i]) {
          if (i === "date_depart_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
            postData["heure_debut"] = moment.unix(result[i]).format("HH:mm");
          } else if (i === "date_fin_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
            postData["heure_fin"] = moment.unix(result[i]).format("HH:mm");
          } else postData[i] = result[i];
        }
      }

      resolv();
    });
  },
  // format data for deleted action
  formatDeleteData: function(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.titre) {
        var ligne = {
          table: "gestion_project_contents",
          fields: {}
        };
        ligne.action = "delete";
        if (datas.idcontents) {
          ligne.where = [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ];
        }
        ligne.childstable = {
          tables: [
            {
              table: "gestion_project_times",
              fields: {},
              action: "delete",
              where: [
                {
                  column: "idcontents",
                  value: datas.idcontents
                }
              ]
            },
            {
              table: "gestion_project_hierachie",
              fields: {},
              action: "delete",
              where: [
                {
                  column: "idcontents",
                  value: datas.idcontents
                }
              ]
            }
          ]
        };
        result.push(ligne);
        console.log("ligne", result);
      }
      resolv(result);
    });
  }
};
export default Utilities;
