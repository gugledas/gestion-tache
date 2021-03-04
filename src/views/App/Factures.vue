<template>
  <div>
    <CRow class="mr-5 mt-n2 d-flex  mb-2" alignHorizontal="end">
      <CLink to="/factures/new">
        <CButton
          size="sm"
          v-c-tooltip="'Nouvelle Facture'"
          color="info"
          shape="pill"
        >
          <CIcon class="text-white" name="cilPlus" :height="35" size="xl" />
        </CButton>
      </CLink>
    </CRow>
    <CRow>
      <CCol><FactureList></FactureList></CCol>
    </CRow>
  </div>
</template>

<script>
import FactureList from "./facture/FactureList";
export default {
  name: "SHome",
  components: { FactureList },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss"></style>
