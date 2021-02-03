<template>
  <div id="app">
    <ckeditor v-model="editorData.text" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import CKEditor from "ckeditor4-vue";
export default {
  name: "app",
  components: {
    // Use the <ckeditor> component in this view.
    ckeditor: CKEditor.component
  },
  props: {
    editorData: {
      type: Object,
      default: function() {
        return {
          text: ""
        };
      }
    },
    editorConfig: {
      type: Object,
      default: function() {
        return {
          extraPlugins: "codesnippet",
          codeSnippet_theme: "monokai_sublime",
          height: 356
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>
