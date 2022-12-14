<template>
  <form @submit.prevent="handleSubmit">
    <h2>Create your account</h2>
    <div class="form-input">
      <input v-model="data.fname" required type="text" placeholder="First Name ...">
    </div>

    <div class="form-input">
      <input v-model="data.lname" required type="text" placeholder="Last Name ...">
    </div>

    <div class="form-input">
      <input v-model="data.username" :class="{error: errors.username.length != 0}" required type="text" placeholder="Username">
      <div v-if="errors.username.length != 0" class="errors">
        <p class="error" v-for="error in errors.username" :key="error">{{error}}</p>
      </div>
    </div>

    <div class="form-input">
      <input v-model="data.email" required type="email" placeholder="Email ... ">
    </div>

    <div class="form-input">
      <input v-model="data.password" required type="password" placeholder="Password ...">
    </div>

    <div class="form-input">
      <input :class="{error: errors.passConf.length != 0}" v-model="data.passConf" required type="password" placeholder="Confirm your password ...">
      <div v-if="errors.passConf.length != 0" class="errors">
        <p class="error" v-for="error in errors.passConf" :key="error">{{error}}</p>
      </div>
    </div>

    <h5>Choose your type account:</h5>
    <div class="type">
      <Button type="button" variant="primary"
              :outlined="type != 'company' || type == ''"
              :onClick="companyClick">Company</Button>
      <Button type="button" variant="primary"
              :outlined="type != 'jobSeeker' || type == ''"
              :onClick="jobSeekerClick">Job Seeker</Button>
    </div>

    <hr v-if="type != ''"/>
    <div class="company-data" v-if="type == 'company'">
      <div class="form-input">
        <input v-model="data.companyData.name" required type="text" placeholder="Company name ...">
      </div>

      <div class="form-input">
        <input v-model="data.companyData.regID" required type="text" placeholder="Company registration ID ...">
      </div>

      <div class="form-input">
        <input v-model="data.companyData.country" type="text" required placeholder="Country ...">
      </div>

      <div class="form-input">
        <input v-model="data.companyData.city" type="text" required placeholder="City ...">
      </div>

      <div class="form-input">
        <input v-model="data.companyData.address" type="text" required placeholder="Address ...">
      </div>

    </div>
    <div class="job-data" v-if="type == 'jobSeeker'">

      <div class="form-input">
        <label for="skills">Your Skills</label>
        <input v-model="data.jobSeekerData.skills" type="text" id="skills" placeholder="seperate your skills by comma (,)">
      </div>

      <div class="form-input">
        <label for="experiences">Your experiences</label>
        <input v-model="data.jobSeekerData.exps" type="text" id="experiences" placeholder="seperate your experiences by comma (,)">
      </div>

      <div class="form-input">
        <label for="education">Your education</label>
        <input v-model="data.jobSeekerData.education" type="text" id="education" placeholder="seperate your education degrees by comma (,)">
      </div>
     
    </div>

    <Button type="submit" variant="primary" v-if="type != ''">Create an account</Button>
  </form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import Button from "../components/Button.vue";
import { useRouter } from 'vue-router';

export default {
  name: "SignUpPage",
  components: {Button},

  setup(){

    const router = useRouter();
    const routeType = {
      "jobSeeker": "seekers",
      "company": "companies"
    };
    const type = ref("");
    const errors = reactive({
      passConf: [],
      username: [],
    });
    const data = reactive({
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      passConf: '',
      type: type.value,
      jobSeekerData: {
        skills: '',
        exps: '',
        education: ''
      },
      companyData: {
        name: '',
        regID: '',
        country: '',
        city: '',
        address: '',
      }
    })

    const companyClick = () =>{
      type.value = "company";
    }

    const jobSeekerClick = () =>{
      type.value = "jobSeeker";
    }

    const validateForm = async () => {
      if (data.password !== data.passConf){
        errors.passConf.push("The Passwords are not identical!")
        return false;
      }

      const res = await fetch(`http://localhost:3000/${routeType[type.value]}/${data.username}/check`);
      const result = await res.json();

      if(result.exist){
        errors.username.push("The username is taken");
        return false;
      }else{
        return true;
      }
    }
    const handleSubmit = async () =>{
      
      // validate the form before submitting
      const isValid = await validateForm();
      if (!isValid){
        console.log("not valid");
        return;
      }

      
      let userData = {}
      
      // fill the userData based on the type
      if (type.value === "company"){
        userData = {
          first_name: data.fname, 
          last_name: data.lname, 
          email: data.email, 
          username: data.username,
          password: data.password, 
          company_name: data.companyData.name, 
          registration_id: data.companyData.regID, 
          country: data.companyData.country, 
          city: data.companyData.city, 
          address: data.companyData.address,
        }
      }else if (type.value === "jobSeeker"){
        userData = {
          first_name: data.fname, 
          last_name: data.lname, 
          email: data.email, 
          username: data.username,
          password: data.password, 
          skills: data.jobSeekerData.skills, 
          experiences: data.jobSeekerData.exps, 
          education: data.jobSeekerData.education,
        }

      }else{
        return;
      }
    
      const response = await fetch(`http://localhost:3000/${routeType[type.value]}/create`,{
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(userData)
        });

        const res = await response.json();

        if (res.status === "ok"){
          console.log(res.data);
          router.push("/login");
        } else{
          console.log(res.status);
          
        }
    }
    return {
      type,
      data,
      errors,
      companyClick,
      jobSeekerClick,
      handleSubmit
    }
  }
}
</script>

<style scoped>
form{
  width: 50%;
    padding: 2rem 1rem;
    margin: 2rem auto;
    border-radius: 20px;
    box-shadow: 0 15px 16px #3b4c5d11;
    border: 4px solid #bedef6;
}
.form-input{
      margin: 2rem 0;
}
.form-input label{
  display: block;
    text-align: left;
    margin-bottom: .5rem;
    font-weight: bold;
    font-size: .9em;
    color: #3da9fc;
}
.form-input input{
      padding: 10px 15px;
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 2px solid #bedef6;
}
.form-input input:focus{
    outline: none;
}
.type{
  display: flex;
    justify-content: space-evenly;
    gap: 10px;
    margin-bottom: 1rem;
}
.type .button{
  width: 100%;
}
hr{
  height: 3px;
    background-color: #bedef6;
    border: none;
    border-radius: 20px;
    margin: 2rem 1rem;
}
.error{
      font-size: .8em;
    text-align: left;
    color: #ef4565;
    font-weight: bold;
}
input.error{
  border-color: #ef4565;
}
</style>