<template>
    <div>
        <div class="CampanyInfo">
            <img :src="photo" alt="logo">
            <div class="CampanyInfoText">
                        <h2><a href="">{{JobTitle}}</a></h2>
                        <h3>{{CompanyName}}</h3>
                        <h4>{{CompanyLocation}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            JobTitle: String,
            CompanyName: String,
            CompanyLocation: String,
            Image: String
        },
        name: "JobCard",
        computed: {
            photo() {
                return require('./logo.png')
            }
        },
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
}
img {
    width: 85px;
    height: auto;
    border-radius: 50%;
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
</style>
