((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[12],{

/***/ "b1c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/Clients.vue?vue&type=template&id=49c09b12&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('AddNew',{ref:"addClient",attrs:{"plusColor":"info","selectOption":_vm.selectOption},on:{"load-list-client":_vm.LoadClient}}),_c('CRow',[_c('CCol',{staticClass:"mt-3 mb-2"},[_c('ClientList',{attrs:{"title":'Liste des Clients',"items":_vm.itemsClient,"isLoading":_vm.cisloading,"tableFields":_vm.fieldsClient},on:{"data-to-edite":_vm.DataToEdit,"suppression-ok":_vm.LoadClient}})],1)],1),_c('AddNew',{ref:"addSte",attrs:{"plusColor":"dark","modalType":false,"modalTitle":"Nouvelle Société","selectOption":_vm.selectOption},on:{"load-list-ste":_vm.LoadSte}}),_c('CRow',[_c('CCol',{staticClass:"mt-3"},[_c('ClientList',{attrs:{"title":'Liste des Sociétés',"items":_vm.itemsSte,"isLoading":_vm.sisloading,"tableFields":_vm.fieldsSte},on:{"data-to-edite":_vm.DataToEditSte,"suppression-ok":_vm.LoadSte}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/Clients.vue?vue&type=template&id=49c09b12&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/ClientList.vue?vue&type=template&id=708da7ce&
var ClientListvue_type_template_id_708da7ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CCard',[_c('CCardHeader',[_vm._v(" "+_vm._s(_vm.title)+" "),_c('div',{staticClass:"card-header-actions"},[_c('a',{staticClass:"card-header-action",attrs:{"href":"#","rel":"noreferrer noopener","target":"_blank"}},[_c('small',{staticClass:"text-muted"})])])]),_c('CCardBody',{},[_c('CDataTable',{staticClass:"m-0 table-borderless",attrs:{"hover":"","responsive":false,"loading":_vm.isLoading,"items":_vm.items,"fields":_vm.tableFields,"header":false,"cleaner":"","table-filter":"","items-per-page-select":"","items-per-page":5,"pagination":""},scopedSlots:_vm._u([{key:"user",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',[_c('CLink',{staticClass:"text-decoration-none",attrs:{"to":{
                path: '#',
              }}},[_vm._v(" "+_vm._s(item.titre)+" ")])],1),_c('div',{staticClass:"small text-muted mt-1"},[_c('span',[[_vm._v("New")],(false)?undefined:_vm._e()],2),_vm._v(" | Crée le: "+_vm._s(item.created_at)+" ")])])}},{key:"usage",fn:function(ref){
              var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"clearfix"},[_c('div',{staticClass:"float-left"}),_c('div',{staticClass:"float-right"},[_c('small',{staticClass:"text-bold"},[_c('strong',[_vm._v("Updated: ")]),_vm._v(" "+_vm._s(item.update_at))])])])])}},{key:"activity",fn:function(ref){
              var item = ref.item;
return _c('td',{},[_c('CRow',{staticClass:"ml-4 d-flex justify-content-arround flex-nowrap"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm"},on:{"click":function($event){return _vm.EditEntity(item)}}},[_c('CIcon',{staticClass:"mr-1 text-info",attrs:{"name":"cilPencil"}})],1),_c('CButton',{staticClass:"mx-1 text-danger",attrs:{"color":"dark","variant":"ghost","shape":"pill","size":"sm"},on:{"click":function($event){return _vm.DeleteModalOn(item)}}},[_c('CIcon',{staticClass:"mr-1 text-danger",attrs:{"name":"cil-x-circle"}})],1)],1)],1)}}])})],1)],1),_c('CModal',{attrs:{"title":"Confirmer la suppression","color":"danger","show":_vm.deleteModal,"closeOnBackdrop":false},on:{"update:show":function($event){_vm.deleteModal=$event}}},[_vm._v(" êtes vous sûre de vouloir supprimer ce contenu? "),_c('br'),_c('small',{staticClass:"mt-2 text-center"},[_vm._v("Cette action est irréversible.")]),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.deleteModal = false}}},[_vm._v("Cancel")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":"danger","desabled":""},on:{"click":_vm.deleteEntity}},[_vm._v("Supprimer"),(_vm.loading)?_c('CSpinner',{staticClass:"ml-1",staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"primary"}}):_vm._e()],1)],1)])],2)],1)}
var ClientListvue_type_template_id_708da7ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/client/ClientList.vue?vue&type=template&id=708da7ce&

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/ClientList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ClientListvue_type_script_lang_js_ = ({
  props: {
    items: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    },
    title: {
      type: String,
      required: true,
      default: "title"
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    tableFields: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      tableFieldse: [{
        key: "nom",
        _style: "min-width:550px;",
        filter: false
      }, {
        key: "siteweb",
        _style: "min-width:200px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }],
      deleteModal: false,
      loading: false,
      id: ""
    };
  },
  methods: {
    //passage des données à la variables id pour le formatage avant suppresion
    DeleteModalOn: function DeleteModalOn(datas) {
      this.deleteModal = true;

      if (datas.idclient) {
        this.id = datas;
      } else {
        this.id = datas;
      }
    },
    //Supression d’un contenu
    deleteEntity: function deleteEntity() {
      var _this = this;

      this.loading = true;
      Utilities["a" /* default */].formatDeleteClient(this.id).then(function (reponse) {
        console.log(" deleteProject : ", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          if (reponse.status) {
            _this.$emit("suppression-ok");
          }

          _this.loading = false;
          if (_this.loading == false) _this.deleteModal = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    },
    //Envoie des données au parent clients.vue pour l'édition
    EditEntity: function EditEntity(datas) {
      this.$emit("data-to-edite", datas);
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/client/ClientList.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_ClientListvue_type_script_lang_js_ = (ClientListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/client/ClientList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  client_ClientListvue_type_script_lang_js_,
  ClientListvue_type_template_id_708da7ce_render,
  ClientListvue_type_template_id_708da7ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ClientList = (component.exports);
// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/AddNew.vue?vue&type=template&id=43620b8c&
var AddNewvue_type_template_id_43620b8c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',{staticClass:"ml-2 mt-n2 d-flex",attrs:{"alignVertical":"center"}},[_c('CButton',{attrs:{"size":"sm","color":_vm.plusColor,"shape":"pill"},on:{"click":_vm.modalAddOn}},[_c('CIcon',{staticClass:"text-white",attrs:{"name":"cilPlus","height":35,"size":"xl"}})],1),_c('h6',{staticClass:"ml-1 mt-1"},[_vm._v("Nouveau Client")])],1),_c('CModal',{attrs:{"size":"lg","title":_vm.modalTitle,"color":_vm.plusColor,"show":_vm.modalAdd,"footer":false},on:{"update:show":function($event){_vm.modalAdd=$event}}},[_c('PopUpClient',{ref:"pop",attrs:{"modalType":_vm.modalType,"btnState":_vm.btnStateAdd,"formValues":_vm.dataToEdit,"selectOption":_vm.selectOption},on:{"load-list-client":_vm.loadListClient,"load-list-ste":_vm.loadListSte}}),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.modalAdd = false}}},[_vm._v(" Cancel ")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":_vm.btnStateAdd.state ? _vm.plusColor : 'light'},on:{"click":_vm.PostNewClient}},[_vm._v(" Add ")])],1)])],2)],1)}
var AddNewvue_type_template_id_43620b8c_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/client/AddNew.vue?vue&type=template&id=43620b8c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/PopUpClient.vue?vue&type=template&id=67ba1f3a&scoped=true&lang=html&
var PopUpClientvue_type_template_id_67ba1f3a_scoped_true_lang_html_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"check-valid-form":_vm.checkForSave}},[_c('div',{staticClass:"pl-sm-2"},[_c('CRow',[_c('CCol',{attrs:{"sm":"6"}},[_c('CInput',{attrs:{"label":"Name:","placeholder":_vm.modalType ? 'Nom du client' : 'Nom de la société',"wasValidated":_vm.wasValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.inputValidation,"autocomplete":"name"},model:{value:(_vm.postData.nom),callback:function ($$v) {_vm.$set(_vm.postData, "nom", $$v)},expression:"postData.nom"}})],1),(_vm.modalType)?_c('CCol',{attrs:{"sm":"5"}},[_c('CInput',{attrs:{"label":"Prenom:","placeholder":"Prenom"},model:{value:(_vm.postData.prenom),callback:function ($$v) {_vm.$set(_vm.postData, "prenom", $$v)},expression:"postData.prenom"}})],1):_vm._e(),_c('CCol',{attrs:{"sm":"6"}},[_c('CInput',{attrs:{"label":"Adresse:","placeholder":"Adresse"},model:{value:(_vm.postData.adresse),callback:function ($$v) {_vm.$set(_vm.postData, "adresse", $$v)},expression:"postData.adresse"}})],1),(_vm.modalType)?_c('CCol',{attrs:{"sm":"3"}},[_c('CInput',{attrs:{"label":"Uid:","placeholder":"uid","type":"number"},model:{value:(_vm.postData.uid),callback:function ($$v) {_vm.$set(_vm.postData, "uid", $$v)},expression:"postData.uid"}})],1):_vm._e(),_c('CCol',{attrs:{"sm":"5"}},[_c('CInput',{attrs:{"label":"Phone:","placeholder":"Phone"},model:{value:(_vm.postData.phone),callback:function ($$v) {_vm.$set(_vm.postData, "phone", $$v)},expression:"postData.phone"}})],1),(!_vm.modalType)?_c('CCol',{attrs:{"sm":"6"}},[_c('CInput',{attrs:{"label":"Email:","placeholder":"Email","type":"email","required":"","wasValidated":_vm.eValidated,"validFeedback":"ok","invalidFeedback":"Veuiller entrer un email valide","isValid":_vm.emailValidation},model:{value:(_vm.postData.email),callback:function ($$v) {_vm.$set(_vm.postData, "email", $$v)},expression:"postData.email"}})],1):_vm._e(),(!_vm.modalType)?_c('CCol',{attrs:{"sm":"7"}},[_c('CInput',{attrs:{"label":"Site Web:","placeholder":"Site Web"},model:{value:(_vm.postData.siteweb),callback:function ($$v) {_vm.$set(_vm.postData, "siteweb", $$v)},expression:"postData.siteweb"}})],1):_vm._e(),(_vm.modalType)?_c('CCol',{attrs:{"sm":"7"}},[_c('CInput',{attrs:{"label":"Fonction:","placeholder":"fonction"},model:{value:(_vm.postData.fonction),callback:function ($$v) {_vm.$set(_vm.postData, "fonction", $$v)},expression:"postData.fonction"}})],1):_vm._e(),(_vm.modalType)?_c('CCol',{attrs:{"sm":"6"}},[_c('CSelect',{attrs:{"label":"Société:","options":_vm.selectOptionFormat,"placeholder":"Sélectionner la société du client","value":_vm.postData.idsociete},on:{"update:value":function($event){return _vm.$set(_vm.postData, "idsociete", $event)}},model:{value:(_vm.postData.idsociete),callback:function ($$v) {_vm.$set(_vm.postData, "idsociete", $$v)},expression:"postData.idsociete"}})],1):_vm._e()],1)],1)])}
var PopUpClientvue_type_template_id_67ba1f3a_scoped_true_lang_html_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/client/PopUpClient.vue?vue&type=template&id=67ba1f3a&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/PopUpClient.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import SelectDb from "../config/SelectDb";

 //import moment from "moment";

/* harmony default export */ var PopUpClientvue_type_script_lang_js_ = ({
  name: "PopUpContent",
  props: {
    formValues: {//required: true
    },
    btnState: {
      type: Object,
      default: function _default() {
        return {
          state: false
        };
      }
    },
    modalType: {
      type: Boolean,
      default: true
    },
    selectOption: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  components: {},
  data: function data() {
    return {
      postData: {
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
      wasValidated: null,
      showInputRaison: false,
      eValidated: null
    };
  },
  mounted: function mounted() {//this.LoadSte();
  },
  watch: {
    formValues: {
      deep: true,
      handler: function handler(val) {
        if (val.phone || val.nom || val.name) {
          this.postData = val;
        }
      }
    }
  },
  computed: {
    selectOptionFormat: function selectOptionFormat() {
      var result = [];

      if (this.selectOption.length) {
        for (var i in this.selectOption) {
          result.push({
            label: this.selectOption[i].nom,
            value: this.selectOption[i].idsociete
          });
        }
      }

      return result;
    },
    checkForSave: function checkForSave() {
      if (this.modalType) {
        if (this.wasValidated == true) {
          this.setBtnState(true);
          return true;
        } else {
          this.setBtnState(false);
          return false;
        }
      } else {
        if (this.wasValidated == true && this.eValidated == true) {
          this.setBtnState(true);
          return true;
        } else {
          this.setBtnState(false);
          return false;
        }
      }
    }
  },
  methods: {
    setBtnState: function setBtnState(val) {
      this.btnState.state = val;
    },
    inputValidation: function inputValidation(val) {
      if (val.length <= 4) {
        this.wasValidated = false;
        return false;
      } else {
        this.wasValidated = true;
        return true;
      }
    },
    emailValidation: function emailValidation(val) {
      var veri = function veri(val) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(val).toLowerCase());
      };

      if (veri(val)) {
        this.eValidated = true;
        return true;
      } else {
        this.eValidated = false;
        return false;
      }
    },
    EditProject: function EditProject() {
      var _this = this;

      Utilities["a" /* default */].formatClient(this.postData).then(function (reponse) {
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          if (reponse.status) {
            _this.$emit("edition-ok", reponse);
          }

          _this.isLoading = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    },
    PostNewClient: function PostNewClient() {
      var _this2 = this;

      if (this.modalType) {
        Utilities["a" /* default */].formatDataClient(this.postData).then(function (reponse) {
          config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
            if (reponse.status) {
              _this2.request = reponse.data[0];

              _this2.$emit("load-list-client");
            }

            _this2.isLoading = false;
            _this2.postData = {
              typeIsOk: false,
              nom: "",
              prenom: "",
              fonction: "",
              siteweb: "",
              email: "",
              adresse: "",
              phone: "",
              uid: "0"
            };
          }).catch(function (error) {
            console.log("PostNewClient error", error);
          });
        });
      } else {
        Utilities["a" /* default */].formatDataSte(this.postData).then(function (reponse) {
          config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
            if (reponse.status) {
              _this2.request = reponse.data[0];

              _this2.$emit("load-list-ste");
            }

            _this2.isLoading = false;
            _this2.postData = {
              typeIsOk: false,
              nom: "",
              prenom: "",
              fonction: "",
              siteweb: "",
              email: "",
              adresse: "",
              phone: "",
              uid: "0"
            };
          }).catch(function (error) {
            console.log("PostNew sté error", error);
          });
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/client/PopUpClient.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_PopUpClientvue_type_script_lang_js_ = (PopUpClientvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/client/PopUpClient.vue





/* normalize component */

var PopUpClient_component = Object(componentNormalizer["a" /* default */])(
  client_PopUpClientvue_type_script_lang_js_,
  PopUpClientvue_type_template_id_67ba1f3a_scoped_true_lang_html_render,
  PopUpClientvue_type_template_id_67ba1f3a_scoped_true_lang_html_staticRenderFns,
  false,
  null,
  "67ba1f3a",
  null
  
)

/* harmony default export */ var PopUpClient = (PopUpClient_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/client/AddNew.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var AddNewvue_type_script_lang_js_ = ({
  name: "SHome",
  props: {
    plusColor: {
      type: String,
      default: "info"
    },
    modalTitle: {
      type: String,
      default: "Nouveau client"
    },
    modalType: {
      type: Boolean,
      default: true
    },
    selectOption: {
      type: Array,
      default: function _default() {
        return {};
      }
    }
  },
  components: {
    PopUpClient: PopUpClient
  },
  data: function data() {
    return {
      modalAdd: false,
      btnStateAdd: {
        state: false
      },
      dataToEdit: {}
    };
  },
  methods: {
    loadStes: function loadStes() {
      this.$refs.pop.LoadSte();
      console.log("log");
    },
    modalAddOn: function modalAddOn(datas) {
      this.modalAdd = true;
      this.dataToEdit = datas;
    },
    EditeEntities: function EditeEntities() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.pop.EditProject();
      }
    },
    PostNewClient: function PostNewClient() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.pop.PostNewClient();
      }
    },
    loadListClient: function loadListClient() {
      this.$emit("load-list-client");
    },
    loadListSte: function loadListSte() {
      this.$emit("load-list-ste");
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/client/AddNew.vue?vue&type=script&lang=js&
 /* harmony default export */ var client_AddNewvue_type_script_lang_js_ = (AddNewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/client/AddNew.vue





/* normalize component */

var AddNew_component = Object(componentNormalizer["a" /* default */])(
  client_AddNewvue_type_script_lang_js_,
  AddNewvue_type_template_id_43620b8c_render,
  AddNewvue_type_template_id_43620b8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddNew = (AddNew_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/Clients.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Clientsvue_type_script_lang_js_ = ({
  name: "SHome",
  components: {
    AddNew: AddNew,
    ClientList: ClientList
  },
  data: function data() {
    return {
      itemsClient: [],
      itemsSte: [],
      client: "gestion_project_client",
      ste: "gestion_project_societe",
      cisloading: false,
      sisloading: false,
      dataToEdit: {},
      selectOption: [],
      fieldsClient: [{
        key: "nom",
        _style: "min-width:200px; ",
        filter: false
      }, {
        key: "adresse",
        _style: "min-width:200px;"
      }, {
        key: "phone",
        _style: "min-width:200px;"
      }, {
        key: "fonction",
        _style: "width:600px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }],
      fieldsSte: [{
        key: "nom",
        _style: "min-width:200px;",
        filter: false
      }, {
        key: "siteweb",
        _style: "min-width:200px;"
      }, {
        key: "email",
        _style: "width:600px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }]
    };
  },
  mounted: function mounted() {
    this.LoadClient();
    this.LoadSte();
    this.LoadStePopUp();
  },
  methods: {
    // Request for Loading sociéte  data on DB
    LoadStePopUp: function LoadStePopUp() {
      var _this = this;

      this.sisloading = true;
      SelectDb["a" /* default */].selectClient("gestion_project_societe").then(function (response) {
        _this.selectOption = response;
        _this.sisloading = false;
      });
    },
    //données pour l'édition d'une société
    DataToEditSte: function DataToEditSte(datas) {
      this.dataToEdit = datas;
      this.$refs.addSte.modalAddOn(datas);
    },
    //données pour l'édition d'une société
    DataToEdit: function DataToEdit(datas) {
      this.dataToEdit = datas;
      this.$refs.addClient.modalAddOn(datas);
    },
    //chargement des clients en BD
    LoadClient: function LoadClient() {
      var _this2 = this;

      this.cisloading = true;
      SelectDb["a" /* default */].selectClients([]).then(function (response) {
        _this2.itemsClient = response;
        _this2.cisloading = false;
      });
    },
    // Request for Loading sociéte  data on DB
    LoadSte: function LoadSte() {
      var _this3 = this;

      this.sisloading = true;
      SelectDb["a" /* default */].selectSte([]).then(function (response) {
        _this3.itemsSte = response;
        _this3.sisloading = false;

        _this3.LoadStePopUp();

        _this3.LoadClient();
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/Clients.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_Clientsvue_type_script_lang_js_ = (Clientsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/Clients.vue





/* normalize component */

var Clients_component = Object(componentNormalizer["a" /* default */])(
  App_Clientsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Clients = __webpack_exports__["default"] = (Clients_component.exports);

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
//# sourceMappingURL=gestionTache.umd.12.js.map