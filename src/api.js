const BASE_URL = "http://localhost:8080";

export const getRecipes = () => {
  return new Promise((resolve) => {
    window
      .fetch(BASE_URL + "/recipe", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => resolve(res.json()));
  });
};

export const getIngredients = () => {
  return new Promise((resolve) => {
    window
      .fetch(BASE_URL + "/ingredient", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => resolve(res.json()));
  });
};

// Example body for postRecipe
/*{
  "description": "Test rett nummer 1",
  "tags": [],
  "newIngredients": [
		{
			"name": "pasta",
			"category": [MEAT, FROZEN, VEGETABLES, OTHER],
			"amount": 1
		}
	],
	"existingIngredients": [
		{
			"id": "1",
			"amount": 2
		}
	]
}*/
export const postRecipe = (
  name,
  tags,
) => {
  const data = {
    name: name,
    tags: [tags],
  };

  return new Promise((resolve) => {
    window
      .fetch(BASE_URL + "/recipe", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify(data),
      })
      .then((res) => resolve(res.text()));
  });
};

export const postIngredient = (name, category) => {
  const data = {
    name: name,
    category: category
  };

  return new Promise((resolve) => {
    window.fetch(BASE_URL + "/ingredient", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    }).then((res) => resolve(res.text()));
  })
}

export const postIngredientForRecipe = (recipeId, ingredientId, amount) => {
  const data = {
    recipeId: recipeId, 
    ingredientId: ingredientId, 
    amount: amount,
  };

  return new Promise((resolve) => {
    window.fetch(BASE_URL + "/ingredientForRecipe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    }).then((res) => resolve(res.text()));
  })
}
