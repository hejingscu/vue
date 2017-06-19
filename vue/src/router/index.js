import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'

import VueTheMask from '@/pages/vue-the-mask.vue'
import LoadingMore from '@/pages/loading-more.vue'
import PagePopup from '@/pages/popup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path: '/index',component: Index},
    {path: '/vueTheMask',component: VueTheMask},
    {path: '/loadingMore',component: LoadingMore},
    {path: '/popup',component: PagePopup}
  ]
})
