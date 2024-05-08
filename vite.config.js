import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs';
import { createServer } from 'https';

export default {
  plugins: [vue()],
  
  server: {
    https: {
  key: readFileSync('/etc/letsencrypt/live/arkeris.net/privkey.pem'),
  cert: readFileSync('/etc/letsencrypt/live/arkeris.net/fullchain.pem'),
 
  }
  
  }
};