((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[2],{

/***/ "2a5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/PopUpContent.vue?vue&type=template&id=7797c475&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"check-valid-form":_vm.checkForSave}},[_c('div',[_c('CRow',{staticClass:"form-group",attrs:{"gutters":false}},[_c('br'),_c('CCol',{attrs:{"sm":"3"}},[_c('p',[_vm._v("Choisir un type:")])]),_c('CCol',{attrs:{"sm":"9"}},[_c('CInputRadioGroup',{attrs:{"options":_vm.options,"checked":_vm.postData.type,"custom":"","inline":""},on:{"update:checked":function($event){return _vm.$set(_vm.postData, "type", $event)}}}),(_vm.postData.type.length < 2)?_c('small',{staticClass:"text-danger"},[_vm._v(" Ce champ est requis ")]):_vm._e()],1)],1)],1),_c('hr'),_c('div',{staticClass:"pl-sm-2"},[_c('CRow',{staticClass:"mb-4 mt-n2",on:{"click":_vm.togleVisible}},[_c('CCol',[_c('CButton',{staticClass:"text-dark d-fleex plus-bouton",attrs:{"variant":"ghost","color":"light w-100","href":"#"}},[_c('span',[_vm._v(" plus ")]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.visible),expression:"!visible"}]},[_c('CIcon',{staticClass:"ml-auto",staticStyle:{"float":"right"},attrs:{"name":"cil-chevron-bottom"}})],1),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}]},[_c('CIcon',{staticClass:"ml-auto",staticStyle:{"float":"right"},attrs:{"name":"cil-chevron-top"}})],1)])],1)],1),_c('CCollapse',{attrs:{"show":_vm.visible,"navbar":true}},[(_vm.postData.type !== 'memos' && _vm.postData.date_fin_reel === '')?_c('CRow',{staticClass:"form-group",attrs:{"gutters":false}},[_c('CCol',{attrs:{"sm":"2"}},[_c('p',[_vm._v("Statut:")])]),_c('CCol',{attrs:{"sm":"10"}},[_c('CInputRadioGroup',{attrs:{"options":_vm.statusOpt,"checked":_vm.postData.status,"custom":"","inline":""},on:{"update:checked":function($event){return _vm.$set(_vm.postData, "status", $event)}}})],1),(_vm.showInputRaison)?_c('CCol',{attrs:{"sm":"8","md":"7"}},[_c('CTextarea',{attrs:{"label":"Raison:","type":"textarea","horizontal":"","placeholder":"writes something...","rows":"2","description":"Une description de la raison du changement de status"},model:{value:(_vm.postData.raison),callback:function ($$v) {_vm.$set(_vm.postData, "raison", $$v)},expression:"postData.raison"}})],1):_vm._e()],1):_vm._e(),(_vm.postData.type !== 'memos')?_c('CRow',[_c('CCol',{attrs:{"col":"12","lg":"6"}},[_c('CRow',{},[_c('CInput',{staticClass:"col-10 col-sm-7",attrs:{"label":"Debut:","type":"date","readonly":_vm.postData.date_fin_reel > 0 ? true : false,"horizontal":""},model:{value:(_vm.postData.date_depart_proposer),callback:function ($$v) {_vm.$set(_vm.postData, "date_depart_proposer", $$v)},expression:"postData.date_depart_proposer"}}),_c('CInput',{staticClass:"col-8 ml-sm-0 pl-sm-0 col-sm-5",attrs:{"readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"time","horizontal":""},model:{value:(_vm.postData.heure_debut),callback:function ($$v) {_vm.$set(_vm.postData, "heure_debut", $$v)},expression:"postData.heure_debut"}})],1)],1),_c('CCol',{attrs:{"col":"10","lg":"6"}},[_c('CRow',{},[_c('CInput',{staticClass:"col-10 col-sm-7",attrs:{"label":"Fin:","readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"date","horizontal":""},model:{value:(_vm.postData.date_fin_proposer),callback:function ($$v) {_vm.$set(_vm.postData, "date_fin_proposer", $$v)},expression:"postData.date_fin_proposer"}}),_c('CInput',{staticClass:"col-8 ml-sm-0 pl-sm-0 col-sm-5",attrs:{"readonly":_vm.postData.date_fin_reel > 0 ? true : false,"type":"time","horizontal":""},model:{value:(_vm.postData.heure_fin),callback:function ($$v) {_vm.$set(_vm.postData, "heure_fin", $$v)},expression:"postData.heure_fin"}})],1)],1),(_vm.postData.date_depart_proposer && _vm.postData.heure_debut)?_c('CCol',{attrs:{"col":"12","lg":"12"}},[_c('CIcon',{staticClass:"ml-auto",attrs:{"name":"cil-clock"}}),_vm._v(" "+_vm._s(_vm.getDiffDates( _vm.postData.date_depart_proposer + " " + _vm.postData.heure_debut, _vm.postData.date_fin_proposer + " " + _vm.postData.heure_fin ))+" ")],1):_vm._e()],1):_vm._e()],1),_c('CRow',[_c('CCol',{staticClass:"d-flex",attrs:{"sm":"6"}},[_c('div',{staticClass:"form-group d-flex align-items-center"},[_c('span',{staticClass:"pr-3 d-block"},[_vm._v(" Contenu privée ? ")]),_c('CSwitch',{staticClass:"mr-1",attrs:{"color":"danger","shape":"pill","checked":_vm.postData.privaty,"size":"sm"},on:{"update:checked":function($event){return _vm.$set(_vm.postData, "privaty", $event)}}})],1)]),_c('CCol',{staticClass:"d-flex",attrs:{"sm":"5"}},[_c('div',{staticClass:"form-group d-flex align-items-center"},[_c('span',{staticClass:"pr-3 d-block"},[_vm._v("Prime ? ")]),_c('CSwitch',{staticClass:"mr-1",attrs:{"color":"danger","shape":"pill","type":"checkbox","disabled":!_vm.cantUpdatePrime,"checked":_vm.postData.prime_status,"size":"sm"},on:{"update:checked":[function($event){return _vm.$set(_vm.postData, "prime_status", $event)},_vm.updatePrime]}})],1)]),(_vm.postData.prime_status)?_c('CCol',{staticClass:"d-flex align-items-start",attrs:{"sm":"5"}},[_c('CInput',{attrs:{"type":"number","append":".00","description":"Montant de la prime:","prepend":"F","disabled":!_vm.cantUpdatePrime},on:{"change":_vm.reUpdatePrime},model:{value:(_vm.postData.prime_montant),callback:function ($$v) {_vm.$set(_vm.postData, "prime_montant", $$v)},expression:"postData.prime_montant"}})],1):_vm._e(),_c('CCol',{attrs:{"sm":"10"}},[_c('div',{staticClass:"form-group d-none"},[_vm._v(" Assigné : "),_c('pre',[_vm._v(" "+_vm._s(_vm.postData)+" ")]),_vm._v(" formValues : "),_c('pre',[_vm._v(" "+_vm._s(_vm.formValues)+" ")])])]),_c('CCol',{attrs:{"sm":"12"}},[_c('CInput',{attrs:{"label":"Title:","placeholder":"Entrez un titre","wasValidated":_vm.wasValidated,"validFeedback":"ok","invalidFeedback":"requis","isValid":_vm.inputValidation},model:{value:(_vm.postData.titre),callback:function ($$v) {_vm.$set(_vm.postData, "titre", $$v)},expression:"postData.titre"}})],1),(_vm.postData.type == 'project')?_c('CCol',{attrs:{"sm":"5"}},[_c('CInput',{attrs:{"label":"Nom du Client:","placeholder":"Select or add new Client"},model:{value:(_vm.postData.clientName),callback:function ($$v) {_vm.$set(_vm.postData, "clientName", $$v)},expression:"postData.clientName"}})],1):_vm._e(),(_vm.postData.type !== 'ressource' && _vm.postData.type !== 'memos')?_c('CCol',{attrs:{"lg":"5"}},[_c('label',{staticClass:"typo__label"},[_vm._v("Exécuter par:")]),_c('multiselect',{attrs:{"disabled":!_vm.cantUpdatePrime,"options":_vm.users,"placeholder":"Selectionnez un utilisateur","multiple":true,"close-on-select":false,"clear-on-select":false,"preserve-search":false,"searchable":false,"label":"name","loading":_vm.selectLoading,"track-by":"name","preselect-first":false,"hide-selected":true},on:{"select":_vm.addExecutant,"remove":_vm.deleteExecutant},model:{value:(_vm.postData.executant),callback:function ($$v) {_vm.$set(_vm.postData, "executant", $$v)},expression:"postData.executant"}})],1):_vm._e()],1),_c('CRow',[_c('CCol',{attrs:{"sm":"12"}},[_c('label',[_vm._v("Description:")]),_c('ckeditor',{attrs:{"config":_vm.editorConfig},on:{"namespaceloaded":_vm.onNamespaceLoaded},model:{value:(_vm.postData.text),callback:function ($$v) {_vm.$set(_vm.postData, "text", $$v)},expression:"postData.text"}})],1)],1),(_vm.postData.type == 'project')?_c('CRow',[_c('CCol',{attrs:{"col":"8","lg":"4"}},[_c('CInput',{attrs:{"label":"Estimation du coût:","append":".00","description":"montant","prepend":"$"},model:{value:(_vm.postData.price),callback:function ($$v) {_vm.$set(_vm.postData, "price", $$v)},expression:"postData.price"}})],1)],1):_vm._e()],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/PopUpContent.vue?vue&type=template&id=7797c475&scoped=true&lang=html&

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./node_modules/ckeditor4-vue/dist/ckeditor.js
var ckeditor = __webpack_require__("25ae");
var ckeditor_default = /*#__PURE__*/__webpack_require__.n(ckeditor);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./src/views/App/config/config.js + 72 modules
var config = __webpack_require__("b8a6");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/views/App/project/ProjectOptionsType.js
var ProjectOptionsType = __webpack_require__("f9cf");

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/PopUpContent.vue?vue&type=script&lang=js&
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ckeditor: ckeditor_default.a.component,
    Multiselect: vue_multiselect_min_default.a
  },
  data: function data() {
    return {
      selectLoading: false,
      visible: true,
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
        prime_status: null,
        prime_montant: 0,
        privaty: true,
        executant: []
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
          instanceReady: function instanceReady(ev) {
            // Output paragraphs as <p>Text</p>.
            //console.log('this',ev)
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
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
    var sm = window.matchMedia("(max-width:768px)");
    sm.addEventListener("change", this.smallMedia);
    this.smallMedia(sm);
  },
  watch: {
    formValues: {
      deep: true,
      handler: function handler(val) {
        console.log("val : ", val);
        Utilities["a" /* default */].fomatVal(val, this.postData, this.users).then(function () {}); //console.log("result :", this.postData, this.fHeure);
        //console.log("debut heure : ", this.dHeure);
      }
    }
  },
  computed: {
    cantUpdatePrime: function cantUpdatePrime() {
      var current = this.$store.getters.currentUser;

      if (this.formValues && this.formValues.uid) {
        if (current.uid == this.formValues.uid) {
          return true;
        } else {
          return false;
        }
      }

      return true;
    },
    users: function users() {
      return this.$store.getters.userList;
    },
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
    smallMedia: function smallMedia(bp) {
      if (bp.matches) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    togleVisible: function togleVisible() {
      this.visible = !this.visible;
    },
    reUpdatePrime: function reUpdatePrime(val) {
      console.log("reUpdate Prime: ", val);
      this.updatePrime(this.postData.prime_status);
    },
    updatePrime: function updatePrime(value) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var self, params, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = _this2;

                if (!_this2.postData.idcontents) {
                  _context.next = 8;
                  break;
                }

                params = {
                  id: _this2.postData.idcontents,
                  status: value,
                  montant: _this2.postData.prime_montant
                };
                _context.next = 5;
                return Utilities["a" /* default */].formatPrimeData(params, _this2.formValues.prime_status !== null ? true : false);

              case 5:
                data = _context.sent;
                console.log("formatPrimeData", data);
                config["a" /* default */].post("/gestion-project/save-update", data, {
                  headers: {
                    Authorization: config["a" /* default */].auth
                  }
                }).then(function (reponse) {
                  if (reponse.status) {
                    console.log("prime update :", reponse);
                    _this2.formValues.prime_status = value;
                    _this2.formValues.prime_montant = _this2.postData.prime_montant;
                  }
                }).catch(function (error) {
                  alert("Erreur lors de l'activation de la prime sur cette tâche");
                  console.log("error", error);
                  self.postData.prime_status = null;
                }); // try   {
                //   let reponse = await config.post('' + value)
                //   console.log("user",reponse );
                // }
                // catch (er) {
                //   console.log('er',er)
                // }
                //let self = this;
                // if(this.postData.idcontents) {
                //}

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteExecutant: function deleteExecutant(value) {
      //console.log("user delet", value);
      var self = this;

      if (this.postData.idcontents) {
        this.selectLoading = true;
        config["a" /* default */].delete("/gestion-project/executant/" + this.postData.idcontents + "/" + value.uid, {}, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            //console.log("data after edit :", reponse);
            self.updateFormValue(false, value);
            self.selectLoading = false;
          }
        }).catch(function (error) {
          self.selectLoading = false;
          console.log("error", error);
        });
      }
    },
    updateFormValue: function updateFormValue(add, user) {
      var form = this.formValues.executant;

      if (add) {
        form.push(user);
      } else {
        var existe = form.filter(function (el) {
          return el.uid == user.uid;
        }); // console.log("existe", existe);

        for (var i in form) {
          if (existe[0].uid == form[i].uid) {
            form.splice(i, 1);
          }
        }
      }
    },
    addExecutant: function addExecutant(value) {
      // console.log("user add", value, config.auth);
      var self = this;

      if (this.postData.idcontents) {
        this.selectLoading = true;
        config["a" /* default */].post("/gestion-project/executant/" + this.postData.idcontents + "/" + value.uid, {}, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            //console.log("data after edit :", reponse);
            self.selectLoading = false;
            self.updateFormValue(true, value);
          }
        }).catch(function (error) {
          self.selectLoading = false;
          console.log("error", error);
        });
      }
    },
    onNamespaceLoaded: function onNamespaceLoaded(CKEDITOR) {
      // Add external `placeholder` plugin which will be available for each
      // editor instance on the page.
      moment_default.a;
      CKEDITOR.plugins.addExternal("quickuploader", config["a" /* default */].baseUrl + "/libraries/quickuploader/plugin.js?v=" + moment_default()().unix());
      /**/

      CKEDITOR.config.allowedContent = true;
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      CKEDITOR.config.quickuploaderUploadUrl = config["a" /* default */].baseUrl; //                                     CKEDITOR.config.entities_processNumerical = 'force';

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
      var _this3 = this;

      var self = this;
      Utilities["a" /* default */].formatData(this.postData, this.dHeure, this.fHeure).then(function (reponse) {
        //console.log(" EditProject : ", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            //console.log("data after edit :", reponse);
            self.$emit("edition-ok", reponse);
          }

          _this3.isLoading = false;
        }).catch(function (error) {
          self.$emit("edition-error");
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
    PostNewProject: function PostNewProject(idc, level) {
      var _this4 = this;

      var self = this;
      Utilities["a" /* default */].formatAddData(this.postData, idc, this.level).then(function (reponse) {
        //  console.log("created", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            self.request = reponse.data[0];

            if (level) {
              self.$emit("addnew-ok", {
                id: idc,
                level: level
              });
            } else {
              self.$emit("addnew-ok", {
                id: reponse.data[0].result
              });
            }
          }

          _this4.isLoading = false;
        }).catch(function (error) {
          self.$emit("addnew-error");
          console.log("error", error);
        });
      });
    },
    getDiffDates: function getDiffDates(date_string2, date_string1) {
      var date1 = moment_default()(date_string1);
      var date2 = moment_default()(date_string2);
      var diff_string = ""; //

      var days = date1.diff(date2, "days");
      if (days) diff_string += days + "jr "; //

      var hours = date1.diff(date2, "hours");
      if (hours) diff_string += hours - days * 24 + "h "; //

      var minutes = date1.diff(date2, "minutes");
      if (minutes) diff_string += minutes - hours * 60 + "mn "; //

      if (diff_string) {
        return diff_string;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/PopUpContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_PopUpContentvue_type_script_lang_js_ = (PopUpContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/App/project/PopUpContent.vue?vue&type=style&index=0&id=7797c475&lang=scss&scoped=true&
var PopUpContentvue_type_style_index_0_id_7797c475_lang_scss_scoped_true_ = __webpack_require__("f773");

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
  "7797c475",
  null
  
)

/* harmony default export */ var PopUpContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c17e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f0ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8a6");

var authorization = _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].auth;
/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function selectDatas() {
    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      column: "gpc.type",
      operator: "=",
      value: "project"
    }];
    return new Promise(function (resolv) {
      var query = {
        where: "",
        orther_query: ""
      };

      if (where.length) {
        query.where += _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].formatWhere(where);
      }

      query.orther_query += " ORDER BY  gpc.`idcontents` DESC ";
      query.orther_query += " limit 0,50 "; //console.log("query :: ", query);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/selectdatas", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get("/gestion-project/select/project-type", {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-project", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      query += " gpc.idcontents is not NULL order by gpc.update_at DESC limit 0,30 ";
      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-project", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
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
      column: "gpt.status",
      operator: "=",
      value: 2
    }];
    return new Promise(function (resolv, error) {
      var query = {
        where: "",
        orther_query: ""
      };

      if (where.length) {
        query.where += _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].formatWhere(where);
      }

      query.orther_query += " ORDER BY  gpc.`idcontents` DESC ";
      query.orther_query += " limit 0,20 "; //console.log("query :: ", query);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-tache-enours", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      }).catch(function (er) {
        error(er);
      });
    });
  },
  SelectMesTaches: function SelectMesTaches(uid) {
    var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{
      column: "gpe.uid",
      operator: "=",
      value: uid
    }];
    return new Promise(function (resolv, error) {
      var query = {
        where: "",
        orther_query: ""
      };

      if (where.length) {
        query.where += _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].formatWhere(where);
      }

      query.orther_query += " ORDER BY  gpc.`idcontents` DESC ";
      query.orther_query += " limit 0,20 "; //console.log("query :: ", query);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/select/select-mes-taches/" + uid, query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      }).catch(function (er) {
        error(er);
      });
    });
  },
  SelectNotesAd: function SelectNotesAd(uid) {
    var where = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{
      column: "gpc.type",
      operator: "=",
      value: "note"
    }, {
      column: "gpe.uid",
      operator: "=",
      value: uid
    }, {
      column: "gpt.status",
      operator: "!=",
      value: 1
    }];
    return new Promise(function (resolv, error) {
      var query = {
        where: "",
        orther_query: ""
      };

      if (where.length) {
        query.where += _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].formatWhere(where);
      }

      query.orther_query += " ORDER BY  gpc.`idcontents` DESC ";
      query.orther_query += " limit 0,20 "; // console.log("query were :: ", query, where);

      _config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post("/gestion-project/custom-request", query, {
        headers: {
          Authorization: authorization
        }
      }).then(function (reponse) {
        if (reponse.status) {
          resolv(reponse.data);
        } else {
          resolv([]);
        }
      }).catch(function (er) {
        error(er);
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

/***/ "f773":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpContent_vue_vue_type_style_index_0_id_7797c475_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c17e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpContent_vue_vue_type_style_index_0_id_7797c475_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PopUpContent_vue_vue_type_style_index_0_id_7797c475_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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
//# sourceMappingURL=gestionTache.common.2.js.map