<script lang="ts" setup>
import { getSubCategoryAPI } from '@/apis/getSubCategory.ts';
import GoodsItem from '@/views/Home/components/GoodsItem.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const goodsList = ref<API.SubCategoryResult['items']>([]);
const httpData = ref<API.SubCategoryParams>({
  categoryId: route.params.id[0],
  page: 1,
  pageSize: 20,
  sortField: 'publishTime'
});
const getGoods = async (data: API.SubCategoryParams)=>{
  const res = await getSubCategoryAPI(data);
  goodsList.value = [
      ...goodsList.value,
      ...res.result.items
  ];
  if(res.result.items.length < 20) {
    isGetGoodsDisabled.value = true;
  }
};
let isGetGoodsDisabled = ref(false);
const addGoods = async ()=>{
  httpData.value.page++;
  await getGoods(httpData.value);
}
onMounted(() => getGoods(httpData.value));
</script>

<template>
  <div class="sub-container">
    <el-tabs v-model="httpData.sortField" @tab-change="() => getGoods(httpData)">
      <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
      <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
      <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
    </el-tabs>
    <div
        v-infinite-scroll="addGoods"
        :infinite-scroll-disabled="isGetGoodsDisabled"
        class="body">
        <!-- 商品列表-->
        <GoodsItem v-for="good in goodsList" :good="good" :key="good.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

}
</style>