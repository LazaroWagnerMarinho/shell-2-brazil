import Vue from 'vue'
import VueMask from 'v-mask'
import { BootstrapVue, IconsPlugin, ImagePlugin  } from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueMask)
Vue.use(ImagePlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
