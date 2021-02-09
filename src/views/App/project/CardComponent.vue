<template>
  <div>
    <CCard>
      <CCardHeader class="card-color">
        {{ dataLoad.titre }}
        <div class="card-header-actions">
          <CLink
            href="#"
            class=" btn-close m-2"
            @click="descToggle = !descToggle"
          >
            <CIcon
              :name="`cil-chevron-circle-${descToggle ? 'down' : 'up'}-alt`"
            />
          </CLink>
          <CLink href="#" class=" btn-close m-2" @click="modalEditOn(dataLoad)">
            <CIcon name="cil-pencil" />
          </CLink>
          <CLink href="#" class=" btn-close m-1" @click="HideTypeProject">
            <CIcon name="cil-plus" />
          </CLink>
          <CLink href="#" class="m-2 btn-setting" @click="modalRessourceOn">
            <CIcon name="cil-settings" />
          </CLink>
          <CLink class="m-1 btn-minimize" @click="isCollapsed = !isCollapsed">
            <CIcon :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`" />
          </CLink>
          <CLink href="#" class="m-2 btn-close" v-on:click="show = false">
            <CIcon name="cil-x-circle" />
          </CLink>
        </div>
      </CCardHeader>
      <CCollapse :show="isCollapsed" :duration="400">
        <CCardBody>
          <CCollapse :show="descToggle" :duration="400">
            <div v-html="textDisplay"></div>
          </CCollapse>
          <slot></slot>
        </CCardBody>
      </CCollapse>
    </CCard>
  </div>
</template>

<script>
import hljs from "highlight.js";
export default {
  name: "CardComponent",
  props: {
    dataLoad: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      btnStateEdit: { state: false },
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      isCollapsed: true,
      editorData: "<p>me al rasp sale</p>",
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
  computed: {
    textDisplay() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.dataLoad.text ? this.dataLoad.text : "";
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    }
  },
  methods: {
    HideTypeProject() {
      this.$emit("Hide-type-project");
    },
    modalEditOn() {
      //console.log("edit : ", this.dataLoad.titre);
      this.$emit("modal-edit-on", this.dataLoad);
    },
    modalRessourceOn() {
      this.$emit("modal-ressource-on");
    },
    modalEditOnText(item) {
      console.log("Test edit : ", item.titre);
      this.$emit("ev-modal-edit-on", item);
    }
  }
};
</script>

<style></style>
