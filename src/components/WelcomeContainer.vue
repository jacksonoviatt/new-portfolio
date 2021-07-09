<template>
  <div id="welcome">
    <div class="hello">
      <h2>Hello! I'm Ramona</h2>
      <div class="helloImgs">
        <img src="../assets/duck.svg" alt="A cartoon cat" />

        <img src="../assets/export.png" alt="A cartoon ramona" />

        <img src="../assets/tuco.svg" alt="A cartoon dog" />
      </div>

      <welcome-text></welcome-text>
    </div>
  </div>
</template>

<script>
import WelcomeText from './WelcomeText.vue';
export default {
  components: { WelcomeText },
  name: "welcome-container",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 320px) {
  .helloImgs {
    :nth-child(2) {
      width: 70px;
      margin-bottom: 60px;
    }
    :nth-child(3) {
      transform: scaleX(-1);
    }
    width: 60%;
    img {
      width: 50px;
    }
  }
}

.hello {
  display: grid;
  place-items: center;
  margin-top: 90px;
}

h2,
h3 {
  font-weight: 300;
}
@media screen and (min-width: 320px) {
  .helloImgs {
    width: 70%;
    margin: 30px 0;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100px;
    :nth-child(2) {
      height: 100px;
      margin-bottom: 90px;
    }
    :nth-child(3) {
      transform: scaleX(-1);
      z-index: -1;
    }

    img {
      height: 70px;
    }
    .waves {
      display: none;
    }
  }
}
.helloImgs {

  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100px;
}
</style>