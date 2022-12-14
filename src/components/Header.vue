<template>
  <header>
    <div class="vectors">
      <div class="right">
              <svg width="189" height="351" viewBox="0 0 189 351" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M187.949 1.22659C225.234 6.69202 248.545 41.6498 276.54 66.8543C301.107 88.9732 334.306 106.642 340.979 139.004C347.501 170.636 321.084 197.976 309.816 228.246C299.196 256.778 298.401 289.453 276.936 311.058C253.462 334.686 221.236 352.415 187.949 350.911C155.179 349.43 133.342 319.111 104.623 303.273C70.0666 284.215 16.7304 285.688 2.78635 248.794C-11.0449 212.199 30.4338 178.662 43.6027 141.823C56.2146 106.543 51.3701 63.9341 78.2185 37.7831C106.519 10.2174 148.844 -4.50569 187.949 1.22659Z" fill="#90B4CE"/>
      </svg>

      </div>

      <div class="left">
        <svg width="170" height="276" viewBox="0 0 170 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6435 21.3329C70.8268 14.386 120.939 -16.9838 153.532 12.2472C186.062 41.4228 160.813 94.7485 158.197 138.422C155.846 177.676 166.666 222.154 139.274 250.308C111.736 278.611 66.5548 279.073 27.6435 272.603C-5.31544 267.123 -27.5585 241.058 -52.2214 218.47C-78.8285 194.1 -116.502 174.471 -118.859 138.422C-121.274 101.474 -92.3069 70.2341 -63.4225 47.1487C-37.7821 26.6561 -4.73636 26.5419 27.6435 21.3329Z" fill="#D8EEFE"/>
        </svg>
        <svg width="221" height="336" viewBox="0 0 221 336" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6316 0.172861C139.4 -1.86808 192.041 14.0491 214.354 54.0222C235.106 91.1982 201.589 133.392 191.013 174.626C184.473 200.12 178.739 223.509 165.104 246.028C144.56 279.958 132.92 329.805 93.6316 335.456C53.9135 341.169 23.9961 300.684 -1.88373 270.047C-25.0559 242.616 -39.6352 210.426 -42.2265 174.626C-45.0581 135.505 -40.8822 95.2862 -16.7738 64.3289C10.4036 29.4309 49.4164 2.14456 93.6316 0.172861Z" fill="#D8EEFE" fill-opacity="0.5"/>
        </svg>

      </div>
    </div>
    <div class="content">
      <h1>Find a Job..</h1>
      <form class="search" @submit.prevent="handleSubmit">
        <input type="search" v-model="q" id="q" placeholder="Type keywords for the job ">
      </form>
    </div>
  </header>
</template>

<script>
import { ref } from '@vue/reactivity'
import Button from './Button.vue'
import FilterSidebar from './FilterSidebar.vue';
export default {
  components: { Button, FilterSidebar },
  setup(){

  }
}
</script>

<style scoped>
header{
    height: 70vh;
    width: 100%;
    position: relative;
}
header .vectors{
  width: 100%;
  height: 100%;
  z-index: -1;
  position: relative;
}
header .vectors svg{
  width: 100%;
}
header .vectors .right svg{
    position: absolute;
    right: -39%;
    width: 100%;
}
header .vectors .left svg:first-child{
    position: absolute;
    left: -40%;
}
header .vectors .left svg:last-child{
      position: absolute;
    left: -38%;
    top: 30%;
}

header .content{
      position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
header .content h1{
  font-size: 8vmax;
}
header .content form input{
  border: none;
    width:100%;
    max-width: 80%;
    padding: 10px;
    box-shadow: 0px 7px 15px -1px rgb(87 87 87 / 20%);
    border-radius: 70px;
  transition: box-shadow .2s ease-in-out;
}
header .content form input:focus{
  outline: none;
  box-shadow: 0px 14px 25px -1px rgb(87 87 87 / 20%);
}
header .content button{
  margin-left: 10px;
}
</style>

