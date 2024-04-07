<template>
  <div class="background">
    <div class="background-color"></div> <!-- Background color -->
    <div class="background-image"></div> <!-- Background image -->
    <div class="content-container">
      <a class="logo-text-container">
        <img src="./assets/arkeris.logo.svg" class="logo vue" alt="Vue logo" />
        <span>Arkeris Keyboard Maker</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  z-index: 2;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
}

.background-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(24, 24, 29, 0.9); /* Background color with 100% opacity */
  z-index: -1; /* Ensure it's behind the SVG */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/technical.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4; /* 10% opacity for the background image */
  z-index: -0.5; /* Ensure it's behind the background color */
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
