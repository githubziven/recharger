/* eslint-disable no-trailing-spaces,comma-spacing */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './WapApp'
import VueRouter from 'vue-router'
import routers from './router'
import RLEM from '../src/index'

Vue.use(RLEM)
const router = new VueRouter({
  mode: 'hash',
  base: '/examples',
  routes: routers(true)
})
router.beforeEach((to, from, next) => {
  next()
})
window.vueRouter = router
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
