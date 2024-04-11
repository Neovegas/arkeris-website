import { defineConfig } from 'vite';
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import express from 'express';
import path from 'path';

export default defineConfig({
  server: {
    middlewareMode: true,
    configureServer: server => {
      const app = server.middlewares;
      
      // Serve files from the .well-known/acme-challenge directory
      app.use('/.well-known/acme-challenge', express.static(path.resolve(__dirname, '.well-known/acme-challenge')));
    }
  },
  plugins: [
    {
      // Add Vuetify plugin
      name: 'vuetify',
      configureServer(server) {
        const vuetifyApp = createApp(App);
        vuetifyApp.use(createVuetify());
        server.middlewares.use(vuetifyApp);
      }
    }
  ]
});