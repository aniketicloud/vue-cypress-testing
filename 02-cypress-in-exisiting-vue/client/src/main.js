import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'

const app = createApp(App).use(router).use(store).mount('#app');

// __app__ can be changed. 
// Just try not to override existing property
// (check this with typing window.__ in browser)
if (window.Cypress) {
  window.__app__ = app;
}
