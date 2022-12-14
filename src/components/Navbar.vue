<template>
  <nav class="navbar">
    <div class="container">
      <div class="brand">
      <router-link to="/"><img src="/logo.png" alt="Jobify Logo"></router-link>
    </div>
    <ul class="links">
        <li><router-link to="/">Browse</router-link></li>
    </ul>

    <div class="profile" v-if="user && user.status === 'ok'">
      <UserMenu :type="user.seeker? 'jobSeeker':'company'" :user="user"/>
    </div>
    <div class="auth" v-else>
      <router-link to="/login"><Button variant="primary" :outlined="true">Log in</Button></router-link>
      <router-link to="/signup"><Button variant="primary">Sign Up</Button></router-link>
    </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import Button from './Button.vue';
import UserMenu from './UserMenu.vue';
import { computed } from '@vue/runtime-core';
export default {
  components: { Button, UserMenu },
  name: "NavBar",
  setup(){

    const store = useStore();
    const user = computed(() => store.state.user);

    console.log(user);
    return {
      user
    }
  }
};
</script>

<style scoped>
  .navbar{
    width: 97%;
    margin: 1.5rem auto;
    border-radius: 8px;
    box-shadow: 0 7px 15px rgba(87, 87, 87, 0.2);
    padding: 10px 20px;
  }
  .navbar .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 
  .brand{
    width: 96px;
  }
  .brand img{
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  ul{
    padding: 0;
    list-style-type: none;
    flex-grow: 20;
    text-align: left;
    margin-left: 2rem;
  }
  .navbar a {
    font-weight: bold;
    color: #2c3e50;
  }

.navbar a.router-link-exact-active {
  color: #42b983;
}
.auth{
  flex-grow: 2;
  display: flex;
  justify-content: space-evenly;
}
</style>