import { createStore } from 'vuex';
import products from '../data/products';

const inventory = [];

for (let i = 0; i < 45; i += 1) {
  inventory[i] = {
    id: i + 1,
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
      state.inventory[id - 1].quantity += 1;
      state.total += products[id - 1].price;
    },
    sell(state, id) {
      state.inventory[id - 1].quantity -= 1;
      state.total -= products[id - 1].price;
    },
  },
  actions: {
  },
  modules: {
  },
});
