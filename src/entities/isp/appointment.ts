/**
 * 预约
 */
import {BaseEntity} from '@/entities/entity';

export interface Appointment extends BaseEntity {
    /**
     * 取消原因
     */
    cancelReason: string;
    /**
     * 订单号
     */
    code: string;
    /**
     * 处理人
     */
    handler: number;
    /**
     * 运营商
     */
    isp: number;
    /**
     * 学生ID
     */
    studentId: number;
}

export interface AppointmentInfo {
    appointment: Appointment;
}
