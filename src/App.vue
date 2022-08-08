<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (window.localStorage.getItem("user")) {
      this.$store.dispatch("getUtilisateur");
    }
    this.$store.dispatch("getUser");
    this.$store.dispatch('getAllProjectType')
  },
  computed: {
    currentRouteName() {
      console.log("route : ", this.$route.name);
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>
