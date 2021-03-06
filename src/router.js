import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sign from './views/Authentication'
import Sign_up from "./views/Registration";
import Welcome from "./views/Welcome";
import About from "./views/About";
import Admin from "./views/Admin";
import SideMenu from "./views/SideMenu";
import Clocks from "./views/Clocks";
import WorkingTimeUser from "./views/WorkingTimeModule/WorkingTimeUser";
import ProfileUser from "./views/ProfileUser";
import GestionDeTeam from "./views/TeamsModule/GestionDeTeam";
import GestionUser from "./views/GestionUser";
import WorkingTimeById from "./views/WorkingTimeModule/WorkingTimeById";
import NewWorkingTime from "./views/WorkingTimeModule/NewWorkingTime";
import WorkingTimeChart from "./components/charts/WorkingTimeChart";
import jwtDecoder from 'jwt-decode'

Vue.use(Router);


let router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {}

        },


        {
            path: '/profile',
            name: 'profileCurrentUser',
            component: ProfileUser,
            meta: {}

        },
        {
            path: '/workingTimes',
            name: 'workingTimes',
            component: WorkingTimeUser,
            meta: {}
        },
        {
            path: '/workingTimes/user/:userId',
            name: 'workingTimeofUserId',
            component: WorkingTimeUser,
            props : true,
            meta: {
                requiresAuth: true,
                is_manager: true,
            }

        },
        //TODO
        {
            path: '/workingTime/',
            name: 'addWorkingTimeCurrentUser',
            component: ProfileUser,
            meta: {}

        },
        {
            path: '/workingTime/user/:userId',
            name: 'addWorkingTimeIdUser',
            component: NewWorkingTime,
            props : true,
            meta: {
                is_manager: true, requiresAuth: true,

            }

        },
        {
            path: '/workingTime/:workingTimeId',
            name: 'modifyWorkingTime',
            component: WorkingTimeById,
            meta: {}
        },
       //TODO
        {
            path: '/workingTime/user/:userId/:workingTimeId',
            name: 'updateWorkingTimeByUserIdAndId',
            component: ProfileUser,
            meta: {
                is_manager: true,
                requiresAuth: true,

            }
        },
        {
            path: '/clock',
            name: 'clocks',
            component: Clocks,
            meta: {}

        },
        {
            path: '/clock/user/:userId',
            name: 'editClockUser',
            component: Clocks,
            props : true,
            meta: {
                requiresAuth: true,
                is_manager: true,
            }
        },

        {
            path: '/my_teams',
            name: 'getTeams',
            component: GestionDeTeam,
            meta: {
                requiresAuth: true,

            }

        },
        {
            path: '/users/',
            name: 'listUser',
            component: GestionUser,
            meta: {
                is_admin :true,
                requiresAuth : true,
            }

        },
        {
            path: '/users/profile/:id?',
            name: 'profile/:id',
            component: ProfileUser,
            meta: {}

        },
        {
            path: '/sign_in',
            name: 'sign_in',
            component: Sign,
            meta: {}
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
            path: '/home',
            name: 'welcome',
            component: Welcome,
            meta: {
                requiresAuth: true,
                is_admin: true,
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
            let user = jwtDecoder(localStorage.getItem('jwt'));
            if (to.matched.some(record => record.meta.is_admin)) {
                if (user.role === "Administrator") {
                    next()
                } else {
                    next({name: 'home'})
                }
            } else if (to.matched.some(record => record.meta.is_manager)) {
                if (user.role === "Administrator" || user.role === "Manager") {
                    next()
                } else {
                    next({name: 'home'});
                }
            } else {
                next()
            }
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
            next()
        } else {
            next({name: 'home'})
        }
    } else {
        next()
    }
});

export default router;
