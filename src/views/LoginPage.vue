<template>
  <form @submit.prevent="handleSubmit">
    <h4 v-if="errorMsg" class="error">{{errorMsg}}</h4>
    <h2>Log In as:</h2>
    <div class="type">
      <Button type="button" variant="primary"
              :outlined="type != 'company' || type == ''"
              :onClick="companyClick">Company</Button>
      <Button type="button" variant="primary"
              :outlined="type != 'jobSeeker' || type == ''"
              :onClick="jobSeekerClick">Job Seeker</Button>
    </div>
    <div v-if="type !== ''">
      <div class="form-input">
        <input v-model="data.username" required type="text" placeholder="Username">
      </div>

      <div class="form-input">
        <input v-model="data.password" required type="password" placeholder="Password">
      </div>

      <Button type="submit" variant="primary">Log in</Button>
    </div>

    
  </form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import Button from "../components/Button.vue";
import { useRouter } from 'vue-router';
import {routeType} from "../utils";

export default {
  name: "LoginPage",
  components: {Button},

  setup(){
    const data = reactive({
      username: '',
      password: ''
    });

    const errorMsg = ref("");
    const type = ref("");
    const router = useRouter();

    const companyClick = () =>{
      type.value = "company";
    }

    const jobSeekerClick = () =>{
      type.value = "jobSeeker";
    }

    const handleSubmit = async () => {
      const response = await fetch(`http://localhost:3000/${routeType[type.value]}/login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify(data)
      })

      const res = await response.json();

      if(res.status == "ok"){
        await router.push("/");
      }else{
        console.log(res.status);
        errorMsg.value = res.status;
      }

    }

    
    return {
      data,
      type,
      errorMsg,
      handleSubmit,
      companyClick,
      jobSeekerClick
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
/* .error{
      font-size: .8em;
    text-align: left;
    color: #ef4565;
    font-weight: bold;
}
input.error{
  border-color: #ef4565;
} */

.error {
      border-radius: .75rem;
    color: #ef4565;
    background-color: #ef456555;
    padding: 22px;
    border: 2px solid;
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
</style>