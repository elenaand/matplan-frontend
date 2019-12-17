<template>
  <div>
    <label for="recipe">Legg til ny oppskrift:</label>
    <br />
    
    <textarea v-model="newRecipe" placeholder="Tittel" />
    <br />
    <textarea placeholder="Tags (liste av strenger)" />
    <br />
    <select>
      <option>En ingrediens</option>
      <option>To ingrediens</option>
      <option>Tre ingrediens</option>
    </select>
    <br />
    <textarea placeholder="ny ingrediens (navn, kategori, mengde)" />
    
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
