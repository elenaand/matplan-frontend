<template>
  <div>
    <div class="nes-field">
      <label for="recipe">Oppskrift:</label>
      <textarea v-model="recipe" class="nes-input" placeholder="Skriv inn oppskrift"></textarea>
    </div>
    <h1>{{ dag }}</h1>
    <h2>{{ recipe }}</h2>
    <ul>
      <li>Innhold 1</li>
      <li>Innhold 2</li>
      <li>Innhold 3</li>
    </ul>
  </div>
</template>

// TODO: Save what recipe is selected

<script>
export default {
  name: "Recipe",
  props: { dag: String },
  data: function() {
    return { recipe: "" };
  }
};
</script>

<style>
div {
  padding: 10px;
}
</style>