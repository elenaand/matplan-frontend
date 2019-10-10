<template>
  <div>
    <textarea v-model="newRecipe" placeholder="Skriv inn oppskrift" ></textarea>
    <button @click="recipes.push(newRecipe)>NY</button>
    <p>{{ recipes }}</p>
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