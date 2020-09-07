/**
 * 分页信息的结构
 */
export interface Page<T> {
    /**
     * 当前的页码
     */
    currentPage: number;
    /**
     * 分页内容
     */
    list: T[];
    /**
     * 每页数量
     */
    pageSize: number;
    /**
     * 总页数
     */
    totalPage: number;
    /**
     * 总记录数
     */
    total: number;
}

/**
 * 分页查询参数
 */
export class Pager {
    /**
     * 页
     */
    public page: number;
    /**
     * 每页大小
     */
    public size: number;

    constructor(page: number = 0, size: number = 10) {
        this.page = page;
        this.size = size;
    }
}
