const BASE_URL = "https://md1wxt4y6d.execute-api.eu-west-1.amazonaws.com/dev";

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
  description,
  tags,
  newIngredients,
  existingIngredients
) => {
  const data = {
    description: description,
    tags: tags,
    newIngredients: newIngredients,
    existingIngredients: existingIngredients,
  };

  return new Promise((resolve) => {
    window
      .fetch(BASE_URL + "/recipe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => resolve(res.json()));
  });
};
