<template>
  
  <div class="container">
    <p v-if="jobs.length === 0">No jobs</p>
    <div v-else>
      <JobCard v-for="job in jobs" :key="job.job_id" :job="job"/>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import JobCard from "../components/JobCard.vue"
export default {
  name:"JobsPage",
  components: {JobCard},
  setup(){

    const route = useRoute()
    let jobs = ref([]);
    const keyword = route.query.q || ''

    onMounted(async () => {
      if(keyword === ''){
        const response = await fetch("http://localhost:3000/jobs/")

        jobs.value = await response.json()
        console.log(jobs);
      } else {

      }
    })
    
    return {
      jobs
    }
  }
}
</script>

<style scoped>
.container > div{
  padding: 10px 20px;
}
.container{
  margin-bottom: 2rem;
}

</style>