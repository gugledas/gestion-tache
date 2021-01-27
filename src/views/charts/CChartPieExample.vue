<template>
  <CChartPie
    :datasets="defaultDatasets"
    :labels="['Project', 'Tâches', 'Memos', 'Users']"
  />
</template>

<script>
import { CChartPie } from "@coreui/vue-chartjs";

export default {
  name: "CChartPieExample",
  components: { CChartPie },
  computed: {
    defaultDatasets() {
      return [
        {
          backgroundColor: ["#00D8FF", "#41B883", "#E46651", "#DD1B16"],
          data: [40, 80, 20, 2]
        }
      ];
    }
  }
};
</script>
