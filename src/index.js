import Vue from 'vue'
import App from './components/App.vue'
import Camera from './components/Camera.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
    el: '#camera',
    render: h => h(Camera)
})
