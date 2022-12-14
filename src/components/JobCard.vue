<template>
    <div>
        <div class="CampanyInfo">
            <div class="CampanyInfoText">
                        <h2><router-link :to="'/jobs/'+job.job_id">{{job.jobName}}</router-link></h2>
                        <h3>{{job.company.company_name}}</h3>
                        <h4>{{job.city}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['job'],
        name: "JobCard",
        setup(){

        }
    };
</script>

<style scoped>
.CampanyInfo:hover{
    transition: all 0.7s ease;
    background: #b0dbf9;
    border-radius: 8px;
    padding: 5px 16px;
    
}
.CampanyInfo{
    transition: all 0.6s ease;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.15);
    cursor: pointer;
    background: #D8EEFE;
    border-radius: 20px;
    padding: 5px 16px;
    margin-bottom: 2rem;
}
img {
    width: 85px;
    height: auto;
    border-radius: 50%;
    background-color: #D9D9D9;
}
h1, h2, h3, h4{
    line-height: 0px;
    font-weight: 700;
    color: #000000;
}
h1{
    font-size: 29.29px;
    margin: 15px;
}
h2 {
    font-size: 22px;
}
h3 {
    margin-top: 10px;
    font-size: 16.5px;
    color: #5F6C7B;
}
h4 {
    margin-top: 5px;
    font-size: 12.38px;
    color: #5F6C7B;
}
.CampanyInfo{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.CampanyInfoText{
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
</style>