import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(router);
const token = localStorage.getItem('jwt');
if (token ===! '') {
  axios.defaults.headers.common['Authorization'] = token;
}



new Vue({
  router,
  render: h => h(App),
  methods: {
    hello: function() {
      alert("hello");
    }
  }
}).$mount('#app');



export default router
