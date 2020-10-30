import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue';
import store from './store'
import {router} from './router/index.js';
// import store from './store/index.js'
import 'ant-design-vue/dist/antd.css';



createApp(App).use(router).use(store).use(Antd).mount('#app')
