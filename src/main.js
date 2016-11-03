import Vue from 'vue'

import AppComponent from './App.vue'

const vm = new Vue({
  el: '#app',
  components: {
    app: AppComponent,
  },
  render: h => h(AppComponent),
})
