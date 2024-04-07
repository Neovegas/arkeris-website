import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

// Import Vuetify CSS file
import 'vuetify/dist/vuetify.min.css'

const app = createApp(App)

// Use Vuetify
app.use(createVuetify())

app.mount('#app')