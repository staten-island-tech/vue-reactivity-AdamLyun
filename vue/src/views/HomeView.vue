<script>
import FactualCard from '../components/FactualCard.vue'
import ButtonXD from '../components/AllButton.vue'
import ButtonXDDD from '../components/MarksmanButton.vue'
import ButtonXDDDDDD from '../components/AssassinButton.vue'
import ButtonXDDDDDDDDDD from '../components/MageButton.vue'
import ButtonXDDDDDDDDDDDDDDDDDDDDDD from '../components/TankButton.vue'
import ButtonXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD from '../components/SupportButton.vue';
import  champions  from '../components/array.js'

export default {
  components: {
    FactualCard,
    ButtonXDDD,
    ButtonXDDDDDD,
    ButtonXDDDDDDDDDD,
    ButtonXDDDDDDDDDDDDDDDDDDDDDD,
    ButtonXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD,ButtonXD
  },

  data() {
    return {
      list: champions
    }
  }
}
</script>

<template>
  <main>
    <div class="EricLin">
      <ButtonXD></ButtonXD>
      <ButtonXDDD></ButtonXDDD>
    <ButtonXDDDDDD></ButtonXDDDDDD>
    <ButtonXDDDDDDDDDD></ButtonXDDDDDDDDDD>
    <ButtonXDDDDDDDDDDDDDDDDDDDDDD></ButtonXDDDDDDDDDDDDDDDDDDDDDD>
    <ButtonXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD></ButtonXDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD></div>
    
    <div id="container-box">
      <FactualCard
        v-for="champion in list"
        :key="champion.name"
        :name="champion.name"
        :title="champion.title"
        :id="champion.id"
        :link="champion.link"
      />
    </div>
  </main>
</template>
<style >
.EricLin{
  flex-wrap: wrap;
    justify-content: center;
    display: flex;
    margin: 2%;
}
</style>