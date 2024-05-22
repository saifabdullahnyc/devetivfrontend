import { createApp } from 'vue'


import './style.css'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';


import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue)
app.use(router)
app.mount('#app')
