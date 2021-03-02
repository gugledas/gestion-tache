<template>
  <CChartPie
    :datasets="defaultDatasets"
    :labels="[
      'Project',
      'Tâches',
      'Memos',
      'Bugs',
      'Corrigés',
      'test',
      'À-faire'
    ]"
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
          backgroundColor: [
            "rgb(21, 65, 238)",
            "rgb(238, 214, 34)",
            "rgb(21, 223, 238)",
            "rgb(245, 71, 40)",
            "rgb(40, 245, 98)",
            "rgb(186, 75, 145)",
            "rgb(180, 91, 225)"
          ],
          data: [20, 30, 20, 12, 15, 25, 10]
        }
      ];
    }
  }
};
</script>
