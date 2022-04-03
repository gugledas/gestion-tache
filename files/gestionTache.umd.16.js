((typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpgestionTache"] || []).push([[16],{

/***/ "8b48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"780923cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/Login.vue?vue&type=template&id=504099fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"c-app flex-row align-items-center"},[_c('CContainer',[_c('CRow',{staticClass:"justify-content-center"},[_c('CCol',{attrs:{"md":"8"}},[_c('CCardGroup',[_c('CCard',{staticClass:"p-4"},[_c('CCardBody',[_c('CForm',{attrs:{"novalidation":""},on:{"submit":_vm.validUserInfo}},[_c('h1',[_vm._v("Connexion")]),_c('p',{staticClass:"text-muted"},[_vm._v("Connecter-vous à votre compte")]),_c('CInput',{attrs:{"placeholder":"Username","isValid":_vm.invalidUser,"required":""},scopedSlots:_vm._u([{key:"prepend-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-user"}})]},proxy:true}]),model:{value:(_vm.user),callback:function ($$v) {_vm.user=$$v},expression:"user"}}),_c('CInput',{attrs:{"placeholder":"Password","type":"password","isValid":_vm.invalidPass,"invalidFeedback":_vm.invalidFeedback,"required":""},scopedSlots:_vm._u([{key:"prepend-content",fn:function(){return [_c('CIcon',{attrs:{"name":"cil-lock-locked"}})]},proxy:true}]),model:{value:(_vm.pass),callback:function ($$v) {_vm.pass=$$v},expression:"pass"}}),_c('CRow',{staticClass:"flex-wrap d-flex",attrs:{"align-vertical":"center"}},[_c('CCol',{staticClass:"text-left col-12 col-sm-6"},[_c('CButton',{staticClass:"px-2 w-100 d-flex justify-content-around align-items-center ",attrs:{"color":"primary","type":"submit"}},[_vm._v(" Se connecter "),(_vm.isloading)?_c('CSpinner',{staticClass:"ml-2",attrs:{"size":"sm","color":"secondary"}}):_vm._e()],1)],1),_c('CCol',{staticClass:"text-right col-12 col-sm-6"},[_c('CButton',{staticClass:"px-0",attrs:{"color":"link"}},[_vm._v(" Forgot password? ")]),_c('CButton',{staticClass:"d-lg-none",attrs:{"color":"link"}},[_vm._v(" Register now! ")])],1)],1)],1)],1)],1),_c('CCard',{staticClass:"text-center py-5 d-lg-down-none",attrs:{"color":"primary","text-color":"white","body-wrapper":""}},[_c('CCardBody',[_c('h2',[_vm._v("Gestion des tâches")]),_c('p',[_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/pages/Login.vue?vue&type=template&id=504099fe&

// EXTERNAL MODULE: ./src/connect.js
var connect = __webpack_require__("b0bd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pages/Login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loginvue_type_script_lang_js_ = ({
  name: "Login",
  data: function data() {
    return {
      invalidFeedback: "nom d'utilisateur ou mot de passe incorrect",
      user: "stanee",
      pass: "azabzistany@gmail.com",
      invalidPass: null,
      invalidUser: null,
      isloading: false
    };
  },
  mounted: function mounted() {
    connect["a" /* default */].checkUserLogin();
  },
  methods: {
    validUserInfo: function validUserInfo() {
      var _this = this;

      //let self = this
      event.preventDefault();
      this.isloading = true;
      connect["a" /* default */].testLogin(this.user, this.pass).then(function (reponse) {
        console.log('login res', reponse);
        var user = {
          username: _this.user,
          password: _this.pass
        };

        if (reponse && reponse.data && reponse.data.uid) {
          window.localStorage.clear();
          localStorage.setItem('current_user', JSON.stringify(reponse.data.uid[0].value));
        }

        window.localStorage.setItem('user', JSON.stringify(user));

        if (window.location.href != window.document.referrer) {
          window.location.href = window.document.referrer;
        } else {
          window.location.href = window.location.origin;
        }

        _this.isloading = false;
      }, function (er) {
        console.log('error', er);

        if (er && er.error && er.error.statusText) {
          _this.invalidFeedback = er.error.statusText;
        }

        _this.isloading = false;
        _this.invalidPass = false; // console.log('login error', error)
      });
    }
  }
});
/* 
lorsqu'un utilisateur arrive 
  on verifie s'il existe des données dans le localstorage = user
    si oui 
      rien ne se passe  
    SINON
      on le redirige vers la page de login
      ils entre ses identifiants
        si requête renvoie ok
         on stoque ses information dans le localstorage user ensuite on le redirige à l'acceuil
*/
// CONCATENATED MODULE: ./src/views/pages/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/pages/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=gestionTache.umd.16.js.map