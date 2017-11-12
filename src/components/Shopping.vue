<template>
    <div>
        <header>
          <span class="logo">VR Store</span>
          <input type="search" id="search" />
          <span class="promotext"><b>Free shipping</b> on all digital items.</span>
        </header>

        <div>
          <div style="float: left; width: 700px; hight: 500px; margin-right: 20px;">
            <a-scene embedded style="width: 700px; height: 500px;">
              <a-entity position="0 0 -3" :rotation="rotation">
                <a-box position="-1 0.5 0" rotation="0 45 0" color="#4CC3D9"></a-box>
                <a-sphere position="0 1.25 -2" radius="1.25" color="#EF2D5E"></a-sphere>
                <a-cylinder position="1 0.75 -0" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
              </a-entity>
              <a-sky color="#ECECEC"></a-sky>a
            </a-scene>
          </div>

          <div>
            <h1>Assorted VR Shapes</h1>
            <p><small>Sold by: <a href="#">People</a> | <a href="#">Customer Reviews</a></small></p>
            <p>Assorted shapes for all your VR needs. Made out of the highest quality, logally grown, organic binary digits. May contain gluten.</p>
            <p><big>Price: <span class="price">10.99</span></big> with <b>free shipping</b> on all digital orders when you use coupon code SCARLETHACKS.</p>
            <p><span class="in-stock"><big>In Stock</big></span></p>
            <p>Want it tomorrow? Invent it yourself. Quality takes time.</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'shopping',
    props: ['facePositionX', 'facePositionY'],
    computed: {
        rotation: function() {
            return (-1 * Math.floor(this.facePositionY * 30)).toString() + " " +
                   (Math.floor(this.facePositionX * 70).toString()) + " 0"
        }
    },
    data () {
        return {}
    }
}
</script>

<style>
body {
margin: 0; padding: 0;
font-family: sans-serif;
}

header {
background: #202040;
padding: 10px;
}

input {
background: white;
color: black;
border: 0 solid white;
padding: 8px;
max-width: 90%;
width: 500px;
border-radius: 4px;
}

#search {
margin-left: 30px;
margin-right: 30px;
border-right: 40px solid orange;
}

.logo {
color: orange;
font-weight: bold;
font-size: 150%;
font-family: sans-serif;
}

.promotext {
color: white;
font-family: sans-serif;
}

h1 {
font-family: sans-serif;
margin-bottom: 0;
padding-bottom: 0;
}

p {
margin-top: 1px;
}

a {
text-decoration: none;
}
.price {
color: red;
}
.in-stock {
color: green;
}
</style>
