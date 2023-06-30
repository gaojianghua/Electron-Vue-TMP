import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './styles/main.css'
import router from './router/index'
// import './router/guards'
import { createPinia } from 'pinia'
import i18n from './i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from './common/element'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(ElementPlus)
app.mount('#app')
