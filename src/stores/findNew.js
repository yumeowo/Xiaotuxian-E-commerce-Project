import { getFindNewAPI } from "@/apis/getFindNew";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFindNewStore = defineStore("findNew",()=>{
  const findNewList = ref([]);
  const getFindNew = async ()=>{
    const res = await getFindNewAPI();
    findNewList.value = res.result;
  }

  return {
    findNewList,
    getFindNew
  }
})