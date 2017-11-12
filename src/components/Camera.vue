<template>
<div>Camera
  <video id="camera-display" width="393" height="295" preload autoplay loop muted controls></video>
  <button v-on:click="init">Init Tracking</button>
</div>
</template>

<script>
export default {
    name: 'camera',
    methods: {
        init: function() {
            /*navigator.mediaDevices.getUserMedia({video: {width: 1280, height: 720}})
            .then(function(mediaStream) {
                console.log('success; media stream:', mediaStream);
                var videoElm = document.querySelector('#camera-display');
                console.log('video elm:', videoElm);
                videoElm.src = window.URL.createObjectURL(mediaStream);
                console.log('video src:', videoElm.src);
                videoElm.onloadedmetadata = function(e) {
                    console.log('Loaded webcam metadata');
                };
            })
            .catch(function (err) {
                console.log('Error getting user media:', err);
            });*/

            var video = document.getElementById('camera-display');
            //var canvas = document.getElementById('canvas');
            //var context = canvas.getContext('2d');

            var tracker = new tracking.ObjectTracker(['face']);
            //tracker.setInitialScale(4);
            //tracker.setStepSize(2);
            //tracker.setEdgesDensity(0.1);

            //tracking.track('#camera-display', tracker, { camera: true });

        }
    }
}
</script>
