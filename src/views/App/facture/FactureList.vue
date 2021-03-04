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
          class="m-0  table-borderless "
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
          <td slot="titre" slot-scope="{ item }">
            <div>
              <CLink
                :to="{
                  path: '#'
                }"
                class="text-decoration-none titre-fact"
              >
                {{ item.titre }}
              </CLink>
            </div>
            <div class="small text-muted mt-1"></div>
          </td>
          <!-- <td slot="country" slot-scope="{ item }" class="text-center">
            <CIcon :name="item.country.flag" height="25" />
          </td> -->
          <td slot="numero" slot-scope="{ item }">
            <div class="numero-fact">{{ item.numero }}</div>
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

          <td slot="activity" slot-scope="">
            <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
              <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1"
                ><CIcon name="cilPencil" class="mr-1 text-info "></CIcon
              ></CButton>
              <CButton
                color="info"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1"
                v-c-tooltip="'Export to PDF'"
                ><CIcon
                  name="cilCloudDownload"
                  class="mr-1 text-primary "
                ></CIcon
              ></CButton>
              <CButton
                color="dark"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-1 text-danger"
                ><CIcon name="cil-x-circle" class="mr-1 text-danger "></CIcon
              ></CButton>
            </CRow>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: "SHome",
  components: {},
  data() {
    return {
      items: [
        {
          numero: "244450",
          titre: "Factuer pour la tâche ceruz",
          description: "Lorem ipsum set dolor arim the bostimum",
          cout: "35000.00"
        },
        {
          numero: "244450",
          titre: "Factuer pour la tâche ceruz",
          description: "Lorem ipsum set dolor arim the bostimum",
          cout: "35000.00"
        },
        {
          numero: "244450",
          titre: "Factuer pour la tâche ceruz",
          description: "Lorem ipsum set dolor arim the bostimum",
          cout: "35000.00"
        }
      ],
      factureFields: [
        { key: "numero", label: "N°", _style: "min-width:200px;" },
        {
          key: "titre",
          _style: "min-width:200px; ",
          filter: false
        },
        { key: "description", _style: "min-width:200px;" },
        { key: "cout", _style: "min-width:200px;" },
        { key: "activity" }
      ],
      isLoading: false
    };
  },
  methods: {
    LoadFacture() {
      this.sisloading = true;
      SelectDb.selectClient(this.ste).then(response => {
        console.log("steList :", response);

        this.itemsSte = response;
        this.sisloading = false;
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
