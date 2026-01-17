import './assets/main.scss';

import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-blue/theme.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue);

app.mount('#app');
