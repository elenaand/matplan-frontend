<template>
  <div>
    <label>Legg til ny oppskrift:</label>
    <br />
    
    <textarea v-model="title" placeholder="Tittel" />
    <br />
    <textarea v-model="tags" placeholder="Tags (liste av strenger)" />
    <br />
    <select>
      <option>En ingrediens</option>
      <option>To ingrediens</option>
      <option>Tre ingrediens</option>
    </select>
    <br />
    <textarea placeholder="ny ingrediens (navn, kategori, mengde)" />
    
    <button @click="addRecipe(title, tags)">Ny Oppskrift</button>
    <p>Oppskriftstittler i en liste: {{ recipes }}</p>
  </div>
</template>

<script>
export default {
  name: "NewRecipe",
  data: function() {
    return { newRecipe: {title: "", tags: ""}, recipes: [] };
  },
  methods: {
    addRecipe: function(title, tags) {
      if (title != "") {
        this.recipes.push(title);
      }
      if (tags != "") {
        this.recipes.push(tags);
      }
      this.title = "";
      this.tags = "";
    }
  }
};
</script>
