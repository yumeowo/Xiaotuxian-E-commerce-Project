import { getCategoryAPI } from "@/apis/getCategory";
import { getCategoryById } from "@/apis/getCategoryById";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore("category",()=>{
  const categoryList = ref([]);
  const getCategory = async ()=>{
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  };
  const categoryData = ref([]);
  const getCurrentCategory = async (id) => {
    const res = await getCategoryById(id);
    categoryData.value = res.result;
  }
  return {
    categoryList,
    getCategory,
    categoryData,
    getCurrentCategory
  }
})