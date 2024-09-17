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
            <ion-content :fullscreen="true" class="ion-padding">
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
                                <transition name="slide-left" mode="out-in">
                                    <ion-button v-show="heartBtn" class="heart-button" color="secondary">
                                        <ion-icon color="primary" :icon="heartOutline"></ion-icon>
                                    </ion-button>
                                </transition>
                            </ion-col>
                            <ion-col>
                                <transition name="slide-right" mode="out-in">
                                    <h4 v-show="productTitle"><strong>{{ order.title }}</strong></h4>
                                </transition>

                                <transition name="slide-right" mode=out-in>
                                    <div v-show="ratings" class="stars scale-up">
                                        <div :class="'star ' + (order.ratings >= (i+1) ? 'rate' : '')" v-for="(star,i) in 5" :key="i"> </div>
                                    </div>
                                </transition>
                                <transition name="slide-up" mode="out-in">
                                    <ion-text v-show="description">
                                        <p class="ion-margin-top ion-text-justify">
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </ion-text>
                                </transition>
                                <br>

                                <div class="d-flex justify-space-between">

                                    <transition name="slide-right" mode="out-in">
                                        <p v-show="price" class="price"  style="font-size: 25px; margin-top:20px;">
                                            ₱ {{ order.price }} 
                                        </p>
                                    </transition>
                                    <transition name="slide-left" mode="out-in">
                                        <div v-show="quantity" class="quantity">
                                            <ion-button
                                                size="small" 
                                                style="width: 40px;"
                                                @click="count -= 1"
                                                :disabled="count <= 0? true : false"
                                                color="tertiary">
                                                <ion-icon
                                                    :icon="addOutline"
                                                    size="large"
                                                >
                                                </ion-icon>
                                            </ion-button>
                                            <p >{{count}}</p>
                                            <ion-button 
                                                @click="count += 1"
                                                size="small" 
                                                style="width: 40px;" 
                                                color="tertiary">
                                                <ion-icon
                                                    :icon="addOutline"
                                                    size="large"
                                                >
                                                </ion-icon>
                                            </ion-button>
                                        </div>
                                    </transition>
                                </div>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size="12">
                                <transition name="slide-down" mode="out-in">
                                    <ion-select 
                                        mode="md"
                                        v-show="beverage"
                                        class="custom ion-margin-bottom"
                                        type="email"
                                        fill="outline"
                                        v-model="selectedBeverage" 
                                        placeholder="select Beverage" 
                                        interface="popover"
                                    >
                                        <ion-select-option 
                                            v-for="(item,index) in beverages" 
                                            :key="index" 
                                            :value="item"
                                        >
                                            {{item}}
                                        </ion-select-option>
                                    </ion-select>
                                </transition>
                            </ion-col>
                            <transition name="slide-up" mode="out-in">
                                <div v-if="drinkSize" class="d-flex justify-space-between align-center" style="width:100%;">
                                    <ion-button size="default" color="warning" fill="solid">Regular</ion-button>
                                    <ion-button size="default" color="dark" fill="outline">Large</ion-button>
                                    <ion-button size="default" color="dark" fill="outline">X-Large</ion-button>
                                </div>
                            </transition>
                        </ion-row>
                        <br>
                        <transition-group name="slide-left" mode="out-in" tag="div" class="item-container">
                            <ion-col
                                v-show="cardDelay[index]"
                                size="12"
                                size-sm="6"
                                size-md="4"
                                size-lg="3"
                                v-for="(item,index) in AddOns"
                                :key="index"
                            > 
                                <ion-card 
                                    color="surface"
                                    class="d-flex align-end justify-space-between ion-no-margin position-relative" 
                                    style="padding:10px;"> 
                                    <ion-checkbox class="checkbox"></ion-checkbox>
                                    <div class="d-flex">
                                        <div class="addons-container">
                                            <img :src="item.image" alt="addons photo">
                                        </div>
                                        <div class="addons-content">
                                            <p style="font-weight:bold; ">{{item.title}}</p>
                                            <p >{{item.subTitle}}</p>
                                            <br>
                                            <p class="price" >
                                                ₱ {{ item.price}} 
                                            </p>
                                        </div>
                                    </div>
                                    <!-- <div class="spacer"></div> -->
                                    <div class="quantity">
                                        <ion-button
                                            size="small" 
                                            @click="count -= 1"
                                            :disabled="count <= 0? true : false"
                                            color="tertiary">
                                            <ion-icon
                                                :icon="addOutline"
                                                size="small"
                                            >
                                            </ion-icon>
                                        </ion-button>
                                        <p >{{count}}</p>
                                        <ion-button 
                                            @click="count += 1"
                                            size="small" 
                                            color="tertiary">
                                            <ion-icon
                                                :icon="addOutline"
                                                size="small"
                                            >
                                            </ion-icon>
                                        </ion-button>
                                    </div>
                                </ion-card>
                            </ion-col>
                        </transition-group>

                    </ion-grid>
                </transition>
                <ion-button expand="block" class="addToBag">
                    add To Bag
                </ion-button>
                <div style="width:100%; height:100px;"></div>
            </ion-content>
            
    </ion-page>
</template>

<script setup>
    import { 
        IonPage,
        IonSelect,
        IonSelectOption,
        IonContent,
        IonHeader,
        IonToolbar, 
        IonBackButton,
        IonButtons,
        IonButton,
        IonIcon,
        IonCard,
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonGrid,
        IonRow,
        IonCol,
        IonText,
        IonCheckbox,
    } from '@ionic/vue';
    import { heartOutline,addOutline,chevronBack,mail} from 'ionicons/icons';
    import {ref,onMounted} from 'vue';
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../stores/mainStore.ts';
    const dataStore = useDataStore();
    const { order,AddOns,beverages } = storeToRefs(dataStore);
    let header = ref(false)
    let main = ref(false)
    let count = ref(1)
    let count1 = ref(1)
    let count2 = ref(1)

    let selectedBeverage = ref('')
    let cardDelay = ref([])
    let timer = ref(100)
    function enterComponent(){
        for (let index = 0; index < AddOns.value.length; index++) {
        setTimeout(() => {
            cardDelay.value[index] = true;
        }, timer.value);
        timer.value += 150
        }
    }


    let heartBtn = ref(false)
    let productTitle = ref(false)
    let ratings = ref(false)
    let description = ref(false)
    let price = ref(false)
    let quantity = ref(false)
    let beverage = ref(false)
    let drinkSize = ref(false)
    
    onMounted(() => {
    setTimeout(() => {
        header.value = true
        setTimeout(() => {
            main.value = true
            setTimeout(() => {
                heartBtn.value = true
                setTimeout(() => {
                    productTitle.value = true
                    setTimeout(() => {
                        ratings.value = true
                        setTimeout(() => {
                            description.value = true
                            setTimeout(() => {
                                price.value = true
                                setTimeout(() => {
                                    quantity.value = true
                                    setTimeout(() => {
                                        beverage.value = true
                                        setTimeout(() => {
                                            drinkSize.value = true
                                            enterComponent()
                                            }, 150);
                                        }, 150);
                                }, 150);
                            }, 150);
                        }, 150);
                    }, 150);
                }, 150);
            }, 150);
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
    z-index: 20;
    bottom: -23px;
    right: 25px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.521));
}
.quantity{
    display: flex;
    align-items: center;
    font-size: 15px;
}
.quantity p{
    font-weight: bold;
    margin:  0 10px;
}
.addons-container{
    width: 80px;
}
.addons-content{
    padding-left: 10px;
    height: 100%;
}
.price{
    /* padding-top:10px; */
    position: relative;
    color: #d71921;
    font-weight: bold;
}
.checkbox{
    right: 10px;
    top: 10px;
    position: absolute;
}


ion-select.custom {
    /* --background: #373737; */
    /* --color: #fff; */
    /* --placeholder-color: #ddd; */
    /* --placeholder-opacity: 0.8; */
    --padding-bottom: 0px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 0px;
  }

  ion-select.custom.ios .select-bottom .helper-text,
  ion-select.custom.ios .select-bottom .counter,
  ion-select.custom.md .select-bottom .helper-text,
  ion-select.custom.md .select-bottom .counter {
    color: var(--ion-color-primary);
  }

.addToBag{
    transition: all 0.3s ease-in-out;
    position: fixed;
    width: 90%;
    height: 70px;
    z-index: 1000;
    bottom: 10px;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.685));
    left: 50%;
    transform: translate(-50%);
}  
.addToBag:active{
    filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.685));
}
.addToBag:hover{
    filter: drop-shadow(0 0 0px rgba(0, 0, 0, 0.685));
}
</style>
