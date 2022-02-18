<template>
  <div id="skillsPage">
    <h2>My Skills</h2>
    <div class="line"></div>
    <div id="skills" v-for="object in storeSkills" :key="object.id">
      <h2>{{ object.name }}</h2>
      <div class="skillType">
        <div v-for="object in object.tech" :key="object.id" class="skill">
          <div class="skillBox">
            <img class="skillLogo" :src="object.logo" :alt="object.name + ' Logo'" />
          </div>
          <p>{{ object.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills-page",
  computed: {
    storeSkills() {
      return this.$store.state.skills;
    },
  },
};
</script>

<style lang="scss" scoped>
#skillsPage {
  display: grid;
  place-items: center;
}
#skills {
  margin: 30px;
  width: 70%;
 
}
.skillBox {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
} 
 p {
    text-align: center;
    margin-top: 10px;
    // width: 60px;
    // height: 60px;
  }
.skillLogo {
  width: 100%;
}
.skillType {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  margin: 10px;
  padding: 20px 0px;
  box-shadow: #00000033 0px 20px 40px;
  
}

.skill {
  margin: 5px;
  display: grid;
  place-items: center;
  padding: 20px 0px;
  
}

@media screen and (min-width: 500px) {
  .skillType {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 800px) {
  #skills {
    margin: 30px;
    width: 60%;
  }
  .skillType {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>