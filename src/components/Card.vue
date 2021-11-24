<template>
  <div class="card">
    <img class="card__image" :src="require(`@/assets/img/${imgSrc}`)"/>
    <h1 class="card__title">{{title}}</h1>
    <input class="card__price" v-mask="'$###,###,###,###'" :value="price" />
    <div class="card__btn-group">
      <button
        class="card__btn"
        :class="{'card__btn--danger': quantity !== 0}"
        @click="quantity !== 0 && $store.commit('sell', id)">
        Sell
      </button>
      <input class="card__input" :value="quantity"/>
      <button class="card__btn card__btn--primary" @click="$store.commit('buy', id)">Buy</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  max-width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: 18px;
  padding: 20px 15px;
  width: 100%;

  .card__title {
    font-size: 22px;
    font-weight: 700;
  }

  .card__price {
    font-size: 20px;
    color: var(--main-color);
    border-width: 0;
    text-align: center;

    &:focus {
      outline: none;
      caret-color: transparent;
    }
  }

  .card__image {
    margin: 15px auto;
    height: 120px;
  }

  .card__btn-group {
    font-size: 20px;
    font-weight: 700;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px 10px;
    margin-top: 25px;

    .card__btn {
      cursor: pointer;
      padding: 10px 12px;
      border-radius: 3px;
      border: none;
      font-weight: 700;
    }

    .card__btn--primary {
      background: var(--gradient-success);
      color: #fff;
    }

    .card__btn--danger {
      background: var(--gradient-danger);
      color: #fff;
    }

    .card__input {
      font-size: 16px;
      text-align: center;
      padding: 9px 12px;
      border-radius: 3px;
      border: 1px solid #b2bec3;
      color: #333;
      font-family: Roboto,sans-serif;
      width: 100%;
    }
  }
}
</style>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>
