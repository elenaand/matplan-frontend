<template>
  <div id="app">
    <div id="recipes">
      <Recipe dag="Mandag" />
      <Recipe dag="Tirsdag" />
      <Recipe dag="Onsdag" />
    </div>
    <ShoppingList />
    <NewRecipe/>
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import Recipe from "./components/Recipe.vue";
import NewRecipe from "./components/NewRecipe.vue";

export default {
  name: "app",
  components: {
    Recipe,
    ShoppingList,
    NewRecipe
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#recipes {
  display: flex;
}
</style>
