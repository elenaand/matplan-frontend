<template>

  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
    <link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />


    <div id="recipes">
      <Recipe dag="Mandag" />
      <Recipe dag="Tirsdag" />
      <Recipe dag="Onsdag" />
      <Recipe dag="Torsdag" />
      <Recipe dag="Fredag" />
      <Recipe dag="Lørdag" />
      <Recipe dag="Søndag" />
    </div>

    <ShoppingList />

    <NewRecipe />
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
  font-family: 'Press Start 2P', Helvetica, Arial, sans-serif;
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
