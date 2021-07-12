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
            logo: require("../assets/api.png")
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
        languages: ["HTML5", "CSS3", "SASS"],
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities.",
        links: ["https://github.com/jacksonoviatt/pizzabyanyothername",
        "https://sweetpizzaheat.tk/"],
        image: require("../assets/pizza.png")
        
      },
      {
        name: "Tweeter",
        languages: ["Vue.js", "Python", "Flask", "MariaDB", "MySQL", "DBeaver"],
        description: "A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that I then integrated with the existing front end.",
        links: ["https://github.com/jacksonoviatt/tweeter",
        "https://tweeterburb.ml/#/welcome", "https://github.com/jacksonoviatt/tweeter_back_end"],
        image: require("../assets/tweeter.jpg")
      },
      {
        name: "Radioactive Kaiju battle",
        languages: ["JavaScript", "JSCookies", "HTML5", "CSS3"],
        description: "A basic pokemon style battle game, created for a hackathon at Innotech College. This project showcases my ability to work with cookies. This project was a lot of fun to style, and includes some eye-catching animations.",
        links: ["https://github.com/jacksonoviatt/radioactiveKaijuBattle",
        "https://radioactivekaijubattle.tk/"],
        image: require('../assets/kaiju.png')
      },
      // {
      //   name: "Ramona's Portfolio",
      //   languages: ["Vue.js"],
      //   description: "Hey! You know about this site. A website to show off the work I am most proud of.",
      //   links: ["https://github.com/jacksonoviatt/portfolio",
      //    "https://ramonaweb.ml/"],
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
