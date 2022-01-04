((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[2],{

/***/ "2a5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/PopUpContent.vue?vue&type=template&id=494c831b&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"check-valid-form":_vm.checkForSave}},[_c('div',[_c('CRow',{staticClass:"form-group",attrs:{"gutters":false}},[_c('br'),_c('CCol',{attrs:{"sm":"3"}},[_c('p',[_vm._v("Choisir un type:")])]),_c('CCol',{attrs:{"sm":"9"}},[_c('CInputRadioGroup',{attrs:{"options":_vm.options,"checked":_vm.postData.type,"custom":"","inline":""},on:{"update:checked":function($event){return _vm.$set(_vm.postData, "type", $event)}}}),(_vm.postData.type.length < 2)?_c('small',{staticClass:"text-danger"},[_vm._v(" Ce champ est requis ")]):_vm._e()],1)],1)],1),_c('hr'),_c('div',{staticClass:"pl-sm-2"},[(_vm.postData.type !== 'memos' && _vm.postData.date_fin_reel === '')?_c('CRow',{staticClass:"form-group",attrs:{"gutters":false}},[_c('CCol',{attrs:{"sm":"2"}},[_c('p',[_vm._v("Statut:")])]),_c('CCol',{attrs:{"sm":"10"}},[_c('CInputRadioGroup',{attrs:{"options":_vm.statusOpt,"checked":_vm.postData.status,"custom":"","inline":""},on:{"update:checked":function($event){return _vm.$set(_vm.postData, "status", $event)}}})],1),(_vm.showInputRaison)?_c('CCol',{attrs:{"sm":"8","md":"7"}},[_c('CTextarea',{attrs:{"label":"Raison:","type":"textarea","horizontal":"","placeholder":"writes something...","rows":"2","description":"Une description de la raison du changement de status"},model:{value:(_vm.postData.raison),callback:function ($$v) {_vm.$set(_vm.postData, "raison", $$v)},expression:"postData.raison"}})],1):_vm._e()],1):_vm._e(),(_vm.postData.type !== 'memos')?_c('CRow',[_c('CCol',{attrs:{"col":"12","lg":"6"}},[_c('CRow',{},[_c('CInput',{staticClass:"col-10 col-sm-7",attrs:{"label":"Debut:","type":"date","readonly":_vm.postData.date_fin_reel > 0 ? true : false,"horizontal":""},model:{value:(_vm.postData.date_depart_proposer),callback:function ($$v) {_vm.$set(_vm.postData, "date_depart_proposer", $$v)},expression:"postData.date_depart_proposer"}}),_c('CInput',{staticClass:"col-8 ml-sm-0 pl-sm-0 col-sm-5",attrs:{"readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"time","horizontal":""},model:{value:(_vm.postData.heure_debut),callback:function ($$v) {_vm.$set(_vm.postData, "heure_debut", $$v)},expression:"postData.heure_debut"}})],1)],1),_c('CCol',{attrs:{"col":"10","lg":"6"}},[_c('CRow',{},[_c('CInput',{staticClass:"col-10 col-sm-7",attrs:{"label":"Fin:","readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"date","horizontal":""},model:{value:(_vm.postData.date_fin_proposer),callback:function ($$v) {_vm.$set(_vm.postData, "date_fin_proposer", $$v)},expression:"postData.date_fin_proposer"}}),_c('CInput',{staticClass:"col-8 ml-sm-0 pl-sm-0 col-sm-5",attrs:{"readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"time","horizontal":""},model:{value:(_vm.postData.heure_fin),callback:function ($$v) {_vm.$set(_vm.postData, "heure_fin", $$v)},expression:"postData.heure_fin"}})],1)],1)],1):_vm._e(),_c('CRow',[_c('CCol',{attrs:{"sm":"10"}},[_c('div',{staticClass:"form-group "},[_vm._v(" Contenu privée ?: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.postData.privaty),expression:"postData.privaty"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.postData.privaty)?_vm._i(_vm.postData.privaty,null)>-1:(_vm.postData.privaty)},on:{"change":function($event){var $$a=_vm.postData.privaty,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.postData, "privaty", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.postData, "privaty", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.postData, "privaty", $$c)}}}})])]),_c('CCol',{attrs:{"sm":"7"}},[_c('CInput',{attrs:{"label":"Title:","placeholder":"Entrez un titre","wasValidated":_vm.wasValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.inputValidation},model:{value:(_vm.postData.titre),callback:function ($$v) {_vm.$set(_vm.postData, "titre", $$v)},expression:"postData.titre"}})],1),(_vm.postData.type == 'project')?_c('CCol',{attrs:{"sm":"5"}},[_c('CInput',{attrs:{"label":"Nom du Client:","placeholder":"Select or add new Client"},model:{value:(_vm.postData.clientName),callback:function ($$v) {_vm.$set(_vm.postData, "clientName", $$v)},expression:"postData.clientName"}})],1):_vm._e()],1),_c('CRow',[_c('CCol',{attrs:{"sm":"12"}},[_c('label',[_vm._v("Description:")]),_c('ckeditor',{attrs:{"config":_vm.editorConfig},on:{"namespaceloaded":_vm.onNamespaceLoaded},model:{value:(_vm.postData.text),callback:function ($$v) {_vm.$set(_vm.postData, "text", $$v)},expression:"postData.text"}})],1)],1),(_vm.postData.type == 'project')?_c('CRow',[_c('CCol',{attrs:{"col":"8","lg":"4"}},[_c('CInput',{attrs:{"label":"Estimation du coût:","append":".00","description":"montant","prepend":"$"},model:{value:(_vm.postData.price),callback:function ($$v) {_vm.$set(_vm.postData, "price", $$v)},expression:"postData.price"}})],1)],1):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/PopUpContent.vue?vue&type=template&id=494c831b&scoped=true&lang=html&

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__("25ae");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/views/App/config/config.js
var config = __webpack_require__("b8a6");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/views/App/project/ProjectOptionsType.js
var ProjectOptionsType = __webpack_require__("f9cf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/PopUpContent.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var PopUpContentvue_type_script_lang_js_ = ({
  name: "PopUpContent",
  props: {
    formValues: {
      type: [Object],
      required: true
    },
    btnState: {
      type: Object,
      default: function _default() {
        return {
          state: false
        };
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  components: {
    ckeditor: ckeditor_default.a.component
  },
  data: function data() {
    return {
      postData: {
        typeIsOk: false,
        type: "project",
        status: "0",
        date_depart_proposer: "",
        date_fin_proposer: "",
        date_fin_reel: "",
        temps_pause: "",
        raison: "",
        heure_debut: "",
        heure_fin: "",
        clientName: "",
        titre: "",
        price: "",
        text: "",
        privaty: true
      },
      fHeure: "",
      dHeure: "",
      wasValidated: null,
      showInputRaison: false,
      editorData: "",
      warningModal: false,
      extraPlugins: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        contentsCss: " @import '" + config["a" /* default */].baseUrl + "/modules/custom/gestion_tache/files/gestionTache.css'; body{margin:1em !important; background: #FFF;}",
        on: {
          instanceReady: function instanceReady() {
            // Output paragraphs as <p>Text</p>.
            this.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            this.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      },
      options: [// { value: "project", label: "Projet" },
        // { value: "tache", label: "Tâche" },
        // { value: "memos", label: "Mémos" }
      ],
      statusOpt: [{
        value: "0",
        label: "New"
      }, {
        value: "2",
        label: "Encours"
      }, {
        value: "1",
        label: "Terminé"
      }, {
        value: "3",
        label: "Annulé"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    ProjectOptionsType["a" /* default */].loadType().then(function (reponse) {
      _this.options = reponse;
    });
  },
  watch: {
    formValues: {
      deep: true,
      handler: function handler(val) {
        //console.log("val : ", val);
        Utilities["a" /* default */].fomatVal(val, this.postData).then(function () {}); //console.log("result :", this.postData, this.fHeure);
        //console.log("debut heure : ", this.dHeure);
      }
    }
  },
  computed: {
    dureeProjet: function dureeProjet() {
      var el;

      if (this.formValues.date_depart_proposer && this.formValues.date_fin_proposer) {
        el = this.formValues.date_fin_proposer - this.formValues.date_depart_proposer; // var ss = moment.unix(this.formValues.date_fin_proposer);
        // var tt = moment.unix(this.formValues.date_depart_proposer);
        // var re = ss.diff(tt, "minutes", true);
        // console.log("re", re, ss, tt);
      }

      return el;
    },
    tarara: function tarara() {
      var date = this.postData.date_depart_proposer + " " + this.dHeure;
      var val = moment_default()(date, "YYYY-MM-DD HH:mm").unix();
      var lello = moment_default.a.unix(val).format("HH:mm");
      var tal = [];
      tal.push(val);
      tal.push(lello);
      return tal;
    },
    checkForSave: function checkForSave() {
      if (this.wasValidated == true && this.postData.type.length > 2) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    ser: function ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(function (block) {
        lib_default.a.highlightBlock(block);
      });
      return newDiv.outerHTML;
    },
    editorConfig: function editorConfig() {
      var extraPlugins = "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";

      if (!window.location.host.includes("localhost--")) {
        return _objectSpread({
          extraPlugins: extraPlugins + ",quickuploader"
        }, this.preEditorConfig);
      } else {
        return _objectSpread({
          extraPlugins: extraPlugins
        }, this.preEditorConfig);
      }
    },
    optionsTache: function optionsTache() {
      var rs = [];

      var _iterator = _createForOfIteratorHelper(this.options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;

          if (i.value == "project") {//console.log("iii :");
          } else {
            rs.push(i);
          }
        } //console.log("rs", rs);

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return rs;
    }
  },
  methods: {
    onNamespaceLoaded: function onNamespaceLoaded(CKEDITOR) {
      // Add external `placeholder` plugin which will be available for each
      // editor instance on the page.
      moment_default.a;
      CKEDITOR.plugins.addExternal("quickuploader", config["a" /* default */].baseUrl + "/libraries/quickuploader/plugin.js?v=" + moment_default()().unix());
      /**/

      CKEDITOR.config.allowedContent = true;
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      CKEDITOR.config.quickuploaderUploadUrl = config["a" /* default */].baseUrl; // CKEDITOR.config.entities_processNumerical = 'force';

      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    },
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
    EventShowInput: function EventShowInput() {//console.log("object");
    },
    TimeNow: function TimeNow() {
      var today = moment_default()().format("YYYY-MM-DD");
      var hours = moment_default()().format("HH:mm");
      this.postData.date_depart_proposer = today;
      this.postData.heure_debut = hours;
      this.postData.date_fin_proposer = today;
      this.postData.heure_fin = hours; //console.log(today, hours);
    },
    changeType: function changeType() {
      this.options = this.optionsTache; //console.log("files : ", this.options);

      this.postData.type = "tache";
    },
    EditProject: function EditProject() {
      var _this2 = this;

      Utilities["a" /* default */].formatData(this.postData, this.dHeure, this.fHeure).then(function (reponse) {
        //console.log(" EditProject : ", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          if (reponse.status) {
            //console.log("data after edit :", reponse);
            _this2.$emit("edition-ok", reponse);
          }

          _this2.isLoading = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    },
    FormatTime: function FormatTime(id) {
      var data = this.postData;
      var ddp = moment_default()(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment_default()(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix(); //var status = data.status;

      var rest = [];
      rest.push({
        idcontents: id,
        date_depart_proposer: ddp,
        date_fin_proposer: dfp // date_fin_reel: "reelD",
        // status: status,
        // temps_pause: "temps_pause",
        // raison: "raison"

      });
    },
    FormatData: function FormatData(idc) {
      var data = this.postData;
      var ddp = moment_default()(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment_default()(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
      var state = parseInt(this.postData.status, 10);
      var result = [];
      result.push({
        table: "gestion_project_contents",
        fields: {
          text: data.text,
          titre: data.titre,
          type: data.type
        },
        childstable: {
          colum_id_name: "idcontents",
          tables: [{
            table: "gestion_project_times",
            fields: {
              date_depart_proposer: ddp,
              date_fin_proposer: dfp,
              status: state
            }
          }, {
            table: "gestion_project_hierachie",
            fields: {
              idcontentsparent: idc,
              ordre: 0
            }
          }]
        }
      });
      return result;
    },
    PostNewProject: function PostNewProject(idc) {
      var _this3 = this;

      Utilities["a" /* default */].formatAddData(this.postData, idc, this.level).then(function (reponse) {
        console.log("created", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse).then(function (reponse) {
          if (reponse.status) {
            _this3.request = reponse.data[0];

            _this3.$emit("addnew-ok");
          }

          _this3.isLoading = false;
        }).catch(function (error) {
          console.log("error", error);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/PopUpContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_PopUpContentvue_type_script_lang_js_ = (PopUpContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/project/PopUpContent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_PopUpContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "494c831b",
  null
  
)

/* harmony default export */ var PopUpContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "4bd1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/AddNewProject.vue?vue&type=template&id=8cb8c75e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',{staticClass:"ml-2 mt-n2 d-flex",attrs:{"alignVertical":"center"}},[_c('CButton',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Nouveau projet'),expression:"'Nouveau projet'"}],attrs:{"size":"sm","color":"warning","shape":"pill"},on:{"click":_vm.modalAddOn}},[_c('CIcon',{staticClass:"text-white",attrs:{"name":"cilPlus","height":35,"size":"xl"}})],1),(_vm.showSideText)?_c('h6',{staticClass:"ml-1 mt-1"},[_vm._v("Nouveau projet")]):_vm._e()],1),_c('CModal',{attrs:{"size":"lg","title":"Nouveau projet","color":"warning","show":_vm.modalAdd,"footer":false},on:{"update:show":function($event){_vm.modalAdd=$event}}},[_c('PopUpContent',{ref:"child",attrs:{"formValues":_vm.formValues,"btn-state":_vm.btnStateAdd}}),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.modalAdd = false}}},[_vm._v(" Cancel ")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":_vm.btnStateAdd.state ? 'warning' : 'light'},on:{"click":_vm.PostNewProject}},[_vm._v(" Save ")])],1)])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue?vue&type=template&id=8cb8c75e&

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/views/App/project/PopUpContent.vue + 4 modules
var PopUpContent = __webpack_require__("2a5d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/AddNewProject.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AddNewProjectvue_type_script_lang_js_ = ({
  components: {
    PopUpContent: PopUpContent["default"]
  },
  props: {
    showSideText: {
      type: Boolean,
      default: null
    }
  },
  data: function data() {
    return {
      postData: {
        starttime: "",
        endtime: "",
        title: "",
        text: ""
      },
      btnStateAdd: {
        state: false
      },
      editorData: "<p>content...</p>",
      selected: "projet",
      modalAdd: false,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [{
        value: "projet",
        label: "Projet"
      }, {
        value: "tache",
        label: "Tâche"
      }, {
        value: "memos",
        label: "Mémos"
      }],
      formValues: {}
    };
  },
  mounted: function mounted() {},
  computed: {
    ser: function ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(function (block) {
        lib_default.a.highlightBlock(block);
      });
      return newDiv.outerHTML;
    }
  },
  methods: {
    modalAddOn: function modalAddOn() {
      this.modalAdd = true;
      this.$refs.child.TimeNow();
    },
    PostNewProject: function PostNewProject() {
      if (this.btnStateAdd.state) {
        this.modalAdd = false;
        this.$refs.child.PostNewProject();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_AddNewProjectvue_type_script_lang_js_ = (AddNewProjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/project/AddNewProject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_AddNewProjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddNewProject = __webpack_exports__["a"] = (component.exports);

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

/***/ "f9cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_SelectDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f0ae");

var OptionsType = {
  /**
   *
   */
  opts: [],
  instance: false,
  loadType: function loadType() {
    var _this = this;

    return new Promise(function (resolv) {
      if (_this.instance) {
        _this.instance.then(function () {
          resolv(_this.opts);
        });
      } else {
        if (!_this.opts.length) {
          _this.instance = _config_SelectDb__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].selectTypes();

          _this.instance.then(function (reponse) {
            // console.log("type : ,", reponse);
            var fm = [];

            for (var i in reponse) {
              fm.push({
                value: reponse[i].name,
                label: reponse[i].label,
                description: reponse[i].description
              });
            }

            _this.opts = fm; //console.log("selectTypes : ", this.opts);

            resolv(_this.opts);
          });
        }
      }
    });
  }
};
/* harmony default export */ __webpack_exports__["a"] = (OptionsType);

/***/ })

}]);
//# sourceMappingURL=gestionTache.umd.2.js.map