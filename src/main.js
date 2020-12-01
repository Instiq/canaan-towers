import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/css/sass/custom.scss'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import VuexRouterSync from 'vuex-router-sync'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faChevronDown, faCalendarMinus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faLinkedin, faCalendarMinus, faTwitter, faYoutube, faSearch, faChevronDown)
Vue.component('font-awesome-icon', FontAwesomeIcon)
VuexRouterSync.sync(store, router)
Vue.use(VueGoodTablePlugin)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
