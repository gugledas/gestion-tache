<<<<<<< HEAD
<template lang="html">
  <div :check-valid-form="checkForSave">
    <div>
      <CRow :gutters="false" class="form-group">
        <!-- <pre>{{ this.options }}</pre> -->
        <pre>duree: {{ dureeProjet }}</pre>
        <br />
        <CCol sm="3"> <p>Choisir un type:</p> </CCol>

        <CCol sm="9"
          ><CInputRadioGroup
            :options="options"
            :checked.sync="postData.type"
            custom
            inline
          />
          <small v-if="postData.type.length < 2" class="text-danger">
            ce champ est requis
          </small>
        </CCol>
      </CRow>
    </div>
    <hr />

    <div class="pl-sm-2 ">
      <CRow
        :gutters="false"
        class="form-group"
        v-if="postData.type !== 'memos' && postData.date_fin_reel === ''"
      >
        <CCol sm="2"> <p>Statut:</p> </CCol>
        <CCol sm="10">
          <CInputRadioGroup
            :options="statusOpt"
            :checked.sync="postData.status"
            custom
            inline
          />
        </CCol>
        <CCol sm="8" md="7" v-if="showInputRaison">
          <CTextarea
            label="Raison:"
            type="textarea"
            v-model="postData.raison"
            horizontal
            placeholder="writes something..."
            rows="2"
            description="Une description de la raison du changement de status"
          />
        </CCol>
      </CRow>
      <CRow v-if="postData.type !== 'memos'">
        <CCol col="12" lg="6">
          <CRow class=" ">
            <CInput
              label="Debut:"
              type="date"
              v-model="postData.date_depart_proposer"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              horizontal
              class="col-10 col-sm-7"
            />
            <CInput
              v-model="postData.heure_debut"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="time"
              class="col-8 ml-sm-0 pl-sm-0 col-sm-5 "
              horizontal
            />
          </CRow>
        </CCol>
        <CCol col="10" lg="6">
          <CRow class="">
            <CInput
              label="Fin:"
              v-model="postData.date_fin_proposer"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="date"
              horizontal
              class="col-10 col-sm-7"
            /><CInput
              v-model="postData.heure_fin"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="time"
              class="col-8 ml-sm-0 pl-sm-0 col-sm-5 "
              horizontal
            />
          </CRow>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="7">
          <CInput
            label="Title:"
            v-model="postData.titre"
            placeholder="Entrez un titre"
            :wasValidated="wasValidated"
            validFeedback="ok"
            invalidFeedback="requis"
            :isValid="inputValidation"
          />
        </CCol>
        <CCol sm="5" v-if="postData.type == 'project'">
          <CInput
            label="Nom du Client:"
            placeholder="Select or add new Client"
            v-model="postData.clientName"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12">
          <label>Description:</label>
          <ckeditor
            v-model="postData.text"
            @namespaceloaded="onNamespaceLoaded"
            :config="editorConfig"
          ></ckeditor>
        </CCol>
      </CRow>
      <CRow v-if="postData.type == 'project'">
        <CCol col="8" lg="4">
          <CInput
            label="Estimation du coût:"
            append=".00"
            description="montant"
            prepend="$"
            v-model="postData.price"
          />
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import Utilities from "./Utilities.js";
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
import config from "../config/config";
import moment from "moment";
import ProjectOptionsType from "./ProjectOptionsType";
export default {
  name: "PopUpContent",
  props: {
    formValues: {
      type: [Object],
      required: true
    },
    btnState: {
      type: Object,
      default: function() {
        return { state: false };
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      postData: {
        typeIsOk: false,
        type: "project",
        status: "0",
        date_depart_proposer: "",
        date_fin_proposer: "",
        date_fin_reel: "",
        temps_pause: "",
        raison: "",
        heure_debut: "",
        heure_fin: "",
        clientName: "",
        titre: "",
        price: "",
        text: ""
      },
      fHeure: "",
      dHeure: "",
      wasValidated: null,
      showInputRaison: false,
      editorData: "",
      warningModal: false,
      extraPlugins: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        contentsCss:
          " @import 'http://gestion-tache-vuejs.kksa/ckeditors/styles/style.css'; body{margin:1em !important; background: #FFF;}",
        on: {
          instanceReady: function() {
            // Output paragraphs as <p>Text</p>.
            this.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            this.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });

            this.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      },
      options: [
        // { value: "project", label: "Projet" },
        // { value: "tache", label: "Tâche" },
        // { value: "memos", label: "Mémos" }
      ],
      statusOpt: [
        { value: "0", label: "New" },
        { value: "2", label: "Encours" },
        { value: "1", label: "Terminé" },
        { value: "3", label: "Annulé" }
      ]
    };
  },
  mounted() {
    ProjectOptionsType.loadType().then(reponse => {
      this.options = reponse;
    });
  },
  watch: {
    formValues: {
      deep: true,
      handler: function(val) {
        //console.log("val : ", val);
        Utilities.fomatVal(val, this.postData).then(() => {});
        console.log("result :", this.postData, this.fHeure);
        console.log("debut heure : ", this.dHeure);
      }
    }
  },
  computed: {
    dureeProjet() {
      var el;
      if (
        this.formValues.date_depart_proposer &&
        this.formValues.date_fin_proposer
      ) {
        el =
          this.formValues.date_fin_proposer -
          this.formValues.date_depart_proposer;
        // var ss = moment.unix(this.formValues.date_fin_proposer);
        // var tt = moment.unix(this.formValues.date_depart_proposer);
        // var re = ss.diff(tt, "minutes", true);
        // console.log("re", re, ss, tt);
      }
      return el;
    },
    tarara() {
      var date = this.postData.date_depart_proposer + " " + this.dHeure;
      var val = moment(date, "YYYY-MM-DD HH:mm").unix();
      var lello = moment.unix(val).format("HH:mm");
      var tal = [];
      tal.push(val);
      tal.push(lello);
      return tal;
    },
    checkForSave() {
      if (this.wasValidated == true && this.postData.type.length > 2) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    },
    editorConfig() {
      var extraPlugins =
        "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      if (!window.location.host.includes("localhost")) {
        return {
          extraPlugins: extraPlugins + ",quickuploader",
          ...this.preEditorConfig
        };
      } else {
        return {
          extraPlugins: extraPlugins,
          ...this.preEditorConfig
        };
      }
    },
    optionsTache() {
      var rs = [];
      for (let i of this.options) {
        if (i.value == "project") {
          //console.log("iii :");
        } else {
          rs.push(i);
        }
      }
      //console.log("rs", rs);
      return rs;
    }
  },
  methods: {
    onNamespaceLoaded(CKEDITOR) {
      // Add external `placeholder` plugin which will be available for each
      // editor instance on the page.
      if (!window.location.host.includes("localhost")) {
        CKEDITOR.plugins.addExternal(
          "quickuploader",
          "/ckeditors/ckeditor_4.16.0_basic/ckeditor/plugins/quickuploader/plugin.js"
        );
      }
      /**/
      CKEDITOR.config.allowedContent = true;
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';

      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    },

    setBtnState(val) {
      this.btnState.state = val;
    },
    inputValidation(val) {
      if (val.length <= 4) {
        this.wasValidated = false;
        return false;
      } else {
        this.wasValidated = true;
        return true;
      }
    },
    EventShowInput() {
      //console.log("object");
    },

    TimeNow() {
      let today = moment().format("YYYY-MM-DD");
      let hours = moment().format("HH:mm");
      this.postData.date_depart_proposer = today;
      this.postData.heure_debut = hours;
      this.postData.date_fin_proposer = today;
      this.postData.heure_fin = hours;
      //console.log(today, hours);
    },
    changeType() {
      this.options = this.optionsTache;
      //console.log("files : ", this.options);
      this.postData.type = "tache";
    },
    EditProject() {
      Utilities.formatData(this.postData, this.dHeure, this.fHeure).then(
        reponse => {
          //console.log(" EditProject : ", reponse);
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                //console.log("data after edit :", reponse);
                this.$emit("edition-ok", reponse);
              }
              this.isLoading = false;
            })
            .catch(function(error) {
              console.log("error", error);
            });
        }
      );
    },
    FormatTime(id) {
      var data = this.postData;
      var ddp = moment(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
      //var status = data.status;

      var rest = [];
      rest.push({
        idcontents: id,
        date_depart_proposer: ddp,
        date_fin_proposer: dfp
        // date_fin_reel: "reelD",
        // status: status,
        // temps_pause: "temps_pause",
        // raison: "raison"
      });
    },
    FormatData(idc) {
      var data = this.postData;
      var ddp = moment(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
      var state = parseInt(this.postData.status, 10);
      var result = [];
      result.push({
        table: "gestion_project_contents",
        fields: {
          text: data.text,
          titre: data.titre,
          type: data.type
        },
        childstable: {
          colum_id_name: "idcontents",
          tables: [
            {
              table: "gestion_project_times",
              fields: {
                date_depart_proposer: ddp,
                date_fin_proposer: dfp,
                status: state
              }
            },
            {
              table: "gestion_project_hierachie",
              fields: {
                idcontentsparent: idc,
                ordre: 0
              }
            }
          ]
        }
      });
      return result;
    },
    PostNewProject(idc) {
      Utilities.formatAddData(this.postData, idc, this.level).then(reponse => {
        console.log("created", reponse);

        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              this.request = reponse.data[0];
              this.$emit("addnew-ok");
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
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
=======
<template lang="html">
  <div :check-valid-form="checkForSave">
    <div>
      <CRow :gutters="false" class="form-group">
        <!-- <pre>{{ this.options }}</pre> -->
        <pre>duree: {{ dureeProjet }}</pre>
        <br />
        <CCol sm="3"> <p>Choisir un type:</p> </CCol>

        <CCol sm="9"
          ><CInputRadioGroup
            :options="options"
            :checked.sync="postData.type"
            custom
            inline
          />
          <small v-if="postData.type.length < 2" class="text-danger">
            ce champ est requis
          </small>
        </CCol>
      </CRow>
    </div>
    <hr />

    <div class="pl-sm-2 ">
      <CRow
        :gutters="false"
        class="form-group"
        v-if="postData.type !== 'memos' && postData.date_fin_reel === ''"
      >
        <CCol sm="2"> <p>Statut:</p> </CCol>
        <CCol sm="10">
          <CInputRadioGroup
            :options="statusOpt"
            :checked.sync="postData.status"
            custom
            inline
          />
        </CCol>
        <CCol sm="8" md="7" v-if="showInputRaison">
          <CTextarea
            label="Raison:"
            type="textarea"
            v-model="postData.raison"
            horizontal
            placeholder="writes something..."
            rows="2"
            description="Une description de la raison du changement de status"
          />
        </CCol>
      </CRow>
      <CRow v-if="postData.type !== 'memos'">
        <CCol col="12" lg="6">
          <CRow class=" ">
            <CInput
              label="Debut:"
              type="date"
              v-model="postData.date_depart_proposer"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              horizontal
              class="col-10 col-sm-7"
            />
            <CInput
              v-model="postData.heure_debut"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="time"
              class="col-8 ml-sm-0 pl-sm-0 col-sm-5 "
              horizontal
            />
          </CRow>
        </CCol>
        <CCol col="10" lg="6">
          <CRow class="">
            <CInput
              label="Fin:"
              v-model="postData.date_fin_proposer"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="date"
              horizontal
              class="col-10 col-sm-7"
            /><CInput
              v-model="postData.heure_fin"
              :readonly="postData.date_fin_reel > 0 ? true : false"
              type="time"
              class="col-8 ml-sm-0 pl-sm-0 col-sm-5 "
              horizontal
            />
          </CRow>
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="7">
          <CInput
            label="Title:"
            v-model="postData.titre"
            placeholder="Entrez un titre"
            :wasValidated="wasValidated"
            validFeedback="ok"
            invalidFeedback="requis"
            :isValid="inputValidation"
          />
        </CCol>
        <CCol sm="5" v-if="postData.type == 'project'">
          <CInput
            label="Nom du Client:"
            placeholder="Select or add new Client"
            v-model="postData.clientName"
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol sm="12">
          <label>Description:</label>
          <ckeditor
            v-model="postData.text"
            @namespaceloaded="onNamespaceLoaded"
            :config="editorConfig"
          ></ckeditor>
        </CCol>
      </CRow>
      <CRow v-if="postData.type == 'project'">
        <CCol col="8" lg="4">
          <CInput
            label="Estimation du coût:"
            append=".00"
            description="montant"
            prepend="$"
            v-model="postData.price"
          />
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import Utilities from "./Utilities.js";
import CKEditor from "ckeditor4-vue";
import hljs from "highlight.js";
import config from "../config/config";
import moment from "moment";
import ProjectOptionsType from "./ProjectOptionsType";
export default {
  name: "PopUpContent",
  props: {
    formValues: {
      type: [Object],
      required: true
    },
    btnState: {
      type: Object,
      default: function() {
        return { state: false };
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      postData: {
        typeIsOk: false,
        type: "project",
        status: "0",
        date_depart_proposer: "",
        date_fin_proposer: "",
        date_fin_reel: "",
        temps_pause: "",
        raison: "",
        heure_debut: "",
        heure_fin: "",
        clientName: "",
        titre: "",
        price: "",
        text: ""
      },
      fHeure: "",
      dHeure: "",
      wasValidated: null,
      showInputRaison: false,
      editorData: "",
      warningModal: false,
      extraPlugins: "",
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        contentsCss:
          " @import 'http://gestion-tache-vuejs.kksa/ckeditors/styles/style.css'; body{margin:1em !important; background: #FFF;}",
        on: {
          instanceReady: function() {
            // Output paragraphs as <p>Text</p>.
            this.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            this.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });

            this.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            this.dataProcessor.writer.setRules("div", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: true,
              breakBeforeClose: true,
              breakAfterClose: false
            });
          }
        }
      },
      options: [
        // { value: "project", label: "Projet" },
        // { value: "tache", label: "Tâche" },
        // { value: "memos", label: "Mémos" }
      ],
      statusOpt: [
        { value: "0", label: "New" },
        { value: "2", label: "Encours" },
        { value: "1", label: "Terminé" },
        { value: "3", label: "Annulé" }
      ]
    };
  },
  mounted() {
    ProjectOptionsType.loadType().then(reponse => {
      this.options = reponse;
    });
  },
  watch: {
    formValues: {
      deep: true,
      handler: function(val) {
        //console.log("val : ", val);
        Utilities.fomatVal(val, this.postData).then(() => {});
        console.log("result :", this.postData, this.fHeure);
        console.log("debut heure : ", this.dHeure);
      }
    }
  },
  computed: {
    dureeProjet() {
      var el;
      if (
        this.formValues.date_depart_proposer &&
        this.formValues.date_fin_proposer
      ) {
        el =
          this.formValues.date_fin_proposer -
          this.formValues.date_depart_proposer;
        // var ss = moment.unix(this.formValues.date_fin_proposer);
        // var tt = moment.unix(this.formValues.date_depart_proposer);
        // var re = ss.diff(tt, "minutes", true);
        // console.log("re", re, ss, tt);
      }
      return el;
    },
    tarara() {
      var date = this.postData.date_depart_proposer + " " + this.dHeure;
      var val = moment(date, "YYYY-MM-DD HH:mm").unix();
      var lello = moment.unix(val).format("HH:mm");
      var tal = [];
      tal.push(val);
      tal.push(lello);
      return tal;
    },
    checkForSave() {
      if (this.wasValidated == true && this.postData.type.length > 2) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    ser() {
      var newDiv = document.createElement("div");
      newDiv.innerHTML = this.editorData;
      newDiv.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    },
    editorConfig() {
      var extraPlugins =
        "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      if (!window.location.host.includes("localhost")) {
        return {
          extraPlugins: extraPlugins + ",quickuploader",
          ...this.preEditorConfig
        };
      } else {
        return {
          extraPlugins: extraPlugins,
          ...this.preEditorConfig
        };
      }
    },
    optionsTache() {
      var rs = [];
      for (let i of this.options) {
        if (i.value == "project") {
          //console.log("iii :");
        } else {
          rs.push(i);
        }
      }
      //console.log("rs", rs);
      return rs;
    }
  },
  methods: {
    onNamespaceLoaded(CKEDITOR) {
      // Add external `placeholder` plugin which will be available for each
      // editor instance on the page.
      if (!window.location.host.includes("localhost")) {
        CKEDITOR.plugins.addExternal(
          "quickuploader",
          "/ckeditors/ckeditor_4.16.0_basic/ckeditor/plugins/quickuploader/plugin.js"
        );
      }
      /**/
      CKEDITOR.config.allowedContent = true;
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      // CKEDITOR.config.entities_processNumerical = 'force';

      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    },

    setBtnState(val) {
      this.btnState.state = val;
    },
    inputValidation(val) {
      if (val.length <= 4) {
        this.wasValidated = false;
        return false;
      } else {
        this.wasValidated = true;
        return true;
      }
    },
    EventShowInput() {
      //console.log("object");
    },

    TimeNow() {
      let today = moment().format("YYYY-MM-DD");
      let hours = moment().format("HH:mm");
      this.postData.date_depart_proposer = today;
      this.postData.heure_debut = hours;
      this.postData.date_fin_proposer = today;
      this.postData.heure_fin = hours;
      //console.log(today, hours);
    },
    changeType() {
      this.options = this.optionsTache;
      //console.log("files : ", this.options);
      this.postData.type = "tache";
    },
    EditProject() {
      Utilities.formatData(this.postData, this.dHeure, this.fHeure).then(
        reponse => {
          //console.log(" EditProject : ", reponse);
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                //console.log("data after edit :", reponse);
                this.$emit("edition-ok", reponse);
              }
              this.isLoading = false;
            })
            .catch(function(error) {
              console.log("error", error);
            });
        }
      );
    },
    FormatTime(id) {
      var data = this.postData;
      var ddp = moment(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
      //var status = data.status;

      var rest = [];
      rest.push({
        idcontents: id,
        date_depart_proposer: ddp,
        date_fin_proposer: dfp
        // date_fin_reel: "reelD",
        // status: status,
        // temps_pause: "temps_pause",
        // raison: "raison"
      });
    },
    FormatData(idc) {
      var data = this.postData;
      var ddp = moment(data.date_depart_proposer, "YYYY-MM-DD  HH:mm").unix();
      var dfp = moment(data.date_fin_proposer, "YYYY-MM-DD  HH:mm").unix();
      var state = parseInt(this.postData.status, 10);
      var result = [];
      result.push({
        table: "gestion_project_contents",
        fields: {
          text: data.text,
          titre: data.titre,
          type: data.type
        },
        childstable: {
          colum_id_name: "idcontents",
          tables: [
            {
              table: "gestion_project_times",
              fields: {
                date_depart_proposer: ddp,
                date_fin_proposer: dfp,
                status: state
              }
            },
            {
              table: "gestion_project_hierachie",
              fields: {
                idcontentsparent: idc,
                ordre: 0
              }
            }
          ]
        }
      });
      return result;
    },
    PostNewProject(idc) {
      Utilities.formatAddData(this.postData, idc, this.level).then(reponse => {
        console.log("created", reponse);

        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              this.request = reponse.data[0];
              this.$emit("addnew-ok");
            }
            this.isLoading = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
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
>>>>>>> 50c1963d302486def39dede06c098263984f8081
