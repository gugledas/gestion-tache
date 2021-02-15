<template>
  <div>
    <!-- Tableau de projet -->

    <CCard>
      <CCardHeader>
        Projets
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
          responsive
          :items="tableItems"
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
                  path: 'projet/' + item.idcontents
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

          <td slot="activity">
            <CRow class="ml-4 d-flex justify-content-arround flex-nowrap">
              <CLink
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-3"
                ><CIcon name="cilList" class="mr-1 text-info "></CIcon
              ></CLink>
              <!-- <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-2"
                ><CIcon name="cilFolder" class="mr-1 text-info "></CIcon
              ></CButton>
              <CButton
                color="primary"
                variant="ghost"
                shape="pill"
                size="sm"
                class="mx-2"
                ><CIcon name="cilPlus" class="mr-1 text-info "></CIcon
              ></CButton> -->
            </CRow>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <SingleProject />
  </div>
</template>

<script>
import * as Charts from "../charts/index";
import usersData from "../users/UsersData";
import SingleProject from "./project/SingleProjectPage";
import SelectDb from "./config/SelectDb";

export default {
  name: "SHome",
  props: {
    dataReceived: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    ...Charts,
    SingleProject
  },
  data() {
    return {
      selected: "Month",
      tableItems: [],
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
        { key: "usage", _style: "min-width:200px;" },
        { key: "activity", _style: "width:600px;" }
      ]
    };
  },
  mounted() {
    this.LoadProjectData();
  },
  methods: {
    hello(value) {
      console.log("v", value);
    },
    // Request for Loading data on DB
    LoadProjectData() {
      this.isLoading = true;
      SelectDb.selectDatas().then(response => {
        this.tableItems = response;
        this.isLoading = false;
      });
    },
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(usersData.slice(0));
    }
  }
};
</script>

<style lang="scss"></style>
