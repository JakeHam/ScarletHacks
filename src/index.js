import Vue from 'vue'
import App from './components/App.vue'
import Camera from './components/Camera.vue'
import tracking from '../node_modules/tracking/build/tracking.js'
import FaceData from './face_data.js'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
    el: '#camera',
    render: h => h(Camera)
})
