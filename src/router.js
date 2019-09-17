import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sign from './views/sign_in'


Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign_in',
      name: 'sign_in',
    component: Sign
    }
  ]
})
