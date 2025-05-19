declare namespace API {
    // 定义请求参数类型
    interface SubCategoryParams {
        categoryId: string;
        page: number;
        pageSize: number;
        sortField: 'publishTime' | 'orderNum' | 'evaluateNum';
    }
}