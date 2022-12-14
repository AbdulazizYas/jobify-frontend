<template>
        <div class="Profile">
            <div class="ProfileInfo">
                <div class="ImageContainer">
                    <img :src="photo" alt="An image of the company">
                </div>
                <div class="ProfileInfoText">
                    <h2>{{ Name }}</h2>
                    <span>{{ UserName }}</span>
                    <span>{{ Email }}</span>
                </div>
            </div>
    
            <div class="ProfileCv">
                <div Class="abilities">
                    <h2>Education</h2>
                    <div class="align">
                        <skillVue :skillName="education"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/> <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/> <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                    </div>
                </div>
                <hr>
                <div Class="abilities">
                    <h2>Experiences</h2>
                    <div class="align">
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/> <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                        <skillVue :skillName="experience"/>
                    </div>
                </div>
                <hr>
                <div Class="abilities">
                    <h2>Skills</h2>
                    <div class="align">
                        <skillVue :skillName="skills"/>
                    </div>
                </div>
            </div>
            <div class="buttonContainer">
                <button class="ApplyButton">
                    <span class="edit">Edit Profile</span>
                </button>
            </div>
        </div>

</template>

<script>
import skillVue from '@/components/skill.vue';
export default {
    name: "ProfilePage",
    components: { skillVue },
    props: {
        Name: String,
        skills: String,
        UserName: String,
        Email: String,
        education: String,
        experience: String,
        CompanyLocation: String,
        Image: String
    },
    computed: {
        photo() {
            return require('./logo.png')
        }
    },

};
</script>

<style scoped>
    .Profile{
        margin: 1.5rem 0px 50px 40px;
        display: flex;
        flex-direction: column;
    }
    img {
        width: 225px;
        height: auto;
        border-radius: 50%;
        margin-right: 30px;
        background-color: #D9D9D9;
    }
    .ProfileInfo{
        display: flex;
        align-items: center;
    }
    .ProfileInfoText, .ProfileCv{
        display: flex;
        gap: 0px;
        flex-direction: column;
        text-align: initial;
    }
    .ProfileCv{
        margin-top: 40px;
        margin-left:65px;
        gap: 30px;
    }
    h1, h2, h3, h4{
        font-weight: 700;
        color: #094067;
    }
    h1{
        font-size: 52.11px;
    }
    h2{
        font-size: 22px;
    }
    h3{
        font-size: 19.19px;
    }
    h4{
        font-size: 14.14px;
    }
    span{
        margin-top: 5px;
        font-size: 16.5px;
        color: #5F6C7B;
    }
    .ProfileInfoText *{
        margin-left: 30px;
    }
    .abilities{
        
        display: flex;
        flex-direction: row;
    }
    .abilities h2{
        width: 215px;
    }.abilities h3{
        margin-right: 30px;
    }
    .align{
        display: flex;
        flex-wrap: wrap;
        width: 50%;

       }
    .centered{
        margin:auto 100px  auto auto;
    }
    .edit{
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        margin-top: 0%;
        color: #FFFFFF;
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
    button:hover{
        transition: all 0.8s ease;
        background:  #094067;
        border-radius: 15px;
        padding: 5px 15px;
        margin: 15px auto;
        cursor: pointer;
        box-shadow: 0 0 5px 0 rgba(0,0,0,0.4);
    }
    .buttonContainer{
        text-align: left;
        margin-top: 40px;
        margin-left: 65px;
    }
</style>