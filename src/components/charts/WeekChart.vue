<template>
<div>
  <apexchart height="200" type="bar" :options="chartOptions" :series="series"/>
</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components : {
       apexchart: VueApexCharts,
  },
  data() {
    return {
      chartOptions: {
        xaxis: {
          type: "category",
          categories: [
            "Lundi",
            "Mardi",
            "Mercredi",
            "Jeudi",
            "Vendredi"
          ],
        }
      },
      series: [
        {
          name: "Jocker",
          data: [7, 8, 0, 9, 4]
        },
      ],
    };
  }
}
</script>

<style scoped>
</style>
