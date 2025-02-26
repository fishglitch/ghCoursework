Root folder: npm run start:dev

Client folder: npm run dev


Working issues:
registering new user works and is logged into the db but getting this error:
App.jsx:57 GET http://localhost:5173/api/auth/me 401 (Unauthorized)


review package.json in corresponding to ensure these are the correct commands.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
