<template>
  <div>
    <h1>{{ dag }}</h1>
    <select v-model="selected">
      <option
        v-for="option in fakeRecipes"
        v-bind:value="option.value"
        v-bind:key="option.value"
      >{{ option.text }}</option>
    </select>

    <h2>{{ fakeRecipes[selected].text }}</h2>
    <ul>
      <li v-for="ingredient in fakeRecipes[selected].ingredients">{{ ingredient }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    dag: String
  },
  data: function() {
    return {
      recipe: "",
      selected: "0",
      fakeRecipes: [
        {
          text: "kjøttkaker",
          value: "0",
          ingredients: ["kjøttkaker", "brunsaus", "poteter", "gulrot"]
        },
        {
          text: "pasta",
          value: "1",
          ingredients: ["pasta", "tomatsaus", "kjøttboller"]
        },
        {
          text: "taco",
          value: "2",
          ingredients: [
            "tacolefser",
            "tacogreens",
            "taco-kjøttdeig",
            "tacokrydder",
            "tacochips"
          ]
        },
        {
          text: "enchiladas",
          value: "3",
          ingredients: ["enchiladaskit", "ost"]
        },
        {
          text: "tochiladas",
          value: "4",
          ingredients: ["enchiladaskit", "enchiladaskit", "ost", "ost"]
        },
        {
          text: "laks med søtpotetmos",
          value: "5",
          ingredients: ["laks", "søtpotet", "mos"]
        }
      ]
    };
  }
};
</script>

<style>
div {
  padding: 10px;
}
</style>
