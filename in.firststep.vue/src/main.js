// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
if('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('../sw.js');
    console.log('Service worker registered successfully');
  }catch (e) {
    console.log('Error while registering service worker '+e);
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
