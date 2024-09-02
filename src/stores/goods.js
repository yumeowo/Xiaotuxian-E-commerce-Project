import { getGoodsAPI } from "@/apis/getGoods";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGetGoodsStore = defineStore("getGoods",()=>{
  const goodList = ref([]);
  const getGoods = async ()=>{
    const res = await getGoodsAPI();
    goodList.value = res.result;
  }

  return{
    goodList,
    getGoods
  }
})