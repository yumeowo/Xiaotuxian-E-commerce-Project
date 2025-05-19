import httpInstance from "@/utils/http.js"

export const getFindNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}