import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectsArray: [
      {
        name: "Pizza By Any Other Name",
        languages: "HTML5, CSS3, SASS",
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities.",
        codeLink: "https://github.com/jacksonoviatt/pizzabyanyothername",
        liveLink: "https://sweetpizzaheat.tk/",
        image: require("../assets/pizza.png")
        
      },
      {
        name: "Tweeter",
        languages: "Vue.js",
        description: "A twitter clone. This project was created for an assignment at Innotech College, the objective was to interact with a CRUD api and to overcome the challenges that come with building a component based webiste. The current backend was provided by my instructor, but I will be creating my own version towards the end of the course.",
        codeLink: "https://github.com/jacksonoviatt/tweeter",
        liveLink: "https://tweeterburb.ml/#/welcome",
        image: require("../assets/tweeter.jpg")
      },
      {
        name: "Radioactive Kaiju battle",
        languages: "JavaScript, JSCookies, HTML5, CSS3",
        description: "A basic pokemon style battle game, created for a hackathon at Innotech College. This project showcases my ability to work with cookies. This project was a lot of fun to style, and includes some eye-catching animations.",
        codeLink: "https://github.com/jacksonoviatt/radioactiveKaijuBattle",
        liveLink: "https://radioactivekaijubattle.tk/",
        image: require('../assets/kaiju.png')
      },
      // {
      //   name: "Ramona's Portfolio",
      //   languages: "Vue.js",
      //   description: "Hey! You know about this site. A website to show off the work I am most proud of.",
      //   codeLink: "https://github.com/jacksonoviatt/portfolio",
      //   liveLink: "https://ramonaweb.ml/",
      //   image: require("../assets/portfolio.png")
      // }
      
    ]
  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
