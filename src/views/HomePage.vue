<template>
  <ion-page>

    <transition name="slide-down" mode="out-in">
      <ion-header v-show="header" >
          <ion-toolbar >
            <ion-buttons>
              <ion-menu-button color="primary"></ion-menu-button>
              <ion-title> Our Foods</ion-title>
            </ion-buttons>
          </ion-toolbar>
      </ion-header>
    </transition>

    <transition name="slide-up" mode="out-in">
      <ion-content v-show="main">
            <div id="container" class="ion-padding">
              <ion-input 
                mode="md"
                class="custom ion-margin-bottom"
                label="Search" 
                type="email"
                :clear-input="true"
                fill="outline"
                label-placement="stacked"
              > 
                <ion-icon 
                  size="small" 
                  slot="start" 
                  :icon="search"
                  aria-hidden="true"
                ></ion-icon>
                <ion-icon 
                  size="small" 
                  slot="end" 
                  :icon="filter"
                  aria-hidden="true"
                ></ion-icon>
              </ion-input>
              <ion-buttons>
                <ion-button>All</ion-button>
                <ion-button>Breakfast</ion-button>
                <ion-button>Chickken</ion-button>
                <ion-button>Seafood</ion-button>
                <ion-button>Beef</ion-button>
              </ion-buttons>
              <ion-card>
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                <ion-card-header>
                  <ion-card-title>Card Title</ion-card-title>
                  <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  Here's a small text description for the card content. Nothing more, nothing less.
                </ion-card-content>
              </ion-card>
            </div>
      </ion-content>
    </transition>
  </ion-page>
  
</template>

<script setup lang="ts">
  import { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar, 
    IonTitle,
    IonMenuButton,
    IonButtons,
    IonInput,
    IonIcon,
  } from '@ionic/vue';
  import { search,filter} from 'ionicons/icons';
  import {ref,onMounted} from 'vue';
  let header = ref(false)
  let main = ref(false)
  let foodlist = ref([
    {
      title:'Çhicken Salad',
      cathegory:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food1.png'
    },
    {
      title:'Sorvetes Primera',
      cathegory:'Chicken',
      price:112,
      ratings:4,
      image:'../public/images/food2.png'
    },
    {
      title:'Fried Çhicken',
      cathegory:'Chicken',
      price:200,
      ratings:4,
      image:'../public/images/food3.png'
    },
    {
      title:'Çhicken Salad',
      cathegory:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food2.png'
    },
    {
      title:'Çhicken Salad',
      cathegory:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food1.png'
    },
    {
      title:'Çhicken Salad',
      cathegory:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food3.png'
    },
    {
      title:'Çhicken Salad',
      cathegory:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/foo1.png'
    },
  ])
  onMounted(() => {
    setTimeout(() => {
      header.value = true
      setTimeout(() => {
        main.value = true
      }, 200);
    }, 100);
  })
</script>