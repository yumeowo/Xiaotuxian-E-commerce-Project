<script setup>
import { useSubCategoryStore } from '@/stores/subCategory';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

// 获取二级分类数据
const route = useRoute();
const subCategoryStore = useSubCategoryStore();
const { subCategoryData } = storeToRefs(subCategoryStore);
onMounted(()=>{
  subCategoryStore.getSubCategoryData(route.params.id);
});
watch(()=>route.params.id,()=>{
  subCategoryStore.getSubCategoryData(route.params.id);
})
</script>

<template>
  <!-- 面包屑 -->
  <div class="bread-container">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: `/category/${subCategoryData.parentId}` }">{{ subCategoryData.parentName }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ subCategoryData.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}
</style>