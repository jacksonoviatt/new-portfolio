<template>
  <div id="welcomeText">
   <h3>
      I’m a full stack web developer based out of Edmonton, Canada.
    </h3>
   <div id="paleo">
    <img src="../assets/smilodon.png" alt="a smilodon icon">
    <div></div>
    <img src="../assets/mammoth.png" alt="a mammoth icon">
  </div>
     <img
      id="dev"
      src="../assets/dev.png"
      alt="an icon of a desktop monitor with a browser"
    />
    
    <p id="par1">
      <img src="../assets/cat.png" alt="a line art cat on a blob" />

      I am always eager to learn more and engage with others as I expand my
      abilities. My dad is a web developer and raised me around code and tech,
      so I am thrilled to be joining him in the industry.
    </p>
    <div class="lineb"><div></div> <img id="tuco" src="../assets/tuco.svg" alt="a cartoon dog" /></div>
   
    <p id="par2">
      I love creating beautiful front-end work with a special eye towards
      aesthetic and visual design. I pride myself on the ability to fine-tune my
      work down to the last pixel and always try to exceed expectations.
    </p>
    <div class="lineb"><div></div><img id="duck" src="../assets/duck.svg" alt="a cartoon cat" /></div>
    
    <p id="par3">
      I am logically minded and I love diving into new situations, concepts, and
      projects with both feet. Creating a stable back-end is a cruical part of
      most web apps and using pattern based logic I am able to acheice this,
      by using my problem solving abilities to push through challenges that
      come up along the way.
    </p>
    <div class="lineb"><div></div></div>
    <img id="techpets" src="../assets/techpets.jpeg" alt="Duck and tuco, my pets, in front of a computer">
    <p id="par4">
      I currently live with my partner Harley, my rescue dog Tuco, and my
      one-eared cat Duck. When I am not developing, I can be found studying
      paleontology and natural history, or out foraging for edible plants and
      mushrooms in the woods.
    </p>
  <div id="forage">
    <img src="../assets/berries.png" alt="a berry logo">
    <div></div>
    <img src="../assets/mushroom.png" alt="">
  </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#forage {
  display: grid;
  grid-template-columns: 1fr 60vw 1fr;
  margin-top: -100px;
  img {
    width: 60px;
  }
  // position: absolute;
}
#paleo {
  display: grid;
  grid-template-columns: 1fr 60vw 1fr;
  margin-top: -300px;
  img {
    width: 60px;
  }
  // position: absolute;
}
#techpets {
  width: 50%;
  max-width: 500px;
  border: double #efefd2 15px;
  margin-top: 15px;
}
.lineb {
  height: 2px;
  width: 100%;
  margin: 10px 0;
  div {
    background: #efefd2;
    width: 80%;
    height: 2px;
  }
}
img {
  transition: 0.5s ease all;
}
#dev {
  width: 80%;
}
div {
  text-align: center;
  display: grid;
  place-items: center;
  // margin: 20px 15% 0;
  p,h3 {
    margin: 25px 0 25px;

    line-height: 25px;
    font-weight: 300;
  }

  #welcomeText {
    margin: 0 15%;
    // max-width: 00px;
  }
  #par4 {
    width: 50%;
  }
  #par3 {
    margin-right: 30%;

    right: 10vw;
  }

  #par2 {
    margin-left: 30%;
  }
}
#tuco {
  margin-top: 50px;
  width: 60px;
  margin-right: 55vw;
}
#duck {
  margin-top: 50px;
  width: 65px;
  margin-left: 55vw;
}
@media screen and (max-width: 400px) {
#tuco {
  margin-top: 50px;
  width: 60px;
  margin-right: 60vw;
}
#duck {
  margin-top: 70px;
  width: 65px;
  margin-left: 70vw;
}
#paleo {
  display: grid;
  grid-template-columns: 1fr 60vw 1fr;
  margin-top: -200px;
  img {
    width: 40px;
  }
}
}

@media screen and (min-width: 600px) {
  #dev {
    width: 60%;
  }
  #tuco,
  #duck {
    width: 90px;
    margin-top: 25px;
  }
  #par1 {
    width: 50%;
  }
  #forage {
    margin-top: -400px;
    img {
      width: 100px;
    }
  }
  #paleo  {
    img {
      width: 80px;
    }
  }
}
@media screen and (min-width: 800px) {
  #dev {
    width: 30%;
    max-width: 400px;
  }
  div {
    p {
      margin: 50px 0 50px;
      max-width: 600px;
      line-height: 25px;
      font-weight: 300;
    }
  }
}
@media screen and (min-width: 1000px) {
  #tuco,
  #duck {
    margin-top: 10px;
  }
}

#par1 {
  // margin-left: 10px;
  img {
    padding-right: 10px;
  }
}



</style>