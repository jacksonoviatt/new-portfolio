<template>
  <section>
    <!-- <div class="title"> -->
      <h2>Projects</h2>
      <div class="line"></div>
      <project-carousel></project-carousel>
    <!-- </div> -->
  </section>
</template>

<script>
import ProjectCarousel from './ProjectCarousel.vue';
export default {
  name: "projects-page",
  components: {ProjectCarousel }
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  place-items: center;
}
.line {
  width: 150px;
  height: 2px;
  background: #EF8A9E;
  margin-bottom: 20px;
  margin-top: 2px;
}

</style>