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
          datas.date_depart_proposer,
          "YYYY-MM-DD  HH:mm"
        ).unix();
        var dfp = moment(datas.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
        var ligne = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type,
            status: "0",
            date_depart_proposer: ddp,
            date_fin_proposer: dfp,
            price: ""
          }
        };
        ligne.action = "update";
        if (datas.idcontents) {
          ligne.where = [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ];
        }
        //mise à jour de la table gestion times

        result.push(ligne);
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
  fomatVal: function(result, postData) {
    return new Promise(resolv => {
      if (result.date_depart_proposer || result.date_fin_proposer) {
        console.log("val.date_depart_proposer ", result.date_depart_proposer);
        // result.date_depart_proposer = moment
        //   .unix(result.date_depart_proposer)
        //   .format("YYYY-MM-DD");
        // result.date_fin_proposer = moment
        //   .unix(result.date_fin_proposer)
        //   .format("YYYY-MM-DD");
      }
      if (result.idcontents) {
        postData["idcontents"] = result.idcontents;
      }
      for (const i in postData) {
        if (result[i]) {
          if (i === "date_depart_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
          } else if (i === "date_fin_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
          } else postData[i] = result[i];
        }
      }
      resolv(postData);
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
