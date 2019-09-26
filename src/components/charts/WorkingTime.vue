<template>
<div>
  <apexchart height="250"  type="area" :options="chartOptions" :series="series"/>
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
          type: 'category',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
        }
      },
      series: [
        {
          name: "Jocker",
          data: [{
              x: '11 Feb 2017',
              y: 7
          },
          {
              x: '12 Feb 2017',
              y: 8
          },
          {
              x: '13 Feb 2017',
              y: 9
          },
          {
              x: '15 Feb 2017',
              y: 6
          },
            
                    {
              x: '17 Feb 2017',
              y: 6
          },
                    {
              x: '18 Feb 2017',
              y: 6
          },
                    {
              x: '19 Feb 2017',
              y: 0
          },
          ]
        }
      ],
    };
  }
}
</script>

<style scoped>
</style>
