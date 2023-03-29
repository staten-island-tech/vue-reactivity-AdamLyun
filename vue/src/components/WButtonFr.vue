
<template>
  <!-- make this button work -->
  <button @click="increment">Marksemen</button>
</template>

<script>
import champions from './array'
export default {
name: "ButtonXDDD",


  methods: {
    increment() {
    
      champions.filter((champion) => champion.tags.includes(`Marksman`)).forEach((champ) => {
        document.querySelector('#container-box').insertAdjacentHTML(
          "beforeend",
          `
      <div class="inner">  
      <p>${champ.name} </p>
      <img src="${champ.id}" alt="No Image???">
      <p>${champ.title}</p>
      </div>
  `
        )
        
      });
    }
  }

}
</script>