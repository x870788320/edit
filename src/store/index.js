import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        htmlData: null,
        aa: "ff"
    },
    mutations: {
        getHtmlData(state, htmlData) {
            state.htmlData = htmlData
        }
    },
    actions: {},
    getters: {}
})