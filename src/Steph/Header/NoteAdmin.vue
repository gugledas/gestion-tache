<template>
  <CModal
    title="Note administrative"
    size="lg"
    color="danger"
    :show.sync="modalStatus"
  >
  
<!-- rela: <pre>{{realItemsTache}}</pre> -->
    <CDataTable
      class="my-2 table-borderless"
      hover
      :responsive="false"
      :items="itemsTache"
      :fields="tableFields"
      :header="false"
      :loading="isLoading"
      
      
    
      :items-per-page="10"
      pagination
    >
      <td slot="user" slot-scope="{ item }" style="min-width:10rem;">
        <CLink
          :to="{
            path: '/projets/' + item.idcontents,
          }"
          class="text-decoration-none "
        >
          <div @click="evModalLast">
            {{ item.titre }}
            <CBadge
              v-if="item.privaty == '1'"
              color="danger"
              position="top-start"
              shape="pill"
            >
              Privé
            </CBadge>
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
        <CRow class="ml-0 d-flex justify-content-arround flex-nowrap">
          <CLink
            color="primary"
            variant="ghost"
            shape="pill"
            size="sm"
            class="mx-3 text-decoration-none"
             :to="{
            path: '/projets/' + item.idcontents,
          }"
         
          >
            <div class="small text-muted mt-1">
            Crée le: {{ item.created_at }}
          </div>
          </CLink>
        </CRow>
      </td>
    </CDataTable>
      <CRow>
      <CCol col="10" class=" pl-4 mb-n4">
      <p>Voir toutes les 
        <span @click="evModalLast">
          <CLink  class="text-danger" :to="{
            path: '/projets/988',
          }">notes administrative <CIcon name="cilShare" class=" mx-1" size="sm" ></CIcon></CLink>
        </span></p> 
      </CCol>
    </CRow>
    <template slot="footer">
      <div class="d-flex justify-content-end mr-3">
        <CLink v-c-tooltip="'Actualiser'"
          ><CButton
            size="sm"
            shape="pill"
            color="secondary"
            @click="LoadTacheData(false)"
          >
            <CIcon name="cil-reload" size="sm" /> </CButton
        ></CLink>
      </div>
    </template>
  </CModal>
</template>

<script>
import SelectDb from "../../views/App/config/SelectDb";
import config from "../../views/App/config/config";
import moment from "moment";

export default {
  name: "noteAdmin",
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
      current_user: "",
      isLoading: false,
      itemsTache: [],
      tableFields: [
        { key: "user", _style: "min-width:550px;", filter: false },
         { key: "usage", _style: "min-width:200px;" },
        // { key: "activity", _style: "width:800px;" },
      ],
      progress: {
        max: 0,
        val: 0,
      },
      currentTime: moment().unix(),
    };
  },
  mounted() {
    this.current_user = config.current_user.toString();

    this.LoadTacheData();
    this.timing();
  },
  watch: {
    itemsTache: {
      deep: true,
      handler (val) {
      console.log('vallwatch',val)
      if(val.length) {
        this.$emit('hide-note')
      }
    }}
    //
  },
  computed: {
    realItemsTache() {
     let real =  this.itemsTache.filter(el=> el.status != '0' && el.status != '2')
      return real
    },
    utilisateur() {
      return this.$store.state.utilisateur;
    },

    modalStatus: {
      get() {
        return this.modalLast;
      },
      set(val) {
        console.log('val',this.modalLast)
        this.$emit("update-modal", val);
      },
    },
  },
  methods: {
    LoadTacheData() {
          this.isLoading = true;
       
            SelectDb.SelectNotesAd(this.current_user)
              .then((response) => {
                this.itemsTache = response;
                this.isLoading = false;
              })
              .catch((er) => {
                console.log("error chargement notes administrative:", er);
                this.isLoading = false;
              });
            
    },
    timing() {
      if (this.dataLoad && this.dataLoad.status == 2) {
        this.currentTime = moment().unix();
        setInterval(() => {
          this.currentTime = moment().unix();
        }, 5000);
      } else {
        this.currentTime = moment().unix();
      }
    },
    evModalLast() {
      this.$emit("ev_modal_last");
    },
    progressItem(item) {
      
      var date_fin_proposer = moment.unix(item.date_fin_proposer);
      var date_depart_proposer = moment.unix(item.date_depart_proposer);
      var exact = moment.unix(this.currentTime);
      if (item && item.date_fin_reel && item.date_fin_reel > 0) {
        
        exact = moment.unix(item.date_fin_reel);
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
