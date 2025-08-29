import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material/Tooltip'],
  },
  plugins: [tsconfigPaths(), react(), nodePolyfills()],
  preview: {
    port: 8081,
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  },
  base: '/cryptoarb',
});
