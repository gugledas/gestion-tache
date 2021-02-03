<template>
  <div>
    <CRow class="ml-2 mt-n2 d-flex " alignVertical="center">
      <CButton
        @click="warningModal = true"
        size="sm"
        color="warning"
        shape="pill"
      >
        <CIcon class="text-white" name="cilPlus" :height="35" size="xl" />
      </CButton>
      <h6 class="ml-1 mt-1" v-if="showSideText">Nouveau projet</h6>
    </CRow>
    <CModal
      size="lg"
      title="Nouveau projet"
      color="warning"
      :show.sync="warningModal"
      ><div>
        <CRow :gutters="false" class="form-group">
          <CCol sm="3"> <p>Choisir un type:</p> </CCol>
          <CCol sm="7"
            ><CInputRadioGroup
              :options="options"
              :checked.sync="selected"
              custom
              inline
            />
          </CCol>
        </CRow>
      </div>
      <hr />
      editorData:
      <div v-html="ser"></div>
      <div class="pl-sm-2 " v-if="selected == 'projet'">
        <CRow>
          <CCol sm="6" md="4">
            <CInput label="Debut:" type="date" horizontal />
          </CCol>
          <CCol sm="6" md="4">
            <CInput label="Fin:" type="date" horizontal />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="5">
            <CInput label="Title:" placeholder="Entrez un titre" />
          </CCol>
          <CCol sm="5">
            <CInput
              label="Nom du Client:"
              placeholder="Select or add new Client"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Description:</label>
            <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="4">
            <CInput
              label="Estimation du coût:"
              append=".00"
              description="montant"
              prepend="$"
            />
          </CCol>
        </CRow>
      </div>
      <div class="pl-sm-2" v-if="selected == 'tache'">
        <CRow>
          <CCol sm="6" md="4">
            <CInput label="Debut:" type="date" horizontal />
          </CCol>
          <CCol sm="6" md="4">
            <CInput label="Fin:" type="date" horizontal />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="5">
            <CInput label="Title:" placeholder="Entrez un titre" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Description:</label>
            <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
          </CCol>
        </CRow>
      </div>
      <div class="pl-sm-2" v-if="selected == 'memos'">
        <CRow>
          <CCol sm="5">
            <CInput label="Title:" placeholder="Entrez un titre" />
          </CCol>
        </CRow>
        <CRow>
          <CCol sm="12">
            <label>Description:</label>
            <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
          </CCol>
        </CRow>
      </div>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="warningModal = false" class="mx-1" color="light"
            >Cancel</CButton
          >
          <CButton @click="warningModal = false" class="mx-1" color="warning"
            >Ok</CButton
          >
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
export default {
  components: {
    ckeditor: CKEditor.component
  },
  props: {
    showSideText: {
      type: Boolean,
      default: null
    },
    prefix: {
      type: String,
      default: "id1"
    }
  },
  data() {
    return {
      editorData: "<p>me al rasp sale</p>",
      selected: "projet",
      warningModal: false,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [
        { value: "projet", label: "Projet" },
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
      console.log(newDiv);
      return newDiv.outerHTML;
    }
  },
  methods: {}
};
</script>
