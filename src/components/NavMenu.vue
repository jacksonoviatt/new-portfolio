<template>
  <nav>
    <div>
      <a href="#">Welcome</a>
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
      <a href="#">Get in Touch</a>
      <span></span>
    </div>
    <div>
        <img src="../assets/ramonalogo.svg" alt="a cartoon logo of Ramona">
    </div>
  </nav>
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
nav {
  position: fixed;
  right: 10px;
  top: 10px;
  display: grid;
//   place-items: center;
  justify-items: center;
  grid-template-columns: 150px 150px 150px 150px 80px;
}
}
</style>