import Vue from 'vue'
import App from './App.vue'
import tracking from '../node_modules/tracking/build/tracking.js'
import FaceData from './face_data.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
