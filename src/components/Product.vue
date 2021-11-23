<template>
  <div class="card">
    <img class="card__image" :src="require(`@/${imgSrc}`)"/>
    <h1 class="card__title">{{title}}</h1>
    <div class="card__price">${{price}}</div>
    <div class="card__btn-group">
      <button class="card__btn">Sell</button>
      <input class="card__input" :value="quantity"/>
      <button class="card__btn card__btn--primary">Buy</button>
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
    color: #24c486;
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
      background: linear-gradient(180deg,#2ecc71,#1abc9c);
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
