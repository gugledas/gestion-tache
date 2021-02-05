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
    editorData: {{ postData.type }}
    <div v-html="ser"></div>
    <div class="pl-sm-2 ">
      <CRow v-if="postData.type !== 'memos'">
        <CCol sm="6" md="4">
          <CInput
            label="Debut:"
            type="date"
            v-model="postData.startTime"
            horizontal
          />
        </CCol>
        <CCol sm="6" md="4">
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
export default {
  props: {},
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      postData: {
        type: "project",
        startTime: "",
        endTime: "",
        clientName: "",
        titre: "",
        price: "",
        text: "<p>content...</p>"
      },
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
      ]
    };
  },
  mounted() {},
  computed: {
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
        el = {
          type: this.postData.type,
          startTime: this.postData.type,
          endTime: this.postData.type,
          titre: this.postData.type,
          text: this.postData.type
        };
      } else {
        el = {
          titre: this.postData.type,
          text: this.postData.type
        };
      }
      return el;
    }
  },
  methods: {
    PostNewProject() {}
  }
};
</script>

<style></style>
