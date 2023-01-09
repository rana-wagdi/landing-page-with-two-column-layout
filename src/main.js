import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.scss'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@/plugins/font-awesome";   

// library.add(faUserSecret)
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faFacebook)
library.add(faTwitter)
library.add(faInstagram)
library.add(faFacebookF)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
