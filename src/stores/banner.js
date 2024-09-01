import { getBannerAPI } from "@/apis/getBanner";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerStore = defineStore("banner",()=>{
  const bannerList = ref([]);
  const getBanner = async ()=>{
    const res = await getBannerAPI();
    bannerList.value = res.result;
  }

  return {
    bannerList,
    getBanner
  }
})