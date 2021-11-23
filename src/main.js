import { createApp } from 'vue';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import store from './store';
import './assets/styles/global.scss';

createApp(App).use(store).use(VueTheMask).mount('#app');
