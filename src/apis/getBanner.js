import httpInstance from "@/utils/http";

export function getBannerAPI(params = {distributionSite: '1'}) {
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite: params.distributionSite
    }
  })
}