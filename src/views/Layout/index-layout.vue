<script setup>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeaderSticky from './components/LayoutHeader-sticky.vue';
import { useCategoryStore } from '@/stores/category';
import { onMounted, provide } from 'vue';
import { storeToRefs } from 'pinia';

const categoryStore = useCategoryStore();
const { categoryList } = storeToRefs(categoryStore);
onMounted(() => {
  categoryStore.getCategory();
});

// 把list内容传给所有子组件
provide('category-list',categoryList);
</script>

<template>
  <LayoutHeaderSticky />
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <RouterView />
  <LayoutFooter />
</template>