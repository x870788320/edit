import Vue from 'vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import './index.css'

Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')