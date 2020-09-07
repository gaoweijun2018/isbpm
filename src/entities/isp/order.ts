import { BaseEntity } from '@/entities/entity';
import {Student} from "@/entities/isp/student";

/**
 * 订单
 */
export default interface Order extends BaseEntity {
    /**
     * 订单号
     */
    code: string;

    /**
     * 学生名字
     */
    stuName: string;

    /**
     * 学生手机
     */
    stuPhone: string;

    /**
     * 学生学号
     */
    stuCode: string;

    /**
     * 学生地址
     */
    stuAddress: string;

    appointmentId: number;

    /**
     * 工程师id
     */
    handler: number;

    /**
     * 预约处理人名称
     */
    ispSellerName: string;

    /**
     * 预约处理人手机号
     */
    ispSellerPhone: string;
}

/**
 * 订单详情
 */
export interface OrderInfo {
    /**
     * 订单
     */
    order: Order;
    /**
     * 学生
     */
    student: Student;
}
