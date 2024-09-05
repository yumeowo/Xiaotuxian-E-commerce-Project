<script setup>

import { getCategoryById } from '@/apis/getCategoryById';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const categoryData = ref({});
const route = useRoute();
const getCategory = async () => {
  const res = await getCategoryById(route.params.id);
  categoryData.value = res.result;
}
onMounted(getCategory)
watch(()=>route.params.id,getCategory)
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