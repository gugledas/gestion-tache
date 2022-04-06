<template lang="html">
  <div>
    <CRow>
      <!-- filtre -->
      <filtre-project @ev-filter="EvFilter"></filtre-project>
    </CRow>
    <CRow v-if="isLoading ">
      <CSpinner
        class="mx-auto mt-5"
        tag="div"
        color="primary"
        style="width: 4rem; height: 4rem"
      />
    </CRow>
    <CRow v-if="!isLoading">
      <CCol md="12">
        <card-jsx
          :dataLoad="dataLoad"
          @modal-edit-on="modalEditOn"
          @Hide-type-project="HideTypeProject"
          @suppression-ok="LoadProjectData"
          @suppression-error="addnewError"
          @change-parent="changeParent"
          @edition-ok="LoadProjectData"
          @edition-error="addnewError"
        ></card-jsx>
        <!-- <CardComponent
          :dataLoad="dataLoad"
          @modal-edit-on="modalEditOn"
          @ev-modal-edit-on="evModalEditOn"
          @modal-ressource-on="modalRessource = true"
          @Hide-type-project="HideTypeProject"
        ></CardComponent> -->
      </CCol>
      <!-- Start modal for adding new project -->
      <CModal
        size="lg"
        title="Nouveau projet"
        color="info"
        :show.sync="addingModal"
        :closeOnBackdrop="false"
      >
        <PopUpContent
          :form-values="dataOfFormAdd"
          :utilisateur="utilisateur"
          ref="child"
          @addnew-ok="addNewOk"
          @addnew-error="addnewError"
          :level="level"
          :btn-state="btnStateAdd"
        ></PopUpContent>

        <template slot="footer">
          <div class="d-flex justify-content-end mr-3">
            <CButton @click="addingModal = false" class="mx-1" color="light">
              Cancel
            </CButton>
            <CButton
              @click="AddNewTask(true)"
              class="mx-1 d-flex align-items-center"
              :color="btnStateAdd.state ? 'dark' : 'light'"
              desabled
              >Save & add New : 
              <CSpinner
                v-if="spinnerNew"
                class="mx-2"
                tag="div"
                color="light"
                style="width: 0.8rem; height: 0.8rem"
              />
            </CButton>
            <CButton
              @click="AddNewTask(false)"
              class="mx-1 d-flex align-items-center"
              :color="btnStateAdd.state ? 'info' : 'light'"
              desabled
              >Save {{spinner}}
              <CSpinner
                v-if="spinner"
                class="mx-2"
                tag="div"
                color="light"
                style="width: 0.8rem; height: 0.8rem"
              />
            </CButton>
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
        :closeOnBackdrop="false"
      >
        <div class="pl-sm-2" v-if="selected == 'projet'">
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
      <div>
        <CModal
          size="lg"
          :title="'Edition de :' + ' ' + dataOfForm.titre"
          color="success"
          :show.sync="modalEdit"
          :closeOnBackdrop="false"
        >
          <PopUpContent
            :form-values="dataOfForm"
            :utilisateur="utilisateur"
            ref="edchild"
            @edition-ok="LoadProjectData"
            @edition-error="addnewError"
            :btn-state="btnStateEdit"
            :level="level"
          ></PopUpContent>
          <template slot="footer">
            <div class="d-flex justify-content-end mr-3">
              <CButton @click="modalEdit = false" class="mx-1" color="light">
                Cancel
              </CButton>
              
              <CButton
                @click="EditModalPost"
                class="mx-1 d-flex align-items-center"
                :color="btnStateEdit.state ? 'success' : 'light'"
              >
                Enregistrer les modifications
                <CSpinner
                  v-if="spinner"
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

      <!-- end Modal for edditing project -->

      <CCol md="6"
        ><CCard>
          <CCardHeader> stats </CCardHeader>
          <CCardBody><CChartPieExample /> </CCardBody> </CCard
      ></CCol>
    </CRow>
    <div class="scroll-top">
      <CButton @click="scrollTop" class="mx-1" color="warning">
        <CIcon
          class="text-white"
          name="cil-chevron-top"
          :height="35"
          size="xl"
        />
      </CButton>
    </div>
  </div>
</template>

<script>
import * as Charts from "../../charts/index";
import hljs from "highlight.js";
import config from "../config/config";
import Utilities from "./Utilities";
export default {
  name: "SingleProjectPagetest",
  props: {
    idcontents: {
      type: String,
      default: "52"
    }
  },
  components: {
    ...Charts,
    PopUpContent: () => import("./PopUpContent.vue"),
    //CardComponent: () => import("./CardComponent"),
    "card-jsx": () => import("./CardJsx.vue"),
    "filtre-project": () => import("../../../Steph/project/FilterProject.vue")
  },
  data() {
    return {
      spinner: false,
      spinnerNew : false,
      isLoading: false,
      dataOfForm: {},
      dataOfFormAdd: {},
      btnStateEdit: { state: false },
      btnStateAdd: { state: false },
      dataLoad: [],
      idc: null,
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      show: true,
      selected: "projet",
      addingModal: false,
      modalRessource: false,
      isCollapsed: true,
      editorConfig: {
        extraPlugins: "codesnippet",
        codeSnippet_theme: "monokai_sublime"
      },
      options: [
        { value: "projet", label: "Projet" },
        { value: "tache", label: "Tâche" },
        { value: "memos", label: "Mémos" }
      ],
      level: 0
    };
  },
  mounted() {
    this.LoadProjectData();
  },
  watch: {
    //
  },
  computed: {
    utilisateur (){
      return this.$store.state.utilisateur
    },
    modalData() {
      //var room = this.dataLoad;
      var element = [];
      return element;
    },
    textDisplay() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.dataLoad.text ? this.dataLoad.text : "";
      newDiv.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    }
  },
  methods: {
   async addNewOk(data) {
      this.spinner = false
      
      
      if(data && data.level) {
      let allo = await  this.LoadProjectData()
      console.log('Actualisation off',allo)
        this.reOpenModal(data)
      }else {
        this.LoadProjectData()
      }
     
    },
    updateUser(){
      this.LoadProjectData(false);
    },
    changeParent(data) {
      console.log("change-ppparent : ", data);
    },
    modalEditOn(data) {
      console.log("modalEditOn data", data);
      this.dataOfForm = data;
      this.modalEdit = true;
    },
    evModalEditOn(data) {
      console.log("ouverture du poup : ", data);
    },
    // Hide type project if we want to create  content inside project

    HideTypeProject(data) {
      console.log('hide type',data)
      this.idc = data.idcontents;
      this.level = parseInt(data.level) + 1;
      this.addingModal = true;
      this.$refs.child.changeType();
      this.$refs.child.TimeNow();
    },
    // save content edieted
    EditModalPost() {
      if (this.btnStateEdit.state) {
        this.spinner = true
        // this.modalEdit = false;
        this.$refs.edchild.EditProject();
      }
    },
    reOpenModal(data) {
     //console.log("reopen",data)
      this.idc = data.id;
      this.level = parseInt(data.level) + 1;
      this.addingModal = true;
      this.$refs.child.changeType();
      this.$refs.child.TimeNow();
    },
    AddNewTask(nouveau = false) {
     
      if (this.btnStateAdd.state) {
         
        if(!nouveau) {
        this.spinner = true
        this.$refs.child.PostNewProject(this.idc);
        } else {
          this.spinnerNew = true
          this.$refs.child.PostNewProject(this.idc,this.level);
        }
      
     
       }
      
    },
    // Request for Loading data on DB
    LoadProjectData() {
      let self = this;
      this.spinner = true;
      this.isLoading = true;
     return new Promise ((resolv)=> {
        config
        .get("/gestion-project/project-with-childs/" + this.idcontents, {
          headers: {
            Authorization: config.auth
          }
        })
        .then((reponse) => {
          if (reponse.status) {
            this.dataLoad = Utilities.formCard(reponse.data);
            console.log("donnée chargées : ", this.dataLoad);
            this.isLoading = false;
            this.spinner = false;
          
            this.addingModal = false;
            this.modalEdit = false;
            
            this.spinnerNew = false
            resolv (true)
          }
        })
        .catch(function (error) {
          console.log("error", error);
          self.isLoading = false;
          self.spinner = false;
        });
     })
    },
    
    addnewError() {
      alert("Une erreur s'est produit");
      this.spinner = false;
      this.spinnerNew = false;
    },
    EvFilter(filter) {
      var self = this;
      this.spinner = true;
      this.isLoading = true;
      config
        .post(
          "/gestion-project/project-with-childs/" + this.idcontents,
          filter,
          {
            headers: {
              Authorization: config.auth
            }
          }
        )
        .then((reponse) => {
          if (reponse.status) {
            this.dataLoad = Utilities.formCard(reponse.data);
            console.log("donnée filtrée : ", this.dataLoad);
            this.isLoading = false;
            this.spinner = false;
          }
        })
        .catch(function (error) {
          console.log("error", error);
          self.isLoading = false;
          self.spinner = false;
        });
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  right: 20px;
  bottom: 52px;
  z-index: 2;
}
</style>

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
