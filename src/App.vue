<template>
    <div id="app">
        <router-view :key="$route.path"/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
<script>
    import MenuToggleBtn from './components/MenuToggleBtn.vue'
    import Menu from './components/Menu.vue'
    import ContentOverlay from './components/ContentOverlay.vue'
    import NavigationBar from "./views/HeaderFooter/NavigationBar";
    import Footer from "./views/HeaderFooter/Footer";

    export default {
        components: {
            Footer, NavigationBar, MenuToggleBtn,
            Menu,
            ContentOverlay
        },
      created() {

      },


      data() {
        return {
          isOpenMobileMenu: false,
        };
      },

      computed: {
        wrapperClass() {
          return {
            'toggled': this.isOpenMobileMenu === true,
          };
        },
      }
    }
</script>

<style lang="scss">
  @import 'styles/layout.scss';
  @import 'styles/menu-toggle-btn.scss';
  @import 'styles/menu.scss';
  @import 'styles/content-overlay.scss';
  @import 'styles/media-queries.scss';
</style>
