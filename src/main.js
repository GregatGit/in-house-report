import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faLink, faList, faRandom, faStar, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faLink, faList, faRandom, faStar, faEnvelope)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
