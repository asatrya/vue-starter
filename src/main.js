import Vue from 'vue';
import App from './App.vue';
import router from './router'

import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  // Add this

Vue.config.productionTip = false

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')
