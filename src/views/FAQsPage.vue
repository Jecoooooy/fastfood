<template>
    <ion-page>
        <!-- <ion-header> -->
            <ion-toolbar color="secondary">
            <ion-buttons>
                <ion-menu-button color="primary"></ion-menu-button>
                <ion-title></ion-title>
            </ion-buttons>
            </ion-toolbar>
        <!-- </ion-header> -->

        <ion-content color="secondary">
            <transition name="slide-up" mode="out-in">
                <div v-if="main"  class="d-flex align-center justify-center" style="height: 100%;">
                    this is FAQs page
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

