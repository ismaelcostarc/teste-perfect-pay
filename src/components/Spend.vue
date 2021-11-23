<template>
  <div>
    <header class="header">
      <img class="header__image" src="../assets/img/billgates.jpg"/>
      <h1 class="header__title">Spend Bill Gates' Money</h1>
    </header>

    <main>
      <div class="box">
        <input class="box__balance" v-mask="'$###,###,###,###'" :value="balance"/>
      </div>
    </main>
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
</style>
<script>
export default {
  data() {
    return {
      balance: 100000000000,
    };
  },
};
</script>
