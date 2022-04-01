<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if(window.localStorage.getItem('user')) {
      this.$store.dispatch('getUtilisateur')
    }
    
    this.$store.dispatch("getUser");
  }
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "assets/scss/style";
</style>
