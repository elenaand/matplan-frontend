<template>
  <div>
    <h1>{{ day }}</h1>
    <select v-model="selected">
      <option
        v-for="option in recipe"
        v-bind:value="recipe.indexOf(option)"
        v-bind:key="option.id"
        >{{ option.description }}</option
      >
    </select>

    <h2>{{ selected !== undefined ? recipe[selected].text : "" }}</h2>
    <ul v-if="selected !== undefined">
      <li
        v-for="ingredient in recipe[selected].ingredients"
        v-bind:key="ingredient.id"
      >
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    recipe: Array,
    day: String
  },
  data: function() {
    return {
      selected: undefined
    };
  }
};
</script>

<style>
div {
  padding: 10px;
}
</style>
