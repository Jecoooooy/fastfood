import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import OrderNowPage from '../views/OrderNowPage.vue'
import OrderPage from '../views/OrderPage.vue'
import NotificationsPage from '../views/NotificationsPage.vue'
import StoreLocation from '../views/StoreLocation.vue'
import FAQsPage from '../views/FAQsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/ordernow',
    name: 'Order Now Page',
    component: OrderNowPage,
  },
  {
    path: '/notification',
    name: 'Notifications Page',
    component: NotificationsPage
  },
  {
    path: '/storelocation',
    name: 'Store Location',
    component: StoreLocation
  },
  {
    path: '/faqs',
    name: 'FAQs Page',
    component: FAQsPage
  },
  {
    path: '/orderpage',
    name:'Order Page',
    component: OrderPage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
