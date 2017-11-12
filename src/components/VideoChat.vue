<template>
<a-scene>
    <a-assets>
        <video id="penguin-sledding" autoplay loop="true" src="penguin-sledding.mp4"></video>
    </a-assets>
    <a-entity :rotation="rotation">
        <a-video src="#camera-display" width="16" height="9" position="0 2 -7"></a-video>
        <a-text value="<You> gg!" rotation="0 -90 0" position="9 4 -6" color="black"></a-text>
        <a-text value="<You> you missed lethal" rotation="0 -90 0" position="9 3.5 -6" color="black"></a-text>
        <a-text value="<Jake> kappa" rotation="0 -90 0" position="9 3 -6" color="black"></a-text>
        <a-text value="<Jake> lul" rotation="0 -90 0" position="9 2.5 -6" color="black"></a-text>
    </a-entity>
</a-scene>
</template>

<script>
export default {
    name: 'videochat',
    props: ['facePositionX', 'facePositionY'],
    computed: {
        rotation: function() {
            return "0 " +  (Math.floor(this.facePositionX * 40).toString()) + " 0";
        }
    },
    data () {
        return {}
    }
}
</script>

<style>
.foldable {
    transform-origin: 0% 0%;
}
#sidemenu {
    background: #101010;
    color: #c0c0c0;
    height: 500px;
}
</style>
