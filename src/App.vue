<template>
  <div>
    <div class="recipes">
      <Recipe v-for="day in days" :recipes="recipe" :key="day" :day="day" />
    </div>

    <!-- <ShoppingList /> -->

    <router-link :to="{ name: 'new-recipe' }">Ny oppskrift</router-link>-
    <router-link :to="{ name: 'shopping-list' }">Se handleliste</router-link>

    <router-view />
    <!-- <NewRecipe /> -->
  </div>
</template>

<script>
import Recipe from "./components/Recipe.vue";
import { getRecipes } from "./api.js";
import { addRecipes } from "./state/recipes"

export default {
  components: {
    Recipe
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
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
    addRecipes(this.recipe)
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

@media screen and (min-width: 900px) {
  .recipes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    padding: 10px;
    width: 100%;
  }
}
</style>
