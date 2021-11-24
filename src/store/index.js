import { createStore } from 'vuex';
import products from '../data/products';

const inventory = [];

for (let i = 0; i < 45; i += 1) {
  inventory[i] = {
    id: i,
    quantity: 0,
  };
}

export default createStore({
  state: {
    total: 0,
    inventory,
  },
  mutations: {
    buy(state, id) {
      state.inventory[id].quantity += 1;
      state.total += products[id].price;
    },
    sell(state, id) {
      state.inventory[id].quantity += 1;
      state.total -= products[id].price;
    },
  },
  actions: {
  },
  modules: {
  },
});
