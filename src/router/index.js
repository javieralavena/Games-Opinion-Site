import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OpinionesView from '@/views/OpinionesView.vue'
import AdministracionView from '@/views/AdministracionView.vue'
import EditarView from '@/views/EditarView.vue'
import ErrorView from '@/views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: OpinionesView
  },
  {
    path: '/administracion',
    name: 'admnistracion',
    component: AdministracionView
  },
  {
    path: '/editaropinion:id',
    name: 'editaropinion',
    component: EditarView
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
