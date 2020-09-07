import {Component} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import VAppointment from './components/appointment/appointment.vue';
import {AppointmentInfo} from '@/entities/isp/appointment';
import appointmentService, {AppointmentService} from '@/services/isp/appointment';
import ListMixin from '../../mixin/list.mixin';

/**
 * 预约列表
 */
@Component({name: 'AppointmentList', components: {Appointment: VAppointment}})
export default class extends mixins<ListMixin<AppointmentInfo, AppointmentService>>(ListMixin) {
    public created() {
        this.service = appointmentService;
    }
}
