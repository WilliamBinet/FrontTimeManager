<template>
<div id="chart1">
    <apexchart type=line height=230 :options="chartOptionsArea" :series="series" />
    <apexchart type=area height=130 :options="chartOptionsBrush" :series="series" />
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
          series: [this.generateData("Jocker")],
          chartOptionsArea: {
            chart: {
              id: 'chartArea',
              toolbar: {
                autoSelected: 'pan',
                show: false
              }
            },
            colors: ['#546E7A'],
            stroke: {
              width: 3
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              opacity: 1,
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            }
          },
          chartOptionsBrush: {
            chart: {
              id: 'chartBrush',
              brush: {
                target: 'chartArea',
                enabled: true
              },
              selection: {
                enabled: true,
                xaxis: {
                  min: new Date('01 Jan 2019').getTime(),
                  max: new Date('01 Feb 2019').getTime()
                }
              },
            },
            colors: ['#008FFB'],
            fill: {
              type: 'gradient',
              gradient: {
                opacityFrom: 0.91,
                opacityTo: 0.1,
              }
            },
            xaxis: {
              type: 'datetime',
              tooltip: {
                enabled: false
              }
            },
            yaxis: {
              tickAmount: 2
            }
          }
        }
      },

      methods: {
        generateData(name) {
            var series = [];
            var data;

            data = this.generateDayWiseTimeSeries(new Date('01 Jan 2019').getTime(), 365, {min: 0,max: 15});
            series.push([name, data]);
            return (series);
        },

        generateDayWiseTimeSeries (baseval, count, yrange) {
          var i = 0;
          var series = [];
          while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([x, y]);
            baseval += 86400000;
            i++;
          }

          return series;
        }
    }
}
</script>

<style scoped>
</style>
