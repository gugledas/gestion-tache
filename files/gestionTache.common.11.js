((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[11],{

/***/ "3af9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_0725c18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9999");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_0725c18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WidgetsBrand_vue_vue_type_style_index_0_id_0725c18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4c27":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CChartLineSimple", function() { return /* reexport */ CChartLineSimple; });
__webpack_require__.d(__webpack_exports__, "CChartBarSimple", function() { return /* reexport */ CChartBarSimple; });
__webpack_require__.d(__webpack_exports__, "CChartLineExample", function() { return /* reexport */ CChartLineExample; });
__webpack_require__.d(__webpack_exports__, "CChartBarExample", function() { return /* reexport */ CChartBarExample; });
__webpack_require__.d(__webpack_exports__, "CChartDoughnutExample", function() { return /* reexport */ CChartDoughnutExample; });
__webpack_require__.d(__webpack_exports__, "CChartRadarExample", function() { return /* reexport */ CChartRadarExample; });
__webpack_require__.d(__webpack_exports__, "CChartPieExample", function() { return /* reexport */ CChartPieExample; });
__webpack_require__.d(__webpack_exports__, "CChartPolarAreaExample", function() { return /* reexport */ CChartPolarAreaExample; });

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartLineSimple.vue?vue&type=template&id=7f852986&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartLine',{attrs:{"datasets":_vm.computedDatasets,"options":_vm.computedOptions,"labels":_vm.labels}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartLineSimple.vue?vue&type=template&id=7f852986&

// EXTERNAL MODULE: ./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js
var coreui_vue_chartjs_common = __webpack_require__("f485");

// EXTERNAL MODULE: ./node_modules/@coreui/utils/src/get-color.js
var get_color = __webpack_require__("9621");

// EXTERNAL MODULE: ./node_modules/@coreui/utils/src/deep-objects-merge.js
var deep_objects_merge = __webpack_require__("88a8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartLineSimple.vue?vue&type=script&lang=js&
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


/* harmony default export */ var CChartLineSimplevue_type_script_lang_js_ = ({
  name: "CChartLineSimple",
  components: {
    CChartLine: coreui_vue_chartjs_common["CChartLine"]
  },
  props: _objectSpread(_objectSpread({}, coreui_vue_chartjs_common["CChartLine"].props), {}, {
    borderColor: {
      type: String,
      default: "rgba(255,255,255,.55)"
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    dataPoints: {
      type: Array,
      default: function _default() {
        return [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    label: {
      type: String,
      default: "Sales"
    },
    pointed: Boolean,
    pointHoverBackgroundColor: String
  }),
  computed: {
    pointHoverColor: function pointHoverColor() {
      if (this.pointHoverBackgroundColor) {
        return this.pointHoverBackgroundColor;
      } else if (this.backgroundColor !== "transparent") {
        return this.backgroundColor;
      }

      return this.borderColor;
    },
    defaultDatasets: function defaultDatasets() {
      return [{
        data: this.dataPoints,
        borderColor: Object(get_color["a" /* default */])(this.borderColor),
        backgroundColor: Object(get_color["a" /* default */])(this.backgroundColor),
        pointBackgroundColor: Object(get_color["a" /* default */])(this.pointHoverColor),
        pointHoverBackgroundColor: Object(get_color["a" /* default */])(this.pointHoverColor),
        label: this.label
      }];
    },
    pointedOptions: function pointedOptions() {
      return {
        scales: {
          xAxes: [{
            offset: true,
            gridLines: {
              color: "transparent",
              zeroLineColor: "transparent"
            },
            ticks: {
              fontSize: 2,
              fontColor: "transparent"
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              display: false,
              min: Math.min.apply(Math, this.dataPoints) - 5,
              max: Math.max.apply(Math, this.dataPoints) + 5
            }
          }]
        },
        elements: {
          line: {
            borderWidth: 1
          },
          point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      };
    },
    straightOptions: function straightOptions() {
      return {
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      };
    },
    defaultOptions: function defaultOptions() {
      var options = this.pointed ? this.pointedOptions : this.straightOptions;
      return Object.assign({}, options, {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      });
    },
    computedDatasets: function computedDatasets() {
      return Object(deep_objects_merge["a" /* default */])(this.defaultDatasets, this.datasets || {});
    },
    computedOptions: function computedOptions() {
      return Object(deep_objects_merge["a" /* default */])(this.defaultOptions, this.options || {});
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartLineSimple.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartLineSimplevue_type_script_lang_js_ = (CChartLineSimplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/charts/CChartLineSimple.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_CChartLineSimplevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartLineSimple = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartBarSimple.vue?vue&type=template&id=318e4509&
var CChartBarSimplevue_type_template_id_318e4509_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartBar',{attrs:{"datasets":_vm.computedDatasets,"options":_vm.computedOptions,"labels":_vm.labels}})}
var CChartBarSimplevue_type_template_id_318e4509_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartBarSimple.vue?vue&type=template&id=318e4509&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartBarSimple.vue?vue&type=script&lang=js&
function CChartBarSimplevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function CChartBarSimplevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CChartBarSimplevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { CChartBarSimplevue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CChartBarSimplevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CChartBarSimplevue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//


/* harmony default export */ var CChartBarSimplevue_type_script_lang_js_ = ({
  name: "CChartBarSimple",
  components: {
    CChartBar: coreui_vue_chartjs_common["CChartBar"]
  },
  props: CChartBarSimplevue_type_script_lang_js_objectSpread(CChartBarSimplevue_type_script_lang_js_objectSpread({}, coreui_vue_chartjs_common["CChartBar"].props), {}, {
    backgroundColor: {
      type: String,
      default: "rgba(0,0,0,.2)"
    },
    pointHoverBackgroundColor: String,
    dataPoints: {
      type: Array,
      default: function _default() {
        return [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12];
      }
    },
    label: {
      type: String,
      default: "Sales"
    },
    pointed: Boolean
  }),
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        data: this.dataPoints,
        backgroundColor: Object(get_color["a" /* default */])(this.backgroundColor),
        pointHoverBackgroundColor: Object(get_color["a" /* default */])(this.pointHoverBackgroundColor),
        label: this.label,
        barPercentage: 0.5,
        categoryPercentage: 1
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
    },
    computedDatasets: function computedDatasets() {
      return Object(deep_objects_merge["a" /* default */])(this.defaultDatasets, this.datasets || {});
    },
    computedOptions: function computedOptions() {
      return Object(deep_objects_merge["a" /* default */])(this.defaultOptions, this.options || {});
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartBarSimple.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartBarSimplevue_type_script_lang_js_ = (CChartBarSimplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartBarSimple.vue





/* normalize component */

var CChartBarSimple_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartBarSimplevue_type_script_lang_js_,
  CChartBarSimplevue_type_template_id_318e4509_render,
  CChartBarSimplevue_type_template_id_318e4509_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartBarSimple = (CChartBarSimple_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartLineExample.vue?vue&type=template&id=960ad5cc&
var CChartLineExamplevue_type_template_id_960ad5cc_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartLine',{attrs:{"datasets":_vm.defaultDatasets,"labels":"months"}})}
var CChartLineExamplevue_type_template_id_960ad5cc_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartLineExample.vue?vue&type=template&id=960ad5cc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartLineExample.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var CChartLineExamplevue_type_script_lang_js_ = ({
  name: "CChartLineExample",
  components: {
    CChartLine: coreui_vue_chartjs_common["CChartLine"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: "Data One",
        backgroundColor: "rgb(228,102,81,0.9)",
        data: [30, 39, 10, 50, 30, 70, 35]
      }, {
        label: "Data Two",
        backgroundColor: "rgb(0,216,255,0.9)",
        data: [39, 80, 40, 35, 40, 20, 45]
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartLineExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartLineExamplevue_type_script_lang_js_ = (CChartLineExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartLineExample.vue





/* normalize component */

var CChartLineExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartLineExamplevue_type_script_lang_js_,
  CChartLineExamplevue_type_template_id_960ad5cc_render,
  CChartLineExamplevue_type_template_id_960ad5cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartLineExample = (CChartLineExample_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartBarExample.vue?vue&type=template&id=1857a29a&
var CChartBarExamplevue_type_template_id_1857a29a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartBar',{attrs:{"datasets":_vm.defaultDatasets,"labels":"months"}})}
var CChartBarExamplevue_type_template_id_1857a29a_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartBarExample.vue?vue&type=template&id=1857a29a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartBarExample.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var CChartBarExamplevue_type_script_lang_js_ = ({
  name: "CChartBarExample",
  components: {
    CChartBar: coreui_vue_chartjs_common["CChartBar"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: "GitHub Commits",
        backgroundColor: "#f87979",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartBarExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartBarExamplevue_type_script_lang_js_ = (CChartBarExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartBarExample.vue





/* normalize component */

var CChartBarExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartBarExamplevue_type_script_lang_js_,
  CChartBarExamplevue_type_template_id_1857a29a_render,
  CChartBarExamplevue_type_template_id_1857a29a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartBarExample = (CChartBarExample_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartDoughnutExample.vue?vue&type=template&id=3aaa1546&
var CChartDoughnutExamplevue_type_template_id_3aaa1546_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartDoughnut',{attrs:{"datasets":_vm.defaultDatasets,"labels":['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}})}
var CChartDoughnutExamplevue_type_template_id_3aaa1546_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartDoughnutExample.vue?vue&type=template&id=3aaa1546&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var CChartDoughnutExamplevue_type_script_lang_js_ = ({
  name: "CChartDoughnutExample",
  components: {
    CChartDoughnut: coreui_vue_chartjs_common["CChartDoughnut"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
        data: [40, 20, 80, 10]
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartDoughnutExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartDoughnutExamplevue_type_script_lang_js_ = (CChartDoughnutExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartDoughnutExample.vue





/* normalize component */

var CChartDoughnutExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartDoughnutExamplevue_type_script_lang_js_,
  CChartDoughnutExamplevue_type_template_id_3aaa1546_render,
  CChartDoughnutExamplevue_type_template_id_3aaa1546_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartDoughnutExample = (CChartDoughnutExample_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartRadarExample.vue?vue&type=template&id=41644072&
var CChartRadarExamplevue_type_template_id_41644072_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartRadar',{attrs:{"datasets":_vm.defaultDatasets,"options":_vm.defaultOptions,"labels":[
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running' ]}})}
var CChartRadarExamplevue_type_template_id_41644072_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartRadarExample.vue?vue&type=template&id=41644072&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartRadarExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CChartRadarExamplevue_type_script_lang_js_ = ({
  name: "CChartRadarExample",
  components: {
    CChartRadar: coreui_vue_chartjs_common["CChartRadar"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: "2019",
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        tooltipLabelColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: "2020",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        tooltipLabelColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        aspectRatio: 1.5
      };
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartRadarExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartRadarExamplevue_type_script_lang_js_ = (CChartRadarExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartRadarExample.vue





/* normalize component */

var CChartRadarExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartRadarExamplevue_type_script_lang_js_,
  CChartRadarExamplevue_type_template_id_41644072_render,
  CChartRadarExamplevue_type_template_id_41644072_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartRadarExample = (CChartRadarExample_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartPieExample.vue?vue&type=template&id=2b79837e&
var CChartPieExamplevue_type_template_id_2b79837e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartPie',{attrs:{"datasets":_vm.defaultDatasets,"labels":[
    'Project',
    'Tâches',
    'Memos',
    'Bugs',
    'Corrigés',
    'test',
    'À-faire' ]}})}
var CChartPieExamplevue_type_template_id_2b79837e_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartPieExample.vue?vue&type=template&id=2b79837e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartPieExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CChartPieExamplevue_type_script_lang_js_ = ({
  name: "CChartPieExample",
  components: {
    CChartPie: coreui_vue_chartjs_common["CChartPie"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        backgroundColor: ["rgb(21, 65, 238)", "rgb(238, 214, 34)", "rgb(21, 223, 238)", "rgb(245, 71, 40)", "rgb(40, 245, 98)", "rgb(186, 75, 145)", "rgb(180, 91, 225)"],
        data: [20, 30, 20, 12, 15, 25, 10]
      }];
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartPieExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartPieExamplevue_type_script_lang_js_ = (CChartPieExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartPieExample.vue





/* normalize component */

var CChartPieExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartPieExamplevue_type_script_lang_js_,
  CChartPieExamplevue_type_template_id_2b79837e_render,
  CChartPieExamplevue_type_template_id_2b79837e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartPieExample = (CChartPieExample_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartPolarAreaExample.vue?vue&type=template&id=c5728712&
var CChartPolarAreaExamplevue_type_template_id_c5728712_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartPolarArea',{attrs:{"datasets":_vm.defaultDatasets,"options":_vm.defaultOptions,"labels":[
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running' ]}})}
var CChartPolarAreaExamplevue_type_template_id_c5728712_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/CChartPolarAreaExample.vue?vue&type=template&id=c5728712&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var CChartPolarAreaExamplevue_type_script_lang_js_ = ({
  name: "CChartPolarAreaExample",
  components: {
    CChartPolarArea: coreui_vue_chartjs_common["CChartPolarArea"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      return [{
        label: "My First dataset",
        backgroundColor: "rgba(179,181,198,0.2)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "rgba(179,181,198,1)",
        pointHoverBorderColor: "rgba(179,181,198,1)",
        data: [65, 59, 90, 81, 56, 55, 40]
      }, {
        label: "My Second dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "rgba(255,99,132,1)",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        aspectRatio: 1.5
      };
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/CChartPolarAreaExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_CChartPolarAreaExamplevue_type_script_lang_js_ = (CChartPolarAreaExamplevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/charts/CChartPolarAreaExample.vue





/* normalize component */

var CChartPolarAreaExample_component = Object(componentNormalizer["a" /* default */])(
  charts_CChartPolarAreaExamplevue_type_script_lang_js_,
  CChartPolarAreaExamplevue_type_template_id_c5728712_render,
  CChartPolarAreaExamplevue_type_template_id_c5728712_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CChartPolarAreaExample = (CChartPolarAreaExample_component.exports);
// CONCATENATED MODULE: ./src/views/charts/index.js










/***/ }),

/***/ "7277":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard.vue?vue&type=template&id=36391ecc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('WidgetsDropdown'),_c('CCard',[_c('CCardBody',[_c('CRow',[_c('CCol',{attrs:{"sm":"5"}},[_c('h4',{staticClass:"card-title mb-0",attrs:{"id":"traffic"}},[_vm._v("Traffic")]),_c('div',{staticClass:"small text-muted"},[_vm._v("November 2018")])]),_c('CCol',{staticClass:"d-none d-md-block",attrs:{"sm":"7"}},[_c('CButton',{staticClass:"float-right",attrs:{"color":"primary"}},[_c('CIcon',{attrs:{"name":"cil-cloud-download"}})],1),_c('CButtonGroup',{staticClass:"float-right mr-3"},_vm._l((['Day', 'Month', 'Year']),function(value,key){return _c('CButton',{key:key,staticClass:"mx-0",attrs:{"color":"outline-secondary","pressed":value === _vm.selected ? true : false},on:{"click":function($event){_vm.selected = value}}},[_vm._v(" "+_vm._s(value)+" ")])}),1)],1)],1),_c('MainChartExample',{staticStyle:{"height":"300px","margin-top":"40px"}})],1),_c('CCardFooter',[_c('CRow',{staticClass:"text-center"},[_c('CCol',{staticClass:"mb-sm-2 mb-0",attrs:{"md":"","sm":"12"}},[_c('div',{staticClass:"text-muted"},[_vm._v("Visits")]),_c('strong',[_vm._v("29.703 Users (40%)")]),_c('CProgress',{staticClass:"progress-xs mt-2",attrs:{"precision":1,"color":"success","value":40}})],1),_c('CCol',{staticClass:"mb-sm-2 mb-0 d-md-down-none",attrs:{"md":"","sm":"12"}},[_c('div',{staticClass:"text-muted"},[_vm._v("Unique")]),_c('strong',[_vm._v("24.093 Users (20%)")]),_c('CProgress',{staticClass:"progress-xs mt-2",attrs:{"precision":1,"color":"info","value":20}})],1),_c('CCol',{staticClass:"mb-sm-2 mb-0",attrs:{"md":"","sm":"12"}},[_c('div',{staticClass:"text-muted"},[_vm._v("Pageviews")]),_c('strong',[_vm._v("70.706 Views (60%)")]),_c('CProgress',{staticClass:"progress-xs mt-2",attrs:{"precision":1,"color":"warning","value":60}})],1),_c('CCol',{staticClass:"mb-sm-2 mb-0",attrs:{"md":"","sm":"12"}},[_c('div',{staticClass:"text-muted"},[_vm._v("New Users")]),_c('strong',[_vm._v("22.123 Users (80%)")]),_c('CProgress',{staticClass:"progress-xs mt-2",attrs:{"precision":1,"color":"danger","value":80}})],1),_c('CCol',{staticClass:"mb-sm-2 mb-0 d-md-down-none",attrs:{"md":"","sm":"12"}},[_c('div',{staticClass:"text-muted"},[_vm._v("Bounce Rate")]),_c('strong',[_vm._v("Average Rate (40.15%)")]),_c('CProgress',{staticClass:"progress-xs mt-2",attrs:{"precision":1,"value":40}})],1)],1)],1)],1),_c('WidgetsBrand'),_c('CRow',[_c('CCol',{attrs:{"md":"12"}},[_c('CCard',[_c('CCardHeader',[_vm._v(" Traffic & Sales ")]),_c('CCardBody',[_c('CRow',[_c('CCol',{attrs:{"sm":"12","lg":"6"}},[_c('CRow',[_c('CCol',{attrs:{"sm":"6"}},[_c('CCallout',{attrs:{"color":"info"}},[_c('small',{staticClass:"text-muted"},[_vm._v("New Clients")]),_c('br'),_c('strong',{staticClass:"h4"},[_vm._v("9,123")])])],1),_c('CCol',{attrs:{"sm":"6"}},[_c('CCallout',{attrs:{"color":"danger"}},[_c('small',{staticClass:"text-muted"},[_vm._v("Recurring Clients")]),_c('br'),_c('strong',{staticClass:"h4"},[_vm._v("22,643")])])],1)],1),_c('hr',{staticClass:"mt-0"}),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Monday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"color":"info","value":34}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"color":"danger","value":78}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Tuesday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":56,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":94,"color":"danger"}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Wednesday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":12,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":67,"color":"danger"}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Thursday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":43,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":91,"color":"danger"}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Friday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":22,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":73,"color":"danger"}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Saturday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":53,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":82,"color":"danger"}})],1)]),_c('div',{staticClass:"progress-group mb-4"},[_c('div',{staticClass:"progress-group-prepend"},[_c('span',{staticClass:"progress-group-text"},[_vm._v(" Sunday ")])]),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":9,"color":"info"}}),_c('CProgress',{staticClass:"progress-xs",attrs:{"value":69,"color":"danger"}})],1)]),_c('div',{staticClass:"legend text-center"},[_c('small',[_c('sup',[_c('CBadge',{attrs:{"shape":"pill","color":"info"}},[_vm._v(" ")])],1),_vm._v(" New clients    "),_c('sup',[_c('CBadge',{attrs:{"shape":"pill","color":"danger"}},[_vm._v(" ")])],1),_vm._v(" Recurring clients ")])])],1),_c('CCol',{attrs:{"sm":"12","lg":"6"}},[_c('CRow',[_c('CCol',{attrs:{"sm":"6"}},[_c('CCallout',{attrs:{"color":"warning"}},[_c('small',{staticClass:"text-muted"},[_vm._v("Pageviews")]),_c('br'),_c('strong',{staticClass:"h4"},[_vm._v("79,623")])])],1),_c('CCol',{attrs:{"sm":"6"}},[_c('CCallout',{attrs:{"color":"success"}},[_c('small',{staticClass:"text-muted"},[_vm._v("Organic")]),_c('br'),_c('strong',{staticClass:"h4"},[_vm._v("49,123")])])],1)],1),_c('hr',{staticClass:"mt-0"}),_c('ul',{staticClass:"horizontal-bars type-2"},[_c('div',{staticClass:"progress-group"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cil-user"}}),_c('span',{staticClass:"title"},[_vm._v("Male")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v("43%")])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":43,"color":"warning"}})],1)]),_c('div',{staticClass:"progress-group mb-5"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cil-user-female"}}),_c('span',{staticClass:"title"},[_vm._v("Female")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v("37%")])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":37,"color":"warning"}})],1)]),_c('div',{staticClass:"progress-group"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cil-globe-alt"}}),_c('span',{staticClass:"title"},[_vm._v("Organic Search")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v(" 191,235 "),_c('span',{staticClass:"text-muted small"},[_vm._v("(56%)")])])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":56,"color":"success"}})],1)]),_c('div',{staticClass:"progress-group"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cib-facebook","height":"17"}}),_c('span',{staticClass:"title"},[_vm._v("Facebook")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v(" 51,223 "),_c('span',{staticClass:"text-muted small"},[_vm._v("(15%)")])])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":15,"color":"success"}})],1)]),_c('div',{staticClass:"progress-group"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cib-twitter","height":"17"}}),_c('span',{staticClass:"title"},[_vm._v("Twitter")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v(" 37,564 "),_c('span',{staticClass:"text-muted small"},[_vm._v("(11%)")])])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":11,"color":"success"}})],1)]),_c('div',{staticClass:"progress-group"},[_c('div',{staticClass:"progress-group-header"},[_c('CIcon',{staticClass:"progress-group-icon",attrs:{"name":"cib-linkedin","height":"17"}}),_c('span',{staticClass:"title"},[_vm._v("LinkedIn")]),_c('span',{staticClass:"ml-auto font-weight-bold"},[_vm._v(" 27,319 "),_c('span',{staticClass:"text-muted small"},[_vm._v(" (8%)")])])],1),_c('div',{staticClass:"progress-group-bars"},[_c('CProgress',{staticClass:"progress-xs",attrs:{"value":8,"color":"success"}})],1)]),_c('div',{staticClass:"divider text-center"},[_c('CButton',{staticClass:"text-muted",attrs:{"color":"link","size":"sm"}},[_c('CIcon',{attrs:{"name":"cil-options"}})],1)],1)])],1)],1),_c('br'),_c('CDataTable',{staticClass:"mb-0 table-outline",attrs:{"hover":"","items":_vm.tableItems,"fields":_vm.tableFields,"head-color":"light","no-sorting":""},scopedSlots:_vm._u([{key:"avatar",fn:function(ref){
var item = ref.item;
return _c('td',{staticClass:"text-center"},[_c('div',{staticClass:"c-avatar"},[_c('img',{staticClass:"c-avatar-img",attrs:{"src":item.avatar.url,"alt":""}}),_c('span',{staticClass:"c-avatar-status",class:("bg-" + (item.avatar.status || 'secondary'))})])])}},{key:"user",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',[_vm._v(_vm._s(item.user.name))]),_c('div',{staticClass:"small text-muted"},[_c('span',[(item.user.new)?[_vm._v("New")]:[_vm._v("Recurring")]],2),_vm._v(" | Registered: "+_vm._s(item.user.registered)+" ")])])}},{key:"country",fn:function(ref){
var item = ref.item;
return _c('td',{staticClass:"text-center"},[_c('CIcon',{attrs:{"name":item.country.flag,"height":"25"}})],1)}},{key:"usage",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"clearfix"},[_c('div',{staticClass:"float-left"},[_c('strong',[_vm._v(_vm._s(item.usage.value)+"%")])]),_c('div',{staticClass:"float-right"},[_c('small',{staticClass:"text-muted"},[_vm._v(_vm._s(item.usage.period))])])]),_c('CProgress',{staticClass:"progress-xs",attrs:{"color":_vm.color(item.usage.value)},model:{value:(item.usage.value),callback:function ($$v) {_vm.$set(item.usage, "value", $$v)},expression:"item.usage.value"}})],1)}},{key:"payment",fn:function(ref){
var item = ref.item;
return _c('td',{staticClass:"text-center"},[_c('CIcon',{attrs:{"name":item.payment.icon,"height":"25"}})],1)}},{key:"activity",fn:function(ref){
var item = ref.item;
return _c('td',{},[_c('div',{staticClass:"small text-muted"},[_vm._v("Last login")]),_c('strong',[_vm._v(_vm._s(item.activity))])])}}])})],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Dashboard.vue?vue&type=template&id=36391ecc&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/MainChartExample.vue?vue&type=template&id=31e12e21&
var MainChartExamplevue_type_template_id_31e12e21_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CChartLine',{attrs:{"datasets":_vm.defaultDatasets,"options":_vm.defaultOptions,"labels":[
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su',
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su' ]}})}
var MainChartExamplevue_type_template_id_31e12e21_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/charts/MainChartExample.vue?vue&type=template&id=31e12e21&

// EXTERNAL MODULE: ./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js
var coreui_vue_chartjs_common = __webpack_require__("f485");

// EXTERNAL MODULE: ./node_modules/@coreui/utils/src/get-style.js + 1 modules
var get_style = __webpack_require__("52d7");

// CONCATENATED MODULE: ./node_modules/@coreui/utils/src/hex-to-rgba.js
/* eslint-disable no-magic-numbers */
var hexToRgba = function hexToRgba(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined');
  }

  var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

  if (!hex) {
    throw new Error("".concat(color, " is not a valid hex color"));
  }

  var r;
  var g;
  var b;

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
  } else {
    r = parseInt(color.slice(1, 2), 16);
    g = parseInt(color.slice(2, 3), 16);
    b = parseInt(color.slice(3, 5), 16);
  }

  return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(opacity / 100, ")");
};

/* harmony default export */ var hex_to_rgba = (hexToRgba);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/charts/MainChartExample.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ var MainChartExamplevue_type_script_lang_js_ = ({
  name: "MainChartExample",
  components: {
    CChartLine: coreui_vue_chartjs_common["CChartLine"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      var brandSuccess = Object(get_style["a" /* default */])("success2") || "#4dbd74";
      var brandInfo = Object(get_style["a" /* default */])("info") || "#20a8d8";
      var brandDanger = Object(get_style["a" /* default */])("danger") || "#f86c6b";
      var elements = 27;
      var data1 = [];
      var data2 = [];
      var data3 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
      }

      return [{
        label: "My First dataset",
        backgroundColor: hex_to_rgba(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      }, {
        label: "My Second dataset",
        backgroundColor: "transparent",
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2
      }, {
        label: "My Third dataset",
        backgroundColor: "transparent",
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./src/views/charts/MainChartExample.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_MainChartExamplevue_type_script_lang_js_ = (MainChartExamplevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/charts/MainChartExample.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_MainChartExamplevue_type_script_lang_js_,
  MainChartExamplevue_type_template_id_31e12e21_render,
  MainChartExamplevue_type_template_id_31e12e21_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MainChartExample = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/widgets/WidgetsDropdown.vue?vue&type=template&id=50a2a4ae&
var WidgetsDropdownvue_type_template_id_50a2a4ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CRow',[_c('CCol',{attrs:{"sm":"6","lg":"3"}},[_c('CWidgetDropdown',{attrs:{"color":"primary","header":"9.823","text":"Members online"},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('CDropdown',{attrs:{"color":"transparent p-0","placement":"bottom-end"},scopedSlots:_vm._u([{key:"toggler-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-settings"}})]},proxy:true}])},[_c('CDropdownItem',[_vm._v("Action")]),_c('CDropdownItem',[_vm._v("Another action")]),_c('CDropdownItem',[_vm._v("Something else here...")]),_c('CDropdownItem',{attrs:{"disabled":""}},[_vm._v("Disabled action")])],1)]},proxy:true},{key:"footer",fn:function(){return [_c('CChartLineSimple',{staticClass:"mt-3 mx-3",staticStyle:{"height":"70px"},attrs:{"pointed":"","data-points":[65, 59, 84, 84, 51, 55, 40],"point-hover-background-color":"primary","label":"Members","labels":"months"}})]},proxy:true}])})],1),_c('CCol',{attrs:{"sm":"6","lg":"3"}},[_c('CWidgetDropdown',{attrs:{"color":"info","header":"9.823","text":"Members online"},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('CDropdown',{attrs:{"color":"transparent p-0","placement":"bottom-end","caret":false},scopedSlots:_vm._u([{key:"toggler-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-location-pin"}})]},proxy:true}])},[_c('CDropdownItem',[_vm._v("Action")]),_c('CDropdownItem',[_vm._v("Another action")]),_c('CDropdownItem',[_vm._v("Something else here...")]),_c('CDropdownItem',{attrs:{"disabled":""}},[_vm._v("Disabled action")])],1)]},proxy:true},{key:"footer",fn:function(){return [_c('CChartLineSimple',{staticClass:"mt-3 mx-3",staticStyle:{"height":"70px"},attrs:{"pointed":"","data-points":[1, 18, 9, 17, 34, 22, 11],"point-hover-background-color":"info","options":{ elements: { line: { tension: 0.00001 } } },"label":"Members","labels":"months"}})]},proxy:true}])})],1),_c('CCol',{attrs:{"sm":"6","lg":"3"}},[_c('CWidgetDropdown',{attrs:{"color":"warning","header":"9.823","text":"Members online"},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('CDropdown',{attrs:{"color":"transparent p-0","placement":"bottom-end"},scopedSlots:_vm._u([{key:"toggler-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-settings"}})]},proxy:true}])},[_c('CDropdownItem',[_vm._v("Action")]),_c('CDropdownItem',[_vm._v("Another action")]),_c('CDropdownItem',[_vm._v("Something else here...")]),_c('CDropdownItem',{attrs:{"disabled":""}},[_vm._v("Disabled action")])],1)]},proxy:true},{key:"footer",fn:function(){return [_c('CChartLineSimple',{staticClass:"mt-3",staticStyle:{"height":"70px"},attrs:{"background-color":"rgba(255,255,255,.2)","data-points":[78, 81, 80, 45, 34, 12, 40],"options":{ elements: { line: { borderWidth: 2.5 } } },"point-hover-background-color":"warning","label":"Members","labels":"months"}})]},proxy:true}])})],1),_c('CCol',{attrs:{"sm":"6","lg":"3"}},[_c('CWidgetDropdown',{attrs:{"color":"danger","header":"9.823","text":"Members online"},scopedSlots:_vm._u([{key:"default",fn:function(){return [_c('CDropdown',{attrs:{"color":"transparent p-0","placement":"bottom-end"},scopedSlots:_vm._u([{key:"toggler-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-settings"}})]},proxy:true}])},[_c('CDropdownItem',[_vm._v("Action")]),_c('CDropdownItem',[_vm._v("Another action")]),_c('CDropdownItem',[_vm._v("Something else here...")]),_c('CDropdownItem',{attrs:{"disabled":""}},[_vm._v("Disabled action")])],1)]},proxy:true},{key:"footer",fn:function(){return [_c('CChartBarSimple',{staticClass:"mt-3 mx-3",staticStyle:{"height":"70px"},attrs:{"background-color":"rgb(250, 152, 152)","label":"Members","labels":"months"}})]},proxy:true}])})],1)],1)}
var WidgetsDropdownvue_type_template_id_50a2a4ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/widgets/WidgetsDropdown.vue?vue&type=template&id=50a2a4ae&

// EXTERNAL MODULE: ./src/views/charts/index.js + 40 modules
var charts = __webpack_require__("4c27");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var WidgetsDropdownvue_type_script_lang_js_ = ({
  name: "WidgetsDropdown",
  components: {
    CChartLineSimple: charts["CChartLineSimple"],
    CChartBarSimple: charts["CChartBarSimple"]
  }
});
// CONCATENATED MODULE: ./src/views/widgets/WidgetsDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_WidgetsDropdownvue_type_script_lang_js_ = (WidgetsDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/widgets/WidgetsDropdown.vue





/* normalize component */

var WidgetsDropdown_component = Object(componentNormalizer["a" /* default */])(
  widgets_WidgetsDropdownvue_type_script_lang_js_,
  WidgetsDropdownvue_type_template_id_50a2a4ae_render,
  WidgetsDropdownvue_type_template_id_50a2a4ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WidgetsDropdown = (WidgetsDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/widgets/WidgetsBrand.vue?vue&type=template&id=0725c18c&scoped=true&
var WidgetsBrandvue_type_template_id_0725c18c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CRow',[(!_vm.noCharts)?[_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-facebook","height":"52"}}),_c('CChartLineSimple',{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[65, 59, 84, 84, 51, 55, 40],"label":"Friends","labels":"months"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-twitter","height":"52"}}),_c('CChartLineSimple',{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[1, 13, 9, 17, 34, 41, 38],"label":"Followers","labels":"months"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-linkedin","height":"52"}}),_c('CChartLineSimple',{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[78, 81, 80, 45, 34, 12, 40],"label":"Contracts","labels":"months"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings","color":"warning"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cil-calendar","height":"52"}}),_c('CChartLineSimple',{staticClass:"c-chart-brand",attrs:{"background-color":"rgba(255,255,255,.1)","data-points":[35, 23, 56, 22, 97, 23, 64],"label":"Followers","labels":"months"}})],1)],1)]:[_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"facebook","right-header":"89k","right-footer":"friends","left-header":"459","left-footer":"feeds"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-facebook","height":"56"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"twitter","right-header":"973k","right-footer":"followers","left-header":"1.792","left-footer":"tweets"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-twitter","height":"56"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"color":"linkedin","right-header":"500+","right-footer":"contracts","left-header":"292","left-footer":"feeds"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cib-linkedin","height":"56"}})],1)],1),_c('CCol',{attrs:{"md":"3","sm":"6"}},[_c('CWidgetBrand',{attrs:{"right-header":"12","right-footer":"events","left-header":"4","left-footer":"meetings","color":"warning"}},[_c('CIcon',{staticClass:"my-4",attrs:{"name":"cil-calendar","height":"56"}})],1)],1)]],2)}
var WidgetsBrandvue_type_template_id_0725c18c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/widgets/WidgetsBrand.vue?vue&type=template&id=0725c18c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/widgets/WidgetsBrand.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var WidgetsBrandvue_type_script_lang_js_ = ({
  name: "WidgetsBrand",
  components: {
    CChartLineSimple: charts["CChartLineSimple"]
  },
  props: {
    noCharts: Boolean
  }
});
// CONCATENATED MODULE: ./src/views/widgets/WidgetsBrand.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_WidgetsBrandvue_type_script_lang_js_ = (WidgetsBrandvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/widgets/WidgetsBrand.vue?vue&type=style&index=0&id=0725c18c&scoped=true&lang=css&
var WidgetsBrandvue_type_style_index_0_id_0725c18c_scoped_true_lang_css_ = __webpack_require__("3af9");

// CONCATENATED MODULE: ./src/views/widgets/WidgetsBrand.vue






/* normalize component */

var WidgetsBrand_component = Object(componentNormalizer["a" /* default */])(
  widgets_WidgetsBrandvue_type_script_lang_js_,
  WidgetsBrandvue_type_template_id_0725c18c_scoped_true_render,
  WidgetsBrandvue_type_template_id_0725c18c_scoped_true_staticRenderFns,
  false,
  null,
  "0725c18c",
  null
  
)

/* harmony default export */ var WidgetsBrand = (WidgetsBrand_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Dashboardvue_type_script_lang_js_ = ({
  name: "Dashboard",
  components: {
    MainChartExample: MainChartExample,
    WidgetsDropdown: WidgetsDropdown,
    WidgetsBrand: WidgetsBrand
  },
  data: function data() {
    return {
      selected: "Month",
      tableItems: [{
        avatar: {
          url: "img/avatars/1.jpg",
          status: "success"
        },
        user: {
          name: "Yiorgos Avraamu",
          new: true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "USA",
          flag: "cif-us"
        },
        usage: {
          value: 50,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Mastercard",
          icon: "cib-cc-mastercard"
        },
        activity: "10 sec ago"
      }, {
        avatar: {
          url: "img/avatars/2.jpg",
          status: "danger"
        },
        user: {
          name: "Avram Tarasios",
          new: false,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Brazil",
          flag: "cif-br"
        },
        usage: {
          value: 22,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Visa",
          icon: "cib-cc-visa"
        },
        activity: "5 minutes ago"
      }, {
        avatar: {
          url: "img/avatars/3.jpg",
          status: "warning"
        },
        user: {
          name: "Quintin Ed",
          new: true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "India",
          flag: "cif-in"
        },
        usage: {
          value: 74,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Stripe",
          icon: "cib-stripe"
        },
        activity: "1 hour ago"
      }, {
        avatar: {
          url: "img/avatars/4.jpg",
          status: ""
        },
        user: {
          name: "Enéas Kwadwo",
          new: true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "France",
          flag: "cif-fr"
        },
        usage: {
          value: 98,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "PayPal",
          icon: "cib-paypal"
        },
        activity: "Last month"
      }, {
        avatar: {
          url: "img/avatars/5.jpg",
          status: "success"
        },
        user: {
          name: "Agapetus Tadeáš",
          new: true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Spain",
          flag: "cif-es"
        },
        usage: {
          value: 22,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Google Wallet",
          icon: "cib-google-pay"
        },
        activity: "Last week"
      }, {
        avatar: {
          url: "img/avatars/6.jpg",
          status: "danger"
        },
        user: {
          name: "Friderik Dávid",
          new: true,
          registered: "Jan 1, 2015"
        },
        country: {
          name: "Poland",
          flag: "cif-pl"
        },
        usage: {
          value: 43,
          period: "Jun 11, 2015 - Jul 10, 2015"
        },
        payment: {
          name: "Amex",
          icon: "cib-cc-amex"
        },
        activity: "Last week"
      }],
      tableFields: [{
        key: "avatar",
        label: "",
        _classes: "text-center"
      }, {
        key: "user"
      }, {
        key: "country",
        _classes: "text-center"
      }, {
        key: "usage"
      }, {
        key: "payment",
        label: "Payment method",
        _classes: "text-center"
      }, {
        key: "activity"
      }]
    };
  },
  methods: {
    /**
     *
     * @param {*} value
     * @deprecated
     */
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
    }
  }
});
// CONCATENATED MODULE: ./src/views/Dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Dashboardvue_type_script_lang_js_ = (Dashboardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/Dashboard.vue





/* normalize component */

var Dashboard_component = Object(componentNormalizer["a" /* default */])(
  views_Dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dashboard = __webpack_exports__["default"] = (Dashboard_component.exports);

/***/ }),

/***/ "9999":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=gestionTache.common.11.js.map