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
                <div class="scrollable-toolbar">
                  <ion-buttons >
                    <ion-button size="default" fill="solid">All</ion-button>
                    <ion-button>Breakfast</ion-button>
                    <ion-button>Chickken</ion-button>
                    <ion-button>Seafood</ion-button>
                    <ion-button>Beef</ion-button>
                  </ion-buttons>
                </div>
              <ion-grid style="margin:0px -8px;">
                <ion-row>
                  <ion-col 
                    size="6"
                    size-sm="6"
                    size-md="4"
                    size-lg="3"
                    v-for="(item,index) in foodlist"
                    :key="index"
                  >
                    <ion-card class="ion-no-margin" style="border-radius: 15px;" color="surface"> 
                      <img alt="photo not available" :src="item.image" />
                      <ion-card-header style="padding:10px;">
                        <p>{{ item.cathegory }}</p>
                        <ion-card-subtitle>
                          {{item.title}}
                        </ion-card-subtitle>
                      </ion-card-header>
                      <ion-card-content class="card-content" >
                      <strong>
                        ₱ {{ item.price }} 
                      </strong>
                        <div class="stars">
                          <div :class="'star ' + (item.ratings >= (i+1) ? 'rate' : '')" v-for="(star,i) in 5" :key="i"> </div>
                        </div>
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                </ion-row>
              </ion-grid>
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
    IonButton,
    IonInput,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText

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
      image:'../public/images/food1.png'
    },
    {
      title:'Sorvetes Primera',
      cathegory:'Chicken',
      price:112,
      ratings:4,
      image:'../public/images/food2.png'
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
<style>
.card-content{
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stars{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 70px;
}
.star{
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  width: 15px;
  height: 15px;
  background-color: gray;
}
.rate{
  background-color: rgb(221, 192, 27)!important;
}

.scrollable-toolbar {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */
  scrollbar-width: none;     /* For Firefox */
}
.scrollable-toolbar::-webkit-scrollbar {
  display: none;             /* For Chrome, Safari, and Opera */
}
.scrollable-toolbar ion-button {
  flex-shrink: 0;
  margin-right: 15px;
  min-width: 50px; 
  border-radius: 15px;
  overflow: hidden;
}
</style>