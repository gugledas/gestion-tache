<template>
  <div>
    <CCard>
      <CCardHeader class="card-color">
        <CLink
          :to="'/projet/' + dataLoad.idcontents"
          class="text-dark text-decoration-none"
          >{{ dataLoad.titre }}</CLink
        >
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
          <CLink href="#" class=" btn-close m-2" @click="modalEditOn">
            <CIcon name="cil-pencil" />
          </CLink>
          <CLink href="#" class=" btn-close m-1" @click="HideTypeProject">
            <CIcon name="cil-plus" />
          </CLink>
          <CLink href="#" class="m-2 btn-setting" @click="modalRessourceOn">
            <CIcon name="cil-settings" />
          </CLink>
          <CLink class="m-1 btn-minimize" @click="Collapsed">
            <CIcon :name="`cil-chevron-${dataLoad.open ? 'bottom' : 'top'}`" />
          </CLink>
          <CLink
            href="#"
            class="m-2 btn-close text-danger"
            @click="DeleteModalOn"
          >
            <CIcon color="danger" name="cil-x-circle" />
          </CLink>
        </div>
      </CCardHeader>
      <CCollapse :show="dataLoad.open" :duration="400">
        <CCardBody>
          <CCollapse :show="descToggle" :duration="400">
            <div v-html="textDisplay"></div>
          </CCollapse>
          <slot></slot>
        </CCardBody>
      </CCollapse>
    </CCard>
    <CModal
      title="Confirmer la suppression"
      color="danger"
      :show.sync="deleteModal"
    >
      êtes vous sûre de vouloir supprimer ce contenu? <br />
      <small class="mt-2 text-center">Cette action est irréversible.</small>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="deleteModal = false" class="mx-1" color="light"
            >Cancel</CButton
          >
          <CButton @click="DeleteContent" class="mx-1" color="danger" desabled
            >Supprimer</CButton
          >
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import Utilities from "./Utilities.js";
import config from "../config/config";
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
    },
    isCollapsed: {
      type: Object,
      default: function() {
        return { status: false };
      }
    }
  },
  data() {
    return {
      btnStateEdit: { state: false },
      modalEdit: false,
      deleteModal: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      //isCollapsed: true,
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
    DeleteModalOn() {
      this.deleteModal = true;
    },
    DeleteContent() {
      Utilities.formatDeleteData(this.dataLoad, "delete").then(reponse => {
        console.log(" deleteProject : ", reponse);
        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              console.log("data after delete :", reponse);
              this.$emit("suppression-ok");
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
    },
    Collapsed() {
      if (this.dataLoad.open) {
        this.dataLoad.open = false;
      } else {
        this.dataLoad.open = true;
      }
    },
    HideTypeProject() {
      this.$emit("Hide-type-project", this.dataLoad);
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
