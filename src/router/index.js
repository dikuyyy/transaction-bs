import Vue from 'vue'
import VueRouter from 'vue-router'
import TransactionPage from '../views/TransactionPage.vue'
import DetailPage from "@/views/DetailPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'transaction-page',
    component: TransactionPage
  },
  {
    path: '/detail/:id',
    name: 'detail-page',
    component: DetailPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
