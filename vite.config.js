import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger';  

export default defineConfig({  
  plugins: [  
    dyadComponentTagger(),  
    react(),  
  ],  
  build: {  
    minify: 'terser',  
    terserOptions: {  
      compress: {  
        drop_console: true,  
        drop_debugger: true,  
      },  
      output: {  
        comments: false,  
      },  
    },  
    rollupOptions: {  
      output: {  
        chunkFileNames: 'assets/chunks/[name]-[hash].js',  
        entryFileNames: 'assets/entry-[name].js',  
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',  
      },  
    },  
  },  
});