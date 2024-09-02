import { getHotAPI } from "@/apis/getHot";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGetHotStore = defineStore("getHot",()=>{
  const HotList = ref([]);
  const getHot = async ()=>{
    const res = await getHotAPI();
    HotList.value = res.result;
  }

  return {
    HotList,
    getHot
  }
})