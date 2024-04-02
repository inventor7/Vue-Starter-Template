// main.js
import "./assets/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";

import router from "./router";
import { setupI18n } from "./i18n";

setupI18n().then(i18n => {
  const app = createApp(App);

  app.use(router);
  app.use(createMetaManager(
    
  ))
  app.use(i18n);
  app.use(createPinia());

  app.mount("#app");

  // Watch for changes in locale and store it in local storage
  watchEffect(() => {
    const newLocale = i18n.global.locale.value;
    localStorage.setItem('locale', newLocale);

  });
});