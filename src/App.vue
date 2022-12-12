<template>
  <Navbar />
  <br>
  <!-- <JobCard JobTitle="Software Enginner expert in web developing" CompanyName="Tesla" CompanyLocation="Californa, CA"/> -->
  <JobDescription JobTitle="Software Enginner" CompanyName="Tesla" CompanyLocation="Californa CAjdjdjdjjd" Description="Some one who is good at english"/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import JobDescription from './views/JobDescription.vue';
import JobCard from './components/JobCard.vue';

export default {
  name:"App",
  components: { Navbar, JobDescription, JobCard },
}

</script>
<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
