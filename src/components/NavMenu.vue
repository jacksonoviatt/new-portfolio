<template>
  <!-- <nav>
    <header>
      
    </header>
    <div>
      <a>">Welcome</a>
      <span></span>
    </div>
    <div>
      <a href="#">Projects</a>
      <span></span>
    </div>
    <div>
      <a href="#">My Skills</a>
      <span></span>
    </div>
    <div>
      <a href="#">Contact</a>
      <span></span>
    </div>
    <div>
        <img src="../assets/ramonalogo.svg" alt="a cartoon logo of Ramona">
    </div>
  </nav> -->
  <div></div>
</template>

<script>
export default {
  name: "nav-menu",
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  nav {
    display: none;
  }
}
@media screen and (min-width: 900px) {
  header {
    background: #b0c5dbaa;
    position: fixed;
    right: 0px;
    top: 0px;
    display: grid;
    height: 80px;
    z-index: -5;
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
  }
  img {
    height: 60px;
  }
}
</style>