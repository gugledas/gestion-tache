<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Informations de la facture</strong>
            <div class="card-header-actions">
              <a
                href="#"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted"></small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody class=" d-flex flex-wrap">
            <CCol sm="6" md="5"
              ><CInput
                description="Object de la facture"
                v-model="factureData.titre"
                label=" titre:"
            /></CCol>
            <CCol sm="4" md="3"
              ><CInput placeholder="100.00" append="$" label=" Coût"
            /></CCol>
            <CCol sm="8" md="6"><CTextarea label=" description:"/></CCol>
            <CCol sm="8" md="7"
              ><CSelect description="Sélectionner les tâches" label=" tâche:"
            /></CCol>
            <CCol sm="6" md="4  "
              ><CInput
                description="N° facture"
                v-model="factureData.idinvoice"
                label="Numéro facture:"
            /></CCol>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"
              ><CIcon name="cilCloudDownload" /> Exporter</CButton
            >
            <CButton
              class="mx-3"
              @click="SaveFacture"
              type="reset"
              size="sm"
              color="success"
              ><CIcon name="cil-check-circle" /> Enregistrer</CButton
            >
            <CButton
              class="mx-3"
              size="sm"
              @click="hideFact = !hideFact"
              color="dark"
              ><CIcon name="cil-low-vision" /> Aperçue</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
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
                >FACTURE N°: <strong>{{ factureData.idinvoice }}</strong></CCol
              >
            </CRow>
            <CRow class="second-header m-0 text-center" alignVertical="center">
              <CCol class="bg-info pt-2">
                <p>Invoice # <strong>52141</strong></p>
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
                <h5>WB-UNIVERSE</h5>
                <h6>Ngousso, Yaoundé(cameroun).</h6>
                <h6>Location, Lorem Ipsum,</h6>
                <h6>tel: (+237) 654-654-52</h6>
                <h6>Email: <strong>wbuniverse@gmail.com</strong></h6>
              </div>
            </CCol>
            <CCol
              class="facture__id p-3 d-flex mr-5 pr-3 justify-content-center"
            >
              <h5>Invoice to :</h5>
              <div class="ml-2">
                <h5>Dwayne Clark</h5>
                <h6>24 Dummy, street Area.</h6>
                <h6>Location, Lorem Ipsum,</h6>
                <h6>507xx745</h6>
              </div>
            </CCol>
          </CRow>
          <CRow alignHorizontal="center" class="mb-2 " alignVertical="center">
            <CCol md="11" class="d-flex aligns-item-center ml-4">
              OBJECT:
              <strong class="ml-3 m-0">{{ factureData.titre }}</strong>
            </CCol>
          </CRow>
          <CRow alignHorizontal="center" class="mb-4">
            <CCol md="11">
              <CDataTable
                striped
                outlined
                hover
                :responsive="false"
                :items="factTable"
                :fields="facFields"
                head-color="light"
                no-sorting
              >
                <td slot="sl" slot-scope="{ item }">
                  <Strong>{{ item.sl }}</Strong>
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
                <div class="d-flex justify-content-around">
                  <h5>Sub Total:</h5>
                  <span class="ml-5 h5">5240.00 $</span>
                </div>
                <div class="d-flex justify-content-around">
                  <h5>Tax:</h5>
                  <span class="ml-5 h5">19.25%</span>
                </div>
                <div
                  class="d-flex justify-content-around bg-info mt-2 text-white p-2 mr-4"
                >
                  <h5>Total:</h5>
                  <span class="ml-5 h5">10 142.00 $</span>
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
export default {
  name: "SHome",
  components: {},
  data() {
    return {
      factTable: [
        {
          sl: 1,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 2,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 3,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        },
        {
          sl: 4,
          item: "Agapetus Tadeáš",
          prix: "10$",
          total: "105",
          quantite: "05"
        }
      ],
      facFields: [
        { key: "sl" },
        { label: "Tasks description", key: "item" },
        { key: "prix" },
        { label: "Qté", key: "quantite" },
        { key: "total", label: "Total" }
      ],
      factureData: {
        titre: "Facture pour l'appli de Mr Marocain DuBois",
        description: "",
        cout: "",
        idcontents: "",
        idinvoice: "12012"
      },
      hideFact: true
    };
  },
  methods: { SaveFacture() {} }
};
</script>

<style lang="scss">
.facture {
  .display-inv {
    font-size: 2rem;
    line-height: 2.2;
  }
}
</style>
