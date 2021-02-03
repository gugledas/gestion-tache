<template>
  <div>
    <CRow>
      <CCol md="8">
        <CCard>
          <CCardHeader class="card-color">
            {{ title }}
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
              <CLink
                href="#"
                class=" btn-close m-1"
                @click="warningModal = true"
              >
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
                {{ loremIpsum }}
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
            <CButton @click="warningModal = false" class="mx-1" color="info"
              >Ok</CButton
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
        title="Edition de:"
        color="success"
        :show.sync="modalEdit"
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
                type="number"
                prepend="$"
              />
            </CCol>
          </CRow>
        </div>
        <template slot="footer">
          <div class="d-flex justify-content-end mr-3">
            <CButton @click="modalEdit = false" class="mx-1" color="light"
              >Cancel</CButton
            >
            <CButton @click="modalEdit = false" class="mx-1" color="info"
              >Save</CButton
            >
          </div>
        </template>
      </CModal>
      <!-- end Modal for edditing project -->

      <CCol md="4"
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
import * as Charts from "../charts/index";
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
export default {
  components: {
    ...Charts,
    ckeditor: CKEditor.component
  },
  props: {
    title: {
      type: String,
      default: "le titre du projet"
    }
  },
  data() {
    return {
      modalEdit: false,
      ressourceToAdd: "",
      chooseType: "text",
      descToggle: true,
      show: true,
      selected: "projet",
      warningModal: false,
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
  }
};
</script>

<style lang="scss">
.card-color {
  background-color: rgb(185, 223, 223);
}
</style>
