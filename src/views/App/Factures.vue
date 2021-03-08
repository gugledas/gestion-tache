<template>
  <div>
    <CRow class="mr-5 mt-n2 d-flex  mb-2" alignHorizontal="end">
      <PopUpFacture></PopUpFacture>
    </CRow>

    <CRow>
      <CCol><FactureList></FactureList></CCol>
    </CRow>
  </div>
</template>

<script>
//import SelectDb from "./config/SelectDb";
//import Utilities from "./project/Utilities.js";
import FactureList from "./facture/FactureList";
//import config from "./config/config";
import PopUpFacture from "./facture/PopUpFacture";
export default {
  name: "SHome",
  components: { FactureList, PopUpFacture },
  data() {
    return {
      modalAdd: false,
      active: false,
      isLoading: false,
      showInput: true,
      alertOk: false,
      buttonService: false,
      alertText: "Création de telle projet ok",
      AlertColor: "success",
      itemClient: [],
      itemProject: [],
      nbFacture: "",
      initData: {
        numero: "",
        objet: "",
        idcontents: "",
        idclients: "",
        proprietaire: "",
        creaated: "",
        update_at: ""
      },
      timer: null
    };
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss"></style>
