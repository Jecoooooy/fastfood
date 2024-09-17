import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import OrderNowPage from '../views/OrderNowPage.vue';
import OrderPage from '../views/OrderPage.vue';
import NotificationsPage from '../views/NotificationsPage.vue';
import StoreLocation from '../views/StoreLocation.vue';
import FAQsPage from '../views/FAQsPage.vue';
import Dashboard from '../views/Dashboard.vue';
import { 
  eye, 
  lockClosed, 
  personCircle,
  chevronForwardOutline,
  notifications,
  storefront,
  helpCircle,
  mail,
  person,
  heart,
  location,
  fastFoodOutline,
  timeOutline
} from 'ionicons/icons';
const routes: Array<RouteRecordRaw> = [
  {
    children:[
      {
        path: '/',
        name: 'Home',
        component: HomePage,
        notif:0,
        image:'fastfood/images/logo.png'
        
      },
      {
        path: '/ordernow',
        name: 'Order Now',
        component: OrderNowPage,
        notif:0,
        icon:fastFoodOutline
      },
      {
        path: '/notification',
        name: 'Notifications',
        component: NotificationsPage,
        notif:4,
        icon:notifications
      },
      {
        path: '/storelocation',
        name: 'Store Location',
        component: StoreLocation,
        notif:0,
        icon:storefront
      },
      {
        path: '/faqs',
        name: 'FAQs Page',
        component: FAQsPage,
        notif:0,
        icon:helpCircle
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
