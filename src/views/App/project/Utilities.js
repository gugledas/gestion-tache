import moment from "moment";
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
        ligne.action = "update";
        if (datas.idcontents) {
          ligne.where = [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ];
        }
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
      if (datas.startTime.length && datas.endTime) {
        var ddp = moment(datas.startTime, "YYYY-MM-DD  HH:mm").unix();
        var dfp = moment(datas.endTime, "YYYY-MM-DD  HH:mm").unix();
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
