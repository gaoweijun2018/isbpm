import BaseService from '@/services/base.service';
import {Appointment} from '@/entities/isp/appointment';
import {Pager} from '@/entities/paging';
import ispClient from '@/clients/isp';

/**
 * 预约服务
 */
export class AppointmentService extends BaseService<Appointment, any, Appointment, Pager> {

}

const appointmentService = new AppointmentService('', ispClient);
export default appointmentService;
