import Vue from 'vue'
import App from './App.vue'
import vMapboxgl from './components/vMapboxgl.vue'
//import Camera from './components/Camera.vue'
import tracking from '../node_modules/tracking/build/tracking.js'
import FaceData from './face_data.js'

Vue.component('v-mapboxgl', vMapboxgl)

new Vue({
  el: '#app',
  render: h => h(App)
})
