import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2, {Navigation,Pagination,EffectFade,Autoplay} from "swiper";
Swiper2.use([Navigation,Pagination,EffectFade,Autoplay])
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
//事件总线$bus
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
