import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const app = createApp(App);

app.use(router);
app.mount('#app');
