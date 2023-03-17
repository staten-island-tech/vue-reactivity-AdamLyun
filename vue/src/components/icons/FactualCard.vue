<template>
  <div class="cardfr">
<h2>{{ Name }}</h2>
<p>{{ description }}</p>


  </div>
</template>

<script>
export default {
name: "FactualCard",
props:{
  Name: String,
    description: String,
}

}
</script>

<style lang="scss" scoped>
.cardfr {
  width: 30%;
  background-color: blue;
  height: 500px;
  margin: 10px auto;
}
</style>
