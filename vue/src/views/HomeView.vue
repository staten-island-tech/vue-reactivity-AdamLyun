<script>
import FactualCard from '../components/FactualCard.vue'

import champions from '../components/array.js'

export default {
  components: {
    FactualCard
  },

  data() {
    return {
      list: champions,
      filter_arr: ['Assassin', 'Mage', 'Marksman', 'Mage', 'Support', 'Tank']
    }
  }
}
</script>

<template>
  <main>
    <div class="EricLin" v-for="lol in filter_arr">
      <button @click="filter" class="familyfriendly">{{ lol }}</button>
    </div>

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
<style>
.EricLin {
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 2%;
}
</style>
