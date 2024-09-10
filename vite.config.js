import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     "import.meta.env.VITE_OPENAI_API_KEY": JSON.stringify(
//       process.env.VITE_OPENAI_API_KEY
//     ),
//   },
// });
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     "import.meta.env.VITE_OPENAI_API_KEY": JSON.stringify(
//       process.env.VITE_OPENAI_API_KEY
//     ),
//   },
// });
