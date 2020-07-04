<template>
  <div id="new-recipe">
    <h1>Legg til ny oppskrift</h1>

    <label>Tittel:</label>
    <input type="text" name="title" v-model="newRecipe.title" placeholder="Tittel" />
    <br />

    <label>Tags:</label>
    <textarea v-model="newRecipe.tags" placeholder="Tags (liste av strenger)" />
    <br />

    <label>Ingrediens:</label>
    <select v-model="selectedExistingIngredientIds" multiple>
      <option value disabled selected>Velg fra eksisterende ingredienser</option>
      <option
        v-for="option in ingredient"
        v-bind:value="option.id"
        v-bind:key="option.id"
      >{{ option.name }}</option>
    </select>
    <br />
    <br />

    <div id="new-ingredient">
      <h2>Ny ingrediens</h2>

      <label>Navn på ingrediens</label>
      <textarea
        type="text"
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

    <br />
    <button @click="addRecipe()">Lagre ny oppskrift</button>
    {{ statusSaving ? "lagrer..." : "" }}
  </div>
</template>

<script>
import { postRecipe, getIngredients } from "../api.js";
import {
  createNewIngredientObject,
  createExistingIngredientObject
} from "../utils.js";

export default {
  name: "NewRecipe",
  data: function() {
    return {
      newRecipe: {
        title: "",
        tags: ""
      },
      newIngredient: {
        name: "",
        category: "placeholder",
        amount: ""
      },
      ingredient: [],
      selectedExistingIngredientIds: "placeholder",
      statusSaving: false,
      possibleCategories: ["MEAT", "OTHER", "FROZEN"]
    };
  },
  methods: {
    addRecipe: async function() {
      const { title, tags } = this.newRecipe;

      this.statusSaving = true;

      const description = title;
      const existingIngredients = this.selectedExistingIngredientIds.map(id =>
        createExistingIngredientObject(id, 1)
      );

      const newIngredients = [
        createNewIngredientObject(
          this.newIngredient.name,
          this.newIngredient.category,
          parseInt(this.newIngredient.amount)
        )
      ];

      await postRecipe(
        description,
        tags.split(","),
        newIngredients,
        existingIngredients
      );

      this.newRecipe = {
        title: "",
        tags: ""
      };

      this.statusSaving = false;
    }
  },
  mounted: async function() {
    this.ingredient = await getIngredients();
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
