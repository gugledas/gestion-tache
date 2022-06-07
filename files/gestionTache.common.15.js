((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[15],{

/***/ "13d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Header/NoteAdmin.vue?vue&type=template&id=af1a162a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CModal',{attrs:{"title":"Note administrative","size":"lg","color":"danger","show":_vm.modalStatus},on:{"update:show":function($event){_vm.modalStatus=$event}}},[_c('CDataTable',{staticClass:"my-2 table-borderless",attrs:{"hover":"","responsive":false,"items":_vm.itemsTache,"fields":_vm.tableFields,"header":false,"loading":_vm.isLoading,"items-per-page":10,"pagination":""},scopedSlots:_vm._u([{key:"user",fn:function(ref){
var item = ref.item;
return _c('td',{staticStyle:{"min-width":"10rem"}},[_c('CLink',{staticClass:"text-decoration-none ",attrs:{"to":{
            path: '/projets/' + item.idcontents,
          }}},[_c('div',{on:{"click":_vm.evModalLast}},[_vm._v(" "+_vm._s(item.titre)+" "),(item.privaty == '1')?_c('CBadge',{attrs:{"color":"danger","position":"top-start","shape":"pill"}},[_vm._v(" Privé ")]):_vm._e()],1),_c('div',{staticClass:"small text-muted mt-1"},[_vm._v(" Crée le: "+_vm._s(item.created_at)+" ")])])],1)}},{key:"usage",fn:function(ref){
          var item = ref.item;
return _c('td',{attrs:{"width":"300"}},[_vm._v(" "+_vm._s(_vm.progressItem(item))+" "),(item.val && item.max)?_c('CProgress',{staticClass:"progress-xs",staticStyle:{"height":"10px"},attrs:{"animated":item.status === '1' || item.status === '3' ? false : true,"showPercentage":"","striped":item.status === '1' || item.status === '3' ? false : true,"max":item.max,"value":item.val,"color":_vm.color(item.val, item.max)}}):_vm._e()],1)}},{key:"activity",fn:function(ref){
          var item = ref.item;
return _c('td',{},[_c('CRow',{staticClass:"ml-0 d-flex justify-content-arround flex-nowrap"},[_c('CLink',{staticClass:"mx-3 text-decoration-none",attrs:{"color":"primary","variant":"ghost","shape":"pill","size":"sm","to":{
            path: '/projets/' + item.idcontents,
          }}},[_c('div',{staticClass:"small text-muted mt-1"},[_vm._v(" Crée le: "+_vm._s(item.created_at)+" ")])])],1)],1)}}])}),_c('CRow',[_c('CCol',{staticClass:" pl-4 mb-n4",attrs:{"col":"10"}},[_c('p',[_vm._v("Voir toutes les "),_c('span',{on:{"click":_vm.evModalLast}},[_c('CLink',{staticClass:"text-danger",attrs:{"to":{
            path: '/projets/988',
          }}},[_vm._v("notes administrative "),_c('CIcon',{staticClass:" mx-1",attrs:{"name":"cilShare","size":"sm"}})],1)],1)])])],1),_c('template',{slot:"footer"},[_c('div',{staticClass:"d-flex justify-content-end mr-3"},[_c('CLink',{directives:[{name:"c-tooltip",rawName:"v-c-tooltip",value:('Actualiser'),expression:"'Actualiser'"}]},[_c('CButton',{attrs:{"size":"sm","shape":"pill","color":"secondary"},on:{"click":function($event){return _vm.LoadTacheData(false)}}},[_c('CIcon',{attrs:{"name":"cil-reload","size":"sm"}})],1)],1)],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Steph/Header/NoteAdmin.vue?vue&type=template&id=af1a162a&scoped=true&

// EXTERNAL MODULE: ./src/views/App/config/SelectDb.js
var SelectDb = __webpack_require__("f0ae");

// EXTERNAL MODULE: ./src/views/App/config/config.js + 72 modules
var config = __webpack_require__("b8a6");

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Steph/Header/NoteAdmin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var NoteAdminvue_type_script_lang_js_ = ({
  name: "noteAdmin",
  props: {
    modalLast: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  components: {//
  },
  data: function data() {
    return {
      current_user: "",
      isLoading: false,
      itemsTache: [],
      tableFields: [{
        key: "user",
        _style: "min-width:550px;",
        filter: false
      }, {
        key: "usage",
        _style: "min-width:200px;"
      } // { key: "activity", _style: "width:800px;" },
      ],
      progress: {
        max: 0,
        val: 0
      },
      currentTime: moment_default()().unix()
    };
  },
  mounted: function mounted() {
    this.current_user = config["a" /* default */].current_user.toString();
    this.LoadTacheData();
    this.timing();
  },
  watch: {
    itemsTache: {
      deep: true,
      handler: function handler(val) {
        console.log('vallwatch', val);

        if (val.length) {
          this.$emit('hide-note');
        }
      }
    } //

  },
  computed: {
    realItemsTache: function realItemsTache() {
      var real = this.itemsTache.filter(function (el) {
        return el.status != '0' && el.status != '2';
      });
      return real;
    },
    utilisateur: function utilisateur() {
      return this.$store.state.utilisateur;
    },
    modalStatus: {
      get: function get() {
        return this.modalLast;
      },
      set: function set(val) {
        console.log('val', this.modalLast);
        this.$emit("update-modal", val);
      }
    }
  },
  methods: {
    LoadTacheData: function LoadTacheData() {
      var _this = this;

      this.isLoading = true;
      SelectDb["a" /* default */].SelectNotesAd(this.current_user).then(function (response) {
        _this.itemsTache = response;
        _this.isLoading = false;
      }).catch(function (er) {
        console.log("error chargement notes administrative:", er);
        _this.isLoading = false;
      });
    },
    timing: function timing() {
      var _this2 = this;

      if (this.dataLoad && this.dataLoad.status == 2) {
        this.currentTime = moment_default()().unix();
        setInterval(function () {
          _this2.currentTime = moment_default()().unix();
        }, 5000);
      } else {
        this.currentTime = moment_default()().unix();
      }
    },
    evModalLast: function evModalLast() {
      this.$emit("ev_modal_last");
    },
    progressItem: function progressItem(item) {
      var date_fin_proposer = moment_default.a.unix(item.date_fin_proposer);
      var date_depart_proposer = moment_default.a.unix(item.date_depart_proposer);
      var exact = moment_default.a.unix(this.currentTime);

      if (item && item.date_fin_reel && item.date_fin_reel > 0) {
        exact = moment_default.a.unix(item.date_fin_reel);
      }

      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");
      item.max = max;
      item.val = val;
    },
    color: function color(valueCurent, maxValue) {
      return config["a" /* default */].color(valueCurent, maxValue);
    }
  }
});
// CONCATENATED MODULE: ./src/Steph/Header/NoteAdmin.vue?vue&type=script&lang=js&
 /* harmony default export */ var Header_NoteAdminvue_type_script_lang_js_ = (NoteAdminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/Steph/Header/NoteAdmin.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_NoteAdminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "af1a162a",
  null
  
)

/* harmony default export */ var NoteAdmin = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=gestionTache.common.15.js.map