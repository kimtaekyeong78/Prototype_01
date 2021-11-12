import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseInput from '@/components/BaseInput';

const app = createApp(App);

app.component('Baseinput', BaseInput);
app.use(store).use(router).mount('#app');
