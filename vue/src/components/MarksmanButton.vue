<template>
  <!-- make this button work -->
  <div v-for="button in filter_arr" >

  </div>
  <button @click="filter" class="familyfriendly">Marksman</button>
  <!-- <div class="cardfr">
    <h1 class="card__name">{{ name }}</h1>
    <img v-bind:src="id" alt="Person" class="card__image" />
    <h2>{{ title }}</h2>
    <button  @click="aboutme" id="sofax1" class="btn draw-border">Learn More</button>
    <button id="sofax2" class="btn draw-border">Builds</button>
    <button id="sofax3" class="btn draw-border">Buy</button>

  </div> -->

</template>

<script>
import champions from './array'
export default {
  name: 'ButtonXDDD',
  filter_arr: [
    'Assassin', 'Mage', 'Marksman', 'Mage', 'Support', 'Tank'
  ],
  methods: {
    filter() {
      let card = document.querySelectorAll('.cardfr')
      card.forEach((card) => {
        card.remove()
      })
    
      champions
        .filter((champion) => champion.tags.includes(`Marksman`))
        .forEach((champ) => {
          document.querySelector('#container-box').insertAdjacentHTML(
            'beforeend',
            `
          <div class="cardfr">
    <h1 class="card__name">${champ.name}</h1>
<img src="${champ.id}" alt="aa" class="card__image">
    <h2>${champ.title}</h2>
    <button  @click="aboutme" id="sofax1" class="btn draw-border">Learn More</button>
    <button id="sofax2" class="btn draw-border">Builds</button>
    <button id="sofax3" class="btn draw-border">Buy</button>
   
  </div>
  `
          )
        })

    },
 
      aboutme() {
        window.open(this.link) 
     
    }
     
    }
  }

</script>
