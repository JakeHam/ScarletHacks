<template>
    <div id="app" class="container">
        <div class="topnav" id="demoNavigation">
 
            <input type='radio' id='mapbox_radio' value='Mapbox' v-model='demo'>
            <label for='mapbox_radio'>Mapbox Demo</label>

            <input type='radio' id='aframe_radio' value='Aframe' v-model='demo'>
            <label for='aframe_radio'>Aframe Demo</label>

            <input type='radio' id='shopping_radio' value='Shopping' v-model='demo'>
            <label for='shopping_radio'>Shopping Demo</label>

        </div>

        <mapbox v-if="demo=='Mapbox'"
        :facePositionX="positionX"
        :facePositionY="positionY">
        </mapbox>

        <video id="camera-display" :width="cameraWidth" :height="cameraHeight" preload autoplay loop muted controls></video>
        <canvas id="camera-canvas" :width="cameraWidth" :height="cameraHeight"></canvas>
    </div>
</template>

<script>
import Mapbox from './components/Mapbox.vue'

export default {
    name: 'app',
    components: {
      Mapbox
    },
    created: function() {
        this.positionX = 0;
        this.positionY = 0;
        this.cameraWidth = 320;
        this.cameraHeight = 240;
    },
    mounted: function() {
        var video = document.getElementById('camera-display');
        var canvas = document.getElementById('camera-canvas');
        var context = canvas.getContext('2d');

        var tracker = new tracking.ObjectTracker(['face']);
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#camera-display', tracker, { camera: true });

        self = this;
        tracker.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            event.data.forEach(function(rect) {
                context.strokeStyle = '#a64ceb';
                context.strokeRect(rect.x, rect.y, rect.width, rect.height);
                context.font = '11px Helvetica';
                context.fillStyle = "#fff";
                context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
                context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

                self.positionX = ((rect.x + rect.width / 2) - self.cameraWidth / 2) / (self.cameraWidth / 2);
                self.positionY = ((rect.y + rect.height / 2) - self.cameraHeight / 2) / (self.cameraHeight / 2);
            });
        });

    },
    data () {
        return {
            demo: 'Mapbox',
            cameraWidth: this.cameraWidth | 0,
            cameraHeight: this.cameraHeight | 0,
            positionX: this.positionX | 0,
            positionY: this.positionY | 0
        }
    }
}
</script>

<style>
body {
  margin: 0;
}

.topnav {
    background-color: #333;
    overflow: hidden;
}

.topnav input[type=radio] {
    visibility: hidden;
    display: none;
}

.topnav {
    border: solid 3px gray;
    display: inline-block;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.topnav label {
    color: lightgray;
    display: inline-block;
    font-weight: bold;
    padding: 5px 20px;
}

.topnav label:hover {
    background-color: lightgreen;
    color:black;
}

.topnav input:checked {
    background-color: lightgreen;
    color:black;
}

.container {
    margin-top: 25px;
    margin-left: 50px;
    margin-right: 50px;
}

#camera-display, #camera-canvas {
    position: fixed;
    right: 0px;
    bottom: 0px;
}
</style>
