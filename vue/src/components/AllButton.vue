<template>
  <!-- make this button work -->
  <button @click="filter" class="familyfriendly">All</button>
</template>

<script>
import champions from './array'
export default {
  name: 'ButtonXD',

  methods: {
    filter() {
      let card = document.querySelectorAll('.cardfr')
      card.forEach((card) => {
        card.remove()
      })
    
      champions
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
   
  },

 aboutme(){
let btn = document.querySelectorAll("#sofax1")
btn.forEach(element => {
    element.addEventListener("click", function(){
element.window.open(this.link) 
    }
    
)});

  }
}
</script>
