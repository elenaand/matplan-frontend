<template>
  <div>
    <div class="nes-field">
      <label for="recipe">Legg til ny oppskrift:</label>
      <textarea v-model="newRecipe" class="nes-input" placeholder="Skriv inn oppskrift" />
    </div>
    <button @click="recipes.push(newRecipe)" class="nes-btn is-success">Ny Oppskrift</button>
    <p>Oppskriftstittler i en liste: {{ recipes }}</p>
  </div>
</template>

<script>
export default {
  name: "NewRecipe",
  data: function() {
    return { newRecipe: "", recipes: [] };
  }
};
</script>