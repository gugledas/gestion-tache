((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[16],{

/***/ "f0ae":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b8a6");

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * selectionne un enssemble de données à partir d'une requette personnalisé
   */
  selectDatas: function selectDatas() {
    var _this = this;

    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      column: "c.type",
      operator: "=",
      value: "project"
    }];
    return new Promise(function (resolv) {
      var query = "";
      query += " select ";
      query += " c.idcontents, c.text, c.titre, c.created_at, ";
      query += " c.update_at, c.type, h.idhierachie, h.idcontentsparent, ";
      query += " h.ordre, h.level";
      query += " from ";
      query += _this.formatStringTable("gestion_project_hierachie") + " as h ";
      query += " INNER JOIN ";
      query += _this.formatStringTable("gestion_project_contents") + " as c ";
      query += " ON h.idcontents = c.idcontents "; //query += "WHERE ( h.idcontentsparent = $idcontents OR c.idcontents = $idcontents ) ";

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " ORDER BY  c.`idcontents` DESC";
      query += " limit 0,50 "; //console.log("query :: ", query);

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
  selectTypes: function selectTypes() {
    var _this2 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this2.formatStringTable("gestion_project_type");
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
  selectProject: function selectProject(where) {
    var _this3 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this3.formatStringTable("gestion_project_contents");

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
  selectFatureList: function selectFatureList(where) {
    var _this4 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this4.formatStringTable("gestion_project_invoice_list");

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
    var _this5 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this5.formatStringTable("gestion_project_invoice");

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
    var _this6 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this6.formatStringTable("gestion_project_client");

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
    var _this7 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this7.formatStringTable("gestion_project_societe");

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
    var _this8 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this8.formatStringTable(table);
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
    var _this9 = this;

    return new Promise(function (resolv) {
      var query = "";
      query += " select * ";
      query += " from ";
      query += _this9.formatStringTable("gestion_project_contents");
      query += " order by update_at DESC ";
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
  SelectTacheEnours: function SelectTacheEnours() {
    var _this10 = this;

    var where = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
      column: "t.status",
      operator: "=",
      value: 2
    }];
    return new Promise(function (resolv) {
      var query = "";
      query += " select ";
      query += " c.idcontents, c.text, c.titre, c.created_at, ";
      query += " c.update_at, c.type, h.idhierachie, h.idcontentsparent, ";
      query += " h.ordre, h.level, ";
      query += " t.status";
      query += " from ";
      query += _this10.formatStringTable("gestion_project_hierachie") + " as h ";
      query += " INNER JOIN ";
      query += _this10.formatStringTable("gestion_project_contents") + " as c ";
      query += " ON h.idcontents = c.idcontents ";
      query += " INNER JOIN ";
      query += _this10.formatStringTable("gestion_project_times") + " as t ";
      query += " ON t.idcontents = c.idcontents "; //query += "WHERE ( h.idcontentsparent = $idcontents OR c.idcontents = $idcontents ) ";

      if (where.length) {
        query += " WHERE ";

        for (var i in where) {
          query += where[i].column + " " + where[i].operator + " " + "'" + where[i].value + "'" + " ";
        }
      }

      query += " ORDER BY  c.`idcontents` DESC";
      query += " limit 0,50 "; //console.log("query :: ", query);

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

  /**
   * les tables sous drupal doivent etre encarée avec {}
   */
  formatStringTable: function formatStringTable(table) {
    return "{" + table + "}";
  }
});

/***/ }),

/***/ "fa09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/ProjectList.vue?vue&type=template&id=29221341&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CRow',_vm._l((_vm.projectType),function(item,i){return _c('CCol',{key:i,attrs:{"md":"6"}},[_c('LastProjectType',{attrs:{"title":item.label,"name":item.name,"isLoading":_vm.isLoading2}})],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/ProjectList.vue?vue&type=template&id=29221341&

// EXTERNAL MODULE: ./src/views/charts/index.js + 40 modules
var charts = __webpack_require__("4c27");

// EXTERNAL MODULE: ./src/views/users/UsersData.js
var UsersData = __webpack_require__("bd76");

// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"748dd0ae-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/LastProjectType.vue?vue&type=template&id=d27355d6&
var LastProjectTypevue_type_template_id_d27355d6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('CCard',[_c('CCardHeader',[_vm._v(" "+_vm._s(_vm.title)+" "),_c('div',{staticClass:"card-header-actions"})]),_c('CCardBody',{},[_c('CDataTable',{staticClass:"m-0  table-borderless ",attrs:{"hover":"","responsive":false,"loading":_vm.isLoading,"items":_vm.items,"fields":_vm.tableFields,"header":false,"cleaner":"","table-filter":"","items-per-page-select":"","items-per-page":5,"pagination":""},scopedSlots:_vm._u([{key:"user",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',[_c('CLink',{staticClass:"text-decoration-none",attrs:{"to":{
                path: 'projets/' + item.idcontents
              }}},[_vm._v(" "+_vm._s(item.titre)+" ")])],1),_c('div',{staticClass:"small text-muted mt-1"},[_c('span',[[_vm._v("New")],(false)?undefined:_vm._e()],2),_vm._v(" | Crée le: "+_vm._s(item.created_at)+" ")])])}},{key:"usage",fn:function(ref){
              var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"clearfix"},[_c('div',{staticClass:"float-left"}),_c('div',{staticClass:"float-right"},[_c('small',{staticClass:"text-bold"},[_c('strong',[_vm._v("Updated: ")]),_vm._v(" "+_vm._s(item.update_at))])])])])}}])},[_c('td',{attrs:{"slot":"activity"},slot:"activity"},[_c('CRow',{staticClass:"ml-4 d-flex justify-content-arround flex-nowrap"},[_c('CLink',{staticClass:"mx-3",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm"}},[_c('CIcon',{staticClass:"mr-1 text-info ",attrs:{"name":"cilList"}})],1)],1)],1)])],1)],1)],1)}
var LastProjectTypevue_type_template_id_d27355d6_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/App/project/LastProjectType.vue?vue&type=template&id=d27355d6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/project/LastProjectType.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var LastProjectTypevue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      required: true
    },
    // isLoading: {
    //   type: Boolean,
    //   default: true
    // },
    title: {
      type: String,
      required: true,
      default: "title"
    }
  },
  data: function data() {
    return {
      tableFields: [{
        key: "user",
        _style: "min-width:550px;",
        filter: false
      }, {
        key: "usage",
        _style: "min-width:200px;"
      }, {
        key: "activity",
        _style: "width:600px;"
      }],
      isLoading: true,
      items: []
    };
  },
  mounted: function mounted() {
    this.LoadDatasType();
  },
  methods: {
    LoadDatasType: function LoadDatasType() {
      var _this = this;

      if (this.name.length) {
        var opt = [{
          column: "c.type",
          operator: "=",
          value: this.name
        }];
        this.isLoading2 = true;
        SelectDb["a" /* default */].selectDatas(opt).then(function (response) {
          console.log("name", _this.name);
          _this.items = response;
          _this.isLoading = false;
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/project/LastProjectType.vue?vue&type=script&lang=js&
 /* harmony default export */ var project_LastProjectTypevue_type_script_lang_js_ = (LastProjectTypevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/App/project/LastProjectType.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  project_LastProjectTypevue_type_script_lang_js_,
  LastProjectTypevue_type_template_id_d27355d6_render,
  LastProjectTypevue_type_template_id_d27355d6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LastProjectType = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/App/ProjectList.vue?vue&type=script&lang=js&
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




/* harmony default export */ var ProjectListvue_type_script_lang_js_ = ({
  name: "SHome",
  props: {},
  components: _objectSpread(_objectSpread({}, charts), {}, {
    LastProjectType: LastProjectType
  }),
  data: function data() {
    return {
      isLoading: false,
      isLoading1: false,
      isLoading2: false,
      selected: "Month",
      tableItems: [],
      itemsProject: [],
      itemsTache: [],
      itemsMemos: [],
      projectType: []
    };
  },
  mounted: function mounted() {
    // this.LoadProjectData();
    // this.LoadTacheData();
    // this.LoadMemosData();
    this.LoadProjectType();
  },
  computed: {
    type: function type() {
      var result = [];

      for (var i in this.projectType) {
        if (this.projectType[i].name == "project") {
          result.push(this.projectType[i]);
        } else if (this.projectType[i].name == "tache") {
          result.push(this.projectType[i]);
        } else {
          result.push(this.projectType[i]);
        }
      }

      return result;
    }
  },
  methods: {
    LoadProjectType: function LoadProjectType() {
      var _this = this;

      SelectDb["a" /* default */].selectTypes().then(function (response) {
        console.log("type : ", response);
        _this.projectType = response;
      });
    },
    hello: function hello(value) {
      console.log("v", value);
    },
    LoadMemosData: function LoadMemosData() {
      var _this2 = this;

      var opt = [{
        column: "c.type",
        operator: "=",
        value: "memos"
      }];
      this.isLoading2 = true;
      SelectDb["a" /* default */].selectDatas(opt).then(function (response) {
        _this2.itemsMemos = response;
        _this2.isLoading2 = false;
      });
    },
    LoadTacheData: function LoadTacheData() {
      var _this3 = this;

      var opt = [{
        column: "c.type",
        operator: "=",
        value: "tache"
      }];
      this.isLoading1 = true;
      SelectDb["a" /* default */].selectDatas(opt).then(function (response) {
        _this3.itemsTache = response;
        _this3.isLoading1 = false;
      });
    },
    // Request for Loading project data on DB
    LoadProjectData: function LoadProjectData() {
      var _this4 = this;

      this.isLoading = true;
      SelectDb["a" /* default */].selectDatas().then(function (response) {
        _this4.tableItems = response;
        _this4.itemsProject = response;
        _this4.isLoading = false;
      });
    },
    color: function color(value) {
      var $color;

      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }

      return $color;
    },
    shuffleArray: function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    },
    getShuffledUsersData: function getShuffledUsersData() {
      return this.shuffleArray(UsersData["a" /* default */].slice(0));
    }
  }
});
// CONCATENATED MODULE: ./src/views/App/ProjectList.vue?vue&type=script&lang=js&
 /* harmony default export */ var App_ProjectListvue_type_script_lang_js_ = (ProjectListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/App/ProjectList.vue





/* normalize component */

var ProjectList_component = Object(componentNormalizer["a" /* default */])(
  App_ProjectListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ProjectList = __webpack_exports__["default"] = (ProjectList_component.exports);

/***/ })

}]);
//# sourceMappingURL=gestionTache.common.16.js.map