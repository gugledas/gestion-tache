<template lang="html">
  <CModal
    title="Last Updated"
    color="info"
    size="lg"
    :show.sync="modalLastStatus"
  >
    <CDataTable
      class="m-0 table-borderless"
      hover
      responsive
      :items="itemsTache"
      :fields="tableFields"
      :header="false"
      cleaner
      table-filter
      items-per-page-select
      :items-per-page="10"
      pagination
    >
      <td slot="user" slot-scope="{ item }">
        <CLink
          :to="{
            path: 'projets/' + item.idcontents,
          }"
          class="text-decoration-none"
        >
          <div class="small text-muted mt-1">
            <span>
              <template>New</template>
              <template v-if="false">Recurring</template>
            </span>
            | Crée le: {{ item.created_at }}
          </div>
        </CLink>
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
          <CLink
            color="primary"
            variant="ghost"
            shape="pill"
            size="sm"
            class="mx-3"
          >
            {{ item.type }}
          </CLink>
        </CRow>
      </td>
    </CDataTable>
    <template slot="footer">
      <div class="d-flex justify-content-end mr-3"></div>
    </template>
  </CModal>
</template>

<script>
import SelectDb from "../../views/App/config/SelectDb";

export default {
  name: "TacheEncours",
  props: {
    modalLast: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  components: {
    //
  },
  data() {
    return {
      itemsTache: [],
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
        { key: "usage", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" },
      ],
    };
  },
  mounted() {
    this.LoadTacheData();
  },
  watch: {
    //
  },
  computed: {
    modalLastStatus: {
      get() {
        return this.modalLast;
      },
      set(val) {
        this.$emit("update-modal", val);
      },
    },
  },
  methods: {
    LoadTacheData() {
      this.isLoading = true;
      SelectDb.SelectTacheEnours().then((response) => {
        this.itemsTache = response;
        this.isLoading = false;
      });
    },
  },
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
