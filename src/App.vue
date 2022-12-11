<template>
    <Navbar />
    <router-view/>
    <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name:"App",
  components: {Navbar, Footer}
}

</script>
<style>
*{
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #094067;
  overflow-x: hidden;
  height: 100vh;
}

.container{
  max-width: 1140px;
  margin: 0 auto;
}

</style>
