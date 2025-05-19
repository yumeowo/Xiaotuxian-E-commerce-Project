/**
 * @description: 获取二级商品数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
**/

import httpInstance from "@/utils/http"

export const getSubCategoryAPI = (data: API.SubCategoryParams): Promise<API.Response<API.SubCategoryResult>> => {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}