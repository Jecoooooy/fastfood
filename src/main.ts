import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { 
  IonApp, 
  IonicVue,
  IonRouterOutlet,
  IonMenu,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonImg
  } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App).use(IonicVue).use(router);
  
// app.component('íon-app',IonApp);
// app.component('íon-router-outlet',IonRouterOutlet);
// app.component('íon-menu',IonMenu);
// app.component('íon-content',IonContent);
// app.component('íon-header',IonHeader);
// app.component('íon-toolbar',IonToolbar);
// app.component('íon-title',IonTitle);
// app.component('íon-list',IonList);
// app.component('íon-item',IonItem);
// app.component('íon-label',IonLabel);
// app.component('íon-menu-button',IonMenuButton);
// app.component('íon-buttons',IonButtons);
// app.component('íon-Img',IonImg);


router.isReady().then(() => {
  app.mount('#app');
});
