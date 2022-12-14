<template>
  <form @submit.prevent="handleSubmit">
    
    <h2>Post a Job</h2>

      <div class="form-input">
        <input v-model="data.jobName" required type="text" placeholder="Job title">
      </div>

      <div class="form-input">
        <textarea v-model="data.description" required rows="12" placeholder="Job Description"></textarea>
      </div>

      <div class="form-input">
        <input v-model="data.city" required type="text" placeholder="Job location (City)">
      </div>

      <div class="form-input">
        <p>Entry Level:</p>
        <input v-model="data.entryLevel" required type="radio" value="internship" id="intern">
        <label for="intern">Internship</label>
        <input v-model="data.entryLevel" required type="radio" value="junior" id="junior">
        <label for="junior">Junior</label>
        <input v-model="data.entryLevel" required type="radio" value="senior" id="senior">
        <label for="senior">Senior</label>
      </div>
      <div class="form-input">
        <p>Job Type:</p>
        <input v-model="data.jobType" required type="radio" value="remote" id="remote">
        <label for="remote">Remote</label>
        <input v-model="data.jobType" required type="radio" value="onsite" id="onsite">
        <label for="onsite">On site</label>
      </div>

      <div class="form-input">
        <p>Job Time:</p>
        <input v-model="data.jobTime" required type="radio" value="fulltime" id="fulltime">
        <label for="fulltime">Full time</label>
        <input v-model="data.jobTime" required type="radio" value="parttime" id="parttime">
        <label for="parttime">Part Time</label>
      </div>

      <Button type="submit" variant="primary">Post</Button>

    
  </form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import Button from "../components/Button.vue";
import { useRouter } from 'vue-router';
import {routeType} from "../utils";
import { useStore } from 'vuex';
import {uuid} from "vue-uuid";
import { computed } from '@vue/runtime-core';

export default {
  name: "PostJob",
  components: {Button},

  setup(){
    const data = reactive({
      jobName: '',
      city: '',
      jobType: '',
      entryLevel:'',
      jobTime: '',
      description: '',
      job_id: uuid.v4()
    });

    const store = useStore();

    const user = computed(() => store.state.user);

    const router = useRouter();
    const handleSubmit = async () => {
      const response = await fetch(`http://localhost:3000/jobs/${user.value.company.username}/create`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
      })

      const res = await response.json();

      if(res.status == "ok"){
        await router.push("/");
      }else{
        console.log(res.status);
      }

    }

    
    return {
      data,
      handleSubmit,
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

.form-input input[type="text"],
.form-input textarea{
    padding: 10px 15px;
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 2px solid #bedef6;
}
.form-input input:focus
.form-input textarea:focus{
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