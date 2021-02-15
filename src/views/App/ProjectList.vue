<template>
  <div>
    <!-- Tableau de projet -->
    <LastProjectType :title="'Project'" :items="itemsProject"></LastProjectType>

    <CRow>
      <CCol md="7">
        <LastProjectType
          :title="'Dernières Tâches'"
          :items="itemsTache"
        ></LastProjectType>
      </CCol>
      <CCol>
        <LastProjectType
          :title="'Last Memos'"
          :items="itemsMemos"
        ></LastProjectType>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import * as Charts from "../charts/index";
import usersData from "../users/UsersData";
import SelectDb from "./config/SelectDb";
import LastProjectType from "./project/LastProjectType";
export default {
  name: "SHome",
  props: {},
  components: {
    ...Charts,
    LastProjectType
  },
  data() {
    return {
      selected: "Month",
      tableItems: [],
      itemsProject: [],
      itemsTache: [],
      itemsMemos: []
    };
  },
  mounted() {
    this.LoadProjectData();
    this.LoadTacheData();
    this.LoadMemosData();
  },
  methods: {
    hello(value) {
      console.log("v", value);
    },
    LoadMemosData() {
      var opt = [{ column: "c.type", operator: "=", value: "memos" }];
      this.isLoading = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsMemos = response;
        this.isLoading = false;
      });
    },
    LoadTacheData() {
      var opt = [{ column: "c.type", operator: "=", value: "tache" }];
      this.isLoading = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsTache = response;
        this.isLoading = false;
      });
    },
    // Request for Loading project data on DB
    LoadProjectData() {
      this.isLoading = true;
      SelectDb.selectDatas().then(response => {
        this.tableItems = response;
        this.itemsProject = response;
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
