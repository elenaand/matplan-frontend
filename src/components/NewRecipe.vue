<template>
  <div id="new-recipe">
    <h1>Legg til ny oppskrift</h1>

    <label>Tittel:</label>
    <textarea v-model="newRecipe.title" placeholder="Tittel" />
    <br />

    <label>Tags:</label>
    <textarea v-model="newRecipe.tags" placeholder="Tags (liste av strenger)" />
    <br />

    <label>Ingrediens:</label>
    <select v-model="selectedExistingIngredientId" multiple>
      <option value="" disabled selected>Velg fra eksisterende ingredienser</option>
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
    <textarea v-model="newIngredient.name" placeholder="ny ingrediens - navn (navn, kategori, mengde)" />

    <label>Kategori</label>
    <select v-model="newIngredient.category">
      <option
        v-for="option in possileCategories"
        v-bind:value="option"
        v-bind:key="option"
      >{{ option }}</option>
    </select>

    <label>Antall/ mengde</label>
    <textarea v-model="newIngredient.amount" placeholder="ny ingrediens - mengde" />
    </div>

    <br />
    <button @click="addRecipe()">Lagre ny oppskrift</button>
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
      possileCategories: ["MEAT", "OTHER", "FROZEN"]
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
  text-align: left;
  padding: 1em;
  justify-content: center;
  flex-direction: column;
      display: flex;
}

#new-ingredient {
  display: flex;
  flex-direction: column;
  background-color: #9BB3A4;
  padding: 10px;
}

#new-ingredient textarea{
  width: 100%;
}

button {
  padding: 0.5em;
  background-color: #F8E4E3;
}

@media screen and (max-width: 900px) {
  textarea {
    width: 80%;
  }
}

@media screen and (min-width: 900px) {
  textarea {
    width:auto;
  }
}

</style>