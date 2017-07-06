// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Home from '@/components/Home'
import MainMenu from '@/components/MainMenu'
import Slider from '@/components/Slider'
import AboutUs from '@/components/AboutUs'
import Results from '@/components/Results'
import Solutions from '@/components/Solutions'
import Teaching from '@/components/Teaching'
import Publishers from '@/components/Publishers'
import Network from '@/components/Network'
import Contact from '@/components/Contact'

Vue.component('home', Home)
Vue.component('about-us', AboutUs)
Vue.component('contact', Contact)
Vue.component('main-menu', MainMenu)
Vue.component('network', Network)
Vue.component('publishers', Publishers)
Vue.component('slider', Slider)
Vue.component('solutions', Solutions)
Vue.component('results', Results)
Vue.component('teaching', Teaching)

import VueMaterial from 'vue-material'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
