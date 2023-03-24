<script setup>
  
</script>

<template>
  <div class="anqi" >
  <header>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        
        <RouterLink to="/about">Market</RouterLink>
      </nav>

     <h1></h1>
      
  </header>

  <RouterView /></div>
</template>

<style scoped>
.anqi{
  
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin: 2%; 
  padding: 2rem;
}
nav{
  margin: 1rem; 
  display: flex;
  justify-content: space-around ;
}
</style>
