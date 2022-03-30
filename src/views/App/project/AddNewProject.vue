<template>
  <div>
    <CRow class="ml-2 mt-n2 d-flex" alignVertical="center">
      <CButton
        @click="modalAddOn"
        v-c-tooltip="'Nouveau projet'"
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
      :show.sync="modalAdd"
      :footer="false"
    >
      <PopUpContent
        ref="child"
        :formValues="formValues"
        :btnState="btnStateAdd"
        @addnew-ok="addnewOk"
        @addnew-error="addnewError"
      ></PopUpContent>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="modalAdd = false" class="mx-1" color="light">
            Cancel
          </CButton>
          
          <CButton
            @click="PostNewProject"
            class="mx-1 d-flex align-items-center"
            :color="btnStateAdd.state ? 'warning' : 'light'"
          >
            Save 
      <CSpinner v-if="spinner"
        class="mx-2"
        tag="div"
        color="primary"
        style="width: 0.8rem; height: 0.8rem"
      />
   
          </CButton>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import hljs from "highlight.js";
import PopUpContent from "./PopUpContent";
export default {
  components: { PopUpContent },
  props: {
    showSideText: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      spinner: false,
      postData: {
        starttime: "",
        endtime: "",
        title: "",
        text: "",
      },
      btnStateAdd: { state: false },
      editorData: "<p>content...</p>",
      selected: "projet",
      modalAdd: false,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime",
      },
      options: [
        { value: "projet", label: "Projet" },
        { value: "tache", label: "Tâche" },
        { value: "memos", label: "Mémos" },
      ],
      formValues: {},
    };
  },
  mounted() {},
  computed: {
    ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    },
  },
  methods: {
    modalAddOn() {
      this.modalAdd = true;
      this.$refs.child.TimeNow();
    },
    PostNewProject() {
      if (this.btnStateAdd.state) {
        this.$refs.child.PostNewProject();
      }
    },
    addnewOk() {
      this.spinner = false
      this.modalAdd = false;
    },
    addnewError() {
      alert("Une erreur s'est produit")
      this.spinner = false
    }
  },
};
</script>
