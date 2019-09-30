<template>
  <div class="home">
    <NavigationBar/>

    <GohtamBackground/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "./HeaderFooter/NavigationBar";
import GohtamBackground from "./GohtamBackground";
import Footer from "./HeaderFooter/Footer";
export default {
  name: 'home',
  components: {
    Footer,
    NavigationBar,
    GohtamBackground
  },
  created() {
    this.$forceUpdate();
  }
}
</script>

<style>


  .topnav {
    overflow: hidden;
    background-color: #333;
  }

  .topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

  .topnav a.active {
    background-color: #4CAF50;
    color: white;
  }
</style>
