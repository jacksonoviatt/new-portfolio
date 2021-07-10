<template>
  <section>
    <h2>Contact me</h2>
    <div class="line"></div>
    <img class="dog" src="../assets/dog.jpg" alt="Ramona and their dog">
    <p class="contactMessage">
        I would love to get in touch with you to discuss business or just to be
        friendly.
      </p>
      <div class="line"></div>
    <div class="contactInfo">
      <p>Send me an email</p>
      <p>
        <a href="mailto:ramonaoviatt@gmail.com" target="_blank">
          ramonaoviatt@gmail.com</a
        >
      </p>
      <a href="mailto:ramonaoviatt@gmail.com" target="_blank"> <img src="../assets/email.png" alt="email logo" /></a
      >
      <div class="line"></div>
      <p>
        Connect with me on<a
          href="https://www.linkedin.com/in/ramona-oviatt/"
          target="_blank"
        >
          LinkedIn</a
        >
      </p>
      <a href="https://www.linkedin.com/in/ramona-oviatt/" target="_blank"
        ><img src="../assets/LI-In-Bug.png" alt="LinkedIn Logo"
      /></a>
      <div class="line"></div>
      <p>
        You can find me on<a
          href="https://twitter.com/OviattRamona"
          target="_blank"
        >
          Twitter</a
        >
      </p>
      
      <a href="https://twitter.com/OviattRamona" target="_blank"
        ><img src="../assets/twitterlogo.svg" alt="Twitter Logo" id="twitter" />
      </a>
      <div class="line"></div>
      <p>
        Need to know more? View my Resume
        <a
          href="https://docs.google.com/document/d/1dc7_Jw78AP2YTyyirLJsgrKveBM4BeONyKJmgt8TxEw/edit"
          target="_blank"
        ></a>
      </p>
      <a
        href="https://docs.google.com/document/d/1dc7_Jw78AP2YTyyirLJsgrKveBM4BeONyKJmgt8TxEw/edit"
        target="_blank"
        ><img src="../assets/file.png" alt="Resume Logo"
      /></a>
      <div class="line"></div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: "contact-page",
};
</script>

<style lang="scss" scoped>
section {
    
  display: grid;
  place-items: center;
}
.contactInfo {
    display: grid;
    place-items: center;
    margin: 20px;
    gap: 10px;
}
.contactMessage{
        font-size: 18px;
        margin: 10px;
    }
img {
  width: 50px;
}
a {
  text-decoration: none;
}
.dog {
    width: 150px;
    border-radius: 50%;
}
h2 {
    margin-top: 90px;
}
</style>