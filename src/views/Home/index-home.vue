<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomePanel from './components/HomePanel.vue';
import HomeProduct from './components/HomeProduct.vue';


</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />

  <HomePanel title="新鲜好物" sub-title="好物推荐 商品...">
    <div>
      测试
    </div>
  </HomePanel>
  <HomePanel title="人气推荐">

  </HomePanel>
</template>