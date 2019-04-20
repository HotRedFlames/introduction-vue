import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    title: ''
  },
  mutations: {
    changeTitle(state, title){
      state.title = title
    }
  }
})

import './lib/animate.css'
import './lib/introduction.css'

import router from './router.js'
Vue.config.devtools = true
var vm = new Vue ({
  el: '#app',
  render: c => c(app),
  router,
  store
})
