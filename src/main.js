import Vue from 'vue'
import App from './App.vue'
import KProgress from 'k-progress'
import VueMoment from 'vue-moment'
import VCalendar from 'v-calendar'
import VueFileAgent from 'vue-file-agent'
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as tus from "tus-js-client"
import { plugins } from "vue-file-agent"
plugins.tus = tus;
Vue.config.productionTip = false
Vue.component('k-progress', KProgress)
Vue.use(VCalendar, {
  componentPrefix: 'vc',
})
Vue.use(VueMoment)
Vue.use(VueFileAgent)
Vue.use(VueFileAgentStyles)
Vue.use(Buefy)
new Vue({
  render: h => h(App),
}).$mount('#app')