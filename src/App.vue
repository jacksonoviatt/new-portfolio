<template>
  <div id="app">
    <div id="mobileNav">
      <section id="fafaBars" @click="openMenu()" v-if="isMenuOpen === false">
        <div></div>
        <div></div>
        <div></div>
      </section>
     <header> <section id="mobileMenu">
        <section id="xBars" @click="closeMenu()">
          <div id="barOne"></div>
          <div id="barTwo"></div>
        </section>
        <nav>
          

            <a href="#">Welcome</a>
     
            <a href="#projects-page">Projects</a>

            <a href="#skills-page">My Skills</a>
      
            <a href="#contact-page">Contact</a>
          
          <div class="logoImg">
            <img src="./assets/ramonalogo.svg" alt="a cartoon logo of Ramona" />
          </div>
          
        </nav>
      </section></header>
    </div>
    <social-buttons></social-buttons>

    <welcome-container id="welcome-page"></welcome-container>
    <projects-page id="projects-page"></projects-page>
    <skills-page id="skills-page"></skills-page>
    <contact-page id="contact-page"></contact-page>
  <page-footer></page-footer>
  </div>
</template>
<script>
import ContactPage from './components/ContactPage.vue';
// import MobileMenu from "./components/MobileMenu.vue";

import PageFooter from './components/PageFooter.vue';
import ProjectsPage from "./components/ProjectsPage.vue";
import SkillsPage from "./components/SkillsPage.vue";
import SocialButtons from "./components/SocialButtons.vue";
import WelcomeContainer from "./components/WelcomeContainer.vue";


export default {
  components: {
    WelcomeContainer,
    SocialButtons,
    // MobileMenu,

    ProjectsPage,
    SkillsPage,
    ContactPage,
    PageFooter    

  },
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap");
* {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
svg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
h1,
h2,
h3 {
  font-weight: 300;
}
a {
  color: #476F9A;
}
.line {
  width: 150px;
  height: 2px;
  background: #b0c5db;
  margin-bottom: 20px;
  margin-top: 2px;
}
html {
  scroll-behavior: smooth;
}
header {
    background: #7599C0ee;
    position: fixed;
    right: 0px;
    top: 0px;
    display: grid;
    height: 50px;
    z-index: 5;
    width: 100%;
  }
@media screen and (min-width: 700px) {
  header {
    background: #7599C0ee;
    position: fixed;
    right: 0px;
    top: 0px;
    display: grid;
    height: 80px;
    z-index: 5;
    width: 100%;
  }
  nav {
    position: fixed;
    right: 0px;
    top: 0px;
    height: 80px;
    display: grid;
    padding: 10px;
    place-items: center;
    grid-template-columns: 150px 150px 150px 150px 80px;
    // width: 100%;
    div {
      right: 0px;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
      font-weight: 500;
    }

    img {
      height: 60px;
    }
  }
}

@media screen and (max-width: 700px) {
  #mobileNav {
    #fafaBars {
      position: fixed;
      top: 12px;
      right: 20px;
      // height: 100px;
      z-index: 6;
      display: grid;
      gap: 10px;
      div {
        // box-shadow: #3A5B7E22 1px 1px 1px, #3A5B7E22 -1px 1px 1px,
        //   #3A5B7E22 1px -1px 1px, #3A5B7E22 -1px -1px 1px;
        width: 25px;
        height: 2px;
        background: #ffffff;
      }
      
    }
    nav {
      display: grid;
      align-items: center;
      justify-items: left;
      gap: 15px;
    }
    #mobileMenu {
      
      .logoImg {
        display: grid;
        place-items: center;
        img {
          width: 40px;
          margin-bottom: 10px;
        }
      }
     
      padding: 30px 0px 10px;
      width: 100px;
      height: 200px;
      background: #b0c5db;
      position: fixed;
      right: 0;
      top: -300px;
      transition: 0.5s all ease;
      
      a {
        margin: 0px 20px;
        text-decoration: none;
        font-size: 14px;
        color: #ffffff;
      }
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

    display: grid;
    div {
      height: auto;
      // margin: 10px 00px;
      width: 100%;
      // }
      // div:hover {
      background: #b0c5db;
    }
  }
}
#skills-page {
  padding-top: 90px;
  display: grid;
  place-items: center;
}
</style>
