<template>
  <div>
    <p>
      <span class="desktopText"></span>
      I’m a full stack web developer based out of Edmonton, Canada.
    </p>
    <div class="blob" id="blob1">
      
     
      <!-- <img src="../assets/code.png" alt="code brackets icon" /> -->
    </div>
    <p id="par1">
      <img src="../assets/cat.png" alt="a line art cat on a blob" />

      I am always eager to learn more and engage with others as I expand my
      abilities. My dad is a web developer and raised me around code and tech,
      so I am thrilled to be joining him in the industry.
    </p>
    <img id="botanic" src="../assets/botanic.png" alt="a icon of a monstera plant">
    <p id="par2">
      I love creating beautiful front-end work with a special eye towards
      aesthetic and visual design. I pride myself on the ability to fine-tune my
      work down to the last pixel and always try to exceed expectations.
    </p>
    <img id="tuco" src="../assets/tuco.svg" alt="a cartoon dog">
    <p id="par3">
      I am logically minded and I love diving into new situations, concepts, and
      projects with both feet. Creating a stable back-end is a cruical part of
      most web apps and using pattern based logic I am able to acheice this,
      while using my problem solving abilities to push through challenges that
      come up along the way.
    </p>

    <p>
      I currently live with my partner Harley, my rescue dog Tuco, and my
      one-eared cat Duck. When I am not developing, I can be found studying
      paleontology and natural history, or out foraging for edible plants and
      mushrooms in the woods.
    </p>
     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#B0C5DB"
          d="M46.9,-17.3C53.4,4.9,46.3,29.5,28.3,43.7C10.2,58,-18.8,61.9,-36,49.4C-53.2,36.9,-58.7,8,-50.7,-16.1C-42.7,-40.2,-21.4,-59.6,-0.6,-59.4C20.2,-59.2,40.3,-39.4,46.9,-17.3Z"
          transform="translate(100 100)"
        />
      </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  display: grid;
  place-items: center;
  margin: 20px 15% 0;
  row-gap: 30px;

  :nth-child(3) {
    margin-right: 30%;
    margin-bottom: 40px;
    right: 10vw;
  }
  :nth-child(5) {
      margin-left: 30%;
        margin-bottom: 40px;
  }
  :nth-child(6) {
    width: 80px;
    position: absolute;
    top: 670px;
    // right: 10vw;
  }
  p {
    line-height: 25px;
    font-weight: 300;
  }
}
#botanic {
    position: absolute;
    right: 5vw;
    margin-top: 130px;
    z-index: -1;
}
@media screen and (max-width: 400px) {
    #botanic {
        width: 30vw;
    }
     #tuco {
        top: 800px;
    }
}

    @media screen and (max-width:500px) {
           #tuco {
        top: 800px;
        transition: 0.5s ease all;
    }
    }
//  #tuco  {
//        top: 750px;
//     }
@media screen and (min-width: 600px) {
    #botanic {
        width: 150px;
        margin-top: 80px;
    }
}
@media screen and (min-width: 800px) {
    #botanic {
       right: 15vw;
    }
    #tuco {
        top: 650px;
        width: 90px;
    }
}
@media screen and (min-width: 800px) {
#tuco {
        top: 580px;
        width: 90px;
    }
}
.blob {
  position: absolute;
  svg {
    z-index: -9;
  }
}
#blob1 {
  left: -120px;
//   :nth-child(2){
//       margin-top: 50px;
//       margin-left:70px;
//     z-index: -3;
//   }
top: 320px;
  :nth-child(2){
      margin-top: 80px;
      margin-left: 50px;
      transform: rotate(100deg) ;
  }
}
#par1 {
    // margin-left: 10px;
  img {
    padding-right: 10px;
  }
}
svg {
  width: 240px;
  position: inherit;
}

@media screen and (max-width: 900px) {
  .desktopText {
    display: none;
    width: 30px;
  }
}
@media screen and (min-width: 900px) {
  .desktopText {
    width: 50px;
    display: block;
  }
}
@media screen and (max-width: 400px) {
    #blob1 {
  left: -120px;
//   :nth-child(2){
//       margin-top: 50px;
//       margin-left:70px;
//     z-index: -3;
//   }
top: 320px;
width: 200px;
  :nth-child(2){
      margin-top: 80px;
      margin-left: 50px;
      transform: rotate(100deg) ;
  }
}
}
</style>