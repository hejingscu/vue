import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'

import VueTheMask from '@/pages/vue-the-mask.vue'
import LoadingMore from '@/pages/loading-more.vue'
import PagePopup from '@/pages/popup.vue'
import PageDialogList from '@/pages/dialogList.vue'
import PageAnimation from '@/pages/animation.vue'
import Axios from '@/pages/axios.vue'
import PageAsync from '@/pages/async.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Index},
    {path: '/index',component: Index},
    {path: '/vueTheMask',component: VueTheMask},
    {path: '/loadingMore',component: LoadingMore},
    {path: '/popup',component: PagePopup},
    {path: '/dialogList',component: PageDialogList},
    {path: '/animation',component: PageAnimation},
    {path: '/axios',component: Axios},
    {path: '/async',component: PageAsync}
  ]
})
