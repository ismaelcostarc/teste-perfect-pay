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
          :imgSrc="product.imgSrc"
          :title="product.title"
          :price="product.price"
          :quantity="$store.state.inventory[product.id - 1].quantity"
        />
      </div>
    </main>

    <footer class="receipt">
      <h1 class="receipt__title">Your Receipt</h1>
      <div class="receipt__divider" />
      <div class="receipt__total">
        <span>TOTAL</span>
        <input v-mask="'$###,###,###,###'" :value="$store.state.total"/>
      </div>
    </footer>
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
    background: linear-gradient(180deg,#2ecc71,#1abc9c);
    padding: 20px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;

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

  .receipt {
    max-width: 100%;
    font-size: 18px;
    padding: 15px 15px 30px;
    margin: 10px 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    .receipt__title {
      font-size: 28px;
      padding: 15px 15px 25px;
      font-weight: 700;
    }

    .receipt__divider {
      height: 1px;
      background-color: #000;
      width: 300px;
      margin-bottom: 15px;
    }

    .receipt__total {
      display: flex;
      width: 300px;
      justify-content: space-between;
      font-weight: bold;

      & > :last-child {
        color: #24c486;
        border-width: 0;
        text-align: end;
        font-weight: inherit;
        font-size: 1rem;

        &:focus {
          outline: none;
          caret-color: transparent;
        }
      }
    }
  }
</style>
<script>
import Card from './Card.vue';
import products from '../data/products';

export default {
  components: { Card },
  data() {
    return {
      products,
    };
  },
};
</script>
