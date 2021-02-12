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
  formatAddData: function(datas, idc) {
    return new Promise(resolv => {
      var ddp = moment(datas.startTime, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(datas.endTime, "YYYY-MM-DD  HH:mm").unix();
      var state = parseInt(datas.status, 10);
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
          tables: [
            {
              table: "gestion_project_times",
              fields: {
                date_depart_proposer: ddp,
                date_fin_proposer: dfp,
                status: state
              }
            },
            {
              table: "gestion_project_hierachie",
              fields: {
                idcontentsparent: idc,
                ordre: 0
              }
            }
          ]
        };

        result.push(ligne);
        console.log("ligne", result);
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
