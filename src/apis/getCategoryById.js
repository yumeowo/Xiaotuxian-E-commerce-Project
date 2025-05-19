import httpInstance from "@/utils/http.js"

export const getCategoryById = (id)=>{
  return httpInstance({
    url:'/category',
    params: {
      id
    }
  })
}