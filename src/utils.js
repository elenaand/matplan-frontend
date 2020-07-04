export const createNewIngredientObject = (name, category, amount) => ({
  name,
  category,
  amount,
});

export const createExistingIngredientObject = (id, amount) => ({
  id,
  amount,
});
