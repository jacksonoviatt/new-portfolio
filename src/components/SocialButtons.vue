<template>
  <div>
    <p>social buttons</p>
    <img src="../assets/twitter-3-logo-svg-vector.svg" alt="" />
    <img src="../assets/twitter-3-logo-svg-vector.svg" alt="" />
    <img src="../assets/twitter-3-logo-svg-vector.svg" alt="" />
    <img src="../assets/twitter-3-logo-svg-vector.svg" alt="" />

    <!-- <img src="../assets/linked" alt="">
        <img src="../assets/twitter.jpeg" alt="">
        <img src="../assets/twitter.jpeg" alt=""> -->
  </div>
</template>

<script>
export default {
  name: "social-buttons",
};
</script>

<style lang="scss" scoped>
div {
    display: none;
}
@media screen and (min-width: 1000px) {
 div {
  width: 30px;
  display: grid;
  place-items: center;
  img {
    width: 100%;
  }
}
}

</style>