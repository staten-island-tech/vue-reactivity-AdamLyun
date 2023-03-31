<!-- <script>
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
  },

  method: {
    fitlerClass(champion) {
      console.log(champion)
    }
  }
}
</script> -->

<script setup>
import FactualCard from '../components/FactualCard.vue'

import champions from '../components/array.js'
import { ref, onMounted } from 'vue'

// reactive state
const filter_arr = ref(['Assassin', 'Mage', 'Marksman', 'Mage', 'Support', 'Tank'])

const allChamps = ref(champions)

// functions that mutate state and trigger updates
function filterClass(champion) {
  console.log(champion)
  champions.filter((champ) => champ.tags.includes(champion))
  console.log(champions)
  // allChamps = allChamps.filter((champ) => champ.tags.match(champion))
}
// lifecycle hooks
onMounted(() => {
  console.log(filter_arr)
})
</script>

<template>
  <main>
    <div class="EricLin" v-for="champ in filter_arr">
      <button @click="filterClass(champ)" class="familyfriendly">{{ champ }}</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.familyfriendly,
.familyfriendly:link,
.familyfriendly:visited {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem 'Roboto Slab', sans-serif;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  margin: 1em;
  width: 13rem;
  background-color: green;
  transition: all 0.2s;
  color: #58afd1;
  border-radius: 1rem;
}
.familyfriendly:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 0.5rem rgba(0, 0, 0, 0.2);
}
</style>
