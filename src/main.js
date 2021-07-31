import Vue from 'vue'
import App from './App.vue'
import KProgress from 'k-progress'
import VueMoment from 'vue-moment'
import VCalendar from 'v-calendar'
Vue.config.productionTip = false
Vue.component('k-progress', KProgress)
Vue.use(VCalendar, {
  componentPrefix: 'vc'
})
Vue.use(VueMoment)
new Vue({
  render: h => h(App),
}).$mount('#app')