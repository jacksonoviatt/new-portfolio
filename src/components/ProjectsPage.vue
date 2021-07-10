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
h2 {
  margin-top: 90px;
}


</style>