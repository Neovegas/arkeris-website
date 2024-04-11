
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';


// Create a new Vue app instance
const app = createApp(App);

// Assuming you have a Vuetify plugin installation method, use it like this
app.use(createVuetify());

// Mount the app to the DOM
app.mount('#app');
