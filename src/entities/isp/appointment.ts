/**
 * 预约
 */
import {BaseEntity} from '@/entities/entity';
import {Student} from "@/entities/isp/student";

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
    /**
     * 预约
     */
    appointment: Appointment;
    /**
     * 学生
     */
    student: Student;
}
