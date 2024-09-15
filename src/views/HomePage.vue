<template>
    <ion-page>

    <transition name="slide-down" mode="out-in">
        <ion-header v-show="header" >
            <ion-toolbar >
            <ion-buttons>
                <ion-menu-button color="primary"></ion-menu-button>
                <ion-title></ion-title>
            </ion-buttons>
            </ion-toolbar>
        </ion-header>
    </transition>

        <ion-content :fullscreen="true">
            <transition name="slide-up" mode="out-in">
                <div id="container" v-show="main">
                this is Home
                </div>
            </transition>
        </ion-content>
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
    } from '@ionic/vue';
    import {ref,onMounted} from 'vue';
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

