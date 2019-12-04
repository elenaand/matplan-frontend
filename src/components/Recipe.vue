<template>
  <div class="card">
    <h1 class="day">{{ day }}</h1>

    <div v-if="selected !== undefined && isSelectHidden">
      <h2>{{recipe[selected].description}}</h2>
      <button @click="toggleHideSelect()">X</button>
    </div>
    <div v-else>
      <select v-model="selected">
        <option
          v-for="option in recipe"
          v-bind:value="recipe.indexOf(option)"
          v-bind:key="option.id"
        >{{ option.description }}</option>
      </select>
      <button @click="toggleHideSelect()">ok</button>
    </div>
    <!--
    <h2>{{ selected !== undefined ? recipe[selected].description : "" }}</h2>
    <ul v-if="selected !== undefined">
      <li
        v-for="ingredient in recipe[selected].ingredients"
        v-bind:key="ingredient.id"
      >{{ ingredient.name }}</li>
    </ul>
    -->
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
      selected: undefined,
      isSelectHidden: true
    };
  },
  methods: {
    toggleHideSelect: function() {
      this.isSelectHidden = !this.isSelectHidden;
    }
  }
};
</script>

<style>
div {
  padding: 10px;
}

@media screen and (max-width: 900px) {
  select {
    font-size: large;
    border: none;
    outline: none;
  }
}

@media screen and (min-width: 900px) {
  .day {
    margin-top: 0;
    color: #76b086;
  }

  .card {
    background-color: #fcdede;
    margin: 23px;
    padding: 20px;
    flex-basis: 15%;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
