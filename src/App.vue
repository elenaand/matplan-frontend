<template>
  <div id="app">
    <div id="recipes">
      <Recipe v-for="day in days" :recipe="recipe" :key="day" :day="day" />
    </div>

    <ShoppingList />

    <NewRecipe />
  </div>
</template>

<script>
import ShoppingList from "./components/ShoppingList.vue";
import Recipe from "./components/Recipe.vue";
import NewRecipe from "./components/NewRecipe.vue";
import { getRecipes } from "./api.js";

export default {
  name: "app",
  components: {
    Recipe,
    ShoppingList,
    NewRecipe
  },
  data: function() {
    return {
      recipe: [],
      days: [
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
        "Søndag"
      ]
    };
  },
  mounted: async function() {
    this.recipe = await getRecipes();
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
