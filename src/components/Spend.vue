<template>
  <main>
    <header class="header">
      <img class="header__image" src="../assets/img/billgates.jpg"/>
      <h1 class="header__title">Spend Bill Gates' Money</h1>
    </header>
  </main>
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
    }
  }
</style>
<script>
export default {
  data() {
    return {

    };
  },
};
</script>
