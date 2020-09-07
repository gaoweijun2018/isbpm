import { BaseEntity } from '@/entities/entity';

export interface Student extends BaseEntity {
    /**
     * '学号' 对应企业微信userid
     */
    code: string;

    /**
     * '名字'
     */
    name: string;

    /**
     * '手机号'
     */
    phone: string;

    /**
     * '校内住址'
     */
    address: string;
}
