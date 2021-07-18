<template>
  <div class="card-block">
    <CCard>
      <CCardHeader
        class="shadow-sm "
        :class="[
          'card-progress  card-color card-border card-border--' + dataLoad.type,
          background
        ]"
      >
        <CLink
          :to="'/projets/' + dataLoad.idcontents"
          class="text-dark text-decoration-none"
          >{{ dataLoad.titre }}
        </CLink>
        <div class="px-2 date-created">
          <small>{{ createdAt }}</small>
        </div>
        <CProgress
          class="progress-xs card-prog"
          :animated="dataLoad.status === '1' ? false : true"
          showPercentage
          :striped="dataLoad.status === '1' ? false : true"
          style="height:10px;"
          :max="progress.max"
          :value="progress.val"
          :color="color(progress.val, progress.max)"
          v-if="dataLoad.type.length > 1 && dataLoad.type !== 'memos'"
        />

        <div class="card-header-actions">
          <CLink
            href="#"
            class=" btn-close m-2"
            @click="descToggle = !descToggle"
            v-c-tooltip="'Afficher/Cacher la description'"
          >
            <CIcon
              :name="`cil-chevron-circle-${descToggle ? 'down' : 'up'}-alt`"
            />
          </CLink>
          <CLink
            href="#"
            class=" btn-close m-2"
            v-c-tooltip="'Edité le contenu'"
            @click="modalEditOn"
          >
            <CIcon name="cil-pencil" />
          </CLink>
          <CLink
            href="#"
            class=" btn-close m-2"
            v-c-tooltip="'Modifier le parent'"
            @click="changeParent"
          >
            <CIcon name="cil-cursor-move" />
          </CLink>
          <CLink
            href="#"
            class=" btn-close m-1"
            v-c-tooltip="'Créer un sous contenu'"
            @click="HideTypeProject"
          >
            <CIcon name="cil-plus" />
          </CLink>
          <CLink href="#" class="m-2 btn-setting" @click="modalRessourceOn">
            <CIcon name="cil-settings" />
          </CLink>
          <CLink
            class="m-1 btn-minimize"
            @click="Collapsed"
            v-c-tooltip="'Afficher/Cacher les sous projects'"
          >
            <CIcon :name="`cil-chevron-${dataLoad.open ? 'bottom' : 'top'}`" />
          </CLink>
          <CLink
            href="#"
            class="m-2 btn-close text-danger"
            v-c-tooltip="'Supprimer ce contenu'"
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

    <!-- modal for confirmation of delete -->
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

    <!-- Modal for change hierarchie -->
    <CModal
      title="Modification de la hiérarchie"
      color="dark"
      :show.sync="hierarchiModal"
    >
      <CRow>
        <CCol col="8" sm="5" class="mr-0 pr-0">
          <CInput
            label="Ordre:"
            type="number"
            v-model="newIdParrent.ordre"
            horizontal
          ></CInput
        ></CCol>
        <CCol md="10">
          <SSearch @parent-selected="parentSelected"></SSearch>
          <small>Choisir le nouveau parent</small> <br />
          <small
            >Parent Actuel: <strong>{{ dataLoad.idcontentsparent }}</strong>
          </small>
        </CCol>
      </CRow>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="hierarchiModal = false" class="mx-1" color="light"
            >Cancel</CButton
          >
          <CButton @click="ChangeHierarchie" class="mx-1" color="dark" desabled
            >Enregistrer
            <CSpinner
              v-if="spinner"
              size="sm"
              class=""
              tag="small"
              color="primary"
              style="width:1rem;height:1rem;"
          /></CButton>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import SSearch from "../search/Search";
import Utilities from "./Utilities.js";
import config from "../config/config";
import hljs from "highlight.js";
import moment from "moment";

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
  components: {
    SSearch
  },
  data() {
    return {
      btnStateEdit: { state: false },
      modalEdit: false,
      deleteModal: false,
      hierarchiModal: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      currentTime: "",
      show: true,
      max: "",
      spinner: false,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      newIdParrent: {
        id: "",
        ordre: ""
      },
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
  mounted() {
    this.timing();
  },
  computed: {
    background() {
      var back = "card-back";
      var sts = this.dataLoad.status;

      return back + "--" + sts;
    },
    progress() {
      var el = {};
      var date_fin_proposer = moment.unix(this.dataLoad.date_fin_proposer);
      var date_depart_proposer = moment.unix(
        this.dataLoad.date_depart_proposer
      );
      var exact = moment.unix(this.currentTime);
      if (this.dataLoad.date_fin_reel > 0) {
        exact = moment.unix(this.dataLoad.date_fin_reel);
      }
      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");

      el.max = max;
      el.val = val;
      return el;
    },
    // Affichage du texte formatter
    textDisplay() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.dataLoad.text ? this.dataLoad.text : "";
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });
      return newDiv.outerHTML;
    },
    createdAt() {
      return moment(this.dataLoad.created_at, "YYYY-MM-DD HH:mm").format(
        "DD/MM/YYYY HH:mm"
      );
    }
  },
  methods: {
    timing() {
      if (this.dataLoad.status == 2) {
        this.currentTime = moment().unix();
        setInterval(() => {
          this.currentTime = moment().unix();
        }, 5000);
      } else {
        this.currentTime = moment().unix();
      }
    },
    color(valueCurent, maxValue) {
      let value = 0;
      let $color;
      if (maxValue > 0 && valueCurent > 0) {
        value = (valueCurent * 100) / maxValue;
      }
      if (value <= 25) {
        $color = "success";
      } else if (value > 25 && value <= 50) {
        $color = "info";
      } else if (value > 50 && value <= 85) {
        $color = "secondary";
      } else if (value > 85 && value <= 100) {
        $color = "warning";
      } else {
        $color = "danger";
      }
      return $color;
    },
    parentSelected(data) {
      //console.log("cccc :", data.idcontents);
      this.newIdParrent.id = data.idcontents;
    },
    ChangeHierarchie() {
      this.spinner = true;
      //console.log("object", this.dataLoad.idcontents);

      Utilities.formatHierarchie(this.dataLoad, this.newIdParrent).then(
        reponse => {
          //console.log(" change Hierarchie : ", reponse);
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                console.log("data after edit :", reponse);
                this.$emit("edition-ok", reponse);
              }
              this.spinner = false;
              this.hierarchiModal = false;
            })
            .catch(function(error) {
              console.log("error", error);
            });
        }
      );
    },
    changeParent() {
      console.log("changeparent", this.dataLoad);
      this.$emit("change-parent", this.dataLoad);
      this.newIdParrent.ordre = this.dataLoad.ordre;

      this.hierarchiModal = true;
    },
    DeleteModalOn() {
      this.deleteModal = true;
    },

    //Supression d’un contenu
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
    //Gestion de l’acordéon
    Collapsed() {
      if (this.dataLoad.open) {
        this.dataLoad.open = false;
      } else {
        this.dataLoad.open = true;
      }
    },
    //
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

<style lang="scss">
.date-created {
  color: #9a9a9a;
  font-style: oblique;
}
.card-border {
  border-left: 4px solid;
  &--project {
    border-left-color: rgb(21, 65, 238);
  }
  &--memos {
    border-left-color: rgb(21, 223, 238);
  }
  &--ressource {
    border-left-color: rgb(25, 41, 92);
  }
  &--tache {
    border-left-color: rgb(238, 214, 34);
  }
  &--bug {
    border-left-color: rgb(245, 71, 40);
  }
  &--a_faire {
    border-left-color: rgb(180, 91, 225);
  }
  &--test {
    border-left-color: rgb(186, 75, 145);
  }
  &--corriger {
    border-left-color: rgb(40, 245, 98);
  }
}
.card-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-block {
  border-right: 0;
  .card-header {
    z-index: 1;
    border-top: 0;
    border-bottom: 0;
  }
  .card-body {
    padding-bottom: 0;
  }
  .card {
    border-right: 0;
    border-bottom: 0;
    border-left: 1px solid #b5b5b5;
    border-top-color: rgba(245, 245, 245, 1);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 22px;
      left: -21px;
      height: 2px;
      width: 19%;
      background: #b5b5b5;
    }
  }
}
.card-back {
  &--0 {
    background: white;
  }
  &--1 {
    background: #d0d0d0f7;
  }
  &--2 {
    background: #f5f0d6;
  }
  &--3 {
    background: #f9eae4;
  }
}
.card-prog {
  margin-right: 5px;
  margin-left: auto;
  width: 15%;
}
</style>
