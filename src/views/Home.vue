<template>
  <div class="home">
    <NavigationBar/>
    <GohtamBackground/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "./NavigationBar";
import GohtamBackground from "./GohtamBackground";
import Footer from "./Footer";
export default {
  name: 'home',
  components: {
    Footer,
    NavigationBar,
    GohtamBackground
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
