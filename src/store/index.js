import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skills: [
      {
        name: "Front End",
        tech: [
          {
            name: "Javascript",
            logo: require("../assets/javascript.png")
          },
          {
            name: "Vue.js",
            logo: require("../assets/vue.svg")
          },
          {
            name: "HTML5",
            logo: require("../assets/html5.png")
          },
          {
            name: "CSS3",
            logo: require("../assets/css3.png")
          },
          {
            name: "SASS",
            logo: require("../assets/sass.png")
          },
          {
            name: "AJAX",
            logo: require("../assets/ajax.png")
          }
        ]
      },
      {
        name: "Back End",
        tech: [
          {
            name: "Python",
            logo: require("../assets/python.png")
          },
          {
            name: "Flask",
            logo: require("../assets/flask.png")
          },
          {
            name: "MySQL",
            logo: require("../assets/mysql.png")
          },
          {
            name: "DBeaver",
            logo: require("../assets/dbeaver.png")
          },
          {
            name: "MariaDB",
            logo: require("../assets/mariadb.png")
          },
          {
            name: "SQL",
            logo: require("../assets/SQL.png")
          },
          {
            name: "API",
            logo: require("../assets/api.jpg")
          },
        ]
      },
      {
        name: "Other Tools",
        tech: [
          {
            name: "Figma",
            logo: require("../assets/figma.svg")
          },
          {
            name: "NPM",
            logo: require("../assets/npm.png")
          },
          {
            name: "Google Cloud Platform",
            logo: require("../assets/googleCloud.png")
          },
          {
            name: "JSON",
            logo: require("../assets/json.gif")
          },
          {
            name: "GitHub",
            logo: require("../assets/github.png")
          },
          {
            name: "Linux",
            logo: require("../assets/linux.jpg")
          },
          {
            name: "Bash/CLI",
            logo: require("../assets/bash.png")
          },
          {
            name: "Visual Studio Code",
            logo: require("../assets/vscode.png")
          }
        ]
      },
    ],
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
