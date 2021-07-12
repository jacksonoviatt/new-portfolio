<template>
  <div id="projectCarousel">
    <!-- <h1>CAROUSEL</h1> -->
    <div class="carousel" v-for="object in storeProjectArray" :key="object.string">
        <carousel-slide
            :name="object.name"
          :languages="object.languages"
          :description="object.description"
          :links="object.links"
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
 
}
.carousel {

  display: grid;

}

</style>