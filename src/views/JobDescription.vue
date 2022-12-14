<template>
    <div class="JobDescription">    
        <section Class="JobTitle" >
                <h1>{{ job.jobName }}</h1>
        </section>

        <div Class="Card">
            <div Class="Contianer">
                <section Class="CampanyInfo">
                    <div Class="ImageContainer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpYGaiGtp75bXVS3xBWYNVVscBMDplo9JbfX8Qj0h&s" alt="An image of the company">
                    </div>
                    <div Class="CampanyInfoText">
                        <h3>{{ job.company.company_name}}</h3>
                        <h4>{{ job.company.city }}</h4>
                    </div>
                </section>
            </div>
        </div>

        <section Class="JobInfo">
            <h2>Job Description:</h2>
            <div>
                <p style="margin-bottom: 2rem">{{job.description}}</p>
                <p>Entry Level: {{job.entryLevel}}</p>    
                <p>Job Time: {{job.jobTime}}</p>    
                <p>Job Type: {{job.jobType}}</p>        
            </div>        

        </section>
        <section class="section">
            <div class="buttonContainer">
                <button class="ApplyButton">
                    <span>Apply</span>
                </button>
                <h4>{{applicants || 0}} Aplied for his job</h4>
            </div>
        </section>
    </div>
</template>
  
<script>
import { onMounted, ref, watchEffect } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
export default {
name: "JobDescription",
setup(){

    const route = useRoute()
    let job = ref({});
    let applicants = ref([]);

    const job_id = route.params.job_id;
    console.log(job_id);

    watchEffect(async () => {
        console.log("dfsssssssssssss");
        const response = await fetch("http://localhost:3000/jobs/"+job_id)

        job.value = await response.json()
        console.log(job);

        const applicants_res = await fetch("http://localhost:3000/jobs/"+job_id + "/applicants");

        applicants.value = await applicants_res.json();

 
    })


    return {
        job
    }
}



        };
</script>

<style scoped>
    button:hover{
        transition: all 0.8s ease;
        background:  #094067;
        border-radius: 15px;
        padding: 5px 15px;
        margin: 15px auto;
        cursor: pointer;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
    }
    .JobDescription{
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .JobTitle, .CampanyInfo, .JobInfo{
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
        background: #D8EEFE;
        border-radius: 20px;
        width: 95%;
        padding: 5px 16px;
        margin: 15px auto;
        white-space: pre-wrap;
    }
    h1, h2, h3, h4, p{
        font-style: normal;
        font-weight: 700;
        color: #094067;
    }
    h1{
        font-size: 29.29px;
        line-height: 35px;
    }
    h2 {
        font-size: 22px;
        line-height: 26px;
    }
    h3 {
        font-size: 16.5px;
        line-height: 20px;
    }
    h4 {
        font-size: 12.38px;
        color: #5F6C7B;
        margin-top: 0;
        white-space: nowrap;
        position: relative;
        top: -5px;
        line-height: 15px;
    }
    .CampanyInfo{
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px 16px;
    }
    .Card{
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: left;
    }
    button {
        transition: all 0.8s ease-in-out;
        background: #3DA9FC;
        border-radius: 30px;
        padding: 5px 15px;
        margin: 15px auto;
        cursor: pointer;
        border: 0px solid aliceblue;
    }
    span{
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        margin-top: 0%;
        color: #FFFFFF;
    }
    img {
        width: 65px;
        height: auto;
        border-radius: 50%;
        background-color: #D9D9D9;
        margin-right: 16px;
    }
    p {
        font-size: 16.5px;
        color: #5F6C7B;
    }
    .Contianer{
        display: flex;
        flex-direction: row;
        align-items: left;
        width: auto;
    }
    .CampanyInfoText{
        display: flex;
        flex-direction: column;
        align-items: left;
    }
    .section{
        width: 95%;
        display: flex;
        flex-direction: row;
        align-items: left;
    }
    section{
        word-wrap: normal;
    }
    
    
</style>