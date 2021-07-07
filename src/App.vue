<template>
  <div id="app">
    <social-buttons></social-buttons>
    <welcome-container></welcome-container>

  </div>
</template>
<script>
import SocialButtons from './components/SocialButtons.vue';
import WelcomeContainer from "./components/WelcomeContainer.vue";

export default {
  components: { WelcomeContainer, SocialButtons },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
</style>
