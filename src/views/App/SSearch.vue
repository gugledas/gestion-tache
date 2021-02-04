<!-- Vue component -->
<template>
  <div class="searchForm">
    <CButton
      class="ml-4"
      variant="ghost"
      color="warning"
      size="sm"
      @click="LoadProjectData"
    >
      <CIcon name="cilPencil"></CIcon> {{ searchValue }}
    </CButton>
    <multiselect
      v-model="searchValue"
      :options="project"
      placeholder="Tapez une recherche"
      :hide-selected="true"
      :max-height="600"
      :option-height="20"
      :show-labels="false"
      :searchable="true"
      :loading="isLoading"
      track-by="titre"
      :internal-search="true"
      :showPointer="true"
      label="titre"
      @search-change="taca"
    >
      <template slot="singleLabel" slot-scope="props"
        ><span class="option__desc d-inline-flex flex-column"
          ><span class="option__title">{{ props.option.titre }}</span>
        </span>
      </template>
      <template slot="option" slot-scope="props">
        <div class="option__desc d-inline-flex flex-column align-items-start">
          <span class="option__title mb-2">
            <CIcon name="cilFolder" class="mr-1 text-info "></CIcon>
            {{ props.option.titre }}</span
          >
          <div class="d-flex aling-items-center">
            <span class="text-info bg-light p-1 mt-2 h6">Projet</span>
            <CButton class="ml-4" variant="ghost" color="warning" size="sm"
              ><CIcon name="cilPencil"></CIcon
            ></CButton>
          </div>
        </div>
      </template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import conf from "./Conf";
import Vue from "vue";
// register globally
Vue.component("multiselect", Multiselect);

export default {
  // OR register locally
  components: { Multiselect },
  data() {
    return {
      searchValue: "gest",
      options: ["list", "of", "options"],
      project: [],
      isLoading: false,
      timer: null
    };
  },
  mounted() {
    //this.LoadProjectData();
  },
  watch: {},
  computed: {
    pOptions() {
      var tab = [];
      if (this.project.length) {
        for (const i in this.project) {
          tab.push(this.project[i].titre);
        }
      }
      return tab;
    }
  },
  methods: {
    checkTyping(ev) {
      console.log("checkTyping : ", ev);
    },
    taca(value) {
      console.log("user typing");
      if (value.length > 1) {
        this.isLoading = true;
        this.searchValue = value;
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function() {
          console.log("recherche ajax.");
          self.LoadProjectData();
        }, 1000);
      }
    },
    LoadProjectData() {
      this.isLoading = true;
      conf
        .post("/gestion-project/search?key=" + this.searchValue)
        .then(reponse => {
          if (reponse.status) {
            this.project = reponse.data;
          }
          this.isLoading = false;
        })
        .catch(function(error) {
          console.log("error", error);
          this.isLoading = false;
        });
    }
  }
};
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.searchForm {
  width: 350px;
  .multiselect__tags {
    padding: 2px 40px 0px 8px;
    margin-top: 7px;
    min-height: 20px;
  }
}
</style>
