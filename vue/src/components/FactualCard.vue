<template>
  <div class="cardfr">
    <h1 class="card__name">{{ name }}</h1>
    <img v-bind:src="id" alt="Person" class="card__image" />
    <h2>{{ title }}</h2>
    <button  @click="aboutme" id="sofax1" class="btn draw-border">Learn More</button>
    <button @click="builds" id="sofax2" class="btn draw-border">Builds</button>
    <button @click="warning" id="sofax3" class="btn2 draw-border2">Out Of Stock</button>
   
  </div>
</template>

<script>
export default {
  name: 'FactualCard',
  props: {
    name: String,
    title: String,
    id: String,
    link: String,
    link2: String, 
  },
 methods: {
  aboutme(){
  
    window.open(this.link) 
 },
builds(){

  window.open(this.link2) 
},

warning(){
  alert("Champion is out of stock right now! Please come back at a later time. ♥");
}
 }}


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500&display=swap');

.cardfr {
  background-color: #222831;
  height: 37rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
}
.card__name {
  margin-top: 15px;
  font-size: 1.5em;
}
.card__image {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  border: 5px solid #272133;
  margin-top: 20px;
  box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
}
.btn {
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
}

.btn:focus {
  outline: 2px dotted #55d7dc;
}
.btn2 {
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  font: 700 1.2rem 'Roboto Slab', sans-serif;
  padding: 0.75em 2em;
  letter-spacing: 0.05rem;
  margin: 1em;
  width: 13rem;
  background-color: #eb196e;
}

.btn2:focus {
  outline: 2px dotted #55d7dc;
}
.draw-border {
  box-shadow: inset 0 0 0 4px #58cdd1;
  color: #58afd1;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}

.draw-border::before,
.draw-border::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  position: absolute;
  width: 0rem;
  height: 0;
  bottom: 0;
  right: 0;
}

.draw-border::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.draw-border::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border:hover {
  color: #ffe593;
}

.draw-border:hover::before,
.draw-border:hover::after {
  border-color: #eb196e;
  -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.draw-border:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.draw-border:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}


.draw-border2 {
  box-shadow: inset 0 0 0 4px orange;
  color: orange;
  -webkit-transition: color 0.25s 0.0833333333s;
  transition: color 0.25s 0.0833333333s;
  position: relative;
}

.draw-border2::before,
.draw-border2::after {
  border: 0 solid transparent;
  box-sizing: border-box;
  content: '';
  pointer-events: none;
  position: absolute;
  width: 0rem;
  height: 0;
  bottom: 0;
  right: 0;
}

.draw-border2::before {
  border-bottom-width: 4px;
  border-left-width: 4px;
}

.draw-border2::after {
  border-top-width: 4px;
  border-right-width: 4px;
}

.draw-border2:hover {
  color: #ffe593;
}

.draw-border2:hover::before,
.draw-border2:hover::after {
  border-color: #55d7dc;
  -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
  transition: border-color 0s, width 0.25s, height 0.25s;
  width: 100%;
  height: 100%;
}

.draw-border2:hover::before {
  -webkit-transition-delay: 0s, 0s, 0.25s;
  transition-delay: 0s, 0s, 0.25s;
}

.draw-border2:hover::after {
  -webkit-transition-delay: 0s, 0.25s, 0s;
  transition-delay: 0s, 0.25s, 0s;
}
</style>
