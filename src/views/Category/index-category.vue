<script setup>
import CategoryBanner from './components/CategoryBanner.vue';
import CategoryBreadContainer from './components/CategoryBreadContainer.vue';
import CategoryGoods from './components/CategoryGoods.vue';
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <CategoryBreadContainer />
      <CategoryBanner />
      <CategoryGoods />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>