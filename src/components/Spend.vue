<template>
  <div>
    <header class="header">
      <img class="header__image" src="../assets/img/billgates.jpg"/>
      <h1 class="header__title">Spend Bill Gates' Money</h1>
    </header>

    <main>
      <div class="box">
        <input
          class="box__balance"
          v-mask="'$###,###,###,###'"
          :value="100000000000 - $store.state.total"/>
      </div>

      <div class="products" >
        <Card
          v-for="product in products" :key="`${product.id}`"
          :id="product.id"
          :imgSrc="product.imgSrc"
          :title="product.title"
          :price="product.price"
          :quantity="$store.state.inventory[product.id - 1].quantity"
        />
      </div>
    </main>

    <Receipt/>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 20px;

    .header__image {
      border-radius: 50%;
      width: 125px;
      margin: 10px auto 25px;
    }

    .header__title {
      font-weight: 700;
    }
  }

  .box {
    background: var(--gradient-success);
    padding: 20px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    position: sticky;
    z-index: 9999;

    .box__balance {
      font-size: 32px;
      color: #fff;
      font-weight: 700;
      background: none;
      border-width: 0;
      text-align: center;

      &:focus {
        outline: none;
        caret-color: transparent;
      }
    }
  }

  .products {
    display: grid;
    grid-gap: 10px 10px;
    grid-template-columns: repeat(3,minmax(0,1fr));
  }

  @media only screen and (max-width: 900px) {
    .products {
      grid-template-columns: repeat(2,1fr);
    }
  }

  @media only screen and (max-width: 600px) {
    .products {
      grid-template-columns: repeat(1,1fr);
    }
  }

</style>
<script>
import Card from './Card.vue';
import Receipt from './Receipt.vue';
import products from '../data/products';

export default {
  components: { Card, Receipt },
  data() {
    return {
      products,
    };
  },
};
</script>
