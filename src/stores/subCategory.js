import { getSubCateById } from "@/apis/getSubCateById";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSubCategoryStore = defineStore("subCategory",()=>{
  const subCategoryData = ref([]);
  const getSubCategoryData = async (id)=>{
    const res = await getSubCateById(id);
    subCategoryData.value = res.result;
  }
  return {
    subCategoryData,
    getSubCategoryData
  }
})