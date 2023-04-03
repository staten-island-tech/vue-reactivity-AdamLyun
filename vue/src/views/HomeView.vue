<script setup>
import FactualCard from '../components/FactualCard.vue'
import champions from '../components/array.js'
import { ref } from 'vue'


const filter_arr = ref(['Assassin', 'Mage', 'Marksman', 'Support', 'Tank', 'All'])


const filtedChampArray = ref(champions)
let yourBald = ref(champions)


function filterClass(champion) {
  const xDDDDDDDDDDDDDDDD = filtedChampArray.value.filter((champ) => champ.tags.includes(champion))
  yourBald.value = xDDDDDDDDDDDDDDDD
  console.log(yourBald)

}

</script>

<template>
  <div id="container-box">
    <div class="EricLin" v-for="champ in filter_arr" :key="champ.id">
      <button @click="filterClass(champ)" class="familyfriendly">{{ champ }}</button>

    </div>

    <FactualCard v-for="champion in yourBald" :key="champion.key" :name="champion.name" :title="champion.title"
      :id="champion.id" :link="champion.link" :link2="champion.link2"></FactualCard>




  </div>
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
