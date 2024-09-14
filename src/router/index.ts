import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import OrderNowPage from '../views/OrderNowPage.vue'
import NotificationsPage from '../views/NotificationsPage.vue'
import StoreLocation from '../views/StoreLocation.vue'
import FAQsPage from '../views/FAQsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ordernow',
    name: 'OrderNowPage',
    component: OrderNowPage
  },
  {
    path: '/notification',
    name: 'NotificationsPage',
    component: NotificationsPage
  },
  {
    path: '/storelocation',
    name: 'StoreLocation',
    component: StoreLocation
  },
  {
    path: '/faqs',
    name: 'FAQsPage',
    component: FAQsPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
