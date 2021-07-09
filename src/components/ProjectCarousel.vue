<template>
  <div id="projectCarousel">
    <!-- <h1>CAROUSEL</h1> -->
    <div class="carousel" v-for="object in storeProjectArray" :key="object.string">
        <carousel-slide
            :name="object.name"
          :languages="object.languages"
          :description="object.description"
          :codeLink="object.codeLink"
          :liveLink="object.liveLink"
          :image="object.image"
        ></carousel-slide>
    </div>
    <div class="controls"></div>
  </div>
</template>

<script>
import CarouselSlide from './CarouselSlide.vue';
export default {
  name: "project-carousel",
  components: {
      CarouselSlide,
  },
  computed: {
    storeProjectArray() {
      return this.$store.state.projectsArray;
    },
  },
};
</script>

<style lang="scss" scoped>
#projectCarousel {
  display: grid;
  place-items: center;
  // grid-template-columns: 1fr 1fr 1fr;
  // white-space: nowrap;

}
.carousel {
  // place-items: center;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // width: 400px;
}
// @media screen and (min-width: 750px) {
//   #projectCarousel {
//   width: 300vw;
//   overflow-x: auto;
//   overflow-y: hidden;
//   grid-template-columns: 1fr 1fr 1fr;
  
//   }
// }
</style>