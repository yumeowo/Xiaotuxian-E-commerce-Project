import { getBannerAPI } from "@/apis/getBanner";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannerStore = defineStore("banner",()=>{
  const bannerList = ref([]);
  const getBanner = async (params = {distributionSite: '1'})=>{
    const res = await getBannerAPI(params.distributionSite);
    bannerList.value = res.result;
  }

  return {
    bannerList,
    getBanner
  }
})