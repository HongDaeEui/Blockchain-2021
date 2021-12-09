<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./api.js";

createApp(App).use(store).use(router).mixin(api).mount("#app");
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
>>>>>>> 75798d74412c42f398d71392711855af2ae213e2
