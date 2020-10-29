import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

createApp(App).use(VueSplide).use(router).mount('#app')
