<template>
  <div class="filter" :class="{show: show}">
    <div class="city">
      <select v-model="city">
        <option value="dammam">Dammam</option>
        <option value="riyadh">Riyadh</option>
        <option value="jeddah">Jeddah</option>
        <option value="khobar">Khobar</option>
      </select>
    </div>

    <div class="date">
      <select v-model="datePosted">
        <option value="anytime">Anytime</option>
        <option value="day">Past 24 hours</option>
        <option value="week">Past week</option>
        <option value="month">Past one month</option>
      </select>
    </div>

    <div class="experience">
      <p class="title">Experience</p>
      <div>
        <input type="checkbox" id="internship" value="internship" v-model="exp">
        <label for="internship">Internship</label>
      </div>
      <div>
        <input type="checkbox" id="junior" value="junior" v-model="exp">
        <label for="junior">Junior</label>
      </div>
      <div>
        <input type="checkbox" id="senior" value="senior" v-model="exp">
        <label for="senior">Senior</label>
      </div>
    </div>

    <div class="job-time">
      <p class="title">Job Time</p>
      <div>
        <input type="checkbox" id="fulltime" value="fulltime" v-model="jobTime">
        <label for="fulltime">Full Time</label>
      </div>
      <div>
        <input type="checkbox" id="parttime" value="parttime" v-model="jobTime">
        <label for="parttime">Part Time</label> 
      </div>
    </div>

    <div class="job-type">
      <p class="title">Job Type</p>
      <div>
        <input type="checkbox" id="remote" value="remote" v-model="jobType">
        <label for="remote">Remote</label>
      </div>
      <div>
        <input type="checkbox" id="onsite" value="onsite" v-model="jobType">
        <label for="onsite">On Site</label> 
      </div>
    </div>

  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity'
export default {
  name: "FilterSidebar",
  props: ["show", "filters"],
  setup(props){
    const {show, filters} = toRefs(props);
  }
}
</script>

<style>
.filter{
  width: 100%;
    position: absolute;
    height: 100%;
    background-color: white;
    color: #3DA9FC;
    right: 0;
    border-radius: 20px;
    box-shadow: 0 7px 17px 0px rgb(87, 87, 87, .25);
    z-index: -2;
    top: 175%;
    opacity: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    padding: 2rem 1rem;
    transition: opacity .5s ease-in-out,top .3s ease-in-out;
}
.filter.show{
  z-index: 1;
  top: 100%;
  opacity: 1;
}

.filter .city{
  grid-column: 1/3;
}

.filter select{
  width: 100%;
    border: 2px solid #3da9fc;
    padding: 5px 10px;
    border-radius: 4px;
    -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%233da9fc' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 1px;
}
.filter select:focus{
  outline: none;
}
.filter select::-webkit-keygen-select{
  background-color: #3DA9FC;
  color: #3DA9FC;
}
</style>