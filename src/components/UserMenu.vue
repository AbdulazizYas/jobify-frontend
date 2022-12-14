<template>
  <div class="menu-wrapper">
    <div class="avatar"  @click="menuShown = !menuShown">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZmigMXNuTTJLVj-mJxRtWpf1ftOV2T-n70EA1f4DxA&s">
    </div>

    <div class="menu" :class="{show: menuShown}">
      <ul>
        <li><a href="#">Profile</a></li>
        <!-- <li><a href="#">Edit Profile</a></li> -->
        <hr>
          <div class="company" v-if="type == 'company'">
            <li><router-link to="/postjob">Post a Job</router-link></li>
            <li><a href="#">Our Offers</a></li>
          </div>

          <div class="jobSeeker" v-if="type == 'jobSeeker'">
            <li><a href="#">My Applications</a></li>
          </div>
        <hr>
        <li><router-link to="/login" @click="logout">Log out</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { useStore } from 'vuex';
export default {
  name: "UserMenu",
  props: ['user','type'],
  setup(props){
    const menuShown = ref(false);
    const {user,type} = toRefs(props);
    const store = useStore();
    const logout = async ()=>{
      await fetch(`http://localhost:3000/logout`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
      })

      menuShown.value = false;
      store.dispatch("user",null)

    }
    return {
      menuShown,
      logout
    }
  }
}
</script>

<style scoped>
.menu-wrapper{
  position: relative;
}

.avatar{
  width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
  cursor: pointer;
  border: 3px solid #3da9fc;
}
.avatar img{
  width: 100%;
  height: auto;
}
.menu{
    position: absolute;
    top: 0;
    left: -285%;
    top: -1000%;
    background-color: #ffffffdd;
    width: 400%;
    border-radius: 10px;
    box-shadow: 0 4px 8px #3d4c5b33;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 1);
    padding: 6px;
    z-index: 2;
    opacity: 0;
    overflow: hidden;
    transition: opacity .2s ease-in-out;
}
.menu.show{
  display: block;
  opacity: 1;
  top: 145%;
}
.menu ul{
  list-style-type: none;
    padding: 0;
}

.menu li a{
  display: block;
  width: 100%;
  text-decoration: none;
  color: #094067;
  transition: background-color .2s ease-in-out,color .2s ease-in-out;
  padding: 10px 0;
  border-radius: 10px;
}
.menu li a:hover{
  background-color: #90b4ce;
  color: white;
}

hr{
  border: none;
  height: 2px;
  border-radius: 6px;
  background-color: #90b4ce;
}
</style>