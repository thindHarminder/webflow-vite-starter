import { defineConfig } from "vite";

// vite.config.js
export default defineConfig({
    base: '/thind/', // Change this to match your project name

    build: {
        outDir: 'dist', // Folder where the project is built
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        }
    }
});
