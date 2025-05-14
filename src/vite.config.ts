import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'yddmrtua3kjw.connect.remote.it',
      'localhost',
      '127.0.0.1',
      'jtobler.net'
    ]
  }
});
