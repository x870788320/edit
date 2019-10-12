import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: "history",
    routes: [{
            name: "welcome",
            path: '/',
            component: () =>
                import ('../pages/Welcome.vue')
        },
        {
            name: 'home',
            path: '/home',
            component: () =>
                import ('../pages/Home')
        },
        {
            name: 'show',
            path: '/show',
            component: () =>
                import ('../pages/Show')
        }
    ]
})


export default router