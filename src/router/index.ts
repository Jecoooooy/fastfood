import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OrderNowPage from '../views/OrderNowPage.vue';
import OrderPage from '../views/OrderPage.vue';
import NotificationsPage from '../views/NotificationsPage.vue';
import StoreLocation from '../views/StoreLocation.vue';
import FAQsPage from '../views/FAQsPage.vue';
import Dashboard from '../views/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    children:[
      {
        path: '/',
        name: 'Home',
        component: HomePage,
        notif:0,
      },
      {
        path: '/ordernow',
        name: 'Order Now',
        component: OrderNowPage,
        notif:0,
      },
      {
        path: '/notification',
        name: 'Notifications',
        component: NotificationsPage,
        notif:4,
      },
      {
        path: '/storelocation',
        name: 'Store Location',
        component: StoreLocation,
        notif:0,
      },
      {
        path: '/faqs',
        name: 'FAQs Page',
        component: FAQsPage,
        notif:0,
      },
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    notif:0,
  },
  {
    path: '/ordernow',
    name: 'Order Now',
    component: OrderNowPage,
    notif:0,
  },
  {
    path: '/notification',
    name: 'Notifications',
    component: NotificationsPage,
    notif:4,
  },
  {
    path: '/storelocation',
    name: 'Store Location',
    component: StoreLocation,
    notif:0,
  },
  {
    path: '/faqs',
    name: 'FAQs Page',
    component: FAQsPage,
    notif:0,
  },
  {
    path: '/orderpage',
    name:'Order Page',
    component: OrderPage,
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component: Dashboard,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
