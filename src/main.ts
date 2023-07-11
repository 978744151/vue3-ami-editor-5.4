import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@smallwei/avue/lib/index.css'
import '@/plugins/plugin' //引入插件
import '@/plugins/renderer'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Avue);
app.mount('#app')
