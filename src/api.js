const BASE_URL = "https://md1wxt4y6d.execute-api.eu-west-1.amazonaws.com/dev";

export const getRecipes = () => {
  return new Promise(resolve => {
    window
      .fetch(BASE_URL + "/recipe", {
        headers: {
          Accept: "application/json"
        }
      })
      .then(res => resolve(res.json()));
  });
};
