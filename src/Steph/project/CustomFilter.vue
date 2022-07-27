<template lang="html">
  <div>
    <CRow>
      <!-- itemsLoaded:
      
      ||e:
      <pre> {{ allTacheLoaded.length }} </pre> -->
      <div class="d-none">
        <pre> {{ allTacheLoaded[0] }} </pre>
      </div>
      <CCol sm="6">
        <div class="form-inlinee">
          <div class="mb-2">Critère de filtrage :</div>

          <CSelect :value.sync="filterType" :options="filterOptions"></CSelect>
        </div>
      </CCol>
      <CCol sm="6"> </CCol>
      <CCol sm="6" v-show="filterType == 'typeprojet'">
        <div class="form-inlinee">
          <div class="mb-2">Choisir un type :</div>

          <CSelect :value.sync="typeValue" :options="typeOptions"></CSelect>
        </div>
      </CCol>
      <CCol sm="6" v-show="filterType == 'status'">
        <div class="form-inlinee">
          <div class="mb-2">Choisir un status:</div>

          <CSelect :value.sync="statuValue" :options="statusOptions"></CSelect>
        </div>
      </CCol>
      <CCol sm="6" v-show="filterType == 'duree'">
        <div class="form-inlinee">
          <div class="mb-2">Condition :</div>
          <CSelect
            :value.sync="conditionValue"
            :options="conditionOptions"
          ></CSelect>
        </div>
      </CCol>
      <CCol sm="6" v-show="filterType == 'duree'">
        <div class="form-inlinee">
          <div class="mb-2">Choisissez un <strong>%</strong> d'exécution :</div>
          {{ dureeValue }}
          <CSelect :value.sync="dureeValue" :options="dureeOptions"></CSelect>
        </div>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import moment from "moment";
//import SelectDb from "../../views/App/config/SelectDb";
export default {
  name: "CustomFilter",
  props: {
    itemsLoaded: {
      type: Array,
      require: true,
      default: function () {
        return [];
      }
    }
    //
  },
  components: {
    //
  },
  data() {
    return {
      /* filter */
      filterType: "",
      filterOptions: [
        { value: "", label: "Aucun" },
        { value: "typeprojet", label: "Type de projet" },
        { value: "status", label: "Status d'exécution" },
        { value: "prime", label: "Prime" },
        { value: "duree", label: "Durée d'exécution" }
      ],
      statusOptions: [
        { value: "0", label: "New" },
        { value: "2", label: "Encours" },
        { value: "1", label: "Terminé" },
        { value: "3", label: "Annulé" }
      ],
      dureeOptions: [
        { value: "50", label: "50 %" },
        { value: "75", label: "75 %" },
        { value: "100", label: "100 %" },
        { value: "200", label: "200 %" }
      ],
      conditionOptions: [
        { value: "superieur", label: "Supérieur à" },
        { value: "inferieur", label: "Inférieur à" }
      ],
      typeValue: "tache",
      conditionValue: "superieur",
      statuValue: "1",
      dureeValue: "50"
    };
  },
  mounted() {
    this.timing();
    //
  },
  watch: {
    //
  },
  computed: {
    allTacheLoaded() {
      let type = this.filterType;
      return this.filteredTache(type);
    },
    typeOptions() {
      return this.$store.state.allType;
    }
  },
  methods: {
    /*  */
    filteredTache(type) {
      let allTaches = this.formatedItemsTache(this.itemsLoaded);

      let newDatas = [];
      switch (type) {
        case "typeprojet":
          this.isLoading = true;
          //alert();
          allTaches.filter((item) => {
            if (item.type == this.typeValue) {
              newDatas.push(item);
            }
          });
          this.isLoading = false;
          break;
        case "status":
          allTaches.filter((item) => {
            if (item.status == this.statuValue) {
              newDatas.push(item);
            }
          });
          break;
        case "prime":
          allTaches.filter((item) => {
            if (item.prime_status == 1) {
              newDatas.push(item);
            }
          });
          break;
        case "duree":
          allTaches.filter((item) => {
            let duree = parseInt(this.dureeValue, 10);
            if (this.conditionValue == "superieur") {
              if (item.percentage && item.percentage > duree) {
                newDatas.push(item);
              }
            } else {
              if (item.percentage && item.percentage < duree) {
                newDatas.push(item);
              }
            }
          });
          break;
        default:
          newDatas = allTaches;
      }
      this.$emit("items_loaded_format", { datas: newDatas });
      return newDatas;
    },
    formatedItemsTache(data) {
      let realData = data;
      if (data && data.length) {
        for (let item of data) {
          this.addPercentage(item);
        }
      }
      return realData;
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
    addPercentage(item) {
      var date_fin_proposer = moment.unix(item.date_fin_proposer);
      var date_depart_proposer = moment.unix(item.date_depart_proposer);
      var exact = moment.unix(this.currentTime);
      if (item && item.date_fin_reel && item.date_fin_reel > 0) {
        exact = moment.unix(item.date_fin_reel);
      }
      var val = exact.diff(date_depart_proposer, "minutes");
      var max = date_fin_proposer.diff(date_depart_proposer, "minutes");
      var percentage = (val * 100) / max;

      item.percentage = parseInt(percentage);
    }
  }
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
