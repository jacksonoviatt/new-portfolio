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
        <div class="links" v-if="links[2] == null">
          <a :href="links[1]" target="_blank">Go to site</a>
          <a :href="links[0]" target="_blank">View code</a>
        </div>
        <div class="linksb" v-if="links[2] != null">
          <div>
            <a :href="links[1]" target="_blank">Go to site</a>
            <a :href="links[0]" target="_blank">Front-end code</a>
          </div>
          <a :href="links[3]" target="_blank">Back-end code</a>
        </div>
      </div>
      <div class="desktopFormat">
        <div class="langDes">
          <div class="lang">
            <p v-for="string in languages" :key="string">
              {{ string }}
            </p>
          </div>
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
    languages: Array,
    description: String,
    links: Array,
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
  margin: 0 30px 20px;
  // margin-bottom: 20px;
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
    // width: 50vw;
    p {
      margin: 5px;
    }
  }
  .lang {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 8px;
  }
  .links {
    margin: 8px 0px;
    display: grid;
    place-items: center;

    grid-template-columns: 1fr 1fr;
    a {
      text-decoration: underline;
    }
    text-align: center;
  }
  .linksb {
    display: grid;
    place-items: center;
    margin: 8px 0px;
    grid-template-columns: 1fr;
    div {
      display: grid;
      place-items: center;

      grid-template-columns: 1fr 1fr;

      text-align: center;
    }
    a {
      text-decoration: underline;
    }
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