<template>
  <div class="projectSlide">
    <div class="opener" @click="openSlide()">
      <h3 >{{ name }}  <img v-if="slideOpen === false" src="../assets/plus.png" alt=""><img class="remove" v-if="slideOpen === true" src="../assets/remove.png" alt=""></h3>
      
    </div>
    <div v-if="slideOpen === true" class="slideInfo">
      <img class="projectImg" :src="imageSrc" :alt="imgAlt" />
      <div class="links">
        <a :href="liveLink">Go to site</a> |
        <a :href="codeLink">View code</a>
      </div>
      <div class="line"></div>
      <div class="langDes">
        <p>{{ languages }}</p>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel-slide",
  data() {
    return {
      imgAlt: `a screen grab from ${this.name}`,
      imageSrc: this.image,
      slideOpen: false
    };
  },
  methods: {
    check() {
      console.log(this.image);
    },
    openSlide() {
      this.slideOpen = !this.slideOpen;
    }
  },
  props: {
    name: String,
    languages: String,
    description: String,
    codeLink: String,
    liveLink: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 200;
}
.remove {
  margin-left: 10px;
}
.projectSlide {
  display: grid;
  margin-bottom: 20px;
}

.opener {
  display: grid;
  place-items: center;
  img {
    width: 10px;
  }
  // grid-template-columns: 10fr 1fr;
  height: 40px;
}
.slideInfo {
  display: grid;
  place-items: center;
  img {
    box-shadow: grey 0px 4px 10px;
    margin-bottom: 10px;
    transition: 0.5s ease-in all;
  width: 60vw;
}
 
  .langDes
  {
    place-items: center;
    display: grid;
    margin: 8px 0px;
    width: 50vw;
    p {
      margin: 5px;
    }
  }
  .links {
    margin: 8px 0px;
  }
}

</style>