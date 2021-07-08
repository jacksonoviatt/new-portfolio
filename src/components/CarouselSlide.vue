<template>
  <div class="projectDiv">
    <h3 @click="check">{{ name }}</h3>
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
</template>

<script>

export default {
    name:
    "carousel-slide",
  data() {
    return {
      imgAlt: `a screen grab from ${this.name}`,
      imageSrc: this.image,
    };
  },
  methods: {
    check() {
      console.log(this.image);
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
// .langDes {
//   height: 200px;
// }
// h3 {
//   padding-top: 15px;
// }
// .projectDiv {
//   width: 300px;
//   height: 560px;
//   border: 2px solid #91a666;
//   display: grid;
//   place-items: center;
// }
// .projectImg {
//   width: 80%;
//   min-height: 136.83px;
//   margin: 10%;
//   margin-bottom: 15%;
//   box-shadow: #93b5c6 2px 2px 2px;
// }
// .links {
//   a {
//     color: #faa6b2;
//     font-weight: bold;
//   }
// }
// .line {
//   width: 100%;
//   height: 1px;
//   margin: 30px 0;
//   background: #91a666;
// }
// p {
//   font-size: 14px;
//   // height: 150px;
//   padding: 15px;
//   padding-top: 0;
//   text-align: center;
// }

</style>