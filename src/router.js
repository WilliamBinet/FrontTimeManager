import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sign from './views/sign_in'
import Sign_up from "./views/Sign_up";
import Welcome from "./views/Welcome";
import About from "./views/About";
import Admin from "./views/Admin";
import SideMenu from "./views/SideMenu";

Vue.use(Router);


let router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
            }

        },
        {
            path : '/menu',
            name :'menu',
            component : SideMenu
        },
        {
            path: '/sign_in',
            name: 'sign_in',
            component: Sign,
            meta: {
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: Sign_up,
            meta: {
                requiresAuth: false
            }
        },
        {
          path : '/home',
          name : 'welcome',
          component : Welcome,
          meta : {
            requiresAuth: true,
              is_admin:true,
          }
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            meta: {
                is_admin: true,
            }
        }
    ]
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/sign_in',
                params: {nextUrl: to.fullPath}
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'));
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.role === "Administrator") {
                    next()
                } else {
                    next({name: '/'})
                }
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
            next()
        } else {
            next({name: 'welcome'})
        }
    } else {
        next()
    }
});

export default router;
