<template>
  <ion-app v-if="!start" class="overflow-hidden">
    <!-- <ion-content 
      class="transition"
      :fullscreen="true"
    > -->

      <div  
        @click="enterAuth()" 
        class="full-size  overflow-hidden position-relative "
      >
        <transition name="image-up" mode="out-in">
          <div v-show="logo" :class="'image-container transition ' + (!log? '':'image-container-login')">
            <img  src="../public/images/logo_white.png" alt="My Image"></img>
          </div>
        </transition>
        <div :class="' custom-background transition ' + (!log? '' : 'remove-height')"></div>
        <ion-content class="ion-padding ion-margin-top">
          <transition name="slide-right">
            <h1 v-show="bonjour"><strong>Bonjour!</strong></h1>
          </transition>
          <transition name="slide-up">
            <p v-show="welcome">Welcome to all new Fastfood mobile app. Kindly Login you account. Thank you!</p>
          </transition>
          <br>
          <form >
          <transition name="slide-left" mode="out-in">
            <ion-input 
              v-show="input1"
              class="custom ion-margin-bottom"
              label="Email Address" 
              type="email"
              :clear-input="true"
              fill="outline"
              label-placement="stacked"
            > 
              <ion-icon 
                size="small" 
                slot="start" 
                :icon="personCircle" 
                aria-hidden="true"
              ></ion-icon>
            </ion-input>
          </transition>
          <transition name="slide-left" mode="out-in">
            <ion-input 
              v-show="input2"
              class="custom"
              label="Password" 
              type="password"
              fill="outline"
              label-placement="stacked"
            >
            <ion-icon 
              slot="start" 
              size="small"
              :icon="lockClosed" 
              aria-hidden="true"
            ></ion-icon>
              <p class="ion-no-margin text-primary"   slot="end">Forgot?</p>
            </ion-input>
          </transition>
            <br>
            <transition name="slide-up" mode="out-in">
              <ion-button v-show="input3" expand="block" type="submit">login</ion-button>
            </transition>
            <transition name="slide-up" mode="out-in">
              <ion-button v-show="input4" fill="clear" expand="block" >Login as Guest</ion-button>
            </transition>
          </form>
        </ion-content>
      </div>
    <!-- </ion-content> -->
  </ion-app>
  <ion-app v-else>
    <ion-menu content-id="main-content" type="reveal">
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-item  
            v-for="(item,index) in router" 
            :key="index"
            :href="item.path"
          >
            <ion-label> {{ item.name }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-header >
      <ion-toolbar >
        <ion-buttons>
          <ion-menu-button color="primary"></ion-menu-button>
          <ion-title></ion-title>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup lang="ts">
  import { 
    IonApp, 
    IonRouterOutlet,
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonMenuButton,
    IonButtons,
    IonButton,
    IonInput,
    IonIcon,

  } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import {ref,onMounted} from 'vue'
  import { eye, lockClosed, personCircle } from 'ionicons/icons';
  const router = useRouter().options.routes
    
  let start = ref(false)
  let logo = ref(false)
  
  let log = ref(false)
  let bonjour = ref(false)
  let welcome = ref(false)
  let input1 = ref(false)
  let input2 = ref(false)
  let input3 = ref(false)
  let input4 = ref(false)
  function enterAuth(){
      log.value = true
      setTimeout(() => {
        bonjour.value = true
        setTimeout(() => {
          welcome.value = true
          setTimeout(() => {
            input1.value = true
              setTimeout(() => {
                input2.value = true
                setTimeout(() => {
                  input3.value = true
                  setTimeout(() => {
                  input4.value = true
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 100);
      }, 300);
  }

  onMounted(() => {
    setTimeout(() => {
      logo.value = true
    }, 200);
})
</script>
<style scope>
  .full-size {
    height: 100vh;
    width: 100vw;
  }
  .remove-height{
    height: 0%!important;
    opacity: 0!important;
  }
  
  .image-container{
    position: relative;
    /* overflow: hidden; */
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    max-width: 150px;
    
  }
  .image-container-login{
    left: 15%!important;
    top: 10%!important;
    max-width: 100px!important;
  }
  .image-container img{
    filter: drop-shadow(0 5px 10px black);
    position: relative;
    mix-blend-mode: color;

  }
  .image-container-login img{
    filter: 
    brightness(0) 
    saturate(100%) 
    invert(19%) 
    sepia(93%) 
    saturate(3210%) 
    hue-rotate(354deg) 
    brightness(87%) 
    contrast(93%);
  }

  .custom-background{
    background-image: linear-gradient(#d7192200,#d71921,#d71921,black);
    position: absolute;
    z-index:1;
    bottom: 0;
    opacity: 1;
    left: 0;
    height: 200vh;
    width: 100vw;
  }

  ion-input.custom {
    /* --background: #373737; */
    /* --color: #fff; */
    /* --placeholder-color: #ddd; */
    /* --placeholder-opacity: 0.8; */
    border-radius: 20px;
    border: 1px solid #000000;
    --padding-bottom: 0px;
    --padding-end: 10px;
    --padding-start: 10px;
    --padding-top: 0px;
  }

  ion-input.custom.ios .input-bottom .helper-text,
  ion-input.custom.ios .input-bottom .counter,
  ion-input.custom.md .input-bottom .helper-text,
  ion-input.custom.md .input-bottom .counter {
    color: var(--ion-color-primary);
  }
  ion-input.custom:hover{
    border: 2px solid #000000;
  }
</style>