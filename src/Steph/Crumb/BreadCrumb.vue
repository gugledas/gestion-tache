<template lang="html">
  <div>
    Route :
    <pre>
      {{ $route.params }}
    </pre>
    <CBreadcrumb
      class="border-0 mb-0"
      :items="[
        { text: 'Home', to: '/' },
        { text: 'parent', to: '#' },
        { text: 'parent2' }
      ]"
    />
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "BreadCrumb",
  props: {
    //
  },
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    //
  },
  watch: {
    //
  },
  computed: {
    //
  },
  methods: {
    //
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
