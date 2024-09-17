<template>
    <ion-page>

    <transition name="slide-down" mode="out-in">
            <ion-toolbar v-show="header" color="secondary">
            <ion-buttons>
                <ion-menu-button color="primary"></ion-menu-button>
                <ion-text color="dark">
                    <h2><strong>Loyalty Points</strong></h2>
                </ion-text>
            </ion-buttons>
            </ion-toolbar>
    </transition>

    <transition name="slide-up" mode="out-in">
        <ion-content v-show="main" color="secondary">

            <ion-grid class="ion-padding">
                <ion-row class="align-center">
                    <ion-col size="2">
                        <img src="../../public/images/crown.svg" alt="">
                    </ion-col>
                    <ion-col size="6">
                        <h4>
                            <strong>
                                Beginner Tier
                            </strong>
                        </h4>
                    </ion-col>
                    <ion-col size="4" class="d-flex justify-space-between">
                        <div></div>
                        <ion-text  color="primary">
                            <ion-button size="small" color="secondary">
                                View All
                                <ion-icon
                                    size="small" 
                                    slot="end" 
                                    :icon="chevronForwardOutline"
                                    aria-hidden="true"
                                > </ion-icon>
                            </ion-button>
                        </ion-text>
                    </ion-col>
                    <ion-col size="12" class="ion-padding-bottom"> 
                        <ion-label style="opacity:0.5;">
                            Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.
                        </ion-label>
                    </ion-col>
                    <ion-col size="12" class="ion-padding">
                        <div class="progress">
                            <div class="outer">
                                <div class="inner">
                                    <div id="number">
                                        <p id="num"></p>
                                        <p style="padding-left: 10px;">/ 160</p>
                                    </div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#B71C1C" />
                                        <stop offset="100%" stop-color="#750e13" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>
                        </div>
                    </ion-col>
                    <ion-col size="12">
                        <div class="d-flex align-center justify-space-between" id="offers" style="min-height: 50px;">
                            <transition name="slide-right" mode="out-in">
                                <h3><strong>Rewards</strong></h3>
                            </transition>
                            <transition name="slide-left" mode="out-in">    
                                <ion-text color="primary">
                                    <ion-button size="small" color="secondary">
                                        <ion-text color="primary" style="font-weight: 600; font-size:14px;">
                                            How it Works
                                        </ion-text>
                                        <ion-icon
                                            size="small" 
                                            color="primary"
                                            slot="end" 
                                            :icon="chevronForwardOutline"
                                            aria-hidden="true"
                                        > </ion-icon>
                                    </ion-button>
                                </ion-text>
                            </transition>
                        </div>
                    </ion-col>
                    <ion-col size="12">
                        <transition name="slide-left" mode="out-in">
                            <div  class="d-flex justify-space-between">
                            <!-- <ion-buttons > -->
                                <ion-button size="default" fill="solid">All</ion-button>
                                <ion-button color="tertiary">Beginner</ion-button>
                                <ion-button color="tertiary">Intermediate</ion-button>
                                <ion-button color="tertiary">loyal</ion-button>
                            <!-- </ion-buttons> -->
                            </div>
                        </transition>
                    </ion-col>
                    <ion-col size="12">
                        <ion-card 
                            color="surface"
                            class="d-flex align-end justify-space-between ion-no-margin position-relative" 
                            style="padding:10px;"> 
                            <div class="d-flex">
                                <div class="addons-container">
                                    <img src="/images/food1.png" alt="addons photo">
                                </div>
                                <div class="addons-content">
                                    <h5 style="font-weight:bold; ">Steak Fries Veggies</h5>
                                    <p >Meat</p>
                                    <br>
                                    <div class="d-flex align-center">
                                        <div class="crown">
                                            <img src="/images/crown.svg" alt="addons photo">
                                        </div>
                                        <ion-text color="primary" class="ion-padding-start" style="font-size: 16px; font-weight: bold;">
                                            20 Points
                                        </ion-text>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="spacer"></div> -->
                        </ion-card>
                    </ion-col>
                </ion-row> 
            </ion-grid>
        </ion-content>
    </transition>
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
    } from '@ionic/vue';
    import {ref,onMounted} from 'vue';
    import { search,filter,mail,chevronForwardOutline} from 'ionicons/icons';
    let header = ref(false)
    let main = ref(false)

    function loading(){
        let number = document.getElementById('num')
        let counter = 0;
        setInterval(() => {
            if (counter == 100) {
                clearInterval()
            }else{
                counter +=1;
                number.innerText = counter ;
            }
            
        }, 20);
    }
    onMounted(() => {
    setTimeout(() => {
        header.value = true
        setTimeout(() => {
            main.value = true
            loading()
            }, 200);
        }, 100);

    })
</script>

