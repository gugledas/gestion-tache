<template lang="html">
  <div :check-valid-form="checkForSave">
    <div>
      <CRow :gutters="false" class="form-group">
        <CCol sm="3"> <p>Choisir un type:</p> </CCol>
        <CCol sm="7"
          ><CInputRadioGroup
            :options="options"
            :checked.sync="postData.type"
            custom
            inline
          />
          <small v-if="postData.type.length < 2" class="text-danger">
            ce champ est requis
          </small>
        </CCol>
      </CRow>
    </div>
    <hr />

    <div v-html="ser"></div>
    <div class="pl-sm-2 ">
      <CRow
        :gutters="false"
        class="form-group"
        v-if="postData.type !== 'memos'"
      >
        <CCol sm="2"> <p>Statut:</p> </CCol>
        <CCol sm="10"
          ><CInputRadioGroup
            :options="statusOpt"
            :checked.sync="postData.status"
            custom
            inline
          />
        </CCol>
        <CCol sm="8" md="7" v-if="showInputRaison">
          <CTextarea
            label="Raison:"
            type="textarea"
            v-model="postData.raison"
            horizontal
            placeholder="writes something..."
            rows="2"
            description="Une description de la raison du changement de status"
          />
        </CCol>
      </CRow>
      <CRow v-if="postData.type !== 'memos'">
        <CCol sm="6" md="5">
          <CInput
            label="Debut:"
            type="date"
            v-model="postData.startTime"
            horizontal
          />
        </CCol>
        <CCol sm="6" md="5">
          <CInput
            label="Fin:"
            v-model="postData.endTime"
            type="date"
            horizontal
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="7">
          <CInput
            label="Title:"
            v-model="postData.titre"
            placeholder="Entrez un titre"
            :wasValidated="wasValidated"
            validFeedback="ok"
            invalidFeedback="requis"
            :isValid="inputValidation"
          />
        </CCol>
        <CCol sm="5" v-if="postData.type == 'project'">
          <CInput
            label="Nom du Client:"
            placeholder="Select or add new Client"
            v-model="postData.clientName"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12">
          <label>Description:</label>
          <ckeditor v-model="postData.text" :config="editorConfig"></ckeditor>
        </CCol>
      </CRow>
      <CRow v-if="postData.type == 'project'">
        <CCol col="8" lg="4">
          <CInput
            label="Estimation du coût:"
            append=".00"
            description="montant"
            prepend="$"
            v-model="postData.price"
          />
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import Utilities from "./Utilities.js";
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
import config from "../config/config";
import moment from "moment";
export default {
  name: "PopUpContent",
  props: {
    formValues: {
      type: [Object],
      required: true
    },
    btnState: {
      type: Object,
      default: function() {
        return { state: false };
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      postData: {
        typeIsOk: false,
        type: "project",
        status: "0",
        startTime: "",
        endTime: "",
        clientName: "",
        titre: "",
        price: "",
        text: ""
      },
      wasValidated: null,
      showInputRaison: false,
      editorData: "",
      warningModal: false,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [
        { value: "project", label: "Projet" },
        { value: "tache", label: "Tâche" },
        { value: "memos", label: "Mémos" }
      ],
      statusOpt: [
        { value: "0", label: "New" },
        { value: "2", label: "Encours" },
        { value: "1", label: "Terminé" },
        { value: "3", label: "Annulé" }
      ]
    };
  },
  mounted() {
    //
  },
  watch: {
    formValues: {
      deep: true,
      handler: function(val) {
        console.log("formValues : ", val);
        if (val.idcontents) {
          this.postData["idcontents"] = val.idcontents;
        }
        for (const i in this.postData) {
          if (val[i]) {
            this.postData[i] = val[i];
          }
        }
      }
    }
  },
  computed: {
    checkForSave() {
      if (this.wasValidated == true && this.postData.type.length > 2) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
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
    EventShowInput() {
      console.log("object");
    },
    changeType() {
      this.options = [
        { value: "tache", label: "Tâche" },
        { value: "memos", label: "Mémos" }
      ];
      this.postData.type = "tache";
    },
    EditProject() {
      Utilities.formatData(this.postData).then(reponse => {
        console.log(" EditProject : ", reponse);
        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              console.log("data after edit :", reponse);
              this.$emit("edition-ok", reponse);
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
    },
    FormatTime(id) {
      var data = this.postData;
      var ddp = moment(data.startTime, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.endTime, "YYYY-MM-DD  HH:mm").unix();
      //var status = data.status;

      var rest = [];
      rest.push({
        idcontents: id,
        date_depart_proposer: ddp,
        date_fin_proposer: dfp
        // date_fin_reel: "reelD",
        // status: status,
        // temps_pause: "temps_pause",
        // raison: "raison"
      });
    },
    FormatData(idc) {
      var data = this.postData;
      var ddp = moment(data.startTime, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.endTime, "YYYY-MM-DD  HH:mm").unix();
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
          tables: [
            {
              table: "gestion_project_times",
              fields: {
                date_depart_proposer: ddp,
                date_fin_proposer: dfp,
                status: state
              }
            },
            {
              table: "gestion_project_hierachie",
              fields: {
                idcontentsparent: idc,
                ordre: 0
              }
            }
          ]
        }
      });
      return result;
    },
    PostNewProject(idc) {
      Utilities.formatAddData(this.postData, idc, this.level).then(reponse => {
        console.log("created", reponse);

        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              this.request = reponse.data[0];
              this.$emit("addnew-ok");
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
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
