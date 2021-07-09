<template>
  <div id="mobileNav">
    <section id="fafaBars" @click="openMenu()" v-if="isMenuOpen === false">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section id="mobileMenu">
      <section id="xBars" @click="closeMenu()">
        <div id="barOne"></div>
        <div id="barTwo"></div>
      </section>
      <nav>
        <div>
          <a href="#">Welcome</a>
        </div>
        <div>
          <a href="#">Projects</a>
        </div>
        <div>
          <a href="#">Skills</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      document.getElementById("mobileMenu").style.top = "0px";
      this.isMenuOpen = true;
    },
    faFaBars() {
      this.isMenuOpen = false;
    },
    closeMenu() {
      document.getElementById("mobileMenu").style.top = "-300px";
      setTimeout(this.faFaBars, 400);
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 900px) {
   div {
    background: red;
    display: none;
  }
}
@media screen and (max-width: 900px) {

  #fafaBars {
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 6;
    display: grid;
    gap: 10px;
    div {
      box-shadow: #3A5B7E 1px 1px 1px, #3A5B7E -1px 1px 1px,
        #3A5B7E 1px -1px 1px, #3A5B7E -1px -1px 1px;
      width: 25px;
      height: 2px;
      background: #ffffffcc;
    }
  }
    #mobileMenu {
      padding: 25px 0px;
      width: 90px;
      height: auto;
      background: #b0c5db;
      position: fixed;
      right: 0;
      top: -300px;
      transition: 0.5s all ease;
      //   text-align: right;
    }
    #xBars {
      display: grid;
      place-items: center;

      div {
        width: 20px;
        height: 2px;
        background: #ffffffcc;
        position: absolute;
        top: 15px;
        right: 65px;
        //   box-shadow: #B0C5DB 2px 2px 2px;
      }
      #barOne {
        transform: rotate(135deg);
      }
      #barTwo {
        transform: rotate(45deg);

        // margin-bottom: -20px;
      }
    }

    nav {
      display: grid;
      div {
        height: auto;
        margin: 10px 00px;
        width: 100%;
        // }
        // div:hover {
        background: #b0c5db;
      }
      a {
        margin: 0px 20px;
        text-decoration: none;
        font-size: 12px;
        color: #ffffff;
      }
    }
  
}
</style>