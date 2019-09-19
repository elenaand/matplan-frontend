<template>
  <div id="app">
    <Recipe/>
    <ShoppingList/>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import Recipe from './components/Recipe.vue'

export default {
  name: 'app',
  components: {
    Recipe,
    ShoppingList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
