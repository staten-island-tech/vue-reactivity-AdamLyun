<script>
import FactualCard from '../components/FactualCard.vue'
import ButtonXDDD from '../components/WButtonFr.vue'
import  champions  from '../components/array.js'

export default {
  components: {
    FactualCard,
    ButtonXDDD
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
    <button @click="filterMage"></button>
    <ButtonXDDD></ButtonXDDD>
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
