<template>
    <div class="JobDescription">    
        <section Class="JobTitle" >
            <h1>{{ JobTitle }}</h1>
        </section>

        <div Class="Card">
            <div Class="Contianer">
                <section Class="CampanyInfo">
                    <div Class="ImageContainer">
                        <img :src="photo" alt="An image of the company">
                    </div>
                    <div Class="CampanyInfoText">
                        <h3>{{ CompanyName }}</h3>
                        <h4>{{ CompanyLocation }}</h4>
                    </div>
                </section>
            </div>
        </div>

        <section Class="JobInfo">
            <h2>Job Description:</h2>
            <p> {{ Description }}</p>        

        </section>
        <button class="ApplyButton"><span>Apply</span></button>
    </div>
</template>
  
<script>
    export default {
    // add props here
        props: {
            JobTitle: String,
            CompanyName: String,
            CompanyLocation: String,
            Description: String,
            Image: String
        },
        name: "JobDescription",
        computed: {
            photo() {
                return require('./logo.png')
            }
        },
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
    }
    h1, h2, h3, h4, p{
        font-style: normal;
        font-weight: 700;
        color: #000000;
    }
    h1{
        font-size: 29.29px;
    }
    h2 {
        font-size: 22px;
    }
    h3 {
        font-size: 16.5px;
        margin-bottom: 12.5px;
    }
    h4 {
        font-size: 12.38px;
        color: #5F6C7B;
        line-height: 0px;
        margin-top: 0;
        white-space: nowrap;
        position: relative;

    }
    .CampanyInfo{
        width: max-content;
        display: flex;
        flex-direction: row;
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
        color: #FFFFFF;
    }
    img {
        width: 65px;
        height: auto;
        border-radius: 50%;
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
</style>