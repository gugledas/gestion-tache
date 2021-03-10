<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Édition facture N°: {{ this.id }}</strong>
            <div class="card-header-actions">
              <CButton
                class="   p-0 pl-1 pr-1 mr-3"
                v-c-tooltip="'Nouveau service'"
                @click="colapse = !colapse"
                color="info"
              >
                <CIcon :name="`cil-chevron-${colapse ? 'bottom' : 'top'}`" />
              </CButton>
            </div>
          </CCardHeader>
          <div v-if="colapse">
            <CCardBody>
              <div class=" d-flex flex-wrap" v-if="!isLoading">
                <CCol sm="6" md="5"
                  ><CInput
                    placeholder="libellé du service"
                    v-model="invoiceData.titre"
                    :wasValidated="wasValidated"
                    validFeedback="ok"
                    invalidFeedback="requis"
                    :isValid="inputValidation"
                    label=" titre:"
                /></CCol>
                <CCol sm="4" md="3"
                  ><CInput
                    v-model="invoiceData.idinvoicelist"
                    placeholder="01"
                    label=" numéro service"
                    :wasValidated="idvalidated"
                    validFeedback="ok"
                    invalidFeedback="requis"
                    :isValid="idValidation"
                /></CCol>
                <CCol sm="4" md="3"
                  ><CInput
                    v-model="invoiceData.cout"
                    placeholder="100.00"
                    append="$"
                    label=" Coût"
                    :wasValidated="priceValidated"
                    validFeedback="ok"
                    invalidFeedback="requis"
                    :isValid="priceValidation"
                /></CCol>
                <CCol sm="8" md="6"
                  ><CTextarea
                    v-model="invoiceData.description"
                    label=" description:"
                    placeholder="ajouter une description"
                /></CCol>
              </div>

              <CRow alignHorizontal="center" v-if="isLoading">
                <CCol sm="3" class="p-3">
                  <CSpinner style="width:4rem;height:4rem;" color="info" grow
                /></CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"
                ><CIcon name="cilCloudDownload" /> Exporter</CButton
              >
              <CButton
                class="mx-3"
                @click="PostFactureList"
                type="reset"
                size="sm"
                :color="checkForSave ? 'success' : 'light'"
                ><CIcon name="cil-check-circle"/> Ajouter
                <CSpinner
                  v-if="spinnerSave"
                  size="sm"
                  class=""
                  tag="small"
                  color="danger"
                  style="width:1rem;height:1rem;"
              /></CButton>
              <CButton
                class="mx-3"
                size="sm"
                @click="hideFact = !hideFact"
                color="dark"
                ><CIcon name="cil-low-vision" /> Aperçue</CButton
              >
            </CCardFooter>
          </div>
        </CCard>
      </CCol>
    </CRow>

    <!-- facture final -->
    <CRow alignHorizontal="center" v-if="hideFact">
      <CCol col="10">
        <CCard class="facture shadow">
          <div class="facture__header">
            <CRow
              class="first-header text-center p-5 m-0"
              alignVertical="center"
            >
              <CCol>
                <img
                  class="pr-2 mt-2"
                  src="../../../assets/universe png.png"
                  height="40"
                  width="150"
              /></CCol>
              <CCol class="display-inv"
                >FACTURE N°: <strong>{{ factureData.numero }}</strong></CCol
              >
            </CRow>
            <CRow class="second-header m-0 text-center" alignVertical="center">
              <CCol class="bg-info pt-2">
                <p>
                  Invoice # <strong>{{ factureData.numero }}</strong>
                </p>
              </CCol>
              <CCol class="pt-2"
                ><p><Strong class="px-2">Date:</Strong> 01/02/2020</p></CCol
              >
            </CRow>
          </div>
          <CRow tag="div" class="my-3">
            <CCol class="facture__id p-3 d-flex ml-4 justify-content-start">
              <h5>Invoice of :</h5>
              <div class="ml-2">
                <h5 class="text-uppercase">
                  {{ societeInfoste.nom }}
                </h5>
                <h6>{{ societeInfoste.adresse }}</h6>
                <h6>Tel: {{ societeInfoste.phone }}</h6>
                <h6>siteweb: {{ societeInfoste.siteweb }}</h6>

                <h6>Email: {{ societeInfoste.email }}</h6>
                <h6>Émit par: {{ infoSte.nom }} {{ infoSte.prenom }}</h6>
                <!-- <h6>Email: <strong>wbuniverse@gmail.com</strong></h6> -->
              </div>
            </CCol>

            <CCol
              class="facture__id p-3 d-flex mr-5 pr-3 justify-content-center"
            >
              <h5>Invoice to :</h5>
              <div class="ml-2">
                <h5 class="text-uppercase">
                  {{ societeInfoClient.nom }}
                </h5>
                <h6>{{ clientInfo.nom }} {{ clientInfo.prenom }}</h6>
                <h6>{{ societeInfoClient.adresse }}</h6>
                <h6>siteweb: {{ societeInfoClient.siteweb }}</h6>
                <h6>Tel: {{ societeInfoClient.phone }}</h6>
                <h6>Email: {{ societeInfoClient.email }}</h6>
              </div>
            </CCol>
          </CRow>
          <CRow alignHorizontal="center" class="mb-2 " alignVertical="center">
            <CCol md="11" class="d-flex aligns-item-center ml-4">
              OBJECT:
              <strong class="ml-3 m-0"
                >{{ factureData.objet }}. Associé au projet
                <span>{{ infoProjet.titre }}</span></strong
              >
            </CCol>
          </CRow>
          <CModal
            :closeOnBackdrop="false"
            color="dark"
            :show.sync="editRow"
            :footer="false"
            size="lg"
          >
            <CRow>
              <CCol sm="7" lg="5"
                ><CInput
                  placeholder="libellé du service"
                  v-model="invoiceData.titre"
                  :wasValidated="wasValidated"
                  validFeedback="ok"
                  invalidFeedback="requis"
                  :isValid="inputValidation"
                  label=" titre:"
              /></CCol>
              <CCol sm="4" lg="3"
                ><CInput
                  v-model="invoiceData.idinvoicelist"
                  placeholder="01"
                  label=" numéro service"
                  :wasValidated="idvalidated"
                  validFeedback="ok"
                  readonly
                  invalidFeedback="requis"
                  :isValid="idValidation"
              /></CCol>
              <CCol sm="6" lg="3"
                ><CInput
                  v-model="invoiceData.cout"
                  placeholder="100.00"
                  append="$"
                  label=" Coût"
                  :wasValidated="priceValidated"
                  :isValid="priceValidation"
              /></CCol>
            </CRow>
            <CRow>
              <CCol sm="8" lg="6"
                ><CTextarea
                  v-model="invoiceData.description"
                  label=" description:"
                  placeholder="ajouter une description"/></CCol
            ></CRow>
            <template slot="footer">
              <div class="d-flex justify-content-end mr-3 ">
                <CButton @click="editRow = false" class="mx-1" color="light">
                  Cancel
                </CButton>
                <CButton
                  class="mx-1"
                  :color="checkForSave ? 'info' : 'light'"
                  @click="EditeFactureList"
                >
                  Save
                  <CSpinner
                    v-if="spinnerSave"
                    size="sm"
                    class=""
                    tag="small"
                    color="warning"
                    style="width:1rem;height:1rem;"
                  />
                </CButton>
                <CButton
                  class="mx-1"
                  color="danger"
                  size="sm"
                  variant="ghost"
                  @click="deleteFacturelist"
                >
                  Supprimer
                  <CSpinner
                    v-if="spinner"
                    size="sm"
                    class=""
                    tag="small"
                    color="primary"
                    style="width:1rem;height:1rem;"
                  />
                </CButton>
              </div>
            </template>
          </CModal>
          <CRow alignHorizontal="center" class="mb-2">
            <CCol md="11">
              <CDataTable
                striped
                outlined
                hover
                :loading="isLoading"
                :responsive="false"
                :items="factTable"
                :fields="facFields"
                head-color="light"
                :clickableRows="true"
                no-sorting
                @row-clicked="ligneClique"
              >
                <td slot="Qte" slot-scope="">
                  <Strong>{{ 1 }}</Strong>
                </td>
                <td slot="total" slot-scope="{ item }">
                  <Strong>{{ item.cout }}</Strong>
                </td>
              </CDataTable>
            </CCol>
          </CRow>
          <CRow class="mt-2" alignHorizontal="center">
            <CCol col="11" class="d-flex">
              <CCol col="6" class="">
                <div>
                  <h5>Payment Info:</h5>
                  <p class="m-0">
                    Account #: <strong class="ml-2"> 551 254 251 015</strong>
                  </p>
                  <p class="m-0">
                    ACT Name: <strong class="ml-2"> Lorem Ipsum</strong>
                  </p>
                  <p class="m-0">
                    Bank details:<strong class="ml-2">
                      Add Your bank Details
                    </strong>
                  </p>
                </div>
              </CCol>
              <CCol col="6" class="ml-5">
                <!-- <div class="d-flex justify-content-around">
                  <h5>Sub Total:</h5>
                  <span class="ml-5 h5">5240.00 $</span>
                </div>
                <div class="d-flex justify-content-around">
                  <h5>Tax:</h5>
                  <span class="ml-5 h5">19.25%</span>
                </div> -->
                <div
                  class="d-flex justify-content-around bg-info mt-2 text-white p-2 mr-4"
                >
                  <h5>Total:</h5>
                  <span class="ml-5 h5">{{ TotalFacture }} $</span>
                </div>
              </CCol>
            </CCol>
          </CRow>
          <CRow alignHorizontal="center" class="mt-5 mb-4">
            <CCol col="11" class="d-flex mb-3">
              <CCol col="6" class="">
                <h5>Terms & conditions</h5>

                <h6 class=" p-0 m-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate architecto cum aliquam aut ut?
                </h6>
              </CCol>
              <CCol col="6" class="pt-4 mt-5 text-center">
                <p class="m-0 p-0">______________________________</p>
                <h6 class="mt-1">Authorised sign</h6>
              </CCol>
            </CCol>
          </CRow>
          <CRow>
            <CCol col="12">
              <CCol class="bg-light p-0">
                <div
                  class="d-flex justify-content-around bg-info mt-2 text-white p-2 col-6"
                >
                  <h5>Thanks for your Business</h5>
                </div>
              </CCol>
            </CCol>
          </CRow>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import SelectDb from "../config/SelectDb";
import Utilities from "../project/Utilities.js";
import config from "../config/config";
export default {
  name: "SHome",
  props: {
    id: {
      type: String,
      default: "2"
    }
  },
  components: {},
  data() {
    return {
      editRow: false,
      factTable: [],
      facFields: [
        { key: "Qte", label: "Quantité" },
        { label: "Désignation ", key: "titre" },
        {
          key: "cout",
          label: "Prix unitaire HT",
          _style: ""
        },
        { label: "Prix total HT", key: "total" }
      ],
      factureData: {
        objet: "",
        description: "",
        cout: "",
        idcontents: "",
        numero: ""
      },
      invoiceData: {
        idinvoicelist: "",
        idcontents: "",
        idinvoice: "",
        cout: "",
        description: "",
        titre: ""
      },
      clientInfo: {
        typeIsOk: false,
        nom: "",
        prenom: "",
        fonction: "",
        siteweb: "",
        email: "",
        adresse: "",
        phone: "",
        uid: "0",
        idsociete: ""
      },
      infoSte: {
        typeIsOk: false,
        nom: "",
        prenom: "",
        fonction: "",
        siteweb: "",
        email: "",
        adresse: "",
        phone: "",
        uid: "0",
        idsociete: ""
      },
      infoProjet: {
        created_at: "",
        idcontents: "",
        titre: "",
        type: "",
        uid: "",
        update_at: ""
      },
      societeInfoste: {
        idsociete: "",
        nom: "",
        siteweb: "",
        phone: "",
        email: "",
        adresse: ""
      },
      societeInfoClient: {
        idsociete: "",
        nom: "",
        siteweb: "",
        phone: "",
        email: "",
        adresse: ""
      },
      request: {},
      update: true,
      hideFact: true,
      isLoading: false,
      spinner: false,
      spinnerSave: false,
      wasValidated: false,
      idvalidated: false,
      btnState: false,
      colapse: false,
      priceValidated: false
    };
  },
  mounted() {
    this.LoadData();
    this.LoadFactureList();
  },
  watch: {
    invoiceData: {
      deep: true,
      handler() {
        this.invoiceData.idinvoice = this.id;
        this.invoiceData.idcontents = this.infoProjet.idcontents;
      }
    }
  },
  computed: {
    checkForSave() {
      if (this.wasValidated && this.idvalidated && this.priceValidated) {
        this.setBtnState(true);
        return true;
      } else {
        this.setBtnState(false);
        return false;
      }
    },
    TotalFacture() {
      var result = 0;
      if (this.factTable.length) {
        for (const i in this.factTable) {
          if (this.factTable[i].cout > 0) {
            var el = parseInt(this.factTable[i].cout, 10);
            result += el;
          }
        }
      }
      return result;
    }
  },
  methods: {
    priceValidation(val) {
      if (val != undefined)
        if (val.length < 1) {
          this.priceValidated = false;
          return false;
        } else {
          this.priceValidated = true;
          return true;
        }
    },
    setBtnState(val) {
      this.btnState = val;
    },
    idValidation(val) {
      if (val != undefined)
        if (val.length < 1) {
          this.idvalidated = false;
          return false;
        } else {
          this.idvalidated = true;
          return true;
        }
    },
    inputValidation(val) {
      if (val == undefined) {
        return false;
      }
      if (val != undefined)
        if (val.length >= 3) {
          this.wasValidated = true;
          return true;
        } else {
          this.wasValidated = false;
          return false;
        }
    },
    EditeFactureList() {
      this.PostFactureList(this.update);
      this.editRow = false;
    },

    ligneClique(item) {
      this.invoiceData = item;
      this.editRow = true;
    },
    LoadData() {
      var oap = [{ column: "numero", operator: "=", value: this.id }];
      SelectDb.selectInvoice(oap).then(response => {
        this.factureData = response[0];
        this.LoadClient(response[0].idclients);
        this.LoadSte(response[0].proprietaire);
        this.LoadProjet(response[0].idcontents);
      });
    },
    LoadClient(val) {
      var oap = [{ column: "idclient", operator: "=", value: val }];
      SelectDb.selectClients(oap).then(response => {
        this.clientInfo = response[0];

        if (response.length) {
          this.LoadSocieteClient(response[0].idsociete);
        }
      });
    },
    LoadSte(val) {
      var oap = [{ column: "idclient", operator: "=", value: val }];
      SelectDb.selectClients(oap).then(response => {
        this.infoSte = response[0];
        if (response.length) {
          this.LoadSocieteInfo(response[0].idsociete);
        }
      });
    },
    LoadSocieteInfo(val) {
      var oap = [{ column: "idsociete", operator: "=", value: val }];
      SelectDb.selectSte(oap).then(response => {
        this.societeInfoste = response[0];
      });
    },
    LoadSocieteClient(val) {
      var oap = [{ column: "idsociete", operator: "=", value: val }];
      SelectDb.selectSte(oap).then(response => {
        this.societeInfoClient = response[0];
      });
    },
    LoadProjet(val) {
      var oap = [{ column: "idcontents", operator: "=", value: val }];
      SelectDb.selectProject(oap).then(response => {
        this.infoProjet = response[0];
      });
    },
    PostFactureList(val) {
      if (this.btnState) {
        this.isloading = true;
        Utilities.formatAddInvoiceList(this.invoiceData, val).then(reponse => {
          config
            .post("/gestion-project/save-update", reponse)
            .then(reponse => {
              if (reponse.status) {
                this.request = reponse.data[0];
                this.LoadFactureList();
                this.invoiceData = {
                  idinvoicelist: "",
                  idcontents: "",
                  idinvoice: "",
                  cout: "",
                  titre: "",
                  description: ""
                };
              }
              this.isloading = false;
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
    },
    LoadFactureList() {
      var oap = [{ column: "idinvoice", operator: "=", value: this.id }];
      SelectDb.selectFatureList(oap).then(response => {
        this.factTable = response;
      });
    },
    deleteFacturelist() {
      this.spinner = true;
      this.isloading = true;
      Utilities.formatDeleteInvoiceList(this.invoiceData).then(reponse => {
        config
          .post("/gestion-project/save-update", reponse)
          .then(reponse => {
            if (reponse.status) {
              this.request = reponse.data[0];
              this.LoadFactureList();
            } else {
              console.log("error delete Facturelist", reponse.status);
            }
            this.isloading = false;
            this.spinner = false;
            this.editRow = false;
          })
          .catch(function(error) {
            console.log("error", error);
          });
      });
    }
  }
};
</script>

<style lang="scss">
.facture {
  .display-inv {
    font-size: 1.5rem;
    line-height: 2.2;
  }
}
</style>
