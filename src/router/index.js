import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HooksView from '../views/HooksView.vue'
import FetchView from '../views/FetchView.vue'
import ComposableView from '../views/ComposableView.vue'
import DetailsView from '../views/DetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: HooksView
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: FetchView
  },
  {
    path: '/composable',
    name: 'composable',
    component: ComposableView
  },
  {
    path: '/posts/:id',
    name: 'details',
    component: DetailsView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
