import moment from "moment";
const Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  formatData: function(datas) {
    return new Promise(resolv => {
      //console.log("fdate : ", datas);
      var result = [];
      if (datas && datas.titre) {
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
          if (
            parseInt(datas.status) === 1 &&
            (!datas.date_fin_reel || datas.date_fin_reel === "")
          ) {
            table2.fields.date_fin_reel = moment().unix();
          }
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
   * preparation des données pour la mise à jour de la hiérachie
   */
  formatHierarchie: function(datas, nid) {
    return new Promise(resolv => {
      console.log("fdate : ", nid);
      var result = [];
      if (datas && datas.titre) {
        //Edition de la table times

        var table3 = {
          table: "gestion_project_hierachie",
          fields: {
            idcontentsparent: nid.id,
            idcontents: datas.idcontents,
            ordre: nid.ordre
          },
          action: "update",
          where: [
            {
              column: "idcontents",
              value: datas.idcontents
            }
          ]
        };
        //mise à jour de la table gestion times
        result.push(table3);

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
    //console.log("formatAddData datas :", datas, "\n idc", idc);
    return new Promise(resolv => {
      var childstable = [];
      var state = parseInt(datas.status, 10);
      level = parseInt(level, 10);
      if (datas.date_depart_proposer.length && datas.date_fin_proposer) {
        var ddp = moment(
          datas.date_depart_proposer + " " + datas.heure_debut,
          "YYYY-MM-DD  HH:mm"
        ).unix();
        var dfp = moment(
          datas.date_fin_proposer + " " + datas.heure_fin,
          "YYYY-MM-DD  HH:mm"
        ).unix();
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
  // Remplissage des champs pour l’édition d’un contenu du pop-up avec les contenus à éditer
  fomatVal: function(result, postData) {
    return new Promise(resolv => {
      /*
      if (result.date_depart_proposer || result.date_fin_proposer) {
        console.log("val.date_depart_proposer ", result);
      }
      /**/
      if (result.idcontents) {
        postData.idcontents = result.idcontents;
      }
      for (const i in postData) {
        if (result[i]) {
          if (i === "date_depart_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_debut = moment.unix(result[i]).format("HH:mm");
          } else if (i === "date_fin_proposer") {
            postData[i] = moment.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_fin = moment.unix(result[i]).format("HH:mm");
          } else {
            postData[i] = result[i];
          }
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
  },

  //client and societé format

  /**
   * preparation des données pour l'ajout d'un nouveau client
   */
  formatDataClient: function(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.nom) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_client",
          fields: {
            nom: datas.nom,
            uid: datas.uid,
            prenom: datas.prenom,
            phone: datas.phone,
            adresse: datas.adresse,
            fonction: datas.fonction,
            idsociete: datas.idsociete
          },
          action: "update"
        };

        if (datas.idclient) {
          table1.where = [
            {
              column: "idclient",
              value: datas.idclient
            }
          ];
        }

        //mise à jour de la table gestion times

        result.push(table1);
      }
      resolv(result);
    });
  },

  /**
   * preparation des données pour l'ajout d'une nouvelle société
   */
  formatDataSte: function(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.nom) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_societe",
          fields: {
            nom: datas.nom,
            email: datas.email,
            phone: datas.phone,
            adresse: datas.adresse,
            siteweb: datas.siteweb
          },
          action: "update"
        };

        if (datas.idsociete) {
          table1.where = [
            {
              column: "idsociete",
              value: datas.idsociete
            }
          ];
        }

        //mise à jour de la table societe

        result.push(table1);
      }
      resolv(result);
    });
  },

  // format data for deleted action of entitie client or societe
  formatDeleteClient: function(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas.idclient) {
        var ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [
            {
              column: "idclient",
              value: datas.idclient
            }
          ]
        };

        result.push(ligne);
        console.log("ligne 1", result);
      } else if (datas.idsociete) {
        ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [
            {
              column: "idsociete",
              value: datas.idsociete
            }
          ]
        };
        var ligne1 = {
          table: "gestion_project_societe",
          fields: {},
          action: "delete",
          where: [
            {
              column: "idsociete",
              value: datas.idsociete
            }
          ]
        };
        result.push(ligne);
        result.push(ligne1);
        console.log("ligne2", result);
      }
      resolv(result);
    });
  },

  // Format data for create new invoice
  formatAddInvoice: function(datas, update) {
    return new Promise(resolv => {
      var result = [];
      var cat = moment().unix();
      var uat = moment().unix();
      console.log("fadin :", datas);
      if (datas && datas.numero) {
        // Edition de la table contents.
        var table1 = {
          table: "gestion_project_invoice",
          fields: {
            numero: datas.numero,
            idcontents: datas.idcontents !== "" ? datas.idcontents : null,
            idclients: datas.idclients,
            objet: datas.objet,
            creaated: cat,
            proprietaire: datas.proprietaire,
            updated: uat
          }
        };
        if (update == true) {
          table1.where = [
            {
              column: "numero",
              value: datas.numero
            }
          ];
          table1.action = "update";
        }

        //mise à jour de la table societe

        result.push(table1);
      }
      resolv(result);
    });
  },

  // suppression d’une facture

  formatDeleteInvoice(datas) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.numero) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice",
          fields: {},
          action: "delete",
          where: [
            {
              column: "numero",
              value: datas.numero
            }
          ]
        };
        var table2 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [
            {
              column: "idinvoice",
              value: datas.numero
            }
          ]
        };
        //mise à jour de la table societe
        result.push(table2);
        result.push(table1);
      }
      resolv(result);
    });
  },

  formatAddInvoiceList: function(datas, update) {
    return new Promise(resolv => {
      var result = [];
      if (datas && datas.titre) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {
            titre: datas.titre,
            idcontents: datas.idcontents !== "" ? datas.idcontents : null,
            description: datas.description,
            cout: datas.cout,
            idinvoice: datas.idinvoice
          }
        };
        if (update == true) {
          table1.where = [
            {
              column: "idinvoicelist",
              value: datas.idinvoicelist
            }
          ];
          table1.action = "update";
        }
        //mise à jour de la table societe

        result.push(table1);
      }
      resolv(result);
    });
  },
  formatDeleteInvoiceList(datas) {
    return new Promise(resolv => {
      var result = [];
      console.log("fadin :", datas);
      if (datas && datas.idinvoicelist) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [
            {
              column: "idinvoicelist",
              value: datas.idinvoicelist
            }
          ]
        };

        //mise à jour de la table societe

        result.push(table1);
      }
      resolv(result);
    });
  }
};
export default Utilities;
