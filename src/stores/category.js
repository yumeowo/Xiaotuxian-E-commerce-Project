import { getCategoryAPI } from "@/apis/getCategory";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore("category",()=>{
  const categoryList = ref([]);
  const getCategory = async ()=>{
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  }

  return {
    categoryList,
    getCategory
  }
})