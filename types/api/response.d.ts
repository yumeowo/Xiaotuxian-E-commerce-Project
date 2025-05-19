declare namespace API {
    interface Response<T = never> {
        code: string;
        msg: string;
        result: T;
    }
    interface SubCategoryResult {
        counts: number;
        pageSize: number;
        pages: number;
        page: number;
        items: Array<{
            id: string,
            name: string,
            desc: string,
            price: string,
            picture: string,
            orderNum: number
        }>;
    }

}