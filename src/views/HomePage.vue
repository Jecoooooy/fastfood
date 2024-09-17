<template>
    <ion-page > 

        <!-- <ion-header  > -->
    <transition name="slide-down" mode="out-in">
            <ion-toolbar v-show="header" >
                <ion-buttons>
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title @click="goToDashboard()">
                    <ion-button fill="clear">
                        <div class="crown">
                            <img src="/images/crown.svg" alt="">
                        </div>
                        <p style="padding-left:20px;">0 Points</p>
                        <ion-icon
                            size="small" 
                            slot="end" 
                            :icon="chevronForwardOutline"
                            aria-hidden="true"
                        > </ion-icon>
                    </ion-button>
                </ion-title>
                <ion-buttons slot="end">
                    <ion-avatar  size="small">
                        <img alt="Silhouette of a person's head" src="/images/jecoy.jpg" />
                    </ion-avatar>
                </ion-buttons>
            </ion-toolbar>
    </transition>
        <!-- </ion-header> -->

        <ion-content :fullscreen="true" ref="contentRef"  scrollEvents="true" @ionScroll="scrolling" >
            <transition name="slide-up" mode=out-in>
                <div class="container" v-show="main">
                    <div class="ion-padding">
                        <ion-grid :fixed="true">
                            <ion-row style="margin:0px -8px;">
                                <ion-col id="appLogo" class="d-flex" size="3" style="min-height: 105px; justify-content: end;" >
                                    <transition name="slide-right" mode="out-in">
                                    <div v-show="divTransition.appLogo" class="logo-container">
                                        <img  src="../../public/images/logo.png" alt="My Image"></img>
                                    </div>
                                    </transition>
                                </ion-col>
                                <ion-col size="9" ref="message" class="d-flex justify-center" style="flex-direction: column;">
                                    <transition name="slide-down" mode="out-in">
                                        <p v-show="divTransition.greetings">Anneoyong. Chou!</p>
                                    </transition>
                                    <transition name="slide-left" mode="out-in">
                                        <h1 v-show="divTransition.question">
                                            <strong>
                                                What do you want to eat?
                                            </strong>
                                        </h1>
                                    </transition>
                                </ion-col>
                                <ion-col size="12" id="searchInput" style="min-height: 82px; ">
                                    <transition name="slide-up" mode="out-in">
                                        <ion-input 
                                            v-show="divTransition.search"
                                            mode="md"
                                            class="custom ion-margin-bottom"
                                            type="email"
                                            placeholder="try our new Steak Fries Veggies"
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
                                        </ion-input>
                                    </transition>
                                </ion-col>
                            </ion-row>
                        </ion-grid>
                    </div>
                    <ion-grid :fixed="true" >
                        <div class="d-flex align-center justify-space-between ion-padding-horizontal" id="offers" style="min-height: 50px;">
                            <transition name="slide-right" mode="out-in">
                                <h3 v-show="divTransition.offers"><strong>Special Offers!</strong></h3>
                            </transition>
                            <transition name="slide-left" mode="out-in">    
                                <ion-text v-show="divTransition.viewBtn" color="primary">
                                    <ion-button size="small" color="primary" fill="clear">
                                        View All
                                        <ion-icon
                                            size="small" 
                                            slot="end" 
                                            :icon="chevronForwardOutline"
                                            aria-hidden="true"
                                        > </ion-icon>
                                    </ion-button>
                                </ion-text>
                            </transition>
                        </div>
                        <div id="bannerContainer" style="min-height: 200px;"> 
                        <transition name="slide-left" mode="out-in">
                            <div v-show="divTransition.banner" class="scrollable-toolbar">
                                <div class="banner" v-for="(item,index) in banner">
                                    <img  :src="item.image" alt="My Image"></img>
                                </div>
                            </div>
                        </transition>
                        </div>
                        <div id="categoryTitle" style="min-height: 40px;">
                        <transition name="slide-right" mode="out-in">
                            <h3 v-show="divTransition.categoryTitle" class="ion-padding-horizontal">
                                <strong>Category</strong>
                            </h3>
                        </transition>
                        </div>
                        <div id="categoryContent" style="min-height: 320px;">
                            <transition name="slide-left" mode="out-in">
                                <div v-show="divTransition.categoryContent" class="scrollable-toolbar ion-padding-bottom">
                                    <div class="category" v-for="(item,index) in category">
                                        <img  :src="item.image" alt="My Image"></img>
                                        <div class="category-content">
                                            <p>{{ item.category }}</p>
                                            <span>{{ item.recipes }} Recipes</span>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div id="whatsNewTitle" style="min-height: 40px;">
                            <transition name="slide-right" mode="out-in">
                                <h3 v-show="divTransition.whatsNewTitle" class="ion-padding" >
                                    <strong>What's New</strong>
                                </h3>
                            </transition>
                        </div>
                        <div id="whatsNewContent" style="min-height: 220px;">
                        <transition name="slide-left" mode="out-in">
                            <div v-show="divTransition.whatsNewContent" class="ion-padding-end ion-padding-start ion-padding-bottom">
                                <div class="whatsNew">
                                    <img :src="whatsNew" alt="no photo available">
                                </div>
                            </div>
                        </transition>
                        </div>
                        <div id="popularTitle" style="min-height: 40px;">
                            <transition name="slide-right" mode="out-in">
                                <h3 v-show="divTransition.popularTitle" class="ion-padding-horizontal ion-padding-top" style="padding-bottom:8px;" >
                                    <strong>Most Popular!</strong>
                                </h3>
                            </transition>
                        </div>
                        <ion-grid :fixed="true"  class="ion-padding-horizontal" style="min-height: 600px;" id="popularContent">
                        <!-- <ion-row style="margin:0px -8px;"> -->
                            <transition-group name="slide-up" mode="out-in" tag="div"  class="item-container">
                                <ion-col 
                                    size="6"
                                    size-sm="6"
                                    size-md="4"
                                    size-lg="3"
                                    v-show="cardDelay[index]"
                                    v-for="(item,index) in favorites"
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
                    <div style="width:100%; height:100px;"></div>
                    </ion-grid>
                </div>
            </transition>
            <transition name="slide-right" mode="out-in">
                <ion-button size="large" class="float-button" @click="goToOrderNowPage()">
                Order Now!
                </ion-button>
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
        IonTitle,
        IonGrid,
        IonRow,
        IonCol,
        IonMenuButton,
        IonButtons,
        IonButton,
        IonInput,
        IonIcon,
        IonCardSubtitle,
        IonCardContent,
        IonText,
        IonAvatar,
        IonCard,
        IonCardHeader,
    } from '@ionic/vue';
    import { search,filter,mail,chevronForwardOutline} from 'ionicons/icons';
    import {ref,reactive,nextTick,onMounted,onBeforeUnmount} from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../stores/mainStore';
    const dataStore = useDataStore();
    const { order,banner,whatsNew,category,favorites } = storeToRefs(dataStore);
    let header = ref(false)
    let main = ref(false)

    function goToOrderPage(item){
        order.value = item
        setTimeout(() => {
        router.push('/orderpage')
        }, 100);
    }
    function goToOrderNowPage(){
        setTimeout(() => {
        router.push('/ordernow')
        }, 100);
    }

    let cardDelay = ref([])
    let timer = ref(0)

    function enterComponent(){
        timer.value = 150
        for (let index = 0; index < favorites.value.length; index++) {
        setTimeout(() => {
            cardDelay.value[index] = true;
        }, timer.value);
        timer.value += 150
        }
    }


    let divTransition = reactive({
        appLogo:false,
        greetings:false,
        question:false,
        search:false,
        banner:false,
        offers:false,
        viewBtn:false,
        categoryTitle:false,
        categoryContent:false,
        whatsNewTitle:false,
        whatsNewContent:false,
        popularTitle:false,
    })
    const scrolling = (event)=> {
        const scrollTop = event.detail.scrollTop
        const ionContentRect = event.target.getBoundingClientRect() 
        const ionContentTop = ionContentRect.top + 50
        const ionContentbottom = ionContentRect.bottom - 50
        const appLogoRect = document.getElementById('appLogo').getBoundingClientRect();
        
        if (appLogoRect.top < ionContentbottom && 
        appLogoRect.bottom > ionContentTop) {
            divTransition.appLogo = true
            divTransition.greetings = true
            divTransition.question = true
        }else{
            if (divTransition.appLogo == true && divTransition.greetings == true && divTransition.question == true) {
                divTransition.appLogo = false
                divTransition.greetings = false
                divTransition.question = false
            }
        }
        const searchInputReact = document.getElementById('searchInput').getBoundingClientRect();
        if (searchInputReact.top < ionContentbottom && 
        searchInputReact.bottom > ionContentTop) {
            divTransition.search = true
        }else{
            if (divTransition.search == true) {
                divTransition.search = false
            }
        }

        const offersRect = document.getElementById('offers').getBoundingClientRect();
        if (offersRect.top < ionContentbottom && 
        offersRect.bottom > ionContentTop) {
            divTransition.offers = true
            divTransition.viewBtn = true
        }else{
            if (divTransition.offers == true) {
                divTransition.offers = false
                divTransition.viewBtn = false
            }
        }

        const bannerRect = document.getElementById('bannerContainer').getBoundingClientRect();
        if (bannerRect.top < ionContentbottom && 
        bannerRect.bottom > ionContentTop) {
            divTransition.banner = true
        }else{
            if (divTransition.banner == true) {
                divTransition.banner = false
            }
        }
        
        const categoryTitleRect = document.getElementById('categoryTitle').getBoundingClientRect();
        if (categoryTitleRect.top < ionContentbottom && 
        categoryTitleRect.bottom > ionContentTop) {
            divTransition.categoryTitle = true
        }else{
            if (divTransition.categoryTitle == true) {
                divTransition.categoryTitle = false
            }
        }

        const categoryContentRect = document.getElementById('categoryContent').getBoundingClientRect();
        if (categoryContentRect.top < ionContentbottom && 
        categoryContentRect.bottom > ionContentTop) {
            divTransition.categoryContent = true
        }else{
            if (divTransition.categoryContent == true) {
                divTransition.categoryContent = false
            }
        }

        const whatsNewTitleRect = document.getElementById('whatsNewTitle').getBoundingClientRect();
        if (whatsNewTitleRect.top < ionContentbottom && 
        whatsNewTitleRect.bottom > ionContentTop) {
            divTransition.whatsNewTitle = true
        }else{
            if (divTransition.whatsNewTitle == true) {
                divTransition.whatsNewTitle = false
            }
        }

        const whatsNewContentRect = document.getElementById('whatsNewContent').getBoundingClientRect();
        if (whatsNewContentRect.top < ionContentbottom && 
        whatsNewContentRect.bottom > ionContentTop) {
            divTransition.whatsNewContent = true
        }else{
            if (divTransition.whatsNewContent == true) {
                divTransition.whatsNewContent = false
            }
        }

        const popularTitleRect = document.getElementById('popularTitle').getBoundingClientRect();
        if (popularTitleRect.top < ionContentbottom && 
        popularTitleRect.bottom > ionContentTop) {
            divTransition.popularTitle = true
        }else{
            if (divTransition.popularTitle == true) {
                divTransition.popularTitle = false
            }
        }

        const popularContentRect = document.getElementById('popularContent').getBoundingClientRect();
        if (popularContentRect.top < ionContentbottom && 
        popularContentRect.bottom > ionContentTop) {
            if (cardDelay.value.length == 0) {
                enterComponent()
            }
        }else{
            if (cardDelay.value.length != 0) {
                cardDelay.value = []
            }
        }
    }
    async function  goToDashboard(){
        router.push('/dashboard')
    }
    function loadComponents(){
        let delayLoad = 0
        Object.keys(divTransition).forEach(key => {
            setTimeout(() => {
                divTransition[key] = true
            }, delayLoad);
            delayLoad +=100
        });
    }

    const contentRef = ref(null);

    onMounted(async() => {
        await nextTick()
        // scrolling()

        setTimeout(() => {
            header.value = true
            setTimeout(() => {
            main.value = true
            loadComponents()
            // enterComponent()
            }, 200);
        }, 100);
    })
</script>
<style>
    .float-button{
            position: fixed;
            transition: all 0.2s ease-in-out;
            z-index: 100;
            bottom: 10px;
            right: 10px;
            filter: drop-shadow(0 5px 5px black);
            margin-top: 0px;
    }
    .float-button:active{
        filter: drop-shadow(0 0px 2px black);
        bottom: 5px;
    }
    .float-button:hover{
        filter: drop-shadow(0 0px 2px black);
        
    }
    .logo-container{
        max-width: 100px;
        width: 100%;
    }
    .banner{
        min-width: 80%;
        height:170px;
        margin-left: 16px;
        overflow: hidden;
        display: flex;
        align-items: center;
        position: relative;
        border-radius: 20px;
    }
    .banner img{
        height: 100%;
        width: 100%;
        object-fit: cover;

    }
    .banner::after{
        content: '';
        position: absolute;
        z-index: 2;
        width: 30px;
        height: 30px;
        background-color: #ffffff;
        top: 50%;
        left: 0%;
        transform: translate(-70%,-50%);
        clip-path: circle();
    }
    .banner::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 30px;
        height: 30px;
        background-color: #ffffff;
        top: 50%;
        right: 0%;
        transform: translate(70%,-50%);
        clip-path: circle();
    }
    .category{
        
        min-width: 50%;
        height:300px;
        border-radius: 20px;
        margin-left: 16px;
        overflow: hidden;
        /* display: flex;
        align-items: center; */
        position: relative;
    }
    .category::after{
        transition: height 0.2s ease-in-out;
        content: '';
        position: absolute;
        z-index: 10;
        bottom:0;
        left: 0;
        width: 100%;
        height: 70%;
        background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.841));
    }
    .category:hover::after{
        height: 100%;
    }
    .category img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .category:nth-last-child(1){
        margin-right: 16px;
    }
    .category-content{
        position: absolute;
        z-index: 11;
        bottom: 25px;
        left: 20px;
        color: #f4f4f4;
        text-shadow: 1px 1px 2px black;
    }
    .category-content p{
        font-size: 18px;
    }
    .category-content span{
        font-size: 12px;
    }
    .whatsNew{
        border-radius: 16px;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    .whatsNew img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .crown{
        width: 30px;
    }
</style>

