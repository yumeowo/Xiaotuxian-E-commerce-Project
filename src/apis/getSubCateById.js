import httpInstance from "@/utils/http"

export const getSubCateById = (id)=>{
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}