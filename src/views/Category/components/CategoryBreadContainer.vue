<script setup>
import { useCategoryStore } from '@/stores/category';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const { categoryData } = storeToRefs(categoryStore);
onMounted(()=>{
  categoryStore.getCurrentCategory(route);
})
watch(()=>route.params.id,()=>{
  categoryStore.getCurrentCategory(route);
})
</script>

<template>
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.bread-container {
  padding: 25px 0;
}
</style>