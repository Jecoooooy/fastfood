System.register(["./keyboard-legacy-CwteNL8L.js","./index-legacy-BV1BlgRY.js"],(function(e,t){"use strict";var i;return{setters:[e=>{i=e.K},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
const t=e("KEYBOARD_DID_OPEN","ionKeyboardDidShow"),s=e("KEYBOARD_DID_CLOSE","ionKeyboardDidHide");let o={},a={},r=!1;e("resetKeyboardAssist",(()=>{o={},a={},r=!1})),e("startKeyboardAssist",(e=>{if(i.getEngine())n(e);else{if(!e.visualViewport)return;a=f(e.visualViewport),e.visualViewport.onresize=()=>{u(e),g()||c(e)?d(e):p(e)&&h(e)}}}));const n=e=>{e.addEventListener("keyboardDidShow",(t=>d(e,t))),e.addEventListener("keyboardDidHide",(()=>h(e)))},d=e("setKeyboardOpen",((e,t)=>{y(e,t),r=!0})),h=e("setKeyboardClose",(e=>{l(e),r=!1})),g=e("keyboardDidOpen",(()=>{const e=(o.height-a.height)*a.scale;return!r&&o.width===a.width&&e>150})),c=e("keyboardDidResize",(e=>r&&!p(e))),p=e("keyboardDidClose",(e=>r&&a.height===e.innerHeight)),y=(e,i)=>{const s=i?i.keyboardHeight:e.innerHeight-a.height,o=new CustomEvent(t,{detail:{keyboardHeight:s}});e.dispatchEvent(o)},l=e=>{const t=new CustomEvent(s);e.dispatchEvent(t)},u=e("trackViewportChanges",(e=>{o=Object.assign({},a),a=f(e.visualViewport)})),f=e("copyVisualViewport",(e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})))}}}));
