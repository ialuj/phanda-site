import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "@fortawesome/fontawesome-free/css/all.min.css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import i18n from "./i18n"; // <- importa i18n

AOS.init({
  duration: 800,
  once: true,
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
