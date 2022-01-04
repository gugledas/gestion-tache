((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[8],{

/***/ "1864":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/NewFacture.vue?vue&type=template&id=1bf42f60&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',[_c('CCol',[_c('CCard',[_c('CCardHeader',[_c('strong',[_vm._v("Édition facture N°: "+_vm._s(this.id))]),_c('div',{staticClass:"card-header-actions"},[_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Nouveau service'),expression:"'Nouveau service'"}],staticClass:"p-0 pl-1 pr-1 mr-3",attrs:{"color":"info"},on:{"click":function($event){_vm.colapse = !_vm.colapse}}},[_c('CIcon',{attrs:{"name":("cil-chevron-" + (_vm.colapse ? 'bottom' : 'top'))}})],1)],1)]),(_vm.colapse)?_c('div',[_c('CCardBody',[(!_vm.isLoading)?_c('div',{staticClass:"d-flex flex-wrap"},[_c('CCol',{attrs:{"sm":"6","md":"5"}},[_c('CInput',{attrs:{"placeholder":"libellé du service","wasValidated":_vm.wasValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.inputValidation,"label":" titre:"},model:{value:(_vm.invoiceData.titre),callback:function ($$v) {_vm.$set(_vm.invoiceData, "titre", $$v)},expression:"invoiceData.titre"}})],1),_c('CCol',{attrs:{"sm":"4","md":"3"}},[_c('CInput',{attrs:{"placeholder":"100.00","append":"$","label":" Coût","wasValidated":_vm.priceValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.priceValidation},model:{value:(_vm.invoiceData.cout),callback:function ($$v) {_vm.$set(_vm.invoiceData, "cout", $$v)},expression:"invoiceData.cout"}})],1),_c('CCol',{attrs:{"sm":"8","md":"6"}},[_c('CTextarea',{attrs:{"label":" description:","placeholder":"ajouter une description"},model:{value:(_vm.invoiceData.description),callback:function ($$v) {_vm.$set(_vm.invoiceData, "description", $$v)},expression:"invoiceData.description"}})],1)],1):_vm._e(),(_vm.isLoading)?_c('CRow',{attrs:{"alignHorizontal":"center"}},[_c('CCol',{staticClass:"p-3",attrs:{"sm":"3"}},[_c('CSpinner',{staticStyle:{"width":"4rem","height":"4rem"},attrs:{"color":"info","grow":""}})],1)],1):_vm._e()],1),_c('CCardFooter',[_c('CButton',{attrs:{"type":"submit","size":"sm","color":"primary"}},[_c('CIcon',{attrs:{"name":"cilCloudDownload"}}),_vm._v(" Exporter")],1),_c('CButton',{staticClass:"mx-3",attrs:{"type":"reset","size":"sm","color":_vm.checkForSave ? 'success' : 'light'},on:{"click":_vm.PostFactureList}},[_c('CIcon',{attrs:{"name":"cil-check-circle"}}),_vm._v(" Ajouter "),(_vm.spinnerSave)?_c('CSpinner',{staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"danger"}}):_vm._e()],1),_c('CButton',{staticClass:"mx-3",attrs:{"size":"sm","color":"dark"},on:{"click":function($event){_vm.hideFact = !_vm.hideFact}}},[_c('CIcon',{attrs:{"name":"cil-low-vision"}}),_vm._v(" Aperçue")],1)],1)],1):_vm._e()],1)],1)],1),_c('vue-html2pdf',{ref:"html2Pdf",attrs:{"show-layout":false,"float-layout":true,"enable-download":true,"preview-modal":true,"paginate-elements-by-height":1400,"filename":"hee hee","pdf-quality":2,"manual-pagination":false,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"800px"},on:{"progress":function($event){return _vm.onProgress($event)},"hasStartedGeneration":function($event){return _vm.hasStartedGeneration()},"hasGenerated":function($event){return _vm.hasGenerated($event)}}},[_c('section',{attrs:{"slot":"pdf-content"},slot:"pdf-content"},[_vm._v(" hello "),(_vm.hideFact)?_c('CRow',{attrs:{"alignHorizontal":"center"}},[_c('CCol',{attrs:{"col":"10"}},[_c('CCard',{staticClass:"facture shadow"},[_c('div',{staticClass:"facture__header"},[_c('CRow',{staticClass:"first-header text-center p-5 m-0",attrs:{"alignVertical":"center"}},[_c('CCol',[_c('img',{staticClass:"pr-2 mt-2",attrs:{"src":__webpack_require__("f840"),"height":"40","width":"150"}})]),_c('CCol',{staticClass:"display-inv"},[_vm._v(" FACTURE N°: "),_c('strong',[_vm._v(_vm._s(_vm.factureData.numero))])])],1),_c('CRow',{staticClass:"second-header m-0 text-center",attrs:{"alignVertical":"center"}},[_c('CCol',{staticClass:"bg-info pt-2"},[_c('p',[_vm._v(" Invoice # "),_c('strong',[_vm._v(_vm._s(_vm.factureData.numero))])])]),_c('CCol',{staticClass:"pt-2"},[_c('p',[_c('Strong',{staticClass:"px-2"},[_vm._v("Date:")]),_vm._v(" 01/02/2020")],1)])],1)],1),_c('CRow',{staticClass:"my-3",attrs:{"tag":"div"}},[_c('CCol',{staticClass:"facture__id p-3 d-flex ml-4 justify-content-start"},[_c('h5',[_vm._v("Invoice of :")]),_c('div',{staticClass:"ml-2"},[_c('h5',{staticClass:"text-uppercase"},[_vm._v(" "+_vm._s(_vm.societeInfoste.nom)+" ")]),_c('h6',[_vm._v(_vm._s(_vm.societeInfoste.adresse))]),_c('h6',[_vm._v("Tel: "+_vm._s(_vm.societeInfoste.phone))]),_c('h6',[_vm._v("site web: "+_vm._s(_vm.societeInfoste.siteweb))]),_c('h6',[_vm._v("Email: "+_vm._s(_vm.societeInfoste.email))]),_c('h6',[_vm._v("Émit par: "+_vm._s(_vm.infoSte.nom)+" "+_vm._s(_vm.infoSte.prenom))])])]),_c('CCol',{staticClass:"\n                  facture__id\n                  p-3\n                  d-flex\n                  mr-5\n                  pr-3\n                  justify-content-center\n                "},[_c('h5',[_vm._v("Invoice to :")]),_c('div',{staticClass:"ml-2"},[_c('h5',{staticClass:"text-uppercase"},[_vm._v(" "+_vm._s(_vm.societeInfoClient.nom)+" ")]),_c('h6',[_vm._v(_vm._s(_vm.clientInfo.nom)+" "+_vm._s(_vm.clientInfo.prenom))]),_c('h6',[_vm._v(_vm._s(_vm.societeInfoClient.adresse))]),_c('h6',[_vm._v("site web: "+_vm._s(_vm.societeInfoClient.siteweb))]),_c('h6',[_vm._v("Tel: "+_vm._s(_vm.societeInfoClient.phone))]),_c('h6',[_vm._v("Email: "+_vm._s(_vm.societeInfoClient.email))])])])],1),_c('CRow',{staticClass:"mb-2",attrs:{"alignHorizontal":"center","alignVertical":"center"}},[_c('CCol',{staticClass:"d-flex aligns-item-center ml-4",attrs:{"md":"11"}},[_vm._v(" OBJECT: "),_c('strong',{staticClass:"ml-3 m-0"},[_vm._v(" "+_vm._s(_vm.factureData.objet)+" ")])])],1),_c('CModal',{attrs:{"closeOnBackdrop":false,"color":"dark","show":_vm.editRow,"footer":false,"size":"lg"},on:{"update:show":function($event){_vm.editRow=$event}}},[_c('CRow',[_c('CCol',{attrs:{"sm":"7","lg":"5"}},[_c('CInput',{attrs:{"placeholder":"libellé du service","wasValidated":_vm.wasValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.inputValidation,"label":" titre:"},model:{value:(_vm.invoiceData.titre),callback:function ($$v) {_vm.$set(_vm.invoiceData, "titre", $$v)},expression:"invoiceData.titre"}})],1),_c('CCol',{attrs:{"sm":"6","lg":"3"}},[_c('CInput',{attrs:{"placeholder":"100.00","append":"$","label":" Coût","wasValidated":_vm.priceValidated,"isValid":_vm.priceValidation},model:{value:(_vm.invoiceData.cout),callback:function ($$v) {_vm.$set(_vm.invoiceData, "cout", $$v)},expression:"invoiceData.cout"}})],1)],1),_c('CRow',[_c('CCol',{attrs:{"sm":"8","lg":"6"}},[_c('CTextarea',{attrs:{"label":" description:","placeholder":"ajouter une description"},model:{value:(_vm.invoiceData.description),callback:function ($$v) {_vm.$set(_vm.invoiceData, "description", $$v)},expression:"invoiceData.description"}})],1)],1),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.editRow = false}}},[_vm._v(" Cancel ")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":_vm.checkForSave ? 'info' : 'light'},on:{"click":_vm.EditeFactureList}},[_vm._v(" Save "),(_vm.spinnerSave)?_c('CSpinner',{staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"warning"}}):_vm._e()],1),_c('CButton',{staticClass:"mx-1",attrs:{"color":"danger","size":"sm","variant":"ghost"},on:{"click":_vm.deleteFacturelist}},[_vm._v(" Supprimer "),(_vm.spinner)?_c('CSpinner',{staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"primary"}}):_vm._e()],1)],1)])],2),_c('CRow',{staticClass:"mb-2",attrs:{"alignHorizontal":"center"}},[_c('CCol',{attrs:{"md":"11"}},[_c('CDataTable',{attrs:{"striped":"","outlined":"","hover":"","loading":_vm.isLoading,"responsive":false,"items":_vm.factTable,"fields":_vm.facFields,"head-color":"light","clickableRows":true,"no-sorting":""},on:{"row-clicked":_vm.ligneClique},scopedSlots:_vm._u([{key:"total",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('Strong',[_vm._v(_vm._s(item.cout))])],1)}}],null,false,1043895145)},[_c('td',{attrs:{"slot":"Qte"},slot:"Qte"},[_c('Strong',[_vm._v(_vm._s(1))])],1)])],1)],1),_c('CRow',{staticClass:"mt-2",attrs:{"alignHorizontal":"center"}},[_c('CCol',{staticClass:"d-flex",attrs:{"col":"11"}},[_c('CCol',{attrs:{"col":"6"}},[_c('div',[_c('h5',[_vm._v("Payment Info:")]),_c('p',{staticClass:"m-0"},[_vm._v(" Account #: "),_c('strong',{staticClass:"ml-2"},[_vm._v(" 551 254 251 015")])]),_c('p',{staticClass:"m-0"},[_vm._v(" ACT Name: "),_c('strong',{staticClass:"ml-2"},[_vm._v(" Lorem Ipsum")])]),_c('p',{staticClass:"m-0"},[_vm._v(" Bank details:"),_c('strong',{staticClass:"ml-2"},[_vm._v(" Add Your bank Details ")])])])]),_c('CCol',{staticClass:"ml-5",attrs:{"col":"6"}},[_c('div',{staticClass:"\n                      d-flex\n                      justify-content-around\n                      bg-info\n                      mt-2\n                      text-white\n                      p-2\n                      mr-4\n                    "},[_c('h5',[_vm._v("Total:")]),_c('span',{staticClass:"ml-5 h5"},[_vm._v(_vm._s(_vm.TotalFacture)+" $")])])])],1)],1),_c('CRow',{staticClass:"mt-5 mb-4",attrs:{"alignHorizontal":"center"}},[_c('CCol',{staticClass:"d-flex mb-3",attrs:{"col":"11"}},[_c('CCol',{attrs:{"col":"6"}},[_c('h5',[_vm._v("Terms & conditions")]),_c('h6',{staticClass:"p-0 m-0"},[_vm._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate architecto cum aliquam aut ut? ")])]),_c('CCol',{staticClass:"pt-4 mt-5 text-center",attrs:{"col":"6"}},[_c('p',{staticClass:"m-0 p-0"},[_vm._v("______________________________")]),_c('h6',{staticClass:"mt-1"},[_vm._v("Authorised sign")])])],1)],1),_c('CRow',[_c('CCol',{attrs:{"col":"12"}},[_c('CCol',{staticClass:"bg-light p-0"},[_c('div',{staticClass:"\n                      d-flex\n                      justify-content-around\n                      bg-info\n                      mt-2\n                      text-white\n                      p-2\n                      col-6\n                    "},[_c('h5',[_vm._v("Thanks for your Business")])])])],1)],1)],1)],1)],1):_vm._e()],1)]),_c('div',[_c('CButton',{staticClass:"mx-3",attrs:{"size":"sm","color":"dark"},on:{"click":_vm.generateReport}},[_c('CIcon',{attrs:{"name":"cil-low-vision"}}),_vm._v(" Export to PDF ")],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/facture/NewFacture.vue?vue&type=template&id=1bf42f60&

// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/NewFacture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import VueHtml2pdf from "vue-html2pdf";

/* harmony default export */ var NewFacturevue_type_script_lang_js_ = ({
  name: "SHome",
  props: {
    id: {
      type: String,
      default: "2"
    }
  },
  components: {
    VueHtml2pdf: function VueHtml2pdf() {} //on doit trouver un autre module pour gerer les factures.

  },
  data: function data() {
    return {
      editRow: false,
      factTable: [],
      facFields: [{
        key: "Qte",
        label: "Quantité"
      }, {
        label: "Désignation ",
        key: "titre"
      }, {
        key: "cout",
        label: "Prix unitaire HT",
        _style: ""
      }, {
        label: "Prix total HT",
        key: "total"
      }],
      factureData: {
        objet: "",
        description: "",
        cout: "",
        idcontents: "",
        numero: ""
      },
      invoiceData: {
        idinvoicelist: "",
        idcontents: "",
        idinvoice: "",
        cout: "",
        description: "",
        titre: ""
      },
      clientInfo: {
        typeIsOk: false,
        nom: "",
        prenom: "",
        fonction: "",
        siteweb: "",
        email: "",
        adresse: "",
        phone: "",
        uid: "0",
        idsociete: ""
      },
      infoSte: {
        typeIsOk: false,
        nom: "",
        prenom: "",
        fonction: "",
        siteweb: "",
        email: "",
        adresse: "",
        phone: "",
        uid: "0",
        idsociete: ""
      },
      infoProjet: {
        created_at: "",
        idcontents: "",
        titre: "",
        type: "",
        uid: "",
        update_at: ""
      },
      societeInfoste: {
        idsociete: "",
        nom: "",
        siteweb: "",
        phone: "",
        email: "",
        adresse: ""
      },
      societeInfoClient: {
        idsociete: "",
        nom: "",
        siteweb: "",
        phone: "",
        email: "",
        adresse: ""
      },
      request: {},
      update: true,
      hideFact: true,
      isLoading: false,
      spinner: false,
      spinnerSave: false,
      wasValidated: false,
      //idvalidated: false,
      btnState: false,
      colapse: false,
      priceValidated: false
    };
  },
  mounted: function mounted() {
    this.LoadData();
    this.LoadFactureList();
  },
  watch: {
    invoiceData: {
      deep: true,
      handler: function handler() {
        this.invoiceData.idinvoice = this.id;

        if (this.infoProjet.idcontents) {
          this.invoiceData.idcontents = this.infoProjet.idcontents;
        }
      }
    }
  },
  computed: {
    checkForSave: function checkForSave() {
      if (this.wasValidated && this.priceValidated) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    TotalFacture: function TotalFacture() {
      var result = 0;

      if (this.factTable.length) {
        for (var i in this.factTable) {
          if (this.factTable[i].cout > 0) {
            var el = parseInt(this.factTable[i].cout, 10);
            result += el;
          }
        }
      }

      return result;
    }
  },
  methods: {
    generateReport: function generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    priceValidation: function priceValidation(val) {
      if (val != undefined) if (val.length < 1) {
        this.priceValidated = false;
        return false;
      } else {
        this.priceValidated = true;
        return true;
      }
    },
    setBtnState: function setBtnState(val) {
      this.btnState = val;
    },

    /*
    idValidation(val) {
      if (val != undefined)
        if (val.length < 1) {
          this.idvalidated = false;
          return false;
        } else {
          this.idvalidated = true;
          return true;
        }
    },
    /**/
    inputValidation: function inputValidation(val) {
      if (val == undefined) {
        return false;
      }

      if (val != undefined) if (val.length >= 3) {
        this.wasValidated = true;
        return true;
      } else {
        this.wasValidated = false;
        return false;
      }
    },
    EditeFactureList: function EditeFactureList() {
      this.PostFactureList(this.update);
      this.editRow = false;
    },
    ligneClique: function ligneClique(item) {
      this.invoiceData = item;
      this.editRow = true;
    },
    LoadData: function LoadData() {
      var _this = this;

      var oap = [{
        column: "numero",
        operator: "=",
        value: this.id
      }];
      SelectDb["a" /* default */].selectInvoice(oap).then(function (response) {
        _this.factureData = response[0];

        _this.LoadClient(response[0].idclients);

        _this.LoadSte(response[0].proprietaire);

        _this.LoadProjet(response[0].idcontents);
      });
    },
    LoadClient: function LoadClient(val) {
      var _this2 = this;

      var oap = [{
        column: "idclient",
        operator: "=",
        value: val
      }];
      SelectDb["a" /* default */].selectClients(oap).then(function (response) {
        _this2.clientInfo = response[0];

        if (response.length) {
          _this2.LoadSocieteClient(response[0].idsociete);
        }
      });
    },
    LoadSte: function LoadSte(val) {
      var _this3 = this;

      var oap = [{
        column: "idclient",
        operator: "=",
        value: val
      }];
      SelectDb["a" /* default */].selectClients(oap).then(function (response) {
        _this3.infoSte = response[0];

        if (response.length) {
          _this3.LoadSocieteInfo(response[0].idsociete);
        }
      });
    },
    LoadSocieteInfo: function LoadSocieteInfo(val) {
      var _this4 = this;

      var oap = [{
        column: "idsociete",
        operator: "=",
        value: val
      }];
      SelectDb["a" /* default */].selectSte(oap).then(function (response) {
        _this4.societeInfoste = response[0];
      });
    },
    LoadSocieteClient: function LoadSocieteClient(val) {
      var _this5 = this;

      var oap = [{
        column: "idsociete",
        operator: "=",
        value: val
      }];
      SelectDb["a" /* default */].selectSte(oap).then(function (response) {
        _this5.societeInfoClient = response[0];
      });
    },
    LoadProjet: function LoadProjet(val) {
      var _this6 = this;

      if (val) {
        var oap = [{
          column: "idcontents",
          operator: "=",
          value: val
        }];
        SelectDb["a" /* default */].selectProject(oap).then(function (response) {
          _this6.infoProjet = response[0];
        });
      }
    },
    PostFactureList: function PostFactureList(val) {
      var _this7 = this;

      if (this.btnState) {
        this.isloading = true;
        Utilities["a" /* default */].formatAddInvoiceList(this.invoiceData, val).then(function (reponse) {
          console.log("gestion_project_invoice_list : ", reponse);
          config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
            if (reponse.status) {
              _this7.request = reponse.data[0];

              _this7.LoadFactureList();

              _this7.invoiceData = {
                idinvoicelist: "",
                idcontents: "",
                idinvoice: "",
                cout: "",
                titre: "",
                description: ""
              };
            }

            _this7.isloading = false;
          }).catch(function (error) {
            console.log("error", error);
            this.isLoading = false;
            this.alertOk = true;
            this.alertText = "Erreur de sauvegarde";
            this.AlertColor = "danger";
            this.showInput = true;
          });
        });
      }
    },
    LoadFactureList: function LoadFactureList() {
      var _this8 = this;

      var oap = [{
        column: "idinvoice",
        operator: "=",
        value: this.id
      }];
      SelectDb["a" /* default */].selectFatureList(oap).then(function (response) {
        _this8.factTable = response;
      });
    },
    deleteFacturelist: function deleteFacturelist() {
      var _this9 = this;

      this.spinner = true;
      this.isloading = true;
      Utilities["a" /* default */].formatDeleteInvoiceList(this.invoiceData).then(function (reponse) {
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          if (reponse.status) {
            _this9.request = reponse.data[0];

            _this9.LoadFactureList();
          } else {
            console.log("error delete Facturelist", reponse.status);
          }

          _this9.isloading = false;
          _this9.spinner = false;
          _this9.editRow = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/facture/NewFacture.vue?vue&type=script&lang=js&
 /* harmony default export */ var facture_NewFacturevue_type_script_lang_js_ = (NewFacturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/App/facture/NewFacture.vue?vue&type=style&index=0&lang=scss&
var NewFacturevue_type_style_index_0_lang_scss_ = __webpack_require__("b965");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/facture/NewFacture.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  facture_NewFacturevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NewFacture = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7afe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b8a6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bc3a");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wbuutilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bfb1");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (_objectSpread(_objectSpread({}, wbuutilities__WEBPACK_IMPORTED_MODULE_1__[/* AjaxBasic */ "a"]), {}, {
  TestDomain: "http://gestiontaches.kksa",
  baseUrl: "http://gestion-taches-vps.habeuk.com",
  //baseUrl: "http://gestion-taches.kksa",
  ModeDebug: true,
  postOld: function postOld(request) {
    var _this = this;

    var datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new Promise(function (resolv) {
      var configs = {
        headers: {}
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_this.baseUrl + request, datas, configs).then(function (reponse) {
        //console.log("Config success : ", reponse);
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        resolv({
          status: false,
          error: error.response
        });
      });
    });
  },
  getOld: function getOld(request) {
    var _this2 = this;

    var datas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // console.log("ssss");
    return new Promise(function (resolv) {
      var configs = {
        headers: {}
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_this2.baseUrl + request, datas, configs).then(function (reponse) {
        console.log("Config get success : ", reponse);
        resolv({
          status: true,
          data: reponse.data,
          reponse: reponse
        });
      }).catch(function (error) {
        resolv({
          status: false,
          error: error.response
        });
      });
    });
  }
}));

/***/ }),

/***/ "b965":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7afe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d111":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c1df");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Utilities = {
  /**
   * Prepare les données pour la sauvagarde.
   */
  formatData: function formatData(datas) {
    return new Promise(function (resolv) {
      console.log("fdate : ", datas);
      var result = [];

      if (datas && datas.titre) {
        var ddp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_depart_proposer + " " + datas.heure_debut, "YYYY-MM-DD  HH:mm").unix();
        var dfp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_fin_proposer + " " + datas.heure_fin, "YYYY-MM-DD  HH:mm").unix(); //edition de la table contents

        var table1 = {
          table: "gestion_project_contents",
          fields: {
            text: datas.text,
            titre: datas.titre,
            type: datas.type,
            privaty: datas.privaty ? 1 : 0
          },
          action: "update"
        };

        if (datas.idcontents) {
          table1.where = [{
            column: "idcontents",
            value: datas.idcontents
          }];
        } //Edition de la table times


        if (datas.date_depart_proposer.length && datas.date_fin_proposer.length) {
          var table2 = {
            table: "gestion_project_times",
            fields: {
              status: datas.status,
              date_depart_proposer: ddp,
              date_fin_proposer: dfp
            },
            action: "update",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          };

          if (parseInt(datas.status) === 1 && (!datas.date_fin_reel || datas.date_fin_reel === "")) {
            table2.fields.date_fin_reel = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
          }

          result.push(table2);
        } //mise à jour de la table gestion times


        result.push(table1);
        console.log("ligne", result);
      }

      resolv(result);
    });
  },

  /**
   * preparation des données pour la mise à jour de la hiérachie
   */
  formatHierarchie: function formatHierarchie(datas, nid) {
    return new Promise(function (resolv) {
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
          where: [{
            column: "idcontents",
            value: datas.idcontents
          }]
        }; //mise à jour de la table gestion times

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
  formCard: function formCard(cards) {
    var results = [];

    for (var i in cards) {
      var card = cards[i];

      if (card.cards) {
        card.cards = this.formCard(card.cards);
      }

      results.push(_objectSpread(_objectSpread({}, card), {}, {
        open: false
      }));
    }

    return results;
  },

  /**
   * Format les données pour la creation d'un nouveau project, taches, memos, à faire , bugs ...
   * @param datas Array
   * @param idc Number, id du contenu encours.
   */
  formatAddData: function formatAddData(datas) {
    var idc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    //console.log("formatAddData datas :", datas, "\n idc", idc);
    return new Promise(function (resolv) {
      var childstable = [];
      var state = parseInt(datas.status, 10);
      level = parseInt(level, 10);

      if (datas.date_depart_proposer.length && datas.date_fin_proposer) {
        var ddp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_depart_proposer + " " + datas.heure_debut, "YYYY-MM-DD  HH:mm").unix();
        var dfp = moment__WEBPACK_IMPORTED_MODULE_0___default()(datas.date_fin_proposer + " " + datas.heure_fin, "YYYY-MM-DD  HH:mm").unix();
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
            type: datas.type,
            privaty: datas.privaty ? 1 : 0
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
  fomatVal: function fomatVal(result, postData) {
    return new Promise(function (resolv) {
      //console.log("postData : ", postData);

      /*
      if (result.date_depart_proposer || result.date_fin_proposer) {
        console.log("val.date_depart_proposer ", result);
      }
      /**/
      if (result.idcontents) {
        postData.idcontents = result.idcontents;
      }

      for (var i in postData) {
        if (result[i]) {
          if (i === "date_depart_proposer") {
            postData[i] = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_debut = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("HH:mm");
          } else if (i === "date_fin_proposer") {
            postData[i] = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("YYYY-MM-DD");
            postData.heure_fin = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(result[i]).format("HH:mm");
          } else if (i === "privaty") {
            postData[i] = result[i] == "0" ? 0 : 1;
          } else {
            postData[i] = result[i];
          }
        }
      }

      resolv();
    });
  },
  // format data for deleted action
  formatDeleteData: function formatDeleteData(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.titre) {
        var ligne = {
          table: "gestion_project_contents",
          fields: {}
        };
        ligne.action = "delete";

        if (datas.idcontents) {
          ligne.where = [{
            column: "idcontents",
            value: datas.idcontents
          }];
        }

        ligne.childstable = {
          tables: [{
            table: "gestion_project_times",
            fields: {},
            action: "delete",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          }, {
            table: "gestion_project_hierachie",
            fields: {},
            action: "delete",
            where: [{
              column: "idcontents",
              value: datas.idcontents
            }]
          }]
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
  formatDataClient: function formatDataClient(datas) {
    return new Promise(function (resolv) {
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
          table1.where = [{
            column: "idclient",
            value: datas.idclient
          }];
        } //mise à jour de la table gestion times


        result.push(table1);
      }

      resolv(result);
    });
  },

  /**
   * preparation des données pour l'ajout d'une nouvelle société
   */
  formatDataSte: function formatDataSte(datas) {
    return new Promise(function (resolv) {
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
          table1.where = [{
            column: "idsociete",
            value: datas.idsociete
          }];
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  // format data for deleted action of entitie client or societe
  formatDeleteClient: function formatDeleteClient(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas.idclient) {
        var ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [{
            column: "idclient",
            value: datas.idclient
          }]
        };
        result.push(ligne);
        console.log("ligne 1", result);
      } else if (datas.idsociete) {
        ligne = {
          table: "gestion_project_client",
          fields: {},
          action: "delete",
          where: [{
            column: "idsociete",
            value: datas.idsociete
          }]
        };
        var ligne1 = {
          table: "gestion_project_societe",
          fields: {},
          action: "delete",
          where: [{
            column: "idsociete",
            value: datas.idsociete
          }]
        };
        result.push(ligne);
        result.push(ligne1);
        console.log("ligne2", result);
      }

      resolv(result);
    });
  },
  // Format data for create new invoice
  formatAddInvoice: function formatAddInvoice(datas, update) {
    return new Promise(function (resolv) {
      var result = [];
      var cat = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
      var uat = moment__WEBPACK_IMPORTED_MODULE_0___default()().unix();
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
          table1.where = [{
            column: "numero",
            value: datas.numero
          }];
          table1.action = "update";
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  // suppression d’une facture
  formatDeleteInvoice: function formatDeleteInvoice(datas) {
    return new Promise(function (resolv) {
      var result = [];

      if (datas && datas.numero) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice",
          fields: {},
          action: "delete",
          where: [{
            column: "numero",
            value: datas.numero
          }]
        };
        var table2 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [{
            column: "idinvoice",
            value: datas.numero
          }]
        }; //mise à jour de la table societe

        result.push(table2);
        result.push(table1);
      }

      resolv(result);
    });
  },
  formatAddInvoiceList: function formatAddInvoiceList(datas, update) {
    return new Promise(function (resolv) {
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
          table1.where = [{
            column: "idinvoicelist",
            value: datas.idinvoicelist
          }];
          table1.action = "update";
        } //mise à jour de la table societe


        result.push(table1);
      }

      resolv(result);
    });
  },
  formatDeleteInvoiceList: function formatDeleteInvoiceList(datas) {
    return new Promise(function (resolv) {
      var result = [];
      console.log("fadin :", datas);

      if (datas && datas.idinvoicelist) {
        //edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [{
            column: "idinvoicelist",
            value: datas.idinvoicelist
          }]
        }; //mise à jour de la table societe

        result.push(table1);
      }

      resolv(result);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Utilities);

/***/ }),

/***/ "f0ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8a6");

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function selectDatas() {
    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      column: "c.type",
      operator: "=",
      value: "project"
    }];
    return new Promise(function (resolv) {
      var query = "";

      if (where.length) {
        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " ORDER BY  c.`idcontents` DESC";
      query += " limit 0,50 "; //console.log("query :: ", query);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/selectdatas", query).then(function (reponse) {
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectTypes: function selectTypes() {
    return new Promise(function (resolv) {
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get("/gestion-project/select/project-type").then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectProject: function selectProject(where) {
    return new Promise(function (resolv) {
      var query = "";

      if (where.length) {
        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-project", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectFatureList: function selectFatureList(where) {
    var _this = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this.formatStringTable("gestion_project_invoice_list");

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectInvoice: function selectInvoice(where) {
    var _this2 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this2.formatStringTable("gestion_project_invoice");

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectClients: function selectClients(where) {
    var _this3 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this3.formatStringTable("gestion_project_client");

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " limit 0,50 ";
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectSte: function selectSte(where) {
    var _this4 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this4.formatStringTable("gestion_project_societe");

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " limit 0,50 ";
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  selectClient: function selectClient(table) {
    var _this5 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this5.formatStringTable(table);
      query += " limit 0,50 ";
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query).then(function (reponse) {
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
  selectAll: function selectAll() {
    return new Promise(function (resolv) {
      var query = "";
      query += " c.idcontents is not NULL limit 0,50 ";
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-project", query).then(function (reponse) {
        // console.log("selectDatas : ", reponse);
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },
  SelectTacheEnours: function SelectTacheEnours() {
    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      column: "t.status",
      operator: "=",
      value: 2
    }];
    return new Promise(function (resolv) {
      var query = "";

      if (where.length) {
        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " ORDER BY  c.`idcontents` DESC ";
      query += " limit 0,50 "; //console.log("query :: ", query);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-tache-enours", query).then(function (reponse) {
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      });
    });
  },

  /**
   * Les tables sous drupal doivent etre encarée avec {}
   */
  formatStringTable: function formatStringTable(table) {
    return "{" + table + "}";
  }
});

/***/ }),

/***/ "f840":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/universe png.f19c3c40.png";

/***/ })

}]);
//# sourceMappingURL=gestionTache.umd.8.js.map