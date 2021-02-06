<template>
  <div>
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
        </CCol>
      </CRow>
    </div>
    <hr />
    editorData: {{ postData.status }}/ elle: {{ elle }} // show:
    {{ showInputRaison }}
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
    <template slot="footer">
      <div class="d-flex justify-content-end mr-3">
        <CButton @click="warningModal = false" class="mx-1" color="light"
          >Cancel</CButton
        >
        <CButton @click="warningModal = false" class="mx-1" color="warning"
          >Savte</CButton
        >
      </div>
    </template>
  </div>
</template>

<script>
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
import config from "../config/config";
import moment from "moment";
export default {
  props: {},
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      postData: {
        type: "project",
        status: "0",
        startTime: "",
        endTime: "",
        clientName: "",
        titre: "",
        price: "",
        text: "<p>content...</p>"
      },
      allolo: "",
      showInputRaison: false,
      editorData: "<p>content...</p>",
      selected: "projet",
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
  mounted() {},
  watch: {
    postData() {}
  },
  computed: {
    elle() {
      var el = this.showInputRaison;
      if (this.postData.status) {
        el = this.aallo();
      }
      return el;
    },
    ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    },
    noEmpty() {
      var el = {};
      if (this.postData.type == "project") {
        el = this.postData;
      } else if (this.postData.type == "tache") {
        (el.type = this.postData.type),
          (el.startTime = this.postData.startTime),
          (el.endTime = this.postData.endTime),
          (el.titre = this.postData.titre),
          (el.text = this.postData.text);
      } else {
        el = {
          titre: this.postData.titre,
          text: this.postData.text
        };
      }
      return el;
    }
  },
  methods: {
    aallo() {
      console.log("status");
      this.showInputRaison = true;
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
      var o = this.postData.startTime;
      var al = moment(o, "DD-MM-YYYY  HH:mm").unix();

      console.log("moment", al);
    },
    FormatTime(id) {
      var data = this.postData;
      var ddp = moment(data.startTime, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.endTime, "YYYY-MM-DD  HH:mm").unix();
      var status = data.status;

      var rest = [];
      rest.push({
        idcontents: id,
        date_depart_proposer: ddp,
        date_fin_proposer: dfp,
        date_fin_reel: reelD,
        status: status,
        temps_pause: temps_pause,
        raison: raison
      });
    },
    FormatData() {
      var result = [];
      result.push({
        table: "gestion_project_contents",
        fields: {
          text: this.postData.text,
          titre: this.postData.titre
        }
      });
      return result;
    },
    PostNewProject() {
      console.log("created", this.FormatData());

      config
        .post("/gestion-project/save-update", this.FormatData())
        .then(reponse => {
          if (reponse.status) {
            if (reponse) {
              this.request = reponse.data[0];
              console.log("dataLoad", this.dataLoad);
            }
          }
          this.isLoading = false;
        })
        .catch(function(error) {
          console.log("error", error);
        });
    }
  }
};
</script>

<style></style>
