<template>
  <div class="projectSlide">
    <div class="opener" @click="openSlide()">
      <h3>
        {{ name }}
        <img v-if="slideOpen === false" src="../assets/plus.png" alt="" /><img
          class="remove"
          v-if="slideOpen === true"
          src="../assets/remove.png"
          alt=""
        />
      </h3>
    </div>
    <div v-if="slideOpen === true" class="slideInfo">
      <div>
        <img class="projectImg" :src="imageSrc" :alt="imgAlt" />
        <!-- <div></div> -->
        <div class="links">
          <a :href="liveLink">Go to site</a> |
          <a :href="codeLink">View code</a>
        </div>
      </div>
      <div class="desktopFormat">
        <div class="langDes">
          <p>{{ languages }}</p>
          <p>{{ description }}</p>
        </div>
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
      slideOpen: false,
    };
  },
  methods: {
    check() {
      console.log(this.image);
    },
    openSlide() {
      this.slideOpen = !this.slideOpen;
    },
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
  font-weight: 300;
}
.remove {
  margin-left: 10px;
}
.projectSlide {
  display: grid;
  margin-bottom: 20px;
}
.desktopFormat {
  display: grid;
  place-items: center;
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
  box-shadow: #00000044 0px 15px 32px;
  padding: 10px;
  img {
    // box-shadow: grey 0px 4px 10px;
    margin-bottom: 10px;
    transition: 0.5s ease-in all;
    width: 60vw;
  }

  .langDes {
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
@media screen and (min-width: 900px) {
  .slideInfo {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
    // margin: 0 5vw;
    > div {
      padding: 30px;
      display: grid;
      place-items: center;
    }
    .langDes {
      width: 30vw;
    }
    img {
      box-shadow: grey 0px 4px 10px;
      margin-bottom: 10px;
      transition: 0.5s ease-in all;
      width: 30vw;
    }
  }
  h3 {
    font-size: 22px;
  }
}
</style>