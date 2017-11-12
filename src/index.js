import Vue from 'vue'
import App from './App.vue'
import vMapboxgl from './components/vMapboxgl.vue'
import Camera from './components/Camera.vue'

Vue.component('v-mapboxgl', vMapboxgl)

new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//     el: '#camera',
//     render: h => h(Camera)
// })
