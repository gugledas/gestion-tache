<template lang="html">
  <CCol col="12">
    <h4>Filtrer le resultat</h4>
    <CRow class="mb-3">
      <CCol md="3">
        <div
          class="border p-2 px-3"
          v-for="(filtre, i) in FiltresBuilders"
          :key="i"
        >
          <CInput
            label="Date de creation"
            type="date"
            vertival
            v-model="filtre.value"
          />
          <CSelect
            label="Condition"
            placeholder="Choisir un condition"
            :options="FiltreOptions"
            v-model="filtre.operator"
          />
        </div>
      </CCol>
      <CCol class="mb-3">
        <CButton class="mx-1" color="info" @click="$emit('ev-filter', filter)">
          Appliquer
        </CButton>
      </CCol>
    </CRow>
  </CCol>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "FilterProject",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {
      FiltreOptions: [
        { label: "egal", value: "=" },
        { label: "superieur à", value: ">" }
      ],
      FiltresBuilders: [
        {
          column: "created_at",
          value: "",
          operator: ">",
          type: "AND",
          preffix: "c"
        }
      ]
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    filter() {
      var columns = {
        AND: [],
        OR: []
      };
      if (this.FiltresBuilders.length) {
        for (const i in this.FiltresBuilders) {
          const filtre = this.FiltresBuilders[i];
          if (filtre.type === "AND" && filtre.value !== "") {
            columns["AND"].push({
              column: filtre.column,
              value: filtre.value,
              operator: filtre.operator,
              preffix: filtre.preffix
            });
          }
        }
      }
      return columns;
    }
  },
  methods: {
    BuildValideFilter() {
      //
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
