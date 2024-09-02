import httpInstance from "@/utils/http"

export const getGoodsAPI = ()=>{
  return httpInstance({
    url: '/home/goods'
  })
}