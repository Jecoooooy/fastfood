<template>
  <ion-page>
      <ion-header >
      <transition name="slide-down" mode="out-in">
          <ion-toolbar v-show="header">
            <ion-buttons>
              <ion-menu-button  color="primary"></ion-menu-button>
              <ion-title class="ion-text-start" > Our Foods</ion-title>
              
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon :icon="mail"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
      </transition>
      </ion-header>
      <ion-content >
            <div id="container" class="ion-padding">
              <transition name="slide-left" mode="out-in">
                <ion-input 
                  v-show="searchBar"
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
              </transition>
              <transition name="slide-left" mode="out-in">
                <div v-show="buttonBar" class="scrollable-toolbar">
                  <ion-buttons >
                    <ion-button size="default" fill="solid">All</ion-button>
                    <ion-button>Breakfast</ion-button>
                    <ion-button>Chickken</ion-button>
                    <ion-button>Seafood</ion-button>
                    <ion-button>Beef</ion-button>
                  </ion-buttons>
                </div>
              </transition>

              <ion-grid :fixed="true"  >
                <!-- <ion-row style="margin:0px -8px;"> -->
                <transition-group name="slide-up" mode="out-in" tag="div" class="item-container">
                  <ion-col 
                    size="6"
                    size-sm="6"
                    size-md="4"
                    size-lg="3"
                    v-show="cardDelay[index]"
                    v-for="(item,index) in foodlist"
                    :key="index"
                  >
                    <ion-card 
                      @click="goToOrderPage(item)"
                      class="ion-no-margin item-card" 
                      style="border-radius: 15px;" 
                      color="surface"> 
                      <img alt="photo not available" :src="item.image" />
                      <ion-card-header style="padding:10px;">
                        <p>{{ item.category }}</p>
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
                </transition-group>
                <!-- </ion-row> -->
              </ion-grid>
            </div>
      </ion-content>
  </ion-page>
  
</template>

<script setup>
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
  import { search,filter,mail} from 'ionicons/icons';
  import {ref,onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useDataStore } from '../stores/mainStore.ts';
  const dataStore = useDataStore();
  const { order } = storeToRefs(dataStore);
  const router = useRouter()
  let header = ref(false)
  let main = ref(false)
  let foodlist = ref([
    {
      title:'Çhicken Salad',
      category:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food1.png'
    },
    {
      title:'Sorvetes Primera',
      category:'Desserts',
      price:112,
      ratings:4,
      image:'../public/images/food2.png'
    },
    {
      title:'Sorvetes Primera',
      category:'Desserts',
      price:172,
      ratings:4,
      image:'../public/images/food2.png'
    },
    {
      title:'Fried Çhicken',
      category:'Chicken',
      price:200,
      ratings:4,
      image:'../public/images/food3.png'
    },
    {
      title:'Fried Çhicken',
      category:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food3.png'
    },
    {
      title:'Çhicken Salad',
      category:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food1.png'
    },
    {
      title:'Çhicken Salad',
      category:'Chicken',
      price:172,
      ratings:4,
      image:'../public/images/food1.png'
    },
    {
      title:'Sorvetes Primera',
      category:'Desserts',
      price:112,
      ratings:4,
      image:'../public/images/food2.png'
    },
  ])

  function goToOrderPage(item){
    order.value = item
    setTimeout(() => {
      router.push('/orderpage')
    }, 100);
  }
  let cardDelay = ref([])
  let timer = ref(100)

  function enterComponent(){
    for (let index = 0; index < foodlist.value.length; index++) {
      setTimeout(() => {
        cardDelay.value[index] = true;
      }, timer.value);
      timer.value += 150
    }
  }

  let buttonBar = ref(false)
  let searchBar = ref(false)
  onMounted(() => {
    setTimeout(() => {
      header.value = true
      setTimeout(() => {
        searchBar.value=true
        setTimeout(() => {
          buttonBar.value=true
          enterComponent()
        },100);
      }, 100);
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
  background-color: #FFC107!important;
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
.item-card img{
    transition: scale 0.2s ease-in-out;
}
.item-card:hover img{
    scale: 130%;
}
.item-container{
  display: flex;
  flex-wrap: wrap;
}
</style>