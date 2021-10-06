<template>
  <div>
    <CCard>
      <CCardHeader>
        {{ title }}
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
          :fields="tableFields"
          :header="false"
          cleaner
          table-filter
          items-per-page-select
          :items-per-page="5"
          pagination
        >
          <td slot="user" slot-scope="{ item }">
            <div>
              <CLink
                :to="{
                  path: '#',
                }"
                class="text-decoration-none"
              >
                {{ item.titre }}
              </CLink>
            </div>
            <div class="small text-muted mt-1">
              <span>
                <template>New</template>
                <template v-if="false">Recurring</template>
              </span>
              | Crée le: {{ item.created_at }}
            </div>
          </td>
          <!-- <td slot="country" slot-scope="{ item }" class="text-center">
            <CIcon :name="item.country.flag" height="25" />
          </td> -->
          <td slot="usage" slot-scope="{ item }">
            <div class="clearfix">
              <div class="float-left">
                <!-- <strong>{{ 20 }}%</strong> -->
              </div>
              <div class="float-right">
                <small class="text-bold"
                  ><strong>Updated: </strong> {{ item.update_at }}</small
                >
              </div>
            </div>
            <!-- <CProgress class="progress-xs" :value="20" color="primary" /> -->
          </td>

          <td slot="activity" slot-scope="{ item }">
            <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
              <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                @click="EditEntity(item)"
                class="mx-1"
                ><CIcon name="cilPencil" class="mr-1 text-info"></CIcon
              ></CButton>
              <!-- <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1"
                ><CIcon name="cilFolder" class="mr-1 text-info "></CIcon
              ></CButton> -->
              <CButton
                color="dark"
                variant="ghost"
                shape="pill"
                size="sm"
                @click="DeleteModalOn(item)"
                class="mx-1 text-danger"
                ><CIcon name="cil-x-circle" class="mr-1 text-danger"></CIcon
              ></CButton>
            </CRow>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <!-- modal for confirmation of delete -->
    <CModal
      title="Confirmer la suppression"
      color="danger"
      :show.sync="deleteModal"
      :closeOnBackdrop="false"
    >
      êtes vous sûre de vouloir supprimer ce contenu? <br />
      <small class="mt-2 text-center">Cette action est irréversible.</small>
      <template slot="footer">
        <div class="d-flex justify-content-end mr-3">
          <CButton @click="deleteModal = false" class="mx-1" color="light"
            >Cancel</CButton
          >
          <CButton @click="deleteEntity" class="mx-1" color="danger" desabled
            >Supprimer<CSpinner
              v-if="loading"
              size="sm"
              class="ml-1"
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
import Utilities from "../project/Utilities";
import config from "../config/config";
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
    title: {
      type: String,
      required: true,
      default: "title",
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
    tableFields: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      tableFieldse: [
        { key: "nom", _style: "min-width:550px;", filter: false },
        { key: "siteweb", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" },
      ],
      deleteModal: false,
      loading: false,
      id: "",
    };
  },
  methods: {
    //passage des données à la variables id pour le formatage avant suppresion
    DeleteModalOn(datas) {
      this.deleteModal = true;
      if (datas.idclient) {
        this.id = datas;
      } else {
        this.id = datas;
      }
    },
    //Supression d’un contenu
    deleteEntity() {
      this.loading = true;
      Utilities.formatDeleteClient(this.id).then((reponse) => {
        console.log(" deleteProject : ", reponse);
        config
          .post("/gestion-project/save-update", reponse)
          .then((reponse) => {
            if (reponse.status) {
              this.$emit("suppression-ok");
            }
            this.loading = false;
            if (this.loading == false) this.deleteModal = false;
          })
          .catch(function (error) {
            console.log("error", error);
          });
      });
    },
    //Envoie des données au parent clients.vue pour l'édition
    EditEntity(datas) {
      this.$emit("data-to-edite", datas);
    },
  },
};
</script>

<style></style>
