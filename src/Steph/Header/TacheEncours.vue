<template>
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
            path: '/projets/' + item.idcontents,
          }"
          class="text-decoration-none"
        >
          <div @click="modalLast = !modalLast">
            {{ item.titre }}
          </div>
          <div class="small text-muted mt-1">
            Crée le: {{ item.created_at }}
          </div>
        </CLink>
      </td>
      <!-- 
          <td slot="country" slot-scope="{ item }" class="text-center">
          <CIcon :name="item.country.flag" height="25" />
        </td> 
      -->
      <td slot="usage" slot-scope="{ item }" width="300">
        {{ progressItem(item) }}
        <CProgress
          class="progress-xs"
          :animated="item.status === '1' || item.status === '3' ? false : true"
          showPercentage
          :striped="item.status === '1' || item.status === '3' ? false : true"
          style="height: 10px"
          :max="item.max"
          :value="item.val"
          :color="color(item.val, item.max)"
          v-if="item.val && item.max"
        />
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
import config from "../../views/App/config/config";
import moment from "moment";

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
      progress: {
        max: 0,
        val: 0,
      },
      currentTime: moment().unix(),
    };
  },
  mounted() {
    this.LoadTacheData();
    this.timing();
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
    timing() {
      if (this.dataLoad.status == 2) {
        this.currentTime = moment().unix();
        setInterval(() => {
          this.currentTime = moment().unix();
        }, 5000);
      } else {
        this.currentTime = moment().unix();
      }
    },
    progressItem(item) {
      var date_fin_proposer = moment.unix(item.date_fin_proposer);
      var date_depart_proposer = moment.unix(item.date_depart_proposer);
      var exact = moment.unix(this.currentTime);
      if (item.date_fin_reel && item.date_fin_reel > 0) {
        exact = moment.unix(this.dataLoad.date_fin_reel);
      }
      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");
      item.max = max;
      item.val = val;
    },
    color(valueCurent, maxValue) {
      return config.color(valueCurent, maxValue);
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
