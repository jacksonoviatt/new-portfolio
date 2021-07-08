<template>
  <div id="socialButtons">
    <!-- <div class="socialButton" @click="showLink('twitter')">
      
    </div> --> 
    <div class="socialButton">
      <a
        href="https://docs.google.com/document/d/1dc7_Jw78AP2YTyyirLJsgrKveBM4BeONyKJmgt8TxEw/edit"
        target="_blank"><img src="../assets/file.png" alt="Resume Logo"
      /></a>
    </div>
    <div class="socialButton">
      <a href="https://twitter.com/OviattRamona" target="_blank"
        ><img src="../assets/twitterlogo.svg" alt="Twitter Logo" id="twitter" />
      </a>
    </div>
   
    <div class="socialButton">
      <a href="https://www.linkedin.com/in/ramona-oviatt/"
        target="_blank"><img src="../assets/LI-In-Bug.png" alt="LinkedIn Logo"
      /></a>
    </div>

    <div class="socialButton">
      <a href="https://github.com/jacksonoviatt" target="_blank">
        <img src="../assets/github.png" alt="github logo"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "social-buttons",
  methods: {
    showLink() {},
  },
};
</script>

<style lang="scss" scoped>
// div {
//     display: none;
// }
// @media screen and (min-width: 1000px) {
#socialButtons {
  position: fixed;
  top: 30px;
  left: 10px;
  width: 30px;
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: left;
  column-gap: 0;
  :nth-child(3) {
    margin-left: 2px;
    width: 32px;
  }
  // :nth-child(2) {
  //   margin-left: -20px;
  // }
  // .socialLink {
  //   position: ;
  // }
  img {
    width: 30px;
    // background: ;
  }
  .socialLink {
    z-index: -1;
    background: #648cb7;
    width: 90px;
    display: grid;
    align-items: center;
    justify-items: right;
    margin-left: -15px;

    a {
      color: #ffffff;
      margin-right: 5px;
      // text-decoration: none;
      padding: 2px;
    }
  }
  // .socialButton {
  //   box-shadow: red 2px 2px 2px;
  // }
}
// }
</style>