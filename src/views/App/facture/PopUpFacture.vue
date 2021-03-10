<template>
  <div>
    <CLink to="#">
      <CButton
        size="sm"
        v-c-tooltip="'Nouvelle Facture'"
        color="info"
        shape="pill"
        @click="initNewFacture"
        v-if="add"
      >
        <CIcon class="text-white" name="cilPlus" :height="35" size="xl" />
      </CButton>
      <CButton
        v-if="!add"
        color="primary"
        variant="ghost"
        shape="pill"
        size="sm"
        @click="initNewFacture"
        class="mx-1"
        ><CIcon name="cilPencil" class="mr-1 text-info "></CIcon
      ></CButton>
    </CLink>
    <CModal
      size="lg"
      title="Initialisation de la facture"
      color="info"
      :show.sync="modalAdd.state"
      :footer="false"
      :closeOnBackdrop="false"
    >
      <!-- affichage de l’alert -->
      <CRow alignHorizontal="center" v-if="alertOk">
        <CCol sm="7">
          <CAlert :color="AlertColor" :closeButton="true">
            {{ alertText }}
          </CAlert>
        </CCol>
      </CRow>
      <div v-if="showInput">
        <CRow tag="div">
          <CCol sm="4">
            <CInput
              label="Numéro Facture:"
              v-model="initData.numero"
              placeholder="420012"
            />
          </CCol>
        </CRow>
        <CRow tag="div">
          <CCol sm="6">
            <CInput
              label="Objet:"
              placeholder="Renseigner l'objet de la facture"
              v-model="initData.objet"
            />
          </CCol>
        </CRow>
        <CRow tag="div">
          <CCol sm="5">
            <CSelect
              label="Nom du projet:"
              placeholder="Choisir le projet lié"
              v-model="initData.idcontents"
              :value.sync="initData.idcontents"
              :options="selectProjectFormat"
            />
          </CCol>
        </CRow>
        <CRow tag="div">
          <CCol sm="5">
            <CSelect
              label="Nom Entreprise:"
              placeholder="Choisir l'entreprise"
              v-model="initData.proprietaire"
              :value.sync="initData.proprietaire"
              :options="selectOptionFormat"
            />
          </CCol>
          <CCol sm="5">
            <CSelect
              label="Nom client"
              v-model="initData.idclients"
              :value.sync="initData.idclients"
              placeholder="Choose Client"
              :options="selectOptionFormat"
            />
          </CCol>
        </CRow>
      </div>
      <CRow alignHorizontal="center" v-if="isLoading">
        <CCol sm="3" class="p-3">
          <CSpinner style="width:4rem;height:4rem;" color="info" grow
        /></CCol>
      </CRow>

      <template slot="footer">
        <div class="d-flex justify-content-end mr-3 ">
          <CButton @click="modalAdd.state = false" class="mx-1" color="light">
            Cancel
          </CButton>
          <CButton
            @click="PostNewInitFacture"
            class="mx-1"
            color="info"
            v-if="!buttonService"
          >
            Créer
          </CButton>
          <CLink :to="'/factures/' + initData.numero" v-if="buttonService">
            <CButton class="mx-1" color="warning">
              Ajouter services
            </CButton>
          </CLink>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import SelectDb from "../config/SelectDb";
import Utilities from "../project/Utilities.js";
import config from "../config/config";
export default {
  name: "SHome",
  props: {
    initData: {
      type: Object,
      default: function() {
        return {
          numero: "",
          objet: "",
          idcontents: "",
          idclients: "",
          proprietaire: "",
          creaated: "",
          update_at: ""
        };
      }
    },
    add: { type: Boolean, default: true },
    modalAdd: {
      type: Object,
      default: function() {
        return { state: false };
      }
    },
    edition: {
      type: Boolean,
      default: false
    },
    update: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {
      active: false,
      isLoading: false,
      showInput: true,
      alertOk: false,
      buttonService: false,
      alertText: "Création de telle projet ok",
      AlertColor: "success",
      itemClient: [],
      itemProject: [],
      nbFacture: "",
      timer: null
    };
  },
  mounted() {
    this.LoadClient();
    this.LoadProject();
    this.loadNbFacture();
  },
  watch: {
    initData: {
      deep: true,
      handler() {
        if (!this.edition) {
          this.setNombre();
        }
      }
    }
  },
  computed: {
    //formattage du champ select pour la sélection du projet liée à la facture
    selectProjectFormat() {
      var result = [];
      if (this.itemProject.length) {
        for (const i in this.itemProject) {
          result.push({
            label: this.itemProject[i].titre,
            value: this.itemProject[i].idcontents
          });
        }
      }
      return result;
    },

    // formattage des données pour le champ select du client et de la société
    selectOptionFormat() {
      var result = [];
      if (this.itemClient.length) {
        for (const i in this.itemClient) {
          result.push({
            label: this.itemClient[i].nom,
            value: this.itemClient[i].idclient
          });
        }
      }
      return result;
    }
  },
  methods: {
    // renvoi le numéro formatté de la facture
    setNombre() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = setTimeout(function() {
        self.loadNbFacture();
      }, 2000);
      var result = "";
      var pro = "";
      var cli = "";

      if (this.initData.proprietaire.length) {
        pro = this.initData.proprietaire;
      }
      if (this.initData.idclients.length) {
        cli = this.initData.idclients;
      }
      result = this.nbFacture + "-" + pro + "-" + cli;
      console.log("foramat", result);
      // this.setNombre(result);
      this.initData.numero = result;
    },
    loadNbFacture() {
      SelectDb.selectInvoice([]).then(response => {
        if (response.length) {
          this.nbFacture = response.length;
        } else {
          this.nbFacture = "0";
        }
      });
    },
    LoadClient() {
      SelectDb.selectClients([]).then(response => {
        this.itemClient = response;
      });
    },
    LoadProject() {
      SelectDb.selectDatas().then(response => {
        this.itemProject = response;
      });
    },
    initNewFacture() {
      this.modalAdd.state = true;
    },

    PostNewInitFacture() {
      this.isLoading = true;
      this.showInput = false;
      Utilities.formatAddInvoice(this.initData, this.update).then(reponse => {
        console.log("created", reponse);

        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            console.log("reponse", reponse);
            if (reponse.status) {
              this.request = reponse.data[0];
              this.$emit("addnew-ok");
              this.alertOk = true;
              this.isLoading = false;
              if (this.edition) {
                this.alertText =
                  "Mise à jour  de la facture" +
                  " " +
                  " n°:" +
                  this.initData.numero +
                  " " +
                  "réussi";
              } else {
                this.alertText =
                  "sauvegarde de la facture" +
                  " " +
                  " n°:" +
                  this.initData.numero +
                  " " +
                  "réussi";
              }
              this.AlertColor = "success";
              this.buttonService = true;
            } else {
              console.log("erroree", reponse.status);
              this.isLoading = false;
              this.alertOk = true;
              this.alertText = "Erreur de sauvegarde";
              this.AlertColor = "danger";
              this.showInput = true;
            }
          })
          .catch(function(error) {
            console.log("error", error);
            this.isLoading = false;
            this.alertOk = true;
            this.alertText = "Erreur de sauvegarde";
            this.AlertColor = "danger";
            this.showInput = true;
          });
      });
    }
  }
};
</script>

<style lang="scss">
.titre-fact {
  font-size: 1rem;
  font-weight: bold;
  color: lightslategray;
  &:hover {
    color: #39f;
  }
}
.numero-fact {
  font-size: 0.9rem;
  color: cadetblue;
}
</style>
