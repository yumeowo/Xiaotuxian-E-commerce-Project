import httpInstance from "@/utils/http"

export const getFindNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}