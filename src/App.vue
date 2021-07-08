<template>
  <div id="app">
<svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 140" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(176, 197, 219, 1)" offset="0%"></stop><stop stop-color="rgba(100, 140, 183, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,28L12,28C24,28,48,28,72,23.3C96,19,120,9,144,4.7C168,0,192,0,216,7C240,14,264,28,288,46.7C312,65,336,89,360,95.7C384,103,408,93,432,84C456,75,480,65,504,60.7C528,56,552,56,576,53.7C600,51,624,47,648,44.3C672,42,696,42,720,42C744,42,768,42,792,39.7C816,37,840,33,864,28C888,23,912,19,936,25.7C960,33,984,51,1008,49C1032,47,1056,23,1080,30.3C1104,37,1128,75,1152,81.7C1176,89,1200,65,1224,53.7C1248,42,1272,42,1296,44.3C1320,47,1344,51,1368,60.7C1392,70,1416,84,1440,93.3C1464,103,1488,107,1512,107.3C1536,107,1560,103,1584,88.7C1608,75,1632,51,1656,46.7C1680,42,1704,56,1716,63L1728,70L1728,140L1716,140C1704,140,1680,140,1656,140C1632,140,1608,140,1584,140C1560,140,1536,140,1512,140C1488,140,1464,140,1440,140C1416,140,1392,140,1368,140C1344,140,1320,140,1296,140C1272,140,1248,140,1224,140C1200,140,1176,140,1152,140C1128,140,1104,140,1080,140C1056,140,1032,140,1008,140C984,140,960,140,936,140C912,140,888,140,864,140C840,140,816,140,792,140C768,140,744,140,720,140C696,140,672,140,648,140C624,140,600,140,576,140C552,140,528,140,504,140C480,140,456,140,432,140C408,140,384,140,360,140C336,140,312,140,288,140C264,140,240,140,216,140C192,140,168,140,144,140C120,140,96,140,72,140C48,140,24,140,12,140L0,140Z"></path></svg>


<social-buttons></social-buttons>
   <mobile-menu></mobile-menu>
   <nav-menu></nav-menu>
    <welcome-container></welcome-container>

  </div>
</template>
<script>
import MobileMenu from './components/MobileMenu.vue';
import NavMenu from './components/NavMenu.vue';
import SocialButtons from './components/SocialButtons.vue';
import WelcomeContainer from "./components/WelcomeContainer.vue";

export default {
  components: { WelcomeContainer, SocialButtons, MobileMenu, NavMenu },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
svg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
@media screen and (min-width: 750){
  svg {
    height: 300px;
  }
}
</style>
