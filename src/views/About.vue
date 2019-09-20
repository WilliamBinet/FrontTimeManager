<template>
  <div class="about">
    <NavigationBar/>
    <div class="centerContent">
      <div class="row jumbotron p-3 p-md-4 text-white rounded bg-dark">
        <div class="col-md-4 col-lg-6 px-0">
          <h1 class="display-4 font-italic">"Modern problems require modern solutions"</h1>
          <p class="lead my-3">Today, Gotham have some issues for tracking time of their employees, but this app is the solution</p>
        </div>
        <div class="col-md-1 col-lg-6">
          <img class = "imglight" src="../assets/light.png">
        </div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <strong class="d-inline-block mb-2 text-primary"></strong>
            <h3 class="mb-0">
              <a class="text-dark">Functionality</a>
            </h3>
            <div class = "mb-0">
              <p class="card-text mb-auto">Here's a list of what you can do in this awesome app</p>
            <p class="text-dark">- Manage working times of employees or teams<br>- Handle Nightshift<br>- Handle sickness leave<br> - Alert system to managers<br> Overtime system</p>
            </div>
            </div>
          <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 350px; height: 250px;" src="../assets/gadget.jpg" data-holder-rendered="true">
        </div>
      </div>
      <div class="col-md-6">
        <div class="card flex-md-row mb-4 box-shadow h-md-250">
          <div class="card-body d-flex flex-column align-items-start">
            <h3 class="mb-0">
              <a class="text-dark">Design</a>
            </h3>
            <p class="card-text mb-auto">Created by our expert developement team</p>
            <p class="text-dark">The design of the website was really important to us, if you have any advice about it you can contact : emmanuel.carli@epitech.eu </p>
          </div>
          <img class="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" style="width: 500px; height: 250px;" src="../assets/design.png" data-holder-rendered="true">
        </div>
      </div>
      </div>
    </div>
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

<style scoped>
  .centerContent {
    width: 100%;
    padding : 50px;
    margin-right: auto;
    margin-left: auto;
    color: #F9D342;
    font-family: American Typewriter,serif;

  }
  .imglight {
    margin-bottom: 10px;
  }
</style>
