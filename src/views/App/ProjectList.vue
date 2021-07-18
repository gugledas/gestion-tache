<<<<<<< HEAD
<template>
  <div>
    <!-- Tableau de projet -->
    <LastProjectType
      :title="'Project'"
      :isLoading="isLoading"
      :items="itemsProject"
    ></LastProjectType>

    <CRow>
      <CCol md="7">
        <LastProjectType
          :title="'Dernières Tâches'"
          :items="itemsTache"
          :isLoading="isLoading1"
        ></LastProjectType>
      </CCol>
      <CCol>
        <LastProjectType
          :title="'Last Memos'"
          :items="itemsMemos"
          :isLoading="isLoading2"
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
      isLoading: false,
      isLoading1: false,
      isLoading2: false,
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
      this.isLoading2 = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsMemos = response;
        this.isLoading2 = false;
      });
    },
    LoadTacheData() {
      var opt = [{ column: "c.type", operator: "=", value: "tache" }];
      this.isLoading1 = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsTache = response;
        this.isLoading1 = false;
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
=======
<template>
  <div>
    <!-- Tableau de projet -->
    <!-- <LastProjectType
      :title="'Project'"
      :isLoading="isLoading"
      :items="itemsProject"
    ></LastProjectType>

    <CRow>
      <CCol md="7">
        <LastProjectType
          :title="'Dernières Tâches'"
          :items="itemsTache"
          :isLoading="isLoading1"
        ></LastProjectType>
      </CCol>
      <CCol>
        <LastProjectType
          :title="'Last Memos'"
          :items="itemsMemos"
          :isLoading="isLoading2"
        ></LastProjectType>
      </CCol>
    </CRow> -->
    <CRow>
      <CCol v-for="(item, i) in projectType" :key="i" md="6">
        <LastProjectType
          :title="item.label"
          :name="item.name"
          :isLoading="isLoading2"
        ></LastProjectType
      ></CCol>
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
      isLoading: false,
      isLoading1: false,
      isLoading2: false,
      selected: "Month",
      tableItems: [],
      itemsProject: [],
      itemsTache: [],
      itemsMemos: [],
      projectType: []
    };
  },
  mounted() {
    // this.LoadProjectData();
    // this.LoadTacheData();
    // this.LoadMemosData();
    this.LoadProjectType();
  },
  computed: {
    type() {
      var result = [];
      for (const i in this.projectType) {
        if (this.projectType[i].name == "project") {
          result.push(this.projectType[i]);
        } else if (this.projectType[i].name == "tache") {
          result.push(this.projectType[i]);
        } else {
          result.push(this.projectType[i]);
        }
      }
      return result;
    }
  },
  methods: {
    LoadProjectType() {
      SelectDb.selectTypes().then(response => {
        console.log("type : ", response);
        this.projectType = response;
      });
    },
    hello(value) {
      console.log("v", value);
    },
    LoadMemosData() {
      var opt = [{ column: "c.type", operator: "=", value: "memos" }];
      this.isLoading2 = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsMemos = response;
        this.isLoading2 = false;
      });
    },
    LoadTacheData() {
      var opt = [{ column: "c.type", operator: "=", value: "tache" }];
      this.isLoading1 = true;
      SelectDb.selectDatas(opt).then(response => {
        this.itemsTache = response;
        this.isLoading1 = false;
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
>>>>>>> 50c1963d302486def39dede06c098263984f8081
