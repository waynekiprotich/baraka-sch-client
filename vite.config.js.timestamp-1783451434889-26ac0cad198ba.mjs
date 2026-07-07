// vite.config.js
import { defineConfig } from "file:///Users/mac/dyad-apps/Baraka_SCH-Frontend/node_modules/vite/dist/node/index.js";
import react from "file:///Users/mac/dyad-apps/Baraka_SCH-Frontend/node_modules/@vitejs/plugin-react/dist/index.js";
import dyadComponentTagger from "file:///Users/mac/dyad-apps/Baraka_SCH-Frontend/node_modules/@dyad-sh/react-vite-component-tagger/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    dyadComponentTagger(),
    react()
  ],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        chunkFileNames: "assets/chunks/[name]-[hash].js",
        entryFileNames: "assets/entry-[name].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFjL2R5YWQtYXBwcy9CYXJha2FfU0NILUZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFjL2R5YWQtYXBwcy9CYXJha2FfU0NILUZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWMvZHlhZC1hcHBzL0JhcmFrYV9TQ0gtRnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJzsgIFxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JzsgIFxuaW1wb3J0IGR5YWRDb21wb25lbnRUYWdnZXIgZnJvbSAnQGR5YWQtc2gvcmVhY3Qtdml0ZS1jb21wb25lbnQtdGFnZ2VyJzsgIFxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoeyAgXG4gIHBsdWdpbnM6IFsgIFxuICAgIGR5YWRDb21wb25lbnRUYWdnZXIoKSwgIFxuICAgIHJlYWN0KCksICBcbiAgXSwgIFxuICBidWlsZDogeyAgXG4gICAgbWluaWZ5OiAndGVyc2VyJywgIFxuICAgIHRlcnNlck9wdGlvbnM6IHsgIFxuICAgICAgY29tcHJlc3M6IHsgIFxuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsICBcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgIFxuICAgICAgfSwgIFxuICAgICAgb3V0cHV0OiB7ICBcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLCAgXG4gICAgICB9LCAgXG4gICAgfSwgIFxuICAgIHJvbGx1cE9wdGlvbnM6IHsgIFxuICAgICAgb3V0cHV0OiB7ICBcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvY2h1bmtzL1tuYW1lXS1baGFzaF0uanMnLCAgXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2VudHJ5LVtuYW1lXS5qcycsICBcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsICBcbiAgICAgIH0sICBcbiAgICB9LCAgXG4gIH0sICBcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxvQkFBb0I7QUFDdlUsT0FBTyxXQUFXO0FBQ2xCLE9BQU8seUJBQXlCO0FBRWhDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLG9CQUFvQjtBQUFBLElBQ3BCLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsTUFDakI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
