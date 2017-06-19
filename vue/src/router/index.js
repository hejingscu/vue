import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'

import VueTheMask from '@/pages/vue-the-mask.vue'
import LoadingMore from '@/pages/loading-more.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Hello},
    {path: '/hello',component: Hello},
    {path: '/vueTheMask',component: VueTheMask},
    {path: '/loadingMore',component: LoadingMore}
  ]
})
