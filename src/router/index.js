import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const profile = () => import('views/profile/profile')
const Details = () => import('views/details/Details')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    // 指定的组件
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/cart',
    component:Cart
  },
  {
    path: '/profile',
    component:profile
  },

  {
    path: '/detail/:iid',
    component:Details
  }
]
const router = new VueRouter({
  routes,
  // url模式
  mode:'history'
})

export default router
