import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import Show from '../components/ShowComment.vue'
import Recommend from '../views/Recommend.vue'
import Result from '../components/resultChart.vue'
import Compare from '../components/MultiChart.vue'

Vue.prototype.$http = axios

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  },
  {
    path: '/top_record/:spid',
    name: 'result',
    component: Result
  },
  {
    path: '/top_record/:id/comment',
    name: 'show',
    component: Show
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
