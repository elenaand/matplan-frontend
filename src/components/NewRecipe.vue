<template>
  <div id="new-recipe">
    <h1>Legg til ny oppskrift</h1>

    <label>Tittel:</label>
    <input type="text" name="title" v-model="newRecipe.name" placeholder="Tittel" />
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

    <button id="add-ingredient" @click.prevent="incrementCounter()">Legg til ny ingrediens</button>
    <ul id="new-ingredients-list">
      <li v-for="n in newIngredients.length" v-bind:key="n">
        <new-ingredient :ingredientIndex="n-1" />
      </li>
    </ul>
    <br />
    <button id="save-recipe" @click="addRecipe()">Lagre ny oppskrift</button>
    {{ statusSaving ? "lagrer..." : "" }}
  </div>
</template>

<script>
import {
  postRecipe,
  getIngredients,
  postIngredient,
  postIngredientForRecipe,
} from "../api.js";
import NewIngredient from "./NewIngredient"
import { newIngredients, addNewIngredient } from "../state/newIngredients"

export default {
  name: "NewRecipe",
  components: {
    NewIngredient,
  },
  data: function () {
    return {
      newRecipe: {
        name: "",
        tags: "",
      },
      ingredient: [],
      selectedExistingIngredientIds: [],
      statusSaving: false,
    };
  },
  methods: {
    addRecipe: async function () {
      console.log(this.newIngredients) // eslint-disable-line
      this.statusSaving = true;

      const recipeId = await postRecipe(
        this.newRecipe.name,
        this.newRecipe.tags
      );
      
      this.newIngredients.forEach(async (newIngredient) => {
        const ingredientId = await postIngredient(
          newIngredient.name,
          newIngredient.category
        );

        await postIngredientForRecipe(
          recipeId,
          ingredientId,
          newIngredient.amount
        );
      })

      this.selectedExistingIngredientIds.forEach((element) =>
        postIngredientForRecipe(recipeId, element, 1)
      );
      this.statusSaving = false;
    },
    incrementCounter: function() {
      addNewIngredient({
        name: "",
        category: "placeholder",
        amount: "",
      });
    }
  },
  mounted: async function () {
    this.ingredient = await getIngredients();
  },
  setup() {
    return {
      newIngredients: newIngredients.value,
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

button#add-ingredient {
  margin: 0.5em 0 0.5em 0
}

button#save-recipe {
  margin-top: 0.5em
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
