<template>
  <ion-app v-if="!start" class="overflow-hidden">
    <!-- <ion-content 
      class="transition"
      :fullscreen="true"
    > -->
      <div v-show="!log" @click="enterAuth()" style="z-index:200;" class="full-size hidden-div"></div>
        <div :class="' custom-background transition ' + (!log? '' : 'remove-height')"></div>
      <div  class="full-size mobile  overflow-hidden position-relative ">
        <transition name="image-up" mode="out-in">
          <div v-show="logo" :class="'image-container transition ' + (!log? '':'image-container-login')">
            <img  src="../public/images/logo_white.png" alt="My Image"></img>
          </div>
        </transition>
        <br><br><br>
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
              mode="md"
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
              mode="md"
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
              <ion-button v-show="input3" expand="block" @click="logIn()">login</ion-button>
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
    <ion-menu content-id="main-content" type="push" >
      
      <!-- <ion-content > -->
        <ion-list lines="none">
          <div class="profile-container" > 
            <div class="profile"  >
              <img alt="Silhouette of a person's head" src="../public/images/jecoy.jpg" />
            </div>
            <div @click="goToDashboard()" class="d-flex align-center" style="padding-left: 20px;">
                <div class="crown">
                    <img src="../../public/images/crown.svg" alt="">
                </div>
                <p style="padding: 0 30px;">0 Points</p>
                <ion-icon
                    color="primary"
                    slot="end" 
                    :icon="chevronForwardOutline"
                    aria-hidden="true"
                > </ion-icon>
            </div>
          </div >
          <div>
            <h2 class="ion-padding-start ">
              <strong>
                Jerico B. Bencito
              </strong>
            </h2>
            <p class="ion-padding-start ion-padding-bottom ">+63 916 207 9999</p>
          </div>
          <ion-menu-toggle auto-hide="true">
            <ion-item  
              v-for="(item,index) in routes[0].children" 
              :key="index"
              @click="navigate(item.path)"
            >
            <ion-icon aria-hidden="true" :icon="eye" slot="start"></ion-icon>
              <p >{{ item.name }}</p>
            <ion-note  slot="end">
              <div v-if="item.notif != 0" class="notif">
                <p>
                  {{ item.notif }}
                </p>
              </div>
            </ion-note>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      <!-- </ion-content> -->
    </ion-menu>

    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script setup>
  import { 
    IonApp, 
    IonPage,
    IonRouterOutlet,
    IonMenu,
    IonMenuToggle,
    IonContent,
    IonAvatar,
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
    IonNote,
    IonIcon,
    menuController 
  } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import {ref,onMounted} from 'vue'
  import { eye, lockClosed, personCircle,chevronForwardOutline } from 'ionicons/icons';
  const router = useRouter()
  const routes = router.options.routes
  let start = ref(false) // false
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
        }, 300);
      }, 500);
  }

  function logIn(){
    input4.value = false
    setTimeout(() => {
      input3.value = false
      setTimeout(() => {
        input2.value = false
        setTimeout(() => {
          input1.value = false
            setTimeout(() => {
              welcome.value = false
              setTimeout(() => {
                bonjour.value = false
                setTimeout(() => {
                  logo.value = false
                  setTimeout(() => {
                    start.value = true
                  }, 700);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
    
  }
  function navigate(item){
    router.push(item);
  }
  async function  goToDashboard(){
    router.push('/dashboard')
    await menuController.close()
  }
  onMounted(() => {
    setTimeout(() => {
      logo.value = true
    }, 500);
})
</script>
<style scope>
  .profile-container{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 15px;
  }
  .profile{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
  }
  .profile img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .notif{
    background-color: var(--ion-color-warning);
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #f4f4f4;
    border-radius: 50%;
    justify-content: center;
    width: 20px;
    height: 20px;
  }
  .notif p{
    margin-right:1px ;
    margin-top: 2px;
  }
  .full-size {
    height: 100vh;
    width: 100vw;
  }
  .hidden-div{
    position: absolute;

    top: 0;
    left: 0
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
    left: 17%!important;
    top: 13%!important;
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
    background-image: linear-gradient(#d7192200,#d71921,rgb(51, 1, 1));
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
  .input-fill-outline.sc-ion-input-md-h{
    --border-radius: 15px!important;
  }
  .mobile{
    max-width: 500px;
    margin: auto;
  }
</style>