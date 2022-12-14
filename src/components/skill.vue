<template>
    <div class="container">
        <div class="skill">
            <h1>{{ skillName }}</h1>
        </div>
    </div>
</template>

<script>

export default {
    // if some one hover on the skill it will change The content to be icon

    name: "skill",
    props: {
        skillName: {
            type: String,
        },
    },
}
</script>

<!-- .skill:hover {
        transition: all 0.25s ease;
        background:rgb(239,69,101,0.4);
        cursor: pointer;
        } -->
<style scoped>
        
    .container {
        cursor: pointer;
        display: block;
        justify-content: center;
        align-items: center;
        margin: 4px;
    }
    .skill {
        transition: all 0.25s ease;
        background-color: #f1f1f1;
        background:  rgb(61,169,252, 0.4);
        border-radius: 35px;
        width: auto;
        padding: 0px 10px;
        }
    h1 {
        font-size: 16.5px;
        opacity: initial;
        color: #094067;
        }

</style>