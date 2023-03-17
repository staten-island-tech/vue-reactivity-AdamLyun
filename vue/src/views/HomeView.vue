<script>
import FactualCard from `.../components/FactualCard.vue`

export default {
  components:
  {
    FactualCard
  },
  data() {
    return {
      champion: [
    {
      L: "bob",
      id: 1,

    },
    {
      L: "eff",
      id: 2,

    }
     ]
    }
  }
}
</script>

<template>
  <main>
    <FactualCard />
  </main>
</template>
