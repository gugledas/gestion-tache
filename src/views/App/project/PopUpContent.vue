<!--
   Les modeles de champs sont dans : node_modules/@coreui/vue/src/components/form
-->
<template lang="html">
  <div :check-valid-form="checkForSave">
    <div>
      <!-- currentUser:
      <pre>{{ currentUser }}</pre>
      postData:
      <pre>{{ postData }}</pre>  -->
      <CRow :gutters="false" class="form-group">
        <!-- <pre> {{ postData }} </pre> -->
        <br />
        <CCol sm="3"> <p>Choisir un type:</p> </CCol>

        <CCol sm="9"
          ><CInputRadioGroup
            :options="options"
            :checked.sync="postData.type"
            @update:checked="typeProjectChange"
            custom
            inline
          />
          <small v-if="postData.type.length < 2" class="text-danger">
            Ce champ est requis
          </small>
        </CCol>
      </CRow>
    </div>
    <hr />

    <div class="pl-sm-2">
      <CRow @click="togleVisible" class="mb-4 mt-n2">
        <CCol
          ><CButton
            variant="ghost"
            color="light w-100"
            href="#"
            class="text-dark d-fleex plus-bouton"
          >
            <span>plus</span>
            <span v-show="!visible"
              ><CIcon
                class="ml-auto"
                style="float: right"
                name="cil-chevron-bottom"
            /></span>
            <span v-show="visible"
              ><CIcon
                class="ml-auto"
                style="float: right"
                name="cil-chevron-top"
            /></span> </CButton
        ></CCol>
      </CRow>
      <CCollapse :show="visible" :navbar="true">
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
        <pre> {{ postData }} </pre>
        <CRow v-if="postData.type !== 'memos'">
          <CCol col="12" lg="6">
            <CRow class="">
              <CInput
                label="Debut:"
                type="date"
                v-model="postData.date_depart_proposer"
                :readonly="
                  postData.date_fin_reel > 0 ||
                  disableTempDebut ||
                  postData.status == '2'
                    ? true
                    : false
                "
                horizontal
                class="col-10 col-sm-7"
              />
              <CInput
                v-model="postData.heure_debut"
                :readonly="
                  postData.date_fin_reel > 0 ||
                  disableTempDebut ||
                  postData.status == '2'
                    ? true
                    : false
                "
                type="time"
                class="col-8 ml-sm-0 pl-sm-0 col-sm-5"
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
                class="col-8 ml-sm-0 pl-sm-0 col-sm-5"
                horizontal
              />
            </CRow>
          </CCol>
        </CRow>
        <div class="mb-3" v-show="this.postData.date_fin_reel < 1">
          <CRow>
            <CInput
              type="number"
              class="my-0 col-5 col-md-3"
              v-model="startValue"
            />
            <CButton
              class=""
              :disabled="!startValue"
              color="success"
              @click="startTache"
              >{{ StartBtnText }}</CButton
            >
          </CRow>
          <small>Définir un temps d'exécution(en minutes)</small>
        </div>
      </CCollapse>

      <CRow>
        <CCol sm="6" class="d-flex">
          <div class="form-group d-flex align-items-center">
            <span class="pr-3 d-block"> Contenu privée ? </span>
            <CSwitch
              class="mr-1"
              color="danger"
              shape="pill"
              :checked.sync="postData.privaty"
              size="sm"
            />
          </div>
        </CCol>
        <CCol sm="5" class="d-flex">
          <div class="form-group d-flex align-items-center">
            <span class="pr-3 d-block">Prime ? </span>
            <CSwitch
              class="mr-1"
              color="danger"
              shape="pill"
              type="checkbox"
              :disabled="!cantUpdatePrime"
              :checked.sync="postData.prime_status"
              size="sm"
              @update:checked="updatePrime"
            />
          </div>
        </CCol>

        <CCol
          v-if="postData.prime_status"
          sm="5"
          class="d-flex align-items-start"
        >
          <CInput
            type="number"
            append=".00"
            description="Montant de la prime:"
            prepend="F"
            :disabled="!cantUpdatePrime"
            @change="reUpdatePrime"
            v-model="postData.prime_montant"
          />
        </CCol>

        <CCol sm="10">
          <div class="form-group d-none">
            Assigné :
            <pre> {{ postData }} </pre>
            formValues :
            <pre> {{ formValues }} </pre>
          </div>
        </CCol>
        <CCol sm="12">
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
        <CCol
          lg="5"
          class="mb-2"
          v-if="postData.type !== 'ressource' && postData.type !== 'memos'"
        >
          <label class="typo__label">Exécuter par:</label>
          <multiselect
            :disabled="!cantUpdatePrime"
            :options="users"
            placeholder="Selectionnez un utilisateur"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="false"
            :searchable="false"
            label="name"
            :loading="selectLoading"
            track-by="name"
            :preselect-first="false"
            :hide-selected="true"
            v-model="postData.executant"
            @select="addExecutant"
            @remove="deleteExecutant"
          >
          </multiselect>
          <small class="text-danger" v-show="executantRequired"
            >Un exécutant requis</small
          >
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
      <!-- <CRow v-if="postData.type == 'project'">
        <CCol col="8" lg="4">
          <CInput
            label="Estimation du coût:"
            append=".00"
            description="montant"
            prepend="$"
            v-model="postData.price"
          />
        </CCol>
      </CRow> -->
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
import Multiselect from "vue-multiselect";

export default {
  name: "PopUpContent",
  props: {
    formValues: {
      type: [Object],
      required: true
    },

    btnState: {
      type: Object,
      default: function () {
        return { state: false };
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  components: {
    ckeditor: CKEditor.component,
    Multiselect
  },
  data() {
    return {
      selectLoading: false,
      visible: true,
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
        text: "",
        prime_status: null,
        prime_montant: 0,
        privaty: false,
        executant: []
      },
      fHeure: "",
      dHeure: "",
      wasValidated: null,
      showInputRaison: false,
      disableTempDebut: false,
      StartBtnText: "Start",
      editorData: "",
      warningModal: false,
      extraPlugins: "",
      startValue: null,
      preEditorConfig: {
        codeSnippet_theme: "monokai_sublime",
        stylesSet: [],
        contentsCss:
          " @import '" +
          config.baseUrl +
          "/modules/custom/gestion_tache/files/gestionTache.css'; body{margin:1em !important; background: #FFF;}",
        on: {
          instanceReady: function (ev) {
            // Output paragraphs as <p>Text</p>.
            //console.log('this',ev)
            ev.sender.dataProcessor.writer.setRules("p", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: true,
              breakAfterClose: true
            });
            ev.sender.dataProcessor.writer.setRules("img", {
              indent: true,
              breakBeforeOpen: true,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h1", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });

            ev.sender.dataProcessor.writer.setRules("h2", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h3", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h4", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h5", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("h6", {
              indent: true,
              breakBeforeOpen: false,
              breakAfterOpen: false,
              breakBeforeClose: false,
              breakAfterClose: false
            });
            ev.sender.dataProcessor.writer.setRules("div", {
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
    ProjectOptionsType.loadType().then((reponse) => {
      this.options = reponse;
    });

    let sm = window.matchMedia("(max-width:768px)");
    sm.addEventListener("change", this.smallMedia);
    this.smallMedia(sm);
    //this.TimeNow();
  },
  watch: {
    formValues: {
      deep: true,
      handler: function (val) {
        console.log("val : ", val);
        Utilities.fomatVal(val, this.postData, this.users).then(() => {});
        //console.log("result :", this.postData, this.fHeure);
        //console.log("debut heure : ", this.dHeure);
      }
    }
  },
  computed: {
    executantRequired() {
      let type = this.postData.type;
      if (type == "tache" && !this.postData.executant.length) {
        return true;
      }
      return false;
    },
    cantUpdatePrime() {
      let current = this.$store.getters.currentUser;
      if (this.formValues && this.formValues.uid) {
        if (current.uid == this.formValues.uid) {
          return true;
        } else {
          return false;
        }
      }
      return true;
    },
    users() {
      return this.$store.getters.userList;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
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
      if (
        this.wasValidated == true &&
        this.postData.type.length > 2 &&
        !this.executantRequired
      ) {
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
      newDiv.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });

      return newDiv.outerHTML;
    },
    editorConfig() {
      var extraPlugins =
        "codesnippet,print,format,font,colorbutton,justify,image,filebrowser,stylesheetparser";
      if (!window.location.host.includes("localhost--")) {
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
    smallMedia(bp) {
      if (bp.matches) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    },
    togleVisible() {
      this.visible = !this.visible;
    },
    reUpdatePrime(val) {
      console.log("reUpdate Prime: ", val);
      this.updatePrime(this.postData.prime_status);
    },
    async updatePrime(value) {
      var self = this;
      if (this.postData.idcontents) {
        let params = {
          id: this.postData.idcontents,
          status: value,
          montant: this.postData.prime_montant
        };

        var data = await Utilities.formatPrimeData(
          params,
          this.formValues.prime_status !== null ? true : false
        );
        console.log("formatPrimeData", data);
        config
          .post("/gestion-project/save-update", data, {
            headers: {
              Authorization: config.auth
            }
          })
          .then((reponse) => {
            if (reponse.status) {
              console.log("prime update :", reponse);
              this.formValues.prime_status = value;
              this.formValues.prime_montant = this.postData.prime_montant;
            }
          })
          .catch(function (error) {
            alert("Erreur lors de l'activation de la prime sur cette tâche");
            console.log("error", error);
            self.postData.prime_status = null;
          });
        // try   {
        //   let reponse = await config.post('' + value)
        //   console.log("user",reponse );
        // }
        // catch (er) {
        //   console.log('er',er)
        // }
        //let self = this;
        // if(this.postData.idcontents) {

        //}
      }
    },
    deleteExecutant(value) {
      //console.log("user delet", value);
      var self = this;
      if (this.postData.idcontents) {
        this.selectLoading = true;
        config
          .delete(
            "/gestion-project/executant/" +
              this.postData.idcontents +
              "/" +
              value.uid,
            {},
            {
              headers: {
                Authorization: config.auth
              }
            }
          )
          .then((reponse) => {
            if (reponse.status) {
              //console.log("data after edit :", reponse);
              self.updateFormValue(false, value);
              self.selectLoading = false;
            }
          })
          .catch(function (error) {
            self.selectLoading = false;
            console.log("error", error);
          });
      }
    },
    updateFormValue(add, user) {
      let form = this.formValues.executant;
      if (add) {
        form.push(user);
      } else {
        let existe = form.filter((el) => el.uid == user.uid);
        // console.log("existe", existe);
        for (let i in form) {
          if (existe[0].uid == form[i].uid) {
            form.splice(i, 1);
          }
        }
      }
    },
    addExecutant(value) {
      // console.log("user add", value, config.auth);
      let self = this;
      if (this.postData.idcontents) {
        this.selectLoading = true;
        config
          .post(
            "/gestion-project/executant/" +
              this.postData.idcontents +
              "/" +
              value.uid,
            {},
            {
              headers: {
                Authorization: config.auth
              }
            }
          )
          .then((reponse) => {
            if (reponse.status) {
              //console.log("data after edit :", reponse);
              self.selectLoading = false;
              self.updateFormValue(true, value);
            }
          })
          .catch(function (error) {
            self.selectLoading = false;
            console.log("error", error);
          });
      }
    },
    onNamespaceLoaded(CKEDITOR) {
      // Add external `placeholder` plugin which will be available for each
      // editor instance on the page.
      moment;
      CKEDITOR.plugins.addExternal(
        "quickuploader",
        config.baseUrl +
          "/libraries/quickuploader/plugin.js?v=" +
          moment().unix()
      );
      /**/
      CKEDITOR.config.allowedContent = true;
      CKEDITOR.config.htmlEncodeOutput = false;
      CKEDITOR.config.entities = false;
      CKEDITOR.config.quickuploaderUploadUrl = config.baseUrl;
      // CKEDITOR.config.entities_processNumerical = 'force';

      CKEDITOR.dtd.$removeEmpty.span = 0;
      CKEDITOR.dtd.$removeEmpty.i = 0;
      CKEDITOR.dtd.$removeEmpty.label = 0;
    },

    setBtnState(val) {
      if (this.postData.status == "2") {
        this.StartBtnText = "Ajouter le temps d'exécution";
      }
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

    changeType() {
      this.options = this.optionsTache;
      //console.log("files : ", this.options);
      this.postData.type = "tache";
    },
    EditProject() {
      var self = this;
      Utilities.formatData(this.postData, this.dHeure, this.fHeure).then(
        (reponse) => {
          //console.log(" EditProject : ", reponse);
          config
            .post("/gestion-project/save-update", reponse, {
              headers: {
                Authorization: config.auth
              }
            })
            .then((reponse) => {
              if (reponse.status) {
                //console.log("data after edit :", reponse);
                self.$emit("edition-ok", reponse);
              }
              this.isLoading = false;
            })
            .catch(function (error) {
              self.$emit("edition-error");
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
    PostNewProject(idc, level) {
      var self = this;
      Utilities.formatAddData(this.postData, idc, this.level).then(
        (reponse) => {
          //  console.log("created", reponse);

          config
            .post("/gestion-project/save-update", reponse, {
              headers: {
                Authorization: config.auth
              }
            })
            .then((reponse) => {
              if (reponse.status) {
                self.request = reponse.data[0];

                if (level) {
                  self.$emit("addnew-ok", { id: idc, level: level });
                } else {
                  self.$emit("addnew-ok", { id: reponse.data[0].result });
                }
              }
              this.isLoading = false;
            })
            .catch(function (error) {
              self.$emit("addnew-error");
              console.log("error", error);
            });
        }
      );
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
    startTache() {
      if (this.startValue) {
        let today = moment().format("YYYY-MM-DD");
        let hours = moment().format("HH:mm");

        this.postData.date_depart_proposer = today;
        if (!this.disableTempDebut && this.postData.status != "2") {
          this.postData.heure_debut = hours;
          this.postData.date_fin_proposer = today;
          let minutes =
            parseInt(moment.duration(hours).asMinutes(), 10) +
            parseInt(this.startValue, 10);
          this.postData.heure_fin = this.getTimeFromMins(minutes);
          this.StartBtnText = "Add time";
          this.disableTempDebut = true;
          this.startValue = null;
        } else {
          this.postData.date_fin_proposer = today;
          let minutes =
            parseInt(moment.duration(this.postData.heure_fin).asMinutes(), 10) +
            parseInt(this.startValue, 10);
          this.postData.heure_fin = this.getTimeFromMins(minutes);
          this.startValue = null;
        }

        //console.log(today, hours, "--");
        this.postData.status = "2";
      }
    },
    getTimeFromMins(mins) {
      if (mins >= 24 * 60 || mins < 0) {
        throw new RangeError(
          "Le tempds d'exécution doit être supérieur ou égale 0 et inférieur à 1440."
        );
      }
      var h = (mins / 60) | 0,
        m = mins % 60 | 0;
      return moment.utc().hours(h).minutes(m).format("HH:mm");
    },
    typeProjectChange(val) {
      console.log("type change", val);
      if (val == "tache" && !this.postData.executant.length) {
        this.postData.executant.push(this.currentUser);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.plus-bouton {
  box-shadow: 0px 0px 5px rgba(224, 224, 224, 0.664);
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
