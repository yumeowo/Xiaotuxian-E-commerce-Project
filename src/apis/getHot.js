import httpInstance from "@/utils/http.js"

export const getHotAPI = () => {
  return  httpInstance({
    url:'/home/hot'
  })
}