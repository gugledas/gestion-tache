<template lang="html">
  <div>
    <CRow>
      <CCol md="12">
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
              <CLink href="#" class=" btn-close m-2" @click="modalEdit = true">
                <CIcon name="cil-pencil" />
              </CLink>
              <CLink href="#" class=" btn-close m-1" @click="HideTypeProject">
                <CIcon name="cil-plus" />
              </CLink>
              <CLink
                href="#"
                class="m-2 btn-setting"
                @click="modalRessource = true"
              >
                <CIcon name="cil-settings" />
              </CLink>
              <CLink
                class="m-1 btn-minimize"
                @click="isCollapsed = !isCollapsed"
              >
                <CIcon
                  :name="`cil-chevron-${isCollapsed ? 'bottom' : 'top'}`"
                />
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
            </CCardBody>
          </CCollapse>
        </CCard>
      </CCol>

      <!-- Start modal for adding new project -->
      <CModal
        size="lg"
        title="Nouveau projet"
        color="info"
        :show.sync="addingModal"
      >
        <PopUpContent :form-values="dataLoad" ref="child"></PopUpContent>
        <template slot="footer">
          <div class="d-flex justify-content-end mr-3">
            <CButton @click="addingModal = false" class="mx-1" color="light"
              >Cancel</CButton
            >
            <CButton @click="AddNewTask" class="mx-1" color="info" desabled
              >Save</CButton
            >
          </div>
        </template>
      </CModal>
      <!-- end modal Add new  -->

      <!-- modal for adding ressource -->
      <CModal
        size="lg"
        title="Ressources"
        color="light"
        :show.sync="modalRessource"
      >
        <div class="pl-sm-2 " v-if="selected == 'projet'">
          <CRow class="d-flex flex-nowrap">
            <CCol md="7" class="">
              <CInput
                label="add new ressource"
                :type="chooseType"
                :placeholder="chooseType"
                v-model="ressourceToAdd"
              >
                <template #append>
                  <div>
                    <CDropdown
                      toggler-text="Type"
                      class="rounded-0"
                      color="dark"
                      @click="ressourceToAdd = ''"
                    >
                      <CDropdownItem @click="chooseType = 'text'"
                        >text</CDropdownItem
                      >
                      <CDropdownItem @click="chooseType = 'file'"
                        >file</CDropdownItem
                      >
                    </CDropdown>
                    <CButton color="primary">Add</CButton>
                  </div>
                </template>
              </CInput>
            </CCol>
          </CRow>
        </div>

        <template slot="footer">
          <div class="d-flex justify-content-end mr-3">
            <CButton @click="modalRessource = false" class="mx-1" color="light"
              >Cancel</CButton
            >
            <CButton @click="modalRessource = false" class="mx-1" color="info"
              >ok</CButton
            >
          </div>
        </template>
      </CModal>
      <!-- end ressource modal -->

      <!-- Madal for edditing project -->
      <CModal
        size="lg"
        :title="'Edition de : ' + dataLoad.titre"
        color="success"
        :show.sync="modalEdit"
      >
        <PopUpContent
          :form-values="dataLoad"
          ref="edchild"
          @edition-ok="LoadProjectData"
          :btn-state="btnStateEdit"
        ></PopUpContent>
        btn: : {{ btnStateEdit }}
        <template slot="footer">
          <div class="d-flex justify-content-end mr-3">
            <CButton @click="modalEdit = false" class="mx-1" color="light">
              Cancel
            </CButton>
            <CButton
              @click="EditModalPost"
              class="mx-1"
              :color="btnStateEdit.state ? 'success' : 'light'"
            >
              Enregistrer les modifications
            </CButton>
          </div>
        </template>
      </CModal>
      <!-- end Modal for edditing project -->

      <CCol md="6"
        ><CCard>
          <CCardHeader>
            stats
          </CCardHeader>
          <CCardBody><CChartPieExample /> </CCardBody> </CCard
      ></CCol>
    </CRow>
  </div>
</template>

<script>
import * as Charts from "../../charts/index";
import hljs from "highlight.js";
import config from "../config/config";
export default {
  name: "SimpleProjectPagetest",
  props: {
    idcontents: {
      type: String,
      default: "52"
    }
  },
  components: {
    ...Charts,
    PopUpContent: () => import("./PopUpContent.vue")
  },
  data() {
    return {
      btnStateEdit: { state: false },
      dataLoad: {},
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
      ],
      loremIpsum:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
    };
  },
  mounted() {
    this.LoadProjectData();
  },
  watch: {
    //
  },
  computed: {
    modalData() {
      //var room = this.dataLoad;
      var element = [];
      return element;
    },
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
    // Hide type project if we want to create  content inside project
    HideTypeProject() {
      this.addingModal = true;
      this.$refs.child.changeType();
    },
    // save content edieted
    EditModalPost() {
      if (this.btnStateEdit.state) {
        this.modalEdit = false;
        this.$refs.edchild.EditProject();
      }
    },
    AddNewTask() {
      this.addingModal = false;
      this.$refs.child.PostNewProject();
    },
    // Request for Loading data on DB
    LoadProjectData() {
      this.isLoading = true;
      config
        .get("/gestion-project/project-with-childs/" + this.idcontents)
        .then(reponse => {
          if (reponse.status) {
            this.dataLoad = reponse.data[0];
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
