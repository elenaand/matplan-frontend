<template>
  <div>
    <label for="recipe">Legg til ny oppskrift:</label>
    <br />

    <textarea v-model="newRecipe" placeholder="Skriv inn oppskrift" />
    <br />
    
    <button @click="addRecipe(newRecipe)">Ny Oppskrift</button>
    <p>Oppskriftstittler i en liste: {{ recipes }}</p>
  </div>
</template>

<script>
export default {
  name: "NewRecipe",
  data: function() {
    return { newRecipe: "", recipes: [] };
  },
  methods: {
    addRecipe: function(newRecipe) {
      if (this.recipe != "") {
        this.recipes.push(newRecipe);
      }
      this.newRecipe = "";
    }
  }
};
</script>
