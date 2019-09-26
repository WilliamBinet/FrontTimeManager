import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import jwtDecode from 'jwt-decode';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(router);
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');
if (token ==! '') {
  console.log("mon token");
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
  Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
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
