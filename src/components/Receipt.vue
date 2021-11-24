<template>
  <footer class="receipt">
    <h1 class="receipt__title">Your Receipt</h1>
    <div v-for="item in $store.state.inventory" :key="item.id">
      <div class="receipt__line" v-if="item.quantity > 0">
        <div>{{ products[item.id - 1].title}}</div>
        <div>x{{ item.quantity }}</div>
        <div>${{ products[item.id - 1].price * item.quantity }}</div>
      </div>
    </div>
    <div class="receipt__divider" />
    <div class="receipt__total">
      <span>TOTAL</span>
      <input v-mask="'$###,###,###,###'" :value="$store.state.total"/>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
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
        color: var(--main-color);
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

    .receipt__line {
      width: 300px;
      display: flex;
      justify-content: space-between;

      > *:not(:first-child) {
        flex-basis: 25%;
        text-align: end;
      }

      > :first-child {
        flex-basis: 50%;
      }

      > :last-child {
        font-weight: bold;
        color: var(--main-color);
      }
    }
  }
</style>
<script>
import products from '../data/products';

export default {
  data() {
    return {
      products,
    };
  },
};
</script>
