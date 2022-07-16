((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[5],{

/***/ "0b4b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1267":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5724":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1267");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "60bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b4b");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_css_loader_dist_cjs_js_ref_6_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_oneOf_1_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "618c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/CardComponent.vue?vue&type=template&id=e963adec&
var CardComponentvue_type_template_id_e963adec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-block card-render-entity"},[_c('CCard',[_c('CCardHeader',{staticClass:"shadow-sm flex-wrap flex-md-nowrap",class:[
        'card-progress  card-color card-border card-border--' + _vm.dataLoad.type,
        _vm.background ]},[_c('CLink',{staticClass:"text-dark  text-decoration-none link-card",attrs:{"to":'/projets/' + _vm.dataLoad.idcontents}},[_vm._v(_vm._s(_vm.dataLoad.titre)+" "),(_vm.dataLoad.privaty == '1')?_c('CBadge',{attrs:{"color":"danger","position":"top-start","shape":"pill"}},[_vm._v(" Privé ")]):_vm._e(),(_vm.dataLoad.executant && _vm.dataLoad.executant.length)?_c('span',[_c('small',{staticClass:"ml-2"},[_c('CIcon',{attrs:{"size":"sm","name":"cilArrowRight"}})],1),_vm._l((_vm.dataLoad.executant),function(ex,i){return _c('CBadge',{key:i,staticClass:"mx-2",attrs:{"color":"primary","position":"top-start","shape":"pill"}},[_vm._v(" "+_vm._s(_vm.formatExecutant(ex.uid))+" ")])})],2):_vm._e(),(_vm.isPrime)?_c('span',{staticClass:"prime-badge"},[_c('CBadge',{attrs:{"color":"warning","position":"top-start","shape":""}},[_vm._v(" Prime "+_vm._s(_vm.dataLoad.prime_status)+" ")])],1):_vm._e()],1),_c('div',{staticClass:"px-2 date-created py-2 "},[_c('small',[_vm._v(_vm._s(_vm.createdAt))])]),(_vm.progress.val && _vm.progress.max)?_c('CProgress',{staticClass:"progress-xs mx-2 card-prog",staticStyle:{"height":"10px"},attrs:{"animated":_vm.dataLoad.status === '1' || _vm.dataLoad.status === '3' ? false : true,"showPercentage":"","striped":_vm.dataLoad.status === '1' || _vm.dataLoad.status === '3' ? false : true,"max":_vm.progress.max,"value":_vm.progress.val,"color":_vm.color(_vm.progress.val, _vm.progress.max)}}):_vm._e(),_c('div',{staticClass:"card-header-actions px-2"},[_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Afficher/Cacher la description'),expression:"'Afficher/Cacher la description'"}],staticClass:"btn-close p-2",attrs:{"href":"#"},on:{"click":function($event){_vm.descToggle = !_vm.descToggle}}},[_c('CIcon',{attrs:{"name":("cil-chevron-circle-" + (_vm.descToggle ? 'down' : 'up') + "-alt")}})],1),_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Edité le contenu'),expression:"'Edité le contenu'"}],staticClass:"btn-close p-2",attrs:{"href":"#"},on:{"click":_vm.modalEditOn}},[_c('CIcon',{attrs:{"name":"cil-pencil"}})],1),_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Modifier le parent'),expression:"'Modifier le parent'"}],staticClass:"btn-close p-2",attrs:{"href":"#"},on:{"click":_vm.changeParent}},[_c('CIcon',{attrs:{"name":"cil-cursor-move"}})],1),_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Créer un sous contenu'),expression:"'Créer un sous contenu'"}],staticClass:"btn-close p-2",attrs:{"href":"#"},on:{"click":_vm.HideTypeProject}},[_c('CIcon',{attrs:{"name":"cil-plus"}})],1),_c('CLink',{staticClass:"btn-close p-2",attrs:{"href":"#"},on:{"click":_vm.modalRessourceOn}},[_c('CIcon',{attrs:{"name":"cil-settings"}})],1),_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Afficher/Cacher les sous projects'),expression:"'Afficher/Cacher les sous projects'"}],staticClass:"p-2 btn-minimize",on:{"click":_vm.Collapsed}},[_c('CIcon',{attrs:{"name":("cil-chevron-" + (_vm.dataLoad.open ? 'bottom' : 'top'))}})],1),(_vm.permission)?_c('span',[_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Supprimer ce contenu'),expression:"'Supprimer ce contenu'"}],staticClass:"p-2 btn-close text-danger",attrs:{"href":"#"},on:{"click":_vm.DeleteModalOn}},[_c('CIcon',{attrs:{"color":"danger","name":"cil-x-circle"}})],1)],1):_vm._e()],1)],1),_c('CCollapse',{attrs:{"show":_vm.dataLoad.open,"duration":400}},[_c('CCardBody',[_c('CCollapse',{attrs:{"show":_vm.descToggle,"duration":400}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.textDisplay)}})]),_vm._t("default")],2)],1)],1),_c('CModal',{attrs:{"title":"Confirmer la suppression","color":"danger","show":_vm.deleteModal,"closeOnBackdrop":false},on:{"update:show":function($event){_vm.deleteModal=$event}}},[_vm._v(" Êtes vous sûre de vouloir supprimer ce contenu? "),_c('br'),_c('small',{staticClass:"mt-2 text-center"},[_vm._v("Cette action est irréversible.")]),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.deleteModal = false}}},[_vm._v("Cancel")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":"danger","desabled":""},on:{"click":_vm.DeleteContent}},[_vm._v("Supprimer "),(_vm.spinnerDelete)?_c('CSpinner',{staticClass:"mx-2",staticStyle:{"width":"0.8rem","height":"0.8rem"},attrs:{"tag":"div","color":"light"}}):_vm._e()],1)],1)])],2),_c('CModal',{staticClass:" modal-dialog-scrollable",attrs:{"title":"Modification de la hiérarchie","color":"dark","show":_vm.hierarchiModal},on:{"update:show":function($event){_vm.hierarchiModal=$event}}},[_c('CRow',[_c('CCol',{staticClass:"mr-0 pr-0",attrs:{"col":"8","sm":"5"}},[_c('CInput',{attrs:{"label":"Ordre:","type":"number","horizontal":""},model:{value:(_vm.newIdParrent.ordre),callback:function ($$v) {_vm.$set(_vm.newIdParrent, "ordre", $$v)},expression:"newIdParrent.ordre"}})],1),_c('CCol',{attrs:{"md":"10"}},[_c('SSearch',{on:{"parent-selected":_vm.parentSelected}}),_c('small',[_vm._v("Choisir le nouveau parent")]),_vm._v(" "),_c('br'),_c('small',[_vm._v("Parent Actuel: "),_c('strong',[_vm._v(_vm._s(_vm.dataLoad.idcontentsparent))])])],1)],1),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CButton',{staticClass:"mx-1",attrs:{"color":"light"},on:{"click":function($event){_vm.hierarchiModal = false}}},[_vm._v("Cancel")]),_c('CButton',{staticClass:"mx-1",attrs:{"color":"dark","desabled":""},on:{"click":_vm.ChangeHierarchie}},[_vm._v("Enregistrer "),(_vm.spinner)?_c('CSpinner',{staticStyle:{"width":"1rem","height":"1rem"},attrs:{"size":"sm","tag":"small","color":"primary"}}):_vm._e()],1)],1)])],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/CardComponent.vue?vue&type=template&id=e963adec&

// EXTERNAL MODULE: ./src/views/App/search/Search.vue + 4 modules
var Search = __webpack_require__("c71b");

// EXTERNAL MODULE: ./src/views/App/project/Utilities.js
var Utilities = __webpack_require__("d111");

// EXTERNAL MODULE: ./src/views/App/config/config.js + 72 modules
var config = __webpack_require__("b8a6");

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/index.js
var lib = __webpack_require__("1487");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/CardComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var CardComponentvue_type_script_lang_js_ = ({
  name: "CardComponent",
  props: {
    dataLoad: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    isCollapsed: {
      type: Object,
      default: function _default() {
        return {
          status: false
        };
      }
    }
  },
  components: {
    SSearch: Search["a" /* default */]
  },
  data: function data() {
    return {
      btnStateEdit: {
        state: false
      },
      modalEdit: false,
      deleteModal: false,
      hierarchiModal: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      currentTime: "",
      show: true,
      max: "",
      spinner: false,
      spinnerDelete: false,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      newIdParrent: {
        id: "",
        ordre: ""
      },
      //isCollapsed: true,
      editorData: "<p>me al rasp sale</p>",
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
      }]
    };
  },
  mounted: function mounted() {
    this.timing();
  },
  computed: {
    permission: function permission() {
      var perm = this.$store.getters.currentUser;
      console.log('perm', perm);
      if (perm.uid == this.dataLoad.uid) return true;
      return false;
    },
    isPrime: function isPrime() {
      var prime = this.dataLoad.prime_status;

      if (prime == 1 || prime == true) {
        return true;
      }

      return false;
    },
    users: function users() {
      return this.$store.getters.userList;
    },
    background: function background() {
      var back = "card-back";
      var sts = this.dataLoad.status;
      return back + "--" + sts;
    },
    progress: function progress() {
      var el = {};
      var date_fin_proposer = moment_default.a.unix(this.dataLoad.date_fin_proposer);
      var date_depart_proposer = moment_default.a.unix(this.dataLoad.date_depart_proposer);
      var exact = moment_default.a.unix(this.currentTime);

      if (this.dataLoad.date_fin_reel > 0) {
        exact = moment_default.a.unix(this.dataLoad.date_fin_reel);
      }

      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");
      el.max = max;
      el.val = val;
      return el;
    },
    // Affichage du texte formatter
    textDisplay: function textDisplay() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.dataLoad.text ? this.dataLoad.text : "";
      newDiv.querySelectorAll("pre code").forEach(function (block) {
        lib_default.a.highlightBlock(block);
      });
      return newDiv.outerHTML;
    },
    createdAt: function createdAt() {
      return moment_default()(this.dataLoad.created_at, "YYYY-MM-DD HH:mm").format("DD/MM/YYYY HH:mm");
    }
  },
  methods: {
    defineFavoris: function defineFavoris() {
      console.log('favoris', this.dataLoad.uid);
    },
    formatExecutant: function formatExecutant(id) {
      var name = "";
      this.users.forEach(function (el) {
        if (el.uid == id) {
          name = el.name;
        }
      });
      return name;
    },
    timing: function timing() {
      var _this = this;

      if (this.dataLoad.status == 2) {
        this.currentTime = moment_default()().unix();
        setInterval(function () {
          _this.currentTime = moment_default()().unix();
        }, 5000);
      } else {
        this.currentTime = moment_default()().unix();
      }
    },
    color: function color(valueCurent, maxValue) {
      return config["a" /* default */].color(valueCurent, maxValue);
    },
    parentSelected: function parentSelected(data) {
      //console.log("cccc :", data.idcontents);
      this.newIdParrent.id = data.idcontents;
    },
    ChangeHierarchie: function ChangeHierarchie() {
      var _this2 = this;

      var self = this;
      this.spinner = true; //console.log("object", this.dataLoad.idcontents);

      Utilities["a" /* default */].formatHierarchie(this.dataLoad, this.newIdParrent).then(function (reponse) {
        //console.log(" change Hierarchie : ", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            // console.log("data after edit :", reponse);
            _this2.$emit("edition-ok", reponse);
          }

          _this2.spinner = false;
          _this2.hierarchiModal = false;
        }).catch(function (error) {
          self.$emit("edition-error", reponse);
          console.log("error", error);
        });
      });
    },
    changeParent: function changeParent() {
      // console.log("changeparent", this.dataLoad);
      this.$emit("change-parent", this.dataLoad);
      this.newIdParrent.ordre = this.dataLoad.ordre;
      this.hierarchiModal = true;
    },
    DeleteModalOn: function DeleteModalOn() {
      this.deleteModal = true;
    },
    //Supression d’un contenu
    DeleteContent: function DeleteContent() {
      var _this3 = this;

      this.spinnerDelete = true;
      var self = this;
      Utilities["a" /* default */].formatDeleteData(this.dataLoad, "delete").then(function (reponse) {
        // console.log(" deleteProject : ", reponse);
        config["a" /* default */].post("/gestion-project/save-update", reponse, {
          headers: {
            Authorization: config["a" /* default */].auth
          }
        }).then(function (reponse) {
          if (reponse.status) {
            // console.log("data after delete :", reponse);
            // window.location.pathname = "/projets"
            _this3.spinnerDelete = false;

            _this3.$emit("suppression-ok");
          }

          _this3.isLoading = false;
        }).catch(function (error) {
          self.$emit("suppression-error");
          console.log("error", error);
        });
      });
    },
    //Gestion de l’acordéon
    Collapsed: function Collapsed() {
      if (this.dataLoad.open) {
        this.dataLoad.open = false;
      } else {
        this.dataLoad.open = true;
      }
    },
    //
    HideTypeProject: function HideTypeProject() {
      this.$emit("Hide-type-project", this.dataLoad);
    },
    modalEditOn: function modalEditOn() {
      //console.log("ediut : ", this.dataLoad);
      this.$emit("modal-edit-on", this.dataLoad);
    },
    modalRessourceOn: function modalRessourceOn() {
      this.$emit("modal-ressource-on");
    },
    modalEditOnText: function modalEditOnText(item) {
      //console.log("Test edit : ", item.titre);
      this.$emit("ev-modal-edit-on", item);
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/CardComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_CardComponentvue_type_script_lang_js_ = (CardComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/App/project/CardComponent.vue?vue&type=style&index=0&lang=scss&
var CardComponentvue_type_style_index_0_lang_scss_ = __webpack_require__("6b1d");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/project/CardComponent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_CardComponentvue_type_script_lang_js_,
  CardComponentvue_type_template_id_e963adec_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardComponent = (component.exports);
// EXTERNAL MODULE: ./src/views/App/project/ProjectOptionsType.js
var ProjectOptionsType = __webpack_require__("f9cf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/CardJsx.vue?vue&type=script&lang=js&
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ var CardJsxvue_type_script_lang_js_ = ({
  name: "CardsJSX",
  props: {
    dataLoad: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      btnStateEdit: {
        state: false
      },
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: false,
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      editorData: "<p>me al rasp sale</p>",
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
      }]
    };
  },
  render: function render(createElement) {
    var _this = this;

    var elt = createElement;

    var loopDatas = function loopDatas(projects) {
      var open = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var result = []; // var premierTours = 0;

      projects.forEach(function (project) {
        var cards = [];
        project.open = open;

        if (Array.isArray(project.cards)) {
          var _iterator = _createForOfIteratorHelper(_this.options),
              _step;

          try {
            var _loop = function _loop() {
              var item = _step.value;
              test = project.cards.filter(function (projet) {
                return projet.type == item.value;
              });
              newT = test.filter(function (project) {
                return project.status == "0";
              });
              term = test.filter(function (project) {
                return project.status == "1";
              });
              encour = test.filter(function (project) {
                return project.status == "2";
              });
              annule = test.filter(function (project) {
                return project.status == "3";
              });
              newtest = newT.concat(encour).concat(term).concat(annule);
              bottomBadge = loopDatas(newtest, false);
              badge = elt("cBadge", {
                class: ["badge-type-ressource", "badge--" + item.value],
                style: {
                  padding: "4px 7px",
                  "max-width": "100px"
                },
                attrs: {
                  tag: "div"
                }
              }, [elt("strong", {
                style: {
                  "font-weigth": "bold",
                  color: "#fff67a ",
                  "margin-right": "2px",
                  "font-size": "1.2em"
                }
              }, test.length), "  " + " " + item.label]);

              if (test.length) {
                cards.push(badge);
                cards.push(bottomBadge);
              } //console.log("options", newT);

            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var test;
              var newT;
              var term;
              var encour;
              var annule;
              var newtest;
              var bottomBadge;
              var badge;

              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } //console.log("donnée cards", dataLoad);


        result.push(elt(CardComponent, {
          props: {
            dataLoad: project
          },
          on: {
            "modal-edit-on": function modalEditOn(item) {
              //console.log("edit-on", item);
              _this.$emit("modal-edit-on", item);
            },
            "Hide-type-project": function HideTypeProject(item) {
              _this.$emit("Hide-type-project", item);
            },
            "suppression-ok": function suppressionOk() {
              _this.$emit("suppression-ok");
            },
            "change-parent": function changeParent(item) {
              //console.log("changeparent", item);
              _this.$emit("change-parent", item);
            },
            "edition-ok": function editionOk() {
              _this.$emit("edition-ok");
            },
            "edition-error": function editionError() {
              _this.$emit("edition-error");
            }
          }
        }, cards));
      });
      return result;
    };

    return elt("div", loopDatas(this.dataLoad, true));
  },
  mounted: function mounted() {
    this.loadOptions();
  },
  methods: {
    loadOptions: function loadOptions() {
      var _this2 = this;

      ProjectOptionsType["a" /* default */].loadType().then(function (reponse) {
        _this2.options = reponse;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/CardJsx.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_CardJsxvue_type_script_lang_js_ = (CardJsxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/project/CardJsx.vue
var CardJsx_render, CardJsx_staticRenderFns




/* normalize component */

var CardJsx_component = Object(componentNormalizer["a" /* default */])(
  project_CardJsxvue_type_script_lang_js_,
  CardJsx_render,
  CardJsx_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardJsx = __webpack_exports__["default"] = (CardJsx_component.exports);

/***/ }),

/***/ "6b1d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8d3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b8d3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c71b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/search/Search.vue?vue&type=template&id=5bd92960&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.styled ? 'searchForm' : ''},[_c('multiselect',{attrs:{"options":_vm.project,"placeholder":"Tapez une recherche","hide-selected":true,"max-height":700,"option-height":20,"show-labels":false,"searchable":true,"loading":_vm.isLoading,"track-by":"titre","internal-search":false,"showPointer":true,"label":"titre"},on:{"search-change":_vm.TypingSearch},scopedSlots:_vm._u([{key:"singleLabel",fn:function(ref){
var option = ref.option;
return [_c('span',{staticClass:"option__desc d-inline-flex flex-column"},[_c('span',{staticClass:"option__title d-none"},[_vm._v(_vm._s(option.titre))])])]}},{key:"option",fn:function(props){return [_c('router-link',{attrs:{"to":'/projets/' + props.option.idcontents}},[(_vm.styled)?_c('div',{staticClass:"option__desc d-inline-flex flex-column align-items-start"},[_c('span',{staticClass:"option__title  d-flex align-items-center"},[_c('CBadge',{staticClass:"mr-2",attrs:{"color":_vm.badgeColor(props.option.type),"position":"top-start","size":"sm","shape":"pill"}},[_vm._v(" "+_vm._s(props.option.type)+" ")]),_c('span',{staticClass:"titre-option"},[_vm._v(_vm._s(props.option.titre))]),_c('CIcon',{staticClass:"ml-3 pb-0 ",class:'text-' +_vm.badgeColor(props.option.type),attrs:{"name":"cilShare","size":"sm"}})],1),_c('div',{staticClass:"d-flex align-items-center"})]):_vm._e()]),(!_vm.styled)?_c('div',{staticClass:"option__desc d-inline-flex flex-column align-items-start",on:{"click":function($event){return _vm.ParentSelected(props)}}},[_c('span',{staticClass:"option__title mb-2"},[_c('CIcon',{staticClass:"mr-1 text-dark",attrs:{"name":"cilFolder"}}),_vm._v(" "+_vm._s(props.option.titre)+" "),_c('small',{staticClass:"text-dark p-1 mt-2 ml-2 text-type"},[_vm._v(_vm._s(props.option.type))])],1)]):_vm._e()]}}]),model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}},[_c('span',{staticClass:"p-3",attrs:{"slot":"noResult"},slot:"noResult"},[_vm._v(" Ooops! Aucun élement trouvé... ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/search/Search.vue?vue&type=template&id=5bd92960&

// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.js
var vue_multiselect_min = __webpack_require__("8e5f");
var vue_multiselect_min_default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_min);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./src/views/App/config/config.js + 72 modules
var config = __webpack_require__("b8a6");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/search/Search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // register globally

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("multiselect", vue_multiselect_min_default.a);
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({
  // OR register locally
  props: {
    styled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Multiselect: vue_multiselect_min_default.a
  },
  data: function data() {
    return {
      value: "",
      searchValue: "",
      options: ["list", "of", "options"],
      project: [],
      isLoading: false,
      timer: null
    };
  },
  mounted: function mounted() {//this.LoadProjectData();
  },
  watch: {},
  computed: {
    pOptions: function pOptions() {
      var tab = [];

      if (this.project.length) {
        for (var i in this.project) {
          tab.push(this.project[i].titre);
        }
      }

      return tab;
    }
  },
  methods: {
    badgeColor: function badgeColor(type) {
      var color = "";

      switch (type) {
        case 'project':
          color = 'dark';
          break;

        case 'bug':
          color = 'danger';
          break;

        case 'a_faire':
          color = 'dark';
          break;

        case 'tache':
          color = 'success';
          break;

        case 'sous-projet':
          color = 'secondary';
          break;

        default:
          color = "light";
      }

      return color;
    },
    ParentSelected: function ParentSelected(data) {
      console.log("dataSelected :", data.option);
      this.$emit("parent-selected", data.option);
    },
    // Recherche des informations 1.5s après la saisie
    TypingSearch: function TypingSearch(value) {
      if (value.length >= 2) {
        this.isLoading = true;
        this.value = value;
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
          self.LoadProjectData();
        }, 1500);
      }
    },
    // Request for Loading data on DB
    LoadProjectData: function LoadProjectData() {
      var _this = this;

      this.isLoading = true;
      config["a" /* default */].post("/gestion-project/search?key=" + this.value, {
        level: 0
      }, {
        headers: {
          Authorization: config["a" /* default */].auth
        }
      }).then(function (reponse) {
        if (reponse.status) {
          if (reponse) {
            _this.project = reponse.data;
            console.log("Project search load", reponse);
          }
        }

        _this.isLoading = false;
      }).catch(function (error) {
        console.log("error", error);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/search/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&
var vue_multiselect_minvue_type_style_index_0_lang_css_ = __webpack_require__("60bc");

// EXTERNAL MODULE: ./src/views/App/search/Search.vue?vue&type=style&index=1&lang=scss&
var Searchvue_type_style_index_1_lang_scss_ = __webpack_require__("5724");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/search/Search.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Search = __webpack_exports__["a"] = (component.exports);

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
//# sourceMappingURL=gestionTache.common.5.js.map