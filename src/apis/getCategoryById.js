import httpInstance from "@/utils/http"

export const getCategoryById = (id)=>{
  return httpInstance({
    url:'/category',
    params: {
      id
    }
  })
}