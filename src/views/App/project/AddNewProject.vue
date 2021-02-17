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
      :footer="false"
    >
      <PopUpContent ref="child" :formValues="formValues"></PopUpContent>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3 ">
          <CButton @click="warningModal = false" class="mx-1" color="light">
            Cancel
          </CButton>
          <CButton @click="PostNewProject" class="mx-1" color="warning">
            Save
          </CButton>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import hljs from "highlight.js";
export default {
  components: { PopUpContent: () => import("./PopUpContent.vue") },
  props: {
    showSideText: {
      type: Boolean,
      default: null
    }
  },
  data() {
    return {
      postData: {
        starttime: "",
        endtime: "",
        title: "",
        text: ""
      },
      editorData: "<p>content...</p>",
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
      ],
      formValues: {}
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
    }
  },
  methods: {
    PostNewProject() {
      this.warningModal = false;
      this.$refs.child.PostNewProject();
    }
  }
};
</script>
