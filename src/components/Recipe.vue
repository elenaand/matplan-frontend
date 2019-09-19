<template>
  <div>
    <textarea v-model="recipe" placeholder="Skriv inn oppskrift"></textarea>
    <h1>Oppskrift: {{ recipe }}</h1>
    <ul>
      <li>Innhold 1</li>
      <li>Innhold 2</li>
      <li>Innhold 3</li>
    </ul>
  </div>
</template>

<script>
// hva data skal inn her da?
export default {
  name: "Recipe",
  data: function() {
    return { recipe: "" };
  }
};
</script>

<style>
</style>