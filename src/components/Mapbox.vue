<template>
  <div id='map'>
    <p id='latlng'>Lat: {{ lat }} Lng: {{ lng }}</p>
    <p id='faceXY'>X: {{ facePositionX }} Y: {{ facePositionY }}</p>
    <p id='pitch'>Pitch: {{ facePositionX * 60 }}</p>
  </div>
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
        bearing: newVal * 60
      })
    },
    facePositionY: function(newVal) {
      map.flyTo({
        pitch: newVal * 60 + 45
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
}

#latLng {
  background: transparentize(white, 0.2);
  bottom: 0;
  box-sizing: border-box;
  display: inline;
  left: 10px;
  padding: 5px;
  pointer-events: none;
  position: absolute;
  z-index: 200;
}
</style>