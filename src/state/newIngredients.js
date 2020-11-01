import { ref } from 'vue'

const newIngredients = ref([])

const addNewIngredient = (newIngredient) => newIngredients.value.push(newIngredient)

export { newIngredients, addNewIngredient }