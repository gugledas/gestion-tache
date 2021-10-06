<template>
  <div>
    <CCard>
      <CCardHeader>
        List des factures
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
      <CCardBody class="">
        <CDataTable
          class="m-0 table-borderless"
          hover
          :responsive="false"
          :loading="isLoading"
          :items="items"
          :fields="factureFields"
          :header="false"
          cleaner
          table-filter
          items-per-page-select
          :items-per-page="5"
          pagination
        >
          <td slot="objet" slot-scope="{ item }">
            <div>
              <CLink
                :to="'/factures/' + item.numero"
                class="text-decoration-none titre-fact"
              >
                {{ item.objet }}
              </CLink>
            </div>
            <div class="small text-muted mt-1"></div>
          </td>
          <!-- <td slot="country" slot-scope="{ item }" class="text-center">
            <CIcon :name="item.country.flag" height="25" />
          </td> -->
          <td slot="numero" slot-scope="{ item }">
            <div class="numero-fact">N°: {{ item.numero }}</div>
          </td>
          <td slot="cout" slot-scope="{ item }">
            <div class="text-info">{{ item.cout }} $</div>
            <!-- <div class="clearfix">
              <div class="float-left">
                <strong>{{ 20 }}%</strong>
              </div>
              <div class="float-right">
                <small class="text-bold"
                  ><strong>Updated: </strong> {{ item.update_at }}</small
                >
              </div>
            </div>
            <CProgress class="progress-xs" :value="20" color="primary" /> -->
          </td>

          <td slot="activity" slot-scope="{ item }">
            <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
              <PopUpFacture
                :add="false"
                :initData="item"
                :edition="edition"
                :update="true"
                @addnew-ok="LoadFacture"
              ></PopUpFacture>
              <CButton
                color="info"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1"
                v-c-tooltip="'Export to PDF'"
                ><CIcon
                  name="cilCloudDownload"
                  class="mr-1 text-primary"
                ></CIcon
              ></CButton>
              <CButton
                color="dark"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1 text-danger"
                @click="DeleteModalOn(item)"
                ><CIcon name="cil-x-circle" class="mr-1 text-danger"></CIcon
              ></CButton>
            </CRow>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <!-- modal for confirmation of delete -->
    <CModal
      :title="'Confirmer la suppression de la facture N°: ' + dataDelete.numero"
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
          <CButton @click="DeleteFacture" class="mx-1" color="danger" desabled
            >Supprimer
            <CSpinner
              v-if="spinner"
              size="sm"
              class=""
              tag="small"
              color="primary"
              style="width: 1rem; height: 1rem"
          /></CButton>
        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
import SelectDb from "../config/SelectDb";
import Utilities from "../project/Utilities.js";
import config from "../config/config";
import PopUpFacture from "./PopUpFacture";
export default {
  name: "SHome",
  components: { PopUpFacture },
  data() {
    return {
      items: [],
      factureFields: [
        { key: "numero", label: "N°", _style: "max-width:50px;" },
        {
          key: "objet",
          _style: "min-width:200px; ",
          filter: false,
        },

        { key: "activity" },
      ],
      isLoading: true,
      deleteModal: false,
      edition: true,
      dataDelete: {},
      spinner: false,
    };
  },

  mounted() {
    this.LoadFacture();
  },
  methods: {
    DeleteModalOn(val) {
      this.dataDelete = val;
      this.deleteModal = true;
    },
    DeleteFacture() {
      this.spinner = true;
      this.isloading = true;
      Utilities.formatDeleteInvoice(this.dataDelete).then((reponse) => {
        console.log("delete facture", reponse);

        config
          .post("/gestion-project/save-update", reponse)
          .then((reponse) => {
            console.log("reponse delete", reponse);
            if (reponse.status) {
              this.request = reponse.data[0];
              this.$emit("addnew-ok");
              this.LoadFacture();
            } else {
              console.log("erroree", reponse.status);
            }
            this.isloading = true;
            this.deleteModal = false;
            this.spinner = false;
          })
          .catch(function (error) {
            console.log("error", error);
          });
      });
    },
    LoadFacture() {
      this.isLoading = true;
      SelectDb.selectInvoice([]).then((response) => {
        this.items = response;
        this.isLoading = false;
      });
    },
  },
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
