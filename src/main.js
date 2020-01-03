import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  {
      path: '/new-recipe',
      name: 'new-recipe',
      component: () =>
        import('./components/NewRecipe.vue')
},
{
      path: '/shopping-list',
      name: 'shopping-list',
      component: () =>
        import('./components/ShoppingList.vue')
},

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App), router
}).$mount('#app')
