import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import toast from './components/common/toast'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, {Navigation,Pagination,EffectFade,Autoplay} from "swiper";
Swiper2.use([Navigation,Pagination,EffectFade,Autoplay])
Vue.use(VueAwesomeSwiper)
Vue.use(toast)
Vue.config.productionTip = false
//事件总线$bus
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
