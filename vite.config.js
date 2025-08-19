import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Kalau deploy ke GitHub Pages, ubah "base" sesuai repo kamu
// contoh: base: "/portofolio/"
// Kalau deploy ke Netlify, cukup base: "/"

export default defineConfig({
  plugins: [react()],
  base: "/",   // aman untuk Netlify
});
