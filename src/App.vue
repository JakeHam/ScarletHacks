<template>
  <div id="app">
    <v-mapboxgl
      id="mapId"
      access-token="mapAccessToken"
      height="640px"
      width="480px">
    </v-mapboxgl>

    <video id="camera-display" width="320" height="240" preload autoplay loop muted controls></video>
    <canvas id="camera-canvas" width="320" height="240"></canvas>
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted: function() {
        var video = document.getElementById('camera-display');
        var canvas = document.getElementById('camera-canvas');
        var context = canvas.getContext('2d');

        var tracker = new tracking.ObjectTracker(['face']);
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#camera-display', tracker, { camera: true });

        tracker.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function(rect) {
                context.strokeStyle = '#a64ceb';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            });
        });

    },
    data () {
        return {}
    }
}
</script>

<style>
body {
  margin: 0;
}
#camera-display, #camera-canvas {
    position: fixed;
    right: 0px;
    bottom: 0px;
}
</style>
