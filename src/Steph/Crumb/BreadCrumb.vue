<template>
  <div>
    <!--
    <CBreadcrumb v-bind="props" class="border-0 mb-0 bg-secondary">
      <slot></slot>
    </CBreadcrumb>
    -->
    <CBreadcrumb :items="links" class="border-0 mb-0 ">
      <slot></slot>
    </CBreadcrumb>
  </div>
</template>

<script>
//import CBreadcrumb from "@coreui/vue/src/components/breadcrumb/CBreadcrumb";
import CBreadcrumb from "./CustomCBreadcrumb";
import Utilities from "./Utilities";
export default {
  name: "Breadcrumb",
  components: {
    CBreadcrumb
  },
  props: {
    addClasses: [String, Array, Object],
    addLinkClasses: [String, Array, Object],
    addLastItemClasses: [String, Array, Object]
  },
  data() {
    return {
      customRoute: []
    };
  },
  computed: {
    items() {
      const routes = this.$route.matched.filter(route => {
        return route.name || (route.meta && route.meta.label);
      });
      // Ajout des routes par defaut.
      return routes.map(route => {
        const meta = route.meta || {};
        return {
          to: route,
          text: meta.label || route.name
        };
      });
    },
    props() {
      return {
        items: this.links,
        addClasses: this.addClasses,
        addLinkClasses: this.addLinkClasses,
        addLastItemClasses: this.addLastItemClasses
      };
    },
    links() {
      var elts = [];
      if (this.items.length) {
        this.items.forEach(item => {
          elts.push(item);
        });
      }
      if (this.customRoute.length) {
        this.customRoute.forEach(item => {
          elts.push(item);
        });
      }
      return elts;
    }
  },
  mounted() {
    this.GetCustomRoute(this.$route);
  },
  watch: {
    $route(to) {
      this.GetCustomRoute(to);
    }
  },
  methods: {
    GetCustomRoute(to) {
      console.log("to : ", to.params.idcontents);
      this.customRoute = [];
      if (to.params.idcontents) {
        Utilities.GetCrumbs(to.params.idcontents).then(rep => {
          this.customRoute = rep;
        });
      }
    }
  }
};
</script>
