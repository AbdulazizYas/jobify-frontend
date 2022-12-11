<template>
  <div class="home">
    <div class="container">
      <Header />
      <section>
        <img src="/svgs/easyWay.svg" alt="Easy way to find jobs">
        <div class="content">
          <h2>Easy way to find jobs</h2>
          <p>You can filter jobs based on your suitable needs and preferences</p>
        </div>
      </section>

      <section>
        <img src="/svgs/signUp.svg" alt="Sign Up to apply for a Job!">
        <div class="content">
          <h2>Sign Up to apply for a Job!</h2>
          <p>You can create an account in our website. and search for your dream job with numerous companies  advertisements</p>
          <Button variant="primary">Create an Account</Button>
        </div>
      </section>

      <section>
        <img src="/svgs/findEmp.svg" alt="Find the best employees!">
        <div class="content">
          <h2>Find the best employees!</h2>
          <p>If you were a company that is looking for best employees. This is the right place</p>
        </div>
      </section>

      <section>
        <img src="/svgs/requestRegs.svg" alt="Sign Up to apply for a Job!">
        <div class="content">
          <h2>Request a registration!</h2>
          <p>As a company, you can request a registration so that you can post your jobs advertisements! Sign up now and send us the requirements documents!</p>
          <Button variant="primary">Request a registration</Button>
        </div>
      </section>
    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'HomePage',
  components: {Header, Button}
}


</script>

<style scoped>
section{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  column-gap: 10px;
}
section img{
  width: 70%;
  height: auto;
}
section .content{
      display: flex;
    flex-direction: column;
}
section .content h2{
  font-size: 2em;
}
section .content p{
  font-size: 1.2em;
  font-weight: 700;
  color: #5F6C7B;
}
section .content button{
      width: fit-content;
    margin: auto;
}
section:nth-of-type(even){
  flex-direction: row-reverse;
  background-color: #D8EEFE;
  box-shadow: 0px 0px 30px -1px rgba(23, 97, 154, 0.2);
}
</style>