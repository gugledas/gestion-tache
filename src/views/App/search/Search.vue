<!-- Vue component -->
<template>
  <div :class="styled ? 'searchForm' : ''">
    <multiselect
      v-model="searchValue"
      :options="project"
      placeholder="Tapez une recherche"
      :hide-selected="true"
      :max-height="700"
      :option-height="20"
      :show-labels="false"
      :searchable="true"
      :loading="isLoading"
      track-by="titre"
      :internal-search="false"
      :showPointer="true"
      label="titre"
      @search-change="TypingSearch"
    >
      <template slot="singleLabel" slot-scope="{option}"
        ><span class="option__desc d-inline-flex flex-column">
         
          <span class="option__title d-none">{{ option.titre }}</span>
        </span>
      </template>
      <template slot="option" slot-scope="props">
       <router-link :to="'/projets/' + props.option.idcontents">
        <div
          v-if="styled"
          class="option__desc d-inline-flex flex-column align-items-start"
        >
         
          <span class="option__title  d-flex align-items-center">
            <CBadge class="mr-2"  :color="badgeColor(props.option.type)" position="top-start"  size="sm" shape="pill">
               {{props.option.type}}
            </CBadge>
              <span class="titre-option">{{ props.option.titre }}</span>
            <CIcon name="cilShare" :class="'text-' +badgeColor(props.option.type)" size="sm" class="ml-3 pb-0 "></CIcon>
          </span>
          <div class="d-flex align-items-center">
            <!-- <span class="text-info bg-light p-1 mt-2 h6">{{
              props.option.type
            }}</span> -->
           
             
          </div>
         
        </div>
         </router-link>

        <div
          v-if="!styled"
          @click="ParentSelected(props)"
          class="option__desc d-inline-flex flex-column align-items-start"
        >
          <span class="option__title mb-2">
            <CIcon name="cilFolder" class="mr-1 text-dark"></CIcon>
            {{ props.option.titre }}
            <small class="text-dark p-1 mt-2 ml-2 text-type">{{
              props.option.type
            }}</small>
          </span>
        </div>
      </template>
      <span slot="noResult" class="p-3">
          Ooops! Aucun élement trouvé...
      </span>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import Vue from "vue";
import config from "../config/config";

// register globally
Vue.component("multiselect", Multiselect);

export default {
  // OR register locally
  props: {
    styled: {
      type: Boolean,
      default: false,
    },
  },
  components: { Multiselect },
  data() {
    return {
      value: "",
      searchValue: "",
      options: ["list", "of", "options"],
      project: [],
      isLoading: false,
      timer: null,
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
    },
  },
  methods: {
    badgeColor(type) {
      var color= ""
      switch(type) {
        case 'project' : 
         color = 'dark';
         break;
        case 'bug' : 
         color ='danger';
         break;
        case 'a_faire' : 
         color ='dark';
         break;
        case 'tache' : 
         color = 'success';
         break;
         case 'sous-projet' : 
         color = 'secondary';
         break;
        default :
        color = "light"
      }
      return color
    },
    ParentSelected(data) {
      console.log("dataSelected :", data.option);
      this.$emit("parent-selected", data.option);
    },
    // Recherche des informations 1.5s après la saisie
    TypingSearch(value) {
      if (value.length >= 2) {
        this.isLoading = true;
        this.value = value;
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(function () {
          self.LoadProjectData();
        }, 1500);
      }
    },
    // Request for Loading data on DB
    LoadProjectData() {
      this.isLoading = true;
      config
        .post("/gestion-project/search?key=" + this.value, { level: 0 },{
          headers: {
            Authorization: config.auth
          }
        })
        .then((reponse) => {
          if (reponse.status) {
            if (reponse) {
              this.project = reponse.data;
              console.log("Project search load", reponse);
            }
          }
          this.isLoading = false;
        })
        .catch(function (error) {
          console.log("error", error);
        });
    },
  },
};
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.searchForm {
  width: 550px;
  .multiselect__tags {
    padding: 2px 40px 0px 8px;
    margin-top: 7px;
    min-height: 20px;
   
  }
  .multiselect__select {
    top: -4px;
  }
  .multiselect__placeholder {
    margin-bottom: 5px;
  }
  .multiselect__option--highlight {
 // background-color: ;
 .titre-option {
   color :white
 }
}
.multiselect__option {
  padding: 0;
  display: flex; 
  //padding-top: 15px;
  align-items: center;
  &:hover {
    color :white
  }
  
}

.multiselect__element {
  
  a {
    line-height: 1;
    padding: 14px;
    color: #425c76;
  }
  
  &:hover {
    a {
      color: white;
    text-decoration: none;
    }
  }
}
}

.text-type {
  font-size: 11px;
}
</style>
