((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[5],{

/***/ "58ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5b75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/Factures.vue?vue&type=template&id=6ca8c3c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',{staticClass:"mr-5 mt-n2 d-flex mb-2",attrs:{"alignHorizontal":"end"}},[_c('PopUpFacture')],1),_c('CRow',[_c('CCol',[_c('FactureList')],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/Factures.vue?vue&type=template&id=6ca8c3c2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/FactureList.vue?vue&type=template&id=52b01dce&
var FactureListvue_type_template_id_52b01dce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CCard',[_c('CCardHeader',[_vm._v(" List des factures "),_c('div',{staticClass:"card-header-actions"},[_c('a',{staticClass:"card-header-action",attrs:{"href":"#","rel":"noreferrer noopener","target":"_blank"}},[_c('small',{staticClass:"text-muted"})])])]),_c('CCardBody',{},[_c('CDataTable',{staticClass:"m-0 table-borderless",attrs:{"hover":"","responsive":false,"loading":_vm.isLoading,"items":_vm.items,"fields":_vm.factureFields,"header":false,"cleaner":"","table-filter":"","items-per-page-select":"","items-per-page":5,"pagination":""},scopedSlots:_vm._u([{key:"objet",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',[_c('CLink',{staticClass:"text-decoration-none titre-fact",attrs:{"to":'/factures/' + item.numero}},[_vm._v(" "+_vm._s(item.objet)+" ")])],1),_c('div',{staticClass:"small text-muted mt-1"})])}},{key:"numero",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"numero-fact"},[_vm._v("N°: "+_vm._s(item.numero))])])}},{key:"cout",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"text-info"},[_vm._v(_vm._s(item.cout)+" $")])])}},{key:"activity",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('CRow',{staticClass:"ml-4 d-flex justify-content-arround flex-nowrap"},[_c('PopUpFacture',{attrs:{"add":false,"initData":item,"edition":_vm.edition,"update":true},on:{"addnew-ok":_vm.LoadFacture}}),_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Export to PDF'),expression:"'Export to PDF'"}],staticClass:"mx-1",attrs:{"color":"info","variant":"ghost","shape":"pill","size":"sm"}},[_c('CIcon',{staticClass:"mr-1 text-primary",attrs:{"name":"cilCloudDownload"}})],1),_c('CButton',{staticClass:"mx-1 text-danger",attrs:{"color":"dark","variant":"ghost","shape":"pill","size":"sm"},on:{"click":function($event){return _vm.DeleteModalOn(item)}}},[_c('CIcon',{staticClass:"mr-1 text-danger",attrs:{"name":"cil-x-circle"}})],1)],1)],1)}}])})],1)],1),_c('CModal',{attrs:{"title":'Confirmer la suppression de la facture N°: ' + _vm.dataDelete.numero,"color":"danger","show":_vm.deleteModal},on:{"update:show":function($event){_vm.deleteModal=$event}}},[_vm._v(" êtes vous sûre de vouloir supprimer ce contenu? "),_c('br'),_c('small',{staticClass:"mt-2 text-center"},[_vm._v("Cette action est irréversible.")]),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.deleteModal = false}}},[_vm._v("Cancel")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":"danger","desabled":""},on:{"click":_vm.DeleteFacture}},[_vm._v("Supprimer "),(_vm.spinner)?_c('CSpinner',{staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"primary"}}):_vm._e()],1)],1)])],2)],1)}
var FactureListvue_type_template_id_52b01dce_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/facture/FactureList.vue?vue&type=template&id=52b01dce&

// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/PopUpFacture.vue?vue&type=template&id=02ed3433&
var PopUpFacturevue_type_template_id_02ed3433_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CLink',{attrs:{"to":"#"}},[(_vm.add)?_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Nouvelle Facture'),expression:"'Nouvelle Facture'"}],attrs:{"size":"sm","color":"info","shape":"pill"},on:{"click":_vm.initNewFacture}},[_c('CIcon',{staticClass:"text-white",attrs:{"name":"cilPlus","height":35,"size":"xl"}})],1):_vm._e(),(!_vm.add)?_c('CButton',{staticClass:"mx-1",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm"},on:{"click":_vm.initNewFacture}},[_c('CIcon',{staticClass:"mr-1 text-info",attrs:{"name":"cilPencil"}})],1):_vm._e()],1),_c('CModal',{attrs:{"size":"lg","title":"Initialisation de la facture","color":"info","show":_vm.modalAdd.state,"footer":false,"closeOnBackdrop":false},on:{"update:show":function($event){return _vm.$set(_vm.modalAdd, "state", $event)}}},[(_vm.alertOk)?_c('CRow',{attrs:{"alignHorizontal":"center"}},[_c('CCol',{attrs:{"sm":"7"}},[_c('CAlert',{attrs:{"color":_vm.AlertColor,"closeButton":true}},[_vm._v(" "+_vm._s(_vm.alertText)+" ")])],1)],1):_vm._e(),(_vm.showInput)?_c('div',[_c('CRow',{attrs:{"tag":"div"}},[_c('CCol',{attrs:{"sm":"4"}},[_c('CInput',{attrs:{"label":"Numéro Facture:","placeholder":"420012"},model:{value:(_vm.initData.numero),callback:function ($$v) {_vm.$set(_vm.initData, "numero", $$v)},expression:"initData.numero"}})],1)],1),_c('CRow',{attrs:{"tag":"div"}},[_c('CCol',{attrs:{"sm":"6"}},[_c('CInput',{attrs:{"label":"Objet:","placeholder":"Renseigner l'objet de la facture"},model:{value:(_vm.initData.objet),callback:function ($$v) {_vm.$set(_vm.initData, "objet", $$v)},expression:"initData.objet"}})],1)],1),_c('CRow',{attrs:{"tag":"div"}},[_c('CCol',{attrs:{"sm":"5"}},[_c('CSelect',{attrs:{"label":"Nom du projet:","placeholder":"Choisir le projet lié","value":_vm.initData.idcontents,"options":_vm.selectProjectFormat},on:{"update:value":function($event){return _vm.$set(_vm.initData, "idcontents", $event)}},model:{value:(_vm.initData.idcontents),callback:function ($$v) {_vm.$set(_vm.initData, "idcontents", $$v)},expression:"initData.idcontents"}})],1)],1),_c('CRow',{attrs:{"tag":"div"}},[_c('CCol',{attrs:{"sm":"5"}},[_c('CSelect',{attrs:{"label":"Nom Entreprise:","placeholder":"Choisir l'entreprise","value":_vm.initData.proprietaire,"options":_vm.selectOptionFormat},on:{"update:value":function($event){return _vm.$set(_vm.initData, "proprietaire", $event)}},model:{value:(_vm.initData.proprietaire),callback:function ($$v) {_vm.$set(_vm.initData, "proprietaire", $$v)},expression:"initData.proprietaire"}})],1),_c('CCol',{attrs:{"sm":"5"}},[_c('CSelect',{attrs:{"label":"Nom client","value":_vm.initData.idclients,"placeholder":"Choose Client","options":_vm.selectOptionFormat},on:{"update:value":function($event){return _vm.$set(_vm.initData, "idclients", $event)}},model:{value:(_vm.initData.idclients),callback:function ($$v) {_vm.$set(_vm.initData, "idclients", $$v)},expression:"initData.idclients"}})],1)],1)],1):_vm._e(),(_vm.isLoading)?_c('CRow',{attrs:{"alignHorizontal":"center"}},[_c('CCol',{staticClass:"p-3",attrs:{"sm":"3"}},[_c('CSpinner',{staticStyle:{"width":"4rem","height":"4rem"},attrs:{"color":"info","grow":""}})],1)],1):_vm._e(),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.modalAdd.state = false}}},[_vm._v(" Cancel ")]),(!_vm.buttonService)?_c('CButton',{staticClass:"mx-1",attrs:{"color":"info"},on:{"click":_vm.PostNewInitFacture}},[_vm._v(" Créer ")]):_vm._e(),(_vm.buttonService)?_c('CLink',{attrs:{"to":'/factures/' + _vm.initData.numero}},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"warning"}},[_vm._v(" Ajouter services ")])],1):_vm._e()],1)])],2)],1)}
var PopUpFacturevue_type_template_id_02ed3433_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/facture/PopUpFacture.vue?vue&type=template&id=02ed3433&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/PopUpFacture.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var PopUpFacturevue_type_script_lang_js_ = ({
  name: "SHome",
  props: {
    initData: {
      type: Object,
      default: function _default() {
        return {
          numero: "",
          objet: "",
          idcontents: "",
          idclients: "",
          proprietaire: "",
          creaated: "",
          update_at: ""
        };
      }
    },
    add: {
      type: Boolean,
      default: true
    },
    modalAdd: {
      type: Object,
      default: function _default() {
        return {
          state: false
        };
      }
    },
    edition: {
      type: Boolean,
      default: false
    },
    update: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data: function data() {
    return {
      active: false,
      isLoading: false,
      showInput: true,
      alertOk: false,
      buttonService: false,
      alertText: "Création de telle projet ok",
      AlertColor: "success",
      itemClient: [],
      itemProject: [],
      nbFacture: "",
      timer: null
    };
  },
  mounted: function mounted() {
    this.LoadClient();
    this.LoadProject();
    this.loadNbFacture();
  },
  watch: {
    initData: {
      deep: true,
      handler: function handler() {
        if (!this.edition) {
          this.setNombre();
        }
      }
    }
  },
  computed: {
    //formattage du champ select pour la sélection du projet liée à la facture
    selectProjectFormat: function selectProjectFormat() {
      var result = [];

      if (this.itemProject.length) {
        for (var i in this.itemProject) {
          result.push({
            label: this.itemProject[i].titre,
            value: this.itemProject[i].idcontents
          });
        }
      }

      return result;
    },
    // formattage des données pour le champ select du client et de la société
    selectOptionFormat: function selectOptionFormat() {
      var result = [];

      if (this.itemClient.length) {
        for (var i in this.itemClient) {
          result.push({
            label: this.itemClient[i].nom,
            value: this.itemClient[i].idclient
          });
        }
      }

      return result;
    }
  },
  methods: {
    // renvoi le numéro formatté de la facture
    setNombre: function setNombre() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = setTimeout(function () {
        self.loadNbFacture();
      }, 2000);
      var result = "";
      var pro = "";
      var cli = "";

      if (this.initData.proprietaire.length) {
        pro = this.initData.proprietaire;
      }

      if (this.initData.idclients.length) {
        cli = this.initData.idclients;
      }

      result = this.nbFacture + "-" + pro + "-" + cli;
      console.log("foramat", result); // this.setNombre(result);

      this.initData.numero = result;
    },

    /**
     * Selectionne un client.
     * on ajoute un filtre.
     */
    loadNbFacture: function loadNbFacture() {
      var _this = this;

      SelectDb["a" /* default */].selectInvoice([]).then(function (response) {
        if (response.length) {
          _this.nbFacture = response.length;
        } else {
          _this.nbFacture = "0";
        }
      });
    },

    /**
     * Selectionne un client.
     * on ajoute un filtre.
     */
    LoadClient: function LoadClient() {
      var _this2 = this;

      SelectDb["a" /* default */].selectClients([]).then(function (response) {
        _this2.itemClient = response;
      });
    },

    /**
     * Selectionne un seul project.
     * on ajoute les informations pour le filtre.
     */
    LoadProject: function LoadProject() {
      var _this3 = this;

      console.log("this.initData.idcontents : ", this.initData.idcontents);

      if (this.initData.idcontents) {
        SelectDb["a" /* default */].selectDatas().then(function (response) {
          _this3.itemProject = response;
        });
      }
    },
    initNewFacture: function initNewFacture() {
      this.modalAdd.state = true;
    },
    PostNewInitFacture: function PostNewInitFacture() {
      var _this4 = this;

      this.isLoading = true;
      this.showInput = false;
      Utilities["a" /* default */].formatAddInvoice(this.initData, this.update).then(function (reponse) {
        //console.log("created", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          //console.log("reponse", reponse);
          if (reponse.status) {
            _this4.request = reponse.data[0];

            _this4.$emit("addnew-ok");

            _this4.alertOk = true;
            _this4.isLoading = false;

            if (_this4.edition) {
              _this4.alertText = "Mise à jour  de la facture" + " " + " n°:" + _this4.initData.numero + " " + "réussi";
            } else {
              _this4.alertText = "sauvegarde de la facture" + " " + " n°:" + _this4.initData.numero + " " + "réussi";
            }

            _this4.AlertColor = "success";
            _this4.buttonService = true;
          } else {
            //console.log("erroree", reponse.status);
            _this4.isLoading = false;
            _this4.alertOk = true;
            _this4.alertText = "Erreur de sauvegarde";
            _this4.AlertColor = "danger";
            _this4.showInput = true;
          }
        }).catch(function () {
          this.isLoading = false;
          this.alertOk = true;
          this.alertText = "Erreur de sauvegarde";
          this.AlertColor = "danger";
          this.showInput = true;
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/facture/PopUpFacture.vue?vue&type=script&lang=js&
 /* harmony default export */ var facture_PopUpFacturevue_type_script_lang_js_ = (PopUpFacturevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/App/facture/PopUpFacture.vue?vue&type=style&index=0&lang=scss&
var PopUpFacturevue_type_style_index_0_lang_scss_ = __webpack_require__("a35f");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/facture/PopUpFacture.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  facture_PopUpFacturevue_type_script_lang_js_,
  PopUpFacturevue_type_template_id_02ed3433_render,
  PopUpFacturevue_type_template_id_02ed3433_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PopUpFacture = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/facture/FactureList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var FactureListvue_type_script_lang_js_ = ({
  name: "SHome",
  components: {
    PopUpFacture: PopUpFacture
  },
  data: function data() {
    return {
      items: [],
      factureFields: [{
        key: "numero",
        label: "N°",
        _style: "max-width:50px;"
      }, {
        key: "objet",
        _style: "min-width:200px; ",
        filter: false
      }, {
        key: "activity"
      }],
      isLoading: true,
      deleteModal: false,
      edition: true,
      dataDelete: {},
      spinner: false
    };
  },
  mounted: function mounted() {
    this.LoadFacture();
  },
  methods: {
    DeleteModalOn: function DeleteModalOn(val) {
      this.dataDelete = val;
      this.deleteModal = true;
    },
    DeleteFacture: function DeleteFacture() {
      var _this = this;

      this.spinner = true;
      this.isloading = true;
      Utilities["a" /* default */].formatDeleteInvoice(this.dataDelete).then(function (reponse) {
        console.log("delete facture", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          console.log("reponse delete", reponse);

          if (reponse.status) {
            _this.request = reponse.data[0];

            _this.$emit("addnew-ok");

            _this.LoadFacture();
          } else {
            console.log("erroree", reponse.status);
          }

          _this.isloading = true;
          _this.deleteModal = false;
          _this.spinner = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    },
    LoadFacture: function LoadFacture() {
      var _this2 = this;

      this.isLoading = true;
      SelectDb["a" /* default */].selectInvoice([]).then(function (response) {
        _this2.items = response;
        _this2.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/facture/FactureList.vue?vue&type=script&lang=js&
 /* harmony default export */ var facture_FactureListvue_type_script_lang_js_ = (FactureListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/App/facture/FactureList.vue?vue&type=style&index=0&lang=scss&
var FactureListvue_type_style_index_0_lang_scss_ = __webpack_require__("e0d4");

// CONCATENATED MODULE: ./src/views/App/facture/FactureList.vue






/* normalize component */

var FactureList_component = Object(componentNormalizer["a" /* default */])(
  facture_FactureListvue_type_script_lang_js_,
  FactureListvue_type_template_id_52b01dce_render,
  FactureListvue_type_template_id_52b01dce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FactureList = (FactureList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/Factures.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//import SelectDb from "./config/SelectDb";
//import Utilities from "./project/Utilities.js";
 //import config from "./config/config";


/* harmony default export */ var Facturesvue_type_script_lang_js_ = ({
  name: "SHome",
  components: {
    FactureList: FactureList,
    PopUpFacture: PopUpFacture
  },
  data: function data() {
    return {
      modalAdd: false,
      active: false,
      isLoading: false,
      showInput: true,
      alertOk: false,
      buttonService: false,
      alertText: "Création de telle projet ok",
      AlertColor: "success",
      itemClient: [],
      itemProject: [],
      nbFacture: "",
      initData: {
        numero: "",
        objet: "",
        idcontents: "",
        idclients: "",
        proprietaire: "",
        creaated: "",
        update_at: ""
      },
      timer: null
    };
  },
  mounted: function mounted() {},
  watch: {},
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/views/App/Factures.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_Facturesvue_type_script_lang_js_ = (Facturesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/Factures.vue





/* normalize component */

var Factures_component = Object(componentNormalizer["a" /* default */])(
  App_Facturesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Factures = __webpack_exports__["default"] = (Factures_component.exports);

/***/ }),

/***/ "a35f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a7ca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpFacture_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a7ca":
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
          },
          action: "insert"
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
        } // mise à jour de la table societe


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
        // Edition de la table contents
        var table1 = {
          table: "gestion_project_invoice_list",
          fields: {},
          action: "delete",
          where: [{
            column: "idinvoicelist",
            value: datas.idinvoicelist
          }]
        }; // Mise à jour de la table societe

        result.push(table1);
      }

      resolv(result);
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Utilities);

/***/ }),

/***/ "e0d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactureList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("58ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactureList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FactureList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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
      query += " c.idcontents is not NULL order by c.update_at DESC limit 0,30 ";
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
      query += " limit 0,20 "; //console.log("query :: ", query);

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

/***/ })

}]);
//# sourceMappingURL=gestionTache.common.5.js.map