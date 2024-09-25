import { createApp } from 'vue'
import { router } from './router'

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import './assets/styles/general.scss'
import App from './App.vue'

library.add(fas, fab);

createApp(App).component('fa', FontAwesomeIcon).use(router).mount('#app')
