import { createApp } from 'vue-demi'
import App from './App.vue'

import plugin from "./plugin"

const app = createApp(App)

app.use(plugin,{
  clientId:'574734135153-8t5trrikkkst1ujcj3e21kiqeg6iat2m.apps.googleusercontent.com'
})

app.mount("#app");
