import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'

import './style.css'

const app = createApp(App)

// Utiliser Vuetify
app.use(createVuetify())

app.mount('#app')