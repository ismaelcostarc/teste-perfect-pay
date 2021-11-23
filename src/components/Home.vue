<template>
  <div>
    <nav class="n">
      <div class="n__container">
        <h1 class="n__title">Neal.fun</h1>
      </div>
    </nav>
    <main class="m">
      <div class="m__container">
        <Spend/>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .n {
    height: 94px;
    display: flex;
    justify-content: center;
    align-items: center;

    .n__title {
      font-size: 30px;
      font-weight: 700;
    }
  }

  .m {
    background-color: #f1f2f6;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
  }

  .n__container, .m__container {
    width: 1000px;
  }
</style>

<script>
import Spend from './Spend.vue';

export default {
  data() {
    return {

    };
  },
  components: { Spend },
};
</script>
