<template>
    <v-app>
        <NavigationBar/>
        <div style="margin-top:25px">
          <WeekChart/>
          <WorkingTime/>
          <BrushChart/>
        </div>
    </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import WeekChart from './components/WeekChart.vue';
import BrushChart from './components/BrushChart.vue'
import WorkingTime from './components/WorkingTime.vue'

export default {
  name: 'UserDashboard',
  components: {
    NavigationBar,
    WeekChart,
    WorkingTime,
    BrushChart
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .back {
    background-color:rgb(0, 0, 0);
  }
  .right {
    position: relative;
    float: right;
    background-color:rgb(255, 255, 255);
  }
</style>