<template>
    <ion-page>
            <ion-header  >
                <transition name="slide-down" mode="out-in">
                    <ion-toolbar v-show="header" color="gray">
                        <ion-buttons slot="start">
                            <ion-back-button
                                style="margin-left: 10px;"
                                :router-link="'/ordernow'"
                                :icon="chevronBack"
                                text=""
                                
                            >
                            <ion-icon :icon="chevronBack"></ion-icon>
                            </ion-back-button>  
                                <h4 class="ion-padding-start ion-no-margin" style="font-weight: bold;">
                                {{ order.category }} 
                                </h4>
                        </ion-buttons>
                        <ion-buttons  slot="end">
                            <ion-button color="primary">
                                <ion-icon :icon="mail"></ion-icon>
                            </ion-button>
                        </ion-buttons>
                    </ion-toolbar>
                </transition>
            </ion-header>
            <ion-content :fullscreen="true">
                <transition name="slide-up" mode="out-in">
                    <ion-grid :fixed="true" v-show="main">
                        <ion-row>
                            <ion-col size="12" class="position-relative">
                                <ion-card
                                class="ion-no-margin order-card" 
                                style="border-radius: 15px;" 
                                color="surface"
                                >
                                    <img alt="photo not available" :src="order.image" />
                                </ion-card>
                                <ion-button  class="heart-button" color="secondary">
                                    <ion-icon color="primary" :icon="heartOutline"></ion-icon>
                                </ion-button>
                            </ion-col>
                            <ion-col>
                                <h4><strong>{{ order.title }}</strong></h4>
                                <div class="stars scale-up">
                                    <div :class="'star ' + (order.ratings >= (i+1) ? 'rate' : '')" v-for="(star,i) in 5" :key="i"> </div>
                                </div>
                                <ion-text >
                                <p class="ion-margin-top">
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                </ion-text>
                                <br>
                                <div class="d-flex justify-space-between">
                                    <p class="price">
                                        ₱ {{ order.price }} 
                                    </p>
                                    <div style="">
                                        
                                    </div>
                                </div>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </transition>
            </ion-content>
    </ion-page>
</template>

<script setup>
    import { 
        IonPage,
        IonContent,
        IonHeader,
        IonToolbar, 
        IonBackButton,
        IonButtons,
        IonButton,
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
    import { heartOutline,chevronBack,mail} from 'ionicons/icons';
    import {ref,onMounted} from 'vue';
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../stores/mainStore.ts';
    const dataStore = useDataStore();
    const { order } = storeToRefs(dataStore);
    let header = ref(false)
    let main = ref(false)

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
.order-card{
    position: relative;
    max-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.order-card img{
    transition: scale 0.5s ease-in-out;
}
.order-card:hover img{
    scale: 120%;
}
.heart-button{
    position: absolute;
    bottom: -23px;
    right: 25px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.521));
}
</style>
