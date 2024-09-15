<template>
    <ion-page>
            <ion-header  >
                <transition name="slide-down" mode="out-in">
                    <ion-toolbar v-show="header" color="gray">
                        <ion-buttons slot="start">
                            <ion-back-button
                                :router-link="'/ordernow'"
                            >
                                Back
                            </ion-back-button>  
                        </ion-buttons>
                    </ion-toolbar>
                </transition>
            </ion-header>
            <ion-content :fullscreen="true">
                <transition name="slide-up" mode="out-in">
                <div  v-show="main" id="container">
                    this is Order Page
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
    IonBackButton,
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

