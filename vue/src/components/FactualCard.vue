<template>
  <div class="cardfr">
    <h2>{{ name }}</h2>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'FactualCard',
  props: {
    name: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>
.cardfr {
  background-color:black;
    border: 20px solid;
    border-radius: 6%;
    width: 15rem;
    height: 20rem;
    margin: 4%;
    font-size: 2rem;
}
</style>
