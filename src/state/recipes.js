import { ref } from 'vue'

const recipes = ref([])

const addRecipes = (newRecipes) => recipes.value.push(...newRecipes)

export { recipes, addRecipes }