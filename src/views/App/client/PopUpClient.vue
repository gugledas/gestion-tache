<template lang="html">
  <div :check-valid-form="checkForSave">
    <div class="pl-sm-2 ">
      <CRow>
        <CCol sm="6">
          <CInput
            label="Name:"
            v-model="postData.nom"
            :placeholder="modalType ? 'Nom du client' : 'Nom de la société'"
            :wasValidated="wasValidated"
            validFeedback="ok"
            invalidFeedback="requis"
            :isValid="inputValidation"
          />
        </CCol>
        <CCol sm="5" v-if="modalType">
          <CInput
            label="Prenom:"
            placeholder="Prenom"
            v-model="postData.prenom"
          />
        </CCol>
        <CCol sm="6">
          <CInput
            label="Adresse:"
            placeholder="Adresse"
            v-model="postData.adresse"
          />
        </CCol>
        <CCol sm="3" v-if="modalType">
          <CInput
            label="Uid:"
            placeholder="uid"
            type="number"
            v-model="postData.uid"
          />
        </CCol>

        <CCol sm="5">
          <CInput label="Phone:" placeholder="Phone" v-model="postData.phone" />
        </CCol>
        <CCol sm="6" v-if="!modalType">
          <CInput
            label="Email:"
            placeholder="Email"
            type="email"
            required
            v-model="postData.email"
            :wasValidated="eValidated"
            validFeedback="ok"
            invalidFeedback="Veuiller entrer un email valide"
            :isValid="emailValidation"
          />
        </CCol>
        <CCol sm="7" v-if="!modalType">
          <CInput
            label="Site Web:"
            placeholder="Site Web"
            v-model="postData.siteweb"
          />
        </CCol>
        <CCol sm="7" v-if="modalType">
          <CInput
            label="Fonction:"
            placeholder="fonction"
            v-model="postData.fonction"
          />
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import Utilities from "../project/Utilities.js";

import config from "../config/config";
//import moment from "moment";
export default {
  name: "PopUpContent",
  props: {
    formValues: {
      //required: true
    },
    btnState: {
      type: Object,
      default: function() {
        return { state: false };
      }
    },
    modalType: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  data() {
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
        uid: "0"
      },
      wasValidated: null,
      showInputRaison: false,
      eValidated: null
    };
  },
  mounted() {},
  watch: {
    formValues: {
      deep: true,
      handler: function(val) {
        console.log("val : ", val);
        if (val.phone || val.nom || val.name) {
          this.postData = val;
        }
      }
    }
  },
  computed: {
    checkForSave() {
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
    setBtnState(val) {
      this.btnState.state = val;
    },
    inputValidation(val) {
      if (val.length <= 4) {
        this.wasValidated = false;
        return false;
      } else {
        this.wasValidated = true;
        return true;
      }
    },
    emailValidation(val) {
      var veri = function(val) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    EditProject() {
      Utilities.formatClient(this.postData).then(reponse => {
        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              this.$emit("edition-ok", reponse);
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
    },

    PostNewClient() {
      if (this.modalType) {
        Utilities.formatDataClient(this.postData).then(reponse => {
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                this.request = reponse.data[0];
                this.$emit("load-list-client");
              }
              this.isLoading = false;
              this.postData = {
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
            })
            .catch(function(error) {
              console.log("error", error);
            });
        });
      } else {
        Utilities.formatDataSte(this.postData).then(reponse => {
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                this.request = reponse.data[0];
                this.$emit("load-list-ste");
              }
              this.isLoading = false;
              this.postData = {
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
            })
            .catch(function(error) {
              console.log("error", error);
            });
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
