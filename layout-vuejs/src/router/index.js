import Vue from 'vue'
import VueRouter from 'vue-router'

// Importações Assincronas
// Views
const HomeView = () => import('@/views/HomeView')
const ProductView = () => import('@/views/ProductView')

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}

    if (to.hash) {
      position.selector = to.hash

      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }

      if (document.querySelector(to.hash)) {
        return position
      }

      return false
    }

    return new Promise(resolve => {
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }

      this.app.$root.$once('triggerScroll', () => {
        resolve(position)
      })
    })
  }
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/products',
    name: 'ProductView',
    component: ProductView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})

export default router
