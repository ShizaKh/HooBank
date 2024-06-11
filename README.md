# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- site design created by one week wonders -->
npm create vite@latest
cd ( project_name)
npm install
npm run dev
<!-- stop site from running: -->
Ctrl + c (then press y) 
<!-- installing tailwind: -->
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p (for config files)

<!-- tailwind.config.cjs -->
this file contains pre defined styles like colors,font,screen sizes
<!-- index.css will have imported fonts,tailwind imports,gradients and styles -->
<!-- constants-index.js: contains text/data used all over the site -->
<!-- style.js is a file that has cutom made classnames for tailwind properties. -->


<!-- if react functional component simply returns jsx, you can remove { and return, instead just put()} -->

<!-- if u want to import all components in one line in {}, create a file in components folder as index.js and export all from there -->

on mobile devices,use column reverse for multiple similar looking sections