<template>
  <div id="new-recipe">
    <label>Legg til ny oppskrift:</label>
    <br />
    
    <label>Tittel: </Label>
    <textarea v-model="newRecipe.title" placeholder="Tittel" />
    <br />

    <label>Tags: </label>
    <textarea v-model="newRecipe.tags" placeholder="Tags (liste av strenger)" />
    <br />

    <label>Ingrediens:</label>
    <select v-model="selectedExistingIngredientId">
      <option value="placeholder" disabled selected>Velg ingrediens</option>
      <option
        v-for="option in ingredient"
        v-bind:value="option.id"
        v-bind:key="option.id"
        >{{ option.name }}</option
      >
    </select>
    <br />
    <br />

    <label>Ny ingrediens</label>
    <textarea v-model="newIngredient" placeholder="ny ingrediens (navn, kategori, mengde)" />
    
    <button @click="addRecipe()">Ny Oppskrift</button>
    <p>Oppskriftstittler i en liste: {{ recipes }}</p>
  </div>
</template>

<script>
import { postRecipe, getIngredients } from '../api.js';

export default {
  name: "NewRecipe",
  data: function() {
    return { 
      newRecipe: {
        title: "", 
        tags: "",
      }, 
      newIngredient: "",
      recipes: [],
      ingredient: [],
      selectedExistingIngredientId: "placeholder",
    };
  },
  methods: {
    addRecipe: async function() {
      const {title, tags} = this.newRecipe;

      if (title != "") {
        this.recipes.push(title);
      }
      if (tags != "") {
        this.recipes.push(tags);
      }

      const description = title;
      const existingIngredients = [
        {id: this.selectedExistingIngredientId, amount: 1} 
      ];
      const newIngredients = [
        {
          name: this.newIngredient.split(",")[0],
          category: this.newIngredient.split(",")[1].trim(),
          amount: parseInt(this.newIngredient.split(",")[2]),
        }
      ]

      await postRecipe(description, tags.split(","), newIngredients, existingIngredients)

      this.newRecipe = {
        title: "",
        tags: "",
      };
    },

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

#new-recipe{
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

textarea {
  width: 20%
}

</style>