<template>
  <div id="new-recipe">
    <label>Legg til ny oppskrift:</label>
    <br />

    <label>Tittel:</label>
    <textarea v-model="newRecipe.title" placeholder="Tittel" />
    <br />

    <label>Tags:</label>
    <textarea v-model="newRecipe.tags" placeholder="Tags (liste av strenger)" />
    <br />

    <label>Ingrediens:</label>
    <select v-model="selectedExistingIngredientId">
      <option value="placeholder" disabled selected>Velg ingrediens</option>
      <option
        v-for="option in ingredient"
        v-bind:value="option.id"
        v-bind:key="option.id"
      >{{ option.name }}</option>
    </select>
    <br />
    <br />

    <div id="new-ingredient">
    <label>Ny ingrediens</label>
    <textarea v-model="newIngredient.name" placeholder="ny ingrediens - navn (navn, kategori, mengde)" />
    <select v-model="newIngredient.category">
      <option value="placeholder" disabled selected>Ny ingrediens - kategori</option>
      <option
        v-for="option in possileCategories"
        v-bind:value="option"
        v-bind:key="option"
      >{{ option }}</option>
    </select>
    <textarea v-model="newIngredient.amount" placeholder="ny ingrediens - mengde" />
    </div>

    <button @click="addRecipe()">Ny Oppskrift</button>
    <p>Oppskriftstittler i en liste: {{ recipes }}</p>
  </div>
</template>

<script>
import { postRecipe, getIngredients } from "../api.js";

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
      recipes: [],
      ingredient: [],
      selectedExistingIngredientId: "placeholder",
      possileCategories: ["meat", "other", "frozen"]
    };
  },
  methods: {
    addRecipe: async function() {
      const { title, tags } = this.newRecipe;

      if (title != "") {
        this.recipes.push(title);
      }
      if (tags != "") {
        this.recipes.push(tags);
      }

      const description = title;
      const existingIngredients = [
        { id: this.selectedExistingIngredientId, amount: 1 }
      ];
      const newIngredients = [
        {
          name: this.newIngredientName,
          category: this.newIngredientCategory,
          amount: parseInt(this.newIngredientAmount)
        }
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
    }

    /*return { 
      recipes: [],

      newIngredients: [],
      existingIngredients: [],

      newRecipeDescription: "", 
      newIngredientName: "",
      newIngredientAmount: "",
      selectedExistingIngredientIndex: undefined,
      existingIngredientAmount: "",
    };
  },
  methods: {
    addRecipe: function() {
      this.recipes.push(newRecipeDescription);
      this.newRecipe = "";
    },
    addNewIngredient: function() {
      const newIngredient = {
      }
    },
    addExistingIngredient: function() {

    },*/

  },
  mounted: async function() {
    this.ingredient = await getIngredients();
  }
};
</script>


<style>

#new-recipe {
  display: flex;
  justify-content: center;
  flex-direction: column;
      display: flex;
    align-items: center;
    justify-content: center;
}

#new-ingredient {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #9BB3A4;
  padding: 10px;
}

#new-ingredient textarea{
  width: 100%;
}

textarea {
  width: 25%;
}
</style>