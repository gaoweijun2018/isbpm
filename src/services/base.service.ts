import { AxiosInstance } from 'axios';
import { BaseEntity } from '@/entities/entity';
import { Page } from '@/entities/paging';

/**
 * T: entity
 * F: form
 * I: info
 * C: conditions
 */
export default class BaseService<T extends BaseEntity, F, I, C> {
    /**
     * 请求的路径
     */
    public path: string;
    /**
     * 请求的客户端
     */
    public client: AxiosInstance;
    constructor(path: string, client: AxiosInstance) {
        this.path = path;
        this.client = client;
    }
    /**
     * 主页数据
     */
    public async paging(params: C): Promise<Page<I>> {
        return this.client.get(`${this.path }/paging`, { params });
    }
    /**
     * 查询所有数据
     */
    public find(): Promise<T> {
        return this.client.get(`${this.path}/all`);
    }
    /**
     * 查询所有数据
     */
    public findInfo(): Promise<I> {
        return this.client.get(`${this.path}/info/all`);
    }
    /**
     * 请求info数据
     */
    public findInfoById(id: number): Promise<I> {
        return this.client.get(`${this.path}/info/${id}`);
    }
    /**
     * 获取实例信息
     * @param id
     */
    public findById(id: number): Promise<T> {
        return this.client.get(`${this.path}/${id}`);
    }
    /**
     * 创建实例
     * @param form
     */
    public create(form: F) {
        return this.client.post(this.path, form);
    }
    /**
     * 更新实例
     * @param id
     * @param form
     */
    public update(id: number, form: F) {
        return this.client.put(`${this.path}/${id}`, form);
    }
    /**
     * 删除实例
     * @param id
     */
    public delete(id: number) {
        return this.client.delete(`${this.path}/${id}`);
    }
}
