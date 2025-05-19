import httpInstance from "@/utils/http.js"

export const getSubCateById = (id)=>{
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}