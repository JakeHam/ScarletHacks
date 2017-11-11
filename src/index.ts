import Vue from "vue";
import HelloComponent from "./components/Hello.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});

let camera = new Vue({
    el: "#camera-component",
    template: `
    <div>Camera
      <video id="camera-display" width="393" height="295" preload autoplay loop muted controls></video>
      <button v-on:click="init">Init Tracking</button>
    </div>
    `,
    methods: {
        init: function() {
            navigator.mediaDevices.getUserMedia({video: {width: 1280, height: 720}})
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
            });
        }
    }
});
