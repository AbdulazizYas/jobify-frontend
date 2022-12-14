<template>
    <div class="file-upload">
        <div Class="BasicInfo">
        <h1>Applicant Name: <span Class="hover-underline-animation">{{name}}</span></h1>
        <h1>Applicant Email: <span Class="hover-underline-animation">{{email}}</span></h1>
        </div>
        
        <div class="file-upload__area">
            <div>
                <h2>Drag and drop your CV here</h2>
                <input type="file" name="" id="" />
            </div>
        </div>

        <div class="buttonContainer">
            <button class="ApplyButton">
                <span class="edit">Send CV</span>
            </button>
        </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "FileUpload",
    props: {
      name: String,
      email: String,
    },
  };
  </script>
  
  <style scoped>
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #0087ca;
    }
    
    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #0087ca;
        transform-origin: bottom right;
        transition: transform 0.8s ease-out;
    }
    
    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    .BasicInfo h1{
        color: #094067;
    }
    h1, h2, h3, h4{
        font-weight: 700;
        color: #094067;
        text-align: left;
    }
    h1{
        font-size: 39.09px;
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
    .BasicInfo{
        background: #D8EEFE;
        border-radius: 15px;
        padding: 20px;
        margin: 1.5rem 40px 0px 40px;
        display: block;
    }
    .file-upload {
        height: 100vh;
        width: 100%;
    }
    file-upload__area{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .file-upload .file-upload__area {
        margin: 1.5rem 40px 0px 40px;
        border-radius: 15px;
        background: #D8EEFE;
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #ccc;
        margin-top: 40px;
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
        margin-left: 40px;
        padding: 20px;
    }
    .edit{
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        margin-top: 0%;
        color: #FFFFFF;
    }
  </style>