import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import NewRecipe from "./components/NewRecipe.vue"
import ShoppingList from "./components/ShoppingList.vue"

const routes = [
  {
    path: "/new-recipe",
    name: "new-recipe",
    component: NewRecipe,
  },
  {
    path: "/shopping-list",
    name: "shopping-list",
    component: ShoppingList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount("#app");
