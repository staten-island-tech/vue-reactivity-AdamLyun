
<template>
  <!-- make this button work -->
  <button @click="increment">count is: {{ count }}</button>
</template>

<script>
export default {
name: "ButtonXDDD",

data() {
    return {
      count: 0
    }
},
  methods: {
    increment() {
      this.count++
    }
  }

}
</script>