<template>
  <div id="new-ingredient">
    <h2>Ny ingrediens</h2>

    <label>Navn på ingrediens</label>
    <textarea
      v-model="newIngredient.name"
      placeholder="ny ingrediens - navn (navn, kategori, mengde)"
    />

    <label>Kategori</label>
    <select v-model="newIngredient.category">
      <option
        v-for="option in possibleCategories"
        v-bind:value="option"
        v-bind:key="option"
      >{{ option }}</option>
    </select>

    <label>Antall/ mengde</label>
    <input
      type="number"
      min="1"
      name="amount"
      v-model="newIngredient.amount"
      placeholder="ny ingrediens - mengde"
    />
  </div>
</template>

<script>
import { newIngredients } from "../state/newIngredients"

export default {
  name: "NewIngredient",
  data: function () {
    return {
      possibleCategories: ["MEAT", "OTHER", "VEGETABLES", "FROZEN"],
    };
  },
  methods: {
  },
  props: {
    ingredientIndex: Number,
  },
  setup(props) {
    return {
      newIngredient: newIngredients.value[props.ingredientIndex],
    }
  }
};
</script>


<style>
#new-recipe {
  display: flex;
  text-align: left;
  padding: 1em;
  justify-content: center;
  flex-direction: column;
  display: flex;
}

#new-ingredient {
  display: flex;
  flex-direction: column;
  background-color: #9bb3a4;
  padding: 10px;
}

#new-ingredient textarea {
  width: 100%;
}

button {
  padding: 0.5em;
  background-color: #f8e4e3;
}

@media screen and (max-width: 900px) {
  textarea {
    width: 80%;
  }
}

@media screen and (min-width: 900px) {
  textarea {
    width: auto;
  }
}
</style>
