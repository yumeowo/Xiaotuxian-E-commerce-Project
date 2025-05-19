import httpInstance from "@/utils/http.js";

export function getBannerAPI(params = {distributionSite: '1'}) {
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite: params.distributionSite
    }
  })
}