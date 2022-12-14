<template>
    <Navbar />
    <main>
      <router-view/>
    </main>
    <Footer />
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import {useStore} from "vuex";

export default {
  name:"App",
  components: {Navbar, Footer},
  setup(){

    const store = useStore();

    try{
      onMounted(async () => {
      const response = await fetch("http://localhost:3000/user",{
        headers:{'Content-Type': 'application/json'},
        credentials: 'include'
      }).catch(err => console.log(err));

      const user = await response.json()

      store.dispatch("user",user)
      
    });
    } catch (e) {
      
      store.dispatch("user",null)
    }

  }
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
