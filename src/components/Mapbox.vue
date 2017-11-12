<template>
  <div id='map'></div>
</template>

<script>
const mapboxgl = require('mapbox-gl')

const defaultLatLng = {
  lat: -89.4012302,
  lng: 43.0730517
}

const defaultOptions = {
  container: 'map',
  style: 'mapbox://styles/hamel/cj9vtluyr554z2sob3y2thwfy',
  center: [defaultLatLng.lat, defaultLatLng.lng],
  pitch: 45,
  zoom: 15,
  attributionControl: false
}

let map;
let modifier = 65;

mapboxgl.accessToken = 'pk.eyJ1IjoiaGFtZWwiLCJhIjoiY2l2c3JqMTlwMDR4MjJ0bXUxYm16azBuNSJ9.T4v9QQ4hrPTAm4iTE2j-Lg';

export default {
  props: ['facePositionX', 'facePositionY'],
  data () {
    return {
      lat: defaultLatLng.lat,
      lng: defaultLatLng.lng,
    }
  },
  mounted () {
    this.loadData();
  },
  methods: {
    loadData () {
      map = new mapboxgl.Map(defaultOptions);
    },
  },
  watch: {
    facePositionX: function(newVal) {
      map.flyTo({
        bearing: newVal * modifier,
        speed: 2.5
      })
    },
    facePositionY: function(newVal) {
      map.flyTo({
        pitch: (newVal * modifier) + 45,
        speed: 2.5
      })
    }
  }
}
</script>

<style scoped>
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  margin: 100px;
}
</style>