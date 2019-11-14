<template>
  <div class="card" >
    <h1>{{ dag }}</h1>
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

.card {
  border: 1px solid #2c3e50;
  margin: 10px;
  padding:20px
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}


</style>
