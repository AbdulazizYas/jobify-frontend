<template>
  <footer>
    <div class="container">
      <h2>Jobify</h2>
      <p>Find your dream job based on  your preferences!</p>
      <p class="copyrights">All rights are reserved © Web Clowns organization.</p>
    </div>
  </footer>
</template>

<script>
export default {
name:"Footer"
}
</script>

<style scoped>
  footer{
    background-color: #094067;
    padding: 1rem .5rem;
    height: 50vh;
    display: grid;
    place-items: center;
  }
  footer h2{
    color: white;
  }
  footer p{
    color: #3DA9FC;
    font-weight: bold;
  }
  footer .copyrights{
    color: #EF4565;
  }
</style>