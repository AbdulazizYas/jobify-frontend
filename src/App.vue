<template>
  <Navbar />
  <br>
  <FileUploadVue name="Nasr" email="nasrm315@gmail.com"/>
  <!-- <ProfilePage Name="Mostafa Nasr" skills="nothing" UserName="nasrm" Email="s201950010@kfupm.edu.sa" education="Bachelors" experience="2 years"/> -->
  <!-- <skill skillName="communtication skills"/> -->
  <!-- <JobCard JobTitle="Software Enginner expert in web developing" CompanyName="Tesla" CompanyLocation="Californa, CA"/> -->
  <!-- <JobDescription JobTitle="Softwarehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh  Enginner" CompanyName="tesla" CompanyLocation="Californa CAjdj" Description="Somes one whjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjj o is good at english" applications="223"/> -->
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import JobDescription from './views/JobDescription.vue';
import JobCard from './components/JobCard.vue';
import skill from './components/skill.vue';
import ProfilePage from './views/ProfilePage.vue';
import FileUploadVue from './views/FileUpload.vue';

export default {
  name:"App",
  components: { Navbar, JobDescription, JobCard, skill, ProfilePage, FileUploadVue },
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
