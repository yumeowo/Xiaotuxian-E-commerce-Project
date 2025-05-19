import httpInstance from "@/utils/http.js"

export const getGoodsAPI = ()=>{
  return httpInstance({
    url: '/home/goods'
  })
}