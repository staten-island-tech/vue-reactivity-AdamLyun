<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      student: 'Jeffrey',
      passed: true,
      animals: ['Yes', 'No', 'Maybe', 'So'],
      loggedIn: true,
      message: '',
      selected: ''
    }
  },
  methods: {
    authState: function () {
      if (this.loggedIn === false) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    }
  }
}
</script>

<template>
  <main>
    <h1 v-if="passed">{{ student }}</h1>
    <h1 v-else>dke</h1>
    <ul>
      <li v-for="animal in animals" :key="animal">{{ animal }}</li>
    </ul>

    <button @click="authState" v-if="loggedIn">Logout</button>
    <button @click="authState" v-else="loggedIn">Login</button>
    <input type="text" placeholder="EEEEEEEEEEEE" v-model="message" />

    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <p>{{ message }}</p>
    <p>{{ selected }}</p>
  </main>
</template>
