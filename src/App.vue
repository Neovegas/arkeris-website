


<template>

    <div class="background-color"></div> <!-- Background color -->
    <div class="content-container">
      <div class="logo-text-container">
        <img src="./assets/arkeris.logo.svg" class="logo vue" alt="Vue logo" />
        <div>
          <a style="color:#FFFFFF;font-weight:bold;">Arkeris</a>
          <a style="color:#FFFFFF;font-weight:bold;"> keyboards</a>
        </div>
      </div>

      <div class="container p-5">
        <ProductGallery></ProductGallery>
      </div>

    </div>

</template>

<script>
import ProductGallery from './components/ProductGallery.vue';

export default {
  components: {
    ProductGallery
  }
}
</script>

<style scoped>


  
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  transition: height 300ms;
  z-index: 2;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #000000aa);
  height: 11em;
}


.background-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #161616; /* Background color with 100% opacity */
  z-index: -1; /* Ensure it's behind the SVG */
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  
}



.content-container {
  text-align: center;
}

.logo-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;

  z-index: 1;
}
</style>
