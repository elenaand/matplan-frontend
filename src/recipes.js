import { ref, computed } from 'vue'

const recipes = ref([])

const addRecipeToDinnerList = (recipe) => recipes.value.push(recipe)

// bør vi hente ut alle ingredienser i oppskriften her?
const dinnerList = recipes.value

export {addRecipeToDinnerList, dinnerList}