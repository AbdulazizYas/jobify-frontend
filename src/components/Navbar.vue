<template>
  <nav class="navbar">
    <div class="container">
      <div class="brand">
      <router-link to="/"><img src="/logo.png" alt="Jobify Logo"></router-link>
    </div>
    <ul class="links">
        <li><router-link to="/fdsf">Browse</router-link></li>
    </ul>

    <div class="auth">
      <Button variant="primary" :outlined="true">Log in</Button>
      <Button variant="primary">Sign Up</Button>
    </div>
    </div>
  </nav>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },
  name: "NavBar",
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