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
            name: "Shopify",
            logo: require("../assets/shopify_glyph.svg")
          },
          {
            name: "Babylon.js",
            logo: require("../assets/babylon.png")
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
          },{
            name: "Bitbucket",
            logo: require("../assets/bitbucket.png")
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
        name: "Buy the Matching Sofa Promotion Tool",
        languages: ["JavaScript", "Liquid", "SCSS", "Shopify", "Figma", "JQuery"],
        description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
        "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/tarpit.png")
        
      },
      {
        name: "Tar Pit Park 3D Adventure",
        languages: ["Babylon.JS", "JavaScript", "SCSS", "Python", "MariaDB", "MySQL", "DBeaver"],
        description: "Explore a scene frozen in time and get a glimpse of the greatness of the Ice Age Megafauna at Tar Pit Park. As my final project at Innotech College, my skills were put to the test as I conceptualized, designed, researched and developed an interactive educational tool. I taught myself Babylon.js, a 3D game rendering engine javascript framework that allows the user to learn in a unique environment.",
        links: ["https://github.com/jacksonoviatt/tar_pit_park_front",
        "https://tarpitpark.ml/", "https://github.com/jacksonoviatt/tarpitpark_back"],
        image: require("../assets/tarpit.png")
        
      },
      {
        name: "Pizza By Any Other Name",
        languages: ["HTML5", "CSS3", "SASS"],
        description: "A mock website for an imaginary pizza restaurant, Pizza By Any Name. This project was created for an assignment at Innotech College, the objective was to practice and showcase my pure HTML and css abilities as well as challenge me to create an interesting UI/UX without using Javascript.",
        links: ["https://github.com/jacksonoviatt/pizzabyanyothername",
        "https://sweetpizzaheat.tk/"],
        image: require("../assets/pizza.png")
        
      },
      {
        name: "Tweeter",
        languages: ["Vue.js", "Python", "Flask", "MariaDB", "MySQL", "DBeaver"],
        description: "A twitter clone. The first objective was to interact with a CRUD API and overcome the challenges that come with building a component based webiste. The next objective was to build my own database to interact with and a CRUD API using Python/Flask that was then integrated with the existing front end.",
        links: ["https://github.com/jacksonoviatt/tweeter",
        "https://tweeterburb.ml/#/welcome", "https://github.com/jacksonoviatt/tweeter_back_end"],
        image: require("../assets/tweeter.png")
      },
      {
        name: "Radioactive Kaiju battle",
        languages: ["JavaScript", "JSCookies", "HTML5", "CSS3"],
        description: "A basic pokemon style battle game, created for a hackathon at Innotech College. This project was created under an extremely tight deadline. This was a lot of fun to style, and includes some eye-catching animations.",
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
