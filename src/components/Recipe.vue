<template>
  <div class="card mobile-card">
    <h1 class="day-title">{{ day }}</h1>

    <div v-if="selected !== undefined && isSelectHidden">
      <h2 id="recipe-title">
        {{recipe[selected].description}}
        <delete-icon id="delete-icon" @click="toggleHideSelect()" />
      </h2>
    </div>
    <div v-else>
      <select v-model="selected">
        <option
          v-for="option in recipe"
          v-bind:value="recipe.indexOf(option)"
          v-bind:key="option.id"
        >{{ option.description }}</option>
      </select>
      <button class="button" v-if="selected !== undefined" @click="toggleHideSelect()">ok</button>
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
import DeleteIcon from "vue-material-design-icons/Delete.vue";

export default {
  name: "Recipe",
  components: {
    DeleteIcon
  },
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
#delete-icon {
  vertical-align: middle;
}

h2 {
  font-weight: lighter;
}

button {
  font-size: large;
}

@media screen and (max-width: 900px) {
  .mobile-card:nth-child(2n) {
    background-color: #f8e4e3;
    margin: 20px;
    padding: 10px 0 40px 0;
  }

  .mobile-card:nth-child(2n + 1) {
    background-color: #9bb3a4;
    margin: 20px;
    padding: 10px 0 40px 0;
  }
}

@media screen and (min-width: 900px) {
  .day-title {
    margin-top: 0;
    color: #2c3e50;
  }

  .day-title:hover {
    color: black;
  }

  .card {
    background-color: #f8e4e3;
    margin: 23px;
    padding: 20px;
    flex-basis: 15%;
  }

  select {
    font-size: large;
    outline: none;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 #b5817f;
  }

  #delete-icon:hover {
    color: #ab4843;
  }
}
</style>
